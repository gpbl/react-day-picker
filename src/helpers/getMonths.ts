import { addDays } from "date-fns/addDays";
import { endOfISOWeek } from "date-fns/endOfISOWeek";
import { endOfMonth } from "date-fns/endOfMonth";
import { endOfWeek } from "date-fns/endOfWeek";
import { getISOWeek } from "date-fns/getISOWeek";
import { getWeek } from "date-fns/getWeek";
import { startOfISOWeek } from "date-fns/startOfISOWeek";
import { startOfWeek } from "date-fns/startOfWeek";

import { CalendarWeek, CalendarDay, CalendarMonth } from "../classes";
import type { DayPickerProps, Mode } from "../types";

/** Return the months to display in the calendar. */
export function getMonths(
  /** The months (as dates) to display in the calendar. */
  displayMonths: Date[],
  /** The dates to display in the calendar. */
  dates: Date[],
  options: Pick<
    DayPickerProps<Mode>,
    | "fixedWeeks"
    | "ISOWeek"
    | "locale"
    | "weekStartsOn"
    | "reverseMonths"
    | "firstWeekContainsDate"
  > = {}
): CalendarMonth[] {
  const dayPickerMonths = displayMonths.reduce<CalendarMonth[]>(
    (months, month) => {
      const firstDateOfFirstWeek = options.ISOWeek
        ? startOfISOWeek(month)
        : startOfWeek(month, {
            locale: options.locale,
            weekStartsOn: options.weekStartsOn
          });

      const lastDateOfLastWeek = options.ISOWeek
        ? endOfISOWeek(endOfMonth(month))
        : endOfWeek(endOfMonth(month), {
            locale: options.locale,
            weekStartsOn: options.weekStartsOn
          });

      /** The dates to display in the month. */
      const monthDates = dates.filter((date) => {
        return date >= firstDateOfFirstWeek && date <= lastDateOfLastWeek;
      });

      if (options.fixedWeeks && monthDates.length < 42) {
        const extraDates = dates.filter((date) => {
          return (
            date > lastDateOfLastWeek && date <= addDays(lastDateOfLastWeek, 7)
          );
        });
        monthDates.push(...extraDates);
      }

      const weeks: CalendarWeek[] = monthDates.reduce<CalendarWeek[]>(
        (weeks, date) => {
          const weekNumber = options.ISOWeek
            ? getISOWeek(date)
            : getWeek(date, {
                locale: options.locale,
                weekStartsOn: options.weekStartsOn,
                firstWeekContainsDate: options.firstWeekContainsDate
              });
          const week = weeks.find((week) => week.weekNumber === weekNumber);

          const day = new CalendarDay(date, month);
          if (!week) {
            weeks.push(new CalendarWeek(weekNumber, [day]));
          } else {
            week.days.push(day);
          }
          return weeks;
        },
        []
      );

      const dayPickerMonth = new CalendarMonth(month, weeks);

      months.push(dayPickerMonth);
      return months;
    },
    []
  );

  if (!options.reverseMonths) {
    return dayPickerMonths;
  } else {
    return dayPickerMonths.reverse();
  }
}
