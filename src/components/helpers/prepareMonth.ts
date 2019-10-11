import {
  addDays,
  addWeeks,
  differenceInDays,
  endOfMonth,
  getMonth,
  getWeek,
  getWeeksInMonth,
  startOfMonth,
} from 'date-fns';

import { DateWithModifiers } from '../../classes';
import getOutsideStartDays from '../utils/getOutsideStartDays';
import getOutsideEndDays from '../utils/getOutsideEndDays';
import { DayPicker } from 'types/DayPicker';

/**
 * Return the data for the Month component.
 */
export function prepareMonth(month: Date, props: DayPicker) {
  const { locale, fixedWeeks } = props;
  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(month);

  let diff = differenceInDays(monthEnd, monthStart);

  const weeks = {};
  let week = -1;
  for (let i = 0; i <= diff; i++) {
    const date = addDays(monthStart, i);
    const dateWithModifiers = new DateWithModifiers(date, {}, props);
    week = getWeek(dateWithModifiers.date, { locale });
    if (week === 1 && getMonth(date) === 11) {
      week = 53;
    }
    if (!weeks[week]) {
      const startDays = getOutsideStartDays(dateWithModifiers.date, props);
      // Create a new week by adding outside start days
      weeks[week] = startDays;
    }
    weeks[week].push(dateWithModifiers);
  }

  let lastWeek = weeks[week];
  let lastDay = lastWeek[lastWeek.length - 1];
  const endDays = getOutsideEndDays(lastDay, props);
  weeks[week] = lastWeek.concat(endDays);

  // add extra weeks to the month, up to 6 weeks
  if (fixedWeeks) {
    lastWeek = weeks[week];
    const lastWeekDate = lastWeek[lastWeek.length - 1].date;
    const weeksInMonth = getWeeksInMonth(month, { locale });
    if (weeksInMonth < 6) {
      let diff = differenceInDays(
        addWeeks(lastWeekDate, 6 - weeksInMonth),
        lastWeekDate
      );
      for (var i = 0; i < diff; i++) {
        const date = addDays(lastWeekDate, i + 1);
        const dateWithModifiers = new DateWithModifiers(
          date,
          { outside: 'end' },
          props
        );
        week = getWeek(date, { locale });
        if (week === 1 && getMonth(month) === 11) {
          week = 53;
        }
        if (!weeks[week]) {
          weeks[week] = [];
        }
        weeks[week].push(dateWithModifiers);
      }
    }
  }

  return { weeks };
}
