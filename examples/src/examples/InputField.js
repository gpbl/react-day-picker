import React from "react";
import moment from "moment";

import DayPicker, { DateUtils } from "react-day-picker";

import "react-day-picker/lib/style.css";

export default class InputField extends React.Component {

  state = {
    value: moment().format("L"), // The value of the input field
    month: new Date() // The month to display in the calendar
  }

  handleInputChange(e) {

    const { value } = e.target;
    let { month } = this.state;

    // Change the current month only if the value entered by the user is a valid
    // date, according to the `L` format
    if (moment(value, "L", true).isValid()) {
      month = moment(value, "L").toDate();
    }

    this.setState({ value, month }, this.showCurrentDate);

  }

  handleDayClick(e, day, modifiers) {
    if (modifiers.indexOf("disabled") > -1) {
      return;
    }
    this.setState({
      value: moment(day).format("L"),
      month: day
    });
  }

  showCurrentDate() {
    this.refs.daypicker.showMonth(this.state.month);
  }

  render() {
    const selectedDay = moment(this.state.value, "L", true).toDate();

    return (
      <div>

        <p>
          <input
            ref="input"
            type="text"
            value={ this.state.value }
            placeholder="YYYY-MM-DD"
            onChange={ this.handleInputChange.bind(this) }
            onFocus={ this.showCurrentDate.bind(this) } />
        </p>

        <DayPicker
          ref="daypicker"
          enableOutsideDays
          initialMonth={ this.state.month }
          modifiers={{
            disabled: DateUtils.isPastDay,
            selected: day => DateUtils.isSameDay(selectedDay, day)
          }}
          onDayClick={ this.handleDayClick.bind(this) }
        />

      </div>
    );
  }

}
