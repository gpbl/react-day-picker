import { defaultDateLib, type DateLib } from "../classes/DateLib.js";

/**
 * Returns whether a date range contains one or more days of the week.
 *
 * ```tsx
 * const range: DateRange = {
 *   from: new Date(2024, 8, 1), //  Sunday
 *   to: new Date(2024, 8, 6) //  Thursday
 * };
 * rangeContainsDayOfWeek(date, 1); // true: contains range contains Monday
 * ```
 *
 * @since 9.2.2
 * @group Utilities
 */
export function rangeContainsDayOfWeek(
  range: { from: Date; to: Date },
  dayOfWeek: number | number[],
  dateLib: DateLib = defaultDateLib
) {
  const dayOfWeekArr = !Array.isArray(dayOfWeek) ? [dayOfWeek] : dayOfWeek;
  let date = range.from;
  const totalDays = dateLib.differenceInCalendarDays(range.to, range.from);

  // iterate at maximum one week or the total days if the range is shorter than one week
  const totalDaysLimit = Math.min(totalDays, 6);
  for (let i = 0; i <= totalDaysLimit; i++) {
    if (dayOfWeekArr.includes(date.getDay())) {
      return true;
    }
    date = dateLib.addDays(date, 1);
  }
  return false;
}
