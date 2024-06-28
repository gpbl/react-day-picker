import { CalendarWeek, CalendarDay, CalendarMonth } from "../classes/index.js";
import type { UseProps } from "../contexts/index.js";

/** Return the months to display in the calendar. */
export function getMonths(
  /** The months (as dates) to display in the calendar. */
  displayMonths: Date[],
  /** The dates to display in the calendar. */
  dates: Date[],
  /** Options from the props context. */
  props: Pick<
    UseProps,
    | "dateLib"
    | "fixedWeeks"
    | "ISOWeek"
    | "locale"
    | "weekStartsOn"
    | "reverseMonths"
    | "firstWeekContainsDate"
  >
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
  } = props.dateLib;
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

          const day = new CalendarDay(date, month, props.dateLib);
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
