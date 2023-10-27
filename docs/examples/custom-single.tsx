import { DayPicker } from 'react-day-picker';

import { useState } from 'react';

export default function App() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  return (
    <DayPicker
      modifiers={{
        selected: selectedDate
      }}
      onDayClick={(day, modifiers) => {
        if (modifiers.selected) {
          setSelectedDate(undefined);
        } else {
          setSelectedDate(day);
        }
      }}
      footer={selectedDate && `You selected ${selectedDate.toDateString()}`}
    />
  );
}
