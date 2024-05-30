import React from "react";

import { Calendar } from "./components/Calendar";
import { ContextProviders } from "./contexts";
import type { DayPickerProps, Mode } from "./types";

/**
 * DayPicker is a React component to create date pickers, calendars, and date
 * inputs for web applications. Use the `components` prop to swap this component
 * with a custom one.
 *
 * Use the `components` prop to swap this component with a custom one.
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
