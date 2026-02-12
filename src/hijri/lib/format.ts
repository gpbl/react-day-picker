import type { FormatOptions as DateFnsFormatOptions } from "date-fns";
import type { DateLibOptions } from "../../classes/DateLib.js";
import { toHijriDate } from "../utils/conversion.js";

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

  switch (formatStr) {
    case "LLLL y":
    case "LLLL yyyy":
      return `${formatMonthName(date, localeCode, "long")} ${formatNumber(hijri.year)}`;
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
      return formatNumber(hijri.year);
    case "yyyy-MM":
      return `${formatNumber(hijri.year)}-${formatPaddedNumber(hijri.monthIndex + 1)}`;
    case "yyyy-MM-dd":
      return `${formatNumber(hijri.year)}-${formatPaddedNumber(hijri.monthIndex + 1)}-${formatPaddedNumber(hijri.day)}`;
    case "MM":
      return formatPaddedNumber(hijri.monthIndex + 1);
    case "M":
      return formatNumber(hijri.monthIndex + 1);
    case "dd":
      return formatPaddedNumber(hijri.day);
    case "d":
      return formatNumber(hijri.day);
    default:
      if (/[Hh]/.test(formatStr) && /m/.test(formatStr)) {
        return buildTimeFormat(date, localeCode, formatStr);
      }
      return formatDateStyle(date, localeCode, "medium");
  }
}
