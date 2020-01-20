import { format } from "date-fns";
import { FormatOptions } from "../../../types/Formatters";

/**
 * Format weekday name
 *
 * @private
 * @category Formatters
 */
export function formatWeekdayName(
  day: Date,
  formatOptions?: FormatOptions
): string {
  return format(day, "E", formatOptions);
}
