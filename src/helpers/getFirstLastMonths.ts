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
      | "fromMonth"
      | "toMonth"
      | "month"
      | "defaultMonth"
      | "today"
      | "numberOfMonths"
    >
  >
): [firstMonth: Date, lastMonth?: Date] {
  const { month, defaultMonth, today, numberOfMonths = 1 } = props;
  let initialMonth = month || defaultMonth || today || new Date();
  const { fromMonth, toMonth } = getStartEndMonths(props);

  // Fix the initialMonth if is after the to-date
  if (toMonth && differenceInCalendarMonths(toMonth, initialMonth) < 0) {
    const offset = -1 * (numberOfMonths - 1);
    initialMonth = addMonths(toMonth, offset);
  }
  // Fix the initialMonth if is before the from-date
  if (fromMonth && differenceInCalendarMonths(initialMonth, fromMonth) < 0) {
    initialMonth = fromMonth;
  }
  return [startOfMonth(initialMonth), toMonth];
}
