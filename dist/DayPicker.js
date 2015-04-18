'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React$Component$PropTypes = require('react');

var _React$Component$PropTypes2 = _interopRequireWildcard(_React$Component$PropTypes);

var _moment = require('moment');

var _moment2 = _interopRequireWildcard(_moment);

var _weeks = require('./CalendarUtils');

var DayPicker = (function (_Component) {
  function DayPicker(props) {
    _classCallCheck(this, DayPicker);

    _get(Object.getPrototypeOf(DayPicker.prototype), 'constructor', this).call(this, props);
    this.state = {
      month: this.props.initialMonth.clone()
    };
  }

  _inherits(DayPicker, _Component);

  _createClass(DayPicker, [{
    key: 'handleDayTouchTap',
    value: function handleDayTouchTap(day, modifiers, e) {
      if (this.props.onDayTouchTap) {
        this.props.onDayTouchTap(day, modifiers, e);
      }
    }
  }, {
    key: 'handleDayClick',
    value: function handleDayClick(day, modifiers, e) {
      if (this.props.onDayClick) {
        this.props.onDayClick(day, modifiers, e);
      }
    }
  }, {
    key: 'handleDayMouseEnter',
    value: function handleDayMouseEnter(day, modifiers, e) {
      if (this.props.onDayMouseEnter) {
        this.props.onDayMouseEnter(day, modifiers, e);
      }
    }
  }, {
    key: 'handleDayMouseLeave',
    value: function handleDayMouseLeave(day, modifiers, e) {
      if (this.props.onDayMouseLeave) {
        this.props.onDayMouseLeave(day, modifiers, e);
      }
    }
  }, {
    key: 'handleNextMonthClick',
    value: function handleNextMonthClick(e) {
      var _this = this;

      e.persist();
      var month = this.state.month;

      var nextMonth = month.clone().add(1, 'month');
      this.setState({ month: nextMonth }, function () {
        if (_this.props.onNextMonthClick) {
          _this.props.onNextMonthClick(_this.state.month, e);
        }
      });
    }
  }, {
    key: 'handlePrevMonthClick',
    value: function handlePrevMonthClick(e) {
      var _this2 = this;

      e.persist();
      var month = this.state.month;

      var prevMonth = month.clone().subtract(1, 'month');
      this.setState({ month: prevMonth }, function () {
        if (_this2.props.onPrevMonthClick) {
          _this2.props.onPrevMonthClick(_this2.state.month, e);
        }
      });
    }
  }, {
    key: 'getModifiersForDay',
    value: function getModifiersForDay(day) {
      var modifiers = this.props.modifiers;

      var dayModifiers = [];

      if (modifiers) {
        for (var modifier in modifiers) {
          var func = modifiers[modifier];

          if (func(day)) {
            dayModifiers.push(modifier);
          }
        }
      }

      return dayModifiers;
    }
  }, {
    key: 'showMonth',
    value: function showMonth(month) {
      this.setState({ month: month });
    }
  }, {
    key: 'render',
    value: function render() {
      var month = this.state.month;

      var months = [];
      for (var i = 0; i < this.props.numberOfMonths; i++) {
        months.push(this.renderMonth(month, i));
        month = month.clone().add(1, 'month');
      }

      return _React$Component$PropTypes2['default'].createElement(
        'div',
        null,
        months
      );
    }
  }, {
    key: 'renderMonth',
    value: function renderMonth(month, monthIndex) {
      var isFirstMonth = month === this.state.month;
      var isLastMonth = monthIndex === this.props.numberOfMonths - 1;
      return _React$Component$PropTypes2['default'].createElement(
        'table',
        { key: monthIndex, className: 'DayPicker' },
        _React$Component$PropTypes2['default'].createElement(
          'caption',
          { className: 'DayPicker-caption' },
          isFirstMonth && this.renderNavButton('left'),
          month.format('MMMM YYYY'),
          isLastMonth && this.renderNavButton('right')
        ),
        _React$Component$PropTypes2['default'].createElement(
          'thead',
          null,
          this.renderWeekHeader()
        ),
        _React$Component$PropTypes2['default'].createElement(
          'tbody',
          null,
          this.renderWeeks(month)
        )
      );
    }
  }, {
    key: 'renderNavButton',
    value: function renderNavButton(position) {
      var className = 'DayPicker-nav DayPicker-nav--' + position;
      var handler = position === 'left' ? this.handlePrevMonthClick : this.handleNextMonthClick;

      return _React$Component$PropTypes2['default'].createElement('span', { ref: 'btn-' + position, className: className,
        style: { float: position }, onClick: handler.bind(this) });
    }
  }, {
    key: 'renderWeeks',
    value: function renderWeeks(month) {
      var _this3 = this;

      return _weeks.weeks(month).map(function (week, i) {
        return _React$Component$PropTypes2['default'].createElement(
          'tr',
          { key: i, className: 'DayPicker-week' },
          _this3.renderDays(week)
        );
      });
    }
  }, {
    key: 'renderWeekHeader',
    value: function renderWeekHeader() {
      var header = [];
      for (var i = 0; i < 7; i++) {
        header.push(_React$Component$PropTypes2['default'].createElement(
          'th',
          { key: i, className: 'DayPicker-weekday' },
          _moment2['default']().weekday(i).format('dd')
        ));
      }

      return header;
    }
  }, {
    key: 'renderDays',
    value: function renderDays(week) {
      var _this4 = this;

      var firstDay = week[0];
      var lastDay = week[week.length - 1];

      var days = week.map(function (day) {
        return _this4.renderDay(day);
      });

      // days belonging to the previous month
      for (var i = 0; i < firstDay.weekday(); i++) {
        var prevDay = firstDay.clone().subtract(i + 1, 'day');
        days.unshift(this.renderDay(prevDay, true));
      }

      // days belonging to the next month
      for (var j = lastDay.weekday() + 1, count = 1; j < 7; j++, count++) {
        var nextDay = lastDay.clone().add(count, 'day');
        days.push(this.renderDay(nextDay, true));
      }

      return days;
    }
  }, {
    key: 'renderDay',
    value: function renderDay(day, outside) {
      var key = '' + day.dayOfYear();
      var className = 'DayPicker-day';

      if (outside) {
        className += ' DayPicker-day--outside';
      }

      if (outside && !this.props.enableOutsideDays) {
        return _React$Component$PropTypes2['default'].createElement('td', { className: className, ref: key, key: key });
      } else {
        var modifiers = this.getModifiersForDay(day);
        if (outside) {
          modifiers.push('outside');
        }
        className += modifiers.map(function (mod) {
          return ' DayPicker-day--' + mod;
        }).join('');
        return _React$Component$PropTypes2['default'].createElement(
          'td',
          { ref: key, key: key,
            className: className,
            onMouseEnter: this.handleDayMouseEnter.bind(this, day, modifiers),
            onMouseLeave: this.handleDayMouseLeave.bind(this, day, modifiers),
            onTouchTap: this.handleDayTouchTap.bind(this, day, modifiers),
            onClick: this.handleDayClick.bind(this, day, modifiers) },
          day.format('D')
        );
      }
    }
  }], [{
    key: 'propTypes',
    value: {

      enableOutsideDays: _React$Component$PropTypes.PropTypes.bool,

      // default is current month
      initialMonth: _React$Component$PropTypes.PropTypes.object,

      // default is 1
      numberOfMonths: _React$Component$PropTypes.PropTypes.number,

      modifiers: _React$Component$PropTypes.PropTypes.object,

      onDayClick: _React$Component$PropTypes.PropTypes.func,

      // requires react-tap-event-plugin
      onDayTouchTap: _React$Component$PropTypes.PropTypes.func,

      onDayMouseEnter: _React$Component$PropTypes.PropTypes.func,
      onDayMouseLeave: _React$Component$PropTypes.PropTypes.func,

      onNextMonthClick: _React$Component$PropTypes.PropTypes.func,
      onPrevMonthClick: _React$Component$PropTypes.PropTypes.func

    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      initialMonth: _moment2['default'](),
      numberOfMonths: 1,
      enableOutsideDays: false
    },
    enumerable: true
  }]);

  return DayPicker;
})(_React$Component$PropTypes.Component);

exports['default'] = DayPicker;
module.exports = exports['default'];