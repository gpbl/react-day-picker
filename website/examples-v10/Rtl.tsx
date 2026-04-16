// @ts-nocheck
import React from "react";
import { DayPicker } from "react-day-picker-v10";
import { arSA } from "react-day-picker-v10/locale";

export function Rtl() {
  return <DayPicker dir="rtl" locale={arSA} />;
}
