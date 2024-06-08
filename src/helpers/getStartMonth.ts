import { addMonths } from "date-fns/addMonths";
import { differenceInCalendarMonths } from "date-fns/differenceInCalendarMonths";
import { startOfMonth } from "date-fns/startOfMonth";

import { PropsBase } from "../types";

import { getStartEndMonths } from "./getStartEndMonths";

/** Return the start month based on the props passed to DayPicker. */

export function getStartMonth(
  props: Partial<
    Pick<
      PropsBase,
      | "fromYear"
      | "toYear"
      | "endMonth"
      | "startMonth"
      | "month"
      | "defaultMonth"
      | "today"
      | "numberOfMonths"
    >
  >
): Date {
  const {
    month,
    defaultMonth,
    today,
    numberOfMonths = 1,
    startMonth,
    endMonth
  } = props;
  let initialMonth = month || defaultMonth || today || new Date();

  // Fix the initialMonth if is after the to-date
  if (startMonth && differenceInCalendarMonths(startMonth, initialMonth) < 0) {
    const offset = -1 * (numberOfMonths - 1);
    initialMonth = addMonths(startMonth, offset);
  }
  // Fix the initialMonth if is before the from-date
  if (endMonth && differenceInCalendarMonths(initialMonth, endMonth) < 0) {
    initialMonth = endMonth;
  }
  return startOfMonth(initialMonth);
}
