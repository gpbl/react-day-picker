import type {
  DateLib,
  DayPickerProps,
  MoveFocusBy,
  MoveFocusDir
} from "../types/index.js";

/** Return the next date that should be focused. */
export function getPossibleFocusDate(
  moveBy: MoveFocusBy,
  moveDir: MoveFocusDir,
  focusedDate: Date,
  calendarStartMonth: Date | undefined,
  calendarEndMonth: Date | undefined,
  props: Pick<DayPickerProps, "locale" | "ISOWeek" | "weekStartsOn">,
  dateLib: DateLib
): Date {
  const { weekStartsOn, locale, ISOWeek } = props;
  const {
    addDays,
    addMonths,
    addYears,
    addWeeks,
    startOfISOWeek,
    endOfISOWeek,
    startOfWeek,
    endOfWeek,
    max,
    min
  } = dateLib;
  const moveFns = {
    day: addDays,
    week: addWeeks,
    month: addMonths,
    year: addYears,
    startOfWeek: (date: Date) =>
      ISOWeek
        ? startOfISOWeek(date)
        : startOfWeek(date, { locale, weekStartsOn }),
    endOfWeek: (date: Date) =>
      ISOWeek ? endOfISOWeek(date) : endOfWeek(date, { locale, weekStartsOn })
  };

  let nextFocusedDate = moveFns[moveBy](
    focusedDate,
    moveDir === "after" ? 1 : -1
  );
  if (moveDir === "before" && calendarStartMonth) {
    nextFocusedDate = max([calendarStartMonth, nextFocusedDate]);
  } else if (moveDir === "after" && calendarEndMonth) {
    nextFocusedDate = min([calendarEndMonth, nextFocusedDate]);
  }
  return nextFocusedDate;
}
