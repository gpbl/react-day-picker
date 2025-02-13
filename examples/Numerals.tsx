import React from "react";

import { hi } from "date-fns/locale/hi";
import { DayPicker } from "react-day-picker";

export function Numerals() {
  return <DayPicker numerals="deva" locale={hi} />;
}
