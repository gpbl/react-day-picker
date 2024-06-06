import React from "react";

import { Calendar } from "./components/Calendar";
import { ContextProviders } from "./contexts/root";
import type { DayPickerProps, Mode } from "./types";

/**
 * DayPicker is a React component to create date pickers, calendars, and date
 * inputs for web applications.
 *
 * @template T - The {@link Mode | selection mode}. Defaults to `"default"`.
 * @template R - Whether the selection is required. Defaults to `false`.
 * @group Components
 * @see http://daypicker.dev
 */
export function DayPicker<
  T extends Mode = "default",
  R extends boolean = false
>(props: DayPickerProps<T, R>) {
  return (
    <ContextProviders {...props}>
      <Calendar />
    </ContextProviders>
  );
}
