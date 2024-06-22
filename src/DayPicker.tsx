import React from "react";

import { Calendar } from "./components/Calendar";
import { ContextProviders } from "./contexts/providers";
import type { DayPickerProps } from "./types";

/**
 * Render the date picker calendar.
 *
 * @group DayPicker
 * @see http://daypicker.dev
 */
export function DayPicker(props: DayPickerProps) {
  return (
    <ContextProviders {...props}>
      <Calendar />
    </ContextProviders>
  );
}
