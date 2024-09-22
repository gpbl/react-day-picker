import { TZDate } from "@date-fns/tz";

import type { DateLib, DayPickerProps } from "../index.js";

/** Return the start month based on the props passed to DayPicker. */
export function getInitialMonth(
  props: Pick<
    DayPickerProps,
    | "fromYear"
    | "toYear"
    | "startMonth"
    | "endMonth"
    | "month"
    | "defaultMonth"
    | "today"
    | "numberOfMonths"
    | "timeZone"
  >,
  dateLib: DateLib
): Date {
  const {
    month,
    defaultMonth,
    today = props.timeZone
      ? TZDate.tz(props.timeZone)
      : dateLib.Date
        ? new dateLib.Date()
        : new Date(),
    numberOfMonths = 1,
    endMonth,
    startMonth
  } = props;
  let initialMonth = month || defaultMonth || today;
  const { differenceInCalendarMonths, addMonths, startOfMonth } = dateLib;

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
