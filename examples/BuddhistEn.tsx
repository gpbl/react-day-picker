import { DayPicker, enUS } from "@daypicker/buddhist";
import React from "react";

export function BuddhistEn() {
  return (
    <DayPicker showWeekNumber showOutsideDays locale={enUS} numerals="latn" />
  );
}
