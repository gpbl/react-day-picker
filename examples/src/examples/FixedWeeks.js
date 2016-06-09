import React from 'react';
import DayPicker from '../../../src';

import '../../../src/style.css';

export default function SimpleCalendar() {
  return <DayPicker numberOfMonths={2} fixedWeeks />;
}
