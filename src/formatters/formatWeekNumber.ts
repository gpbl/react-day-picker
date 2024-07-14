/**
 * The default formatter for the week numbers. As default, it returns the week
 * number with a leading zero if the week number is less than 10.
 *
 * @param weekNumber - The week number to format.
 * @group Formatters
 * @see https://daypicker.dev/next/docs/translation#custom-formatters
 */
export function formatWeekNumber(weekNumber: number) {
  if (weekNumber < 10) {
    return `0${weekNumber.toLocaleString()}`;
  }
  return `${weekNumber.toLocaleString()}`;
}
