import { DateLib } from "../classes/DateLib.js";

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
