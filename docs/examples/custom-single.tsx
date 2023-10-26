import { DayPicker } from 'react-day-picker';

import { useState } from 'react';

export default function App() {
  const [selectedDay, setSelectedDay] = useState<Date>();
  const handleDayClick = (day: Date) => setSelectedDay(day);

  return (
    <DayPicker
      selected={selectedDay}
      onDayClick={handleDayClick}
      footer={selectedDay && `You selected ${selectedDay.toDateString()}`}
    />
  );
}
