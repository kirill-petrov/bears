import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { auth } from '../../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUpForm() {
  // todo: !! Authenticate with Firebase Using Email Link in JavaScript
  // todo: подсвечивать обязательные инпуты
  const handleSubmit = (e) => {
    e.preventDefault();
    const signUpForm = new FormData(e.target);
    const email = signUpForm.get('email');
    const password = signUpForm.get('password');
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log('User created', cred.user);
        const form = document.querySelector('[component="signUpForm"]');
        form.reset();
      })
      .catch((err) => {
        console.log('Error message', err.message);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* 
        <Typography component="h1" variant="h5">
          Sign up
        </Typography> 
        */}
        <form
          component="signUpForm"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="ФИО"
                autoFocus
              />
            </Grid> */}
            {/* <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Телефонный номер"
                name="phone"
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                name="email"
                type="email"
                label="Электронная почта"
                required
                fullWidth
              />
            </Grid>
            {/* 
              //todo: Password should be at least 6 characters (auth/weak-password).
            */}
            <Grid item xs={12}>
              <TextField
                name="password"
                type="password"
                label="Пароль"
                required
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 15 }}
          >
            Зарегистрироваться
          </Button>

          {/* <Grid container justifyContent="center" sx={{ mt: 5, mb: 2 }}>
            <Grid item>
              <NavLink to="/" variant="body2">
                <Link href="#" variant="body2">
                  Уже имеете аккаунт? Авторизуйтесь
                </Link>
              </NavLink>
            </Grid>
          </Grid> */}
        </form>
      </Box>
    </Container>
  );
}
