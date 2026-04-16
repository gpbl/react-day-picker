// @ts-nocheck
import React from "react";
import { DayPicker } from "../dist/esm/index.js";
import { arSA } from "../dist/esm/locale.js";

export function Rtl() {
  return <DayPicker dir="rtl" locale={arSA} />;
}
