import React, { useState } from 'react';
import { DayPicker, SelectMultipleEventHandler } from 'react-day-picker';

import { format } from 'date-fns';

export default function App() {
  const defaultSelected = [];
  const [days, setDays] = useState(defaultSelected);

  const footer =
    days.length > 0
      ? `You picked ${days.map((day) => format(day, 'PPP')).join(', ')}`
      : `Please pick one or more days.`;

  return (
    <DayPicker
      mode="multiple"
      required
      defaultSelected={days}
      onSelectMultiple={setDays}
      footer={footer}
    />
  );
}
