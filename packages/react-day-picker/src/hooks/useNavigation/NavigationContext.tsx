import * as React from 'react';

import { isSameMonth } from 'date-fns';

import { useDayPicker } from '../useDayPicker';
import { getDisplayMonths } from './utils/getDisplayMonths';

export type NavigationContextValue = {
  /** The current month. Note that when `numberOfMonths > 1` represent the first month in the displayed months. */
  month: Date;
  /** The months to display, according to `numberOfMonths`. */
  displayMonths: Date[];
  /** Navigate to the specified month. */
  setMonth: (month: Date) => void;
};

/** The navigation context holds values and setters for navigating between the
 * calendars. */
export const NavigationContext = React.createContext<
  NavigationContextValue | undefined
>(undefined);

/** Provides the values for the [[NavigationContext]]. */
export const NavigationProvider = ({
  children
}: {
  children?: React.ReactNode;
}): JSX.Element => {
  const context = useDayPicker();
  const [month, setMonthInternal] = React.useState<Date>(
    context.month || context.defaultMonth || context.today
  );

  const setMonth = (date: Date) => {
    if (context.disableNavigation) return;
    setMonthInternal(date);
  };

  React.useEffect(() => {
    if (!context.month) return;
    if (isSameMonth(context.month, month)) return;
    setMonth(context.month);
  }, [context.month]);

  const displayMonths = getDisplayMonths(month, context);
  return (
    <NavigationContext.Provider value={{ month, displayMonths, setMonth }}>
      {children}
    </NavigationContext.Provider>
  );
};
