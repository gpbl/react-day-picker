import { toEthiopicDate } from "../utils/toEthiopicDate.js";
import { toGregorianDate } from "../utils/toGregorianDate.js";

export interface GetWeekOptions {
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

export function getWeek(date: Date, options?: GetWeekOptions): number {
  const etDate = toEthiopicDate(date);

  // Get the first day of the current year
  const firstDayOfYear = toGregorianDate({
    year: etDate.year,
    month: 1,
    day: 1
  });

  // Get the first day of next year
  const firstDayOfNextYear = toGregorianDate({
    year: etDate.year + 1,
    month: 1,
    day: 1
  });

  // Adjust to the start of the week (Monday)
  const getWeekStart = (date: Date) => {
    const daysSinceMonday = (date.getDay() + 6) % 7;
    const weekStart = new Date(date);
    weekStart.setDate(date.getDate() - daysSinceMonday);
    return weekStart;
  };

  const firstWeekStart = getWeekStart(firstDayOfYear);
  const nextYearFirstWeekStart = getWeekStart(firstDayOfNextYear);

  // If the date is in the last week of the year, check if it belongs to week 1 of next year
  if (date >= nextYearFirstWeekStart) {
    return 1;
  }

  // Calculate days since the first week start
  const daysSinceStart = Math.floor(
    (date.getTime() - firstWeekStart.getTime()) / (24 * 60 * 60 * 1000)
  );

  // If the date is before the first week of its year, it belongs to the last week of previous year
  if (date < firstWeekStart) {
    const prevYearFirstDay = toGregorianDate({
      year: etDate.year - 1,
      month: 1,
      day: 1
    });
    const prevYearFirstWeekStart = getWeekStart(prevYearFirstDay);
    const daysSincePrevStart = Math.floor(
      (date.getTime() - prevYearFirstWeekStart.getTime()) /
        (24 * 60 * 60 * 1000)
    );
    return Math.floor(daysSincePrevStart / 7) + 1;
  }

  const data = Math.floor(daysSinceStart / 7) + 1;
  return data;
}
