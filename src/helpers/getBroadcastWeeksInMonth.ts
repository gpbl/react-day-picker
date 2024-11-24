import { DateLib } from "../classes/index.js";

const FIVE_WEEKS = 5;
const FOUR_WEEKS = 4;

/** Return the number of weeks to display in the broadcast calendar. */
export function getBroadcastWeeksInMonth(month: Date, dateLib: DateLib): 4 | 5 {
  // Get the first day of the month
  const firstDayOfMonth = dateLib.startOfMonth(month);

  // Get the day of the week for the first day of the month (1-7, where 1 is Monday)
  const firstDayOfWeek =
    firstDayOfMonth.getDay() > 0 ? firstDayOfMonth.getDay() : 7;

  const broadcastStartDate = dateLib.addDays(month, -firstDayOfWeek + 1);

  const lastDateOfLastWeek = dateLib.addDays(
    broadcastStartDate,
    FIVE_WEEKS * 7 - 1
  );
  const numberOfWeeks =
    month.getMonth() === lastDateOfLastWeek.getMonth()
      ? FIVE_WEEKS
      : FOUR_WEEKS;

  return numberOfWeeks;
}
