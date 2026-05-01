import { DayPicker } from "@daypicker/react";
import { arSA } from "@daypicker/react/locale";
import React from "react";

export function Rtl() {
  return <DayPicker dir="rtl" locale={arSA} />;
}
