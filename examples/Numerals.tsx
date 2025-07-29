import { hi } from "date-fns/locale/hi";
import React from "react";
import { DayPicker } from "react-day-picker";

export function Numerals() {
  return <DayPicker numerals="deva" locale={hi} />;
}
