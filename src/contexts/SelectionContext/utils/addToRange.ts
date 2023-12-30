import { isAfter } from 'date-fns/isAfter';
import { isBefore } from 'date-fns/isBefore';
import { isSameDay } from 'date-fns/isSameDay';

import { DateRange } from '../../../types/matchers';

/**
 * Add a day to an existing range.
 *
 * The returned range takes in account the `undefined` values and if the added
 * day is already present in the range.
 */
export function addToRange(
  date: Date,
  range?: DateRange
): DateRange | undefined {
  const { from, to } = range || {};
  if (from && to) {
    if (isSameDay(to, date) && isSameDay(from, date)) {
      return undefined;
    }
    if (isSameDay(to, date)) {
      return { from: to, to: undefined };
    }
    if (isSameDay(from, date)) {
      return undefined;
    }
    if (isAfter(from, date)) {
      return { from: date, to };
    }
    return { from, to: date };
  }
  if (to) {
    if (isAfter(date, to)) {
      return { from: to, to: date };
    }
    return { from: date, to };
  }
  if (from) {
    if (isBefore(date, from)) {
      return { from: date, to: from };
    }
    if (isSameDay(date, from)) {
      return { from: undefined, to: undefined };
    }
    return { from, to: date };
  }
  return { from: date, to: undefined };
}
