import React from "react";

import { DayPicker } from "react-day-picker/hebrew";
import { enUS } from "react-day-picker/locale";

export function HebrewEn() {
  return <DayPicker locale={enUS} dir="ltr" numerals="latn" />;
}
