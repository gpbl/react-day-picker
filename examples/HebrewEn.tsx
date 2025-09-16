import React from "react";

import { DayPicker, enUS } from "react-day-picker/hebrew";

export function HebrewEn() {
  return <DayPicker locale={enUS} dir="ltr" numerals="latn" />;
}
