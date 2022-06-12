import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Context.Provider value={{
  //   app,
  //   auth,
  //   firestore
  // }} >
    <App />
  // </Context.Provider>
);
