import { Locale } from "date-fns";

import { formatEthiopianDate } from "../utils/ethiopicDateUtils.js";

export interface FormatOptions {
  locale?: Locale;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  useAdditionalWeekYearTokens?: boolean;
  useAdditionalDayOfYearTokens?: boolean;
}

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
