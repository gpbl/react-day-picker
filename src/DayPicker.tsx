import React from "react";

import { Calendar } from "./components/Calendar.js";
import { ContextProviders } from "./contexts/providers.js";
import type { DayPickerProps } from "./types/index.js";

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
