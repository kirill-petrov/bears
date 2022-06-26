import { Paper } from '@mui/material';
import React from 'react';
import { Form, Navigation } from '../../components';
import './createReport.scss';

export default function CreateReport() {
  return (
    <div className="create-report">
      <Navigation />

      <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
        <h1 className="title">Рапорт о работе техники</h1>
        <Form />
      </Paper>
    </div>
  );
}
