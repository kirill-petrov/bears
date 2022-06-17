import React from 'react';
import Paper from '@mui/material/Paper';

import {
  Create,
  DataTable,
  Delete,
  Navigation,
  UserList,
} from '../../components';

export default function Users() {
  return (
    <div className="users">
      <Navigation />

      <h2 className="list-title">Список пользователей</h2>

      <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
        <DataTable />
      </Paper>
      <Create />
      <Delete />
      <UserList />
    </div>
  );
}
