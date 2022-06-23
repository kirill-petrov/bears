import { KeyboardArrowRightOutlined } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { reportInputs } from './formSource.js';
import './form.scss';

export default function Form() {
  const [data, setData] = useState('x');

  //todo:  при обновлении страницы заполненные данные сохраняются
  // ?? управляемый инпут

  //todo:  рассчитать итого отработано
  const getTotalTime = () => {
    const a = document.querySelector('[name="lunch"]');
    console.log('getTotalTime', a?.value);
    return a;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit');
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
      totalTime,
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
      totalTime: totalTime.value,
    });
  };

  return (
    <div className="form">
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <p>
          <sup>*</sup>&nbsp;Поля со звёздочкой, являются обязательными
        </p>
        {reportInputs.map((item, i) => (
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
        <TextField
          name="totalTime"
          InputProps={{
            readOnly: true,
          }}
          label="Итого отработано (рассчитывается автоматически)"
          defaultValue={getTotalTime()}
          variant="outlined"
          fullWidth
        />
        <div className="form-btn">
          <Button
            onClick={console.log('click')}
            type="submit"
            variant="outlined"
            endIcon={<KeyboardArrowRightOutlined />}
          >
            Отправить
          </Button>
        </div>
      </form>
      <pre style={{ marginLeft: '100px', fontFamily: 'monospace' }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
