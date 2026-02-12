import React from "react";

import { DayPicker, enUS } from "react-day-picker-v9/persian";

export function PersianEn() {
  return (
    <DayPicker showWeekNumber showOutsideDays locale={enUS} numerals="latn" />
  );
}
