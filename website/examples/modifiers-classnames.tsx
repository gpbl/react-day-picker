import React from 'react';
import { DayPicker } from 'react-day-picker';

const bookedDays = [
  new Date(2021, 5, 8),
  new Date(2021, 5, 9),
  new Date(2021, 5, 11)
];

const style = `
  .my-booked-class {
    color: tomato;
  }
`;

export default function App() {
  return (
    <>
      <style>{style}</style>
      <DayPicker
        defaultMonth={bookedDays[0]}
        modifiers={{
          booked: bookedDays
        }}
        modifierClassNames={{
          booked: 'my-booked-class'
        }}
      />
    </>
  );
}
