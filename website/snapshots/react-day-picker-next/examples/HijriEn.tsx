import React from "react";

import { DayPicker, enUS } from "react-day-picker-next/hijri";

export function HijriEn() {
  return (
    <DayPicker showWeekNumber showOutsideDays locale={enUS} numerals="latn" />
  );
}
