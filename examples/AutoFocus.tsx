import { DayPicker } from "@daypicker/react";
import React from "react";

/** Test for the next focus day to not cause an infinite recursion. */
export function AutoFocus() {
  return (
    <div>
      <DayPicker autoFocus mode="single" />
    </div>
  );
}
