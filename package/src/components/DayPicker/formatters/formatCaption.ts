import { format } from "date-fns";
import { FormatOptions } from "../../../types/Formatters";

/**
 * Format caption
 *
 * @private
 * @category Formatters
 */
export function formatCaption(
  month: Date,
  formatOptions?: FormatOptions
): string {
  return format(month, "LLLL Y", formatOptions);
}
