import React from 'react';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import LoginIcon from '@mui/icons-material/Login';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';
import './navigation.scss';
import { IconButton } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

export default function Navigation({ userId }) {
  const dispatch = useDispatch();
  let location = useLocation();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        console.log('Sign-out successful');
      })
      .catch((error) => {
        //todo: вывести предупреждение (alert-mui)
        console.log(error.message);
      });
  };

  return (
    <div className="navbar">
      <nav>
        <ul>
          {(() => {
            switch (location.pathname) {
              case '/signup':
                return (
                  <li>
                    <LoginIcon className="icon" />
                    <Link to="/">Войти</Link>
                  </li>
                );
              case '/reports':
                return (
                  <>
                    <li>
                      <AddRoundedIcon className="icon" />
                      <Link to="/createReport">Создать рапорт</Link>
                    </li>
                    <li>
                      <PeopleAltRoundedIcon className="icon" />
                      <Link to="/users">Пользователи</Link>
                    </li>
                    <li>
                      <LogoutRoundedIcon className="icon" />
                      <Link to="/" onClick={handleLogout}>
                        Выход
                      </Link>
                    </li>
                  </>
                );
              case '/createReport':
                return (
                  <li>
                    <CloseRoundedIcon className="icon" />
                    <Link to="/reports">Вернуться на главную </Link>
                  </li>
                );
              case '/users':
                return (
                  <li>
                    <Link to="/reports">
                      <CloseRoundedIcon />
                    </Link>
                  </li>
                );
              case `/users/${userId}`:
                return (
                  <li>
                    <Link to="/users">
                      <IconButton>
                        <CloseRoundedIcon />
                      </IconButton>
                    </Link>
                  </li>
                );
              default:
                return (
                  <li>
                    <PersonAddAltRoundedIcon className="icon" />
                    <Link to="/signup">Зарегистрироваться</Link>
                  </li>
                );
            }
          })()}
        </ul>
      </nav>
    </div>
  );
}
