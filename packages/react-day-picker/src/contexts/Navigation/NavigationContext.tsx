import React, { createContext, ReactNode } from 'react';

import { addMonths, isBefore, isSameMonth } from 'date-fns';

import { useDayPicker } from '../DayPicker';
import { useNavigationState } from './useNavigationState';
import { getDisplayMonths } from './utils/getDisplayMonths';
import { getNextMonth } from './utils/getNextMonth';
import { getPreviousMonth } from './utils/getPreviousMonth';

/** Represents the value of the [[NavigationContext]]. */
export interface NavigationContextValue {
  /** The current month. Note that when `numberOfMonths > 1` represent the first month in the displayed months. */
  month: Date;
  /** The months rendered by DayPicker. DayPicker can render one than one month via `numberOfMonths`. */
  displayMonths: Date[];
  /** Navigate to the specified month. */
  goToMonth: (month: Date) => void;
  /** Navigate to the specified date. */
  goToDate: (date: Date, refDate?: Date) => void;
  /** The next month to display. `undefined` if no months left */
  nextMonth?: Date;
  /** The previous month to display. `undefined` if no months left */
  previousMonth?: Date;
  /** Return true if the day is displayed in the calendar. */
  isDateDisplayed: (day: Date) => boolean;
}

/**
 * The Navigation context shares details about the months being navigated in DayPicker.
 *
 * Access this context from the [[useNavigation]] hook.
 */
export const NavigationContext = createContext<
  NavigationContextValue | undefined
>(undefined);

/** Provides the values for the [[NavigationContext]]. */
export function NavigationProvider(props: {
  children?: ReactNode;
}): JSX.Element {
  const dayPicker = useDayPicker();
  const [month, goToMonth] = useNavigationState();

  const displayMonths = getDisplayMonths(month, dayPicker);
  const nextMonth = getNextMonth(month, dayPicker);
  const previousMonth = getPreviousMonth(month, dayPicker);

  const isDateDisplayed = (date: Date) => {
    return displayMonths.some((displayMonth) =>
      isSameMonth(date, displayMonth)
    );
  };

  const goToDate = (date: Date, refDate?: Date) => {
    if (isDateDisplayed(date)) {
      return;
    }

    if (refDate && isBefore(date, refDate)) {
      goToMonth(addMonths(date, 1 + dayPicker.numberOfMonths * -1));
    } else {
      goToMonth(date);
    }
  };

  const value: NavigationContextValue = {
    month,
    displayMonths,
    goToMonth,
    goToDate,
    previousMonth,
    nextMonth,
    isDateDisplayed
  };

  return (
    <NavigationContext.Provider value={value}>
      {props.children}
    </NavigationContext.Provider>
  );
}
