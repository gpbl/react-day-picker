import React from "react";

import { DayPicker, enUS } from "react-day-picker-next/buddhist";

export function BuddhistEn() {
  return (
    <DayPicker showWeekNumber showOutsideDays locale={enUS} numerals="latn" />
  );
}
