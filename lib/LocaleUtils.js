"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var WEEKDAYS_LONG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var WEEKDAYS_SHORT = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

exports["default"] = {

  formatMonthTitle: function formatMonthTitle(d) {
    return MONTHS[d.getMonth()] + " " + d.getFullYear();
  },

  formatWeekdayShort: function formatWeekdayShort(i) {
    return WEEKDAYS_SHORT[i];
  },

  formatWeekdayLong: function formatWeekdayLong(i) {
    return WEEKDAYS_LONG[i];
  },

  getFirstDayOfWeek: function getFirstDayOfWeek() {
    return 0;
  }

};
module.exports = exports["default"];
//# sourceMappingURL=LocaleUtils.js.map