// @ts-nocheck
import React from "react";

import { DayPicker } from "../dist/esm/index.js";

export function FromToMonth() {
  const defaultMonth = new Date(2015, 5);
  return (
    <DayPicker
      defaultMonth={defaultMonth}
      startMonth={defaultMonth}
      endMonth={new Date(2015, 10, 20)}
    />
  );
}
