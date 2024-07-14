import { dateLib as defaultDateLib } from "../lib/index.js";
import type { DateRange, DateLib } from "../types/index.js";

/**
 * Add a day to an existing range.
 *
 * The returned range takes in account the `undefined` values and if the added
 * day is already present in the range.
 *
 * @group Utilities
 */
export function addToRange(
  date: Date,
  range: DateRange | undefined,
  /** @ignore */
  dateLib: DateLib = defaultDateLib
): DateRange {
  const { from, to } = range || {};
  const { isSameDay, isAfter, isBefore } = dateLib;
  if (from && to) {
    if (isSameDay(to, date) && isSameDay(from, date)) {
      return { from: undefined, to: undefined };
    }
    if (isSameDay(to, date)) {
      return { from: to, to: undefined };
    }
    if (isSameDay(from, date)) {
      return { from: undefined, to: undefined };
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
