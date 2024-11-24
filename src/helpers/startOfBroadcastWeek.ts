import type { DateLib } from "../classes/index.js";

/** Return the start date of the week in the broadcast calendar. */
export function startOfBroadcastWeek(date: Date, dateLib: DateLib): Date {
  const firstOfMonth = dateLib.startOfMonth(date);
  const dayOfWeek = firstOfMonth.getDay();

  if (dayOfWeek === 1) {
    return firstOfMonth;
  } else if (dayOfWeek === 0) {
    return dateLib.addDays(firstOfMonth, -1 * 6);
  } else {
    return dateLib.addDays(firstOfMonth, -1 * (dayOfWeek - 1));
  }
}
