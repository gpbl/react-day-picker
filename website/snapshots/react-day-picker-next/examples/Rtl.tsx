import React from "react";
import { DayPicker } from "react-day-picker-next";
import { arSA } from "react-day-picker-next/locale";

export function Rtl() {
  return <DayPicker dir="rtl" locale={arSA} />;
}
