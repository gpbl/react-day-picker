import * as React from 'react';

import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function Example() {
  const [selectedDay, setSelectedDay] = React.useState<Date>();

  const footer = selectedDay
    ? `You selected ${format(selectedDay, 'PPP')}.`
    : `Please pick a day.`;

  return <DayPicker mode="single" onSelect={setSelectedDay} footer={footer} />;
}
