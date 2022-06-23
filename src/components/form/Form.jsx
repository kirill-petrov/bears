import { KeyboardArrowRightOutlined } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { reportInputs } from './formSource.js';
import './form.scss';
import getTotalTime from '../../utils/getTotalTime.js';

export default function Form() {
  const [data, setData] = useState('x');

  //todo:  при обновлении страницы заполненные данные сохраняются
  // ?? управляемый инпут
  const [values, setValues] = useState({
    customer: '',
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
    setValues({ ...values, totalTime });
  }, [values.arrival, values.departure, values.durationOfLunch]);

  //todo:  рассчитать итого отработано
  // const getTotalTime = () => {
  //   const a = document.querySelector('[name="lunch"]');
  //   console.log('getTotalTime', a?.value);
  //   return a || 0;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit');

    console.log('handleSubmit end');
  };

  return (
    <div className="form">
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <p>
          <sup>*</sup>&nbsp;Поля со звёздочкой, являются обязательными
        </p>
        <pre style={{ fontFamily: 'monospace' }}>
          {JSON.stringify(values, null, 2)}
        </pre>
        {reportInputs.map((input, key) => (
          <TextField
            key={key}
            {...input}
            // name={input.name}
            // type={input.type}
            // required={input.required}
            // label={input.label}
            // defaultValue={input.defaultValue ? input.defaultValue : null}
            // multiline={input.multiline ? true : false}
            // rows={input.rows ? input.rows : null}
            // value={'asd'}
            variant="outlined"
            fullWidth
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        ))}
        <TextField
          name="totalTime"
          label="Итого отработано (ЧЧ:ММ)"
          helperText="Рассчитывается автоматически"
          defoultValue={values.totalTime}
          value={values.totalTime}
          InputProps={{
            readOnly: true,
          }}
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
      <pre style={{ marginLeft: '15px', fontFamily: 'monospace' }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
