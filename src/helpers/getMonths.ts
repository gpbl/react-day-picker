import type { DateLib } from "../classes/DateLib.js";
import { CalendarWeek, CalendarDay, CalendarMonth } from "../classes/index.js";
import type { DayPickerProps } from "../types/index.js";

import {
  startOfBroadcastWeek,
  endOfBroadcastWeek
} from "./broadcastCalendar.js";
import { NrOfDaysWithFixedWeeks } from "./getDates.js";

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
    getISOWeek
  } = dateLib;
  const dayPickerMonths = displayMonths.reduce<CalendarMonth[]>(
    (months, month) => {
      let firstDateOfFirstWeek: Date;
      let lastDateOfLastWeek: Date;
      
      if (props.broadcastCalendar) {
        firstDateOfFirstWeek = startOfBroadcastWeek(month);
        lastDateOfLastWeek = endOfBroadcastWeek(month);
      } else {
        firstDateOfFirstWeek = props.ISOWeek
          ? startOfISOWeek(month)
          : startOfWeek(month);

        lastDateOfLastWeek = props.ISOWeek
          ? endOfISOWeek(endOfMonth(month))
          : endOfWeek(endOfMonth(month));
      }
      /** The dates to display in the month. */
      const monthDates = dates.filter((date) => {
        return date >= firstDateOfFirstWeek && date <= lastDateOfLastWeek;
      });

      if (props.fixedWeeks && monthDates.length < NrOfDaysWithFixedWeeks) {
        const extraDates = dates.filter((date) => {
          const daysToAdd = NrOfDaysWithFixedWeeks - monthDates.length;
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
