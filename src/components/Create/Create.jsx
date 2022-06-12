import { collection, addDoc } from 'firebase/firestore';
import React from 'react';
import db from '../../db';

export default function Create() {
  const createUser = (e) => {
    e.preventDefault();

    const person = {
      userId: Date(),
      name: e.target.name.value,
      role: e.target.role.value,
    };

    addDoc(collection(db, 'users'), person)
      .then((doc) => {
        console.log('Document written with ID: ', doc.id);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <h2>create</h2>
      <form onSubmit={createUser}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="role" placeholder="role" />
        <button>send</button>
      </form>
    </>
  );
}
