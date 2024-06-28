import type { UseProps } from "../contexts/index.js";
import type { MoveFocusBy, MoveFocusDir } from "../types/index.js";

/** Return the next date that should be focused. */
export function getPossibleFocusDate(
  moveBy: MoveFocusBy,
  moveDir: MoveFocusDir,
  focusedDate: Date,
  options: Pick<
    UseProps,
    | "locale"
    | "ISOWeek"
    | "weekStartsOn"
    | "startMonth"
    | "endMonth"
    | "dateLib"
  >
): Date {
  const { weekStartsOn, startMonth, endMonth, locale, ISOWeek } = options;
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
  } = options.dateLib;
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
  if (moveDir === "before" && startMonth) {
    nextFocusedDate = max([startMonth, nextFocusedDate]);
  } else if (moveDir === "after" && endMonth) {
    nextFocusedDate = min([endMonth, nextFocusedDate]);
  }
  return nextFocusedDate;
}
