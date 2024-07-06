import { createContext, useContext } from "react";

import type { UseCalendar } from "./contexts/useCalendar.js";
import type { UseModifiers } from "./contexts/useModifiers.js";
import type { useSelection } from "./selection/useSelection.js";
import { DayPickerProps } from "./types/props.js";

// Define the shape of the context data
export type DayPickerContext<T extends DayPickerProps> = UseCalendar &
  UseModifiers &
  ReturnType<typeof useSelection<T>>;

// Create a context with a default value
export const dayPickerContext = createContext<
  DayPickerContext<DayPickerProps> | undefined
>(undefined);

/**
 * Return API to work with `<DayPicker />` inside custom components.
 *
 * @see https://daypicker.dev/next/advanced-guides/custom-components
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
