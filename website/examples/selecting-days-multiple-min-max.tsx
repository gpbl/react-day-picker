import React from 'react';
import { DayPicker } from 'react-day-picker';

import { addDays } from 'date-fns';

const initialDays: Date[] = [addDays(new Date(), 1), addDays(new Date(), 2)];

export default function App() {
  const [days, setDays] = React.useState(initialDays);

  const footer =
    days.length > 0
      ? `You picked ${days.length} day(s).`
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
