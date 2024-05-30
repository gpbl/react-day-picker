import React from "react";

import { DayPicker } from "react-day-picker";
import classNames from "react-day-picker/style.module.css";

export function CssModules() {
  return <DayPicker classNames={classNames} />;
}
