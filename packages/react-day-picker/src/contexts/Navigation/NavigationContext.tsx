import React, { createContext, ReactNode, useContext } from 'react';

import { useCalendar } from 'contexts/Calendar';

/**
 * Represents the value of the {@link NavigationContext}.
 * @deprecated Use the {@link CalendarContext} instead.
 */
export interface NavigationContextValue {
  /** The month to display in the calendar. When `numberOfMonths` is greater than one, is the first of the displayed months. */
  currentMonth: Date;
  /** The months rendered by DayPicker. DayPicker can render multiple months via `numberOfMonths`. */
  displayMonths: Date[];
  /** Navigate to the specified month. */
  goToMonth: (month: Date) => void;
  /** Navigate to the specified date. */
  goToDate: (date: Date, refDate?: Date) => void;
  /** The next month to display. */
  nextMonth?: Date;
  /** The previous month to display. */
  previousMonth?: Date;
  /** Whether the given day is included in the displayed months. */
  isDateDisplayed: (day: Date) => boolean;
}

/**
 * The Navigation context shares details and methods to navigate the months in DayPicker.
 * Access this context from the {@link useNavigation} hook.
 * @deprecated Use the {@link CalendarContext} instead.
 */
export const NavigationContext = createContext<
  NavigationContextValue | undefined
>(undefined);

/** Provides the values for the {@link NavigationContext}. */
export function NavigationProvider(props: {
  children?: ReactNode;
}): JSX.Element {
  const { calendar, currentMonth, goToMonth, goToDate, isDateDisplayed } =
    useCalendar();

  const displayMonths = calendar.months.map((month) => month.month);

  const value: NavigationContextValue = {
    ...calendar,
    currentMonth,
    displayMonths,
    goToMonth,
    goToDate,
    isDateDisplayed
  };

  return (
    <NavigationContext.Provider value={value}>
      {props.children}
    </NavigationContext.Provider>
  );
}

/**
 * Hook to access the {@link NavigationContextValue}. Use this hook to navigate
 * between months or years in DayPicker.
 *
 * This hook is meant to be used inside internal or custom components.
 *
 * @deprecated Use the {@link useCalendar} hook instead.
 */
export function useNavigation(): NavigationContextValue {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
