import type { DateLib, DayPickerProps, Locale } from "../index.js";

/** The number of days in a month when having 6 weeks. */
const NrOfDaysWithFixedWeeks = 42;

/** Return all the dates to display in the calendar. */
export function getDates(
  displayMonths: Date[],
  maxDate: Date | undefined,
  props: Pick<
    DayPickerProps,
    "ISOWeek" | "fixedWeeks" | "weekStartsOn" | "timeZone"
  >,
  dateLib: DateLib,
  locale: Locale
): Date[] {
  const firstMonth = displayMonths[0];
  const lastMonth = displayMonths[displayMonths.length - 1];

  const { ISOWeek, fixedWeeks, weekStartsOn } = props ?? {};
  const {
    startOfWeek,
    endOfWeek,
    startOfISOWeek,
    endOfISOWeek,
    addDays,
    differenceInCalendarDays,
    differenceInCalendarMonths,
    isAfter,
    endOfMonth
  } = dateLib;

  const startWeekFirstDate = ISOWeek
    ? startOfISOWeek(firstMonth)
    : startOfWeek(firstMonth, {
        weekStartsOn,
        locale
      });

  const endWeekLastDate = ISOWeek
    ? endOfISOWeek(endOfMonth(lastMonth))
    : endOfWeek(endOfMonth(lastMonth), {
        weekStartsOn,
        locale
      });

  const nOfDays = differenceInCalendarDays(endWeekLastDate, startWeekFirstDate);
  const nOfMonths = differenceInCalendarMonths(lastMonth, firstMonth) + 1;

  const dates: Date[] = [];
  for (let i = 0; i <= nOfDays; i++) {
    const date = addDays(startWeekFirstDate, i);
    if (maxDate && isAfter(date, maxDate)) {
      break;
    }
    dates.push(date);
  }

  // If fixed weeks is enabled, add the extra dates to the array
  const extraDates = NrOfDaysWithFixedWeeks * nOfMonths;
  if (fixedWeeks && dates.length < extraDates) {
    for (let i = 0; i < 7; i++) {
      const date = addDays(dates[dates.length - 1], 1);
      dates.push(date);
    }
  }
  return dates;
}
