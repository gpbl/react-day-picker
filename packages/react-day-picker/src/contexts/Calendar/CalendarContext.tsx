import React, { createContext, ReactNode, useContext } from 'react';

import { addMonths, isBefore, isSameMonth, startOfMonth } from 'date-fns';

import { DayPickerProps, defaultProps } from 'components/DayPicker';
import { DayPickerCalendar } from 'contexts/Calendar';
import { useControlledValue } from 'hooks/useControlledValue';

import { getCalendar } from './getCalendar';
import { getFirstLastMonths } from './utils/getFirstLastMonths';
import { getNextMonth } from './utils/getNextMonth';
import { getPreviousMonth } from './utils/getPreviousMonth';

export interface CalendarContextValue {
  calendar: DayPickerCalendar;
  /** The month to display in the calendar. When `numberOfMonths` is greater than one, is the first of the displayed months. */
  currentMonth: Date;
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

export const CalendarContext = createContext<CalendarContextValue | undefined>(
  undefined
);

/** The props for the {@link CalendarProvider}. */
export interface CalendarProviderProps {
  /** The initial props from the DayPicker component. */
  dayPickerProps: DayPickerProps;
  children?: ReactNode;
}
/**
 * The provider for the {@link CalendarContext}, storing the calendar state.
 */
export function CalendarProvider(props: CalendarProviderProps) {
  const { dayPickerProps } = props;
  const { numberOfMonths = defaultProps.numberOfMonths } = dayPickerProps;
  const [firstMonth, lastMonth] = getFirstLastMonths(dayPickerProps);
  const [currentMonth, setMonth] = useControlledValue(
    firstMonth,
    dayPickerProps.month
  );
  const goToMonth = (date: Date) => {
    if (dayPickerProps.disableNavigation) return;
    const month = startOfMonth(date);
    setMonth(month);
    dayPickerProps.onMonthChange?.(month);
  };

  const calendar = getCalendar(currentMonth, lastMonth, {
    numberOfMonths: dayPickerProps.numberOfMonths,
    ISOWeek: dayPickerProps.ISOWeek,
    locale: dayPickerProps.locale,
    weekStartsOn: dayPickerProps.weekStartsOn
  });

  const nextMonth = getNextMonth(currentMonth, dayPickerProps);
  const previousMonth = getPreviousMonth(currentMonth, dayPickerProps);

  const isDateDisplayed = (date: Date) => {
    return calendar.months.some((dayPickerMonth) =>
      isSameMonth(date, dayPickerMonth.month)
    );
  };

  const goToDate = (date: Date, refDate?: Date) => {
    if (isDateDisplayed(date)) {
      return;
    }
    if (refDate && isBefore(date, refDate)) {
      const month = addMonths(date, 1 + numberOfMonths * -1);
      goToMonth(month);
    } else {
      goToMonth(date);
    }
  };

  const calendarContextValue: CalendarContextValue = {
    calendar,
    goToMonth,
    goToDate,
    currentMonth,
    previousMonth,
    nextMonth,
    isDateDisplayed
  };
  return (
    <CalendarContext.Provider value={calendarContextValue}>
      {props.children}
    </CalendarContext.Provider>
  );
}

/**
 * Hook to access the {@link CalendarContext}.
 *
 * Use the Calendar context to access to the months and date displayed in DayPicker.
 */
export function useCalendar(): CalendarContextValue {
  const context = useContext(CalendarContext);
  if (!context)
    throw new Error(`useCalendar must be used within a CalendarProvider.`);

  return context;
}
