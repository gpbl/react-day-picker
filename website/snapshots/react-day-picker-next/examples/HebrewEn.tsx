// @ts-nocheck
import React from "react";

import { DayPicker } from "../dist/esm/hebrew/index.js";
import { enUS } from "../dist/esm/locale.js";

export function HebrewEn() {
  return <DayPicker locale={enUS} dir="ltr" numerals="latn" />;
}
