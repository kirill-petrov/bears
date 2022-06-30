import React from 'react';
import { useDispatch } from 'react-redux';
import { authGoogleProvider } from '../../redux/reducers/userReducer.js';
import { auth } from '../../firebase.js';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { Navigation } from '../../components';
import GoogleIcon from '@mui/icons-material/Google';
import './signin.scss';

export default function SignIn() {
  // const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider) // для mobile лучше редирект
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        console.log('signInWithGoogle successful');
        // if (result.user) dispatch(authGoogleProvider(result.user.uid));

        onAuthStateChanged(auth, (user) => {
          if (user) dispatch(authGoogleProvider(user.uid));
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorCode, errorMessage, email, credential);
      });
  };
  //todo: найти нормальную кнопку
  return (
    <div className="signin">
      <Navigation />

      <div className="container">
        <h2>Войдите в приложение</h2>

        <button type="button" onClick={signInWithGoogle}>
          <GoogleIcon />
          <p>Продолжить с Google</p>
        </button>
      </div>
    </div>
  );
}

/* Номера телефонов, предоставленные конечными пользователями для аутентификации, будут отправлены и сохранены Google, чтобы улучшить нашу защиту от спама и злоупотреблений в службах Google, включая, помимо прочего, Firebase. Разработчики должны убедиться, что у них есть соответствующее согласие конечного пользователя, прежде чем использовать службу входа в систему с помощью номера телефона Firebase Authentication. */
