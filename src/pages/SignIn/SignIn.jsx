import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/сontext.js';
import { toggleAuth } from '../../redux/reducers/userReducer';

export default function SignIn() {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const contryCode = '+7'
  const [phoneNumber, setPhoneNumber] = useState(contryCode)
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

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
