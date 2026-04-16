// @ts-nocheck
import React from "react";

import { DayPicker } from "react-day-picker-v10";

export function StylingInline() {
  return (
    <DayPicker
      styles={{
        month_caption: { color: "red" },
      }}
    />
  );
}
