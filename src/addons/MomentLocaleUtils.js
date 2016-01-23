import moment from "moment";

export function formatMonthTitle(date, locale="en") {
  return moment(date).locale(locale).format("MMMM YYYY");
}

export function formatWeekdayShort(day, locale="en") {
  return moment().locale(locale).weekday(day).format("dd");
}

export function formatWeekdayLong(day, locale="en") {
  return moment().locale(locale).weekday(day).format("dddd");
}

export function getFirstDayOfWeek(locale="en") {
  const localeData = moment.localeData(locale);
  return localeData.firstDayOfWeek();
}

export function getMonths(locale="en") {
  const months = [];
  let i = 0;
  while (i < 12) {
    months.push(moment().locale(locale).month(i++).format("MMMM"));
  }
  return months;
}

export default {
  formatMonthTitle,
  formatWeekdayShort,
  formatWeekdayLong,
  getFirstDayOfWeek,
  getMonths
}
