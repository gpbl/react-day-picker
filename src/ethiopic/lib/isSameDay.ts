import { toEthiopicDate } from "../utils/index.js";

/**
 * Is same day
 *
 * @param {Date} dateLeft - The first date
 * @param {Date} dateRight - The second date
 * @returns {boolean} True if the two dates are on the same day
 */
export function isSameDay(dateLeft: Date, dateRight: Date): boolean {
  const left = toEthiopicDate(dateLeft);
  const right = toEthiopicDate(dateRight);
  return (
    left.year === right.year &&
    left.month === right.month &&
    left.day === right.day
  );
}
