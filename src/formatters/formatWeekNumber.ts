/**
 * The default formatter for the week numbers.
 *
 * @param weekNumber - The week number to format. `0` when heading of the week
 *   numbers.
 * @group Formatters
 */
export function formatWeekNumber(weekNumber: number | 0) {
  if (weekNumber === 0) {
    return `#`;
  }
  if (weekNumber < 100) {
    return `0${weekNumber.toLocaleString()}`;
  }
  return `${weekNumber.toLocaleString()}`;
}
