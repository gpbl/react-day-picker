import { DayPicker, enUS } from "@daypicker/persian";
import React from "react";

export function PersianEn() {
  return (
    <DayPicker showWeekNumber showOutsideDays locale={enUS} numerals="latn" />
  );
}
