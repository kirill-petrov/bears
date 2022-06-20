import { Paper, TextField } from '@mui/material';
import React from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { Navigation } from '../../components';
import './user.scss';

/**
 * Не удалять пока. Это будет форма
 */

export default function User() {
  let { userId } = useParams();
  let queryString = useLocation();
  let [searchParams] = useSearchParams();
  console.log(searchParams);

  return (
    <div className="user">
      <Navigation userId={userId} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          backgroundColor: 'aquamarine',
        }}
      >
        <pre
          style={{
            fontFamily: 'monospace',
            fontSize: '1rem',
          }}
        >
          {JSON.stringify(
            {
              userId: userId,
              queryString: queryString,
              'queryString.search': queryString.search,
              'queryString.pathname': queryString.pathname,
              searchParams,
              'searchParams.keys': searchParams.get('phoneNumber'),
            },
            null,
            2
          )}
        </pre>
      </div>

      <Paper
        sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}
        className="user-wrapper"
      >
        <div className="textField">
          <TextField
            id="standard-helperText"
            label="Фамилия"
            defaultValue="Default Value"
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-helperText"
            label="Телефон"
            defaultValue="Default Value"
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-helperText"
            label="Почта"
            defaultValue="Default Value"
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-helperText"
            label="Почта"
            defaultValue="Default Value"
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-helperText"
            label="Почта"
            defaultValue="Default Value KJKkmmkmkmdslklk skdckmdskca"
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-helperText"
            label="Почта"
            defaultValue="Default Value"
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
      </Paper>
      {/* <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
        <DataTable />
      </Paper> */}
    </div>
  );
}
