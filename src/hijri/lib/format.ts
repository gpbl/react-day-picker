import type { FormatOptions as DateFnsFormatOptions } from "date-fns";

import type { DateLibOptions } from "../../classes/DateLib.js";
import { toHijriDate } from "../utils/calendar.js";

const fallbackMonthNames = {
  ar: [
    "محرم",
    "صفر",
    "ربيع الأول",
    "ربيع الثاني",
    "جمادى الأولى",
    "جمادى الآخرة",
    "رجب",
    "شعبان",
    "رمضان",
    "شوال",
    "ذو القعدة",
    "ذو الحجة",
  ],
  en: [
    "Muharram",
    "Safar",
    "Rabi' I",
    "Rabi' II",
    "Jumada I",
    "Jumada II",
    "Rajab",
    "Sha'ban",
    "Ramadan",
    "Shawwal",
    "Dhu al-Qi'dah",
    "Dhu al-Hijjah",
  ],
} as const;

const fallbackWeekdayNames = {
  ar: {
    long: [
      "الأحد",
      "الاثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
      "السبت",
    ],
    narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
  },
  en: {
    long: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
  },
} as const;

function getLocaleCode(options?: DateLibOptions): string {
  return options?.locale?.code ?? "ar";
}

function formatMonthName(date: Date, localeCode: string): string {
  try {
    return new Intl.DateTimeFormat(localeCode, {
      month: "long",
      calendar: "islamic-umalqura",
    }).format(date);
  } catch {
    const months = localeCode.startsWith("ar")
      ? fallbackMonthNames.ar
      : fallbackMonthNames.en;
    const hijri = toHijriDate(date, undefined);
    return months[hijri.monthIndex];
  }
}

function formatWeekdayName(
  date: Date,
  localeCode: string,
  width: "long" | "narrow" = "long",
): string {
  try {
    return new Intl.DateTimeFormat(localeCode, {
      weekday: width,
      calendar: "islamic-umalqura",
    }).format(date);
  } catch {
    const lang = localeCode.startsWith("ar") ? "ar" : "en";
    return fallbackWeekdayNames[lang][width][date.getDay()];
  }
}

function formatDateStyle(
  date: Date,
  localeCode: string,
  style: "long" | "full",
): string {
  try {
    return new Intl.DateTimeFormat(localeCode, {
      dateStyle: style,
      calendar: "islamic-umalqura",
    }).format(date);
  } catch {
    const hijri = toHijriDate(date, undefined);
    const month = formatMonthName(date, localeCode);
    if (style === "full") {
      const weekday = formatWeekdayName(date, localeCode, "long");
      return `${weekday}, ${month} ${hijri.day}, ${hijri.year}`;
    }
    return `${month} ${hijri.day}, ${hijri.year}`;
  }
}

const formatNumber = (value: number): string => {
  return value.toString();
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
  }).format(date);
};

/** Hijri (Umm al-Qura) calendar formatting override. */
export function format(
  date: Date,
  formatStr: string,
  options?: DateFnsFormatOptions,
): string {
  const extendedOptions = options as DateLibOptions | undefined;
  const localeCode = getLocaleCode(extendedOptions);
  const hijri = toHijriDate(date, extendedOptions?.timeZone);
  const monthNumber = hijri.monthIndex + 1;

  switch (formatStr) {
    case "LLLL y":
    case "LLLL yyyy":
      return `${formatMonthName(date, localeCode)} ${formatNumber(hijri.year)}`;
    case "LLLL":
      return formatMonthName(date, localeCode);
    case "PPP":
      return formatDateStyle(date, localeCode, "long");
    case "PPPP":
      return formatDateStyle(date, localeCode, "full");
    case "cccc":
      return formatWeekdayName(date, localeCode, "long");
    case "cccccc":
      return formatWeekdayName(date, localeCode, "narrow");
    case "yyyy":
    case "y":
      return formatNumber(hijri.year);
    case "yyyy-MM":
      return `${formatNumber(hijri.year)}-${formatNumber(monthNumber).padStart(2, "0")}`;
    case "yyyy-MM-dd":
      return `${formatNumber(hijri.year)}-${formatNumber(monthNumber).padStart(2, "0")}-${formatNumber(hijri.day).padStart(2, "0")}`;
    case "MM":
      return formatNumber(monthNumber).padStart(2, "0");
    case "M":
      return formatNumber(monthNumber);
    case "dd":
      return formatNumber(hijri.day).padStart(2, "0");
    case "d":
      return formatNumber(hijri.day);
    default:
      if (/[Hh]/.test(formatStr) && /m/.test(formatStr)) {
        return buildTimeFormat(date, localeCode, formatStr);
      }
      return `${formatNumber(hijri.day)}/${formatNumber(monthNumber)}/${formatNumber(hijri.year)}`;
  }
}
