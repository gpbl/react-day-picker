import React from 'react';
import DayPicker from '../../../src';

import '../../../src/style.css';

const fromMonth = new Date(2015, 3, 1, 0, 0);
const toMonth = new Date(2015, 10, 30, 23, 59);

export default function Restricted() {
  return (
    <DayPicker
      enableOutsideDays
      numberOfMonths={2}
      initialMonth={fromMonth}
      fromMonth={fromMonth}
      toMonth={toMonth}
      disabledDays={day => fromMonth > day || day > toMonth}
      onDayClick={(e, day, { disabled }) => {
        if (!disabled) {
          console.log(day.toLocaleDateString());
        }
      }}
    />
  );
}
