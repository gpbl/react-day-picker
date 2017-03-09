(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["DayPicker"] = factory(require("react"));
	else
		root["DayPicker"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModifierPropType = undefined;

var _react = __webpack_require__(0);

var PrimitiveTypes = {
  localeUtils: _react.PropTypes.shape({
    formatMonthTitle: _react.PropTypes.func,
    formatWeekdayShort: _react.PropTypes.func,
    formatWeekdayLong: _react.PropTypes.func,
    getFirstDayOfWeek: _react.PropTypes.func
  }),
  range: _react.PropTypes.shape({
    from: _react.PropTypes.instanceOf(Date),
    to: _react.PropTypes.instanceOf(Date)
  }),
  after: _react.PropTypes.shape({
    after: _react.PropTypes.instanceOf(Date)
  }),
  before: _react.PropTypes.shape({
    before: _react.PropTypes.instanceOf(Date)
  })
};

var ModifierPropType = exports.ModifierPropType = _react.PropTypes.oneOfType([PrimitiveTypes.after, PrimitiveTypes.before, PrimitiveTypes.range, _react.PropTypes.func, _react.PropTypes.array]);

exports.default = PrimitiveTypes;
//# sourceMappingURL=PropTypes.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clone = clone;
exports.addMonths = addMonths;
exports.isSameDay = isSameDay;
exports.isPastDay = isPastDay;
exports.isFutureDay = isFutureDay;
exports.isDayBetween = isDayBetween;
exports.addDayToRange = addDayToRange;
exports.isDayInRange = isDayInRange;

/**
 * Clone a date object.
 *
 * @param  {Date} d The date to clone
 * @return {Date} The cloned date
 */
function clone(d) {
  return new Date(d.getTime());
}

/**
 * Return `d` as a new date with `n` months added.
 * @param {[type]} d
 * @param {[type]} n
 */
function addMonths(d, n) {
  var newDate = clone(d);
  newDate.setMonth(d.getMonth() + n);
  return newDate;
}

/**
 * Return `true` if two dates are the same day, ignoring the time.
 *
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isSameDay(d1, d2) {
  if (!d1 || !d2) {
    return false;
  }
  return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

/**
 * Return `true` if a day is in the past, e.g. yesterday or any day
 * before yesterday.
 *
 * @param  {Date}  d
 * @return {Boolean}
 */
function isPastDay(d) {
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  return d < today;
}

/**
 * Return `true` if a day is in the future, e.g. tomorrow or any day
 * after tomorrow.
 *
 * @param  {Date}  d
 * @return {Boolean}
 */
function isFutureDay(d) {
  var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  tomorrow.setHours(0, 0, 0, 0);
  return d >= tomorrow;
}

/**
 * Return `true` if day `d` is between days `d1` and `d2`,
 * without including them.
 *
 * @param  {Date}  d
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isDayBetween(d, d1, d2) {
  var date = clone(d);
  var date1 = clone(d1);
  var date2 = clone(d2);

  date.setHours(0, 0, 0, 0);
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);
  return date1 < date && date < date2 || date2 < date && date < date1;
}

/**
 * Add a day to a range and return a new range. A range is an object with
 * `from` and `to` days.
 *
 * @param {Date} day
 * @param {Object} range
 * @return {Object} Returns a new range object
 */
function addDayToRange(day) {
  var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { from: null, to: null };
  var from = range.from,
      to = range.to;

  if (!from) {
    from = day;
  } else if (from && to && isSameDay(from, to) && isSameDay(day, from)) {
    from = null;
    to = null;
  } else if (to && day < from) {
    from = day;
  } else if (to && isSameDay(day, to)) {
    from = day;
    to = day;
  } else {
    to = day;
    if (to < from) {
      to = from;
      from = day;
    }
  }

  return { from: from, to: to };
}

/**
 * Return `true` if a day is included in a range of days.
 *
 * @param  {Date}  day
 * @param  {Object}  range
 * @return {Boolean}
 */
function isDayInRange(day, range) {
  var from = range.from,
      to = range.to;

  return from && isSameDay(day, from) || to && isSameDay(day, to) || from && to && isDayBetween(day, from, to);
}

exports.default = {
  addDayToRange: addDayToRange,
  addMonths: addMonths,
  clone: clone,
  isSameDay: isSameDay,
  isDayInRange: isDayInRange,
  isDayBetween: isDayBetween,
  isPastDay: isPastDay,
  isFutureDay: isFutureDay
};
//# sourceMappingURL=DateUtils.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDay = formatDay;
exports.formatMonthTitle = formatMonthTitle;
exports.formatWeekdayShort = formatWeekdayShort;
exports.formatWeekdayLong = formatWeekdayLong;
exports.getFirstDayOfWeek = getFirstDayOfWeek;
exports.getMonths = getMonths;
var WEEKDAYS_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var WEEKDAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatDay(day) {
  return day.toDateString();
}

function formatMonthTitle(d) {
  return MONTHS[d.getMonth()] + ' ' + d.getFullYear();
}

function formatWeekdayShort(i) {
  return WEEKDAYS_SHORT[i];
}

function formatWeekdayLong(i) {
  return WEEKDAYS_LONG[i];
}

function getFirstDayOfWeek() {
  return 0;
}

function getMonths() {
  return MONTHS;
}

exports.default = {
  formatDay: formatDay,
  formatMonthTitle: formatMonthTitle,
  formatWeekdayShort: formatWeekdayShort,
  formatWeekdayLong: formatWeekdayLong,
  getFirstDayOfWeek: getFirstDayOfWeek,
  getMonths: getMonths
};
//# sourceMappingURL=LocaleUtils.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Proxy object to map classnames when css modules are not used

exports.default = {
  container: 'DayPicker',
  interactionDisabled: 'DayPicker--interactionDisabled',
  month: 'DayPicker-Month',
  navBar: 'DayPicker-NavBar',
  navButtonPrev: 'DayPicker-NavButton DayPicker-NavButton--prev',
  navButtonNext: 'DayPicker-NavButton DayPicker-NavButton--next',
  caption: 'DayPicker-Caption',
  weekdays: 'DayPicker-Weekdays',
  weekdaysRow: 'DayPicker-WeekdaysRow',
  weekday: 'DayPicker-Weekday',
  body: 'DayPicker-Body',
  week: 'DayPicker-Week',
  day: 'DayPicker-Day',

  // default modifiers
  today: 'today',
  selected: 'selected',
  disabled: 'disabled',
  outside: 'outside'

};
//# sourceMappingURL=classNames.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarPropTypes = undefined;
exports.default = Navbar;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classNames = __webpack_require__(4);

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navbar(_ref) {
  var classNames = _ref.classNames,
      className = _ref.className,
      showPreviousButton = _ref.showPreviousButton,
      showNextButton = _ref.showNextButton,
      onPreviousClick = _ref.onPreviousClick,
      onNextClick = _ref.onNextClick,
      labels = _ref.labels,
      dir = _ref.dir;

  var previousClickHandler = dir === 'rtl' ? onNextClick : onPreviousClick;
  var nextClickHandler = dir === 'rtl' ? onPreviousClick : onNextClick;

  var previousButton = showPreviousButton && _react2.default.createElement('span', {
    role: 'button',
    'aria-label': labels.previousMonth,
    key: 'previous',
    className: classNames.navButtonPrev,
    onClick: function onClick() {
      return previousClickHandler();
    }
  });

  var nextButton = showNextButton && _react2.default.createElement('span', {
    role: 'button',
    'aria-label': labels.nextMonth,
    key: 'right',
    className: classNames.navButtonNext,
    onClick: function onClick() {
      return nextClickHandler();
    }
  });

  return _react2.default.createElement(
    'div',
    { className: className || classNames.navBar },
    dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]
  );
}

var NavbarPropTypes = exports.NavbarPropTypes = {
  classNames: _react.PropTypes.shape({
    navBar: _react.PropTypes.string.isRequired,
    navButtonPrev: _react.PropTypes.string.isRequired,
    navButtonNext: _react.PropTypes.string.isRequired
  }),
  className: _react.PropTypes.string,
  showPreviousButton: _react.PropTypes.bool,
  showNextButton: _react.PropTypes.bool,
  onPreviousClick: _react.PropTypes.func,
  onNextClick: _react.PropTypes.func,
  dir: _react.PropTypes.string,
  labels: _react.PropTypes.shape({
    previousMonth: _react.PropTypes.string.isRequired,
    nextMonth: _react.PropTypes.string.isRequired
  })
};

Navbar.propTypes = NavbarPropTypes;

Navbar.defaultProps = {
  classNames: _classNames2.default,
  dir: 'ltr',
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month'
  },
  showPreviousButton: true,
  showNextButton: true
};
//# sourceMappingURL=Navbar.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeekdayPropTypes = undefined;
exports.default = Weekday;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PropTypes = __webpack_require__(1);

