import { AppBar, Button, Grid, Toolbar } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const user = false;
  return (
    <AppBar position="static">

      <Toolbar variant={'dense'}>
        {/* не понятно почему не делает справа кнопки */}
        <Grid container justifyContent={'flex-end'}>
          {user ? (
            <Button color="inherit" variant={'outlined'}>
              {' '}
              Выйти{' '}
            </Button>
          ) : (

            <NavLink to={'/login'}>
              <Button color="inherit" variant={'outlined'}>
                {' '}
                Войти{' '}
              </Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
