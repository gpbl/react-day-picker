import React, { CSSProperties } from 'react';
import { DayClickEventHandler, DayPicker } from 'react-day-picker';

export default function App() {
  const bookedDays = [new Date(2021, 5, 8), new Date(2021, 5, 9)];
  const bookedStyle: CSSProperties = { color: 'tomato' };

  const availableDays = [new Date(2021, 5, 23), new Date(2021, 5, 24)];
  const availableStyle: CSSProperties = {
    fontWeight: 900,
    color: 'lightgreen'
  };

  const handleDayClick: DayClickEventHandler = (day, { booked, available }) => {
    if (booked) alert('You clicked a booked day.');
    if (available) alert('You clicked an available day.');
  };

  return (
    <DayPicker
      defaultMonth={bookedDays[0]}
      modifiers={{
        booked: bookedDays,
        available: availableDays
      }}
      modifiersStyles={{
        booked: bookedStyle,
        available: availableStyle
      }}
      onDayClick={handleDayClick}
    />
  );
}
