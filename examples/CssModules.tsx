import { DayPicker } from "@daypicker/react";
import classNames from "@daypicker/react/style.module.css";
import React from "react";

export function CssModules() {
  return <DayPicker mode="single" classNames={classNames} />;
}
