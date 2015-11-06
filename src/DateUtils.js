const DateUtils = {

  /**
   * Clone a date returning a new date with the same time
   * @param  {Date} d The date to clone
   * @return {Date} The cloned date
   */
  clone(d) {
    return new Date(d.getTime());
  },

  /**
   * Return `true` if two dates are the same day, ignoring the time.
   * @param  {Date}  d1
   * @param  {Date}  d2
   * @return {Boolean}
   */
  isSameDay(d1, d2) {
    return d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear();
  },

  /**
   * Returns true if a day is in the past, e.g. is yesterday or any day
   * before yesterday.
   *
   * @param  {Date}  d
   * @return {Boolean}
   */
  isPastDay(d) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return d < today;
  },

  /**
   * Returns true if the day `d` is between the days d1 and d2, not including those
   * days.
   *
   * @param  {Date}  d
   * @param  {Date}  d1
   * @param  {Date}  d2
   * @return {Boolean}
   */
  isDayBetween(d, d1, d2) {
    d = DateUtils.clone(d);
    d1 = DateUtils.clone(d1);
    d2 = DateUtils.clone(d2);

    d.setHours(0, 0, 0, 0);
    d1.setHours(0, 0, 0, 0);
    d2.setHours(0, 0, 0, 0);
    return (d1 < d && d < d2) || (d2 < d && d < d1);
  },

  /**
   * Add a day to a range, returning a new range. A range is an object with
   * `from` and `to` keys.
   *
   * @param {Date} day
   * @param {Object} range
   * @return {Object} Returns a new range object
   */
  addDayToRange(day, range={from: null, to: null}) {
    let { from, to } = range;
    if (!from) {
      from = day;
    }
    else if (from && to && DateUtils.isSameDay(from, to) && DateUtils.isSameDay(day, from)) {
      // reset when selecting again the first day
      from = null;
      to = null;
    }
    else if (to && day < from) {
      from = day;
    }
    else if (to && DateUtils.isSameDay(day, to)) {
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
  },

  /**
   * Returns true if a day is included in a range of days. A range is an
   * object with a `from` and `to` dates.
   *
   * @param  {Date}  day
   * @param  {Object}  range
   * @return {Boolean}
   */
  isDayInRange(day, range) {
    const { from, to } = range;
    return (from && DateUtils.isSameDay(day, from)) ||
      (to && DateUtils.isSameDay(day, to)) ||
      (from && to && DateUtils.isDayBetween(day, from, to));
  }

};

export default DateUtils;
