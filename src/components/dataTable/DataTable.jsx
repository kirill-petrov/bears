import React from 'react';
import { userRows, userColumns } from './dbSource.js';
import { DataGrid, useGridApiContext } from '@mui/x-data-grid';
import { Select } from '@mui/material';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './dataTable.scss';

function SelectEditInputCell(props) {
  const { id, value, field } = props;
  const apiRef = useGridApiContext();

  const handleChange = async (event) => {
    await apiRef.current.setEditCellValue({
      id,
      field,
      value: event.target.value,
    });
    apiRef.current.stopCellEditMode({ id, field });
  };

  return (
    <Select
      value={value}
      onChange={handleChange}
      size="small"
      sx={{ height: 1 }}
      native
      autoFocus
    >
      <option>admin</option>
      <option>approver-1</option>
      <option>approver-2</option>
    </Select>
  );
}

SelectEditInputCell.propTypes = {
  field: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  value: PropTypes.string,
};

const renderSelectEditInputCell = (params) => {
  return <SelectEditInputCell {...params} />;
};

export default function DataTable() {
  const { isAdmin } = useSelector((state) => state.user);

  const userRoleColumn = [
    {
      field: 'role',
      headerName: 'Роль',
      description: 'Роль определяет категорию доступа',
      renderEditCell: renderSelectEditInputCell,
      editable: isAdmin ? true : false,
      width: 100,
      renderCell: (params) => {
        return <div className={`cellWithStatus`}>{params.row.role}</div>;
      },
    },
  ];

  return (
    <div className="datatable">
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          style={{ padding: '0 15px' }}
          rows={userRows}
          columns={userColumns.concat(userRoleColumn)}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection={false}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </div>
    </div>
  );
}
