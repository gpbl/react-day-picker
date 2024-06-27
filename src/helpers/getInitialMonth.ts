import type { PropsContextValue } from "../contexts/index.js";

/** Return the start month based on the props passed to DayPicker. */
export function getInitialMonth(
  props: Pick<
    PropsContextValue,
    | "fromYear"
    | "toYear"
    | "startMonth"
    | "endMonth"
    | "month"
    | "defaultMonth"
    | "today"
    | "numberOfMonths"
    | "dateLib"
  >
): Date {
  const {
    month,
    defaultMonth,
    dateLib: { Date },
    today,
    numberOfMonths = 1,
    endMonth,
    startMonth
  } = props;
  let initialMonth = month || defaultMonth || today || new Date();
  const { differenceInCalendarMonths, addMonths, startOfMonth } = props.dateLib;

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
