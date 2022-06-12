import { Box, Button, Container, Grid } from '@mui/material';
import React from 'react';

const login = () => {
    return (
        <Container>
            <Grid container
                style={{ height: window.innerHeight - 50 }}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Grid style={{ width: 400, background: 'rgb(52, 95, 133)' }}
                    container
                    alignItems={"center"}
                    direction={"column"}
                >
                    <Box p={7}>
                        <Button color="inherit" onClick={login} variant={"outlined"}>Войти с помощью номера телефона</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>

    );
};

export default login;