var _PropTypes2 = _interopRequireDefault(_PropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Weekday(_ref) {
  var weekday = _ref.weekday,
      className = _ref.className,
      weekdaysLong = _ref.weekdaysLong,
      weekdaysShort = _ref.weekdaysShort,
      localeUtils = _ref.localeUtils,
      locale = _ref.locale;

  var title = void 0;
  if (weekdaysLong) {
    title = weekdaysLong[weekday];
  } else {
    title = localeUtils.formatWeekdayLong(weekday, locale);
  }
  var content = void 0;
  if (weekdaysShort) {
    content = weekdaysShort[weekday];
  } else {
    content = localeUtils.formatWeekdayShort(weekday, locale);
  }

  return _react2.default.createElement(
    'div',
    { className: className, role: 'columnheader' },
    _react2.default.createElement(
      'abbr',
      { title: title },
      content
    )
  );
}

var WeekdayPropTypes = exports.WeekdayPropTypes = {
  weekday: _react.PropTypes.number,
  className: _react.PropTypes.string,
  locale: _react.PropTypes.string,
  localeUtils: _PropTypes2.default.localeUtils,

  weekdaysLong: _react.PropTypes.arrayOf(_react.PropTypes.string),
  weekdaysShort: _react.PropTypes.arrayOf(_react.PropTypes.string)
};

Weekday.propTypes = WeekdayPropTypes;
//# sourceMappingURL=Weekday.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.cancelEvent = cancelEvent;
exports.getFirstDayOfMonth = getFirstDayOfMonth;
exports.getDaysInMonth = getDaysInMonth;
exports.getModifiersFromProps = getModifiersFromProps;
exports.getFirstDayOfWeekFromProps = getFirstDayOfWeekFromProps;
exports.isRangeOfDates = isRangeOfDates;
exports.getModifiersForDay = getModifiersForDay;
exports.getMonthsDiff = getMonthsDiff;
exports.getWeekArray = getWeekArray;
exports.startOfMonth = startOfMonth;

var _DateUtils = __webpack_require__(2);

var _LocaleUtils = __webpack_require__(3);

function cancelEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}

function getFirstDayOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1, 12);
}

function getDaysInMonth(d) {
  var resultDate = getFirstDayOfMonth(d);

  resultDate.setMonth(resultDate.getMonth() + 1);
  resultDate.setDate(resultDate.getDate() - 1);

  return resultDate.getDate();
}

function getModifiersFromProps(props) {
  var modifiers = _extends({}, props.modifiers);
  if (props.selectedDays) {
    modifiers[props.classNames.selected] = props.selectedDays;
  }
  if (props.disabledDays) {
    modifiers[props.classNames.disabled] = props.disabledDays;
  }
  return modifiers;
}

