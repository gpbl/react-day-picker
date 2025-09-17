import React from "react";

import { DayPicker, enUS } from "react-day-picker/buddhist";

export function BuddhistEn() {
  return (
    <DayPicker showWeekNumber showOutsideDays locale={enUS} numerals="latn" />
  );
}
