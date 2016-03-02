var DayPicker =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = __webpack_require__(1);
	module.exports.DateUtils = __webpack_require__(4);
	module.exports.LocaleUtils  = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Helpers = __webpack_require__(3);
	
	var Helpers = _interopRequireWildcard(_Helpers);
	
	var _DateUtils = __webpack_require__(4);
	
	var DateUtils = _interopRequireWildcard(_DateUtils);
	
	var _LocaleUtils = __webpack_require__(5);
	
	var LocaleUtils = _interopRequireWildcard(_LocaleUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var keys = {
	  LEFT: 37,
	  RIGHT: 39,
	  ENTER: 13,
	  SPACE: 32
	};
	
	var Caption = function (_Component) {
	  _inherits(Caption, _Component);
	
	  function Caption() {
	    _classCallCheck(this, Caption);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Caption).apply(this, arguments));
	  }
	
	  _createClass(Caption, [{
	    key: "render",
	    value: function render() {
	      var _props = this.props;
	      var date = _props.date;
	      var locale = _props.locale;
	      var localeUtils = _props.localeUtils;
	      var onClick = _props.onClick;
	
	      return _react2.default.createElement(
	        "div",
	        { className: "DayPicker-Caption", onClick: onClick },
	        localeUtils.formatMonthTitle(date, locale)
	      );
	    }
	  }]);
	
	  return Caption;
	}(_react.Component);
	
	var DayPicker = function (_Component2) {
	  _inherits(DayPicker, _Component2);
	
	  function DayPicker(props) {
	    _classCallCheck(this, DayPicker);
	
	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(DayPicker).call(this, props));
	
	    _this2.state = {
	      currentMonth: Helpers.startOfMonth(props.initialMonth)
	    };
	    return _this2;
	  }
	
	  _createClass(DayPicker, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.initialMonth !== nextProps.initialMonth) {
	        this.setState({
	          currentMonth: Helpers.startOfMonth(nextProps.initialMonth)
	        });
	      }
	    }
	  }, {
	    key: "allowPreviousMonth",
	    value: function allowPreviousMonth() {
	      var fromMonth = this.props.fromMonth;
	
	      if (!fromMonth) {
	        return true;
	      }
	      var currentMonth = this.state.currentMonth;
	
	      return Helpers.getMonthsDiff(currentMonth, fromMonth) < 0;
	    }
	  }, {
	    key: "allowNextMonth",
	    value: function allowNextMonth() {
	      var _props2 = this.props;
	      var toMonth = _props2.toMonth;
	      var numberOfMonths = _props2.numberOfMonths;
	
	      if (!toMonth) {
	        return true;
	      }
	      var currentMonth = this.state.currentMonth;
	
	      return Helpers.getMonthsDiff(currentMonth, toMonth) >= numberOfMonths;
	    }
	  }, {
	    key: "allowMonth",
	    value: function allowMonth(d) {
	      var _props3 = this.props;
	      var fromMonth = _props3.fromMonth;
	      var toMonth = _props3.toMonth;
	
	      if (fromMonth && Helpers.getMonthsDiff(fromMonth, d) < 0 || toMonth && Helpers.getMonthsDiff(toMonth, d) > 0) {
	        return false;
	      }
	      return true;
	    }
	  }, {
	    key: "showMonth",
	    value: function showMonth(d) {
	      if (!this.allowMonth(d)) {
	        return;
	      }
	      this.setState({
	        currentMonth: Helpers.startOfMonth(d)
	      });
	    }
	  }, {
	    key: "showNextMonth",
	    value: function showNextMonth(callback) {
	      var _this3 = this;
	
	      if (!this.allowNextMonth()) {
	        return;
	      }
	      var currentMonth = this.state.currentMonth;
	
	      var nextMonth = DateUtils.addMonths(currentMonth, 1);
	      this.setState({
	        currentMonth: nextMonth
	      }, function () {
	        if (callback) {
	          callback();
	        }
	        if (_this3.props.onMonthChange) {
	          _this3.props.onMonthChange(_this3.state.currentMonth);
	        }
	      });
	    }
	  }, {
	    key: "showPreviousMonth",
	    value: function showPreviousMonth(callback) {
	      var _this4 = this;
	
	      if (!this.allowPreviousMonth()) {
	        return;
	      }
	      var currentMonth = this.state.currentMonth;
	
	      var prevMonth = DateUtils.addMonths(currentMonth, -1);
	      this.setState({
	        currentMonth: prevMonth
	      }, function () {
	        if (callback) {
	          callback();
	        }
	        if (_this4.props.onMonthChange) {
	          _this4.props.onMonthChange(_this4.state.currentMonth);
	        }
	      });
	    }
	  }, {
	    key: "focusPreviousDay",
	    value: function focusPreviousDay(dayNode) {
	      var body = dayNode.parentNode.parentNode.parentNode.parentNode;
	      var dayNodes = body.querySelectorAll(".DayPicker-Day:not(.DayPicker-Day--outside)");
	      var nodeIndex = undefined;
	      for (var i = 0; i < dayNodes.length; i++) {
	        if (dayNodes[i] === dayNode) {
	          nodeIndex = i;
	          break;
	        }
	      }
	      if (nodeIndex === 0) {
	        var currentMonth = this.state.currentMonth;
	        var numberOfMonths = this.props.numberOfMonths;
	
	        var prevMonth = DateUtils.addMonths(currentMonth, -numberOfMonths);
	        this.setState({
	          currentMonth: prevMonth
	        }, function () {
	          dayNodes = body.querySelectorAll(".DayPicker-Day:not(.DayPicker-Day--outside)");
	          dayNodes[dayNodes.length - 1].focus();
	        });
	      } else {
	        dayNodes[nodeIndex - 1].focus();
	      }
	    }
	  }, {
	    key: "focusNextDay",
	    value: function focusNextDay(dayNode) {
	      var body = dayNode.parentNode.parentNode.parentNode.parentNode;
	      var dayNodes = body.querySelectorAll(".DayPicker-Day:not(.DayPicker-Day--outside)");
	      var nodeIndex = undefined;
	      for (var i = 0; i < dayNodes.length; i++) {
	        if (dayNodes[i] === dayNode) {
	          nodeIndex = i;
	          break;
	        }
	      }
	
	      if (nodeIndex === dayNodes.length - 1) {
	        var currentMonth = this.state.currentMonth;
	        var numberOfMonths = this.props.numberOfMonths;
	
	        var nextMonth = DateUtils.addMonths(currentMonth, numberOfMonths);
	        this.setState({
	          currentMonth: nextMonth
	        }, function () {
	          dayNodes = body.querySelectorAll(".DayPicker-Day:not(.DayPicker-Day--outside)");
	          dayNodes[0].focus();
	        });
	      } else {
	        dayNodes[nodeIndex + 1].focus();
	      }
	    }
	
	    // Event handlers
	
	  }, {
	    key: "handleKeyDown",
	    value: function handleKeyDown(e) {
	      var _this5 = this;
	
	      e.persist();
	
	      if (!this.props.canChangeMonth && this.props.onKeyDown) {
	        this.props.onKeyDown(e);
	        return;
	      }
	
	      if (this.props.canChangeMonth) {
	        var callback = this.props.onKeyDown ? function () {
	          return _this5.props.onKeyDown(e);
	        } : null;
	
	        switch (e.keyCode) {
	          case keys.LEFT:
	            this.showPreviousMonth(callback);
	            break;
	          case keys.RIGHT:
	            this.showNextMonth(callback);
	            break;
	        }
	      }
	    }
	  }, {
	    key: "handleDayKeyDown",
	    value: function handleDayKeyDown(e, day, modifiers) {
	      e.persist();
	      switch (e.keyCode) {
	        case keys.LEFT:
	          e.preventDefault();
	          e.stopPropagation();
	          this.focusPreviousDay(e.target);
	          break;
	        case keys.RIGHT:
	          e.preventDefault();
	          e.stopPropagation();
	          this.focusNextDay(e.target);
	          break;
	        case keys.ENTER:
	        case keys.SPACE:
	          e.preventDefault();
	          e.stopPropagation();
	          if (this.props.onDayClick) {
	            this.handleDayClick(e, day, modifiers);
	          }
	          if (this.props.onDayTouchTap) {
	            this.handleDayTouchTap(e, day, modifiers);
	          }
	          break;
	      }
	    }
	  }, {
	    key: "handleNextMonthClick",
	    value: function handleNextMonthClick() {
	      this.showNextMonth();
	    }
	  }, {
	    key: "handlePrevMonthClick",
	    value: function handlePrevMonthClick() {
	      this.showPreviousMonth();
	    }
	  }, {
	    key: "handleCaptionClick",
	    value: function handleCaptionClick(e, currentMonth) {
	      e.persist();
	      this.props.onCaptionClick(e, currentMonth);
	    }
	  }, {
	    key: "handleDayTouchTap",
	    value: function handleDayTouchTap(e, day, modifiers) {
	      e.persist();
	      if (modifiers.indexOf("outside") > -1) {
	        this.handleOutsideDayPress(day);
	      }
	      this.props.onDayTouchTap(e, day, modifiers);
	    }
	  }, {
	    key: "handleDayClick",
	    value: function handleDayClick(e, day, modifiers) {
	      e.persist();
	      if (modifiers.indexOf("outside") > -1) {
	        this.handleOutsideDayPress(day);
	      }
	
	      this.props.onDayClick(e, day, modifiers);
	    }
	  }, {
	    key: "handleDayMouseEnter",
	    value: function handleDayMouseEnter(e, day, modifiers) {
	      e.persist();
	      this.props.onDayMouseEnter(e, day, modifiers);
	    }
	  }, {
	    key: "handleDayMouseLeave",
	    value: function handleDayMouseLeave(e, day, modifiers) {
	      e.persist();
	      this.props.onDayMouseLeave(e, day, modifiers);
	    }
	  }, {
	    key: "handleOutsideDayPress",
	    value: function handleOutsideDayPress(day) {
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
	    key: "renderNavBar",
	    value: function renderNavBar() {
	      var baseClass = "DayPicker-NavButton DayPicker-NavButton";
	      var isRTL = this.props.dir === "rtl";
	
	      var leftButton = isRTL ? this.allowNextMonth() : this.allowPreviousMonth();
	      var rightButton = isRTL ? this.allowPreviousMonth() : this.allowNextMonth();
	      return _react2.default.createElement(
	        "div",
	        { className: "DayPicker-NavBar" },
	        leftButton && _react2.default.createElement("span", {
	          key: "left",
	          className: baseClass + "--prev",
	          onClick: isRTL ? this.handleNextMonthClick.bind(this) : this.handlePrevMonthClick.bind(this)
	        }),
	        rightButton && _react2.default.createElement("span", {
	          key: "right",
	          className: baseClass + "--next",
	          onClick: isRTL ? this.handlePrevMonthClick.bind(this) : this.handleNextMonthClick.bind(this)
	        })
	      );
	    }
	  }, {
	    key: "renderMonth",
	    value: function renderMonth(date, i) {
	      var _this6 = this;
	
	      var _props4 = this.props;
	      var locale = _props4.locale;
	      var localeUtils = _props4.localeUtils;
	      var onCaptionClick = _props4.onCaptionClick;
	      var captionElement = _props4.captionElement;
	
	
	      var caption = _react2.default.cloneElement(captionElement, {
	        date: date, localeUtils: localeUtils, locale: locale,
	        onClick: onCaptionClick ? function (e) {
	          return _this6.handleCaptionClick(e, date);
	        } : null
	      });
	
	      return _react2.default.createElement(
	        "div",
	        {
	          className: "DayPicker-Month",
	          key: i },
	        caption,
	        _react2.default.createElement(
	          "div",
	          { className: "DayPicker-Weekdays" },
	          _react2.default.createElement(
	            "div",
	            { className: "DayPicker-WeekdaysRow" },
	            this.renderWeekDays()
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "DayPicker-Body" },
	          this.renderWeeksInMonth(date)
	        )
	      );
	    }
	  }, {
	    key: "renderWeekDays",
	    value: function renderWeekDays() {
	      var _props5 = this.props;
	      var locale = _props5.locale;
	      var localeUtils = _props5.localeUtils;
	
	      var days = [];
	      for (var i = 0; i < 7; i++) {
	        days.push(_react2.default.createElement(
	          "div",
	          { key: i, className: "DayPicker-Weekday" },
	          _react2.default.createElement(
	            "abbr",
	            { title: localeUtils.formatWeekdayLong(i, locale) },
	            localeUtils.formatWeekdayShort(i, locale)
	          )
	        ));
	      }
	      return days;
	    }
	  }, {
	    key: "renderWeeksInMonth",
	    value: function renderWeeksInMonth(month) {
	      var _this7 = this;
	
	      var _props6 = this.props;
	      var locale = _props6.locale;
	      var localeUtils = _props6.localeUtils;
	
	      var firstDayOfWeek = localeUtils.getFirstDayOfWeek(locale);
	      return Helpers.getWeekArray(month, firstDayOfWeek).map(function (week, i) {
	        return _react2.default.createElement(
	          "div",
	          { key: i, className: "DayPicker-Week", role: "row" },
	          week.map(function (day) {
	            return _this7.renderDay(month, day);
	          })
	        );
	      });
	    }
	  }, {
	    key: "renderDay",
	    value: function renderDay(month, day) {
	      var _this8 = this;
	
	      var _props7 = this.props;
	      var enableOutsideDays = _props7.enableOutsideDays;
	      var modifierFunctions = _props7.modifiers;
	
	
	      var className = "DayPicker-Day";
	      var modifiers = [];
	      var key = "" + day.getFullYear() + day.getMonth() + day.getDate();
	
	      var isToday = DateUtils.isSameDay(day, new Date());
	      if (isToday) {
	        modifiers.push("today");
	      }
	
	      var isOutside = day.getMonth() !== month.getMonth();
	      if (isOutside) {
	        modifiers.push("outside");
	      }
	
	      if (modifierFunctions) {
	        var customModifiers = Helpers.getModifiersForDay(day, modifierFunctions);
	        modifiers = [].concat(_toConsumableArray(modifiers), _toConsumableArray(customModifiers));
	      }
	
	      className += modifiers.map(function (modifier) {
	        return " " + className + "--" + modifier;
	      }).join("");
	
	      if (isOutside && !enableOutsideDays) {
	        return _react2.default.createElement("div", { key: "outside-" + key, className: className });
	      }
	
	      var _props8 = this.props;
	      var onDayMouseEnter = _props8.onDayMouseEnter;
	      var onDayMouseLeave = _props8.onDayMouseLeave;
	      var onDayTouchTap = _props8.onDayTouchTap;
	      var onDayClick = _props8.onDayClick;
	
	      var tabIndex = null;
	      if ((onDayTouchTap || onDayClick) && !isOutside) {
	        tabIndex = -1;
	        // Focus on the first day of the month
	        if (day.getDate() === 1) {
	          tabIndex = this.props.tabIndex;
	        }
	      }
	      return _react2.default.createElement(
	        "div",
	        { key: key, className: className,
	          tabIndex: tabIndex,
	          role: "gridcell",
	          onKeyDown: function onKeyDown(e) {
	            return _this8.handleDayKeyDown(e, day, modifiers);
	          },
	          onMouseEnter: onDayMouseEnter ? function (e) {
	            return _this8.handleDayMouseEnter(e, day, modifiers);
	          } : null,
	          onMouseLeave: onDayMouseLeave ? function (e) {
	            return _this8.handleDayMouseLeave(e, day, modifiers);
	          } : null,
	          onClick: onDayClick ? function (e) {
	            return _this8.handleDayClick(e, day, modifiers);
	          } : null,
	          onTouchTap: onDayTouchTap ? function (e) {
	            return _this8.handleDayTouchTap(e, day, modifiers);
	          } : null
	        },
	        this.props.renderDay(day)
	      );
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this9 = this;
	
	      var _props9 = this.props;
	      var numberOfMonths = _props9.numberOfMonths;
	      var locale = _props9.locale;
	      var canChangeMonth = _props9.canChangeMonth;
	
	      var attributes = _objectWithoutProperties(_props9, ["numberOfMonths", "locale", "canChangeMonth"]);
	
	      var currentMonth = this.state.currentMonth;
	
	      var className = "DayPicker DayPicker--" + locale;
	
	      if (!this.props.onDayClick && !this.props.onDayTouchTap) {
	        className = className + " DayPicker--interactionDisabled";
	      }
	      if (attributes.className) {
	        className = className + " " + attributes.className;
	      }
	
	      var months = [];
	      var month = undefined;
	      for (var i = 0; i < numberOfMonths; i++) {
	        month = DateUtils.addMonths(currentMonth, i);
	        months.push(this.renderMonth(month, i));
	      }
	
	      return _react2.default.createElement(
	        "div",
	        _extends({ className: className,
	          role: "widget",
	          tabIndex: canChangeMonth && attributes.tabIndex,
	          onKeyDown: function onKeyDown(e) {
	            return _this9.handleKeyDown(e);
	          }
	        }, attributes),
	        canChangeMonth && this.renderNavBar(),
	        months
	      );
	    }
	  }]);
	
	  return DayPicker;
	}(_react.Component);
	
	DayPicker.propTypes = {
	
	  initialMonth: _react.PropTypes.instanceOf(Date),
	  numberOfMonths: _react.PropTypes.number,
	
	  modifiers: _react.PropTypes.object,
	
	  locale: _react.PropTypes.string,
	  localeUtils: _react.PropTypes.shape({
	    formatMonthTitle: _react.PropTypes.func,
	    formatWeekdayShort: _react.PropTypes.func,
	    formatWeekdayLong: _react.PropTypes.func,
	    getFirstDayOfWeek: _react.PropTypes.func
	  }),
	
	  enableOutsideDays: _react.PropTypes.bool,
	  canChangeMonth: _react.PropTypes.bool,
	  fromMonth: _react.PropTypes.instanceOf(Date),
	  toMonth: _react.PropTypes.instanceOf(Date),
	
	  onDayClick: _react.PropTypes.func,
	  onDayTouchTap: _react.PropTypes.func,
	  onDayMouseEnter: _react.PropTypes.func,
	  onDayMouseLeave: _react.PropTypes.func,
	  onMonthChange: _react.PropTypes.func,
	  onCaptionClick: _react.PropTypes.func,
	
	  renderDay: _react.PropTypes.func,
	
	  captionElement: _react.PropTypes.element
	
	};
	DayPicker.defaultProps = {
	  tabIndex: 0,
	  initialMonth: new Date(),
	  numberOfMonths: 1,
	  locale: "en",
	  localeUtils: LocaleUtils,
	  enableOutsideDays: false,
	  canChangeMonth: true,
	  renderDay: function renderDay(day) {
	    return day.getDate();
	  },
	  captionElement: _react2.default.createElement(Caption, null)
	};
	exports.default = DayPicker;
	//# sourceMappingURL=DayPicker.js.map

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.startOfMonth = startOfMonth;
	exports.getFirstDayOfMonth = getFirstDayOfMonth;
	exports.getDaysInMonth = getDaysInMonth;
	exports.getWeekArray = getWeekArray;
	exports.getModifiersForDay = getModifiersForDay;
	exports.getMonthsDiff = getMonthsDiff;
	
	var _DateUtils = __webpack_require__(4);
	
	var _LocaleUtils = __webpack_require__(5);
	
	function startOfMonth(d) {
	  var newDate = (0, _DateUtils.clone)(d);
	  newDate.setDate(1);
	  newDate.setHours(12, 0, 0, 0); // always set noon to avoid time zone issues
	  return newDate;
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
	
	function getWeekArray(d) {
	  var firstDayOfWeek = arguments.length <= 1 || arguments[1] === undefined ? (0, _LocaleUtils.getFirstDayOfWeek)() : arguments[1];
	
	  var daysInMonth = getDaysInMonth(d);
	  var dayArray = [];
	
	  var week = [];
	  var weekArray = [];
	
	  for (var i = 1; i <= daysInMonth; i++) {
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
	  for (var i = 7 - firstWeek.length; i > 0; i--) {
	    var outsideDate = (0, _DateUtils.clone)(firstWeek[0]);
	    outsideDate.setDate(firstWeek[0].getDate() - 1);
	    firstWeek.unshift(outsideDate);
	  }
	
	  // push days until the end of the last week
	  var lastWeek = weekArray[weekArray.length - 1];
	  for (var i = lastWeek.length; i < 7; i++) {
	    var outsideDate = (0, _DateUtils.clone)(lastWeek[lastWeek.length - 1]);
	    outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
	    lastWeek.push(outsideDate);
	  }
	
	  return weekArray;
	}
	
	function getModifiersForDay(d, modifierFunctions) {
	  var modifiers = [];
	  if (modifierFunctions) {
	    for (var modifier in modifierFunctions) {
	      var func = modifierFunctions[modifier];
	      if (func(d)) {
	        modifiers.push(modifier);
	      }
	    }
	  }
	  return modifiers;
	}
	
	function getMonthsDiff(d1, d2) {
	  return d2.getMonth() - d1.getMonth() + 12 * (d2.getFullYear() - d1.getFullYear());
	}
	//# sourceMappingURL=Helpers.js.map

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addMonths = addMonths;
	exports.clone = clone;
	exports.isSameDay = isSameDay;
	exports.isPastDay = isPastDay;
	exports.isDayBetween = isDayBetween;
	exports.addDayToRange = addDayToRange;
	exports.isDayInRange = isDayInRange;
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
	 * Clone a date object.
	 *
	 * @param  {Date} d The date to clone
	 * @return {Date} The cloned date
	 */
	function clone(d) {
	  return new Date(d.getTime());
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
	 * Return `true` if day `d` is between days `d1` and `d2`,
	 * without including them.
	 *
	 * @param  {Date}  d
	 * @param  {Date}  d1
	 * @param  {Date}  d2
	 * @return {Boolean}
	 */
	function isDayBetween(d, d1, d2) {
	  d = clone(d);
	  d1 = clone(d1);
	  d2 = clone(d2);
	
	  d.setHours(0, 0, 0, 0);
	  d1.setHours(0, 0, 0, 0);
	  d2.setHours(0, 0, 0, 0);
	  return d1 < d && d < d2 || d2 < d && d < d1;
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
	  var range = arguments.length <= 1 || arguments[1] === undefined ? { from: null, to: null } : arguments[1];
	  var from = range.from;
	  var to = range.to;
	
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
	  var from = range.from;
	  var to = range.to;
	
	  return from && isSameDay(day, from) || to && isSameDay(day, to) || from && to && isDayBetween(day, from, to);
	}
	
	exports.default = {
	  addDayToRange: addDayToRange,
	  addMonths: addMonths,
	  clone: clone,
	  isSameDay: isSameDay,
	  isDayInRange: isDayInRange,
	  isDayBetween: isDayBetween,
	  isPastDay: isPastDay
	};
	//# sourceMappingURL=DateUtils.js.map

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatMonthTitle = formatMonthTitle;
	exports.formatWeekdayShort = formatWeekdayShort;
	exports.formatWeekdayLong = formatWeekdayLong;
	exports.getFirstDayOfWeek = getFirstDayOfWeek;
	exports.getMonths = getMonths;
	var WEEKDAYS_LONG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
	var WEEKDAYS_SHORT = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
	
	var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	function formatMonthTitle(d) {
	  return MONTHS[d.getMonth()] + " " + d.getFullYear();
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
	  formatMonthTitle: formatMonthTitle,
	  formatWeekdayShort: formatWeekdayShort,
	  formatWeekdayLong: formatWeekdayLong,
	  getFirstDayOfWeek: getFirstDayOfWeek,
	  getMonths: getMonths
	};
	//# sourceMappingURL=LocaleUtils.js.map

/***/ }
/******/ ]);
//# sourceMappingURL=DayPicker.js.map