function getFirstDayOfWeekFromProps(props) {
  var firstDayOfWeek = props.firstDayOfWeek,
      _props$locale = props.locale,
      locale = _props$locale === undefined ? 'en' : _props$locale,
      _props$localeUtils = props.localeUtils,
      localeUtils = _props$localeUtils === undefined ? {} : _props$localeUtils;

  if (!isNaN(firstDayOfWeek)) {
    return firstDayOfWeek;
  }
  if (localeUtils.getFirstDayOfWeek) {
    return localeUtils.getFirstDayOfWeek(locale);
  }
  return 0;
}

function isRangeOfDates(value) {
  return !!(value && value.from && value.to);
}

function getModifiersForDay(d) {
  var modifiersObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return Object.keys(modifiersObj).reduce(function (modifiers, modifier) {
    var value = modifiersObj[modifier];
    if (!value) {
      return modifiers;
    }
    if (value instanceof Date && (0, _DateUtils.isSameDay)(d, value)) {
      // modifier's value is a date
      modifiers.push(modifier);
    } else if (value instanceof Array) {
      // modifier's value is an array
      if (value.some(function (day) {
        if (!day) {
          return false;
        }
        if (day instanceof Date) {
          // this value of the array is a date
          return (0, _DateUtils.isSameDay)(d, day);
        }
        if (isRangeOfDates(day)) {
          // this value of the array is a range
          var range = day;
          return (0, _DateUtils.isDayInRange)(d, range);
        }
        if (day.after) {
          return d > day.after;
        }
        if (day.before) {
          return d < day.before;
        }
        return false;
      })) {
        modifiers.push(modifier);
      }
    } else if (isRangeOfDates(value) && (0, _DateUtils.isDayInRange)(d, value)) {
      // modifier's value is a range
      modifiers.push(modifier);
    } else if (value.after && d > value.after) {
      // modifier's value has an after date
      modifiers.push(modifier);
    } else if (value.before && d < value.before) {
      // modifier's value has an after date
      modifiers.push(modifier);
    } else if (typeof value === 'function' && value(d)) {
      // modifier's value is a function
      modifiers.push(modifier);
    }
    return modifiers;
  }, []);
}

function getMonthsDiff(d1, d2) {
  return d2.getMonth() - d1.getMonth() + 12 * (d2.getFullYear() - d1.getFullYear());
}

function getWeekArray(d) {
  var firstDayOfWeek = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _LocaleUtils.getFirstDayOfWeek)();
  var fixedWeeks = arguments[2];

  var daysInMonth = getDaysInMonth(d);
  var dayArray = [];

  var week = [];
  var weekArray = [];

  for (var i = 1; i <= daysInMonth; i += 1) {
    dayArray.push(new Date(d.getFullYear(), d.getMonth(), i, 12));
  }

  dayArray.forEach(function (day) {
    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
      weekArray.push(week);
      week = [];
    }
    week.push(day);
    if (dayArray.indexOf(day) === dayArray.length - 1) {
      weekArray.push(week);
    }
  });

  // unshift days to start the first week
  var firstWeek = weekArray[0];
  for (var _i = 7 - firstWeek.length; _i > 0; _i -= 1) {
    var outsideDate = (0, _DateUtils.clone)(firstWeek[0]);
    outsideDate.setDate(firstWeek[0].getDate() - 1);
    firstWeek.unshift(outsideDate);
  }

  // push days until the end of the last week
  var lastWeek = weekArray[weekArray.length - 1];
  for (var _i2 = lastWeek.length; _i2 < 7; _i2 += 1) {
    var _outsideDate = (0, _DateUtils.clone)(lastWeek[lastWeek.length - 1]);
    _outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
    lastWeek.push(_outsideDate);
  }

  // add extra weeks to reach 6 weeks
  if (fixedWeeks && weekArray.length < 6) {
    var lastExtraWeek = void 0;

    for (var _i3 = weekArray.length; _i3 < 6; _i3 += 1) {
      lastExtraWeek = weekArray[weekArray.length - 1];
      var lastDay = lastExtraWeek[lastExtraWeek.length - 1];
      var extraWeek = [];

      for (var j = 0; j < 7; j += 1) {
        var _outsideDate2 = (0, _DateUtils.clone)(lastDay);
        _outsideDate2.setDate(lastDay.getDate() + j + 1);
        extraWeek.push(_outsideDate2);
      }

      weekArray.push(extraWeek);
    }
  }

  return weekArray;
}

function startOfMonth(d) {
  var newDate = (0, _DateUtils.clone)(d);
  newDate.setDate(1);
  newDate.setHours(12, 0, 0, 0); // always set noon to avoid time zone issues
  return newDate;
}
//# sourceMappingURL=Helpers.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Caption = __webpack_require__(9);

var _Caption2 = _interopRequireDefault(_Caption);

var _Navbar = __webpack_require__(5);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Month = __webpack_require__(11);

var _Month2 = _interopRequireDefault(_Month);

var _Day = __webpack_require__(10);

var _Day2 = _interopRequireDefault(_Day);

var _Weekday = __webpack_require__(6);

var _Weekday2 = _interopRequireDefault(_Weekday);

var _Helpers = __webpack_require__(7);

var Helpers = _interopRequireWildcard(_Helpers);

var _DateUtils = __webpack_require__(2);

var DateUtils = _interopRequireWildcard(_DateUtils);

var _LocaleUtils = __webpack_require__(3);

var LocaleUtils = _interopRequireWildcard(_LocaleUtils);

var _classNames = __webpack_require__(4);

var _classNames2 = _interopRequireDefault(_classNames);

var _keys = __webpack_require__(13);

var _keys2 = _interopRequireDefault(_keys);

var _PropTypes = __webpack_require__(1);

