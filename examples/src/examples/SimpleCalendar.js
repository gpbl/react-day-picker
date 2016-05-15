import React from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

export default function SimpleCalendar() {
  return <DayPicker onDayClick={(e, day) => alert(day)} />;
}
