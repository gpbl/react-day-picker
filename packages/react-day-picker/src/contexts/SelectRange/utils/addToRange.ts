import { isAfter, isBefore, isSameDay } from 'date-fns';

import { DateRange } from '../../../types';

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
    return { from: day, to: day };
  }
  if (!to && isSameDay(from, day)) {
    return undefined;
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
    return { from: to, to: to };
  }
  if (isSameDay(from, day)) {
    return undefined;
  }
  if (isAfter(from, day)) {
    return { from: day, to };
  }
  return { from, to: day };
}
