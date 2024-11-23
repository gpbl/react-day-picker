import type { DateLib } from "../classes/DateLib.js";
import type {
  DayPickerProps,
  MoveFocusBy,
  MoveFocusDir
} from "../types/index.js";

import {
  startOfBroadcastWeek,
  endOfBroadcastWeek
} from "./broadcastCalendar.js";

/** Return the next date that should be focused. */
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
      broadcastCalendar
        ? startOfBroadcastWeek(date, dateLib)
        : ISOWeek
          ? startOfISOWeek(date)
          : startOfWeek(date),
    endOfWeek: (date: Date) =>
      broadcastCalendar
        ? endOfBroadcastWeek(date, dateLib)
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
