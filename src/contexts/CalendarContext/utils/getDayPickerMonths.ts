import {
  addDays,
  endOfISOWeek,
  endOfMonth,
  endOfWeek,
  getISOWeek,
  getWeek,
  startOfISOWeek,
  startOfWeek
} from 'date-fns';

import { DayPickerDay, DayPickerMonth, DayPickerWeek } from '../types';
import type { FormatOptions } from '../../../types/FormatOptions';

/** Return the months to display in the calendar. */
export function getDayPickerMonths(
  months: Date[],
  dates: Date[],
  options: {
    reverseMonths?: boolean;
    ISOWeek?: boolean;
    fixedWeeks?: boolean;
    locale?: FormatOptions['locale'];
    weekStartsOn?: FormatOptions['weekStartsOn'];
    firstWeekContainsDate?: FormatOptions['firstWeekContainsDate'];
  }
) {
  const {
    reverseMonths,
    ISOWeek,
    fixedWeeks,
    locale,
    weekStartsOn,
    firstWeekContainsDate
  } = options;

  const dayPickerMonths = months.reduce<DayPickerMonth[]>((months, month) => {
    const firstDateOfFirstWeek = ISOWeek
      ? startOfISOWeek(month)
      : startOfWeek(month, { locale, weekStartsOn });
    const lastDateOfLastWeek = ISOWeek
      ? endOfISOWeek(endOfMonth(month))
      : endOfWeek(endOfMonth(month), {
          locale,
          weekStartsOn
        });

    const monthDates = dates.filter((date) => {
      return date >= firstDateOfFirstWeek && date <= lastDateOfLastWeek;
    });

    if (fixedWeeks && monthDates.length < 42) {
      const extraDates = dates.filter((date) => {
        return (
          date > lastDateOfLastWeek && date <= addDays(lastDateOfLastWeek, 7)
        );
      });
      monthDates.push(...extraDates);
    }

    const dayPickerWeeks = monthDates.reduce<DayPickerWeek[]>((weeks, date) => {
      const weekNumber = ISOWeek
        ? getISOWeek(date)
        : getWeek(date, {
            locale,
            weekStartsOn,
            firstWeekContainsDate
          });
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

    months.push(dayPickerMonth);
    return months;
  }, []);

  if (reverseMonths) {
    dayPickerMonths.reverse();
  }

  return dayPickerMonths;
}
