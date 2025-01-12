/**
 * Is after
 *
 * @param {Date} date - The original date
 * @param {Date} dateToCompare - The date to compare
 * @returns {boolean} True if the original date is after the date to compare
 */
export function isAfter(date: Date, dateToCompare: Date): boolean {
  return date.getTime() > dateToCompare.getTime();
}
