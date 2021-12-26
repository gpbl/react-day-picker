import React from 'react';
import { DayPicker } from 'react-day-picker';

const availableDays = [new Date(2021, 5, 23), new Date(2021, 5, 24)];

const availableStyle = {
  fontWeight: 900,
  color: 'lightgreen'
};

export default function App() {
  return (
    <DayPicker
      defaultMonth={availableDays[0]}
      modifiers={{
        available: availableDays
      }}
      modifierStyles={{
        available: availableStyle
      }}
    />
  );
}
