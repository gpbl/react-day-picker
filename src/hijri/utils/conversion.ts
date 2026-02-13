import { gregorianToHijri, hijriToGregorian } from "@tabby_ai/hijri-converter";
import {
  clampGregorianDate,
  clampHijriDate,
  GREGORIAN_MIN_DATE,
  getGregorianDateParts,
} from "./range.js";
import type { HijriDate } from "./types.js";

/** Convert a Gregorian date to a Hijri date. */
export function toHijriDate(date: Date): HijriDate {
  const clamped = clampGregorianDate(date);
  const { year, month, day } = getGregorianDateParts(clamped);

  // gregorianToHijri uses 1-indexed months
  const hijri = gregorianToHijri({ year, month, day });

  return {
    year: hijri.year,
    monthIndex: hijri.month - 1, // Convert to 0-indexed
    day: hijri.day,
  };
}

/** Convert a Hijri date back to the Gregorian calendar. */
export function toGregorianDate(hijri: HijriDate): Date {
  const clamped = clampHijriDate(hijri);

  // hijriToGregorian expects 1-indexed months. Probe down from the candidate
  // day to handle invalid month/day combinations without throwing.
  for (let day = clamped.day; day >= 1; day -= 1) {
    try {
      const gregorian = hijriToGregorian({
        year: clamped.year,
        month: clamped.monthIndex + 1,
        day,
      });
      return clampGregorianDate(
        new Date(gregorian.year, gregorian.month - 1, gregorian.day),
      );
    } catch {
      // Try a lower day for months that only have 29 days.
    }
  }

  // Fallback to the minimum supported Gregorian date if conversion probing
  // somehow fails for all days.
  return new Date(GREGORIAN_MIN_DATE);
}
