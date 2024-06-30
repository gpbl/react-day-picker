import type {
  CalendarWeek,
  CalendarDay,
  CalendarMonth
} from "../classes/index.js";
import { getCalendarStartEndMonths } from "../helpers/getCalendarStartEndMonths.js";
import { getDates } from "../helpers/getDates.js";
import { getDays } from "../helpers/getDays.js";
import { getDisplayMonths } from "../helpers/getDisplayMonths.js";
import { getInitialMonth } from "../helpers/getInitialMonth.js";
import { getMonths } from "../helpers/getMonths.js";
import { getNextMonth } from "../helpers/getNextMonth.js";
import { getPreviousMonth } from "../helpers/getPreviousMonth.js";
import { getWeeks } from "../helpers/getWeeks.js";
import { useControlledValue } from "../helpers/useControlledValue.js";
import type { DayPickerProps } from "../types/props.js";
import type { DateLib } from "../types/shared.js";

export interface UseCalendar {
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

  /** The month where the navigation starts. */
  calendarStartMonth: Date | undefined;
  /** The month where the navigation ends. */
  calendarEndMonth: Date | undefined;

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
}

/**
 * @group Hooks
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function useCalendar(
  props: Pick<
    DayPickerProps,
    | "fromYear"
    | "toYear"
    | "startMonth"
    | "endMonth"
    | "month"
    | "defaultMonth"
    | "today"
    | "numberOfMonths"
    | "disableNavigation"
    | "onMonthChange"
    | "ISOWeek"
  >,
  dateLib: DateLib
) {
  const today = dateLib.startOfDay(props.today ?? new dateLib.Date());

  const { calendarStartMonth, calendarEndMonth } = getCalendarStartEndMonths(
    props,
    dateLib
  );

  const { startOfMonth } = dateLib;

  const initialDisplayMonth = getInitialMonth(props, dateLib);

  // The first month displayed in the calendar
  const [firstMonth, setFirstMonth] = useControlledValue(
    initialDisplayMonth,
    props.month ? startOfMonth(props.month) : undefined
  );

  /** An array of the months displayed in the calendar. */
  const displayMonths = getDisplayMonths(
    firstMonth,
    calendarEndMonth,
    props,
    dateLib
  );

  /** The last month displayed in the calendar. */
  const lastMonth = displayMonths[displayMonths.length - 1];

  /** An array of the dates displayed in the calendar. */
  const dates = getDates(displayMonths, props.endMonth, props, dateLib);

  /** An array of the Months displayed in the calendar. */
  const months = getMonths(displayMonths, dates, props, dateLib);

  /** An array of the Weeks displayed in the calendar. */
  const weeks = getWeeks(months);

  /** An array of the Days displayed in the calendar. */
  const days = getDays(months);

  const previousMonth = getPreviousMonth(
    firstMonth,
    calendarStartMonth,
    props,
    dateLib
  );
  const nextMonth = getNextMonth(firstMonth, calendarEndMonth, props, dateLib);

  const { disableNavigation, onMonthChange } = props;

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
    // if month is before start, use the first month instead
    if (calendarStartMonth && newMonth < startOfMonth(calendarStartMonth)) {
      newMonth = startOfMonth(calendarStartMonth);
    }
    // if month is after endMonth, use the last month instead
    if (calendarEndMonth && newMonth > startOfMonth(calendarEndMonth)) {
      newMonth = startOfMonth(calendarEndMonth);
    }
    setFirstMonth(newMonth);
    onMonthChange?.(newMonth);
  }

  function goToDay(day: CalendarDay) {
    if (isDayDisplayed(day)) {
      return;
    }
    goToMonth(day.date);
  }

  function goToNextMonth() {
    return nextMonth ? goToMonth(nextMonth) : undefined;
  }
  function goToPreviousMonth() {
    return previousMonth ? goToMonth(previousMonth) : undefined;
  }

  const calendar: UseCalendar = {
    dates,
    months,
    weeks,
    days,
    today,

    calendarStartMonth,
    calendarEndMonth,

    firstMonth: firstMonth,
    lastMonth,
    previousMonth,
    nextMonth,

    setFirstMonth,

    isDayDisplayed,
    goToMonth,
    goToDay,
    goToNextMonth,
    goToPreviousMonth
  };

  return calendar;
}
