import { createContext, useContext } from "react";

import type { DayPickerProps } from "./types/props.js";
import type { UseCalendar } from "./useCalendar.js";
import type { UseModifiers } from "./useModifiers.js";
import type {
  UseMulti,
  UseRange,
  UseSelection,
  UseSingle
} from "./useSelection.js";

export type {
  UseCalendar,
  UseModifiers,
  UseSelection,
  UseMulti,
  UseRange,
  UseSingle
};

// Create a context with a default value
export const dayPickerContext = createContext<
  (UseCalendar & UseModifiers & UseSelection<DayPickerProps>) | undefined
>(undefined);

/**
 * Return API to work with `<DayPicker />` inside custom components.
 *
 * @group Hooks
 * @see https://daypicker.dev/next/guides/custom-components
 */
export function useDayPicker<T extends DayPickerProps>(props?: T) {
  const context = useContext(dayPickerContext);
  if (context === undefined) {
    throw new Error("useDayPicker() must be used within a custom component.");
  }
  return context as UseCalendar & UseModifiers & UseSelection<T>;
}
