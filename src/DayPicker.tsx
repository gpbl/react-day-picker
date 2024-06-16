import React from "react";

import { Calendar } from "./components/Calendar";
import { ContextProviders } from "./contexts/providers";
import type { DayPickerProps, Mode } from "./types";

/**
 * DayPicker is a React component to create date pickers, calendars, and date
 * inputs for web applications.
 *
 * @template ModeType - The selection mode.
 * @template IsRequired - Whether the selection is required.
 * @group Components
 * @see http://daypicker.dev
 */
export function DayPicker<
  ModeType extends Mode | undefined = undefined,
  IsRequired extends boolean = false
>(props: DayPickerProps<ModeType, IsRequired>) {
  return (
    <ContextProviders {...props}>
      <Calendar />
    </ContextProviders>
  );
}
