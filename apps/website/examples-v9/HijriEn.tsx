// @ts-nocheck
import React from "react";

import { DayPicker, enUS } from "react-day-picker-v9/hijri";

export function HijriEn() {
  return (
    <DayPicker showWeekNumber showOutsideDays locale={enUS} numerals="latn" />
  );
}