var _PropTypes2 = _interopRequireDefault(_PropTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DayPicker = function (_Component) {
  _inherits(DayPicker, _Component);

  function DayPicker(props) {
    _classCallCheck(this, DayPicker);

    /* istanbul ignore next */
    // for the ignore above see: https://github.com/gotwarlost/istanbul/issues/690

    var _this = _possibleConstructorReturn(this, (DayPicker.__proto__ || Object.getPrototypeOf(DayPicker)).call(this, props));

    _initialiseProps.call(_this);

    _this.renderDayInMonth = _this.renderDayInMonth.bind(_this);
    _this.showNextMonth = _this.showNextMonth.bind(_this);
    _this.showPreviousMonth = _this.showPreviousMonth.bind(_this);

    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleDayClick = _this.handleDayClick.bind(_this);
    _this.handleDayKeyDown = _this.handleDayKeyDown.bind(_this);

    _this.state = _this.getStateFromProps(props);
    return _this;
  }

  _createClass(DayPicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.month !== nextProps.month) {
        this.setState(this.getStateFromProps(nextProps));
      }
    }
  }, {
    key: 'getDayNodes',
    value: function getDayNodes() {
      var outsideClassName = void 0;
      if (this.props.classNames === _classNames2.default) {
        // When using CSS modules prefix the modifier as required by the BEM syntax
        outsideClassName = this.props.classNames.day + '--' + this.props.classNames.outside;
      } else {
        outsideClassName = '' + this.props.classNames.outside;
      }
      var dayQuery = this.props.classNames.day.replace(/ /g, '.');
      var outsideDayQuery = outsideClassName.replace(/ /g, '.');
      var selector = '.' + dayQuery + ':not(.' + outsideDayQuery + ')';
      return this.dayPicker.querySelectorAll(selector);
    }
  }, {
    key: 'getNextNavigableMonth',
    value: function getNextNavigableMonth() {
      return DateUtils.addMonths(this.state.currentMonth, this.props.numberOfMonths);
    }
  }, {
    key: 'getPreviousNavigableMonth',
    value: function getPreviousNavigableMonth() {
      return DateUtils.addMonths(this.state.currentMonth, -1);
    }
  }, {
    key: 'allowPreviousMonth',
    value: function allowPreviousMonth() {
      var previousMonth = DateUtils.addMonths(this.state.currentMonth, -1);
      return this.allowMonth(previousMonth);
    }
  }, {
    key: 'allowNextMonth',
    value: function allowNextMonth() {
      var nextMonth = DateUtils.addMonths(this.state.currentMonth, this.props.numberOfMonths);
      return this.allowMonth(nextMonth);
    }
  }, {
    key: 'allowMonth',
    value: function allowMonth(d) {
      var _props = this.props,
          fromMonth = _props.fromMonth,
          toMonth = _props.toMonth,
          canChangeMonth = _props.canChangeMonth;

      if (!canChangeMonth || fromMonth && Helpers.getMonthsDiff(fromMonth, d) < 0 || toMonth && Helpers.getMonthsDiff(toMonth, d) > 0) {
        return false;
      }
      return true;
    }
  }, {
    key: 'allowYearChange',
    value: function allowYearChange() {
      return this.props.canChangeMonth;
    }
  }, {
    key: 'showMonth',
    value: function showMonth(d, callback) {
      var _this2 = this;

      if (!this.allowMonth(d)) {
        return;
      }
      this.setState({ currentMonth: Helpers.startOfMonth(d) }, function () {
        if (callback) {
          callback();
        }
        if (_this2.props.onMonthChange) {
          _this2.props.onMonthChange(_this2.state.currentMonth);
        }
      });
    }
  }, {
    key: 'showNextMonth',
    value: function showNextMonth(callback) {
      if (!this.allowNextMonth()) {
        return;
      }
      var deltaMonths = this.props.pagedNavigation ? this.props.numberOfMonths : 1;
      var nextMonth = DateUtils.addMonths(this.state.currentMonth, deltaMonths);
      this.showMonth(nextMonth, callback);
    }
  }, {
    key: 'showPreviousMonth',
    value: function showPreviousMonth(callback) {
      if (!this.allowPreviousMonth()) {
        return;
      }
      var deltaMonths = this.props.pagedNavigation ? this.props.numberOfMonths : 1;
      var previousMonth = DateUtils.addMonths(this.state.currentMonth, -deltaMonths);
      this.showMonth(previousMonth, callback);
    }
  }, {
    key: 'showNextYear',
    value: function showNextYear() {
      if (!this.allowYearChange()) {
        return;
      }
      var nextMonth = DateUtils.addMonths(this.state.currentMonth, 12);
      this.showMonth(nextMonth);
    }
  }, {
    key: 'showPreviousYear',
    value: function showPreviousYear() {
      if (!this.allowYearChange()) {
        return;
      }
      var nextMonth = DateUtils.addMonths(this.state.currentMonth, -12);
      this.showMonth(nextMonth);
    }
  }, {
    key: 'focusFirstDayOfMonth',
    value: function focusFirstDayOfMonth() {
      this.getDayNodes()[0].focus();
    }
  }, {
    key: 'focusLastDayOfMonth',
    value: function focusLastDayOfMonth() {
      var dayNodes = this.getDayNodes();
      dayNodes[dayNodes.length - 1].focus();
    }
  }, {
    key: 'focusPreviousDay',
    value: function focusPreviousDay(dayNode) {
      var _this3 = this;

      var dayNodes = this.getDayNodes();
      var dayNodeIndex = [].concat(_toConsumableArray(dayNodes)).indexOf(dayNode);

      if (dayNodeIndex === 0) {
        this.showPreviousMonth(function () {
          return _this3.focusLastDayOfMonth();
        });
      } else {
        dayNodes[dayNodeIndex - 1].focus();
      }
    }
  }, {
    key: 'focusNextDay',
    value: function focusNextDay(dayNode) {
      var _this4 = this;

      var dayNodes = this.getDayNodes();
      var dayNodeIndex = [].concat(_toConsumableArray(dayNodes)).indexOf(dayNode);

      if (dayNodeIndex === dayNodes.length - 1) {
        this.showNextMonth(function () {
          return _this4.focusFirstDayOfMonth();
        });
      } else {
        dayNodes[dayNodeIndex + 1].focus();
      }
    }
  }, {
    key: 'focusNextWeek',
    value: function focusNextWeek(dayNode) {
      var _this5 = this;

      var dayNodes = this.getDayNodes();
      var dayNodeIndex = [].concat(_toConsumableArray(dayNodes)).indexOf(dayNode);
      var isInLastWeekOfMonth = dayNodeIndex > dayNodes.length - 8;

      if (isInLastWeekOfMonth) {
        this.showNextMonth(function () {
          var daysAfterIndex = dayNodes.length - dayNodeIndex;
          var nextMonthDayNodeIndex = 7 - daysAfterIndex;
          _this5.getDayNodes()[nextMonthDayNodeIndex].focus();
        });
      } else {
        dayNodes[dayNodeIndex + 7].focus();
      }
    }
  }, {
    key: 'focusPreviousWeek',
    value: function focusPreviousWeek(dayNode) {
      var _this6 = this;

      var dayNodes = this.getDayNodes();
      var dayNodeIndex = [].concat(_toConsumableArray(dayNodes)).indexOf(dayNode);
      var isInFirstWeekOfMonth = dayNodeIndex <= 6;

      if (isInFirstWeekOfMonth) {
        this.showPreviousMonth(function () {
          var previousMonthDayNodes = _this6.getDayNodes();
          var startOfLastWeekOfMonth = previousMonthDayNodes.length - 7;
          var previousMonthDayNodeIndex = startOfLastWeekOfMonth + dayNodeIndex;
          previousMonthDayNodes[previousMonthDayNodeIndex].focus();
        });
      } else {
        dayNodes[dayNodeIndex - 7].focus();
      }
    }

    // Event handlers

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      e.persist();

      switch (e.keyCode) {
        case _keys2.default.LEFT:
          this.showPreviousMonth();
          break;
        case _keys2.default.RIGHT:
          this.showNextMonth();
          break;
        case _keys2.default.UP:
          this.showPreviousYear();
          break;
        case _keys2.default.DOWN:
          this.showNextYear();
          break;
        default:
          break;
      }

      if (this.props.onKeyDown) {
        this.props.onKeyDown(e);
      }
    }
  }, {
    key: 'handleDayKeyDown',
    value: function handleDayKeyDown(day, modifiers, e) {
      e.persist();
      switch (e.keyCode) {
        case _keys2.default.LEFT:
          Helpers.cancelEvent(e);
          this.focusPreviousDay(e.target);
          break;
        case _keys2.default.RIGHT:
          Helpers.cancelEvent(e);
          this.focusNextDay(e.target);
          break;
        case _keys2.default.UP:
          Helpers.cancelEvent(e);
          this.focusPreviousWeek(e.target);
          break;
        case _keys2.default.DOWN:
          Helpers.cancelEvent(e);
          this.focusNextWeek(e.target);
          break;
        case _keys2.default.ENTER:
        case _keys2.default.SPACE:
          Helpers.cancelEvent(e);
          if (this.props.onDayClick) {
            this.handleDayClick(day, modifiers, e);
          }
          break;
        default:
          break;
      }
      if (this.props.onDayKeyDown) {
        this.props.onDayKeyDown(day, modifiers, e);
      }
    }
  }, {
    key: 'handleDayClick',
    value: function handleDayClick(day, modifiers, e) {
      e.persist();
      if (modifiers.outside) {
        this.handleOutsideDayClick(day);
      }
      this.props.onDayClick(day, modifiers, e);
    }
  }, {
    key: 'handleOutsideDayClick',
    value: function handleOutsideDayClick(day) {
      var currentMonth = this.state.currentMonth;
      var numberOfMonths = this.props.numberOfMonths;

      var diffInMonths = Helpers.getMonthsDiff(currentMonth, day);
      if (diffInMonths > 0 && diffInMonths >= numberOfMonths) {
        this.showNextMonth();
      } else if (diffInMonths < 0) {
        this.showPreviousMonth();
      }
    }
  }, {
    key: 'renderNavbar',
    value: function renderNavbar() {
      var _props2 = this.props,
          labels = _props2.labels,
          locale = _props2.locale,
          localeUtils = _props2.localeUtils,
          canChangeMonth = _props2.canChangeMonth,
          navbarElement = _props2.navbarElement,
          attributes = _objectWithoutProperties(_props2, ['labels', 'locale', 'localeUtils', 'canChangeMonth', 'navbarElement']);

      if (!canChangeMonth) return null;

      var props = {
        classNames: this.props.classNames,
        className: this.props.classNames.navBar,
        nextMonth: this.getNextNavigableMonth(),
        previousMonth: this.getPreviousNavigableMonth(),
        showPreviousButton: this.allowPreviousMonth(),
        showNextButton: this.allowNextMonth(),
        onNextClick: this.showNextMonth,
        onPreviousClick: this.showPreviousMonth,
        dir: attributes.dir,
        labels: labels,
        locale: locale,
        localeUtils: localeUtils
      };
      return _react2.default.isValidElement(navbarElement) ? _react2.default.cloneElement(navbarElement, props) : _react2.default.createElement(navbarElement, props);
    }
  }, {
    key: 'renderDayInMonth',
    value: function renderDayInMonth(day, month) {
      var propModifiers = Helpers.getModifiersFromProps(this.props);
      var dayModifiers = Helpers.getModifiersForDay(day, propModifiers);
      if (DateUtils.isSameDay(day, new Date()) && !Object.prototype.hasOwnProperty.call(propModifiers, this.props.classNames.today)) {
        dayModifiers.push(this.props.classNames.today);
      }
      if (day.getMonth() !== month.getMonth()) {
        dayModifiers.push(this.props.classNames.outside);
      }

      var isOutside = day.getMonth() !== month.getMonth();
      var tabIndex = null;
      if (this.props.onDayClick && !isOutside) {
        tabIndex = -1;
        // Focus on the first day of the month
        if (day.getDate() === 1) {
          tabIndex = this.props.tabIndex;
        }
      }
      var key = '' + day.getFullYear() + day.getMonth() + day.getDate();
      var modifiers = {};
      dayModifiers.forEach(function (modifier) {
        modifiers[modifier] = true;
      });

      return _react2.default.createElement(
        _Day2.default,
        {
          key: '' + (isOutside ? 'outside-' : '') + key,
          classNames: this.props.classNames,
          day: day,
          modifiers: modifiers,
          empty: isOutside && !this.props.enableOutsideDays && !this.props.fixedWeeks,

          tabIndex: tabIndex,

          ariaLabel: this.props.localeUtils.formatDay(day, this.props.locale),
          ariaDisabled: isOutside || dayModifiers.indexOf('disabled') > -1,
          ariaSelected: dayModifiers.indexOf('selected') > -1,

          onMouseEnter: this.props.onDayMouseEnter,
          onMouseLeave: this.props.onDayMouseLeave,
          onKeyDown: this.handleDayKeyDown,
          onTouchStart: this.props.onDayTouchStart,
          onTouchEnd: this.props.onDayTouchEnd,
          onFocus: this.props.onDayFocus,
          onClick: this.props.onDayClick ? this.handleDayClick : undefined
        },
        this.props.renderDay(day, modifiers)
      );
    }
  }, {
    key: 'renderMonths',
    value: function renderMonths() {
      var months = [];
      var firstDayOfWeek = Helpers.getFirstDayOfWeekFromProps(this.props);

      for (var i = 0; i < this.props.numberOfMonths; i += 1) {
        var month = DateUtils.addMonths(this.state.currentMonth, i);

        months.push(_react2.default.createElement(
          _Month2.default,
          {
            key: i,
            classNames: this.props.classNames,

            month: month,
            months: this.props.months,

            weekdayElement: this.props.weekdayElement,
            captionElement: this.props.captionElement,
            fixedWeeks: this.props.fixedWeeks,

            weekdaysShort: this.props.weekdaysShort,
            weekdaysLong: this.props.weekdaysLong,
            locale: this.props.locale,
            localeUtils: this.props.localeUtils,
            firstDayOfWeek: firstDayOfWeek,

            onCaptionClick: this.props.onCaptionClick
          },
          this.renderDayInMonth
        ));
      }

      if (this.props.reverseMonths) {
        months.reverse();
      }
      return months;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var className = this.props.classNames.container;

      if (!this.props.onDayClick) {
        className = className + ' ' + this.props.classNames.interactionDisabled;
      }
      if (this.props.className) {
        className = className + ' ' + this.props.className;
      }

      return _react2.default.createElement(
        'div',
        _extends({}, this.props.containerProps, {
          className: className,
          ref: function ref(el) {
            _this7.dayPicker = el;
          },
          role: 'application',
          lang: this.props.locale,
          tabIndex: this.props.canChangeMonth && this.props.tabIndex,
          onKeyDown: this.handleKeyDown,
          onFocus: this.props.onFocus,
          onBlur: this.props.onBlur
        }),
        this.renderNavbar(),
        this.renderMonths()
      );
    }
  }]);

  return DayPicker;
}(_react.Component);

