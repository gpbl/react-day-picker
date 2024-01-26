import {
  addDays,
  compareAsc,
  compareDesc,
  isAfter,
  isBefore,
  isDate,
  nextDay,
  previousDay,
  subDays
} from 'date-fns';

import { DayPickerRangeProps } from 'types/DayPickerRange';
import {
  isDateAfterType,
  isDateBeforeType,
  isDateInterval,
  isDateRange,
  isDayOfWeekType,
  Matcher
} from 'types/Matchers';

/** Returns true if `value` is a Date type. */
function isDateType(value: unknown): value is Date {
  return isDate(value);
}

/** Returns true if `value` is an array of valid dates. */
function isArrayOfDates(value: unknown): value is Date[] {
  return Array.isArray(value) && value.every(isDate);
}

const closestDisabledDate = (
  date: Date,
  matcher: Matcher,
  descending?: boolean
) => {
  const checker = descending ? isAfter : isBefore;

  if (typeof matcher === 'boolean') {
    return undefined;
  }

  if (isDateType(matcher) && checker(date, matcher)) {
    return matcher;
  }

  if (isArrayOfDates(matcher)) {
    return matcher.reduce((acc: Date | undefined, value: Date) => {
      if (acc) {
        return checker(value, acc) && checker(date, value) ? value : acc;
      }
      return checker(date, value) ? value : undefined;
    }, undefined);
  }

  if (isDateRange(matcher)) {
    if (!descending && matcher.from && checker(date, matcher.from)) {
      return subDays(matcher.from, 1);
    }
    if (descending && matcher.to && checker(date, matcher.to)) {
      return addDays(matcher.to, 1);
    }
    return undefined;
  }

  if (isDayOfWeekType(matcher)) {
    const sorter = descending ? compareDesc : compareAsc;
    const getDayOfWeek = descending ? previousDay : nextDay;
    const value = matcher.dayOfWeek
      .map((d) => getDayOfWeek(date, d as Day))
      .sort(sorter)[0];
    return value;
  }

  if (isDateInterval(matcher) && checker(date, matcher.after)) {
    if (!descending && checker(date, matcher.after)) {
      return matcher.after;
    }

    if (descending && checker(date, matcher.before)) {
      return matcher.before;
    }

    return undefined;
  }

  if (isDateAfterType(matcher) && !descending && checker(date, matcher.after)) {
    return matcher.after;
  }

  if (
    isDateBeforeType(matcher) &&
    descending &&
    checker(date, matcher.before)
  ) {
    return matcher.before;
  }

  return undefined;
};

export const findDisabledDays = (
  date: Date,
  disabled: DayPickerRangeProps['disabled']
): { after: Date | undefined; before: Date | undefined } | undefined => {
  if (Array.isArray(disabled)) {
    return {
      after: (disabled as Matcher[]).reduce(
        (acc: Date | undefined, value: Matcher) => {
          const nextValue = closestDisabledDate(date, value);
          if (nextValue) {
            if (acc && isBefore(nextValue, acc)) {
              return nextValue;
            }
            return acc || nextValue;
          }
          return acc;
        },
        undefined
      ),
      before: (disabled as Matcher[]).reduce(
        (acc: Date | undefined, value: Matcher) => {
          const nextValue = closestDisabledDate(date, value, true);
          if (nextValue) {
            if (acc && isAfter(nextValue, acc)) {
              return nextValue;
            }
            return acc || nextValue;
          }
          return acc;
        },
        undefined
      )
    };
  }
  if (disabled !== undefined) {
    return {
      after: closestDisabledDate(date, disabled),
      before: closestDisabledDate(date, disabled, true)
    };
  }

  return undefined;
};
