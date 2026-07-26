import type { DateLib } from "../classes/DateLib.js";

/**
 * This function computes the valid first month to display, considering constraints such as
 * `navStart`, `navEnd`, and the number of months to display.
 *
 * @param displayedFirstMonth Intended first month to display.
 * @param numberOfMonths The number of months to display.
 * @param navStart The month where the navigation starts.
 * @param navEnd The month where the navigation ends.
 * @param dateLib The date library to use for date manipulation.
 * @returns The initial month to display.
 */
export function getValidDisplayedFirstMonth(
  displayedFirstMonth: Date,
  numberOfMonths: number,
  navStart: Date | undefined,
  navEnd: Date | undefined,
  dateLib: DateLib,
): Date {
  let validFirstMonth = displayedFirstMonth;
  const { differenceInCalendarMonths, addMonths, startOfMonth } = dateLib;

  if (
    navEnd &&
    differenceInCalendarMonths(navEnd, validFirstMonth) < numberOfMonths - 1
  ) {
    const offset = -1 * (numberOfMonths - 1);
    validFirstMonth = addMonths(navEnd, offset);
  }

  if (navStart && differenceInCalendarMonths(validFirstMonth, navStart) < 0) {
    validFirstMonth = navStart;
  }

  return startOfMonth(validFirstMonth);
}
