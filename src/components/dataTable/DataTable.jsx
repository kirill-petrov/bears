import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { rows, columns } from '../../dbSource.js';
import './dataTable.scss';

export default function DataTable() {
  return (
    <div className="datatable">
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
