import React from "react";
import { DayPicker } from "react-day-picker";
import { arSA } from "react-day-picker/locale";

export function Rtl() {
  return <DayPicker dir="rtl" locale={arSA} />;
}
