import { createContext, type ReactNode, useContext } from 'react';

import { startOfMonth } from 'date-fns/startOfMonth';

import type { CalendarDay } from '../../classes/CalendarDay';
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
import { Week, Month } from '../../classes';
import { DropdownOption } from '../../components/custom-components';

/** @category Contexts */
export interface CalendarContext {
  /** All the unique dates displayed to the calendar. */
  dates: Date[];
  /**
   * All the days displayed in the calendar. As opposite from
   * {@link CalendarContext.dates}, it may return duplicated dates when shown
   * outside the month.
   */
  days: CalendarDay[];
  /** The months displayed in the calendar. */
  weeks: Week[];
  /** The months displayed in the calendar. */
  months: Month[];
  /**
   * The month displayed as first the calendar. When
   * {@link PropsBase.numberOfMonths} is greater than `1`, it is the first of the
   * displayed months.
   */
  firstMonth: Date;
  /**
   * The month displayed as last the calendar. When
   * {@link PropsBase.numberOfMonths} is greater than `1`, it is the last of the
   * displayed months.
   */
  lastMonth: Date;
  /** The next month to display. */
  nextMonth: Date | undefined;
  /** The previous month to display. */
  previousMonth: Date | undefined;
  /** The options to use in the years or months dropdowns. */
  dropdown: {
    /** The options to use in the months dropdown. */
    months: DropdownOption[] | undefined;
    /** The options to use in the years dropdown. */
    years: DropdownOption[] | undefined;
  };
  /**
   * Navigate to the specified month. Will fire the
   * {@link PropsBase.onMonthChange} callback.
   */
  goToMonth: (month: Date) => void;
  /** Navigate to the next month. */
  goToNextMonth: () => void;
  /** Navigate to the previous month. */
  goToPreviousMonth: () => void;
  /**
   * Navigate to the specified date. If the second parameter (refDate) is
   * provided and the date is before the refDate, then the month is set to one
   * month before the date.
   *
   * @param day - The date to navigate to.
   * @param dateToCompare - Optional. If `date` is before `dateToCompare`, the
   *   month is set to one month before the date.
   */
  goToDay: (day: CalendarDay) => void;
  /** Whether the given date is included in the displayed months. */
  isDayDisplayed: (day: CalendarDay) => boolean;
}

const calendarContext = createContext<CalendarContext | undefined>(undefined);

/**
 * The provider for the `calendarContext`, storing the calendar state.
 *
 * @category Contexts
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

    // TODO:
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

  const calendar: CalendarContext = {
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
 * Use this hook to access to the dates displayed in the calendar and to
 * navigate between months.
 *
 * @category Contexts
 */
export function useCalendar(): CalendarContext {
  const context = useContext(calendarContext);
  if (!context)
    throw new Error(`useCalendar must be used within a CalendarProvider.`);

  return context;
} /** The calendar displayed in DayPicker. */
