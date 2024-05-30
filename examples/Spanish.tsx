import React from "react";

import { es } from "date-fns/locale/es";
import { DayPicker } from "react-day-picker";

export function Spanish() {
  return <DayPicker locale={es} />;
}
