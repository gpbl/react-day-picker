import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

import { addDays, format } from 'date-fns';

export default function App() {
  const defaultSelected: Date[] = [
    addDays(new Date(), 1),
    addDays(new Date(), 2)
  ];
  const [days, setDays] = useState(defaultSelected);

  const footer =
    days.length > 0
      ? `You picked ${days.map((day) => format(day, 'PPP')).join(', ')}`
      : `Please pick one or more days.`;

  return (
    <DayPicker
      mode="multiple"
      min={2}
      max={5}
      defaultSelected={defaultSelected}
      onSelect={setDays}
      footer={footer}
    />
  );
}
