"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var WEEKDAYS_LONG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var WEEKDAYS_SHORT = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var Utils = {

  addMonths: function addMonths(d, months) {
    var newDate = this.clone(d);
    newDate.setMonth(d.getMonth() + months);
    return newDate;
  },

  clone: function clone(d) {
    return new Date(d.getTime());
  },

  startOfMonth: function startOfMonth(d) {
    var newDate = this.clone(d);
    newDate.setDate(1);
    newDate.setHours(12); // always set noon to avoid time zone issues
    newDate.setMinutes(0);
    newDate.setSeconds(0);
    newDate.setMilliseconds(0);
    return newDate;
  },

  getFirstDayOfMonth: function getFirstDayOfMonth(d) {
    return new Date(d.getFullYear(), d.getMonth(), 1, 12);
  },

  getDaysInMonth: function getDaysInMonth(d) {
    var resultDate = this.getFirstDayOfMonth(d);

    resultDate.setMonth(resultDate.getMonth() + 1);
    resultDate.setDate(resultDate.getDate() - 1);

    return resultDate.getDate();
  },

  getWeekArray: function getWeekArray(d, firstDayOfWeek) {
    var daysInMonth = this.getDaysInMonth(d);
    if (arguments.length === 1) {
      firstDayOfWeek = this.getFirstDayOfWeek();
    }
    var dayArray = [];
    var week = [];
    var weekArray = [];

    for (var i = 1; i <= daysInMonth; i++) {
      dayArray.push(new Date(d.getFullYear(), d.getMonth(), i, 12));
    }

    dayArray.forEach(function (day) {
      if (week.length > 0 && day.getDay() === firstDayOfWeek) {
        weekArray.push(week);
        week = [];
      }
      week.push(day);
      if (dayArray.indexOf(day) === dayArray.length - 1) {
        weekArray.push(week);
      }
    });

    // unshift days to start the first week
    var firstWeek = weekArray[0];
    for (var i = 7 - firstWeek.length; i > 0; i--) {
      var outsideDate = this.clone(firstWeek[0]);
      outsideDate.setDate(firstWeek[0].getDate() - 1);
      firstWeek.unshift(outsideDate);
    }

    // push days until the end of the last week
    var lastWeek = weekArray[weekArray.length - 1];
    for (var i = lastWeek.length; i < 7; i++) {
      var outsideDate = this.clone(lastWeek[lastWeek.length - 1]);
      outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
      lastWeek.push(outsideDate);
    }

    return weekArray;
  },

  getModifiersForDay: function getModifiersForDay(d, modifierFunctions) {
    var modifiers = [];
    if (modifierFunctions) {
      for (var modifier in modifierFunctions) {
        var func = modifierFunctions[modifier];
        if (func(d)) {
          modifiers.push(modifier);
        }
      }
    }
    return modifiers;
  },

  isDayOutsideMonth: function isDayOutsideMonth(d1, d2) {
    return d1.getMonth() !== d2.getMonth();
  },

  isSameDay: function isSameDay(d1, d2) {
    return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
  },

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
  },

  getMonthsDiff: function getMonthsDiff(d1, d2) {
    return d2.getMonth() - d1.getMonth() + 12 * (d2.getFullYear() - d1.getFullYear());
  }

};

exports["default"] = Utils;
module.exports = exports["default"];
//# sourceMappingURL=Utils.js.map