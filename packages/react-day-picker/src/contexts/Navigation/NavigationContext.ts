import * as React from 'react';

/** Represents the value of the [[NavigationContext]]. */
export interface NavigationContextValue {
  /** The current month. Note that when `numberOfMonths > 1` represent the first month in the displayed months. */
  month: Date;
  /** The months to display, according to `numberOfMonths`. */
  displayMonths: Date[];
  /** Navigate to the specified month. */
  goToMonth: (month: Date) => void;
  /** The next month to display. `undefined` if no months left */
  nextMonth?: Date;
  /** The previous month to display. `undefined` if no months left */
  previousMonth?: Date;
}

/**
 * The Navigation context shares details about the months being navigated in DayPicker.
 *
 * Access this context from the [[useNavigation]] hook.
 */
export const NavigationContext = React.createContext<
  NavigationContextValue | undefined
>(undefined);
