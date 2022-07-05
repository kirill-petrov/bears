import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authGoogleProvider } from '../../redux/reducers/userReducer.js';
import { auth } from '../../firebase.js';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import GoogleIcon from '@mui/icons-material/Google';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import './signin.scss';
import { FormDialog } from '../../components/index.js';

export default function SignIn() {
  // const { isAuth } = useSelector((state) => state.user);
  const [isOpen, setOpen] = useState(false);

  const dispatch = useDispatch();

  // todo: перенести в firebase.js
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider) // для mobile лучше редирект
      .then((result) => {
        onAuthStateChanged(auth, (user) => {
          if (user) dispatch(authGoogleProvider(user.uid));
        });
        console.log('signInWithGoogle successful');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  //todo: найти нормальную кнопку
  return (
    <div className="signin">
      {/* 
        // todo: если рега не нужна, то и ссылка на регу лишняя
        <Navigation /> 
      */}
      <div className="container">
        <h2>Вход</h2>

        <div className="signin-group">
          <button type="button" onClick={signInWithGoogle}>
            <GoogleIcon />
            <p>Продолжить с Google</p>
          </button>

          <button type="button" onClick={() => setOpen(true)}>
            <LocalPhoneRoundedIcon />
            <p>Войти по номеру</p>
          </button>
          <FormDialog isOpen={isOpen} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
}

/* Номера телефонов, предоставленные конечными пользователями для аутентификации, будут отправлены и сохранены Google, чтобы улучшить нашу защиту от спама и злоупотреблений в службах Google, включая, помимо прочего, Firebase. Разработчики должны убедиться, что у них есть соответствующее согласие конечного пользователя, прежде чем использовать службу входа в систему с помощью номера телефона Firebase Authentication. */
