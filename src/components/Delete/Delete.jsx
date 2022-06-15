import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import db from '../../db';

export default function Delete() {
  const handleDelete = (e) => {
    e.preventDefault();

    deleteDoc(doc(db, 'users', e.target.id.value))
      .then(() => {
        console.log(`Пользователь с id: ${e.target.id.value} удалён`);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <h3>Удалить пользователя</h3>
      <form className="delete" onSubmit={handleDelete}>
        <input type="text" name="id" required placeholder="id" />
        <button>delete user</button>
      </form>
      <code style={{ color: 'orange' }}>todo: </code>
      <code>edit user !</code>
    </>
  );
}
