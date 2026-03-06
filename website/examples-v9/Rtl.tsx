import React from "react";
import { DayPicker } from "react-day-picker-v9";
import { arSA } from "react-day-picker-v9/locale";

export function Rtl() {
  return <DayPicker dir="rtl" locale={arSA} />;
}
