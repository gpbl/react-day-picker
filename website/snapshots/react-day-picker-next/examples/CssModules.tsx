import React from "react";

import { DayPicker } from "react-day-picker-next";
import classNames from "react-day-picker-next/style.module.css";

export function CssModules() {
  return <DayPicker mode="single" classNames={classNames} />;
}
