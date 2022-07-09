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
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import {
  auth,
  checkExistingUser,
  createUser,
  getUserRole,
} from '../../firebase.js';
import { useDispatch } from 'react-redux';
import { authPhoneNumber } from '../../redux/reducers/userReducer';

const generateRecaptchaVerifier = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    'recaptcha-container',
    {
      size: 'invisible',
      callback: (response) => {
        console.log('reCAPTCHA solved, allow signInWithPhoneNumber');
      },
    },
    auth
  );
};

// const validateNumber = new RegExp(/^\+7\d{10}$/);
const validateNumber = new RegExp(/^\+1\d{10}$/);

export default function FormDialog({ isOpen, setOpen }) {
  const [phone, setPhone] = useState('+16505553434');
  const [phoneError, setPhoneError] = useState(false);
  const [codeError, setCodeError] = useState(false);
  const [expand, setExpand] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const dispatch = useDispatch();

  const handleClose = () => setOpen(false);

  useEffect(() => {
    validateNumber.test(phone) && setPhoneError(false);
  }, [phone]);

  const requestVerificationCode = () => {
    if (validateNumber.test(phone)) {
      setExpand(true);
      generateRecaptchaVerifier();
      signInWithPhoneNumber(auth, phone, window.recaptchaVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          console.log('Catches error:signInWithPhoneNumber ' + error.message);
        });
    } else {
      setPhoneError(true);
    }
  };

  useEffect(() => {
    if (verificationCode.length === 6) {
      const confirmationResult = window.confirmationResult;

      let userData;

      confirmationResult
        .confirm(verificationCode)
        .then((authCredential) => {
          console.log('User signed in successfully');
          const { uid, phoneNumber } = authCredential.user;
          userData = { uid, phoneNumber };
          return userData.phoneNumber;
        })
        .then(checkExistingUser)
        .then((alreadyExist) => {
          console.log('alreadyExist', alreadyExist);
          if (!alreadyExist) createUser(userData);
          dispatch(authPhoneNumber({ ...userData }));
        })
        .then(() => getUserRole(userData.uid))
        .then((role) => {
          dispatch(authPhoneNumber({ ...userData, role }));
        })
        .catch((error) => {
          // todo: обработку с алертом
          setCodeError('Неверный код подтверждения');
        });
    }
  }, [verificationCode, dispatch]);

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
              <Button onClick={requestVerificationCode}>Получить код</Button>
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
                id="checkverificationCode"
                type="text"
                label="Введите код из SMS"
                fullWidth
                onChange={(e) => setVerificationCode(e.target.value)}
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
