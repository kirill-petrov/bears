import React from 'react';
import { DataTable } from '../index.js';
import './listOfReports.scss';

export default function ListOfReports() {
  return (
    <div className="listOfReports">
      <div className="container">
        <DataTable />
      </div>
    </div>
  );
}
