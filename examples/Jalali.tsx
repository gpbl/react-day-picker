import React from "react";

import { faIR } from "date-fns/locale";
import { DayPicker } from "react-day-picker/jalali";

export function Jalali() {
  return <DayPicker mode="single" locale={faIR} dir="rtl" />;
}
