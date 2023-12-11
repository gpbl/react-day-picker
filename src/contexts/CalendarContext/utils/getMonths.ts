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

import { Month, Week, Day } from '../../../classes';
import { DayPickerProps } from '../../../DayPicker';
import { Mode } from '../../../types';

/** Return the months to display in the calendar. */
export function getMonths(
  /** The months (as dates) to display in the calendar. */
  displayMonths: Date[],
  /** The dates to display in the calendar. */
  dates: Date[],
  options: Pick<
    DayPickerProps<Mode>,
    | 'fixedWeeks'
    | 'ISOWeek'
    | 'locale'
    | 'weekStartsOn'
    | 'reverseMonths'
    | 'firstWeekContainsDate'
  > = {}
): Month[] {
  const dayPickerMonths = displayMonths.reduce<Month[]>((months, month) => {
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

    const weeks: Week[] = monthDates.reduce<Week[]>((weeks, date) => {
      const weekNumber = options.ISOWeek
        ? getISOWeek(date)
        : getWeek(date, {
            locale: options.locale,
            weekStartsOn: options.weekStartsOn,
            firstWeekContainsDate: options.firstWeekContainsDate
          });
      const week = weeks.find((week) => week.weekNumber === weekNumber);

      const day = new Day(date, month);
      if (!week) {
        weeks.push(new Week(weekNumber, [day]));
      } else {
        week.days.push(day);
      }
      return weeks;
    }, []);

    const dayPickerMonth = new Month(month, weeks);

    months.push(dayPickerMonth);
    return months;
  }, []);

  if (!options.reverseMonths) {
    return dayPickerMonths;
  } else {
    return dayPickerMonths.reverse();
  }
}
