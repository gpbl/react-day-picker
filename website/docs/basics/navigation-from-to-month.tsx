import * as React from 'react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function Example() {
  const defaultMonth = new Date(2015, 5);
  return (
    <DayPicker
      defaultMonth={defaultMonth}
      fromMonth={defaultMonth}
      toDate={new Date(2015, 10, 20)}
    />
  );
}
