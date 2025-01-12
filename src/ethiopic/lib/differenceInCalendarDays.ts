import { toEthiopicDate, isEthiopicLeapYear } from "../utils/index.js";

/**
 * Difference in calendar days
 *
 * @param {Date} dateLeft - The later date
 * @param {Date} dateRight - The earlier date
 * @returns {number} The number of calendar days between the two dates
 */
export function differenceInCalendarDays(
  dateLeft: Date,
  dateRight: Date
): number {
  const leftYear = toEthiopicDate(dateLeft).year;
  const rightYear = toEthiopicDate(dateRight).year;
  const leapDays = Array.from(
    { length: leftYear - rightYear },
    (_, i) => rightYear + i
  ).filter(isEthiopicLeapYear).length;
  return (
    Math.floor((dateLeft.getTime() - dateRight.getTime()) / 86400000) + leapDays
  );
}
