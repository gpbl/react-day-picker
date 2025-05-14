import type { DateLib } from "../classes/DateLib.js";
import type {
  DayPickerProps,
  MoveFocusBy,
  MoveFocusDir
} from "../types/index.js";

/**
 * Calculates the next date that should be focused in the calendar.
 *
 * This function determines the next focusable date based on the movement
 * direction, constraints, and calendar configuration.
 *
 * @param moveBy The unit of movement (e.g., "day", "week").
 * @param moveDir The direction of movement ("before" or "after").
 * @param refDate The reference date from which to calculate the next focusable
 *   date.
 * @param navStart The earliest date the user can navigate to.
 * @param navEnd The latest date the user can navigate to.
 * @param props The DayPicker props, including calendar configuration options.
 * @param dateLib The date library to use for date manipulation.
 * @returns The next focusable date.
 */
export function getFocusableDate(
  moveBy: MoveFocusBy,
  moveDir: MoveFocusDir,
  refDate: Date,
  navStart: Date | undefined,
  navEnd: Date | undefined,
  props: Pick<DayPickerProps, "ISOWeek" | "broadcastCalendar">,
  dateLib: DateLib
): Date {
  const { ISOWeek, broadcastCalendar } = props;
  const {
    addDays,
    addMonths,
    addWeeks,
    addYears,
    endOfBroadcastWeek,
    endOfISOWeek,
    endOfWeek,
    max,
    min,
    startOfBroadcastWeek,
    startOfISOWeek,
    startOfWeek
  } = dateLib;
  const moveFns = {
    day: addDays,
    week: addWeeks,
    month: addMonths,
    year: addYears,
    startOfWeek: (date: Date) =>
      broadcastCalendar
        ? startOfBroadcastWeek(date, dateLib)
        : ISOWeek
          ? startOfISOWeek(date)
          : startOfWeek(date),
    endOfWeek: (date: Date) =>
      broadcastCalendar
        ? endOfBroadcastWeek(date)
        : ISOWeek
          ? endOfISOWeek(date)
          : endOfWeek(date)
  };

  let focusableDate = moveFns[moveBy](refDate, moveDir === "after" ? 1 : -1);
  if (moveDir === "before" && navStart) {
    focusableDate = max([navStart, focusableDate]);
  } else if (moveDir === "after" && navEnd) {
    focusableDate = min([navEnd, focusableDate]);
  }
  return focusableDate;
}
