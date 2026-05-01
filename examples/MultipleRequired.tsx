import { DayPicker } from "@daypicker/react";
import React from "react";

export function MultipleRequired() {
  return <DayPicker mode="multiple" required selected={[new Date()]} />;
}
