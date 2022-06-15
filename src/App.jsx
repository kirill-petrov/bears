import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import {
  SignIn,
  Reports,
  SignUp,
  CreateReport,
  Users,
  NotFound,
} from './pages';

function App() {
  const [cartIsEmpty] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <BrowserRouter>
        <h1>Reports App</h1>

        {isAuth ? (
          <nav>
            <Link to="/createReport">Создать раппорт</Link>
            <Link to="/users">Пользователи</Link>
            <Link to="/" onClick={() => setIsAuth(false)}>
              Выход
            </Link>
          </nav>
        ) : (
          <nav>
            <Link to="/">Авторизация</Link>
            <Link to="/signup">Регистрация</Link>
          </nav>
        )}

        <Routes>
          <Route path="/" element={isAuth ? <Reports /> : <SignIn />} />
          <Route
            path="/signup"
            element={
              isAuth ? (
                <Navigate to="/" />
              ) : (
                <SignUp isAuth={isAuth} setIsAuth={setIsAuth} />
              )
            }
          />
          <Route
            path="/createReport"
            element={isAuth ? <CreateReport /> : <Navigate to="/" />}
          />
          {/* <Route path="/report/:id" element={<User />} /> */}
          <Route
            path="/users"
            element={isAuth ? <Users /> : <Navigate to="/" />}
          />
          {/* <Route path="/user/:id" element={<User />} /> */}
          <Route path="*" element={<NotFound />} />

          <Route
            path="/checkout"
            element={
              cartIsEmpty ? (
                <Navigate to="/products" />
              ) : (
                <p className="content">checkout</p>
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
