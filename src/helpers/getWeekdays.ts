import { DateLib } from "../classes/DateLib.js";

/**
 * Generate a series of 7 days, starting from the week, to use for formatting
 * the weekday names (Monday, Tuesday, etc.).
 */
export function getWeekdays(
  /** The date library. */
  dateLib: DateLib,
  /** Use ISOWeek instead of locale/ */
  ISOWeek?: boolean | undefined,
  /** @since 9.4.0 */
  broadcastCalendar?: boolean | undefined
): Date[] {
  const today = dateLib.today();

  const start = broadcastCalendar
    ? dateLib.startOfBroadcastWeek(today, dateLib)
    : ISOWeek
      ? dateLib.startOfISOWeek(today)
      : dateLib.startOfWeek(today);

  const days: Date[] = [];
  for (let i = 0; i < 7; i++) {
    const day = dateLib.addDays(start, i);
    days.push(day);
  }
  return days;
}
