import type { DateFnsMonth } from "../lib/dateLib.js";
import { enUS } from "../lib/locales.js";

/**
 * Format the month number for the dropdown option label.
 *
 * @defaultValue The localized month name
 * @group Formatters
 * @see https://daypicker.dev/next/docs/translation#custom-formatters
 */
export function formatMonthDropdown(
  /** The month number to format. */
  monthNumber: number,
  /** The locale to use for formatting. */
  locale = enUS
): string {
  return locale.localize?.month(monthNumber as DateFnsMonth);
}
