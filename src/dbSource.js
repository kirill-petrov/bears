export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number', // выключка в право
    width: 90,
  },
  {
    field: 'phoneNumber',
    headerName: 'Телефон',
    // type: 'number',
    sortable: false,
    width: 150,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'status',
    headerName: 'Status',
    description: 'Some desc',
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status: 'active' },
  {
    id: 2,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42,
    phoneNumber: '89111781198',
    status: 'passive',
  },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
