import { DayPicker } from "@daypicker/react";
import React from "react";

import styles from "./styles/css-variables.module.css";

export function CssVariables() {
  return <DayPicker className={styles.datePicker} />;
}
