import React from "react";
import { DayPicker } from "react-day-picker";
import { es } from "react-day-picker/locale";

export function SpanishWeekStartsOn() {
  return <DayPicker locale={es} weekStartsOn={0} />;
}
