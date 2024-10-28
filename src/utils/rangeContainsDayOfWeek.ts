import { defaultDateLib, type DateLib } from "../classes/DateLib.js";
import type { DayOfWeek } from "../types/index.js";

export function rangeContainsDayOfWeek(
  range: { from: Date; to: Date },
  matcher: DayOfWeek,
  dateLib: DateLib = defaultDateLib
) {
  const dayOfWeekArr = !Array.isArray(matcher.dayOfWeek)
    ? [matcher.dayOfWeek]
    : matcher.dayOfWeek;
  let date = range.from;
  const totalDays = dateLib.differenceInCalendarDays(range.to, range.from);

  // iterate at maximum one week or the total days if the range is shorter than one week
  const totalDaysLimit = Math.min(totalDays, 6);
  for (let i = 0; i <= totalDaysLimit; i++) {
    if (dayOfWeekArr.includes(date.getDay())) {
      return true;
    }
    date = dateLib.addDays(date, 1);
  }
  return false;
}
