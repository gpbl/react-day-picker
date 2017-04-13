const WEEKDAYS_LONG = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const WEEKDAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function formatDay(day) {
  return day.toDateString();
}

export function formatMonthTitle(d) {
  return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

export function formatWeekdayShort(i) {
  return WEEKDAYS_SHORT[i];
}

export function formatWeekdayLong(i) {
  return WEEKDAYS_LONG[i];
}

export function getFirstDayOfWeek() {
  return 0;
}

export function getMonths() {
  return MONTHS;
}

export default {
  formatDay,
  formatMonthTitle,
  formatWeekdayShort,
  formatWeekdayLong,
  getFirstDayOfWeek,
  getMonths,
};
