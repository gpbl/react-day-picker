// @ts-nocheck
import React from "react";
import { DayPicker } from "react-day-picker-v10";
import { hi } from "react-day-picker-v10/locale";

export function Numerals() {
  return <DayPicker numerals="deva" locale={hi} />;
}
