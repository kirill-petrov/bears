import { Box, Button, Container, Input, Grid } from '@mui/material';

import React, { useContext, useState } from 'react';




const Login = () => {

    // код страны
    const contryCode = '+7'
    const [phoneNumber, setPhoneNumber] = useState(contryCode)



    const getOtp = async (e) => {
        e.preventDefault();
        console.log(phoneNumber);
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
