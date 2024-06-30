import { CalendarDay } from "../classes/index.js";
import type {
  DateLib,
  DayPickerProps,
  MoveFocusBy,
  MoveFocusDir
} from "../types/index.js";
import { dateMatchModifiers } from "../utils/dateMatchModifiers.js";

import { getPossibleFocusDate } from "./getPossibleFocusDate.js";

export function getNextFocus(
  moveBy: MoveFocusBy,
  moveDir: MoveFocusDir,
  /** The date that is currently focused. */
  focused: CalendarDay,
  calendarStartMonth: Date | undefined,
  calendarEndMonth: Date | undefined,
  options: Pick<
    DayPickerProps,
    "disabled" | "hidden" | "modifiers" | "locale" | "ISOWeek" | "weekStartsOn"
  >,
  dateLib: DateLib,
  attempt: number = 0
): CalendarDay | undefined {
  if (attempt > 365) {
    // Limit the recursion to 365 attempts
    return undefined;
  }

  const possibleFocusDate = getPossibleFocusDate(
    moveBy,
    moveDir,
    focused.date,
    calendarStartMonth,
    calendarEndMonth,
    options,
    dateLib
  );

  const isDisabled = Boolean(
    options.disabled &&
      dateMatchModifiers(possibleFocusDate, options.disabled, dateLib)
  );

  const isHidden = Boolean(
    options.hidden &&
      dateMatchModifiers(possibleFocusDate, options.hidden, dateLib)
  );

  const targetMonth = possibleFocusDate;
  const focusDay = new CalendarDay(possibleFocusDate, targetMonth, dateLib);
  if (!isDisabled && !isHidden) {
    return focusDay;
  }

  // Recursively attempt to find the next focusable date
  return getNextFocus(
    moveBy,
    moveDir,
    focusDay,
    calendarStartMonth,
    calendarEndMonth,
    options,
    dateLib,
    attempt + 1
  );
}
