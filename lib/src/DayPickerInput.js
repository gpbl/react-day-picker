'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_TIMEOUT = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.defaultFormat = defaultFormat;
exports.defaultParse = defaultParse;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DayPicker = require('./DayPicker');

var _DayPicker2 = _interopRequireDefault(_DayPicker);

var _ModifiersUtils = require('./ModifiersUtils');

var _keys = require('./keys');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// When clicking on a day cell, overlay will be hidden after this timeout
var HIDE_TIMEOUT = exports.HIDE_TIMEOUT = 100;

function isDate(date) {
  return date instanceof Date && !isNaN(date.valueOf());
}

function defaultFormat(d) {
  if (isDate(d)) {
    var year = d.getFullYear();
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    return year + '-' + month + '-' + day;
  }
  return '';
}

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
  if (isNaN(year) || isNaN(month) || isNaN(day) || day <= 0 || day > 31 || month < 0 || month >= 12) {
    return undefined;
  }

  return new Date(year, month, day);
}

var DayPickerInput = function (_React$Component) {
  _inherits(DayPickerInput, _React$Component);

  function DayPickerInput(props) {
    _classCallCheck(this, DayPickerInput);

    var _this = _possibleConstructorReturn(this, (DayPickerInput.__proto__ || Object.getPrototypeOf(DayPickerInput)).call(this, props));

    _this.input = null;
    _this.daypicker = null;
    _this.overlayNode = null;
    _this.clickTimeout = null;
    _this.hideTimeout = null;


    _this.state = _this.getStateFromProps(props);
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
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var monthFromProps = this.props.dayPickerProps.month;
      var nextMonthFromProps = nextProps.dayPickerProps.month;

      var selectedDaysFromProps = this.props.dayPickerProps.selectedDays;
      var nextSelectedDaysFromProps = nextProps.dayPickerProps.selectedDays;

      var nextValue = nextProps.value;
      var currentValue = this.props.value;

      var monthChanged = nextMonthFromProps && !monthFromProps || nextMonthFromProps && (nextMonthFromProps.getFullYear() !== monthFromProps.getFullYear() || nextMonthFromProps.getMonth() !== monthFromProps.getMonth());

      if (nextValue !== currentValue) {
        if (isDate(nextValue)) {
          nextValue = this.props.formatDate(nextValue, this.props.format, this.props.dayPickerProps.locale);
        }
        this.setState({
          value: nextValue
        });
      }
      if (monthChanged) {
        this.setState({ month: nextMonthFromProps });
      }
      if (selectedDaysFromProps !== nextSelectedDaysFromProps) {
        this.setState({ selectedDays: nextSelectedDaysFromProps });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.clickTimeout);
      clearTimeout(this.hideTimeout);
    }
  }, {
    key: 'getStateFromProps',
    value: function getStateFromProps(props) {
      var dayPickerProps = props.dayPickerProps,
          formatDate = props.formatDate,
          format = props.format;
      var value = props.value;


      var day = void 0;
      if (props.value) {
        if (isDate(props.value)) {
          day = props.value;
          value = formatDate(props.value, format, dayPickerProps.locale);
        } else {
          day = props.parseDate(props.value, format, dayPickerProps.locale);
        }
      }

      // Use DayPicker's controlled month. Then try the current `value`. Finally default to today.
      var month = dayPickerProps.initialMonth || dayPickerProps.month || day || new Date();

      return {
        value: value,
        month: month,
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
  }, {
    key: 'updateState',


    /**
     * Update the component's state and fire the `onDayChange` event
     * passing the day's modifiers to it
     * @param {Date} day - Will be used for changing the month
     * @param {String} value - Input field value
     * @private
     */
    value: function updateState(day, value, callback) {
      var _props = this.props,
          dayPickerProps = _props.dayPickerProps,
          onDayChange = _props.onDayChange;

      this.setState({ month: day, value: value }, function () {
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
          var newObj = _extends({}, obj);
          newObj[modifier] = true;
          return newObj;
        }, {});
        onDayChange(day, modifiers);
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
      this.setState({ showOverlay: true });
    }

    /**
     * Hide the Day Picker overlay
     *
     * @memberof DayPickerInput
     */

  }, {
    key: 'hideDayPicker',
    value: function hideDayPicker() {
      this.setState({ showOverlay: false });
    }
  }, {
    key: 'hideAfterDayClick',
    value: function hideAfterDayClick() {
      var _this2 = this;

      if (!this.props.hideOnDayClick) {
        return;
      }
      this.hideTimeout = setTimeout(function () {
        return _this2.hideDayPicker();
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
      this.showDayPicker();
      if (this.props.inputProps.onFocus) {
        e.persist();
        this.props.inputProps.onFocus(e);
      }
    }
  }, {
    key: 'handleInputBlur',
    value: function handleInputBlur(e) {
      this.setState({
        showOverlay: this.overlayNode && this.overlayNode.contains(e.relatedTarget)
      });
      if (this.props.inputProps.onBlur) {
        e.persist();
        this.props.inputProps.onBlur(e);
      }
    }
  }, {
    key: 'handleOverlayFocus',
    value: function handleOverlayFocus(e) {
      if (this.props.keepFocus === true) {
        e.preventDefault();
        this.input.focus();
      }
    }
  }, {
    key: 'handleOverlayBlur',
    value: function handleOverlayBlur(e) {
      this.setState({
        showOverlay: this.overlayNode && this.overlayNode.contains(e.relatedTarget)
      });
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      var _props2 = this.props,
          dayPickerProps = _props2.dayPickerProps,
          format = _props2.format,
          inputProps = _props2.inputProps,
          onDayChange = _props2.onDayChange,
          parseDate = _props2.parseDate;

      if (inputProps.onChange) {
        e.persist();
        inputProps.onChange(e);
      }
      var value = e.target.value;

      if (value.trim() === '') {
        this.setState({ value: value });
        if (onDayChange) onDayChange(undefined, {});
        return;
      }
      var day = parseDate(value, format, dayPickerProps.locale);
      if (!day) {
        this.setState({ value: value });
        if (onDayChange) onDayChange(undefined, {});
        return;
      }
      this.updateState(day, value);
    }
  }, {
    key: 'handleInputKeyDown',
    value: function handleInputKeyDown(e) {
      if (e.keyCode === _keys.TAB) {
        this.hideDayPicker();
      }
      if (this.props.inputProps.onKeyDown) {
        e.persist();
        this.props.inputProps.onKeyDown(e);
      }
    }
  }, {
    key: 'handleInputKeyUp',
    value: function handleInputKeyUp(e) {
      // Hide the overlay if the ESC key is pressed
      if (e.keyCode === _keys.ESC) {
        this.hideDayPicker();
      }
      if (this.props.inputProps.onKeyUp) {
        e.persist();
        this.props.inputProps.onKeyUp(e);
      }
    }
  }, {
    key: 'handleMonthChange',
    value: function handleMonthChange(month) {
      var _this3 = this;

      this.setState({ month: month }, function () {
        if (_this3.props.dayPickerProps && _this3.props.dayPickerProps.onMonthChange) {
          _this3.props.dayPickerProps.onMonthChange(month);
        }
      });
    }
  }, {
    key: 'handleDayClick',
    value: function handleDayClick(day, modifiers, e) {
      var _this4 = this;

      var _props3 = this.props,
          clickUnselectsDay = _props3.clickUnselectsDay,
          dayPickerProps = _props3.dayPickerProps,
          onDayChange = _props3.onDayChange,
          formatDate = _props3.formatDate,
          format = _props3.format;

      if (dayPickerProps.onDayClick) {
        dayPickerProps.onDayClick(day, modifiers, e);
      }

      // Do nothing if the day is disabled
      if (modifiers.disabled) {
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
        this.setState({ value: '', selectedDays: selectedDays }, this.hideAfterDayClick);
        if (onDayChange) {
          onDayChange(undefined, modifiers);
        }
        return;
      }

      var value = formatDate(day, format, dayPickerProps.locale);
      this.setState({ value: value, month: day }, function () {
        if (onDayChange) {
          onDayChange(day, modifiers);
        }
        _this4.hideAfterDayClick();
      });
    }
  }, {
    key: 'renderOverlay',
    value: function renderOverlay() {
      var _this5 = this;

      var _props4 = this.props,
          classNames = _props4.classNames,
          dayPickerProps = _props4.dayPickerProps,
          parseDate = _props4.parseDate,
          formatDate = _props4.formatDate,
          format = _props4.format;
      var _state = this.state,
          selectedDays = _state.selectedDays,
          value = _state.value;

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
          return _this5.updateState(new Date(), formatDate(new Date(), format, dayPickerProps.locale), _this5.hideAfterDayClick);
        };
      }
      var Overlay = this.props.overlayComponent;
      return _react2.default.createElement(
        'span',
        {
          onFocus: this.handleOverlayFocus,
          ref: function ref(el) {
            return _this5.overlayNode = el;
          },
          onBlur: this.handleOverlayBlur
        },
        _react2.default.createElement(
          Overlay,
          {
            classNames: classNames,
            month: this.state.month,
            selectedDay: selectedDay,
            input: this.input
          },
          _react2.default.createElement(_DayPicker2.default, _extends({
            ref: function ref(el) {
              return _this5.daypicker = el;
            },
            onTodayButtonClick: onTodayButtonClick
          }, dayPickerProps, {
            month: this.state.month,
            selectedDays: selectedDay,
            onDayClick: this.handleDayClick,
            onMonthChange: this.handleMonthChange
          }))
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var Input = this.props.component;
      return _react2.default.createElement(
        'div',
        { className: this.props.classNames.container },
        _react2.default.createElement(Input, _extends({
          ref: function ref(el) {
            return _this6.input = el;
          },
          placeholder: this.props.placeholder
        }, this.props.inputProps, {
          value: this.state.value,
          onChange: this.handleInputChange,
          onFocus: this.handleInputFocus,
          onBlur: this.handleInputBlur,
          onKeyDown: this.handleInputKeyDown,
          onKeyUp: this.handleInputKeyUp,
          onClick: this.handleInputClick
        })),
        this.state.showOverlay && this.renderOverlay()
      );
    }
  }]);

  return DayPickerInput;
}(_react2.default.Component);

DayPickerInput.defaultProps = {
  dayPickerProps: {},
  value: '',
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
  overlayComponent: function overlayComponent(_ref) {
    var children = _ref.children,
        classNames = _ref.classNames;
    return _react2.default.createElement(
      'div',
      { className: classNames.overlayWrapper },
      _react2.default.createElement(
        'div',
        { className: classNames.overlay },
        children
      )
    );
  },
  classNames: {
    container: 'DayPickerInput',
    overlayWrapper: 'DayPickerInput-OverlayWrapper',
    overlay: 'DayPickerInput-Overlay'
  }
};
exports.default = DayPickerInput;
DayPickerInput.propTypes = process.env.NODE_ENV !== "production" ? {
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.instanceOf(Date)]),
  inputProps: _propTypes2.default.object,
  placeholder: _propTypes2.default.string,

  format: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),

  formatDate: _propTypes2.default.func,
  parseDate: _propTypes2.default.func,

  showOverlay: _propTypes2.default.bool,
  dayPickerProps: _propTypes2.default.object,
  hideOnDayClick: _propTypes2.default.bool,
  clickUnselectsDay: _propTypes2.default.bool,
  keepFocus: _propTypes2.default.bool,
  component: _propTypes2.default.any,
  overlayComponent: _propTypes2.default.any,

  classNames: _propTypes2.default.shape({
    container: _propTypes2.default.string,
    overlayWrapper: _propTypes2.default.string,
    overlay: _propTypes2.default.string.isRequired
  }),

  onDayChange: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func
} : {};
//# sourceMappingURL=DayPickerInput.js.map