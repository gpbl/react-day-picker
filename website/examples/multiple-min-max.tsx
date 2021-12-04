import React from 'react';
import { DayPicker } from 'react-day-picker';

export default function App() {
  // TODO: remove the `undefined` type (see #1312)
  const [days, setDays] = React.useState<Date[] | undefined>();

  const footer =
    days && days.length > 0
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
