'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_TIMEOUT = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.OverlayComponent = OverlayComponent;
exports.defaultFormat = defaultFormat;
exports.defaultParse = defaultParse;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DayPicker = require('./DayPicker');

var _DayPicker2 = _interopRequireDefault(_DayPicker);

var _DateUtils = require('./DateUtils');

var _ModifiersUtils = require('./ModifiersUtils');

var _keys = require('./keys');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// When clicking on a day cell, overlay will be hidden after this timeout
var HIDE_TIMEOUT = exports.HIDE_TIMEOUT = 100;

/**
 * The default component used as Overlay.
 *
 * @param {Object} props
 */
function OverlayComponent(_ref) {
  var input = _ref.input,
      selectedDay = _ref.selectedDay,
      month = _ref.month,
      children = _ref.children,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['input', 'selectedDay', 'month', 'children', 'classNames']);

  return _react2.default.createElement(
    'div',
    _extends({ className: classNames.overlayWrapper }, props),
    _react2.default.createElement(
      'div',
      { className: classNames.overlay },
      children
    )
  );
}

OverlayComponent.propTypes = {
  input: _propTypes2.default.any,
  selectedDay: _propTypes2.default.any,
  month: _propTypes2.default.instanceOf(Date),
  children: _propTypes2.default.node,
  classNames: _propTypes2.default.object
};

/**
 * The default function used to format a Date to String, passed to the `format`
 * prop.
 * @param {Date} d
 * @return {String}
 */
function defaultFormat(d) {
  if ((0, _DateUtils.isDate)(d)) {
    var year = d.getFullYear();
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    return year + '-' + month + '-' + day;
  }
  return '';
}

/**
 * The default function used to parse a String as Date, passed to the `parse`
 * prop.
 * @param {String} str
 * @return {Date}
 */
function defaultParse(str) {
  if (typeof str !== 'string') {
    return undefined;
  }
  var split = str.split('-');
  if (split.length !== 3) {
    return undefined;
  }
  var year = parseInt(split[0], 10);
  var month = parseInt(split[1], 10) - 1;
  var day = parseInt(split[2], 10);
  if (isNaN(year) || String(year).length > 4 || isNaN(month) || isNaN(day) || day <= 0 || day > 31 || month < 0 || month >= 12) {
    return undefined;
  }

  return new Date(year, month, day, 12, 0, 0, 0); // always set noon to avoid time zone issues
}

