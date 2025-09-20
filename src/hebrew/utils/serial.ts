import { daysInHebrewMonth, monthsInHebrewYear } from "./calendarMath.js";
import { type HebrewDate, MONTHS_PER_CYCLE } from "./constants.js";

/**
 * Count how many months have elapsed before the given Hebrew year. Needed to
 * compute serial month offsets across leap/non-leap cycles.
 */
function monthsBeforeYear(year: number): number {
  if (year <= 1) {
    return 0;
  }
  const cycles = Math.floor((year - 1) / 19);
  let months = cycles * MONTHS_PER_CYCLE;
  let currentYear = cycles * 19 + 1;
  while (currentYear < year) {
    months += monthsInHebrewYear(currentYear);
    currentYear += 1;
  }
  return months;
}

/** Serial index for Hebrew months since the epoch (Tishrei of year 1). */
export function monthsSinceEpoch({
  year,
  monthIndex,
}: Pick<HebrewDate, "year" | "monthIndex">): number {
  return monthsBeforeYear(year) + monthIndex;
}

/**
 * Convert a serial month index back into Hebrew year/month. Supports negative
 * indices for pre-epoch dates.
 */
function hebrewFromMonthIndex(monthIndex: number): {
  year: number;
  month: number;
} {
  let index = monthIndex;
  let year = 1;
  if (index >= 0) {
    const cycles = Math.floor(index / MONTHS_PER_CYCLE);
    year += cycles * 19;
    index -= cycles * MONTHS_PER_CYCLE;
    while (true) {
      const months = monthsInHebrewYear(year);
      if (index < months) {
        break;
      }
      index -= months;
      year += 1;
    }
    return { year, month: index };
  }
  // Handle negative month indices (dates before the epoch)
  while (index < 0) {
    year -= 1;
    const months = monthsInHebrewYear(year);
    index += months;
  }
  return { year, month: index };
}

/** Clamp a day number to the valid number of days in a month. */
export function clampHebrewDay(
  year: number,
  monthIndex: number,
  day: number,
): number {
  const maxDay = daysInHebrewMonth(year, monthIndex);
  return Math.min(day, maxDay);
}

/** Convert serial month index to a Hebrew date, clamping the day if needed. */
export function monthIndexToHebrewDate(
  monthIndex: number,
  day: number,
): HebrewDate {
  const { year, month } = hebrewFromMonthIndex(monthIndex);
  return {
    year,
    monthIndex: month,
    day: clampHebrewDay(year, month, day),
  };
}

/** Convert zero-based month index to the user-facing 1..13 number. */
export function hebrewMonthNumber(monthIndex: number): number {
  return monthIndex + 1;
}
