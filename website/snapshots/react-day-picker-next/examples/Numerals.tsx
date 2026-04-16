// @ts-nocheck
import React from "react";
import { DayPicker } from "../dist/esm/index.js";
import { hi } from "../dist/esm/locale.js";

export function Numerals() {
  return <DayPicker numerals="deva" locale={hi} />;
}
