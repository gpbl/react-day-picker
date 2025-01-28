import { toEthiopicDate } from "../utils/index.js";

/**
 * Is same year
 *
 * @param {Date} dateLeft - The first date
 * @param {Date} dateRight - The second date
 * @returns {boolean} True if the two dates are in the same year
 */
export function isSameYear(dateLeft: Date, dateRight: Date): boolean {
  const left = toEthiopicDate(dateLeft);
  const right = toEthiopicDate(dateRight);
  return left.year === right.year;
}
