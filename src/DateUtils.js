/**
 * Return `d` as a new date with `n` months added.
 * @param {[type]} d
 * @param {[type]} n
 */
export function addMonths(d, n) {
  const newDate = clone(d);
  newDate.setMonth(d.getMonth() + n);
  return newDate;
}

/**
 * Clone a date object.
 *
 * @param  {Date} d The date to clone
 * @return {Date} The cloned date
 */
export function clone(d) {
  return new Date(d.getTime());
}

/**
 * Return `true` if two dates are the same day, ignoring the time.
 *
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
export function isSameDay(d1, d2) {
  if (!d1 || !d2) {
    return false;
  }
  return d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear();
}

/**
 * Return `true` if a day is in the past, e.g. yesterday or any day
 * before yesterday.
 *
 * @param  {Date}  d
 * @return {Boolean}
 */
export function isPastDay(d) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return d < today;
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
export function isDayBetween(d, d1, d2) {
  d = clone(d);
  d1 = clone(d1);
  d2 = clone(d2);

  d.setHours(0, 0, 0, 0);
  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);
  return (d1 < d && d < d2) || (d2 < d && d < d1);
}

/**
 * Add a day to a range and return a new range. A range is an object with
 * `from` and `to` days.
 *
 * @param {Date} day
 * @param {Object} range
 * @return {Object} Returns a new range object
 */
export function addDayToRange(day, range={from: null, to: null}) {
  let { from, to } = range;
  if (!from) {
    from = day;
  }
  else if (from && to && isSameDay(from, to) && isSameDay(day, from)) {
    from = null;
    to = null;
  }
  else if (to && day < from) {
    from = day;
  }
  else if (to && isSameDay(day, to)) {
    from = day;
    to = day;
  }
  else {
    to = day;
    if (to < from) {
      to = from;
      from = day;
    }
  }

  return { from, to };
}

/**
 * Return `true` if a day is included in a range of days.
 *
 * @param  {Date}  day
 * @param  {Object}  range
 * @return {Boolean}
 */
export function isDayInRange(day, range) {
  const { from, to } = range;
  return (from && isSameDay(day, from)) ||
    (to && isSameDay(day, to)) ||
    (from && to && isDayBetween(day, from, to));
}

export default {
  addDayToRange,
  addMonths,
  clone,
  isSameDay,
  isDayInRange,
  isDayBetween,
  isPastDay
}
