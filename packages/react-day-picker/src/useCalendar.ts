import { useEffect, useMemo } from "react";

import type {
  CalendarDay,
  CalendarMonth,
  CalendarWeek,
  DateLib,
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
import { useControlledValue } from "./helpers/useControlledValue.js";
import type { DayPickerProps } from "./types/props.js";
import type { VisibleMonthsChangeSource } from "./types/shared.js";

/**
 * Returns the calendar object used by DayPicker custom components.
 *
 * @see https://daypicker.dev/guides/custom-components
 */
export interface Calendar {
  /**
   * All the days displayed in the calendar. Unlike
   * {@link CalendarContext.dates}, it may contain duplicated dates when shown
   * outside the month.
   */
  days: CalendarDay[];
  /** The weeks displayed in the calendar. */
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
   * navigated indefinitely to the future.
   */
  navEnd: Date | undefined;

  /** Navigate to the specified month. Will fire the `onMonthChange` callback. */
  goToMonth: (month: Date) => void;
  /**
   * Navigate one displayed month by index. Will fire the
   * `onVisibleMonthsChange` callback.
   */
  goToVisibleMonth: (
    index: number,
    month: Date,
    source: VisibleMonthsChangeSource,
  ) => Date | undefined;
  /**
   * Navigate to the month containing the specified day when it falls outside
   * the currently displayed calendar.
   *
   * @param day - The date to navigate to.
   */
  goToDay: (day: CalendarDay, refDay?: CalendarDay) => void;
  /** Whether the calendar is using the `visibleMonths` display model. */
  usesVisibleMonths: boolean;
}

/**
 * Provides the calendar object to work with the calendar in custom components.
 *
 * @private
 * @param props - The DayPicker props related to calendar configuration.
 * @param dateLib - The date utility library instance.
 * @returns The calendar object containing displayed days, weeks, months, and
 *   navigation methods.
 */
export function useCalendar(
  props: Pick<
    DayPickerProps,
    | "captionLayout"
    | "endMonth"
    | "startMonth"
    | "today"
    | "fixedWeeks"
    | "ISOWeek"
    | "numberOfMonths"
    | "pagedNavigation"
    | "reverseMonths"
    | "disableNavigation"
    | "onMonthChange"
    | "onVisibleMonthsChange"
    | "month"
    | "defaultMonth"
    | "mode"
    | "timeZone"
    | "broadcastCalendar"
    | "visibleMonths"
    | "defaultVisibleMonths"
  >,
  dateLib: DateLib,
): Calendar {
  const [navStart, navEnd] = getNavMonths(props, dateLib);

  const { startOfMonth, endOfMonth } = dateLib;
  const initialMonth = getInitialMonth(props, navStart, navEnd, dateLib);
  const [firstMonth, setFirstMonth] = useControlledValue(
    initialMonth,
    // initialMonth is always computed from props.month if provided
    props.month ? initialMonth : undefined,
  );
  const usesVisibleMonths =
    props.visibleMonths !== undefined ||
    props.defaultVisibleMonths !== undefined;
  const normalizeVisibleMonths = (
    months: Date[] | undefined,
    fallbackMonth: Date,
  ) => {
    const sourceMonths = months && months.length > 0 ? months : [fallbackMonth];
    return sourceMonths.map((month) => startOfMonth(month));
  };
  const getInitialVisibleMonths = (fallbackMonth: Date) => {
    const initialVisibleMonths =
      props.defaultVisibleMonths ?? props.visibleMonths;
    return normalizeVisibleMonths(initialVisibleMonths, fallbackMonth);
  };
  const controlledVisibleMonths = props.visibleMonths
    ? normalizeVisibleMonths(props.visibleMonths, initialMonth)
    : undefined;
  const [visibleMonths, setVisibleMonths] = useControlledValue(
    getInitialVisibleMonths(initialMonth),
    controlledVisibleMonths,
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: change the initial month when the time zone changes.
  useEffect(() => {
    const newInitialMonth = getInitialMonth(props, navStart, navEnd, dateLib);
    setFirstMonth(newInitialMonth);
    if (usesVisibleMonths) {
      setVisibleMonths(getInitialVisibleMonths(newInitialMonth));
    }
  }, [props.timeZone]);

  /** The months displayed in the calendar. */
  // biome-ignore lint/correctness/useExhaustiveDependencies: We want to recompute only when specific props change.
  const { months, weeks, days, previousMonth, nextMonth } = useMemo(() => {
    const displayMonths = usesVisibleMonths
      ? visibleMonths
      : getDisplayMonths(
          firstMonth,
          navEnd,
          { numberOfMonths: props.numberOfMonths },
          dateLib,
        );

    const dates = getDates(
      displayMonths,
      props.endMonth ? endOfMonth(props.endMonth) : undefined,
      {
        ISOWeek: props.ISOWeek,
        fixedWeeks: props.fixedWeeks,
        broadcastCalendar: props.broadcastCalendar,
      },
      dateLib,
    );

    const months = getMonths(
      displayMonths,
      dates,
      {
        broadcastCalendar: props.broadcastCalendar,
        fixedWeeks: props.fixedWeeks,
        ISOWeek: props.ISOWeek,
        reverseMonths: usesVisibleMonths ? false : props.reverseMonths,
      },
      dateLib,
    );

    const weeks = getWeeks(months);
    const days = getDays(months);

    const previousMonth = getPreviousMonth(
      displayMonths[0],
      navStart,
      usesVisibleMonths ? { ...props, numberOfMonths: 1 } : props,
      dateLib,
    );
    const lastDisplayMonth = displayMonths[displayMonths.length - 1];
    const nextMonth = getNextMonth(
      usesVisibleMonths ? lastDisplayMonth : firstMonth,
      navEnd,
      usesVisibleMonths ? { ...props, numberOfMonths: 1 } : props,
      dateLib,
    );

    return {
      months,
      weeks,
      days,
      previousMonth,
      nextMonth,
    };
  }, [
    dateLib,
    firstMonth.getTime(),
    visibleMonths.map((month) => month.getTime()).join("-"),
    navEnd?.getTime(),
    navStart?.getTime(),
    props.disableNavigation,
    props.broadcastCalendar,
    props.endMonth?.getTime(),
    props.fixedWeeks,
    props.ISOWeek,
    props.numberOfMonths,
    props.pagedNavigation,
    props.reverseMonths,
    usesVisibleMonths,
  ]);

  const { disableNavigation, onMonthChange, onVisibleMonthsChange } = props;

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

  const goToVisibleMonth = (
    index: number,
    date: Date,
    source: VisibleMonthsChangeSource,
  ) => {
    if (disableNavigation || !usesVisibleMonths) {
      return undefined;
    }
    let newMonth = startOfMonth(date);
    if (navStart && newMonth < startOfMonth(navStart)) {
      newMonth = startOfMonth(navStart);
    }
    if (navEnd && newMonth > startOfMonth(navEnd)) {
      newMonth = startOfMonth(navEnd);
    }
    const newVisibleMonths = visibleMonths.map((month, monthIndex) =>
      monthIndex === index ? newMonth : month,
    );
    setVisibleMonths(newVisibleMonths);
    onVisibleMonthsChange?.(newVisibleMonths, {
      changedIndex: index,
      month: newMonth,
      source,
    });
    return newMonth;
  };

  const goToDay = (day: CalendarDay, refDay?: CalendarDay) => {
    // is this check necessary?
    if (isDayInCalendar(day)) {
      return;
    }
    if (usesVisibleMonths) {
      const visibleMonthIndex = months.findIndex(
        (month) =>
          startOfMonth(month.date).getTime() ===
          startOfMonth(refDay?.displayMonth ?? day.displayMonth).getTime(),
      );
      goToVisibleMonth(
        visibleMonthIndex === -1 ? 0 : visibleMonthIndex,
        day.date,
        "keyboard",
      );
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
    goToVisibleMonth,
    goToDay,
    usesVisibleMonths,
  };

  return calendar;
}
