import React from 'react';
import styles from './App.module.css';
import Delete from './components/Delete/Delete';
import { Create, UserList } from './components/index.js';

function App() {
  return (
    <>
      <code className={styles.url}>src/App.js</code>

      <div className={styles.container}>
        <h2>update</h2>
      </div>
      <Create />
      <Delete />
      <UserList />
    </>
  );
}

export default App;
