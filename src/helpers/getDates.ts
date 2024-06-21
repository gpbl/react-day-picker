import { addDays } from "date-fns/addDays";
import { differenceInCalendarDays } from "date-fns/differenceInCalendarDays";
import { differenceInCalendarMonths } from "date-fns/differenceInCalendarMonths";
import { endOfISOWeek } from "date-fns/endOfISOWeek";
import { endOfMonth } from "date-fns/endOfMonth";
import { endOfWeek } from "date-fns/endOfWeek";
import { isAfter } from "date-fns/isAfter";
import { startOfISOWeek } from "date-fns/startOfISOWeek";
import { startOfWeek } from "date-fns/startOfWeek";

import { PropsContextValue } from "../contexts";
import type { Mode, DayPickerProps } from "../types";

/** The number of days in a month when having 6 weeks. */
const NrOfDaysWithFixedWeeks = 42;

/**
 * Return all the dates to display in the calendar.
 *
 * @param firstMonth The first month of the calendar
 * @param lastMonth The last month of the calendar
 * @param maxDate The date to end the calendar at
 * @param props Options for the calendar
 * @param options.ISOWeek Whether or not to use ISOWeek
 * @param options.fixedWeeks Whether or not to use fixed weeks
 * @param options.locale The locale to use
 * @param options.weekStartsOn The day the week starts on
 */
export function getDates(
  displayMonths: Date[],
  maxDate: Date | undefined,
  props: Pick<
    PropsContextValue,
    "ISOWeek" | "fixedWeeks" | "locale" | "weekStartsOn"
  >
): Date[] {
  const firstMonth = displayMonths[0];
  const lastMonth = displayMonths[displayMonths.length - 1];

  const { ISOWeek, fixedWeeks, locale, weekStartsOn } = props ?? {};

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
    dates.push(new Date(date));
  }

  // If fixed weeks is enabled, add the extra dates to the array
  const extraDates = NrOfDaysWithFixedWeeks * nOfMonths;
  if (fixedWeeks && dates.length < extraDates) {
    for (let i = 0; i < 7; i++) {
      const date = addDays(dates[dates.length - 1], 1);
      dates.push(new Date(date));
    }
  }
  return dates;
}
