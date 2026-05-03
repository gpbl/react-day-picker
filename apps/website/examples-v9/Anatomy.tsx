// @ts-nocheck
import React from "react";
import { type DateRange, DayPicker } from "react-day-picker-v9";

const selectedRange: DateRange = {
  from: new Date(2024, 5, 17),
  to: new Date(2024, 5, 20),
};

const selectedDay = new Date(2024, 5, 28);
const month = new Date(2024, 5);
const noop = () => undefined;

export function Anatomy() {
  return (
    <DayPicker
      mode="range"
      month={month}
      selected={selectedRange}
      today={new Date(2024, 5, 6)}
      disabled={new Date(2024, 5, 15)}
      modifiers={{ selected: selectedDay }}
      onSelect={noop}
      showOutsideDays
      showWeekNumber
      footer="Please pick a date"
    />
  );
}
