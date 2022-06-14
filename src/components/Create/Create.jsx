import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import db from '../../db';

export default function Create() {
  const createUser = (e) => {
    e.preventDefault();

    const person = {
      createdAt: serverTimestamp(),
      firstName: e.target.firstName.value,
      secondName: '',
      phoneNumber: '',
      role: e.target.role.value, // TODO: решить что лучше строка или ссылка на коллекцию (roleId)
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
        <input type="text" name="firstName" placeholder="firstName" />
        <input type="text" name="role" placeholder="role" />
        <button>send</button>
      </form>
    </>
  );
}
