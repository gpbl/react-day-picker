"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clone = clone;
exports.addMonths = addMonths;
exports.isSameDay = isSameDay;
exports.isPastDay = isPastDay;
exports.isFutureDay = isFutureDay;
exports.isDayBetween = isDayBetween;
exports.addDayToRange = addDayToRange;
exports.isDayInRange = isDayInRange;

/**
 * Clone a date object.
 *
 * @param  {Date} d The date to clone
 * @return {Date} The cloned date
 */
function clone(d) {
  return new Date(d.getTime());
}

/**
 * Return `d` as a new date with `n` months added.
 * @param {[type]} d
 * @param {[type]} n
 */
function addMonths(d, n) {
  var newDate = clone(d);
  newDate.setMonth(d.getMonth() + n);
  return newDate;
}

/**
 * Return `true` if two dates are the same day, ignoring the time.
 *
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isSameDay(d1, d2) {
  if (!d1 || !d2) {
    return false;
  }
  return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

/**
 * Return `true` if a day is in the past, e.g. yesterday or any day
 * before yesterday.
 *
 * @param  {Date}  d
 * @return {Boolean}
 */
function isPastDay(d) {
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  return d < today;
}

/**
 * Return `true` if a day is in the future, e.g. tomorrow or any day
 * after tomorrow.
 *
 * @param  {Date}  d
 * @return {Boolean}
 */
function isFutureDay(d) {
  var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  tomorrow.setHours(0, 0, 0, 0);
  return d >= tomorrow;
}

/**
 * Return `true` if day `d` is between days `d1` and `d2`,
 * without including them.
 *
 * @param  {Date}  d
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isDayBetween(d, d1, d2) {
  var date = clone(d);
  var date1 = clone(d1);
  var date2 = clone(d2);

  date.setHours(0, 0, 0, 0);
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);
  return date1 < date && date < date2 || date2 < date && date < date1;
}

/**
 * Add a day to a range and return a new range. A range is an object with
 * `from` and `to` days.
 *
 * @param {Date} day
 * @param {Object} range
 * @return {Object} Returns a new range object
 */
function addDayToRange(day) {
  var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { from: null, to: null };
  var from = range.from,
      to = range.to;

  if (!from) {
    from = day;
  } else if (from && to && isSameDay(from, to) && isSameDay(day, from)) {
    from = null;
    to = null;
  } else if (to && day < from) {
    from = day;
  } else if (to && isSameDay(day, to)) {
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
}

/**
 * Return `true` if a day is included in a range of days.
 *
 * @param  {Date}  day
 * @param  {Object}  range
 * @return {Boolean}
 */
function isDayInRange(day, range) {
  var from = range.from,
      to = range.to;

  return from && isSameDay(day, from) || to && isSameDay(day, to) || from && to && isDayBetween(day, from, to);
}

exports.default = {
  addDayToRange: addDayToRange,
  addMonths: addMonths,
  clone: clone,
  isSameDay: isSameDay,
  isDayInRange: isDayInRange,
  isDayBetween: isDayBetween,
  isPastDay: isPastDay,
  isFutureDay: isFutureDay
};
//# sourceMappingURL=DateUtils.js.map