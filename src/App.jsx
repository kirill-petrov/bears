import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import {
  SignIn,
  Reports,
  SignUp,
  CreateReport,
  Users,
  NotFound,
  User,
  Report,
} from './pages/index.js';
import { toggleAuth } from './redux/reducers/userReducer';

function App() {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <BrowserRouter>
        <h1>Reports App</h1>

        {isAuth ? (
          <nav>
            <Link to="/createReport">Создать раппорт</Link>
            <Link to="/users">Пользователи</Link>
            <Link to="/" onClick={() => dispatch(toggleAuth())}>
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
          <Route
            path="/signup"
            element={isAuth ? <Navigate to="/" /> : <SignUp />}
          />
          <Route path="/">
            <Route index element={isAuth ? <Reports /> : <SignIn />} />
            <Route path=":reportId" element={<Report />} />
          </Route>
          <Route
            path="/createReport"
            element={isAuth ? <CreateReport /> : <Navigate to="/" />}
          />
          <Route path="/users">
            <Route index element={isAuth ? <Users /> : <Navigate to="/" />} />
            <Route
              path=":userId"
              element={isAuth ? <User /> : <Navigate to="/" />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
