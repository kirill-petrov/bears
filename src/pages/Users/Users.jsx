import React from 'react';
import { Create, Delete, UserList } from '../../components';

export default function Users() {
  return (
    <div className="content">
      <h2>Список всех пользователей</h2>
      <Create />
      <Delete />
      <UserList />
    </div>
  );
}