DayPicker.VERSION = '5.2.0';
DayPicker.propTypes = {

  // Rendering months
  initialMonth: _react.PropTypes.instanceOf(Date),
  month: _react.PropTypes.instanceOf(Date),
  numberOfMonths: _react.PropTypes.number,
  fromMonth: _react.PropTypes.instanceOf(Date),
  toMonth: _react.PropTypes.instanceOf(Date),
  canChangeMonth: _react.PropTypes.bool,
  reverseMonths: _react.PropTypes.bool,
  pagedNavigation: _react.PropTypes.bool,

  // Modifiers
  selectedDays: _react.PropTypes.oneOfType([_PropTypes.ModifierPropType, _react.PropTypes.arrayOf(_PropTypes.ModifierPropType)]),
  disabledDays: _react.PropTypes.oneOfType([_PropTypes.ModifierPropType, _react.PropTypes.arrayOf(_PropTypes.ModifierPropType)]),
  modifiers: _react.PropTypes.object,

  // Localization
  dir: _react.PropTypes.string,
  firstDayOfWeek: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  labels: _react.PropTypes.shape({
    nextMonth: _react.PropTypes.string.isRequired,
    previousMonth: _react.PropTypes.string.isRequired
  }).isRequired,
  locale: _react.PropTypes.string,
  localeUtils: _PropTypes2.default.localeUtils,
  months: _react.PropTypes.arrayOf(_react.PropTypes.string),
  weekdaysLong: _react.PropTypes.arrayOf(_react.PropTypes.string),
  weekdaysShort: _react.PropTypes.arrayOf(_react.PropTypes.string),

  // Customization
  enableOutsideDays: _react.PropTypes.bool,
  fixedWeeks: _react.PropTypes.bool,

  // CSS and HTML
  classNames: _react.PropTypes.shape({
    body: _react.PropTypes.string,
    container: _react.PropTypes.string,
    day: _react.PropTypes.string.isRequired,
    disabled: _react.PropTypes.string.isRequired,
    interactionDisabled: _react.PropTypes.string,
    month: _react.PropTypes.string,
    navBar: _react.PropTypes.string,
    outside: _react.PropTypes.string.isRequired,
    selected: _react.PropTypes.string.isRequired,
    today: _react.PropTypes.string.isRequired,
    week: _react.PropTypes.string
  }),
  className: _react.PropTypes.string,
  containerProps: _react.PropTypes.object,
  tabIndex: _react.PropTypes.number,

  // Custom elements
  renderDay: _react.PropTypes.func,
  weekdayElement: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.instanceOf(_react.Component)]),
  navbarElement: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.instanceOf(_react.Component)]),
  captionElement: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.instanceOf(_react.Component)]),

  // Events
  onBlur: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  onKeyDown: _react.PropTypes.func,
  onDayClick: _react.PropTypes.func,
  onDayKeyDown: _react.PropTypes.func,
  onDayMouseEnter: _react.PropTypes.func,
  onDayMouseLeave: _react.PropTypes.func,
  onDayTouchStart: _react.PropTypes.func,
  onDayTouchEnd: _react.PropTypes.func,
  onDayFocus: _react.PropTypes.func,
  onMonthChange: _react.PropTypes.func,
  onCaptionClick: _react.PropTypes.func

};
DayPicker.defaultProps = {
  classNames: _classNames2.default,
  tabIndex: 0,
  initialMonth: new Date(),
  numberOfMonths: 1,
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month'
  },
  locale: 'en',
  localeUtils: LocaleUtils,
  enableOutsideDays: false,
  fixedWeeks: false,
  canChangeMonth: true,
  reverseMonths: false,
  pagedNavigation: false,
  renderDay: function renderDay(day) {
    return day.getDate();
  },
  weekdayElement: _react2.default.createElement(_Weekday2.default, null),
  navbarElement: _react2.default.createElement(_Navbar2.default, { classNames: _classNames2.default }),
  captionElement: _react2.default.createElement(_Caption2.default, { classNames: _classNames2.default })
};

