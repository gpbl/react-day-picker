const DayPicker = require('./src/DayPicker');

DayPicker.default.Input = require('./src/DayPickerInput').default;
DayPicker.default.DateUtils = require('./src/DateUtils').default;
DayPicker.default.ModifiersUtils = require('./src/ModifiersUtils').default;
DayPicker.default.LocaleUtils = require('./src/LocaleUtils').default;

module.exports = DayPicker.default;
