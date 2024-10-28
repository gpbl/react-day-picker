import { defaultDateLib, type DateLib } from "../classes/DateLib.js";
import type { Matcher } from "../types/index.js";

import { areRangesOverlapping } from "./areRangesOverlapping.js";
import { dateMatchModifiers } from "./dateMatchModifiers.js";
import { rangeContainsDayOfWeek } from "./rangeContainsDayOfWeek.js";
import { rangeIncludesDate } from "./rangeIncludesDate.js";
import {
  isDateAfterType,
  isDateBeforeType,
  isDateInterval,
  isDateRange,
  isDatesArray,
  isDayOfWeekType
} from "./typeguards.js";

/**
 * Returns whether a date range matches against at least one of the given
 * {@link Matcher}.
 *
 * ```tsx
 * const range: DateRange = {
 *   from: new Date(2021, 12, 21),
 *   to: new Date(2021, 12, 30)
 * };
 * const matcher1: Date = new Date(2021, 12, 21);
 * const matcher2: DateRange = {
 *   from: new Date(2022, 5, 1),
 *   to: new Date(2022, 5, 23)
 * };
 * rangeContainsModifiers(date, [matcher1, matcher2]); // true, since matcher1 is in the date.
 * ```
 *
 * @group Utilities
 */
export function rangeContainsModifiers(
  range: { from: Date; to: Date },
  matchers: Matcher | Matcher[],
  dateLib: DateLib = defaultDateLib
): boolean {
  const matchersArr = !Array.isArray(matchers) ? [matchers] : matchers;

  // function matchers needs to verified against every day in the date range,
  // because of that it's the least performant one and should be deferred to be the last evaluated
  const nonFunctionMatchers = matchersArr.filter(
    (matcher) => typeof matcher !== "function"
  );

  const nonFunctionMatchersResult = nonFunctionMatchers.some((matcher) => {
    if (typeof matcher === "boolean") {
      return matcher;
    }

    if (dateLib.isDate(matcher)) {
      return rangeIncludesDate(range, matcher, false, dateLib);
    }

    if (isDatesArray(matcher, dateLib)) {
      return matcher.some((date) =>
        rangeIncludesDate(range, date, false, dateLib)
      );
    }

    if (isDateRange(matcher)) {
      if (matcher.from && matcher.to) {
        const dateRangeMatcher = { from: matcher.from, to: matcher.to };
        return areRangesOverlapping(range, dateRangeMatcher, dateLib);
      }
      return false;
    }

    if (isDayOfWeekType(matcher)) {
      return rangeContainsDayOfWeek(range, matcher, dateLib);
    }

    if (isDateInterval(matcher)) {
      const isClosedInterval = dateLib.isAfter(matcher.before, matcher.after);

      if (isClosedInterval) {
        const dateRangeMatcher = {
          from: dateLib.addDays(matcher.after, 1),
          to: dateLib.addDays(matcher.before, -1)
        };
        return areRangesOverlapping(range, dateRangeMatcher, dateLib);
      }

      return (
        dateMatchModifiers(range.from, matcher, dateLib) ||
        dateMatchModifiers(range.to, matcher, dateLib)
      );
    }
    if (isDateAfterType(matcher)) {
      return (
        dateMatchModifiers(range.from, matcher, dateLib) ||
        dateMatchModifiers(range.to, matcher, dateLib)
      );
    }
    if (isDateBeforeType(matcher)) {
      return (
        dateMatchModifiers(range.from, matcher, dateLib) ||
        dateMatchModifiers(range.to, matcher, dateLib)
      );
    }
    return false;
  });

  if (nonFunctionMatchersResult) {
    return true;
  }

  const functionMatchers = matchersArr.filter(
    (matcher) => typeof matcher === "function"
  );
  if (functionMatchers.length) {
    let date = range.from;
    const totalDays = dateLib.differenceInCalendarDays(range.to, range.from);

    for (let i = 0; i <= totalDays; i++) {
      if (functionMatchers.some((matcher) => matcher(date))) {
        return true;
      }
      date = dateLib.addDays(date, 1);
    }
  }

  return false;
}
