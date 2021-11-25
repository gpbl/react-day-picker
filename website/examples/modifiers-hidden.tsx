import React from "react";
import { DayPicker } from "react-day-picker";

export function Example() {
  const hiddenDays = [
    new Date(2022, 5, 10),
    new Date(2022, 5, 20),
    new Date(2022, 5, 11),
  ];

  return <DayPicker month={hiddenDays[0]} hidden={hiddenDays} />;
}
