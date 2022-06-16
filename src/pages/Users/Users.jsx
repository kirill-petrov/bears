import React from 'react';
import { Create, Delete, Navigation, UserList } from '../../components';

export default function Users() {
  return (
    <div className="users">
      <Navigation />

      <h2>Список пользователей</h2>
      <Create />
      <Delete />
      <UserList />
    </div>
  );
}
