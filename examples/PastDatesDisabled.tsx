import { DayPicker } from "@daypicker/react";
import React from "react";

export function PastDatesDisabled() {
  return <DayPicker mode="single" disabled={{ before: new Date() }} />;
}
