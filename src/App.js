import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';
import AppRouter from './AppRouter';
import Navbar from './components/Navbar';

function App() {
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    setData({
      userId: Date(),
      name: e.target.name.value,
      role: e.target.role.value,
    });
  };

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      <div>
        <code className={styles.url}>src/App.js</code>

        <div className={styles.form}>
          <p>получить данные из формы и записать в firestore</p>

          <form onSubmit={handleSubmit}>
            <input type='text' name='name' />
            <input type='text' name='role' />
            <button>send</button>
          </form>
        </div>

        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </BrowserRouter>
  );
}

export default App;
