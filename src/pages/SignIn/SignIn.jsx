import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/сontext.js';
import { toggleAuth } from '../../redux/reducers/userReducer';
import classes from './SignIn.module.css'


import { Alert, TextField, Button } from '@mui/material';
import GoogleButton from 'react-google-button';

export default function SignIn() {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const contryCode = '+7'
  const [phoneNumber, setPhoneNumber] = useState(contryCode)
  const [error, setError] = useState("")
  const [flag, setFlag] = useState(false)
  const [otp, setOtp] = useState("")
  const [result, setResult] = useState("")
  const { setUpRecaptha } = useUserAuth() //СМС 
  const { googleSignIn } = useUserAuth() //ГУГЛ
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault()
    setError("");
    if (phoneNumber === "" || phoneNumber === undefined || phoneNumber.length >= 13 || phoneNumber.length <= 11)
      return setError("Пожалуйста, введите действительный номер телефона")
    try {
      const response = await setUpRecaptha(phoneNumber)
      setResult(response)
      setFlag(true)
    } catch (err) {
      setError(err.message)
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault()
    setError("")
    if (otp === "" || otp === null || otp.length >= 7|| otp.length<= 5)
      return setError('Веведен неверный пароль')
    try {
      await result.confirm(otp)
      dispatch(toggleAuth())
      navigate("/createReport")
    } catch (err) {
      setError(err.message)
    }
  };

  // ГУГЛ
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      dispatch(toggleAuth())
      navigate("/createReport")
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <div className="content">
      <h2>Авторизация</h2>
      <p>Форма входа</p>

      <div className= {classes.box}>

        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>

          <TextField
            value={phoneNumber}
            onChange={ (e) => setPhoneNumber(e.target.value)}
            id="outlined-basic" label="Введите номер телефона" variant="outlined" name="phoneNumber"
          />
          
          <div id="recaptcha-container"></div>
          
          
          <Button  type="submit" variant="contained">
            Получить пароль
          </Button>
        </form>

        <form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <TextField
            onChange={(e) => setOtp(e.target.value)}
            id="outlined-basic" label="Введите Пароль" variant="outlined"

          />
          <Button type="submit" variant="contained">
            Войти
          </Button>
        </form>

        <div style={{ marginTop: 40 }} >
          <GoogleButton
            className="g-btn"
            label='Войти с помощью Google'
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>


      <pre>is Auth: {`${isAuth}`}</pre>
      <button type="button" onClick={() => dispatch(toggleAuth())}>
        <pre>Toggle isAuth to {`${!isAuth}`} (whith redux)</pre>
      </button>
    </div>
  );
}
