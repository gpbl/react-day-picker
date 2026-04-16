import React from "react";

import { DayPicker } from "react-day-picker-next/hebrew";
import { enUS } from "react-day-picker-next/locale";

export function HebrewEn() {
  return <DayPicker locale={enUS} dir="ltr" numerals="latn" />;
}
