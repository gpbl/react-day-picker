import { type DateLib, defaultDateLib } from "../classes/DateLib.js";
import { createDateAdapter } from "../internal/dateAdapter.js";
import type { DateRange } from "../types/index.js";

/**
 * Adds a date to an existing range, considering constraints like minimum and
 * maximum range size.
 *
 * @param date - The date to add to the range.
 * @param initialRange - The initial range to which the date will be added.
 * @param min - The minimum number of days in the range.
 * @param max - The maximum number of days in the range.
 * @param required - Whether the range must always include at least one date.
 * @param dateLib - The date utility library instance.
 * @returns The updated date range, or `undefined` if the range is cleared.
 * @group Utilities
 */
export function addToRange(
  date: Date,
  initialRange: DateRange | undefined,
  min = 0,
  max = 0,
  required = false,
  dateLib: DateLib = defaultDateLib,
): DateRange | undefined {
  const { from, to } = initialRange || {};
  const dateAdapter = createDateAdapter(dateLib);

  let range: DateRange | undefined;

  if (!from && !to) {
    // the range is empty, add the date
    range = { from: date, to: min > 0 ? undefined : date };
  } else if (from && !to) {
    // adding date to an incomplete range
    if (dateAdapter.isSameDay(from, date)) {
      // adding a date equal to the start of the range
      if (min === 0) {
        range = { from, to: date };
      } else if (required) {
        range = { from, to: undefined };
      } else {
        range = undefined;
      }
    } else if (dateAdapter.isBefore(date, from)) {
      // adding a date before the start of the range
      range = { from: date, to: from };
    } else {
      // adding a date after the start of the range
      range = { from, to: date };
    }
  } else if (from && to) {
    // adding date to a complete range
    if (dateAdapter.isSameDay(from, date) && dateAdapter.isSameDay(to, date)) {
      // adding a date that is equal to both start and end of the range
      if (required) {
        range = { from, to };
      } else {
        range = undefined;
      }
    } else if (dateAdapter.isSameDay(from, date)) {
      // adding a date equal to the the start of the range
      range = { from, to: min > 0 ? undefined : date };
    } else if (dateAdapter.isSameDay(to, date)) {
      // adding a dare equal to the end of the range
      range = { from: date, to: min > 0 ? undefined : date };
    } else if (dateAdapter.isBefore(date, from)) {
      // adding a date before the start of the range
      range = { from: date, to: to };
    } else if (dateAdapter.isAfter(date, from)) {
      // adding a date after the start of the range
      range = { from, to: date };
    } else if (dateAdapter.isAfter(date, to)) {
      // adding a date after the end of the range
      range = { from, to: date };
    } else {
      throw new Error("Invalid range");
    }
  }

  // check for min / max
  if (range?.from && range?.to) {
    const diff = dateLib.differenceInCalendarDays(range.to, range.from);
    if (max > 0 && diff > max) {
      range = { from: date, to: undefined };
    } else if (min > 1 && diff < min) {
      range = { from: date, to: undefined };
    }
  }

  return range;
}
