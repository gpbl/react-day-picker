import * as React from 'react';

import { isSameMonth } from 'date-fns';
import { useDayPicker } from 'hooks';
import { NavigationContextValue } from 'types';

import { getDisplayMonths } from './utils/getDisplayMonths';
import { getInitialMonth } from './utils/getInitialMonth';
import { getNextMonth } from './utils/getNextMonth';
import { getPreviousMonth } from './utils/getPreviousMonth';

/** The navigation context holds values and setters for navigating between the calendars. */
export const NavigationContext = React.createContext<
  NavigationContextValue | undefined
>(undefined);

/** Provides the values for the [[NavigationContext]]. */
export const NavigationProvider = (props: {
  children?: React.ReactNode;
}): JSX.Element => {
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
