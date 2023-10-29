import { DayMouseEventHandler, DayPicker } from 'react-day-picker';

import { useState } from 'react';

const bookedDays = [new Date(2021, 5, 8), new Date(2021, 5, 9)];
const bookedStyle = { border: '2px solid currentColor' };

export function ModifiersCustom() {
  const [booked, setBooked] = useState(false);

  const handleDayClick: DayMouseEventHandler = (day, { booked }) => {
    setBooked(day && booked);
  };

  const footer = booked
    ? 'This day is already booked!'
    : 'Try to pick a booked day.';

  return (
    <DayPicker
      defaultMonth={new Date(2021, 5, 8)}
      modifiers={{ booked: bookedDays }}
      modifiersStyles={{ booked: bookedStyle }}
      onDayClick={handleDayClick}
      footer={footer}
    />
  );
}
