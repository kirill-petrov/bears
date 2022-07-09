import React, { useState } from 'react';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import { AuthPhone } from '../../components/index.js';
import './signin.scss';

export default function SignIn() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="signin">
      <div className="container">
        <h2>Вход</h2>

        <div className="signin-group">
          <button type="button" onClick={() => setOpen(true)}>
            <LocalPhoneRoundedIcon />
            <p>Войти по номеру</p>
          </button>
          <AuthPhone isOpen={isOpen} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
}

/* Номера телефонов, предоставленные конечными пользователями для аутентификации, будут отправлены и сохранены Google, чтобы улучшить нашу защиту от спама и злоупотреблений в службах Google, включая, помимо прочего, Firebase. Разработчики должны убедиться, что у них есть соответствующее согласие конечного пользователя, прежде чем использовать службу входа в систему с помощью номера телефона Firebase Authentication. */
