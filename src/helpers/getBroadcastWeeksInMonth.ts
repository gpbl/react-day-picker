import type { DateLib } from "../classes/index.js";

/** Return the number of weeks to display in the broadcast calendar. */
export function getBroadcastWeeksInMonth(
  month: Date,
  dateLib: DateLib
): number {
  const NUMBER_OF_5_WEEKS = 5;
  const NUMBER_OF_4_WEEKS = 4;

  const firstDayOfMonth = new dateLib.Date(
    month.getFullYear(),
    month.getMonth(),
    1
  );
  const dayOfWeekOfFirstDayOfMonth =
    firstDayOfMonth.getDay() > 0 ? firstDayOfMonth.getDay() : 7;
  const beginDate = new dateLib.Date(
    month.getFullYear(),
    month.getMonth(),
    month.getDate() - dayOfWeekOfFirstDayOfMonth + 1
  );
  const numberOfWeeks =
    month.getMonth() ===
    new dateLib.Date(
      beginDate.getFullYear(),
      beginDate.getMonth(),
      beginDate.getDate() + NUMBER_OF_5_WEEKS * 7 - 1
    ).getMonth()
      ? NUMBER_OF_5_WEEKS
      : NUMBER_OF_4_WEEKS;
  return numberOfWeeks;
}
