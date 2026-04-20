import React from "react";

import { DayPicker, enUS } from "@daypicker/hebrew";

export function HebrewEn() {
  return <DayPicker locale={enUS} dir="ltr" numerals="latn" />;
}
