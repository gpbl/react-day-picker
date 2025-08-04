import React from "react";

import { DayPicker, type DayPickerProps } from "react-day-picker";

export function Dropdown(props: DayPickerProps) {
  return (
    <DayPicker
      defaultMonth={new Date(2024, 6)}
      captionLayout="dropdown"
      startMonth={new Date(2024, 6)}
      endMonth={new Date(2025, 9)}
      {...props}
    />
  );
}
