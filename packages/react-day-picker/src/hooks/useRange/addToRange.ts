import { isSameDay } from 'date-fns';
import { DaysRange } from 'types';

const emptyRange: DaysRange = { from: undefined, to: undefined };

/**
 * Add a day to an existing range.
 *
 * The returned range takes in account the `undefined` values and if the added
 * day is already present in the range.
 */
export function addToRange(range: DaysRange, day: Date): DaysRange {
  const { from, to } = range;
  if (!from) {
    return { from: day };
  }
  if (!to && isSameDay(from, day)) {
    return emptyRange;
  }
  if (!to) {
    return { from, to: day };
  }
  if (isSameDay(to, day)) {
    return { from: to };
  }
  return { from, to: day };
}
