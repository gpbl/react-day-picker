const DayPicker = require('./lib/src/DayPicker');

DayPicker.default.Input = require('./lib/src/DayPickerInput').default;
DayPicker.default.DateUtils = require('./lib/src/DateUtils').default;
DayPicker.default.ModifiersUtils = require('./lib/src/ModifiersUtils').default;
DayPicker.default.LocaleUtils = require('./lib/src/LocaleUtils').default;

module.exports = DayPicker.default;
