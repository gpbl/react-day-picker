import { createContext, type ReactNode, useContext } from 'react';

import { startOfMonth } from 'date-fns/startOfMonth';

import type { CalendarDay } from '../../classes/CalendarDay';
import { DayPickerCalendar } from '../../contexts/CalendarContext';
import { useDayPicker } from '../../contexts/DayPickerContext';
import { useControlledValue } from '../../utils/useControlledValue';
import { getDates } from './utils/getDates';
import { getDays } from './utils/getDays';
import { getDisplayMonths } from './utils/getDisplayMonths';
import { getDropdownMonths } from './utils/getDropdownMonths';
import { getDropdownYears } from './utils/getDropdownYears';
import { getMonths } from './utils/getMonths';
import { getNextMonth } from './utils/getNextMonth';
import { getPreviousMonth } from './utils/getPreviousMonth';
import { getStartMonth } from './utils/getStartMonth';
import { getWeeks } from './utils/getWeeks';

export const calendarContext = createContext<DayPickerCalendar | undefined>(
  undefined
);

/**
 * The provider for the `calendarContext`, storing the calendar state.
 */
export function CalendarProvider(providerProps: { children?: ReactNode }) {
  const dayPicker = useDayPicker();

  const startMonth = getStartMonth(dayPicker);

  // The first month displayed in the calendar
  const [firstMonth, setFirstMonth] = useControlledValue(
    startMonth,
    dayPicker.month ? startOfMonth(dayPicker.month) : undefined
  );

  /** An array of the months displayed in the calendar. */
  const displayMonths = getDisplayMonths(firstMonth, dayPicker);

  /** The last month displayed in the calendar. */
  const lastMonth = displayMonths[displayMonths.length - 1];

  /** An array of the dates displayed in the calendar. */
  const dates = getDates(displayMonths, dayPicker.toDate, dayPicker);

  /** An array of the Months displayed in the calendar. */
  const months = getMonths(displayMonths, dates, dayPicker);

  /** An array of the Weeks displayed in the calendar. */
  const weeks = getWeeks(months);

  /** An array of the Days displayed in the calendar. */
  const days = getDays(months);

  const nextMonth = getNextMonth(firstMonth, dayPicker);
  const previousMonth = getPreviousMonth(firstMonth, dayPicker);

  function isDayDisplayed(day: CalendarDay) {
    return weeks.some((week) => {
      return week.days.some((d) => {
        return d.isEqualTo(day);
      });
    });
  }

  function goToMonth(date: Date) {
    if (dayPicker.disableNavigation) {
      return;
    }
    const month = startOfMonth(date);
    setFirstMonth(month);
    dayPicker.onMonthChange?.(month);
  }

  function goToDay(day: CalendarDay) {
    if (isDayDisplayed(day)) {
      return;
    }
    // if (refDate && isBefore(date, refDate)) {
    //   console.log('date is before refDate');
    //   const month = addMonths(date, 1 + dayPicker.numberOfMonths * -1);
    //   console.log('going to month', month);
    //   goToMonth(month);
    // } else {
    //   console.log('going to month', date);
    goToMonth(day.date);
    // }
  }

  function goToNextMonth() {
    return nextMonth ? goToMonth(nextMonth) : undefined;
  }
  function goToPreviousMonth() {
    return previousMonth ? goToMonth(previousMonth) : undefined;
  }

  const calendar: DayPickerCalendar = {
    dates,
    months,
    weeks,
    days,

    firstMonth,
    lastMonth,
    previousMonth,
    nextMonth,

    goToMonth,
    goToNextMonth,
    goToPreviousMonth,
    goToDay,
    isDayDisplayed,

    dropdown: {
      months: getDropdownMonths(dayPicker),
      years: getDropdownYears(dayPicker)
    }
  };

  return (
    <calendarContext.Provider value={calendar}>
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
