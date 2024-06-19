import React from "react";

import { Calendar } from "./components/Calendar";
import { ContextProviders } from "./contexts/providers";
import type { DayPickerProps } from "./types/props";

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
