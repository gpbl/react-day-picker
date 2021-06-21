import * as React from 'react';

import { useDayPicker } from 'contexts/DayPicker';

import { NavigationContext } from './NavigationContext';
import { useNavigationState } from './useNavigationState';
import { getDisplayMonths } from './utils/getDisplayMonths';
import { getNextMonth } from './utils/getNextMonth';
import { getPreviousMonth } from './utils/getPreviousMonth';

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
