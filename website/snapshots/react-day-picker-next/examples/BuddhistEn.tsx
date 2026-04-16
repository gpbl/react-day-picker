// @ts-nocheck
import React from "react";

import { DayPicker, enUS } from "../dist/esm/buddhist/index.js";

export function BuddhistEn() {
  return (
    <DayPicker showWeekNumber showOutsideDays locale={enUS} numerals="latn" />
  );
}