var _initialiseProps = function _initialiseProps() {
  this.getStateFromProps = function (props) {
    var initialMonth = Helpers.startOfMonth(props.month || props.initialMonth);
    var currentMonth = initialMonth;

    if (props.pagedNavigation && props.numberOfMonths > 1 && props.fromMonth) {
      var diffInMonths = Helpers.getMonthsDiff(props.fromMonth, currentMonth);
      currentMonth = DateUtils.addMonths(props.fromMonth, Math.floor(diffInMonths / props.numberOfMonths) * props.numberOfMonths);
    }
    return { currentMonth: currentMonth };
  };

  this.dayPicker = null;
};

exports.default = DayPicker;
//# sourceMappingURL=DayPicker.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Caption;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PropTypes = __webpack_require__(1);

var _PropTypes2 = _interopRequireDefault(_PropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Caption(_ref) {
  var classNames = _ref.classNames,
      date = _ref.date,
      months = _ref.months,
      locale = _ref.locale,
      localeUtils = _ref.localeUtils,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    'div',
    { className: classNames.caption, onClick: onClick, role: 'heading' },
    months ? months[date.getMonth()] + ' ' + date.getFullYear() : localeUtils.formatMonthTitle(date, locale)
  );
}

Caption.propTypes = {
  date: _react.PropTypes.instanceOf(Date),
  months: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
  locale: _react.PropTypes.string,
  localeUtils: _PropTypes2.default.localeUtils,
  onClick: _react.PropTypes.func,
  classNames: _react.PropTypes.shape({
    caption: _react.PropTypes.string.isRequired
  }).isRequired
};
//# sourceMappingURL=Caption.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Day;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classNames = __webpack_require__(4);

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/no-static-element-interactions, react/forbid-prop-types */

