import type { DateLib } from "../classes/DateLib.js";
import { CalendarDay } from "../classes/index.js";
import type {
  DayPickerProps,
  MoveFocusBy,
  MoveFocusDir,
} from "../types/index.js";
import { dateMatchModifiers } from "../utils/dateMatchModifiers.js";

import { getFocusableDate } from "./getFocusableDate.js";

/**
 * Determines the next focusable day in the calendar.
 *
 * This function recursively calculates the next focusable day based on the
 * movement direction and modifiers applied to the days.
 *
 * @param moveBy The unit of movement (e.g., "day", "week").
 * @param moveDir The direction of movement ("before" or "after").
 * @param refDay The currently focused day.
 * @param calendarStartMonth The earliest month the user can navigate to.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param props The DayPicker props, including modifiers and configuration
 *   options.
 * @param dateLib The date library to use for date manipulation.
 * @param attempt The current recursion attempt (used to limit recursion depth).
 * @returns The next focusable day, or `undefined` if no focusable day is found.
 */
export function getNextFocus(
  moveBy: MoveFocusBy,
  moveDir: MoveFocusDir,
  refDay: CalendarDay,
  calendarStartMonth: Date | undefined,
  calendarEndMonth: Date | undefined,
  props: Pick<
    DayPickerProps,
    | "disabled"
    | "hidden"
    | "modifiers"
    | "ISOWeek"
    | "broadcastCalendar"
    | "timeZone"
  >,
  dateLib: DateLib,
  attempt: number = 0,
): CalendarDay | undefined {
  if (attempt > 365) {
    // Limit the recursion to 365 attempts
    return undefined;
  }

  const focusableDate = getFocusableDate(
    moveBy,
    moveDir,
    refDay.date,
    calendarStartMonth,
    calendarEndMonth,
    props,
    dateLib,
  );

  const isFocusable = (date: Date) => {
    const isDisabled = Boolean(
      props.disabled && dateMatchModifiers(date, props.disabled, dateLib),
    );
    const isHidden = Boolean(
      props.hidden && dateMatchModifiers(date, props.hidden, dateLib),
    );
    return !isDisabled && !isHidden;
  };

  const targetMonth = focusableDate;
  const focusDay = new CalendarDay(focusableDate, targetMonth, dateLib);

  if (isFocusable(focusableDate)) {
    return focusDay;
  }

  const isWeekBoundary = moveBy === "startOfWeek" || moveBy === "endOfWeek";

  // When the first move reaches a day that is not focusable, focus the nearest
  // focusable day in the target week or month: moving again by the same unit
  // would skip a whole month or year, or reach the same start/end of the week.
  // With `broadcastCalendar`, the start/end of week moves reach the bounds of
  // the broadcast month instead of a week, so they are not searched.
  if (
    attempt === 0 &&
    (moveBy === "month" ||
      moveBy === "year" ||
      (isWeekBoundary && !props.broadcastCalendar))
  ) {
    const [periodStart, periodEnd] = isWeekBoundary
      ? [
          getFocusableDate(
            "startOfWeek",
            "before",
            refDay.date,
            calendarStartMonth,
            calendarEndMonth,
            props,
            dateLib,
          ),
          getFocusableDate(
            "endOfWeek",
            "after",
            refDay.date,
            calendarStartMonth,
            calendarEndMonth,
            props,
            dateLib,
          ),
        ]
      : [
          calendarStartMonth
            ? dateLib.max([
                calendarStartMonth,
                dateLib.startOfMonth(focusableDate),
              ])
            : dateLib.startOfMonth(focusableDate),
          calendarEndMonth
            ? dateLib.min([calendarEndMonth, dateLib.endOfMonth(focusableDate)])
            : dateLib.endOfMonth(focusableDate),
        ];

    const nearestDate = getNearestFocusableDate(
      focusableDate,
      periodStart,
      periodEnd,
      moveDir,
      isFocusable,
      dateLib,
    );
    if (nearestDate) {
      return new CalendarDay(nearestDate, nearestDate, dateLib);
    }
    if (isWeekBoundary) {
      return undefined;
    }
  }

  // Recursively attempt to find the next focusable date
  return getNextFocus(
    moveBy,
    moveDir,
    focusDay,
    calendarStartMonth,
    calendarEndMonth,
    props,
    dateLib,
    attempt + 1,
  );
}

/**
 * Returns the focusable date closest to `date` between `start` and `end`,
 * preferring the move direction when two dates are at the same distance.
 */
function getNearestFocusableDate(
  date: Date,
  start: Date,
  end: Date,
  moveDir: MoveFocusDir,
  isFocusable: (date: Date) => boolean,
  dateLib: DateLib,
): Date | undefined {
  const { addDays, differenceInCalendarDays } = dateLib;
  const isInPeriod = (day: Date) =>
    differenceInCalendarDays(day, start) >= 0 &&
    differenceInCalendarDays(end, day) >= 0;
  const step = moveDir === "after" ? 1 : -1;

  for (let distance = 1; ; distance++) {
    const candidates = [
      addDays(date, distance * step),
      addDays(date, -distance * step),
    ].filter(isInPeriod);
    if (candidates.length === 0) {
      return undefined;
    }
    const nearestDate = candidates.find(isFocusable);
    if (nearestDate) {
      return nearestDate;
    }
  }
}
