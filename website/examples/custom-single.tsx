import React from 'react';
import { DayPicker } from 'react-day-picker';

export default function App() {
  const [selectedDay, setSelectedDay] = React.useState<Date>();
  const handleDayClick = (day) => setSelectedDay(day);

  const footer = selectedDay
    ? `You selected ${selectedDay.toDateString()}.`
    : 'Please pick a day.';

  return (
    <DayPicker
      mode="custom"
      selected={selectedDay}
      onDayClick={handleDayClick}
      footer={footer}
    />
  );
}
