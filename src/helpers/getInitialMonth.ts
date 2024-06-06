import { addMonths, differenceInCalendarMonths, startOfMonth } from "date-fns";

import type { PropsContext } from "../contexts/props";
import type { Mode } from "../types";

/** Return the initial month according to the given options. */
export function getInitialMonth(
  context: Partial<PropsContext<Mode, boolean>>
): Date {
  const { month, defaultMonth, today } = context;
  let initialMonth = month || defaultMonth || today || new Date();

  const { toDate, fromDate, numberOfMonths = 1 } = context;

  // Fix the initialMonth if is after the to-date
  if (toDate && differenceInCalendarMonths(toDate, initialMonth) < 0) {
    const offset = -1 * (numberOfMonths - 1);
    initialMonth = addMonths(toDate, offset);
  }
  // Fix the initialMonth if is before the from-date
  if (fromDate && differenceInCalendarMonths(initialMonth, fromDate) < 0) {
    initialMonth = fromDate;
  }
  return startOfMonth(initialMonth);
}