function handleEvent(handler, day, modifiers) {
  if (!handler) {
    return undefined;
  }
  return function (e) {
    e.persist();
    handler(day, modifiers, e);
  };
}
function Day(_ref) {
  var classNames = _ref.classNames,
      day = _ref.day,
      tabIndex = _ref.tabIndex,
      empty = _ref.empty,
      modifiers = _ref.modifiers,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick,
      onKeyDown = _ref.onKeyDown,
      onTouchStart = _ref.onTouchStart,
      onTouchEnd = _ref.onTouchEnd,
      onFocus = _ref.onFocus,
      ariaLabel = _ref.ariaLabel,
      ariaDisabled = _ref.ariaDisabled,
      ariaSelected = _ref.ariaSelected,
      children = _ref.children;

  var className = classNames.day;
  if (classNames !== _classNames2.default) {
    // When using CSS modules prefix the modifier as required by the BEM syntax
    className += ' ' + Object.keys(modifiers).join(' ');
  } else {
    className += Object.keys(modifiers).map(function (modifier) {
      return ' ' + className + '--' + modifier;
    }).join('');
  }
  if (empty) {
    return _react2.default.createElement('div', { role: 'gridcell', 'aria-disabled': true, className: className });
  }
  return _react2.default.createElement(
    'div',
    {
      className: className,
      tabIndex: tabIndex,
      role: 'gridcell',
      'aria-label': ariaLabel,
      'aria-disabled': ariaDisabled.toString(),
      'aria-selected': ariaSelected.toString(),
      onClick: handleEvent(onClick, day, modifiers),
      onKeyDown: handleEvent(onKeyDown, day, modifiers),
      onMouseEnter: handleEvent(onMouseEnter, day, modifiers),
      onMouseLeave: handleEvent(onMouseLeave, day, modifiers),
      onTouchEnd: handleEvent(onTouchEnd, day, modifiers),
      onTouchStart: handleEvent(onTouchStart, day, modifiers),
      onFocus: handleEvent(onFocus, day, modifiers)
    },
    children
  );
}

Day.propTypes = {

  classNames: _react.PropTypes.shape({
    day: _react.PropTypes.string.isRequired
  }).isRequired,

  day: _react.PropTypes.instanceOf(Date).isRequired,
  children: _react.PropTypes.node.isRequired,

  ariaDisabled: _react.PropTypes.bool,
  ariaLabel: _react.PropTypes.string,
  ariaSelected: _react.PropTypes.bool,
  empty: _react.PropTypes.bool,
  modifiers: _react.PropTypes.object,
  onClick: _react.PropTypes.func,
  onKeyDown: _react.PropTypes.func,
  onMouseEnter: _react.PropTypes.func,
  onMouseLeave: _react.PropTypes.func,
  onTouchEnd: _react.PropTypes.func,
  onTouchStart: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  tabIndex: _react.PropTypes.number
};

Day.defaultProps = {
  modifiers: {},
  empty: false
};
//# sourceMappingURL=Day.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Month;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PropTypes = __webpack_require__(1);

var _PropTypes2 = _interopRequireDefault(_PropTypes);

var _Weekdays = __webpack_require__(12);

