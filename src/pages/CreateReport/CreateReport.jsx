import { Button, Paper, TextField } from '@mui/material';
import { KeyboardArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { Navigation } from '../../components';
import { reportInputs as inputs } from './formSource.js';
import './createReport.scss';

export default function CreateReport() {
  const [data, setData] = useState('x');

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      customer,
      executor,
      object,
      machine,
      driver,
      notes,
      arrival,
      departure,
      lunch,
    } = e.target;

    setData({
      customer: customer.value,
      executor: executor.value,
      object: object.value,
      machine: machine.value,
      driver: driver.value,
      notes: notes.value,
      arrival: arrival.value,
      departure: departure.value,
      lunch: lunch.value,
    });
  };

  return (
    <div className="create-report">
      <Navigation />
      <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
        <h1 className="title">Рапорт о работе техники</h1>

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <p>
            <sup>*</sup>&nbsp;Поля со звёздочкой, являются обязательными для
            заполнения
          </p>
          {inputs.map((item, i) => (
            <TextField
              key={i}
              name={item.name}
              type={item.type}
              required={item.required}
              label={item.label}
              defaultValue={item.defaultValue ? item.defaultValue : null}
              helperText={item.helperText ? item.helperText : null}
              multiline={item.multiline ? true : false}
              rows={item.rows ? item.rows : null}
              variant="outlined"
              fullWidth
            />
          ))}
          <div className="form-btn">
            <Button
              type="submit"
              variant="outlined"
              endIcon={<KeyboardArrowRightOutlined />}
            >
              Отправить
            </Button>
          </div>
        </form>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Paper>
    </div>
  );
}
