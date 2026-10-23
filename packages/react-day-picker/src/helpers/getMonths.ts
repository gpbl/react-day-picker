import type { DateLib } from "../classes/DateLib.js";
import { CalendarDay, CalendarMonth, CalendarWeek } from "../classes/index.js";
import {
  createDateAdapter,
  type DateAdapter,
} from "../internal/dateAdapter.js";
import type { DayPickerProps } from "../types/index.js";

/**
 * Returns the months to display in the calendar.
 *
 * This function generates `CalendarMonth` objects for each month to be
 * displayed, including their weeks and days, based on the provided display
 * months and dates.
 *
 * @param displayMonths The months (as dates) to display in the calendar.
 * @param dates The dates to display in the calendar.
 * @param props Options from the DayPicker props context.
 * @param dateLib The date library to use for date manipulation.
 * @param dateAdapter Internal date boundary used for filtering calendar dates.
 * @returns An array of `CalendarMonth` objects representing the months to
 *   display.
 */
export function getMonths(
  displayMonths: Date[],
  dates: Date[],
  props: Pick<
    DayPickerProps,
    "broadcastCalendar" | "fixedWeeks" | "ISOWeek" | "reverseMonths"
  >,
  dateLib: DateLib,
  dateAdapter: DateAdapter<Date> = createDateAdapter(dateLib),
): CalendarMonth[] {
  const {
    addDays,
    endOfBroadcastWeek,
    endOfISOWeek,
    endOfMonth,
    endOfWeek,
    getISOWeek,
    getWeek,
    startOfBroadcastWeek,
    startOfISOWeek,
    startOfWeek,
  } = dateLib;

  const dayPickerMonths = displayMonths.reduce<CalendarMonth[]>(
    (months, month) => {
      const firstDateOfFirstWeek = props.broadcastCalendar
        ? startOfBroadcastWeek(month, dateLib)
        : props.ISOWeek
          ? startOfISOWeek(month)
          : startOfWeek(month);

      const lastDateOfLastWeek = props.broadcastCalendar
        ? endOfBroadcastWeek(month)
        : props.ISOWeek
          ? endOfISOWeek(endOfMonth(month))
          : endOfWeek(endOfMonth(month));

      /** The dates to display in the month. */
      const monthDates = dates.filter((date) => {
        return (
          dateAdapter.compare(date, firstDateOfFirstWeek) >= 0 &&
          dateAdapter.compare(date, lastDateOfLastWeek) <= 0
        );
      });

      const nrOfDaysWithFixedWeeks = props.broadcastCalendar ? 35 : 42;

      if (props.fixedWeeks && monthDates.length < nrOfDaysWithFixedWeeks) {
        const extraDates = dates.filter((date) => {
          const daysToAdd = nrOfDaysWithFixedWeeks - monthDates.length;
          return (
            dateAdapter.compare(date, lastDateOfLastWeek) > 0 &&
            dateAdapter.compare(date, addDays(lastDateOfLastWeek, daysToAdd)) <=
              0
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
        [],
      );

      const dayPickerMonth = new CalendarMonth(month, weeks);
      months.push(dayPickerMonth);
      return months;
    },
    [],
  );

  if (!props.reverseMonths) {
    return dayPickerMonths;
  } else {
    return dayPickerMonths.reverse();
  }
}
