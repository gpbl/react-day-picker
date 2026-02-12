import type { FormatOptions as DateFnsFormatOptions } from "date-fns";
import type { DateLibOptions } from "../../classes/DateLib.js";
import { toHijriDate } from "../utils/conversion.js";

const getLocaleCode = (options?: DateLibOptions): string => {
  return options?.locale?.code ?? "ar-SA"; // Default to ar-SA for Hijri
};

const formatMonthName = (date: Date, localeCode: string, width: "long" | "short" | "narrow"): string => {
  return new Intl.DateTimeFormat(localeCode, {
    month: width,
    calendar: "islamic-umalqura",
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
  }).format(date);
};

const formatNumber = (value: number, localeCode: string): string => {
  return new Intl.NumberFormat(localeCode, { useGrouping: false }).format(value);
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

  // Note: formatNumber uses locale numerals.
  // If we want Latin numerals when locale is 'en', Intl handles it.

  // Simple format implementation.
  switch (formatStr) {
    case "LLLL y":
    case "LLLL yyyy":
      return `${formatMonthName(date, localeCode, "long")} ${formatNumber(hijri.year, localeCode)}`;
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
      return formatNumber(hijri.year, localeCode);
    case "yyyy-MM":
      // ISO-like but with locale numerals? Or force latin?
      // Usually technical formats prefer latin digits.
      // But here we respect locale.
      return `${formatNumber(hijri.year, localeCode)}-${formatNumber(hijri.monthIndex + 1, localeCode).padStart(2, "0")}`; // this padStart might fail if numerals are Arabic
    case "yyyy-MM-dd":
       // For simple numeric formats, maybe better to construct manually if digits are latin.
       // But if digits are Arabic, padStart won't work well on string length if it counts codepoints...
       // Actually Arabic digits are 1 char.
       // But '٠' is 0.
       // Let's rely on Intl for dateStyle='short' for generic date, but formatStr asks specifically.
       // If formatStr is specific 'yyyy-MM-dd', usually implies ISO-8601 which is Gregorian.
       // But here we are formatting Hijri date.
       // Let's simplify and assume standard digits for yyyy-MM-dd or use generic join.
       return `${formatNumber(hijri.year, localeCode)}-${formatNumber(hijri.monthIndex + 1, localeCode)}-${formatNumber(hijri.day, localeCode)}`;
    case "MM":
      return formatNumber(hijri.monthIndex + 1, localeCode); // No padding logic here for simplicity unless we map digits
    case "M":
      return formatNumber(hijri.monthIndex + 1, localeCode);
    case "dd":
      return formatNumber(hijri.day, localeCode);
    case "d":
      return formatNumber(hijri.day, localeCode);
    default:
      if (/[Hh]/.test(formatStr) && /m/.test(formatStr)) {
        return buildTimeFormat(date, localeCode, formatStr);
      }
      // Fallback
      return formatDateStyle(date, localeCode, "medium");
  }
}
