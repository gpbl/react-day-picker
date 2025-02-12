import type { FormatOptions as DateFnsFormatOptions } from "date-fns";

import type { DateLibOptions } from "../../classes/DateLib.js";
import { toEthiopicDate } from "../utils/index.js";

import { formatNumber } from "./formatNumber.js";

/** Options for formatting dates in the Ethiopian calendar */
export type FormatOptions = DateFnsFormatOptions;

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
      return `${getEtDayName(dateObj, false)}, ${getEtMonthName(etDate.month)} ${
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
  options?: DateFnsFormatOptions
): string {
  const extendedOptions = options as DateLibOptions;

  if (formatStr.includes("hh:mm") || formatStr.includes("a")) {
    return new Intl.DateTimeFormat(extendedOptions?.locale?.code ?? "en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: formatStr.includes("a")
    }).format(date);
  }

  const formatted = formatEthiopianDate(date, formatStr);

  if (extendedOptions?.numerals && extendedOptions.numerals === "geez") {
    return formatted.replace(/\d+/g, (match) =>
      formatNumber(parseInt(match), "geez")
    );
  }

  return formatted;
}

export const ethMonths = [
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
];
export const shortDays = ["እ", "ሰ", "ማ", "ረ", "ሐ", "ዓ", "ቅ"];
export const longDays = ["እሁድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ"];
