import React from "react";

import { DayPicker, enUS } from "react-day-picker/hijri";

export function HijriEn() {
  return <DayPicker locale={enUS} dir="ltr" numerals="latn" />;
}
