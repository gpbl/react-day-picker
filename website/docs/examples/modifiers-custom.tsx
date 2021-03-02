import React, { useState } from 'react';
import { DayPicker, SelectEventHandler } from 'react-day-picker';

export default function App() {
  const bookedDays = [
    new Date(2021, 5, 8),
    new Date(2021, 5, 9),
    { after: new Date(2021, 5, 20) }
  ];
  const bookedStyle = { textDecoration: 'underline' };

  const [alreadyBooked, setAlreadyBooked] = useState<boolean>(false);

  const handleSelect: SelectEventHandler = (day, selectedDay, { booked }) => {
    if (day && booked) {
      setAlreadyBooked(true);
    } else {
      setAlreadyBooked(false);
    }
  };

  const footer = alreadyBooked
    ? 'This day is already booked. Choose another one.'
    : 'Try to pick a booked day.';

  return (
    <DayPicker
      defaultMonth={new Date(2021, 5, 8)}
      modifiers={{
        booked: bookedDays
      }}
      modifierStyles={{
        booked: bookedStyle
      }}
      onSelect={handleSelect}
      footer={footer}
    />
  );
}
