'use client';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { useState } from 'react';

export function CustomSingle() {
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
