import React, { useState } from 'react';
import styles from './App.module.css';

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
  );
}

export default App;
