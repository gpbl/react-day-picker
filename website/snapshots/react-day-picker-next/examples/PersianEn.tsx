// @ts-nocheck
import React from "react";

import { DayPicker, enUS } from "../dist/esm/persian.js";

export function PersianEn() {
  return (
    <DayPicker showWeekNumber showOutsideDays locale={enUS} numerals="latn" />
  );
}
