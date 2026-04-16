// @ts-nocheck
import React from "react";

import { DayPicker } from "../dist/esm/index.js";

import styles from "./styles/css-variables.module.css";

export function CssVariables() {
  return <DayPicker className={styles.datePicker} />;
}
