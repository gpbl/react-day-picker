import * as React from 'react';

import { isSameMonth } from 'date-fns';

import { useDayPicker } from 'contexts';
import { NavigationContext } from './NavigationContext';
import { getDisplayMonths } from './utils/getDisplayMonths';
import { getInitialMonth } from './utils/getInitialMonth';
import { getNextMonth } from './utils/getNextMonth';
import { getPreviousMonth } from './utils/getPreviousMonth';

/** Provides the values for the [[NavigationContext]]. */
export function NavigationProvider(props: {
  children?: React.ReactNode;
}): JSX.Element {
  const context = useDayPicker();
  const initialMonth = getInitialMonth(context);

  const [month, setMonth] = React.useState<Date>(initialMonth);

  const goToMonth = (date: Date) => {
    if (context.disableNavigation) {
      return;
    }
    setMonth(date);
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
