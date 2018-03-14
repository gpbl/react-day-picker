/*
  Used as main file in package.json
*/

/* eslint-disable no-var */
/* eslint-env node */

var DayPicker = require('./lib/src');
var Weekday = require('./lib/src/Weekday');
var Navbar = require('./lib/src/Navbar');
var PropTypes = require('./lib/src/PropTypes');
var DateUtils = require('./lib/src/DateUtils');
var LocaleUtils = require('./lib/src/LocaleUtils');
var ModifiersUtils = require('./lib/src/ModifiersUtils');

module.exports = DayPicker;
module.exports.WeekdayPropTypes = Weekday.propTypes;
module.exports.NavbarPropTypes = Navbar.propTypes;
module.exports.PropTypes = PropTypes;
