import React from 'react';
import { useDispatch } from 'react-redux';
import { authGoogleProvider } from '../../redux/reducers/userReducer.js';
import { Navigation } from '../../components';
import { auth } from '../../firebase.js';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './signin.scss';

export default function SignIn() {
  // const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // console.log(token);
        dispatch(authGoogleProvider(result.user.uid));
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
        alert(errorCode, errorMessage, email, credential);
      });
  };
  //todo: найти нормальную кнопку
  return (
    <div className="signin">
      <Navigation />

      <div className="container">
        <h2>Войти</h2>

        <button type="button" onClick={signInWithGoogle}>
          Continue with Google
        </button>
        <button
          type="button"
          onClick={() => dispatch(authGoogleProvider('km'))}
        >
          authGoogleProvider
        </button>
      </div>
    </div>
  );
}
