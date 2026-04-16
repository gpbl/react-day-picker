// @ts-nocheck
import React, { useState } from "react";

import { DayPicker } from "../dist/esm/index.js";

export function SingleRequired() {
  const [selectedDay, setSelectedDay] = useState<Date>();

  return (
    <DayPicker
      mode="single"
      required
      selected={selectedDay}
      onSelect={(date) => date && setSelectedDay(date)}
    />
  );
}
