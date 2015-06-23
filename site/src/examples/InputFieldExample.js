import React from "react";
import moment from "moment";
import DayPicker from "react-day-picker";

import { isPastDay, isSameDay } from "../utils/DateUtils";

import "../style/DayPicker.scss";

class InputFieldExample extends React.Component {

  static displayName = "InputFieldExample"

  constructor(props) {
    super(props);
    const today = new Date();
    this.state = {
      // The value of the input field
      value: moment(today).format("L"),
      // The month to display in the calendar
      month: today
    };
  }

  render() {
    const { value, month } = this.state;

    const selectedDay = moment(value, "L", true).toDate();

    const modifiers = {

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
            onChange={ ::this.handleInputChange }
            onFocus={ ::this.showCurrentDate } />
        </p>
        <DayPicker
          ref="daypicker"
          enableOutsideDays={true}
          initialMonth={ month }
          numberOfMonths={ 1 }
          modifiers={ modifiers }
          onDayTouchTap={ ::this.handleDayTouchTap } />

      </div>
    );
  }

  handleInputChange(e) {

    const { value } = e.target;
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
  }

  handleDayTouchTap(e, day, modifiers) {
    if (modifiers.indexOf("disabled") > -1 ||
        modifiers.indexOf("outside") > -1) {
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


}

export default InputFieldExample;
