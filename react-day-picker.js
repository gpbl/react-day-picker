"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var React = _interopRequire(require("react"));

var moment = _interopRequire(require("moment"));

var weeks = require("./utils").weeks;


var tableStyle = { display: "table" };
var captionStyle = { display: "table-caption", textAlign: "center" };
var rowStyle = { display: "table-row" };
var cellStyle = { display: "table-cell", textAlign: "center" };

var DayPicker = React.createClass({
  displayName: "DayPicker",


  propTypes: {

    initialMonth: React.PropTypes.object, // default is current month
    modifiers: React.PropTypes.object,

    onDayTouchTap: React.PropTypes.func, // requires react-tap-event-plugin enabled
    onDayMouseEnter: React.PropTypes.func,
    onDayMouseLeave: React.PropTypes.func
  },

  getDefaultProps: function () {
    return { initialMonth: moment() };
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({ month: nextProps.initialMonth });
  },

  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.focus) this.refs["d" + this.state.focus].getDOMNode().focus();
  },

  getInitialState: function () {
    return { month: this.props.initialMonth.clone(), focus: null };
  },

  handleDayTouchTap: function (day, modifiers, e) {
    this.props.onDayTouchTap && this.props.onDayTouchTap(day, modifiers, e);
  },

  handleDayKeyUp: function (day, modifiers, e) {
    if (e.keyCode === 13 || e.keyCode === 32) this.props.onDayTouchTap && this.props.onDayTouchTap(day, modifiers, e);
  },

  handleDayMouseEnter: function (day, modifiers, e) {
    this.props.onDayMouseEnter && this.props.onDayMouseEnter(day, modifiers, e);
  },

  handleDayMouseLeave: function (day, modifiers, e) {
    this.props.onDayMouseLeave && this.props.onDayMouseLeave(day, modifiers, e);
  },

  handleDayFocus: function (day, modifiers, e) {
    var _this = this;
    this.setState({ focus: day.dayOfYear() }, function () {
      _this.props.onDayFocus && _this.props.onDayFocus(e);
    });
  },

  handleDayBlur: function (day, modifiers, e) {
    this.setState({ focus: null });
  },

  handleNextTouchTap: function (e) {
    var nextMonth = this.state.month.add(1, "month");
    this.setState({ month: nextMonth });
  },

  handlePrevTouchTap: function (e) {
    var prevMonth = this.state.month.subtract(1, "month");
    this.setState({ month: prevMonth });
  },

  getDayModifiers: function (day) {
    if (!this.props.modifiers) return "";
    var modifiers = this.props.modifiers;
    var dayModifiers = [];
    for (var modifier in modifiers) {
      var func = modifiers[modifier];
      if (func(day)) dayModifiers.push(modifier);
    }
    return dayModifiers;
  },

  render: function () {
    return React.createElement("div", {
      className: "daypicker",
      style: tableStyle
    }, this.renderToolbar(), this.renderWeekHeader(), this.renderWeeks());
  },

  renderToolbar: function () {
    return React.createElement("div", {
      className: "daypicker__toolbar",
      style: captionStyle
    }, this.renderToolbarButton("left"), this.state.month.format("MMMM YYYY"), this.renderToolbarButton("right"));
  },

  renderToolbarButton: function (position) {
    var className = "daypicker__toolbar-button daypicker__toolbar-button--" + position;
    var handler = position === "left" ? this.handlePrevTouchTap : this.handleNextTouchTap;

    return React.createElement("button", {
      ref: "btn-" + position,
      className: className,
      style: { float: position },
      onTouchTap: handler
    });
  },

  renderWeeks: function () {
    var _this2 = this;
    return weeks(this.state.month).map(function (week, i) {
      return React.createElement("div", {
        key: "w" + i,
        className: "daypicker__week",
        style: rowStyle
      }, _this2.renderDays(week));
    });
  },

  renderWeekHeader: function () {
    var header = [];
    for (var i = 0; i < 7; i++) {
      header.push(React.createElement("div", {
        key: "wh_" + i,
        className: "daypicker__header--day",
        style: cellStyle
      }, moment().weekday(i).format("dd")));
    }
    return React.createElement("div", {
      className: "daypicker__header",
      style: rowStyle
    }, header);
  },

  renderDays: function (week) {
    var _this3 = this;
    var firstDay = week[0];
    var lastDay = week[week.length - 1];

    var days = week.map(function (day) {
      return _this3.renderDay(day);
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

  renderDay: function (day, otherMonth) {
    var modifiers = this.getDayModifiers(day);

    var className = "daypicker__day";
    if (otherMonth) className += " daypicker__day--other-month";
    className += modifiers.map(function (mod) {
      return " daypicker__day--" + mod;
    }).join("");

    return React.createElement("div", {
      tabIndex: "0",
      ref: "d" + day.dayOfYear(),
      key: "d" + day.dayOfYear(),
      className: className,
      style: cellStyle,
      onMouseEnter: this.handleDayMouseEnter.bind(this, day, modifiers),
      onMouseLeave: this.handleDayMouseLeave.bind(this, day, modifiers),
      onKeyUp: this.handleDayKeyUp.bind(this, day, modifiers),
      onTouchTap: this.handleDayTouchTap.bind(this, day, modifiers),
      onBlur: this.handleDayBlur.bind(this, day, modifiers),
      onFocus: this.handleDayFocus.bind(this, day, modifiers)
    }, day.format("D"));
  }

});

module.exports = DayPicker;
