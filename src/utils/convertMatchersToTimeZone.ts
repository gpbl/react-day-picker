import type { Matcher } from "../types/index.js";

import {
  isDateAfterType,
  isDateBeforeType,
  isDateInterval,
  isDateRange,
} from "./typeguards.js";
import { toTimeZone } from "./toTimeZone.js";

function convertMatcher(matcher: Matcher, timeZone: string): Matcher {
  if (typeof matcher === "boolean" || typeof matcher === "function") {
    return matcher;
  }

  if (matcher instanceof Date) {
    return toTimeZone(matcher, timeZone);
  }

  if (Array.isArray(matcher)) {
    return matcher.map((value) =>
      value instanceof Date ? toTimeZone(value, timeZone) : value,
    );
  }

  if (isDateRange(matcher)) {
    return {
      ...matcher,
      from: matcher.from ? toTimeZone(matcher.from, timeZone) : matcher.from,
      to: matcher.to ? toTimeZone(matcher.to, timeZone) : matcher.to,
    };
  }

  if (isDateInterval(matcher)) {
    return {
      before: toTimeZone(matcher.before, timeZone),
      after: toTimeZone(matcher.after, timeZone),
    };
  }

  if (isDateAfterType(matcher)) {
    return {
      after: toTimeZone(matcher.after, timeZone),
    };
  }

  if (isDateBeforeType(matcher)) {
    return {
      before: toTimeZone(matcher.before, timeZone),
    };
  }

  return matcher;
}

/**
 * Convert any {@link Matcher} or array of matchers to the specified time zone.
 *
 * @param matchers - The matcher or matchers to convert.
 * @param timeZone - The target IANA time zone.
 * @returns The converted matcher(s).
 * @group Utilities
 */
export function convertMatchersToTimeZone(
  matchers: Matcher | Matcher[] | undefined,
  timeZone: string,
): Matcher | Matcher[] | undefined {
  if (!matchers) {
    return matchers;
  }

  if (Array.isArray(matchers)) {
    return matchers.map((matcher) => convertMatcher(matcher, timeZone));
  }

  return convertMatcher(matchers, timeZone);
}
