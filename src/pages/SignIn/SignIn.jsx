import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAuth } from '../../redux/reducers/userReducer';

export default function SignIn() {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="content">
      <h2>Авторизация</h2>
      <p>Форма входа</p>

      <pre>is Auth: {`${isAuth}`}</pre>
      <button type="button" onClick={() => dispatch(toggleAuth())}>
        <pre>Toggle isAuth to {`${!isAuth}`} (whith redux)</pre>
      </button>
    </div>
  );
}
