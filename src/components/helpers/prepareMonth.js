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

/**
 * Return the data for the Month component.
 *
 * TODO: document returned props.
 *
 * @param {Date} month
 * @param {Object} props
 *
 * @return {Object}
 */
export default function prepareMonth(month, props) {
  const { locale, fixedWeeks } = props;
  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(month);

  let diff = differenceInDays(monthEnd, monthStart);

  const weeks = {};
  let week;
  for (let i = 0; i <= diff; i++) {
    const date = addDays(monthStart, i);
    const month = getMonth(date);
    const day = new DateWithModifiers(date, {}, props);
    week = getWeek(day, { locale });
    if (week === 1 && month === 11) {
      week = 53;
    }
    if (!weeks[week]) {
      const startDays = getOutsideStartDays(day, props);
      // Create a new week by adding outside start days
      weeks[week] = startDays;
    }
    weeks[week].push(day);
  }

  let lastWeek = weeks[week];
  let lastDay = lastWeek[lastWeek.length - 1];
  const endDays = getOutsideEndDays(lastDay, props);
  weeks[week] = lastWeek.concat(endDays);

  // add extra weeks to the month, up to 6 weeks
  if (fixedWeeks) {
    lastWeek = weeks[week];
    const lastWeekDay = lastWeek[lastWeek.length - 1];
    const weeksInMonth = getWeeksInMonth(month, { locale });
    if (weeksInMonth < 6) {
      let diff = differenceInDays(
        addWeeks(lastWeekDay, 6 - weeksInMonth),
        lastWeekDay
      );
      for (var i = 0; i < diff; i++) {
        const date = addDays(lastWeekDay, i + 1);
        const day = new DateWithModifiers(date, { outside: 'end' }, props);
        week = getWeek(date, { locale });
        if (week === 1 && month === 11) {
          week = 53;
        }
        if (!weeks[week]) {
          weeks[week] = [];
        }
        weeks[week].push(day);
      }
    }
  }

  return { weeks };
}
