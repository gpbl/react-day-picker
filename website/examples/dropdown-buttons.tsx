import React from 'react';
import { DayPicker } from 'react-day-picker';

export default function App() {
  return (
    <DayPicker fromYear={2015} toYear={2025} captionLayout="dropdown-buttons" />
  );
}
