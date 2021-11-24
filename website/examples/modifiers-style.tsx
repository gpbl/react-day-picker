import React, { CSSProperties } from "react";
import { DayClickEventHandler, DayPicker } from "react-day-picker";

export function Example() {
  const availableDays = [
    new Date(2021, 5, 23),
    new Date(2021, 5, 24),
  ];
  const availableStyle: CSSProperties = {
    fontWeight: 900,
    color: "lightgreen",
  };

  const handleDayClick: DayClickEventHandler = (
    day,
    { available }
  ) => {
    if (available) alert("You clicked an available day.");
  };

  return (
    <DayPicker
      mode="single"
      defaultMonth={availableDays[0]}
      modifiers={{
        available: availableDays,
      }}
      modifierStyles={{
        available: availableStyle,
      }}
      onDayClick={handleDayClick}
    />
  );
}
