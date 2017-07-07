/* eslint-disable no-var */
/* eslint-env node */

var DayPicker = require('./lib/src/DayPicker');
var DateUtils = require('./lib/src/DateUtils');
var LocaleUtils = require('./lib/src/LocaleUtils');
var ModifiersUtils = require('./lib/src/ModifiersUtils');
var Weekday = require('./lib/src/Weekday').default;
var Navbar = require('./lib/src/Navbar').default;
var PropTypes = require('./lib/src/PropTypes');

module.exports = DayPicker.default || DayPicker;
module.exports.DateUtils = DateUtils.default || DateUtils;
module.exports.LocaleUtils = LocaleUtils.default || LocaleUtils;
module.exports.ModifiersUtils = ModifiersUtils.default || ModifiersUtils;
module.exports.WeekdayPropTypes = Weekday.propTypes;
module.exports.NavbarPropTypes = Navbar.propTypes;
module.exports.PropTypes = PropTypes;
