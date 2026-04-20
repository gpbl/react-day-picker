import { DayPicker, enUS } from "@daypicker/hebrew";
import React from "react";

export function HebrewEn() {
  return <DayPicker locale={enUS} dir="ltr" numerals="latn" />;
}
