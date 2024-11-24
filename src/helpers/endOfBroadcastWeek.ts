import type { DateLib } from "../classes/index.js";

import { getBroadcastWeeksInMonth } from "./getBroadcastWeeksInMonth.js";
import { startOfBroadcastWeek } from "./startOfBroadcastWeek.js";

/**
 * Return the end date of the week in the broadcast calendar.
 *
 * @since 9.4.0
 */
export function endOfBroadcastWeek(date: Date, dateLib: DateLib): Date {
  const startDate = startOfBroadcastWeek(date, dateLib);
  const numberOfWeeks = getBroadcastWeeksInMonth(date, dateLib);
  const endDate = dateLib.addDays(startDate, numberOfWeeks * 7 - 1);
  return endDate;
}
