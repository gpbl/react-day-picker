import React from 'react';
import { DayPicker } from 'react-day-picker';

export default function App() {
  const initialDays: Date[] = [];
  const [days, setDays] = React.useState<Date[] | undefined>(
    initialDays
  );

  const footer =
    days && days.length > 0
      ? `You selected ${days.length} day(s).`
      : `Please pick one or more days.`;

  return (
    <DayPicker
      mode="multiple"
      required
      selected={days}
      onSelect={setDays}
      footer={footer}
    />
  );
}
