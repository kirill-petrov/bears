import { collection, getDocs /* , orderBy, query */ } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import db from '../../db';

export default function UserList() {
  const [usersArr, setUsersArr] = useState([]);

  useEffect(() => {
    console.log('useEffect'); // TODO: хули он 2 раза отрабатывает
    const colRef = collection(db, 'users');
    // const q = query(colRef, orderBy('createdAt', 'desc'));
    // const q = query(colRef, orderBy('firstName'));

    // getDocs(q, colRef)
    getDocs(colRef)
      .then((data) => {
        const users = data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setUsersArr(users);
      })
      .catch((err) => alert(err.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>Список</h3>
      {usersArr.length ? (
        <ul>
          {usersArr.map((user) => {
            return (
              <li key={user.id}>
                <code>{`id: ${user.id}, name: ${user.firstName}, createAt: ${user.createdAt}`}</code>
              </li>
            );
          })}
        </ul>
      ) : (
        <code>User List Empty</code>
      )}
    </>
  );
}
