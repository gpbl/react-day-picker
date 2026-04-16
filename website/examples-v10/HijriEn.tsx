// @ts-nocheck
import React from "react";

import { DayPicker, enUS } from "react-day-picker-v10/hijri";

export function HijriEn() {
  return (
    <DayPicker showWeekNumber showOutsideDays locale={enUS} numerals="latn" />
  );
}
