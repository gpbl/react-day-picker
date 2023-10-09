import React, { useState } from 'react';

import { isSameDay } from 'date-fns';
import { DayClickEventHandler, DayPicker } from 'react-day-picker';

export default function App() {
  const [selectedDays, setSelectedDays] = useState<Date[]>([]);

  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    const newSelectedDays = [...selectedDays];
    if (modifiers.selected) {
      const index = selectedDays.findIndex((selectedDay) =>
        isSameDay(day, selectedDay)
      );
      newSelectedDays.splice(index, 1);
    } else {
      newSelectedDays.push(day);
    }
    setSelectedDays(newSelectedDays);
  };

  const handleResetClick = () => setSelectedDays([]);

  let footer = <p>Please pick one or more days.</p>;

  if (selectedDays.length > 0)
    footer = (
      <p>
        You selected {selectedDays.length} days.{' '}
        <button onClick={handleResetClick}>Reset</button>
      </p>
    );

  return (
    <DayPicker
      onDayClick={handleDayClick}
      selected={selectedDays}
      footer={footer}
    />
  );
}
