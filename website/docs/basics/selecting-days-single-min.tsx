import * as React from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

const today = new Date();

export default function App() {
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
