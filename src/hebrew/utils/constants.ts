export const MS_PER_DAY = 24 * 60 * 60 * 1000;
export const GREGORIAN_EPOCH = Date.UTC(1, 0, 1);
export const HEBREW_EPOCH = -2067381;

export const MONTH_SEQUENCE_COMMON = [
  "tishrei",
  "cheshvan",
  "kislev",
  "tevet",
  "shevat",
  "adar",
  "nisan",
  "iyar",
  "sivan",
  "tamuz",
  "av",
  "elul",
] as const;

export const MONTH_SEQUENCE_LEAP = [
  "tishrei",
  "cheshvan",
  "kislev",
  "tevet",
  "shevat",
  "adarI",
  "adar",
  "nisan",
  "iyar",
  "sivan",
  "tamuz",
  "av",
  "elul",
] as const;

export const MONTHS_PER_CYCLE = 235;

export type HebrewMonthCode = (typeof MONTH_SEQUENCE_LEAP)[number];

export type HebrewDate = {
  year: number;
  monthIndex: number;
  day: number;
};

export type YearType = "deficient" | "regular" | "complete";
