// @ts-nocheck
import React from "react";

import { DayPicker } from "react-day-picker-v10";

import styles from "./styles/css-variables.module.css";

export function CssVariables() {
  return <DayPicker className={styles.datePicker} />;
}
