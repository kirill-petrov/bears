import { Box, Button, Container, Input, Grid } from '@mui/material';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Context } from '..';



const Login = () => {

    // код страны
    const contryCode = '+7'
    const [phoneNumber, setPhoneNumber] = useState(contryCode)

    const { auth } = useContext(Context)

    const getOtp = async (e) => {
        e.preventDefault();
        console.log(phoneNumber);
    }
    const login = () => {
        
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth)
        // Отправить код подтверждения на телефон пользователя
        const appVerifier = window.recaptchaVerifier
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                // ...
            });
    }

    return (
        <Container>

            <Grid container
                style={{ height: window.innerHeight - 50 }}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Grid   style={{ width: 400, background: 'rgb(52, 95, 133)' }}
                    container
                    alignItems={"center"}
                    direction={"column"}
                >
                    <Input  color='primary'
                    // value={phoneNumber }
                    // onChange = {setPhoneNumber}
                    > </Input>

                    <Box p={7}>

                        <Button color="inherit" onClick={Login} variant={"outlined"}>Войти с помощью номера телефона</Button>
                    </Box>
                    <div id='recaptcha-container'></div>

                </Grid>
            </Grid>
        </Container>

    );
};

export default Login;