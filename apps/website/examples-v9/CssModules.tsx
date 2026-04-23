// @ts-nocheck
import React from "react";

import { DayPicker } from "react-day-picker-v9";
import classNames from "react-day-picker-v9/style.module.css";

export function CssModules() {
  return <DayPicker mode="single" classNames={classNames} />;
}
