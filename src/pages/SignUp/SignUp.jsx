import React from 'react';

export default function SignUp({ isAuth, setIsAuth }) {
  return (
    <div>
      <h2>Регистрация</h2>
      {console.log(isAuth)}
      <p>Форма реги</p>
      <button onClick={() => setIsAuth(true)}>
        <code>Toggle isAuth to {`${!isAuth}`}</code>
      </button>
    </div>
  );
}
