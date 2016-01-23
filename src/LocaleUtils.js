const WEEKDAYS_LONG = ["Sunday", "Monday", "Tuesday",
  "Wednesday", "Thursday", "Friday", "Saturday"];

const WEEKDAYS_SHORT = ["Su", "Mo", "Tu",
  "We", "Th", "Fr", "Sa"];

const MONTHS = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

export default {

  formatMonthTitle(d) {
    return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
  },

  formatWeekdayShort(i) {
    return WEEKDAYS_SHORT[i];
  },

  formatWeekdayLong(i) {
    return WEEKDAYS_LONG[i];
  },

  getFirstDayOfWeek() {
    return 0;
  },

  getMonths() {
    return MONTHS;
  }

}
