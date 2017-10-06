'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_TIMEOUT = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _DayPicker = require('./DayPicker');

var _DayPicker2 = _interopRequireDefault(_DayPicker);

var _ModifiersUtils = require('./ModifiersUtils');

var _keys = require('./keys');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line import/no-extraneous-dependencies

var HIDE_TIMEOUT = exports.HIDE_TIMEOUT = 100;

function getStateFromProps(props) {
  var month = void 0;
  if (props.value) {
    var m = (0, _moment2.default)(props.value, props.format, true);
    if (m.isValid()) {
      month = m.toDate();
    }
  } else {
    month = props.dayPickerProps.initialMonth || props.dayPickerProps.month || new Date();
  }

  return {
    value: props.value,
    month: month
  };
}

var DayPickerInput = function (_React$Component) {
  _inherits(DayPickerInput, _React$Component);

  function DayPickerInput(props) {
    _classCallCheck(this, DayPickerInput);

    var _this = _possibleConstructorReturn(this, (DayPickerInput.__proto__ || Object.getPrototypeOf(DayPickerInput)).call(this, props));

    _this.input = null;
    _this.daypicker = null;
    _this.clickedInside = false;
    _this.clickTimeout = null;
    _this.hideTimeout = null;

    _this.hideAfterDayClick = function () {
      if (!_this.props.hideOnDayClick) {
        return;
      }
      _this.hideTimeout = setTimeout(function () {
        return _this.hideDayPicker();
      }, HIDE_TIMEOUT // give a timeout to show the clicked day
      );
    };

    _this.handleContainerMouseDown = function () {
      _this.clickedInside = true;
      // The input's onBlur method is called from a queue right after onMouseDown event.
      // setTimeout adds another callback in the queue, but is called later than onBlur event
      _this.clickTimeout = setTimeout(function () {
        _this.clickedInside = false;
      }, 0);
    };

    _this.handleClick = function (e) {
      _this.showDayPicker();
      if (_this.props.onClick) {
        e.persist();
        _this.props.onClick(e);
      }
    };

    _this.handleFocus = function (e) {
      _this.showDayPicker();
      if (_this.props.onFocus) {
        e.persist();
        _this.props.onFocus(e);
      }
    };

    _this.handleBlur = function (e) {
      _this.setState({
        showOverlay: _this.clickedInside
      });

      // Force input's focus if blur event was caused
      // by clicking inside the overlay
      if (_this.clickedInside) {
        _this.input.focus();
      }

      if (_this.props.onBlur) {
        e.persist();
        _this.props.onBlur(e);
      }
    };

    _this.handleChange = function (e) {
      var value = e.target.value;
      var _this$props = _this.props,
          format = _this$props.format,
          dayPickerProps = _this$props.dayPickerProps,
          onDayChange = _this$props.onDayChange,
          onChange = _this$props.onChange;

      var m = (0, _moment2.default)(value, format, true);

      if (onChange) {
        e.persist();
        onChange(e);
      }

      if (value.trim() === '') {
        _this.setState({ value: value });
        if (_this.props.onDayChange) {
          _this.props.onDayChange(undefined, {});
        }
        return;
      }

      if (!m.isValid()) {
        _this.setState({ value: value });
        return;
      }

      var day = m.toDate();
      _this.setState({ month: day, value: value }, function () {
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
        _this.props.onDayChange(m, modifiers);
      });
    };

    _this.handleOnKeyUp = function (e) {
      _this.setState({
        showOverlay: e.keyCode !== _keys.ESC
      });
      if (_this.props.onKeyUp) {
        e.persist();
        _this.props.onKeyUp(e);
      }
    };

    _this.handleDayClick = function (day, modifiers, e) {
      if (_this.props.dayPickerProps.onDayClick) {
        _this.props.dayPickerProps.onDayClick(day, modifiers, e);
      }

      if (modifiers.disabled) {
        // Do nothing if the day is disabled
        return;
      }
      if (modifiers.selected && _this.props.clickUnselectsDay) {
        // Unselect the day
        _this.setState({ value: '' }, _this.hideAfterDayClick);
        if (_this.props.onDayChange) {
          _this.props.onDayChange(undefined, modifiers);
        }
        return;
      }

      var format = _this.props.format;

      var m = (0, _moment2.default)(day);
      _this.setState({
        value: m.format(typeof format === 'string' ? format : format[0]),
        month: day
      }, function () {
        if (_this.props.onDayChange) {
          _this.props.onDayChange(m, modifiers);
        }
        _this.hideAfterDayClick();
      });
    };

    _this.state = getStateFromProps(props);
    _this.state.showOverlay = false;
    return _this;
  }

  _createClass(DayPickerInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props,
          dayPickerProps = _props.dayPickerProps,
          value = _props.value;
      var nextDayPickerProps = nextProps.dayPickerProps,
          nextValue = nextProps.value;


      var hasDifferentValue = nextValue !== value;

      var willUpdateDayPickerMonth = nextDayPickerProps.month && dayPickerProps.month;

      var newMonthProp = nextDayPickerProps.month && !dayPickerProps.month;

      var shouldDisplayAnotherMonth = newMonthProp || willUpdateDayPickerMonth && (nextDayPickerProps.month.getFullYear() !== dayPickerProps.month.getFullYear() || nextDayPickerProps.month.getMonth() !== dayPickerProps.month.getMonth());

      if (hasDifferentValue && !shouldDisplayAnotherMonth) {
        this.setState(getStateFromProps(nextProps));
      } else if (shouldDisplayAnotherMonth) {
        this.setState({ month: nextDayPickerProps.month });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.clickTimeout);
      clearTimeout(this.hideTimeout);
    }
  }, {
    key: 'showDayPicker',


    /**
     * Show the Day Picker overlay.
     * 
     * @memberof DayPickerInput
     */
    value: function showDayPicker() {
      this.setState({
        showOverlay: true
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
      this.setState({
        showOverlay: false
      });
    }
  }, {
    key: 'renderOverlay',
    value: function renderOverlay() {
      var _this2 = this;

      var selectedDay = void 0;
      if (this.state.value) {
        var m = (0, _moment2.default)(this.state.value, this.props.format, true);
        if (m.isValid()) {
          selectedDay = m.toDate();
        }
      }

      return _react2.default.createElement(
        'div',
        { className: this.props.classNames.overlayWrapper },
        _react2.default.createElement(
          'div',
          { className: this.props.classNames.overlay },
          _react2.default.createElement(_DayPicker2.default, _extends({
            ref: function ref(el) {
              return _this2.daypicker = el;
            },
            fixedWeeks: true
          }, this.props.dayPickerProps, {
            month: this.state.month,
            selectedDays: selectedDay,
            onDayClick: this.handleDayClick,
            numberOfMonths: 1
          }))
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var inputProps = _extends({}, this.props);
      delete inputProps.component;
      delete inputProps.dayPickerProps;
      delete inputProps.format;
      delete inputProps.clickUnselectsDay;
      delete inputProps.hideOnDayClick;
      delete inputProps.onDayChange;
      delete inputProps.classNames;
      return _react2.default.createElement(
        'div',
        {
          className: this.props.classNames.container,
          onMouseDown: this.handleContainerMouseDown
        },
        _react2.default.createElement(this.props.component, _extends({
          ref: function ref(el) {
            return _this3.input = el;
          }
        }, inputProps, {
          value: this.state.value,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onKeyUp: this.handleOnKeyUp,
          onClick: this.handleClick
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
  format: 'L',
  hideOnDayClick: true,
  clickUnselectsDay: false,
  component: 'input',
  classNames: {
    container: 'DayPickerInput',
    overlayWrapper: 'DayPickerInput-OverlayWrapper',
    overlay: 'DayPickerInput-Overlay'
  }
};
exports.default = DayPickerInput;
DayPickerInput.propTypes = process.env.NODE_ENV !== "production" ? {
  // eslint-disable-next-line react/no-unused-prop-types
  value: _propTypes2.default.string,

  format: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.string]).isRequired,

  dayPickerProps: _propTypes2.default.object,
  hideOnDayClick: _propTypes2.default.bool,
  clickUnselectsDay: _propTypes2.default.bool,
  component: _propTypes2.default.any,

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