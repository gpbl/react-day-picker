import React from 'react';
import { DayClickEventHandler, DayPicker } from 'react-day-picker';

export default function App() {
  return <DayPicker modifiers={{ today: false }} />;
}
