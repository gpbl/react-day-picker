import * as React from 'react';

import { DayClickEventHandler, DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function Example() {
  const [selectedDay, setSelectedDay] = React.useState<Date>();
  const handleDayClick: DayClickEventHandler = (day) => setSelectedDay(day);

  const footer = selectedDay
    ? `You selected ${selectedDay.toLocaleDateString()}.`
    : 'Please pick a day.';
  return (
    <DayPicker
      mode="uncontrolled"
      selected={selectedDay}
      onDayClick={handleDayClick}
      footer={footer}
    />
  );
}
