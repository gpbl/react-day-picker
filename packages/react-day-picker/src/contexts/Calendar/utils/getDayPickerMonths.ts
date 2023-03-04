import {
  endOfMonth,
  endOfWeek,
  getWeek,
  startOfWeek,
  startOfISOWeek,
  endOfISOWeek
} from 'date-fns';
import { DayPickerMonth, DayPickerWeek, DayPickerDay } from 'contexts/Calendar';

/** Return the {@link DayPickerMonth | DayPickerMonths} to display in the calendar. */
export function getDayPickerMonths(
  months: Date[],
  dates: Date[],
  options?: {
    fixedWeeks?: boolean | undefined;
    reverseMonths?: boolean | undefined;
    ISOWeek?: boolean | undefined;
    locale?: Locale | undefined;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | undefined;
  }
) {
  const dayPickerMonths = months.reduce<DayPickerMonth[]>((months, month) => {
    const firstDateOfFirstWeek = options?.ISOWeek
      ? startOfISOWeek(month)
      : startOfWeek(month, options);
    const lastDateOfLastWeek = options?.ISOWeek
      ? endOfISOWeek(endOfMonth(month))
      : endOfWeek(endOfMonth(month), options);

    const monthDates = dates.filter((date) => {
      return date >= firstDateOfFirstWeek && date <= lastDateOfLastWeek;
    });

    const dayPickerWeeks = monthDates.reduce<DayPickerWeek[]>((weeks, date) => {
      const weekNumber = getWeek(date, options);
      const week = weeks.find((week) => week.weekNumber === weekNumber);

      const day = new DayPickerDay(date, month);
      if (!week) {
        weeks.push(new DayPickerWeek(weekNumber, [day]));
      } else {
        week.days.push(day);
      }
      return weeks;
    }, []);
    const dayPickerMonth = new DayPickerMonth(month, dayPickerWeeks);
    if (options?.fixedWeeks && dayPickerMonth.weeks.length < 6) {
      // TODO: add the missing week
    }
    months.push(dayPickerMonth);
    return months;
  }, []);
  if (options?.reverseMonths) dayPickerMonths.reverse();
  return dayPickerMonths;
}
