import React from 'react';
import { Navigation } from '../../components';
import './Reports.scss';

export default function Reports() {
  return (
    <div className="reports">
      <Navigation />

      <h1 className="title">Список всех отчётов</h1>
      {/* Фичи: */}
      <p>Фильтры, поиск, добавить, создать раппорт</p>
      <p>Редактировать раппорт</p>
      <p>Редактировать раппорт</p>
      <p>Апрув-1</p>
      <p>Апрув-2</p>
      <p>Пагинация</p>
    </div>
  );
}
