// @ts-nocheck
import React from "react";

import { DayPicker } from "react-day-picker-v10/hebrew";
import { enUS } from "react-day-picker-v10/locale";

export function HebrewEn() {
  return <DayPicker locale={enUS} dir="ltr" numerals="latn" />;
}
