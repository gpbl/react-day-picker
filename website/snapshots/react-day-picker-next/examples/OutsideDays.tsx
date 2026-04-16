// @ts-nocheck
import React from "react";

import { DayPicker } from "../dist/esm/index.js";

export function OutsideDays() {
  return <DayPicker showOutsideDays today={new Date(2021, 10, 25)} />;
}
