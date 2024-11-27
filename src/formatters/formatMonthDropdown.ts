import type { DateFnsMonth, Locale } from "../classes/DateLib.js";

/**
 * Format the month number for the dropdown option label.
 *
 * @defaultValue The localized month name
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
export function formatMonthDropdown(
  /** The month number to format. */
  monthNumber: number,
  /** The locale to use for formatting. */
  locale: Locale
): string {
  return locale.localize?.month(monthNumber as DateFnsMonth);
}
