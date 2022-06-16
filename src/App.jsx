import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToggleIsAuth } from './components/index.js';
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
import './App.scss';

function App() {
  const { isAuth } = useSelector((state) => state.user);

  return (
    <div className="app">
      <div className="wrapper">
        <main>
          <h1>Reports App</h1>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={isAuth ? <Navigate to="/reports" /> : <SignIn />}
              />
              <Route
                path="/signup"
                element={isAuth ? <Navigate to="/reports" /> : <SignUp />}
              />
              <Route path="/reports">
                <Route
                  index
                  element={isAuth ? <Reports /> : <Navigate to="/" />}
                />
                <Route
                  path=":reportId"
                  element={isAuth ? <Report /> : <Navigate to="/" />}
                />
              </Route>
              <Route
                path="/createReport"
                element={isAuth ? <CreateReport /> : <Navigate to="/" />}
              />
              <Route path="/users">
                <Route
                  index
                  element={isAuth ? <Users /> : <Navigate to="/" />}
                />
                <Route
                  path=":userId"
                  element={isAuth ? <User /> : <Navigate to="/" />}
                />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </main>

        <footer>
          <ToggleIsAuth />
        </footer>
      </div>
    </div>
  );
}

export default App;
