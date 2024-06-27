import React, { type ReactElement, createContext, useContext } from "react";

import type { CalendarWeek, CalendarDay, CalendarMonth } from "../classes";
import type { DropdownOption } from "../components/Dropdown";
import { getDates } from "../helpers/getDates";
import { getDays } from "../helpers/getDays";
import { getDisplayMonths } from "../helpers/getDisplayMonths";
import { getDropdownMonths } from "../helpers/getDropdownMonths";
import { getDropdownYears } from "../helpers/getDropdownYears";
import { getInitialMonth } from "../helpers/getInitialMonth";
import { getMonths } from "../helpers/getMonths";
import { getNextMonth } from "../helpers/getNextMonth";
import { getPreviousMonth } from "../helpers/getPreviousMonth";
import { getWeeks } from "../helpers/getWeeks";
import { useControlledValue } from "../helpers/useControlledValue";

import { useProps } from "./useProps";

/** @private */
const CalendarContext = createContext<CalendarContextValue | undefined>(
  undefined
);

export type CalendarContextValue = {
  today: Date;
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
   * The month displayed as first the calendar. When `numberOfMonths` is greater
   * than `1`, it is the first of the displayed months.
   */
  firstMonth: Date;
  /** The month displayed as last the calendar. */
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

  /** Set the first month displayed in the calendar. */
  setFirstMonth: (date: Date) => void;

  /** Navigate to the specified month. Will fire the `onMonthChange` callback. */
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
};

function useCalendarContextValue(): CalendarContextValue {
  const props = useProps();
  const { startOfMonth } = props.dateLib;

  const initialDisplayMonth = getInitialMonth(props);

  // The first month displayed in the calendar
  const [firstDisplayedMonth, setFirstMonth] = useControlledValue(
    initialDisplayMonth,
    props.month ? startOfMonth(props.month) : undefined
  );

  /** An array of the months displayed in the calendar. */
  const displayMonths = getDisplayMonths(firstDisplayedMonth, props);

  /** The last month displayed in the calendar. */
  const lastMonth = displayMonths[displayMonths.length - 1];

  /** An array of the dates displayed in the calendar. */
  const dates = getDates(displayMonths, props.endMonth, props);

  /** An array of the Months displayed in the calendar. */
  const months = getMonths(displayMonths, dates, props);

  /** An array of the Weeks displayed in the calendar. */
  const weeks = getWeeks(months);

  /** An array of the Days displayed in the calendar. */
  const days = getDays(months);

  const previousMonth = getPreviousMonth(firstDisplayedMonth, props);
  const nextMonth = getNextMonth(firstDisplayedMonth, props);

  const isInteractive =
    props.mode !== undefined || props.onDayClick !== undefined;

  const { disableNavigation, onMonthChange, startMonth, endMonth } = props;

  function isDayDisplayed(day: CalendarDay) {
    return weeks.some((week: CalendarWeek) => {
      return week.days.some((d) => {
        return d.isEqualTo(day);
      });
    });
  }

  function goToMonth(date: Date) {
    if (disableNavigation) {
      return;
    }
    let newMonth = startOfMonth(date);
    // if month is before startMonth, use the first month instead
    if (startMonth && newMonth < startOfMonth(startMonth)) {
      newMonth = startOfMonth(startMonth);
    }
    // if month is after endMonth, use the last month instead
    if (endMonth && newMonth > startOfMonth(endMonth)) {
      newMonth = startOfMonth(endMonth);
    }
    setFirstMonth(newMonth);
    onMonthChange?.(newMonth);
  }

  function goToDay(day: CalendarDay) {
    if (isDayDisplayed(day)) {
      return;
    }

    // TODO:??
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

  const calendarContextValue: CalendarContextValue = {
    dates,
    months,
    weeks,
    days,

    today: props.today,

    firstMonth: firstDisplayedMonth,
    lastMonth,
    previousMonth,
    nextMonth,

    setFirstMonth,

    dropdownOptions: {
      months: getDropdownMonths(firstDisplayedMonth, props),
      years: getDropdownYears(firstDisplayedMonth, props)
    },
    isDayDisplayed,
    goToMonth,
    goToDay,
    goToNextMonth,
    goToPreviousMonth
  };

  return calendarContextValue;
}

/** @private */
export function CalendarContextProvider(props: { children: ReactElement }) {
  const calendarContextValue = useCalendarContextValue();
  return (
    <CalendarContext.Provider value={calendarContextValue}>
      {props.children}
    </CalendarContext.Provider>
  );
}

/**
 * Access to the props passed to `DayPicker`, with some meaningful defaults.
 *
 * Use this hook from the custom components passed via the `components` prop.
 *
 * @group Hooks
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function useCalendar() {
  const calendarContext = useContext(CalendarContext);
  if (!calendarContext) {
    throw new Error(
      "useCalendar() must be used within a CalendarContextProvider"
    );
  }
  return calendarContext;
}
