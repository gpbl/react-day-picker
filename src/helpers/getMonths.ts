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
  props: Pick<DayPickerProps, "fixedWeeks" | "ISOWeek" | "reverseMonths">,
  dateLib: DateLib,
  broadcastCalendar: boolean = false
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
      if (broadcastCalendar) {
        firstDateOfFirstWeek = getBroadcastStartDate(month);
        lastDateOfLastWeek = getBroadcastEndDate(month);
        console.log("firstDateOfFirstWeek", firstDateOfFirstWeek);
        console.log("lastDateOfLastWeek", lastDateOfLastWeek);
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

const getBroadcastWeeksInMonth = (month: Date): number => {
  const NUMBER_OF_5_WEEKS = 5;
  const NUMBER_OF_4_WEEKS = 4;
  const firstDayOfMonth = new Date(month.getFullYear(), month.getMonth(), 1);
  const dayOfWeekOfFirstDayOfMonth =
    firstDayOfMonth.getDay() > 0 ? firstDayOfMonth.getDay() : 7;
  const beginDate = new Date(
    month.getFullYear(),
    month.getMonth(),
    month.getDate() - dayOfWeekOfFirstDayOfMonth + 1
  );
  const numberOfWeeks =
    month.getMonth() ===
    new Date(
      beginDate.getFullYear(),
      beginDate.getMonth(),
      beginDate.getDate() + NUMBER_OF_5_WEEKS * 7 - 1
    ).getMonth()
      ? NUMBER_OF_5_WEEKS
      : NUMBER_OF_4_WEEKS;
  return numberOfWeeks;
};

const getBroadcastStartDate = (date: Date): Date => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstOfMonth = new Date(year, month, 1);
  const dayOfWeek = firstOfMonth.getUTCDay(); // 0 = Sunday, 1 = Monday, etc.

  // If the first of the month is a Monday, then the broadcast month starts on that day.
  // Otherwise, the broadcast starts on the previous Monday, and if first of the month is Sunday, then the starts on the previous week's Monday.
  if (dayOfWeek === 1) {
    return firstOfMonth;
  } else if (dayOfWeek === 0) {
    const startDate = new Date(year, month, 1 - dayOfWeek + 1 - 7);
    return startDate;
  } else {
    const startDate = new Date(year, month, 1 - dayOfWeek + 1);
    return startDate;
  }
};

const getBroadcastEndDate = (date: Date): Date => {
  const startDate = getBroadcastStartDate(date);
  // end date based on the weeks to show, it is calculated by getBroadcastWeeksInMonth
  const numberOfWeeks = getBroadcastWeeksInMonth(date);
  const endDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate() + numberOfWeeks * 7 - 1
  );
  return endDate;
};
