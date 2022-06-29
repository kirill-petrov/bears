function localDateTime() {
  const date = new Date();
  return new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  ).toISOString();
}

export function getRequired() {
  const requiredInputs = [];
  reportInputs.forEach((item) => {
    if (item.required) requiredInputs.push(item.name);
  });
  return requiredInputs;
}

export function getTotalTime(arrival, departure, lanchDurationInMinutes) {
  if (departure < arrival) return { error: true };

  const arrivalMs = Date.parse(arrival);
  const departureMs = Date.parse(departure);
  const lanchMs = lanchDurationInMinutes * 60000;

  if (lanchMs > departureMs - arrivalMs) return { error: true };

  const durationMs = departureMs - arrivalMs - lanchMs;

  let hours = parseInt(durationMs / (1000 * 60 * 60));
  let mins = parseInt((durationMs / (1000 * 60)) % 60);

  hours = hours < 10 ? '0' + hours : hours;
  mins = mins < 10 ? '0' + mins : mins;

  return { error: false, totalTime: `${hours}:${mins}` };
}

export const reportInputs = [
  {
    name: 'customer',
    required: true,
    label: 'ФИО заказчика полностью (Иванов Иван Иванович)',
    type: 'text',
  },
  {
    name: 'executor',
    required: true,
    label: 'ФИО исполнителя полностью (Иванов Иван Иванович)',
    type: 'text',
  },
  {
    name: 'object',
    required: true,
    label: 'Объект',
    type: 'text',
  },
  {
    name: 'machine',
    required: true,
    label: 'Наименование и марка техники',
    type: 'text',
  },
  {
    name: 'driver',
    required: true,
    label: 'ФИО водителя/машиниста полностью (Иванов Иван Иванович)',
    type: 'text',
  },
  {
    name: 'notes',
    required: false,
    label: 'Примечания',
    type: 'text',
    multiline: true,
    rows: 3,
  },

  {
    name: 'arrival',
    required: true,
    type: 'datetime-local',
    label: 'Время прибытия',
    defaultValue: localDateTime().slice(0, 11) + '00:00',
  },
  {
    name: 'departure',
    required: true,
    type: 'datetime-local',
    label: 'Время убытия',
    defaultValue: localDateTime().slice(0, 11) + '00:00',
  },
  {
    name: 'durationOfLunch',
    required: false,
    type: 'number',
    InputProps: { inputProps: { min: 0 } },
    label: 'Время обеда, мин.',
  },
];
