import moment from "moment";

export default {

  formatMonthTitle(date, locale="en") {
    return moment(date).locale(locale).format("MMMM YYYY");
  },

  formatWeekdayShort(day, locale="en") {
    return moment().locale(locale).weekday(day).format("dd");
  },

  formatWeekdayLong(day, locale="en") {
    return moment().locale(locale).weekday(day).format("dddd");
  },

  getFirstDayOfWeek(locale="en") {
    const localeData = moment.localeData(locale);
    return localeData.firstDayOfWeek();
  }

};
