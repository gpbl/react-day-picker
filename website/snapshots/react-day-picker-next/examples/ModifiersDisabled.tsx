// @ts-nocheck
import React from "react";

import { DayPicker } from "../dist/esm/index.js";

export function ModifiersDisabled() {
  return <DayPicker mode="range" disabled={{ dayOfWeek: [0, 6] }} />;
}
