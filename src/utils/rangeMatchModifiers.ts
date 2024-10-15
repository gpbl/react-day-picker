import { dateLib as defaultDateLib, type DateLib } from "../lib/dateLib.js";
import type { DateRange, Matcher } from "../types/index.js";

import { dateMatchModifiers } from "./dateMatchModifiers.js";
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
 *  from: new Date(2021, 12, 21),
 *  to: new Date(2021, 12, 30)
 * }
 * const matcher1: Date = new Date(2021, 12, 21)
 * const matcher2: DateRange = {
 *  from: new Date(2022, 5, 1),
 *  to: new Date(2022, 5, 23)
 * }
 * const dateMatchModifiers(date, [matcher1, matcher2]); // true, since matcher1 is in the date.
 * ```
 *
 * @group Utilities
 */
export function rangeMatchModifiers(
  range: DateRange,
  matchers: Matcher | Matcher[],
  dateLib: DateLib = defaultDateLib
): boolean {
  // TODO maybe add a console.warning if this function took too long to finish
  const matchersArr = !Array.isArray(matchers) ? [matchers] : matchers;

  // function matchers needs to verified against every day in the date range,
  // because of that it's the least performant one and should be deferred to be the last evaluated
  const nonFunctionMatchers = matchersArr.filter(
    (matcher) => typeof matcher !== "function"
  );

  const nonFunctionMatchersResult = nonFunctionMatchers.some((matcher) => {
    if (!range.to || !range.from) {
      return false;
    }
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
      return (
        matcher.from &&
        matcher.to &&
        (rangeIncludesDate(range, matcher.from, false, dateLib) ||
          rangeIncludesDate(range, matcher.to, false, dateLib))
      );
    }
    if (isDayOfWeekType(matcher)) {
      const dayOfWeekArr = !Array.isArray(matcher.dayOfWeek)
        ? [matcher.dayOfWeek]
        : matcher.dayOfWeek;
      let date = range.from;
      const totalDays = dateLib.differenceInCalendarDays(range.to, range.from);

      // iterate at maximum one week or the total days if the range is shorter than one week
      const totalDaysLimit = Math.min(totalDays, 6);
      for (let i = 0; i <= totalDaysLimit; i++) {
        if (dayOfWeekArr.includes(date.getDay())) {
          return true;
        }
        date = dateLib.addDays(date, 1);
      }
      return false;
    }
    if (
      isDateInterval(matcher) ||
      isDateAfterType(matcher) ||
      isDateBeforeType(matcher)
    ) {
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
  if (functionMatchers.length && range.to && range.from) {
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
