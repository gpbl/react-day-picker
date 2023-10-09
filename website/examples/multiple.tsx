import * as React from 'react';

import { DayPicker } from 'react-day-picker';

export default function App() {
  const initialDays: Date[] = [];
  const [days, setDays] = React.useState<Date[] | undefined>(initialDays);

  const footer =
    days && days.length > 0 ? (
      <p>You selected {days.length} day(s).</p>
    ) : (
      <p>Please pick one or more days.</p>
    );

  return (
    <DayPicker
      mode="multiple"
      min={1}
      selected={days}
      onSelect={setDays}
      footer={footer}
    />
  );
}
