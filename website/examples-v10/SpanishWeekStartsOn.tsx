// @ts-nocheck
import React from "react";
import { DayPicker } from "react-day-picker-v10";
import { es } from "react-day-picker-v10/locale";

export function SpanishWeekStartsOn() {
  return <DayPicker locale={es} weekStartsOn={0} />;
}
