'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDay = formatDay;
exports.formatMonthTitle = formatMonthTitle;
exports.formatWeekdayShort = formatWeekdayShort;
exports.formatWeekdayLong = formatWeekdayLong;
exports.getFirstDayOfWeek = getFirstDayOfWeek;
exports.getMonths = getMonths;
exports.formatDate = formatDate;
exports.parseDate = parseDate;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatDay(day) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';

  return (0, _moment2.default)(day).locale(locale).format('ddd ll');
} /* eslint-disable import/no-extraneous-dependencies, no-underscore-dangle */

function formatMonthTitle(date) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';

  return (0, _moment2.default)(date).locale(locale).format('MMMM YYYY');
}

function formatWeekdayShort(day) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';

  return (0, _moment2.default)().locale(locale)._locale.weekdaysMin()[day];
}

function formatWeekdayLong(day) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';

  return (0, _moment2.default)().locale(locale)._locale.weekdays()[day];
}

function getFirstDayOfWeek() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';

  var localeData = _moment2.default.localeData(locale);
  return localeData.firstDayOfWeek();
}

function getMonths() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';

  var months = [];
  var i = 0;
  while (i < 12) {
    months.push((0, _moment2.default)().locale(locale).month(i).format('MMMM'));
    i += 1;
  }
  return months;
}

function formatDate(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'L';
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en';

  return (0, _moment2.default)(date).locale(locale).format(Array.isArray(format) ? format[0] : format);
}

function parseDate(str) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'L';
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en';

  var m = (0, _moment2.default)(str, format, locale, true);
  if (m.isValid()) {
    return m.toDate();
  }
  return undefined;
}

exports.default = {
  formatDay: formatDay,
  formatMonthTitle: formatMonthTitle,
  formatWeekdayShort: formatWeekdayShort,
  formatWeekdayLong: formatWeekdayLong,
  getFirstDayOfWeek: getFirstDayOfWeek,
  getMonths: getMonths,
  formatDate: formatDate,
  parseDate: parseDate
};
//# sourceMappingURL=MomentLocaleUtils.js.map