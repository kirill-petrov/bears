import React from 'react';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import LoginIcon from '@mui/icons-material/Login';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import { Link, useLocation } from 'react-router-dom';
import { toggleAuth } from '../../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';
import './navigation.scss';

export default function Navigation() {
  const dispatch = useDispatch();
  let location = useLocation();

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
                      <Link to="/createReport">Создать раппорт</Link>
                    </li>
                    <li>
                      <PeopleAltRoundedIcon className="icon" />
                      <Link to="/users">Пользователи</Link>
                    </li>
                    <li>
                      <LogoutRoundedIcon className="icon" />
                      <Link to="/" onClick={() => dispatch(toggleAuth())}>
                        Выход
                      </Link>
                    </li>
                  </>
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
