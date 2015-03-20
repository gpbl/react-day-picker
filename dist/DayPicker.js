"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var moment = _interopRequire(require("moment"));

var weeks = require("./utils").weeks;

var DayPicker = React.createClass({
  displayName: "DayPicker",

  propTypes: {

    enableOutsideDays: React.PropTypes.bool,

    initialMonth: React.PropTypes.object, // default is current month
    modifiers: React.PropTypes.object,

    onDayClick: React.PropTypes.func,
    onDayTouchTap: React.PropTypes.func, // requires react-tap-event-plugin
    onDayMouseEnter: React.PropTypes.func,
    onDayMouseLeave: React.PropTypes.func,

    onNextMonthClick: React.PropTypes.func,
    onPrevMonthClick: React.PropTypes.func

  },

  getDefaultProps: function getDefaultProps() {
    return { initialMonth: moment(), enableOutsideDays: false };
  },

  getInitialState: function getInitialState() {
    return { month: this.props.initialMonth.clone() };
  },

  handleDayTouchTap: function handleDayTouchTap(day, modifiers, e) {
    if (this.props.onDayTouchTap) {
      this.props.onDayTouchTap(day, modifiers, e);
    }
  },

  handleDayClick: function handleDayClick(day, modifiers, e) {
    if (this.props.onDayClick) {
      this.props.onDayClick(day, modifiers, e);
    }
  },

  handleDayMouseEnter: function handleDayMouseEnter(day, modifiers, e) {
    if (this.props.onDayMouseEnter) {
      this.props.onDayMouseEnter(day, modifiers, e);
    }
  },

  handleDayMouseLeave: function handleDayMouseLeave(day, modifiers, e) {
    if (this.props.onDayMouseLeave) {
      this.props.onDayMouseLeave(day, modifiers, e);
    }
  },

  handleNextMonthClick: function handleNextMonthClick(e) {
    var _this = this;

    e.preventDefault();
    e.stopPropagation();
    var month = this.state.month;

    var nextMonth = month.clone().add(1, "month");
    this.setState({ month: nextMonth }, function () {
      if (_this.props.onNextMonthClick) {
        _this.props.onNextMonthClick(_this.state.month);
      }
    });
  },

  handlePrevMonthClick: function handlePrevMonthClick(e) {
    var _this = this;

    e.preventDefault();
    e.stopPropagation();
    var month = this.state.month;

    var prevMonth = month.clone().subtract(1, "month");
    this.setState({ month: prevMonth }, function () {
      if (_this.props.onPrevMonthClick) {
        _this.props.onPrevMonthClick(_this.state.month);
      }
    });
  },

  getModifiersForDay: function getModifiersForDay(day) {
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
  },

  showMonth: function showMonth(month) {
    this.setState({ month: month });
  },

  render: function render() {
    var month = this.state.month;

    return React.createElement(
      "table",
      { className: "DayPicker" },
      React.createElement(
        "caption",
        { className: "DayPicker-caption" },
        this.renderNavButton("left"),
        month.format("MMMM YYYY"),
        this.renderNavButton("right")
      ),
      React.createElement(
        "thead",
        null,
        this.renderWeekHeader()
      ),
      React.createElement(
        "tbody",
        null,
        this.renderWeeks()
      )
    );
  },

  renderNavButton: function renderNavButton(position) {
    var className = "DayPicker-nav DayPicker-nav--" + position;
    var handler = position === "left" ? this.handlePrevMonthClick : this.handleNextMonthClick;

    return React.createElement("span", { ref: "btn-" + position, className: className,
      style: { float: position }, onClick: handler });
  },

  renderWeeks: function renderWeeks() {
    var _this = this;

    return weeks(this.state.month).map(function (week, i) {
      return React.createElement(
        "tr",
        { key: i, className: "DayPicker-week" },
        _this.renderDays(week)
      );
    });
  },

  renderWeekHeader: function renderWeekHeader() {
    var header = [];
    for (var i = 0; i < 7; i++) {
      header.push(React.createElement(
        "th",
        { key: i, className: "DayPicker-weekday" },
        moment().weekday(i).format("dd")
      ));
    }
    return header;
  },

  renderDays: function renderDays(week) {
    var _this = this;

    var firstDay = week[0];
    var lastDay = week[week.length - 1];

    var days = week.map(function (day) {
      return _this.renderDay(day);
    });

    // days belonging to the previous month
    for (var i = 0; i < firstDay.weekday(); i++) {
      var prevDay = firstDay.clone().subtract(i + 1, "day");
      days.unshift(this.renderDay(prevDay, true));
    }

    // days belonging to the next month
    for (var j = lastDay.weekday() + 1, count = 1; j < 7; j++, count++) {
      var nextDay = lastDay.clone().add(count, "day");
      days.push(this.renderDay(nextDay, true));
    }

    return days;
  },

  renderDay: function renderDay(day, outside) {
    var key = "" + day.dayOfYear();
    var className = "DayPicker-day";
    if (outside) {
      className += " DayPicker-day--outside";
    }
    if (outside && !this.props.enableOutsideDays) {
      return React.createElement("td", { className: className, ref: key, key: key });
    } else {
      var modifiers = this.getModifiersForDay(day);
      className += modifiers.map(function (mod) {
        return " DayPicker-day--" + mod;
      }).join("");
      return React.createElement(
        "td",
        { ref: key, key: key,
          className: className,
          onMouseEnter: this.handleDayMouseEnter.bind(this, day, modifiers),
          onMouseLeave: this.handleDayMouseLeave.bind(this, day, modifiers),
          onTouchTap: this.handleDayTouchTap.bind(this, day, modifiers),
          onClick: this.handleDayClick.bind(this, day, modifiers) },
        day.format("D")
      );
    }
  }

});

module.exports = DayPicker;