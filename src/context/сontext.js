import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { createContext } from 'react';
import { auth } from '../firebase';

export const userAuthContext = createContext();

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
    // .then((confirmationResult) => {
    //     // SMS sent. Prompt user to type the code from the message, then sign the
    //     // user in with confirmationResult.confirm(code).
    //     window.confirmationResult = confirmationResult;
    //     // ...
    // }).catch((error) => {
    //     // Error; SMS not sent
    //     // ...
    // });
