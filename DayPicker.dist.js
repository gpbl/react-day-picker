/*
  Used to create /lib/daypicker.min.js (e.g. for unpkg)
*/

/* eslint-disable no-var */
/* eslint-env node */

var DayPicker = require('./src/DayPicker').default;
DayPicker.Input = require('./src/DayPickerInput').default;

module.exports = DayPicker;
