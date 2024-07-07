import { createContext, useContext } from "react";

import type { DayPickerProps } from "./types/props.js";
import type { UseCalendar } from "./useCalendar.js";
import type { UseModifiers } from "./useModifiers.js";
import type { UseSelection } from "./useSelection.js";

/**
 * Represents the context provided by `<DayPicker />` to use within custom
 * components.
 */
export type DayPickerContext<T extends DayPickerProps> = UseCalendar &
  UseModifiers &
  UseSelection<T>;

// Create a context with a default value
export const dayPickerContext = createContext<
  DayPickerContext<DayPickerProps> | undefined
>(undefined);

/**
 * Return API to work with `<DayPicker />` inside custom components.
 *
 * @group Hooks
 */
export function useDayPicker<T extends DayPickerProps>(
  props?: T
): DayPickerContext<T> {
  const context = useContext(dayPickerContext);
  if (context === undefined) {
    throw new Error("useDayPicker() must be used within a custom component.");
  }
  return context as DayPickerContext<T>;
}
