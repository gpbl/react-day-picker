"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _DateUtils = require("./DateUtils");

var _DateUtils2 = _interopRequireDefault(_DateUtils);

var _LocaleUtils = require("./LocaleUtils");

var _LocaleUtils2 = _interopRequireDefault(_LocaleUtils);

exports["default"] = {

  addMonths: function addMonths(d, months) {
    var newDate = _DateUtils2["default"].clone(d);
    newDate.setMonth(d.getMonth() + months);
    return newDate;
  },

  startOfMonth: function startOfMonth(d) {
    var newDate = _DateUtils2["default"].clone(d);
    newDate.setDate(1);
    newDate.setHours(12, 0, 0, 0); // always set noon to avoid time zone issues
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

  getWeekArray: function getWeekArray(d) {
    var firstDayOfWeek = arguments.length <= 1 || arguments[1] === undefined ? _LocaleUtils2["default"].getFirstDayOfWeek() : arguments[1];

    var daysInMonth = this.getDaysInMonth(d);
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
      var outsideDate = _DateUtils2["default"].clone(firstWeek[0]);
      outsideDate.setDate(firstWeek[0].getDate() - 1);
      firstWeek.unshift(outsideDate);
    }

    // push days until the end of the last week
    var lastWeek = weekArray[weekArray.length - 1];
    for (var i = lastWeek.length; i < 7; i++) {
      var outsideDate = _DateUtils2["default"].clone(lastWeek[lastWeek.length - 1]);
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

  getMonthsDiff: function getMonthsDiff(d1, d2) {
    return d2.getMonth() - d1.getMonth() + 12 * (d2.getFullYear() - d1.getFullYear());
  }

};
module.exports = exports["default"];
//# sourceMappingURL=Helpers.js.map