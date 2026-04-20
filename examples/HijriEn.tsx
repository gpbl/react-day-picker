import { DayPicker, enUS } from "@daypicker/hijri";
import React from "react";

export function HijriEn() {
  return (
    <DayPicker showWeekNumber showOutsideDays locale={enUS} numerals="latn" />
  );
}
