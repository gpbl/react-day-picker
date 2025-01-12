/**
 * Min date
 *
 * @param {Date[]} dates - An array of dates
 * @returns {Date} The earliest date
 */
export function min(dates: Date[]): Date {
  return new Date(Math.min(...dates.map((date) => date.getTime())));
}
