// @ts-nocheck
import React from "react";
import { DayPicker } from "react-day-picker-v9";
import { es } from "react-day-picker-v9/locale";

export function SpanishWeekStartsOn() {
  return <DayPicker locale={es} weekStartsOn={0} />;
}
