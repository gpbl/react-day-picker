import React from "react";

import { DayPicker } from "react-day-picker";

const availableDays = [new Date(2021, 5, 23), new Date(2021, 5, 24)];

const availableStyle = {
  fontWeight: 900,
  color: "lightgreen",
};

export function ModifiersStyle() {
  return (
    <DayPicker
      mode="single"
      defaultMonth={availableDays[0]}
      modifiers={{
        available: availableDays,
      }}
      modifiersStyles={{
        available: availableStyle,
      }}
    />
  );
}
