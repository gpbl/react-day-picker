import React from 'react';

import { useDayPicker } from '../DayPicker';
import { useNavigationState } from './useNavigationState';
import { getDisplayMonths } from './utils/getDisplayMonths';
import { getNextMonth } from './utils/getNextMonth';
import { getPreviousMonth } from './utils/getPreviousMonth';

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

/** Provides the values for the [[NavigationContext]]. */
export function NavigationProvider(props: {
  children?: React.ReactNode;
}): JSX.Element {
  const context = useDayPicker();
  const [month, goToMonth] = useNavigationState();

  const displayMonths = getDisplayMonths(month, context);
  const nextMonth = getNextMonth(month, context);
  const previousMonth = getPreviousMonth(month, context);

  return (
    <NavigationContext.Provider
      value={{
        month,
        displayMonths,
        goToMonth,
        previousMonth,
        nextMonth
      }}
    >
      {props.children}
    </NavigationContext.Provider>
  );
}
