import React from "react";
import moment from "moment";
import DayPicker from "react-day-picker";

import { isPastDay, isSameDay } from "./Utils";

import "./style/DayPicker.scss";

class InputFieldExample extends React.Component {

  static displayName = "InputFieldExample"

  constructor(props) {
    super(props);
    this.state = {
      value: moment().format("L"),
      month: new Date()
    };
  }

  render() {
    const { value, month } = this.state;

    const selectedDay = moment(value, "L").toDate();

    const modifiers = {
      disabled: isPastDay,
      selected: (day) => isSameDay(selectedDay, day)
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

    // Change the current month only if the value entered by
    // the user is a valid date according to the `L` format
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
