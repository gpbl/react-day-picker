import type { FormatOptions as DateFnsFormatOptions } from "date-fns";
import type { DateLibOptions } from "../../classes/DateLib.js";
import { toHijriDate } from "../utils/conversion.js";
import { clampGregorianDate, getGregorianDateParts } from "../utils/range.js";

const DEFAULT_LOCALE_CODE = "ar-SA";
const BASE_NUMBERING_SYSTEM = "latn";

const getLocaleCode = (options?: DateLibOptions): string => {
  return options?.locale?.code ?? DEFAULT_LOCALE_CODE;
};

const formatMonthName = (
  date: Date,
  localeCode: string,
  width: "long" | "short" | "narrow",
): string => {
  return new Intl.DateTimeFormat(localeCode, {
    month: width,
    calendar: "islamic-umalqura",
    numberingSystem: BASE_NUMBERING_SYSTEM,
  }).format(date);
};

const formatWeekdayName = (
  date: Date,
  localeCode: string,
  width: "long" | "short" | "narrow",
): string => {
  return new Intl.DateTimeFormat(localeCode, {
    weekday: width,
    calendar: "islamic-umalqura",
    numberingSystem: BASE_NUMBERING_SYSTEM,
  }).format(date);
};

const formatDateStyle = (
  date: Date,
  localeCode: string,
  style: "long" | "full" | "medium" | "short",
): string => {
  return new Intl.DateTimeFormat(localeCode, {
    dateStyle: style,
    calendar: "islamic-umalqura",
    numberingSystem: BASE_NUMBERING_SYSTEM,
  }).format(date);
};

const formatNumber = (value: number): string => {
  return value.toString();
};

const formatPaddedNumber = (value: number): string => {
  return formatNumber(value).padStart(2, "0");
};

const buildTimeFormat = (
  date: Date,
  localeCode: string,
  formatStr: string,
): string => {
  const hour12 = formatStr.includes("a");
  return new Intl.DateTimeFormat(localeCode, {
    hour: "numeric",
    minute: "numeric",
    hour12,
    calendar: "islamic-umalqura",
    numberingSystem: BASE_NUMBERING_SYSTEM,
  }).format(date);
};

/** Hijri calendar formatting override. */
export function format(
  date: Date,
  formatStr: string,
  options?: DateFnsFormatOptions,
): string {
  const extendedOptions = options as DateLibOptions | undefined;
  const localeCode = getLocaleCode(extendedOptions);
  const hijri = toHijriDate(date);
  const gregorian = getGregorianDateParts(date);
  const isOutOfRange = clampGregorianDate(date) !== date;
  const numericDate = isOutOfRange
    ? {
        year: gregorian.year,
        monthIndex: gregorian.month - 1,
        day: gregorian.day,
      }
    : hijri;

  switch (formatStr) {
    case "LLLL y":
    case "LLLL yyyy":
      return `${formatMonthName(date, localeCode, "long")} ${formatNumber(numericDate.year)}`;
    case "LLLL":
      return formatMonthName(date, localeCode, "long");
    case "LLL":
      return formatMonthName(date, localeCode, "short");
    case "PPP":
      return formatDateStyle(date, localeCode, "long");
    case "PPPP":
      return formatDateStyle(date, localeCode, "full");
    case "PP":
      return formatDateStyle(date, localeCode, "medium");
    case "P":
      return formatDateStyle(date, localeCode, "short");
    case "cccc":
      return formatWeekdayName(date, localeCode, "long");
    case "ccc":
      return formatWeekdayName(date, localeCode, "short");
    case "ccccc":
    case "cccccc":
      return formatWeekdayName(date, localeCode, "narrow");
    case "yyyy":
    case "y":
      return formatNumber(numericDate.year);
    case "yyyy-MM":
      return `${formatNumber(numericDate.year)}-${formatPaddedNumber(numericDate.monthIndex + 1)}`;
    case "yyyy-MM-dd":
      return `${formatNumber(numericDate.year)}-${formatPaddedNumber(numericDate.monthIndex + 1)}-${formatPaddedNumber(numericDate.day)}`;
    case "MM":
      return formatPaddedNumber(numericDate.monthIndex + 1);
    case "M":
      return formatNumber(numericDate.monthIndex + 1);
    case "dd":
      return formatPaddedNumber(numericDate.day);
    case "d":
      return formatNumber(numericDate.day);
    default:
      if (/[Hh]/.test(formatStr) && /m/.test(formatStr)) {
        return buildTimeFormat(date, localeCode, formatStr);
      }
      return formatDateStyle(date, localeCode, "medium");
  }
}
