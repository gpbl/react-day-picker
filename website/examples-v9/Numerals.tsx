import React from "react";
import { DayPicker } from "react-day-picker-v9";
import { hi } from "react-day-picker-v9/locale";

export function Numerals() {
  return <DayPicker numerals="deva" locale={hi} />;
}
