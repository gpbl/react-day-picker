import * as React from 'react';

import { DayPicker, SelectSingleEventHandler } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function Example() {
  const bookedDays = [
    new Date(2021, 5, 8),
    new Date(2021, 5, 9),
    { from: new Date(2021, 5, 14), to: new Date(2021, 5, 19) }
  ];
  const bookedStyle = { border: '2px solid currentColor' };

  const [alreadyBooked, setAlreadyBooked] = React.useState<boolean>(false);

  const handleSelect: SelectSingleEventHandler = (day, _, modifiers) => {
    if (day && modifiers.booked) {
      setAlreadyBooked(true);
    } else {
      setAlreadyBooked(false);
    }
  };

  const footer = alreadyBooked
    ? 'This day is already booked!'
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
      mode="single"
      onSelect={handleSelect}
      footer={footer}
    />
  );
}
