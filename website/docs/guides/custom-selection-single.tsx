import * as React from 'react';
import { DayClickEventHandler, DayPicker } from 'react-day-picker';

export default function App() {
  const [selectedDay, setSelectedDay] = React.useState<Date>();
  const handleDayClick: DayClickEventHandler = (day) => setSelectedDay(day);

  const footer = selectedDay
    ? `You selected ${selectedDay.toLocaleDateString()}.`
    : 'Please pick a day.';
  return (
    <DayPicker
      onDayClick={handleDayClick}
      selected={selectedDay}
      footer={footer}
    />
  );
}
