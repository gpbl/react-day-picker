import React from "react";

import { DayPicker, enUS } from "@daypicker/persian";

export function PersianEn() {
  return (
    <DayPicker showWeekNumber showOutsideDays locale={enUS} numerals="latn" />
  );
}
