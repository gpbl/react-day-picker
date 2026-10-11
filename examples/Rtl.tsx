import { DayPicker } from "@daypicker/react";
import { arSA } from "@daypicker/react/locale/ar-SA";
import React from "react";

export function Rtl() {
  return <DayPicker dir="rtl" locale={arSA} />;
}
