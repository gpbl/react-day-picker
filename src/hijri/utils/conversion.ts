import { gregorianToHijri, hijriToGregorian } from "@tabby_ai/hijri-converter";
import type { HijriDate } from "./types.js";

/** Convert a Gregorian date to a Hijri date. */
export function toHijriDate(date: Date): HijriDate {
  // Years < 100 must use UTC components to avoid JS's 1900 offset; for normal
  // years keep local components so we don't reintroduce UTC/local skew in the
  // rendered month grid.
  const useUTC = date.getFullYear() < 100;
  const year = useUTC ? date.getUTCFullYear() : date.getFullYear();
  const month = useUTC ? date.getUTCMonth() : date.getMonth();
  const day = useUTC ? date.getUTCDate() : date.getDate();

  // gregorianToHijri uses 1-indexed months
  const hijri = gregorianToHijri({ year, month: month + 1, day });

  return {
    year: hijri.year,
    monthIndex: hijri.month - 1, // Convert to 0-indexed
    day: hijri.day,
  };
}

/** Convert a Hijri date back to the Gregorian calendar. */
export function toGregorianDate(hijri: HijriDate): Date {
  // hijriToGregorian expects 1-indexed months
  const gregorian = hijriToGregorian({
    year: hijri.year,
    month: hijri.monthIndex + 1, // Convert to 1-indexed
    day: hijri.day,
  });

  return new Date(gregorian.year, gregorian.month - 1, gregorian.day);
}
