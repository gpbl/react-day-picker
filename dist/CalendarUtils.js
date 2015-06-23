'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var CalendarUtils = {

  // return an array of the weeks (array of days) in a month

  weeks: function weeks(m) {

    var firstOfMonth = m.clone().startOf('month');
    var lastOfMonth = m.clone().endOf('month');

    var currentDay = firstOfMonth.clone();
    var currentWeek = [];
    var weeksInMonth = [];

    while (currentDay < lastOfMonth) {
      currentWeek.push(currentDay.clone());
      currentDay.add(1, 'd');

      if (currentDay.weekday() === 0 || currentDay > lastOfMonth) {
        weeksInMonth.push(currentWeek);
        currentWeek = [];
      }
    }

    return weeksInMonth;
  }

};

exports['default'] = CalendarUtils;
module.exports = exports['default'];