/**
 * The default function used to format the week number. Use the
 * [[formatWeekNumber]] prop to use another function.
 *
 * @return {string} The weeknumber formatted as string.
 * @private
 */
export function defaultFormatWeekNumber(weekNumber: number): string {
  return `${weekNumber}`;
}
