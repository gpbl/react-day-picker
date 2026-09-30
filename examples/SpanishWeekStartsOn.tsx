import { DayPicker } from "@daypicker/react";
import { es } from "@daypicker/react/locale/es";
import React from "react";

export function SpanishWeekStartsOn() {
  return <DayPicker locale={es} weekStartsOn={0} />;
}
