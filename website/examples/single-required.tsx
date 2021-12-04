import React from 'react';
import { DayPicker } from 'react-day-picker';

import { format } from 'date-fns';

export default function App() {
  const today = new Date();
  const [selectedDay, setSelectedDay] = React.useState<
    Date | undefined
  >(today);

  const footer = selectedDay
    ? `You selected ${format(selectedDay, 'PPP')}.`
    : `Please pick a day.`;

  return (
    <DayPicker
      mode="single"
      required
      selected={selectedDay}
      onSelect={setSelectedDay}
      footer={footer}
    />
  );
}
