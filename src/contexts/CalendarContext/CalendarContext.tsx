import { addMonths, isBefore, isSameMonth, startOfMonth } from 'date-fns';
import { DayPickerCalendar } from '../../contexts/CalendarContext';
import { getDates } from './utils/getDates';
import { getDays } from './utils/getDays';
import { getMonths } from './utils/getMonths';
import { getWeeks } from './utils/getWeeks';
import { getDisplayMonths } from './utils/getDisplayMonths';
import { getDropdownMonths } from './utils/getDropdownMonths';
import { getDropdownYears } from './utils/getDropdownYears';
import { getNextMonth } from './utils/getNextMonth';
import { getPreviousMonth } from './utils/getPreviousMonth';
import { getStartMonth } from './utils/getStartMonth';
import { useControlledValue } from '../../utils/useControlledValue';
import { useDayPicker } from '../../contexts/DayPickerContext';
import { createContext, type ReactNode, useContext } from 'react';

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

  function isDateDisplayed(date: Date) {
    return months.some((month) => isSameMonth(date, month.date));
  }

  function goToMonth(date: Date) {
    if (dayPicker.disableNavigation) {
      return;
    }
    const month = startOfMonth(date);
    setFirstMonth(month);
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
    goToDate,
    isDateDisplayed,

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
