import { addMonths } from "date-fns/addMonths";
import { differenceInCalendarMonths } from "date-fns/differenceInCalendarMonths";
import { startOfMonth } from "date-fns/startOfMonth";

import type { PropsContextValue } from "../contexts/props";

/** Return the start month based on the props passed to DayPicker. */
export function getInitialMonth(
  props: Partial<
    Pick<
      PropsContextValue,
      | "fromYear"
      | "toYear"
      | "startMonth"
      | "endMonth"
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
    endMonth,
    startMonth
  } = props;
  let initialMonth = month || defaultMonth || today || new Date();

  // Fix the initialMonth if is after the to-date
  if (endMonth && differenceInCalendarMonths(endMonth, initialMonth) < 0) {
    const offset = -1 * (numberOfMonths - 1);
    initialMonth = addMonths(endMonth, offset);
  }
  // Fix the initialMonth if is before the from-date
  if (startMonth && differenceInCalendarMonths(initialMonth, startMonth) < 0) {
    initialMonth = startMonth;
  }
  return startOfMonth(initialMonth);
}
