import * as React from 'react';

import { isSameMonth } from 'date-fns';

import { useDayPicker } from '../useDayPicker';
import { getDisplayMonths } from './utils/getDisplayMonths';
import { getInitialMonth } from './utils/getInitialMonth';
import { getNextMonth } from './utils/getNextMonth';
import { getPreviousMonth } from './utils/getPreviousMonth';

export type NavigationContextValue = {
  /** The current month. Note that when `numberOfMonths > 1` represent the first month in the displayed months. */
  month: Date;
  /** The months to display, according to `numberOfMonths`. */
  displayMonths: Date[];
  /** Navigate to the specified month. */
  setMonth: (month: Date) => void;
  /** The next month to display. `undefined` if no months left */
  nextMonth?: Date;
  /** The previous month to display. `undefined` if no months left */
  previousMonth?: Date;
};

/** The navigation context holds values and setters for navigating between the
 * calendars. */
export const NavigationContext = React.createContext<
  NavigationContextValue | undefined
>(undefined);

export type NavigationProviderProps = {
  children?: React.ReactNode;
};

/** Provides the values for the [[NavigationContext]]. */
export const NavigationProvider = (
  props: NavigationProviderProps
): JSX.Element => {
  const context = useDayPicker();
  const initialMonth = getInitialMonth(context);

  const [month, setMonthInternal] = React.useState<Date>(initialMonth);

  const setMonth = (date: Date) => {
    if (context.disableNavigation) {
      return;
    }
    setMonthInternal(date);
  };

  React.useEffect(() => {
    if (!context.month) {
      return;
    }
    if (isSameMonth(context.month, month)) {
      return;
    }
    setMonth(context.month);
  }, [context.month]);

  const displayMonths = getDisplayMonths(month, context);
  const nextMonth = getNextMonth(month, context);
  const previousMonth = getPreviousMonth(month, context);

  return (
    <NavigationContext.Provider
      value={{ month, displayMonths, setMonth, previousMonth, nextMonth }}
    >
      {props.children}
    </NavigationContext.Provider>
  );
};
