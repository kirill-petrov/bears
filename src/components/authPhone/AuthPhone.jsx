import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { auth } from '../../firebase.js';
import { useDispatch } from 'react-redux';
import { authPhoneNumber } from '../../redux/reducers/userReducer';

const generateRecaptchaVerifier = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    'recaptcha-container',
    {
      size: 'invisible',
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // onSignInSubmit();
        // console.log('callback: (response) => {...');
        console.log('reCAPTCHA solved, allow signInWithPhoneNumber', response);
      },
    },
    auth
  );
};

const isValidNumber = new RegExp(/^\+7\d{10}$/);

export default function FormDialog({ isOpen, setOpen }) {
  const [phone, setPhone] = useState('+79111781198');
  const [phoneError, setPhoneError] = useState(false);
  const [codeError, setCodeError] = useState(false);
  const [expand, setExpand] = useState(false);
  const [OTP, setOTP] = useState('');
  const dispatch = useDispatch();

  const handleClose = () => setOpen(false);

  useEffect(() => {
    isValidNumber.test(phone) && setPhoneError(false);
  }, [phone]);

  const requestOTP = () => {
    console.log('requestOTP >> isValidNumber', isValidNumber.test(phone));
    if (isValidNumber.test(phone)) {
      setExpand(true);
      generateRecaptchaVerifier();
      const appVerifier = window.recaptchaVerifier;
      console.log('appVerifier>', appVerifier);
      signInWithPhoneNumber(auth, phone, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      setPhoneError(true);
    }
  };

  useEffect(() => {
    if (OTP.length === 6) {
      console.log('verifyOTP');
      const confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(OTP)
        .then((result) => {
          console.log('User signed in successfully', result.user);
          // todo: isAuth - true relink to reports
          onAuthStateChanged(auth, (user) => {
            if (user) dispatch(authPhoneNumber(user.uid));
            console.log(user);
          });
          console.log('authPhoneNumber successful');
        })
        .catch((error) => {
          // todo: обработку с алертом
          setCodeError(error.message);
        });
    }
  }, [OTP, dispatch]);

  return (
    <div className="FormDialog">
      <Dialog open={isOpen} onClose={handleClose}>
        {!expand ? (
          <>
            <DialogTitle>Войти по номеру</DialogTitle>
            <DialogContent>
              <DialogContentText mb={2}>
                Введите номер телефона в&nbsp;международном формате, чтобы
                подтвердить свою личность.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                type="text"
                label="Введите номер"
                fullWidth
                defaultValue={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={phoneError}
                helperText={
                  phoneError ? `Допустимый формат +79009009090` : null
                }
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Закрыть</Button>
              <Button onClick={requestOTP}>Получить код</Button>
            </DialogActions>
          </>
        ) : (
          <>
            <DialogContent>
              <DialogContentText mb={2}>
                На&nbsp;номер {phone} отправлен 6-значный код подтверждения
              </DialogContentText>
              <TextField
                margin="dense"
                id="checkOTP"
                type="text"
                label="Введите код из SMS"
                fullWidth
                onChange={(e) => setOTP(e.target.value)}
                error={codeError}
                helperText={codeError ? codeError : null}
                sx={{ mb: '20px' }}
              />
            </DialogContent>
          </>
        )}
      </Dialog>
      <div id="recaptcha-container"></div>
    </div>
  );
}
