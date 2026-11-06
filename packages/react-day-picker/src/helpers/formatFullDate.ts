import type { DateLib } from "../classes/DateLib.js";

/**
 * Formats the full date used in the day labels with `DateLib.formatFullDate`.
 *
 * A `DateLib` created by an older copy of the package has no `formatFullDate`:
 * in that case the date is formatted with `PPPP`.
 *
 * @param dateLib The date library to format the date with.
 * @param date The date to format.
 * @returns The formatted date.
 */
export function formatFullDate(dateLib: DateLib, date: Date): string {
  return typeof dateLib.formatFullDate === "function"
    ? dateLib.formatFullDate(date)
    : dateLib.format(date, "PPPP");
}
