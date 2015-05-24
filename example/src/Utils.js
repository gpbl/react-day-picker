import moment from 'moment';

const Utils = {

  valueToDate(s) {
    var date = moment.utc(s, "YYYY-MM-DD", true);
    return date.isValid() ? date : null;
  },

  dateToValue(d) {
    return d.format("YYYY-MM-DD");
  },

  isSameDay(a, b) {
    return a.startOf('day').isSame(b.startOf('day'));
  },

  isPastDay(day) {
    return day.diff(moment(), 'day') < 0;
  },

  isToday(day) {
    return Utils.isSameDay(moment(), day);
  },

  today() {
    return moment();
  }

};

export default Utils;
