// @ts-nocheck
import React from "react";

import { DayPicker } from "../dist/esm/index.js";

export function RangeExcludeDisabled() {
  return (
    <DayPicker mode="range" disabled={{ dayOfWeek: [0, 6] }} excludeDisabled />
  );
}
