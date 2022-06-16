import { RecaptchaVerifier, signInWithPhoneNumber, GoogleAuthProvider } from 'firebase/auth';
import { createContext } from 'react';
import { auth } from '../firebase';

export const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {

    function setUpRecaptha(phoneNumber) {
        window.recaptchaVerifier = new RecaptchaVerifier(
            'recaptcha-container',
            {},
            auth
        )
        // Отправить код подтверждения на телефон пользователя
        const appVerifier = window.recaptchaVerifier
        return signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    return (
        <userAuthContext.Provider
            value={{
                setUpRecaptha,
                googleSignIn
            }}
        >
            {children}
        </userAuthContext.Provider>
    );

}

export function useUserAuth() {
    return useContext(userAuthContext);
}