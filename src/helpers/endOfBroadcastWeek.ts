import type { DateLib } from "../classes/index.js";

import { getBroadcastWeeksInMonth } from "./getBroadcastWeeksInMonth.js";
import { startOfBroadcastWeek } from "./startOfBroadcastWeek.js";

/** Return the end date of the week in the broadcast calendar. */

export function endOfBroadcastWeek(date: Date, dateLib: DateLib): Date {
  const startDate = startOfBroadcastWeek(date, dateLib);
  // end date based on the weeks to show, it is calculated by getBroadcastWeeksInMonth
  const numberOfWeeks = getBroadcastWeeksInMonth(date, dateLib);
  const endDate = new dateLib.Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate() + numberOfWeeks * 7 - 1
  );
  return endDate;
}
