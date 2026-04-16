import React from "react";
import { DayPicker } from "react-day-picker-next";
import { hi } from "react-day-picker-next/locale";

export function Numerals() {
  return <DayPicker numerals="deva" locale={hi} />;
}
