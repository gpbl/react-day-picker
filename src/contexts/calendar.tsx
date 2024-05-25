import { createContext, type ReactNode, useContext } from "react";

import { startOfMonth } from "date-fns/startOfMonth";

import { CalendarWeek, CalendarMonth } from "../classes";
import type { CalendarDay } from "../classes/CalendarDay";
import { DropdownOption } from "../components/Dropdown";
import { getDates } from "../helpers/getDates";
import { getDays } from "../helpers/getDays";
import { getDisplayMonths } from "../helpers/getDisplayMonths";
import { getDropdownMonths } from "../helpers/getDropdownMonths";
import { getDropdownYears } from "../helpers/getDropdownYears";
import { getMonths } from "../helpers/getMonths";
import { getNextMonth } from "../helpers/getNextMonth";
import { getPreviousMonth } from "../helpers/getPreviousMonth";
import { getStartMonth } from "../helpers/getStartMonth";
import { getWeeks } from "../helpers/getWeeks";
import { useControlledValue } from "../helpers/useControlledValue";

import { useProps } from "./props";

/**
 * Share the calendar state and navigation methods across the components.
 *
 * Access the calendar context using the {@link useCalendar} hook.
 *
 * @group Contexts
 */
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
  weeks: CalendarWeek[];
  /** The months displayed in the calendar. */
  months: CalendarMonth[];
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
  dropdownOptions: {
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

/** @private */
export function CalendarProvider(providerProps: { children?: ReactNode }) {
  const props = useProps();

  const startMonth = getStartMonth(props);

  // The first month displayed in the calendar
  const [firstMonth, setFirstMonth] = useControlledValue(
    startMonth,
    props.month ? startOfMonth(props.month) : undefined
  );

  /** An array of the months displayed in the calendar. */
  const displayMonths = getDisplayMonths(firstMonth, props);

  /** The last month displayed in the calendar. */
  const lastMonth = displayMonths[displayMonths.length - 1];

  /** An array of the dates displayed in the calendar. */
  const dates = getDates(displayMonths, props.toDate, props);

  /** An array of the Months displayed in the calendar. */
  const months = getMonths(displayMonths, dates, props);

  /** An array of the Weeks displayed in the calendar. */
  const weeks = getWeeks(months);

  /** An array of the Days displayed in the calendar. */
  const days = getDays(months);

  const nextMonth = getNextMonth(firstMonth, props);
  const previousMonth = getPreviousMonth(firstMonth, props);

  function isDayDisplayed(day: CalendarDay) {
    return weeks.some((week: CalendarWeek) => {
      return week.days.some((d) => {
        return d.isEqualTo(day);
      });
    });
  }

  function goToMonth(date: Date) {
    if (props.disableNavigation) {
      return;
    }
    const month = startOfMonth(date);
    setFirstMonth(month);
    props.onMonthChange?.(month);
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

    dropdownOptions: {
      months: getDropdownMonths(props),
      years: getDropdownYears(props)
    }
  };

  return (
    <calendarContext.Provider value={calendar}>
      {providerProps.children}
    </calendarContext.Provider>
  );
}

/**
 * Return the calendar state and navigation methods.
 *
 * @group Hooks
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function useCalendar(): CalendarContext {
  const context = useContext(calendarContext);
  if (!context)
    throw new Error(`useCalendar must be used within a CalendarProvider.`);

  return context;
}
