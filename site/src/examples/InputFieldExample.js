var React = require("react");
var moment = require("moment");
var DayPicker = require("react-day-picker");

// enable touch-tap events
var reactTapEvent = require("react-tap-event-plugin");
reactTapEvent();

var { isPastDay, isSameDay } = require("../utils/DateUtils");

require("react-day-picker/lib/style.css");

module.exports = React.createClass({

  displayName: "InputFieldExample",

  getInitialState() {
    var today = new Date();
    return {
      // The value of the input field
      value: moment(today).format("L"),
      // The month to display in the calendar
      month: today
    };
  },

  handleInputChange(e) {

    var { value } = e.target;
    let { month } = this.state;

    // Change the current month only if the value entered by the user is a valid
    // date according to the `L` format
    if (moment(value, "L", true).isValid()) {
      month = moment(value, "L").toDate();
    }

    this.setState({
      value: value,
      month: month
    }, this.showCurrentDate);
  },

  handleDayTouchTap(e, day, modifiers) {
    if (modifiers.indexOf("disabled") > -1) {
      return;
    }
    this.setState({
      value: moment(day).format("L"),
      month: day
    });
  },

  showCurrentDate() {
    this.refs.daypicker.showMonth(this.state.month);
  },

  render() {
    var { value, month } = this.state;
    var selectedDay = moment(value, "L", true).toDate();

    var modifiers = {

      // Add the `disabled` modifier to days in the past. The day cell will have
      // a `DayPicker-Day--disabled` CSS class
      "disabled": isPastDay,

      // Add the `selected` modifier to days corresponding to the day inserted
      // in the input field. The day cell will have a `DayPicker-Day--selected`
      // CSS class
      "selected": (day) => isSameDay(selectedDay, day)
    };

    return (
      <div>
        <p>
          <input
            ref="input"
            type="text"
            value={ value }
            placeholder="YYYY-MM-DD"
            onChange={ this.handleInputChange }
            onFocus={ this.showCurrentDate } />
        </p>
        <DayPicker
          ref="daypicker"
          enableOutsideDays={true}
          initialMonth={ month }
          numberOfMonths={ 1 }
          modifiers={ modifiers }
          onDayTouchTap={ this.handleDayTouchTap } />

      </div>
    );
  }


});
