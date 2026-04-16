// @ts-nocheck
import React from "react";

import { DayPicker } from "../dist/esm/index.js";

export function MultipleMonthsPaged() {
  return <DayPicker numberOfMonths={2} pagedNavigation />;
}
