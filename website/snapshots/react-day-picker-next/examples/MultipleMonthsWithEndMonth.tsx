// @ts-nocheck
import React from "react";

import { DayPicker } from "../dist/esm/index.js";

export function MultipleMonthsWithEndMonth() {
  return (
    <DayPicker
      numberOfMonths={3}
      endMonth={new Date()}
      pagedNavigation={false}
    />
  );
}
