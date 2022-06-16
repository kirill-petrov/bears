import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { UserAuthContextProvider } from './context/сontext';
import {
  SignIn,
  Reports,
  SignUp,
  CreateReport,
  Users,
  NotFound,
} from './pages';
import { toggleAuth } from './redux/reducers/userReducer';


function App() {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <UserAuthContextProvider>
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
            <Route path="/" element={isAuth ? <Reports /> : <SignIn />} />
            <Route
              path="/signup"
              element={isAuth ? <Navigate to="/" /> : <SignUp />}
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
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
