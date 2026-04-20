import React from "react";

import { DayPicker, enUS } from "@daypicker/buddhist";

export function BuddhistEn() {
  return (
    <DayPicker showWeekNumber showOutsideDays locale={enUS} numerals="latn" />
  );
}
