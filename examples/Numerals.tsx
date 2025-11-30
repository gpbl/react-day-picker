import React from "react";
import { DayPicker } from "react-day-picker";
import { hi } from "react-day-picker/locale";

export function Numerals() {
  return <DayPicker numerals="deva" locale={hi} />;
}
