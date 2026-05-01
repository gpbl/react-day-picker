import { DayPicker } from "@daypicker/react";
import React from "react";

export function StylingInline() {
  return (
    <DayPicker
      styles={{
        month_caption: { color: "red" },
      }}
    />
  );
}
