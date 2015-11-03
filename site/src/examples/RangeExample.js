var React = require("react");
var moment = require("moment");
var DayPicker = require("react-day-picker");

// enable touch-tap events
var reactTapEvent = require("react-tap-event-plugin");
reactTapEvent();

var { isBetween, isSameDay } = require("../utils/DateUtils");

require("react-day-picker/lib/style.css");
require("../style/RangeExample.scss");

module.exports = React.createClass({

  displayName: "RangeExample",

  getInitialState() {
    return {
      from: null,
      to: null
    };
  },

  handleDayTouchTap(e, day) {
    let { from, to } = this.state;

    if (!from) {
      from = day;
    }
    else if (from && to && isSameDay(from, to) && isSameDay(day, from)) {
      // reset when selecting again the first day
      from = null;
      to = null;
    }
    else if (to && day < from) {
      from = day;
    }
    else if (to && isSameDay(day, to)) {
      from = day;
      to = day;
    }
    else {
      to = day;
      if (to < from) {
        to = from;
        from = day;
      }
    }

    this.setState({
      from: from,
      to: to
    });
  },

  handleResetTouchTap(e) {
    e.preventDefault();
    this.setState({
      from: null,
      to: null
    });
  },

  render() {
    var { from, to } = this.state;

    var modifiers = {
      "selected": (day) => {
        return (from && isSameDay(day, from)) ||
          (to && isSameDay(day, to)) ||
          (from && to && isBetween(day, from, to));
      }
    };

    return (
      <div className="RangeExample">
        { !from && !to && <p>Please select the first day.</p> }
        { from && !to && <p>Please select the last day.</p> }
        { from && to &&
          <p>You chose from {
              moment(from).format("L") } to {
              moment(to).format("L") }. <a
              href="#" onTouchTap={ this.handleResetTouchTap }>Reset</a>
          </p>
        }

        <DayPicker
          ref="daypicker"
          numberOfMonths={ 2 }
          modifiers={ modifiers }
          onDayTouchTap={ this.handleDayTouchTap }
        />
      </div>
    );
  }

});
