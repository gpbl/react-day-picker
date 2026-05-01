import { DayPicker } from "@daypicker/react";
import { hi } from "@daypicker/react/locale";
import React from "react";

export function Numerals() {
  return <DayPicker numerals="deva" locale={hi} />;
}
