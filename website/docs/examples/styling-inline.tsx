import React from 'react';
import { DayPicker } from 'react-day-picker';

export default function App() {
  return (
    <DayPicker
      styles={{
        captionLabel: { color: 'red' }
      }}
    />
  );
}
