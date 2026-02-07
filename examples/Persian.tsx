import React from "react";

import { DayPicker } from "react-day-picker/persian";

export function Persian() {
  return (
    <div style={{ fontFamily: "Vazirmatn, sans-serif" }}>
      <DayPicker mode="single" />
    </div>
  );
}
