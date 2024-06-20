import { addDays } from "date-fns/addDays";
import { addMonths } from "date-fns/addMonths";
import { addWeeks } from "date-fns/addWeeks";
import { addYears } from "date-fns/addYears";
import { endOfISOWeek } from "date-fns/endOfISOWeek";
import { endOfWeek } from "date-fns/endOfWeek";
import { max } from "date-fns/max";
import { min } from "date-fns/min";
import { startOfISOWeek } from "date-fns/startOfISOWeek";
import { startOfWeek } from "date-fns/startOfWeek";

import type { PropsContextValue } from "../contexts/props";
import type { MoveFocusBy, MoveFocusDir } from "../types";
import { Mode } from "../types";

/** Return the next date that should be focused. */
export function getPossibleFocusDate(
  moveBy: MoveFocusBy,
  moveDir: MoveFocusDir,
  focusedDate: Date,
  options: Pick<
    PropsContextValue,
    "locale" | "ISOWeek" | "weekStartsOn" | "startMonth" | "endMonth"
  >
): Date {
  const { weekStartsOn, startMonth, endMonth, locale, ISOWeek } = options;

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
