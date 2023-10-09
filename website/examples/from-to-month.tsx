import * as React from 'react';

import { DayPicker } from 'react-day-picker';

export default function App() {
  const defaultMonth = new Date(2015, 5);
  return (
    <DayPicker
      defaultMonth={defaultMonth}
      fromMonth={defaultMonth}
      toDate={new Date(2015, 10, 20)}
    />
  );
}
