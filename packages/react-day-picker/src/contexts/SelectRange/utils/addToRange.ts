import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import isSameDay from 'date-fns/isSameDay';

import { DateRange } from 'types/Matchers';

/**
 * Add a day to an existing range.
 *
 * The returned range takes in account the `undefined` values and if the added
 * day is already present in the range.
 */
export function addToRange(
  day: Date,
  range?: DateRange
): DateRange | undefined {
  const { from, to } = range || {};
  if (!from) {
    return { from: day, to: undefined };
  }
  if (!to && isSameDay(from, day)) {
    return { from: from, to: day };
  }
  if (!to && isBefore(day, from)) {
    return { from: day, to: from };
  }
  if (!to) {
    return { from, to: day };
  }
  if (isSameDay(to, day) && isSameDay(from, day)) {
    return undefined;
  }
  if (isSameDay(to, day)) {
    return { from: to, to: undefined };
  }
  if (isSameDay(from, day)) {
    return undefined;
  }
  if (isAfter(from, day)) {
    return { from: day, to };
  }
  return { from, to: day };
}
