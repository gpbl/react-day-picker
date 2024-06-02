import React from "react";

import { Calendar } from "./components/Calendar";
import { ContextProviders } from "./contexts/root";
import type { DayPickerProps, Mode } from "./types";

/**
 * DayPicker is a React component to create date pickers, calendars, and date
 * inputs for web applications.
 *
 * @group Components
 * @see http://daypicker.dev
 */
export function DayPicker<T extends Mode = "default">(
  props: DayPickerProps<T>
) {
  return (
    <ContextProviders {...props}>
      <Calendar />
    </ContextProviders>
  );
}
