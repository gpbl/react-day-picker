import { toHijriDate } from "../utils/conversion.js";

export type FallbackLocaleCode = "ar" | "en";
export type IntlNameWidth = "long" | "short" | "narrow";

const fallbackMonthNames: Record<
  FallbackLocaleCode,
  Record<IntlNameWidth, string[]>
> = {
  en: {
    long: [
      "Muharram",
      "Safar",
      "Rabi I",
      "Rabi II",
      "Jumada I",
      "Jumada II",
      "Rajab",
      "Shaban",
      "Ramadan",
      "Shawwal",
      "Dhu al-Qadah",
      "Dhu al-Hijjah",
    ],
    short: [
      "Muh",
      "Saf",
      "Rab-I",
      "Rab-II",
      "Jum-I",
      "Jum-II",
      "Raj",
      "Sha",
      "Ram",
      "Shw",
      "Dhu-Q",
      "Dhu-H",
    ],
    narrow: ["M", "S", "R", "R", "J", "J", "R", "S", "R", "S", "D", "D"],
  },
  ar: {
    long: [
      "محرم",
      "صفر",
      "ربيع الأول",
      "ربيع الآخر",
      "جمادى الأولى",
      "جمادى الآخرة",
      "رجب",
      "شعبان",
      "رمضان",
      "شوال",
      "ذو القعدة",
      "ذو الحجة",
    ],
    short: [
      "محرم",
      "صفر",
      "ربيع ١",
      "ربيع ٢",
      "جمادى ١",
      "جمادى ٢",
      "رجب",
      "شعبان",
      "رمضان",
      "شوال",
      "ذو القعدة",
      "ذو الحجة",
    ],
    narrow: ["م", "ص", "ر", "ر", "ج", "ج", "ر", "ش", "ر", "ش", "ذ", "ذ"],
  },
};

const fallbackWeekdayNames: Record<
  FallbackLocaleCode,
  Record<IntlNameWidth, string[]>
> = {
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
    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
  },
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
    short: ["أحد", "اثن", "ثلا", "أرب", "خمي", "جمع", "سبت"],
    narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
  },
};

export const getFallbackLocaleCode = (
  localeCode: string,
): FallbackLocaleCode => {
  return localeCode.toLowerCase().startsWith("ar") ? "ar" : "en";
};

export const getFallbackMonthName = (
  date: Date,
  localeCode: string,
  width: IntlNameWidth,
): string => {
  const hijri = toHijriDate(date);
  const locale = getFallbackLocaleCode(localeCode);
  return fallbackMonthNames[locale][width][hijri.monthIndex];
};

export const getFallbackWeekdayName = (
  date: Date,
  localeCode: string,
  width: IntlNameWidth,
): string => {
  const locale = getFallbackLocaleCode(localeCode);
  return fallbackWeekdayNames[locale][width][date.getDay()];
};
