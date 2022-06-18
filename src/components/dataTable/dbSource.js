export const userColumns = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'fullName',
    headerName: 'Пользователь',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 200,
    valueGetter: (params) =>
      `${params.row.lastName || ''} ${
        params.row.firstName?.charAt(0).concat('.') || ''
      }`,
  },
  {
    field: 'phoneNumber',
    headerName: 'Телефон',
    sortable: false,
    width: 180,
  },
  {
    field: 'email',
    headerName: 'Электронная почта',
    sortable: false,
    width: 220,
  },
];

export const userRows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  {
    id: 2,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42,
    phoneNumber: '89111781198',
    role: 'admin',
  },
  {
    id: 3,
    lastName: 'Lannister',
    firstName: 'Jaime',
    age: 45,
    role: 'approver',
  },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
