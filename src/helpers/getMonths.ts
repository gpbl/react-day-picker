import type { DateLib } from "../classes/DateLib.js";
import { CalendarWeek, CalendarDay, CalendarMonth } from "../classes/index.js";
import type { DayPickerProps } from "../types/index.js";

/** Return the months to display in the calendar. */
export function getMonths(
  /** The months (as dates) to display in the calendar. */
  displayMonths: Date[],
  /** The dates to display in the calendar. */
  dates: Date[],
  /** Options from the props context. */
  props: Pick<
    DayPickerProps,
    "broadcastCalendar" | "fixedWeeks" | "ISOWeek" | "reverseMonths"
  >,
  dateLib: DateLib
): CalendarMonth[] {
  const {
    startOfWeek,
    endOfWeek,
    startOfISOWeek,
    endOfISOWeek,
    endOfMonth,
    addDays,
    getWeek,
    startOfBroadcastWeek,
    endOfBroadcastWeek,
    getISOWeek
  } = dateLib;
  const dayPickerMonths = displayMonths.reduce<CalendarMonth[]>(
    (months, month) => {
      const firstDateOfFirstWeek = props.broadcastCalendar
        ? startOfBroadcastWeek(month, dateLib)
        : props.ISOWeek
          ? startOfISOWeek(month)
          : startOfWeek(month);

      const lastDateOfLastWeek = props.broadcastCalendar
        ? endOfBroadcastWeek(month, dateLib)
        : props.ISOWeek
          ? endOfISOWeek(endOfMonth(month))
          : endOfWeek(endOfMonth(month));

      /** The dates to display in the month. */
      const monthDates = dates.filter((date) => {
        return date >= firstDateOfFirstWeek && date <= lastDateOfLastWeek;
      });

      const nrOfDaysWithFixedWeeks = props.broadcastCalendar ? 35 : 42;

      if (props.fixedWeeks && monthDates.length < nrOfDaysWithFixedWeeks) {
        const extraDates = dates.filter((date) => {
          const daysToAdd = nrOfDaysWithFixedWeeks - monthDates.length;
          return (
            date > lastDateOfLastWeek &&
            date <= addDays(lastDateOfLastWeek, daysToAdd)
          );
        });
        monthDates.push(...extraDates);
      }

      const weeks: CalendarWeek[] = monthDates.reduce<CalendarWeek[]>(
        (weeks, date) => {
          const weekNumber = props.ISOWeek ? getISOWeek(date) : getWeek(date);
          const week = weeks.find((week) => week.weekNumber === weekNumber);

          const day = new CalendarDay(date, month, dateLib);
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
