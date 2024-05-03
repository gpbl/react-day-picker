import React from 'react';

import { DayPicker } from 'react-day-picker';

export default function App() {
  return (
    <DayPicker captionLayout="dropdown-buttons" fromYear={2015} toYear={2025} />
  );
}
