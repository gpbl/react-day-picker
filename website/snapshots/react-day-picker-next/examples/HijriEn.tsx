// @ts-nocheck
import React from "react";

import { DayPicker, enUS } from "../dist/esm/hijri/index.js";

export function HijriEn() {
  return (
    <DayPicker showWeekNumber showOutsideDays locale={enUS} numerals="latn" />
  );
}
