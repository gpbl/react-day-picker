"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DateUtils = {

  clone: function clone(d) {
    return new Date(d.getTime());
  },

  isDayOutsideMonth: function isDayOutsideMonth(d1, d2) {
    return d1.getMonth() !== d2.getMonth();
  },

  isSameDay: function isSameDay(d1, d2) {
    return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
  },

  isPastDay: function isPastDay(d) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    return d < today;
  },

  isDayBetween: function isDayBetween(d, d1, d2) {
    d = DateUtils.clone(d);
    d1 = DateUtils.clone(d1);
    d2 = DateUtils.clone(d2);

    d.setHours(0, 0, 0, 0);
    d1.setHours(0, 0, 0, 0);
    d2.setHours(0, 0, 0, 0);
    return d1 < d && d < d2 || d2 < d && d < d1;
  },

  addDayToRange: function addDayToRange(day, range) {
    var from = range.from;
    var to = range.to;

    if (!from) {
      from = day;
    } else if (from && to && DateUtils.isSameDay(from, to) && DateUtils.isSameDay(day, from)) {
      // reset when selecting again the first day
      from = null;
      to = null;
    } else if (to && day < from) {
      from = day;
    } else if (to && DateUtils.isSameDay(day, to)) {
      from = day;
      to = day;
    } else {
      to = day;
      if (to < from) {
        to = from;
        from = day;
      }
    }

    return { from: from, to: to };
  },

  isDayInRange: function isDayInRange(day, range) {
    var from = range.from;
    var to = range.to;

    return from && DateUtils.isSameDay(day, from) || to && DateUtils.isSameDay(day, to) || from && to && DateUtils.isDayBetween(day, from, to);
  }

};

exports["default"] = DateUtils;
module.exports = exports["default"];
//# sourceMappingURL=DateUtils.js.map