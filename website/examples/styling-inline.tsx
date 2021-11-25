import React from "react";
import { DayPicker } from "react-day-picker";

export function Example() {
  return (
    <DayPicker
      styles={{
        caption_label: { color: "red" },
      }}
    />
  );
}
