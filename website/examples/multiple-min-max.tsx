import React from 'react';
import { DayPicker } from 'react-day-picker';

export default function App() {
  const [days, setDays] = React.useState([]);

  const footer =
    days.length > 0
      ? `You selected ${days.length} day(s).`
      : `Please pick one or more days.`;

  return (
    <DayPicker
      mode="multiple"
      min={2}
      max={5}
      selected={days}
      onSelect={setDays}
      footer={footer}
    />
  );
}
