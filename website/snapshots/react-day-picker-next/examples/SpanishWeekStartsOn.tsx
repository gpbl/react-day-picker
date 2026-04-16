// @ts-nocheck
import React from "react";
import { DayPicker } from "../dist/esm/index.js";
import { es } from "../dist/esm/locale.js";

export function SpanishWeekStartsOn() {
  return <DayPicker locale={es} weekStartsOn={0} />;
}
