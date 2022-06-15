import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAuth } from '../../redux/reducers/userReducer';

export default function SignUp() {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Регистрация</h2>
      <p>Форма реги</p>

      <pre>is Auth: {`${isAuth}`}</pre>
      <button type="button" onClick={() => dispatch(toggleAuth())}>
        <pre>Toggle isAuth to {`${!isAuth}`}</pre>
      </button>
    </div>
  );
}
