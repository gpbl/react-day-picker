// @ts-nocheck
import React from "react";

import { DayPicker } from "../dist/esm/index.js";

export function DefaultMonth() {
  return <DayPicker defaultMonth={new Date(1979, 8)} />;
}
