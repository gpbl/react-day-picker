// @ts-nocheck
import React from "react";

import { DayPicker } from "react-day-picker-v10";
import classNames from "react-day-picker-v10/style.module.css";

export function CssModules() {
  return <DayPicker mode="single" classNames={classNames} />;
}
