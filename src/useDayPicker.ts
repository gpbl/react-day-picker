import { createContext, useContext } from "react";

import { CalendarDay } from "./classes/CalendarDay.js";
import { CalendarMonth } from "./classes/CalendarMonth.js";
import type { DayPickerProps } from "./types/props.js";
import type { SelectedValue, SelectHandler } from "./types/selection.js";
import {
  ClassNames,
  CustomComponents,
  Formatters,
  Labels,
  Modifiers,
  Styles
} from "./types/shared.js";

/** @private */
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
  selected: SelectedValue<T> | undefined;
  /** Set a selection. */
  select: SelectHandler<T> | undefined;
  /** Whether the given date is selected. */
  isSelected: ((date: Date) => boolean) | undefined;
  /** The components used internally by DayP. */
  components: CustomComponents;
  /** The class names for the UI elements. */
  classNames: ClassNames;
  /** The styles for the UI elements. */
  styles: Partial<Styles> | undefined;
  /** The labels used in the UI. */
  labels: Labels;
  /** The formatters used to format the UI elements. */
  formatters: Formatters;
};

/**
 * Return the context to work with `<DayPicker />` inside custom components.
 *
 * @group Hooks
 * @see https://daypicker.dev/guides/custom-components
 */
export function useDayPicker<T extends DayPickerProps>(props?: T) {
  const context = useContext(dayPickerContext);
  if (context === undefined) {
    throw new Error("useDayPicker() must be used within a custom component.");
  }
  return context as DayPickerContext<T>;
}
