import { addMonths, isBefore, isSameMonth, startOfMonth } from 'date-fns';
import { createContext, ReactNode, useContext } from 'react';

import {
  DayPickerCalendar,
  DayPickerDay
} from '../../contexts/CalendarContext';
import { useDayPicker } from '../../contexts/DayPickerContext';
import { useControlledValue } from '../../utils/useControlledValue';

import { getMonthsAndDates } from './getMonthsAndDates';
import { getFirstLastMonths } from './utils/getFirstLastMonths';
import { getNextMonth } from './utils/getNextMonth';
import { getPreviousMonth } from './utils/getPreviousMonth';

export const calendarContext = createContext<DayPickerCalendar | undefined>(
  undefined
);

/**
 * The provider for the `calendarContext`, storing the calendar state.
 */
export function CalendarProvider(providerProps: { children?: ReactNode }) {
  const dayPicker = useDayPicker();
  const [firstMonth, lastMonth] = getFirstLastMonths(dayPicker);
  const [currentMonth, setMonth] = useControlledValue(
    firstMonth,
    dayPicker.month
  );

  const goToMonth = (date: Date) => {
    if (dayPicker.disableNavigation) return;
    const month = startOfMonth(date);
    setMonth(month);
    dayPicker.onMonthChange?.(month);
  };

  const calendar = getMonthsAndDates(currentMonth, lastMonth, dayPicker);

  const nextMonth = getNextMonth(currentMonth, dayPicker);
  const previousMonth = getPreviousMonth(currentMonth, dayPicker);

  const isDateDisplayed = (date: Date) => {
    return calendar.months.some((dayPickerMonth) =>
      isSameMonth(date, dayPickerMonth.date)
    );
  };

  const goToDate = (date: Date, refDate?: Date) => {
    if (isDateDisplayed(date)) {
      return;
    }
    if (refDate && isBefore(date, refDate)) {
      const month = addMonths(date, 1 + dayPicker.numberOfMonths * -1);
      goToMonth(month);
    } else {
      goToMonth(date);
    }
  };

  const getDays = () => {
    const initialDays: DayPickerDay[] = [];
    return calendar.months.reduce((days, month) => {
      const initialDays: DayPickerDay[] = [];
      const weekDays: DayPickerDay[] = month.weeks.reduce((weekDays, week) => {
        return [...weekDays, ...week.days];
      }, initialDays);
      return [...days, ...weekDays];
    }, initialDays);
  };

  const goToNextMonth = () => (nextMonth ? goToMonth(nextMonth) : undefined);
  const goToPreviousMonth = () =>
    previousMonth ? goToMonth(previousMonth) : undefined;

  const dayPickerCalendar: DayPickerCalendar = {
    ...calendar,
    getDays,
    goToMonth,
    goToNextMonth,
    goToPreviousMonth,
    goToDate,
    currentMonth,
    previousMonth,
    nextMonth,
    isDateDisplayed
  };
  return (
    <calendarContext.Provider value={dayPickerCalendar}>
      {providerProps.children}
    </calendarContext.Provider>
  );
}

/**
 * Use this hook to access to the dates displayed in the calendar and to navigate between months.
 */
export function useCalendar(): DayPickerCalendar {
  const context = useContext(calendarContext);
  if (!context)
    throw new Error(`useCalendar must be used within a CalendarProvider.`);

  return context;
}
