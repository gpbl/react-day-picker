/* eslint-disable import/no-extraneous-dependencies, no-underscore-dangle */

import moment from 'moment';

export function formatDay(day, locale = 'en') {
  return moment(day)
    .locale(locale)
    .format('ddd ll');
}

export function formatMonthTitle(date, locale = 'en') {
  return moment(date)
    .locale(locale)
    .format('MMMM YYYY');
}

export function formatWeekdayShort(day, locale = 'en') {
  return moment()
    .locale(locale)
    ._locale.weekdaysMin()[day];
}

export function formatWeekdayLong(day, locale = 'en') {
  return moment()
    .locale(locale)
    ._locale.weekdays()[day];
}

export function getFirstDayOfWeek(locale = 'en') {
  const localeData = moment.localeData(locale);
  return localeData.firstDayOfWeek();
}

export function getMonths(locale = 'en') {
  const months = [];
  let i = 0;
  while (i < 12) {
    months.push(
      moment()
        .locale(locale)
        .month(i)
        .format('MMMM')
    );
    i += 1;
  }
  return months;
}

export default {
  formatDay,
  formatMonthTitle,
  formatWeekdayShort,
  formatWeekdayLong,
  getFirstDayOfWeek,
  getMonths,
};
