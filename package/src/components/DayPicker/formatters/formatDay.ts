import { format } from "date-fns";
import { FormatOptions } from "../../../types/Formatters";

/**
 * Format caption
 *
 * @private
 * @category Formatters
 */
export function formatDay(day: Date, formatOptions?: FormatOptions): string {
  return format(day, "d", formatOptions);
}
