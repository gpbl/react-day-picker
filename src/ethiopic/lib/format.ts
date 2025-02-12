import { Locale } from "date-fns";

import { formatEthiopianDate } from "../utils/ethiopicDateUtils.js";

/** Options for formatting dates in the Ethiopian calendar */
export interface FormatOptions {
  /** The locale to use for formatting */
  locale?: Locale;
  /** The day that starts the week (0 = Sunday, 1 = Monday, etc) */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /** Which day of the first week of the year is considered part of that week */
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /** Whether to use additional week-year tokens */
  useAdditionalWeekYearTokens?: boolean;
  /** Whether to use additional day-of-year tokens */
  useAdditionalDayOfYearTokens?: boolean;
}

/**
 * Formats a date according to the Ethiopian calendar system
 *
 * @example
 *   ```ts
 *   format(new Date(), 'yyyy-MM-dd') // '2016-04-23'
 *   format(new Date(), 'hh:mm a') // '11:30 AM'
 *   ```;
 *
 * @param date - The gregorian date to format
 * @param formatStr - The format string (similar to date-fns format)
 * @param options - Additional formatting options
 * @returns The formatted date string
 */
export function format(
  date: Date,
  formatStr: string,
  options?: FormatOptions
): string {
  // Handle time formats using original date-fns format
  if (formatStr.includes("hh:mm") || formatStr.includes("a")) {
    // Use regular date formatting for time components
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: formatStr.includes("a")
    }).format(date);
  }

  return formatEthiopianDate(date, formatStr);
}
