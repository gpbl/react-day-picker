import React from "react";

import type { DayPickerProps } from "./DayPickerProps";
import { Calendar } from "./components/Calendar";
import { ContextProviders } from "./contexts/providers";

/**
 * DayPicker is a React component to create date pickers, calendars, and date
 * inputs for web applications.
 *
 * @group Components
 * @see http://daypicker.dev
 */
export function DayPicker(props: DayPickerProps) {
  return (
    <ContextProviders {...props}>
      <Calendar />
    </ContextProviders>
  );
}
