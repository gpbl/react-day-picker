import React, { CSSProperties } from 'react';
import { DayClickEventHandler, DayPicker } from 'react-day-picker';

export default function App() {
  const bookedDays = [new Date(2021, 5, 8), new Date(2021, 5, 9)];

  const handleDayClick: DayClickEventHandler = (day, { booked, available }) => {
    if (booked) alert('You clicked a booked day.');
  };

  const style = `.rdp .rdp-day.my-booked-class { color: tomato }`;

  return (
    <>
      <head>
        <style>{style}</style>
      </head>
      <DayPicker
        defaultMonth={bookedDays[0]}
        modifiers={{
          booked: bookedDays
        }}
        modifiersClassNames={{
          booked: 'my-booked-class'
        }}
        onDayClick={handleDayClick}
      />
    </>
  );
}
