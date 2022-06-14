import React from 'react';
import styles from './App.module.css';
import { Create, UserList } from './components/index.js';

function App() {
  return (
    <>
      <code className={styles.url}>src/App.js</code>

      <div className={styles.container}>
        <h2>delete</h2>
        <form className="delete">
          <input type="text" name="id" required placeholder="id" />

          <button>delete doc</button>
        </form>

        <h2>update</h2>
      </div>

      <Create />
      <UserList />
    </>
  );
}

export default App;
