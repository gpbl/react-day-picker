import React from 'react';
import { DayPicker } from 'react-day-picker';

export default function App() {
  const hiddenDays = [new Date(2022, 5, 10), new Date(2022, 5, 20)];
  return <DayPicker defaultMonth={new Date(2022, 5)} hidden={hiddenDays} />;
}