var DayPickerInput = function (_React$Component) {
  _inherits(DayPickerInput, _React$Component);

  function DayPickerInput(props) {
    _classCallCheck(this, DayPickerInput);

    var _this = _possibleConstructorReturn(this, (DayPickerInput.__proto__ || Object.getPrototypeOf(DayPickerInput)).call(this, props));

    _this.input = null;
    _this.daypicker = null;
    _this.clickTimeout = null;
    _this.hideTimeout = null;
    _this.inputBlurTimeout = null;
    _this.inputFocusTimeout = null;


    _this.state = _this.getInitialStateFromProps(props);
    _this.state.showOverlay = props.showOverlay;

    _this.hideAfterDayClick = _this.hideAfterDayClick.bind(_this);
    _this.handleInputClick = _this.handleInputClick.bind(_this);
    _this.handleInputFocus = _this.handleInputFocus.bind(_this);
    _this.handleInputBlur = _this.handleInputBlur.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleInputKeyDown = _this.handleInputKeyDown.bind(_this);
    _this.handleInputKeyUp = _this.handleInputKeyUp.bind(_this);
    _this.handleDayClick = _this.handleDayClick.bind(_this);
    _this.handleMonthChange = _this.handleMonthChange.bind(_this);
    _this.handleOverlayFocus = _this.handleOverlayFocus.bind(_this);
    _this.handleOverlayBlur = _this.handleOverlayBlur.bind(_this);
    return _this;
  }

  _createClass(DayPickerInput, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var newState = {};

      // Current props
      var _props = this.props,
          value = _props.value,
          formatDate = _props.formatDate,
          format = _props.format,
          dayPickerProps = _props.dayPickerProps;

      // Update the input value if `value`, `dayPickerProps.locale` or `format`
      // props have changed

      if (value !== prevProps.value || dayPickerProps.locale !== prevProps.dayPickerProps.locale || format !== prevProps.format) {
        if ((0, _DateUtils.isDate)(value)) {
          newState.value = formatDate(value, format, dayPickerProps.locale);
        } else {
          newState.value = value;
        }
      }

      // Update the month if the months from props changed
      var prevMonth = prevProps.dayPickerProps.month;
      if (dayPickerProps.month && dayPickerProps.month !== prevMonth && !(0, _DateUtils.isSameMonth)(dayPickerProps.month, prevMonth)) {
        newState.month = dayPickerProps.month;
      }

      // Updated the selected days from props if they changed
      if (prevProps.dayPickerProps.selectedDays !== dayPickerProps.selectedDays) {
        newState.selectedDays = dayPickerProps.selectedDays;
      }

      if (Object.keys(newState).length > 0) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState(newState);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.clickTimeout);
      clearTimeout(this.hideTimeout);
      clearTimeout(this.inputFocusTimeout);
      clearTimeout(this.inputBlurTimeout);
      clearTimeout(this.overlayBlurTimeout);
    }
  }, {
    key: 'getInitialMonthFromProps',
    value: function getInitialMonthFromProps(props) {
      var dayPickerProps = props.dayPickerProps,
          format = props.format;

      var day = void 0;
      if (props.value) {
        if ((0, _DateUtils.isDate)(props.value)) {
          day = props.value;
        } else {
          day = props.parseDate(props.value, format, dayPickerProps.locale);
        }
      }
      return dayPickerProps.initialMonth || dayPickerProps.month || day || new Date();
    }
  }, {
    key: 'getInitialStateFromProps',
    value: function getInitialStateFromProps(props) {
      var dayPickerProps = props.dayPickerProps,
          formatDate = props.formatDate,
          format = props.format,
          typedValue = props.typedValue;
      var value = props.value;

      if (props.value && (0, _DateUtils.isDate)(props.value)) {
        value = formatDate(props.value, format, dayPickerProps.locale);
      }

      return {
        value: value,
        typedValue: typedValue,
        month: this.getInitialMonthFromProps(props),
        selectedDays: dayPickerProps.selectedDays
      };
    }
  }, {
    key: 'getInput',
    value: function getInput() {
      return this.input;
    }
  }, {
    key: 'getDayPicker',
    value: function getDayPicker() {
      return this.daypicker;
    }

    /**
     * Update the component's state and fire the `onDayChange` event passing the
     * day's modifiers to it.
     *
     * @param {Date} day - Will be used for changing the month
     * @param {String} value - Input field value
     * @private
     */

  }, {
    key: 'updateState',
    value: function updateState(day, value, callback) {
      var _this2 = this;

      var _props2 = this.props,
          dayPickerProps = _props2.dayPickerProps,
          onDayChange = _props2.onDayChange;

      this.setState({ month: day, value: value, typedValue: '' }, function () {
        if (callback) {
          callback();
        }
        if (!onDayChange) {
          return;
        }
        var modifiersObj = _extends({
          disabled: dayPickerProps.disabledDays,
          selected: dayPickerProps.selectedDays
        }, dayPickerProps.modifiers);
        var modifiers = (0, _ModifiersUtils.getModifiersForDay)(day, modifiersObj).reduce(function (obj, modifier) {
          return _extends({}, obj, _defineProperty({}, modifier, true));
        }, {});
        onDayChange(day, modifiers, _this2);
      });
    }

    /**
     * Show the Day Picker overlay.
     *
     * @memberof DayPickerInput
     */

  }, {
    key: 'showDayPicker',
    value: function showDayPicker() {
      var _this3 = this;

      var _props3 = this.props,
          parseDate = _props3.parseDate,
          format = _props3.format,
          dayPickerProps = _props3.dayPickerProps;
      var _state = this.state,
          value = _state.value,
          showOverlay = _state.showOverlay;

      if (showOverlay) {
        return;
      }
      // Reset the current displayed month when showing the overlay
      var month = value ? parseDate(value, format, dayPickerProps.locale) // Use the month in the input field
      : this.getInitialMonthFromProps(this.props); // Restore the month from the props
      this.setState(function (state) {
        return {
          showOverlay: true,
          month: month || state.month
        };
      }, function () {
        if (_this3.props.onDayPickerShow) _this3.props.onDayPickerShow();
      });
    }

    /**
     * Hide the Day Picker overlay
     *
     * @memberof DayPickerInput
     */

  }, {
    key: 'hideDayPicker',
    value: function hideDayPicker() {
      var _this4 = this;

      if (this.state.showOverlay === false) {
        return;
      }
      this.setState({ showOverlay: false }, function () {
        if (_this4.props.onDayPickerHide) _this4.props.onDayPickerHide();
      });
    }
  }, {
    key: 'hideAfterDayClick',
    value: function hideAfterDayClick() {
      var _this5 = this;

      if (!this.props.hideOnDayClick) {
        return;
      }
      this.hideTimeout = setTimeout(function () {
        _this5.overlayHasFocus = false;
        _this5.hideDayPicker();
      }, HIDE_TIMEOUT);
    }
  }, {
    key: 'handleInputClick',
    value: function handleInputClick(e) {
      this.showDayPicker();
      if (this.props.inputProps.onClick) {
        e.persist();
        this.props.inputProps.onClick(e);
      }
    }
  }, {
    key: 'handleInputFocus',
    value: function handleInputFocus(e) {
      var _this6 = this;

      this.showDayPicker();
      // Set `overlayHasFocus` after a timeout so the overlay can be hidden when
      // the input is blurred
      this.inputFocusTimeout = setTimeout(function () {
        _this6.overlayHasFocus = false;
      }, 2);
      if (this.props.inputProps.onFocus) {
        e.persist();
        this.props.inputProps.onFocus(e);
      }
    }

    // When the input is blurred, the overlay should disappear. However the input
    // is blurred also when the user interacts with the overlay (e.g. the overlay
    // get the focus by clicking it). In these cases, the overlay should not be
    // hidden. There are different approaches to avoid hiding the overlay when
    // this happens, but the only cross-browser hack we’ve found is to set all
    // these timeouts in code before changing `overlayHasFocus`.

  }, {
    key: 'handleInputBlur',
    value: function handleInputBlur(e) {
      var _this7 = this;

      this.inputBlurTimeout = setTimeout(function () {
        if (!_this7.overlayHasFocus) {
          _this7.hideDayPicker();
        }
      }, 1);
      if (this.props.inputProps.onBlur) {
        e.persist();
        this.props.inputProps.onBlur(e);
      }
    }
  }, {
    key: 'handleOverlayFocus',
    value: function handleOverlayFocus(e) {
      e.preventDefault();
      this.overlayHasFocus = true;
      if (!this.props.keepFocus || !this.input || typeof this.input.focus !== 'function') {
        return;
      }
      this.input.focus();
    }
  }, {
    key: 'handleOverlayBlur',
    value: function handleOverlayBlur() {
      var _this8 = this;

      // We need to set a timeout otherwise IE11 will hide the overlay when
      // focusing it
      this.overlayBlurTimeout = setTimeout(function () {
        _this8.overlayHasFocus = false;
      }, 3);
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      var _props4 = this.props,
          dayPickerProps = _props4.dayPickerProps,
          format = _props4.format,
          inputProps = _props4.inputProps,
          onDayChange = _props4.onDayChange,
          parseDate = _props4.parseDate;

      if (inputProps.onChange) {
        e.persist();
        inputProps.onChange(e);
      }
      var value = e.target.value;

      if (value.trim() === '') {
        this.setState({ value: value, typedValue: '' });
        if (onDayChange) onDayChange(undefined, {}, this);
        return;
      }
      var day = parseDate(value, format, dayPickerProps.locale);
      if (!day) {
        // Day is invalid: we save the value in the typedValue state
        this.setState({ value: value, typedValue: value });
        if (onDayChange) onDayChange(undefined, {}, this);
        return;
      }
      this.updateState(day, value);
    }
  }, {
    key: 'handleInputKeyDown',
    value: function handleInputKeyDown(e) {
      if (e.keyCode === _keys.TAB) {
        this.hideDayPicker();
      } else {
        this.showDayPicker();
      }
      if (this.props.inputProps.onKeyDown) {
        e.persist();
        this.props.inputProps.onKeyDown(e);
      }
    }
  }, {
    key: 'handleInputKeyUp',
    value: function handleInputKeyUp(e) {
      if (e.keyCode === _keys.ESC) {
        this.hideDayPicker();
      } else {
        this.showDayPicker();
      }
      if (this.props.inputProps.onKeyUp) {
        e.persist();
        this.props.inputProps.onKeyUp(e);
      }
    }
  }, {
    key: 'handleMonthChange',
    value: function handleMonthChange(month) {
      var _this9 = this;

      this.setState({ month: month }, function () {
        if (_this9.props.dayPickerProps && _this9.props.dayPickerProps.onMonthChange) {
          _this9.props.dayPickerProps.onMonthChange(month);
        }
      });
    }
  }, {
    key: 'handleDayClick',
    value: function handleDayClick(day, modifiers, e) {
      var _this10 = this;

      var _props5 = this.props,
          clickUnselectsDay = _props5.clickUnselectsDay,
          dayPickerProps = _props5.dayPickerProps,
          onDayChange = _props5.onDayChange,
          formatDate = _props5.formatDate,
          format = _props5.format;

      if (dayPickerProps.onDayClick) {
        dayPickerProps.onDayClick(day, modifiers, e);
      }

      // Do nothing if the day is disabled
      if (modifiers.disabled || dayPickerProps && dayPickerProps.classNames && modifiers[dayPickerProps.classNames.disabled]) {
        return;
      }

      // If the clicked day is already selected, remove the clicked day
      // from the selected days and empty the field value
      if (modifiers.selected && clickUnselectsDay) {
        var selectedDays = this.state.selectedDays;

        if (Array.isArray(selectedDays)) {
          selectedDays = selectedDays.slice(0);
          var selectedDayIdx = selectedDays.indexOf(day);
          selectedDays.splice(selectedDayIdx, 1);
        } else if (selectedDays) {
          selectedDays = null;
        }

        this.setState({ value: '', typedValue: '', selectedDays: selectedDays }, this.hideAfterDayClick);

        if (onDayChange) {
          onDayChange(undefined, modifiers, this);
        }
        return;
      }

      var value = formatDate(day, format, dayPickerProps.locale);
      this.setState({ value: value, typedValue: '', month: day }, function () {
        if (onDayChange) {
          onDayChange(day, modifiers, _this10);
        }
        _this10.hideAfterDayClick();
      });
    }
  }, {
    key: 'renderOverlay',
    value: function renderOverlay() {
      var _this11 = this;

      var _props6 = this.props,
          classNames = _props6.classNames,
          dayPickerProps = _props6.dayPickerProps,
          parseDate = _props6.parseDate,
          formatDate = _props6.formatDate,
          format = _props6.format;
      var _state2 = this.state,
          selectedDays = _state2.selectedDays,
          value = _state2.value;

      var selectedDay = void 0;
      if (!selectedDays && value) {
        var day = parseDate(value, format, dayPickerProps.locale);
        if (day) {
          selectedDay = day;
        }
      } else if (selectedDays) {
        selectedDay = selectedDays;
      }
      var onTodayButtonClick = void 0;
      if (dayPickerProps.todayButton) {
        // Set the current day when clicking the today button
        onTodayButtonClick = function onTodayButtonClick() {
          return _this11.updateState(new Date(), formatDate(new Date(), format, dayPickerProps.locale), _this11.hideAfterDayClick);
        };
      }
      var Overlay = this.props.overlayComponent;
      return _react2.default.createElement(
        Overlay,
        {
          classNames: classNames,
          month: this.state.month,
          selectedDay: selectedDay,
          input: this.input,
          tabIndex: 0 // tabIndex is necessary to catch focus/blur events on Safari
          , onFocus: this.handleOverlayFocus,
          onBlur: this.handleOverlayBlur
        },
        _react2.default.createElement(_DayPicker2.default, _extends({
          ref: function ref(el) {
            return _this11.daypicker = el;
          },
          onTodayButtonClick: onTodayButtonClick
        }, dayPickerProps, {
          month: this.state.month,
          selectedDays: selectedDay,
          onDayClick: this.handleDayClick,
          onMonthChange: this.handleMonthChange
        }))
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this12 = this;

      var Input = this.props.component;
      var inputProps = this.props.inputProps;

      return _react2.default.createElement(
        'div',
        { className: this.props.classNames.container, style: this.props.style },
        _react2.default.createElement(Input, _extends({
          ref: function ref(el) {
            return _this12.input = el;
          },
          placeholder: this.props.placeholder
        }, inputProps, {
          value: this.state.value || this.state.typedValue,
          onChange: this.handleInputChange,
          onFocus: this.handleInputFocus,
          onBlur: this.handleInputBlur,
          onKeyDown: this.handleInputKeyDown,
          onKeyUp: this.handleInputKeyUp,
          onClick: !inputProps.disabled ? this.handleInputClick : undefined
        })),
        this.state.showOverlay && this.renderOverlay()
      );
    }
  }]);

  return DayPickerInput;
}(_react2.default.Component);

