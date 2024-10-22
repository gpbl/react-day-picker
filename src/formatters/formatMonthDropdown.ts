import type { DateFnsMonth } from "../classes/DateLib.js";
import { defaultLocale } from "../classes/DateLib.js";

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
  locale = defaultLocale
): string {
  return locale.localize?.month(monthNumber as DateFnsMonth);
}
