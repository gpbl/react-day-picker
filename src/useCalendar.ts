import { useEffect, useState } from "react";

import type {
  CalendarWeek,
  CalendarDay,
  CalendarMonth
} from "./classes/index.js";
import { getDates } from "./helpers/getDates.js";
import { getDays } from "./helpers/getDays.js";
import { getDisplayMonths } from "./helpers/getDisplayMonths.js";
import { getInitialMonth } from "./helpers/getInitialMonth.js";
import { getMonths } from "./helpers/getMonths.js";
import { getNavMonths } from "./helpers/getNavMonth.js";
import { getNextMonth } from "./helpers/getNextMonth.js";
import { getPreviousMonth } from "./helpers/getPreviousMonth.js";
import { getWeeks } from "./helpers/getWeeks.js";
import type { DayPickerProps } from "./types/props.js";
import type { DateLib } from "./types/shared.js";

/**
 * Return the calendar object to work with the calendar in custom components.
 *
 * @see https://daypicker.dev/guides/custom-components
 */
export interface Calendar {
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

  /** The next month to display. */
  nextMonth: Date | undefined;
  /** The previous month to display. */
  previousMonth: Date | undefined;

  /**
   * The month where the navigation starts. `undefined` if the calendar can be
   * navigated indefinitely to the past.
   */
  navStart: Date | undefined;
  /**
   * The month where the navigation ends. `undefined` if the calendar can be
   * navigated indefinitely to the past.
   */
  navEnd: Date | undefined;

  /** Navigate to the specified month. Will fire the `onMonthChange` callback. */
  goToMonth: (month: Date) => void;
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
}

/** @private */
export function useCalendar(
  props: Pick<
    DayPickerProps,
    | "captionLayout"
    | "endMonth"
    | "startMonth"
    | "today"
    | "fixedWeeks"
    | "ISOWeek"
    | "weekStartsOn"
    | "numberOfMonths"
    | "disableNavigation"
    | "onMonthChange"
    | "month"
    | "defaultMonth"
    // Deprecated:
    | "fromMonth"
    | "fromYear"
    | "toMonth"
    | "toYear"
  >,
  dateLib: DateLib
): Calendar {
  const [navStart, navEnd] = getNavMonths(props, dateLib);

  const { startOfMonth, endOfMonth } = dateLib;

  const initialMonth = getInitialMonth(props, dateLib);

  const [firstMonth, setFirstMonth] = useState(initialMonth);

  // Update the displayed month if `month` changes
  useEffect(() => {
    const initialDisplayMonth = getInitialMonth(props, dateLib);
    setFirstMonth(initialDisplayMonth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.month]);

  // Update the displayed month if start/end month changes
  useEffect(() => {
    // TOFIX: this effect should do nothing if the current firstMonth is between
    // startMonth and endMonth
    const initialDisplayMonth = getInitialMonth(props, dateLib);
    setFirstMonth(initialDisplayMonth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.startMonth, props.endMonth]);

  /** The months displayed in the calendar. */
  const displayMonths = getDisplayMonths(firstMonth, navEnd, props, dateLib);

  /** The dates displayed in the calendar. */
  const dates = getDates(
    displayMonths,
    props.endMonth ? endOfMonth(props.endMonth) : undefined,
    props,
    dateLib
  );

  /** The Months displayed in the calendar. */
  const months = getMonths(displayMonths, dates, props, dateLib);

  /** The Weeks displayed in the calendar. */
  const weeks = getWeeks(months);

  /** The Days displayed in the calendar. */
  const days = getDays(months);

  const previousMonth = getPreviousMonth(firstMonth, navStart, props, dateLib);
  const nextMonth = getNextMonth(firstMonth, navEnd, props, dateLib);

  const { disableNavigation, onMonthChange } = props;

  const isDayInCalendar = (day: CalendarDay) =>
    weeks.some((week: CalendarWeek) => week.days.some((d) => d.isEqualTo(day)));

  const goToMonth = (date: Date) => {
    if (disableNavigation) {
      return;
    }
    let newMonth = startOfMonth(date);
    // if month is before start, use the first month instead
    if (navStart && newMonth < startOfMonth(navStart)) {
      newMonth = startOfMonth(navStart);
    }
    // if month is after endMonth, use the last month instead
    if (navEnd && newMonth > startOfMonth(navEnd)) {
      newMonth = startOfMonth(navEnd);
    }
    setFirstMonth(newMonth);
    onMonthChange?.(newMonth);
  };

  const goToDay = (day: CalendarDay) => {
    // is this check necessary?
    if (isDayInCalendar(day)) {
      return;
    }
    goToMonth(day.date);
  };

  const calendar = {
    months,
    weeks,
    days,

    navStart,
    navEnd,

    previousMonth,
    nextMonth,

    goToMonth,
    goToDay
  };

  return calendar;
}
