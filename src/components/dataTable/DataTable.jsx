import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../dbSource.js';
import './dataTable.scss';
import { Link } from 'react-router-dom';

export default function DataTable() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    console.log(data);
    setData(data.filter((item) => item.id !== id));
    console.log(data);
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/users/:${params.row.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={15}
          rowsPerPageOptions={[15]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
