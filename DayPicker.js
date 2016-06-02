/* eslint-disable no-var */
/* eslint-env node */

var DayPicker = require('./lib/DayPicker');
var DateUtils = require('./lib/DateUtils');
var LocaleUtils = require('./lib/LocaleUtils');
var Weekday = require('./lib/Weekday');

module.exports = DayPicker.default || DayPicker;
module.exports.DateUtils = DateUtils.default || DateUtils;
module.exports.LocaleUtils = LocaleUtils.default || LocaleUtils;
module.exports.WeekdayPropTypes = Weekday.WeekdayPropTypes;
