import React from 'react';
import DayPicker from '../../../src';

import '../../../src/style.css';

function handleDayClick(day, modifiers, e) {
  console.log('Day\'s modifiers', modifiers);
  console.log('Day\'s CSS classes', e.target.classList.toString());
}

export default function Modifiers() {
  return (
    <DayPicker
      initialMonth={ new Date(2017, 3) }
      selectedDays={ new Date(2017, 3, 12) }
      disabledDays={ new Date(2017, 3, 15) }
      onDayClick={ handleDayClick }
    />
  );
}