var _Weekdays2 = _interopRequireDefault(_Weekdays);

var _Helpers = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Month(_ref) {
  var classNames = _ref.classNames,
      month = _ref.month,
      months = _ref.months,
      fixedWeeks = _ref.fixedWeeks,
      captionElement = _ref.captionElement,
      weekdayElement = _ref.weekdayElement,
      locale = _ref.locale,
      localeUtils = _ref.localeUtils,
      weekdaysLong = _ref.weekdaysLong,
      weekdaysShort = _ref.weekdaysShort,
      firstDayOfWeek = _ref.firstDayOfWeek,
      onCaptionClick = _ref.onCaptionClick,
      children = _ref.children;

  var captionProps = {
    date: month,
    classNames: classNames,
    months: months,
    localeUtils: localeUtils,
    locale: locale,
    onClick: onCaptionClick ? function (e) {
      return onCaptionClick(month, e);
    } : undefined
  };
  var caption = _react2.default.isValidElement(captionElement) ? _react2.default.cloneElement(captionElement, captionProps) : _react2.default.createElement(captionElement, captionProps);

  var weeks = (0, _Helpers.getWeekArray)(month, firstDayOfWeek, fixedWeeks);
  return _react2.default.createElement(
    'div',
    { className: classNames.month, role: 'grid' },
    caption,
    _react2.default.createElement(_Weekdays2.default, {
      classNames: classNames,
      weekdaysShort: weekdaysShort,
      weekdaysLong: weekdaysLong,
      firstDayOfWeek: firstDayOfWeek,
      locale: locale,
      localeUtils: localeUtils,
      weekdayElement: weekdayElement
    }),
    _react2.default.createElement(
      'div',
      { className: classNames.body, role: 'rowgroup' },
      weeks.map(function (week, j) {
        return _react2.default.createElement(
          'div',
          { key: j, className: classNames.week, role: 'gridcell' },
          week.map(function (day) {
            return children(day, month);
          })
        );
      })
    )
  );
}

Month.propTypes = {
  classNames: _react.PropTypes.shape({
    month: _react.PropTypes.string.isRequired,
    body: _react.PropTypes.string.isRequired,
    week: _react.PropTypes.string.isRequired
  }).isRequired,

  month: _react.PropTypes.instanceOf(Date).isRequired,
  months: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),

  fixedWeeks: _react.PropTypes.bool,
  captionElement: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.instanceOf(_react2.default.Component)]).isRequired,
  weekdayElement: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.instanceOf(_react2.default.Component)]),

  locale: _react.PropTypes.string.isRequired,
  localeUtils: _PropTypes2.default.localeUtils.isRequired,
  weekdaysLong: _react.PropTypes.arrayOf(_react.PropTypes.string),
  weekdaysShort: _react.PropTypes.arrayOf(_react.PropTypes.string),
  firstDayOfWeek: _react.PropTypes.number.isRequired,

  onCaptionClick: _react.PropTypes.func,

  children: _react.PropTypes.func.isRequired
};
//# sourceMappingURL=Month.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Weekdays;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PropTypes = __webpack_require__(1);

var _PropTypes2 = _interopRequireDefault(_PropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Weekdays(_ref) {
  var classNames = _ref.classNames,
      firstDayOfWeek = _ref.firstDayOfWeek,
      weekdaysLong = _ref.weekdaysLong,
      weekdaysShort = _ref.weekdaysShort,
      locale = _ref.locale,
      localeUtils = _ref.localeUtils,
      weekdayElement = _ref.weekdayElement;

  var days = [];
  for (var i = 0; i < 7; i += 1) {
    var weekday = (i + firstDayOfWeek) % 7;
    var elementProps = {
      key: i,
      className: classNames.weekday,
      weekday: weekday,
      weekdaysLong: weekdaysLong,
      weekdaysShort: weekdaysShort,
      localeUtils: localeUtils,
      locale: locale
    };
    var element = _react2.default.isValidElement(weekdayElement) ? _react2.default.cloneElement(weekdayElement, elementProps) : _react2.default.createElement(weekdayElement, elementProps);
    days.push(element);
  }

  return _react2.default.createElement(
    'div',
    { className: classNames.weekdays, role: 'rowgroup' },
    _react2.default.createElement(
      'div',
      { className: classNames.weekdaysRow, role: 'row' },
      days
    )
  );
}

Weekdays.propTypes = {

  classNames: _react.PropTypes.shape({
    weekday: _react.PropTypes.string.isRequired,
    weekdays: _react.PropTypes.string.isRequired,
    weekdaysRow: _react.PropTypes.string.isRequired
  }).isRequired,

  firstDayOfWeek: _react.PropTypes.number.isRequired,
  weekdaysLong: _react.PropTypes.arrayOf(_react.PropTypes.string),
  weekdaysShort: _react.PropTypes.arrayOf(_react.PropTypes.string),
  locale: _react.PropTypes.string.isRequired,
  localeUtils: _PropTypes2.default.localeUtils.isRequired,
  weekdayElement: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.instanceOf(_react2.default.Component)])
};
//# sourceMappingURL=Weekdays.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  ENTER: 13,
  SPACE: 32
};
//# sourceMappingURL=keys.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-var */
/* eslint-env node */

var DayPicker = __webpack_require__(8);
var DateUtils = __webpack_require__(2);
var LocaleUtils = __webpack_require__(3);
var Weekday = __webpack_require__(6);
var Navbar = __webpack_require__(5);
var PropTypes = __webpack_require__(1);

module.exports = DayPicker.default || DayPicker;
module.exports.DateUtils = DateUtils.default || DateUtils;
module.exports.LocaleUtils = LocaleUtils.default || LocaleUtils;
module.exports.WeekdayPropTypes = Weekday.WeekdayPropTypes;
module.exports.NavbarPropTypes = Navbar.NavbarPropTypes;
module.exports.PropTypes = PropTypes;


/***/ })
/******/ ]);
});