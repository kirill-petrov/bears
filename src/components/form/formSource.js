function localDateTime() {
  const date = new Date();
  return new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  ).toISOString();
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
    label: 'Время обеда, мин.',
  },
  // {
  //   required: true,
  //   label: 'Подпись заказчика',
  //   type: 'text',
  //   defaultValue: 'Подпись заказчика',
  // },
  // {
  //   required: true,
  //   label: 'Подпись тсполнителя',
  //   type: 'text',
  //   defaultValue: 'Подпись тсполнителя',
  // },
  // {
  //   required: false,
  //   label: 'Итого отработано',
  //   type: 'text',
  // },
];
