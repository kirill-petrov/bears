import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getRequired, reportInputs } from './formSource.js';
import './form.scss';
import getTotalTime from '../../utils/getTotalTime.js';

export default function Form() {
  //todo:  при обновлении страницы заполненные данные сохраняются
  // ?? управляемый инпут
  const [values, setValues] = useState({
    customer: '',
    customerError: false,
    executor: '',
    object: '',
    machine: '',
    driver: '',
    notes: '',
    arrival: '',
    departure: '',
    durationOfLunch: '',
    totalTime: '',
  });

  useEffect(() => {
    const arrival = new Date(document.querySelector('[name="arrival"]').value);
    const departure = new Date(
      document.querySelector('[name="departure"]').value
    );
    const durationOfLunch = document.querySelector(
      '[name="durationOfLunch"]'
    ).value;
    const totalTime = getTotalTime(arrival, departure, durationOfLunch);
    setValues((prev) => ({ ...prev, totalTime }));
  }, [values.arrival, values.departure, values.durationOfLunch]);

  //todo:  валидация datetime-local

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredInputs = getRequired();

    for (const key in values) {
      if (values[key] === '' && requiredInputs.includes(key)) {
        setValues((prev) => ({ ...prev, [`${key}Error`]: true }));
      }
    }
    //todo: добавить якорь navigate to …#alert
  };

  const handleOnBlur = (e) => {
    const inputName = e.target.name;
    if (values[inputName] === '' && getRequired().includes(inputName)) {
      setValues((prev) => ({ ...prev, [`${inputName}Error`]: true }));
    }

    if (values[inputName] !== '' && getRequired().includes(inputName)) {
      setValues((prev) => ({ ...prev, [`${inputName}Error`]: false }));
    }
  };

  return (
    <div className="form">
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <p className="alert">
          <sup>*</sup>&nbsp;Поля со звёздочкой, являются обязательными
        </p>
        <pre style={{ fontFamily: 'monospace' }}>
          {JSON.stringify(values, null, 2)}
        </pre>
        {reportInputs.map((input, key) => (
          <TextField
            className="textField"
            key={`tf${key}`}
            {...input}
            variant="outlined"
            fullWidth
            onChange={(e) =>
              setValues((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            onBlur={handleOnBlur}
            error={values[`${input.name}Error`]}
          />
        ))}
        <TextField
          className="textField"
          name="totalTime"
          label="Итого отработано (ЧЧ:ММ)"
          helperText="Рассчитывается автоматически"
          value={values.totalTime}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          fullWidth
        />
        <div className="form-btn">
          <Button type="submit" variant="outlined">
            Отправить
          </Button>
        </div>
      </form>
    </div>
  );
}
