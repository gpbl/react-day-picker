/**
 * Is before
 *
 * @param {Date} date - The original date
 * @param {Date} dateToCompare - The date to compare
 * @returns {boolean} True if the original date is before the date to compare
 */
export function isBefore(date: Date, dateToCompare: Date): boolean {
  return date.getTime() < dateToCompare.getTime();
}
