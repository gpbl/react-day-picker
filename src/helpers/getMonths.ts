import { addDays } from "date-fns/addDays";
import { endOfISOWeek } from "date-fns/endOfISOWeek";
import { endOfMonth } from "date-fns/endOfMonth";
import { endOfWeek } from "date-fns/endOfWeek";
import { getISOWeek } from "date-fns/getISOWeek";
import { getWeek } from "date-fns/getWeek";
import { startOfISOWeek } from "date-fns/startOfISOWeek";
import { startOfWeek } from "date-fns/startOfWeek";

import { CalendarWeek, CalendarDay, CalendarMonth } from "../classes";
import type { PropsContextValue } from "../contexts";

/** Return the months to display in the calendar. */
export function getMonths(
  /** The months (as dates) to display in the calendar. */
  displayMonths: Date[],
  /** The dates to display in the calendar. */
  dates: Date[],
  /** Options from the props context. */
  props: Pick<
    PropsContextValue,
    | "fixedWeeks"
    | "ISOWeek"
    | "locale"
    | "weekStartsOn"
    | "reverseMonths"
    | "firstWeekContainsDate"
  >
): CalendarMonth[] {
  const dayPickerMonths = displayMonths.reduce<CalendarMonth[]>(
    (months, month) => {
      const firstDateOfFirstWeek = props.ISOWeek
        ? startOfISOWeek(month)
        : startOfWeek(month, {
            locale: props.locale,
            weekStartsOn: props.weekStartsOn
          });

      const lastDateOfLastWeek = props.ISOWeek
        ? endOfISOWeek(endOfMonth(month))
        : endOfWeek(endOfMonth(month), {
            locale: props.locale,
            weekStartsOn: props.weekStartsOn
          });

      /** The dates to display in the month. */
      const monthDates = dates.filter((date) => {
        return date >= firstDateOfFirstWeek && date <= lastDateOfLastWeek;
      });

      if (props.fixedWeeks && monthDates.length < 42) {
        const extraDates = dates.filter((date) => {
          return (
            date > lastDateOfLastWeek && date <= addDays(lastDateOfLastWeek, 7)
          );
        });
        monthDates.push(...extraDates);
      }

      const weeks: CalendarWeek[] = monthDates.reduce<CalendarWeek[]>(
        (weeks, date) => {
          const weekNumber = props.ISOWeek
            ? getISOWeek(date)
            : getWeek(date, {
                locale: props.locale,
                weekStartsOn: props.weekStartsOn,
                firstWeekContainsDate: props.firstWeekContainsDate
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

  if (!props.reverseMonths) {
    return dayPickerMonths;
  } else {
    return dayPickerMonths.reverse();
  }
}
