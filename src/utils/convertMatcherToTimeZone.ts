import { TZDate } from "@date-fns/tz";
import type { DateLib } from "../classes/DateLib.js";
import type { Matcher } from "../types/shared.js";
import {
  isDateAfterType,
  isDateBeforeType,
  isDateInterval,
  isDateRange,
  isDatesArray,
  isDayOfWeekType,
} from "./typeguards.js";

/**
 * Converts a matcher to use time zone aware dates when a timeZone is specified.
 * This ensures consistent date comparisons when using different time zones.
 *
 * @private
 * @param matcher - The matcher to convert
 * @param timeZone - The time zone to convert dates to
 * @param dateLib - The date library instance
 * @returns The converted matcher with time zone aware dates
 */
export function convertMatcherToTimeZone(
  matcher: Matcher,
  timeZone: string,
  dateLib: DateLib,
): Matcher {
  // Return matcher as-is for non-date types
  if (typeof matcher === "boolean" || typeof matcher === "function") {
    return matcher;
  }

  // Convert single Date
  if (dateLib.isDate(matcher)) {
    return new TZDate(matcher, timeZone);
  }

  // Convert array of Dates
  if (isDatesArray(matcher, dateLib)) {
    return matcher.map((date) => new TZDate(date, timeZone));
  }

  // Convert DateRange
  if (isDateRange(matcher)) {
    return {
      from: matcher.from ? new TZDate(matcher.from, timeZone) : undefined,
      to: matcher.to ? new TZDate(matcher.to, timeZone) : undefined,
    };
  }

  // Convert DateInterval (must be checked before DateBefore/DateAfter since it has both properties)
  if (isDateInterval(matcher)) {
    return {
      before: new TZDate(matcher.before, timeZone),
      after: new TZDate(matcher.after, timeZone),
    };
  }

  // Convert DateBefore
  if (isDateBeforeType(matcher)) {
    return {
      before: new TZDate(matcher.before, timeZone),
    };
  }

  // Convert DateAfter
  if (isDateAfterType(matcher)) {
    return {
      after: new TZDate(matcher.after, timeZone),
    };
  }

  // DayOfWeek doesn't need conversion
  if (isDayOfWeekType(matcher)) {
    return matcher;
  }

  // Fallback: return original matcher
  return matcher;
}

/**
 * Converts an array of matchers or a single matcher to use time zone aware
 * dates.
 *
 * @private
 * @param matchers - The matchers to convert
 * @param timeZone - The time zone to convert dates to
 * @param dateLib - The date library instance
 * @returns The converted matchers with time zone aware dates
 */
export function convertMatchersToTimeZone(
  matchers: Matcher | Matcher[] | undefined,
  timeZone: string,
  dateLib: DateLib,
): Matcher | Matcher[] | undefined {
  if (!matchers) {
    return matchers;
  }

  if (Array.isArray(matchers)) {
    return matchers.map((matcher) =>
      convertMatcherToTimeZone(matcher, timeZone, dateLib),
    );
  }

  return convertMatcherToTimeZone(matchers, timeZone, dateLib);
}
