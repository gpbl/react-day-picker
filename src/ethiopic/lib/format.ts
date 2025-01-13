import { Locale } from "date-fns";

import { toEthiopicDate } from "../utils/index.js";

export interface FormatOptions {
  locale?: Locale;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  useAdditionalWeekYearTokens?: boolean;
  useAdditionalDayOfYearTokens?: boolean;
}

function getEtDayName(day: Date, short: boolean = true): string {
  const dayOfWeek = day.getDay();
  return short ? shortDays[dayOfWeek] : longDays[dayOfWeek];
}

function getEtMonthName(m: number): string {
  if (m > 0 && m <= 13) {
    return ethMonths[m - 1];
  }
  return "";
}

function formatEthiopianDate(
  dateObj: Date | undefined,
  formatStr: string
): string {
  const etDate = dateObj ? toEthiopicDate(dateObj) : undefined;

  if (!etDate) return "";

  switch (formatStr) {
    case "LLLL yyyy":
    case "LLLL y":
      return `${getEtMonthName(etDate.month)} ${etDate.year}`;

    case "LLLL":
      return getEtMonthName(etDate.month);

    case "yyyy-MM-dd":
      return `${etDate.year}-${etDate.month
        .toString()
        .padStart(2, "0")}-${etDate.day.toString().padStart(2, "0")}`;

    case "yyyy-MM":
      return `${etDate.year}-${etDate.month.toString().padStart(2, "0")}`;

    case "d":
      return etDate.day.toString();
    case "PPP":
      return ` ${getEtMonthName(etDate.month)} ${etDate.day}, ${etDate.year}`;
    case "PPPP":
      if (!dateObj) return "";
      return `${getEtDayName(dateObj)}, ${getEtMonthName(etDate.month)} ${
        etDate.day
      }, ${etDate.year}`;

    case "cccc":
      return dateObj ? getEtDayName(dateObj, false) : "";
    case "cccccc":
      return dateObj ? getEtDayName(dateObj) : "";

    default:
      return `${etDate.day}/${etDate.month}/${etDate.year}`;
  }
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
}export const ethMonths = [
  "መስከረም",
  "ጥቅምት",
  "ህዳር",
  "ታህሳስ",
  "ጥር",
  "የካቲት",
  "መጋቢት",
  "ሚያዚያ",
  "ግንቦት",
  "ሰኔ",
  "ሐምሌ",
  "ነሀሴ",
  "ጳጉሜ"
];export const shortDays = ["እ", "ሰ", "ማ", "ረ", "ሐ", "ዓ", "ቅ"];
export const longDays = ["እሁድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ"];
