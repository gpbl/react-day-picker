// @ts-nocheck
import React from "react";

import { DayPicker } from "../dist/esm/index.js";
import classNames from "../src/style.module.css";

export function CssModules() {
  return <DayPicker mode="single" classNames={classNames} />;
}
