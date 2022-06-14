import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import db from '../../db';

export default function UserList() {
  const [usersArr, setUsersArr] = useState([]);

  useEffect(() => {
    console.log('useEffect');
    getDocs(collection(db, 'users'))
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
      <h2>read</h2>
      {usersArr.length ? (
        <ul>
          {usersArr.map((user) => {
            return (
              <li key={user.id}>
                <code>{`name: ${user.name}, id: ${user.id}`}</code>
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
