import { type DateLib } from "../classes/DateLib.js";
import { type DayPickerProps } from "../types/props.js";

/**
 * Determines the initial month to display in the calendar based on the provided
 * props.
 *
 * This function calculates the starting month, considering constraints such as
 * `startMonth`, `endMonth`, and the number of months to display.
 *
 * @param props The DayPicker props, including navigation and date constraints.
 * @param dateLib The date library to use for date manipulation.
 * @returns The initial month to display.
 */
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
    today = dateLib.today(),
    numberOfMonths = 1,
    endMonth,
    startMonth
  } = props;
  let initialMonth = month || defaultMonth || today;
  const { differenceInCalendarMonths, addMonths, startOfMonth } = dateLib;

  // Adjust the initial month if it is after the endMonth
  if (endMonth && differenceInCalendarMonths(endMonth, initialMonth) < 0) {
    const offset = -1 * (numberOfMonths - 1);
    initialMonth = addMonths(endMonth, offset);
  }
  // Adjust the initial month if it is before the startMonth
  if (startMonth && differenceInCalendarMonths(initialMonth, startMonth) < 0) {
    initialMonth = startMonth;
  }

  return startOfMonth(initialMonth);
}
