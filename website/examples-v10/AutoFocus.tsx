// @ts-nocheck
import React from "react";

import { DayPicker } from "react-day-picker-v10";

/** Test for the next focus day to not cause an infinite recursion. */
export function AutoFocus() {
  return (
    <div>
      <DayPicker autoFocus mode="single" />
    </div>
  );
}
