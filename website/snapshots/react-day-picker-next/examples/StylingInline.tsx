import React from "react";

import { DayPicker } from "react-day-picker-next";

export function StylingInline() {
  return (
    <DayPicker
      styles={{
        month_caption: { color: "red" },
      }}
    />
  );
}
