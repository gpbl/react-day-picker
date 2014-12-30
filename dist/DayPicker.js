"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

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
    onDayMouseLeave: React.PropTypes.func

  },

  getDefaultProps: function () {
    return { initialMonth: moment(), enableOutsideDays: false };
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({ month: nextProps.initialMonth });
  },

  getInitialState: function () {
    return { month: this.props.initialMonth.clone() };
  },

  handleDayTouchTap: function (day, modifiers, e) {
    this.props.onDayTouchTap && this.props.onDayTouchTap(day, modifiers, e);
  },

  handleDayClick: function (day, modifiers, e) {
    this.props.onDayClick && this.props.onDayClick(day, modifiers, e);
  },

  handleDayMouseEnter: function (day, modifiers, e) {
    this.props.onDayMouseEnter && this.props.onDayMouseEnter(day, modifiers, e);
  },

  handleDayMouseLeave: function (day, modifiers, e) {
    this.props.onDayMouseLeave && this.props.onDayMouseLeave(day, modifiers, e);
  },

  handleNextTouchTap: function (e) {
    this.setState({ month: this.state.month.add(1, "month") });
  },

  handlePrevTouchTap: function (e) {
    this.setState({ month: this.state.month.subtract(1, "month") });
  },

  getModifiersForDay: function (day) {
    var dayModifiers = [];
    if (this.props.modifiers) {
      var modifiers = this.props.modifiers;
      for (var modifier in modifiers) {
        var func = modifiers[modifier];
        if (func(day)) dayModifiers.push(modifier);
      }
    }
    return dayModifiers;
  },

  render: function () {
    return React.createElement("table", {
      className: "daypicker"
    }, React.createElement("caption", {
      className: "daypicker__caption"
    }, this.renderNavButton("left"), this.state.month.format("MMMM YYYY"), this.renderNavButton("right")), React.createElement("thead", null, this.renderWeekHeader()), React.createElement("tbody", null, this.renderWeeks()));
  },

  renderNavButton: function (position) {
    var className = "daypicker__nav daypicker__nav--" + position;
    var handler = position === "left" ? this.handlePrevTouchTap : this.handleNextTouchTap;

    return React.createElement("span", {
      ref: "btn-" + position,
      className: className,
      style: { float: position },
      onTouchTap: handler
    });
  },

  renderWeeks: function () {
    var _this = this;
    return weeks(this.state.month).map(function (week, i) {
      return React.createElement("tr", {
        key: "w" + i,
        className: "daypicker__week"
      }, _this.renderDays(week));
    });
  },

  renderWeekHeader: function () {
    var header = [];
    for (var i = 0; i < 7; i++) {
      header.push(React.createElement("th", {
        key: "wh_" + i,
        className: "daypicker__weekday"
      }, moment().weekday(i).format("dd")));
    }
    return header;
  },

  renderDays: function (week) {
    var _this2 = this;
    var firstDay = week[0];
    var lastDay = week[week.length - 1];

    var days = week.map(function (day) {
      return _this2.renderDay(day);
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

  renderDay: function (day, outside) {
    var modifiers = this.getModifiersForDay(day);
    var doy = day.dayOfYear();
    var key = "d" + doy;
    var className = "daypicker__day";
    if (outside) className += " daypicker__day--outside";
    className += modifiers.map(function (mod) {
      return " daypicker__day--" + mod;
    }).join("");

    if (outside && !this.props.enableOutsideDays) return React.createElement("td", {
      className: className,
      ref: key,
      key: key
    });else return React.createElement("td", {
      ref: key,
      key: key,
      className: className,
      onMouseEnter: this.handleDayMouseEnter.bind(this, day, modifiers),
      onMouseLeave: this.handleDayMouseLeave.bind(this, day, modifiers),
      onTouchTap: this.handleDayTouchTap.bind(this, day, modifiers),
      onClick: this.handleDayClick.bind(this, day, modifiers)
    }, day.format("D"));
  }

});

module.exports = DayPicker;