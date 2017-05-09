import React from 'react';

import DayPickerInput from '../../../src/DayPickerInput';

import '../../../src/style.css';

export default function SimpleInput() {
  return (
    <div>
      <p>
        Please type a day:
      </p>
      <DayPickerInput
        placeholder="MM/DD/YYYY"
        onDayChange={day => console.log(day)}
      />
    </div>
  );
}
