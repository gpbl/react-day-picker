import type { DateFnsMonth } from "../lib/dateLib.js";
import { enUS } from "../lib/locales.js";

/**
 * The default formatter for the month dropdown option. As default, it returns
 * the month name.
 *
 * @group Formatters
 * @see https://daypicker.dev/next/docs/translation#custom-formatters
 */
export function formatMonthDropdown(
  /** The month number to format. */
  monthNumber: number,
  /** The locale to use for formatting. */
  locale = enUS
): string {
  return (
    locale.localize?.month(monthNumber as DateFnsMonth) ??
    monthNumber.toString()
  );
}
