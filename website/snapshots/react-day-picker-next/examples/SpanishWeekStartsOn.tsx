import React from "react";
import { DayPicker } from "react-day-picker-next";
import { es } from "react-day-picker-next/locale";

export function SpanishWeekStartsOn() {
  return <DayPicker locale={es} weekStartsOn={0} />;
}
