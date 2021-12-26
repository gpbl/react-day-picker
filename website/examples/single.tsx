import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

import { format } from 'date-fns';

export default function App() {
  const [selectedDay, setSelectedDay] = useState<Date>();

  const footer = selectedDay
    ? `You selected ${format(selectedDay, 'PPP')}.`
    : `Please pick a day.`;

  return (
    <DayPicker
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      footer={footer}
    />
  );
}
