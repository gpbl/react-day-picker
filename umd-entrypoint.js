/** Entry point to create the UMD build with webpack */
const DayPicker = require('./src/DayPicker').default;
DayPicker.Input = require('./src/DayPickerInput').default;

module.exports = DayPicker;
