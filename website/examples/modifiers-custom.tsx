import React from "react";
import {
  DayClickEventHandler,
  DayPicker,
  SelectSingleEventHandler,
} from "react-day-picker";

const bookedDays = [
  new Date(2021, 5, 8),
  new Date(2021, 5, 9),
  { from: new Date(2021, 5, 14), to: new Date(2021, 5, 19) },
];
const bookedStyle = { border: "2px solid currentColor" };

export function Example() {
  const [booked, setBooked] = React.useState(false);

  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    setBooked(day && modifiers.booked);
  };

  const footer = booked
    ? "This day is already booked!"
    : "Try to pick a booked day.";

  return (
    <DayPicker
      defaultMonth={new Date(2021, 5, 8)}
      modifiers={{ booked: bookedDays }}
      modifierStyles={{ booked: bookedStyle }}
      onDayClick={handleDayClick}
      footer={footer}
    />
  );
}
