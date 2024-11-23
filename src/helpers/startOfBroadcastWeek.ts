import type { DateLib } from "../classes/index.js";

/** Return the start date of the week in the broadcast calendar. */
export function startOfBroadcastWeek(date: Date, dateLib: DateLib): Date {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstOfMonth = dateLib.startOfMonth(new dateLib.Date(year, month, 1));
  const dayOfWeek = firstOfMonth.getUTCDay(); // 0 = Sunday, 1 = Monday, etc.

  // If the first of the month is a Monday, then the broadcast month starts on that day.
  // Otherwise, the broadcast starts on the previous Monday, and if first of the month is Sunday, then the starts on the previous week's Monday.
  if (dayOfWeek === 1) {
    return firstOfMonth;
  } else if (dayOfWeek === 0) {
    const startDate = new dateLib.Date(year, month, 1 - dayOfWeek + 1 - 7);
    return startDate;
  } else {
    const startDate = new dateLib.Date(year, month, 1 - dayOfWeek + 1);
    return startDate;
  }
}