DayPickerInput.propTypes = {
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.instanceOf(Date)]),
  inputProps: _propTypes2.default.object,
  placeholder: _propTypes2.default.string,

  format: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),

  formatDate: _propTypes2.default.func,
  parseDate: _propTypes2.default.func,
  typedValue: _propTypes2.default.string,

  showOverlay: _propTypes2.default.bool,
  dayPickerProps: _propTypes2.default.object,
  hideOnDayClick: _propTypes2.default.bool,
  clickUnselectsDay: _propTypes2.default.bool,
  keepFocus: _propTypes2.default.bool,
  component: _propTypes2.default.any,
  overlayComponent: _propTypes2.default.any,

  style: _propTypes2.default.object,
  classNames: _propTypes2.default.shape({
    container: _propTypes2.default.string,
    overlayWrapper: _propTypes2.default.string,
    overlay: _propTypes2.default.string.isRequired
  }),

  onDayChange: _propTypes2.default.func,
  onDayPickerHide: _propTypes2.default.func,
  onDayPickerShow: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func
};
DayPickerInput.defaultProps = {
  dayPickerProps: {},
  value: '',
  typedValue: '',
  placeholder: 'YYYY-M-D',
  format: 'L',
  formatDate: defaultFormat,
  parseDate: defaultParse,
  showOverlay: false,
  hideOnDayClick: true,
  clickUnselectsDay: false,
  keepFocus: true,
  component: 'input',
  inputProps: {},
  overlayComponent: OverlayComponent,
  classNames: {
    container: 'DayPickerInput',
    overlayWrapper: 'DayPickerInput-OverlayWrapper',
    overlay: 'DayPickerInput-Overlay'
  }
};
exports.default = DayPickerInput;
//# sourceMappingURL=DayPickerInput.js.map