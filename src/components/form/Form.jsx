import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getRequired, reportInputs, getTotalTime } from './formSource.js';
import './form.scss';

export default function Form() {
  //todo:  при обновлении страницы заполненные данные сохраняются
  //todo:  валидация datetime-local

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
    totalTime: '00:00',
  });

  useEffect(() => {
    const arrival = document.querySelector('[name="arrival"]').value;
    const departure = document.querySelector('[name="departure"]').value;
    const lanchDurationInMinutes = document.querySelector(
      '[name="durationOfLunch"]'
    ).value;

    const timeData = getTotalTime(arrival, departure, lanchDurationInMinutes);

    if (timeData.error) {
      console.log('if (timeData.error) ');
      setValues((prev) => ({
        ...prev,
        totalTimeError: true,
      }));
    } else {
      setValues((prev) => ({
        ...prev,
        totalTimeError: false,
        totalTime: timeData.totalTime,
      }));
    }
  }, [values.arrival, values.departure, values.durationOfLunch]);

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
          value={values.totalTime}
          error={values.totalTimeError}
          helperText={
            values.totalTimeError
              ? 'Проверьте параметры времени'
              : 'Рассчитывается автоматически'
          }
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
