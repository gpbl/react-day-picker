/**
 * Max date
 *
 * @param {Date[]} dates - An array of dates
 * @returns {Date} The latest date
 */
export function max(dates: Date[]): Date {
  return new Date(Math.max(...dates.map((date) => date.getTime())));
}
