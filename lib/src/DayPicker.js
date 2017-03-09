'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Caption = require('./Caption');

var _Caption2 = _interopRequireDefault(_Caption);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Month = require('./Month');

var _Month2 = _interopRequireDefault(_Month);

var _Day = require('./Day');

var _Day2 = _interopRequireDefault(_Day);

var _Weekday = require('./Weekday');

var _Weekday2 = _interopRequireDefault(_Weekday);

var _Helpers = require('./Helpers');

var Helpers = _interopRequireWildcard(_Helpers);

var _DateUtils = require('./DateUtils');

var DateUtils = _interopRequireWildcard(_DateUtils);

var _LocaleUtils = require('./LocaleUtils');

var LocaleUtils = _interopRequireWildcard(_LocaleUtils);

var _classNames = require('./classNames');

var _classNames2 = _interopRequireDefault(_classNames);

var _keys = require('./keys');

var _keys2 = _interopRequireDefault(_keys);

var _PropTypes = require('./PropTypes');

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