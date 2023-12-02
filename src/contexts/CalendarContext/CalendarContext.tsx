import {
  addMonths,
  addYears,
  endOfYear,
  isBefore,
  isSameMonth,
  isSameYear,
  startOfMonth,
  startOfYear
} from 'date-fns';
import { createContext, type ReactNode, useContext } from 'react';

import {
  DayPickerCalendar,
  DayPickerDay
} from '../../contexts/CalendarContext';
import { useDayPicker } from '../../contexts/DayPickerContext';
import { useControlledValue } from '../../utils/useControlledValue';

import { getCalendar } from './utils/getCalendar';
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

  const calendar = getCalendar(currentMonth, lastMonth, dayPicker);

  const nextMonth = getNextMonth(currentMonth, dayPicker);
  const previousMonth = getPreviousMonth(currentMonth, dayPicker);

  function isDateDisplayed(date: Date) {
    return calendar.dayPickerMonths.some((month) =>
      isSameMonth(date, month.date)
    );
  }

  function goToMonth(date: Date) {
    if (dayPicker.disableNavigation) {
      return;
    }
    const month = startOfMonth(date);
    setMonth(month);
    dayPicker.onMonthChange?.(month);
  }

  function goToDate(date: Date, refDate?: Date) {
    if (isDateDisplayed(date)) {
      return;
    }
    if (refDate && isBefore(date, refDate)) {
      const month = addMonths(date, 1 + dayPicker.numberOfMonths * -1);
      goToMonth(month);
    } else {
      goToMonth(date);
    }
  }

  function getDayPickerDays() {
    const initialDays: DayPickerDay[] = [];
    return calendar.dayPickerMonths.reduce((days, month) => {
      const initialDays: DayPickerDay[] = [];
      const weekDays: DayPickerDay[] = month.weeks.reduce((weekDays, week) => {
        return [...weekDays, ...week.days];
      }, initialDays);
      return [...days, ...weekDays];
    }, initialDays);
  }

  function goToNextMonth() {
    return nextMonth ? goToMonth(nextMonth) : undefined;
  }
  function goToPreviousMonth() {
    return previousMonth ? goToMonth(previousMonth) : undefined;
  }

  function getDropdownMonths():
    | Array<[month: number, label: string]>
    | undefined {
    if (!dayPicker.fromDate) return undefined;
    if (!dayPicker.toDate) return undefined;
    const firstNavMonth = startOfMonth(dayPicker.fromDate);
    const lastNavMonth = startOfMonth(dayPicker.toDate);

    const months: number[] = [];
    let month = firstNavMonth;
    while (months.length < 12 && isBefore(month, addMonths(lastNavMonth, 1))) {
      months.push(month.getMonth());
      month = addMonths(month, 1);
    }
    const sortedMonths = months.sort((a, b) => {
      return a - b;
    });
    const options = sortedMonths.map((m) => {
      const label = dayPicker.formatters.formatMonthDropdown(
        m,
        dayPicker.locale
      );
      const option: [number, string] = [m, label];
      return option;
    });
    return options;
  }

  function getDropdownYears(): [year: number, label: string][] | undefined {
    if (!dayPicker.fromDate) return undefined;
    if (!dayPicker.toDate) return undefined;
    const firstNavYear = startOfYear(dayPicker.fromDate);
    const lastNavYear = endOfYear(dayPicker.toDate);

    const years: number[] = [];
    let year = firstNavYear;
    while (isBefore(year, lastNavYear) || isSameYear(year, lastNavYear)) {
      years.push(year.getFullYear());
      year = addYears(year, 1);
    }
    return years.map((year) => [
      year,
      dayPicker.formatters.formatYearDropdown(year)
    ]);
  }

  const dayPickerCalendar: DayPickerCalendar = {
    ...calendar,
    getDayPickerDays,
    getDropdownMonths: getDropdownMonths,
    getDropdownYears: getDropdownYears,
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
