// @ts-nocheck
import React from "react";

import { DayPicker, enUS } from "react-day-picker-v10/buddhist";

export function BuddhistEn() {
  return (
    <DayPicker showWeekNumber showOutsideDays locale={enUS} numerals="latn" />
  );
}
