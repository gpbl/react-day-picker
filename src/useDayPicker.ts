import { createContext, useContext } from "react";

import { CalendarDay } from "./classes/CalendarDay.js";
import { CalendarMonth } from "./classes/CalendarMonth.js";
import type { DayPickerProps } from "./types/props.js";
import type { Selected, SelectHandler } from "./types/selection.js";
import { Modifiers } from "./types/shared.js";

// Create a context with a default value
export const dayPickerContext = createContext<
  DayPickerContext<DayPickerProps> | undefined
>(undefined);

export type DayPickerContext<T extends DayPickerProps> = {
  /** The months displayed in the calendar. */
  months: CalendarMonth[];
  /** The next month to display. */
  nextMonth: Date | undefined;
  /** The previous month to display. */
  previousMonth: Date | undefined;
  /** Navigate to the specified month. Will fire the `onMonthChange` callback. */
  goToMonth: (month: Date) => void;
  /** Returns the modifiers for the given day. */
  getModifiers: (day: CalendarDay) => Modifiers;
  /** The selected date(s). */
  selected: Selected<T> | undefined;
  /** Set a selection. */
  select: SelectHandler<T> | undefined;
  /** Whether the given date is selected. */
  isSelected: ((date: Date) => boolean) | undefined;
};

/**
 * Return the context to work with `<DayPicker />` inside custom components.
 *
 * @group Hooks
 * @see https://daypicker.dev/next/guides/custom-components
 */
export function useDayPicker<T extends DayPickerProps>(props?: T) {
  const context = useContext(dayPickerContext);
  if (context === undefined) {
    throw new Error("useDayPicker() must be used within a custom component.");
  }
  return context as DayPickerContext<T>;
}
