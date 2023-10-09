import * as React from 'react';

import { DayPicker } from 'react-day-picker';

export default function App() {
  return (
    <DayPicker
      numberOfMonths={5}
      captionLayout="dropdown-buttons"
      fromYear={2015}
      toYear={2025}
    />
  );
}
