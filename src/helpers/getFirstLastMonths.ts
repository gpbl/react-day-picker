import { addMonths } from "date-fns/addMonths";
import { differenceInCalendarMonths } from "date-fns/differenceInCalendarMonths";
import { startOfMonth } from "date-fns/startOfMonth";

import { PropsBase } from "../types";

import { getStartEndMonths } from "./getStartEndMonths";

/**
 * Return the first and, if the navigation is constrained, last months according
 * to the props passed to DayPicker, with some extra checks for the other
 * props.
 */
export function getFirstLastMonths(
  props: Partial<
    Pick<
      PropsBase,
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
): [firstMonth: Date, lastMonth?: Date] {
  const { month, defaultMonth, today, numberOfMonths = 1 } = props;
  let initialMonth = month || defaultMonth || today || new Date();
  const { startMonth, endMonth } = getStartEndMonths(props);

  // Fix the initialMonth if is after the to-date
  if (endMonth && differenceInCalendarMonths(endMonth, initialMonth) < 0) {
    const offset = -1 * (numberOfMonths - 1);
    initialMonth = addMonths(endMonth, offset);
  }
  // Fix the initialMonth if is before the from-date
  if (startMonth && differenceInCalendarMonths(initialMonth, startMonth) < 0) {
    initialMonth = startMonth;
  }
  return [startOfMonth(initialMonth), endMonth];
}
