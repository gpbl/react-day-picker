import React from "react";

import { DayPicker, enUS } from "@daypicker/hijri";

export function HijriEn() {
  return (
    <DayPicker showWeekNumber showOutsideDays locale={enUS} numerals="latn" />
  );
}
