import React, { useState } from 'react';
import { DayClickEventHandler, DayPicker } from 'react-day-picker';

export default function App() {
  const bookedDays = [new Date(2021, 5, 8), new Date(2021, 5, 9)];
  const bookedStyle = { color: 'tomato' };

  const handleDayClick: DayClickEventHandler = (day, { booked }) => {
    if (booked) {
      alert('You clicked a booked day.');
    }
  };
  return (
    <DayPicker
      defaultMonth={bookedDays[0]}
      modifiers={{
        booked: bookedDays
      }}
      modifiersStyles={{
        booked: bookedStyle
      }}
      onDayClick={handleDayClick}
    />
  );
}
