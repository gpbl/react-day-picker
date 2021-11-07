import React from 'react';
import { DayPicker } from 'react-day-picker';

import { format } from 'date-fns';

const today = new Date();

export function Example() {
  const [selectedDay, setSelectedDay] = React.useState(today);

  const footer = selectedDay
    ? `You selected ${format(selectedDay, 'PPP')}.`
    : `Please pick a day.`;

  return (
    <DayPicker
      mode="single"
      required
      defaultSelected={selectedDay}
      onSelect={setSelectedDay}
      footer={footer}
    />
  );
}
