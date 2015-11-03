import React from "react";
import DayPicker from "react-day-picker";
import { dateUtils } from "react-day-picker/utils";

import "react-day-picker/lib/style.css";
import "../style/SelectableDayExample.scss";

export default class Example extends React.Component {

  static displayName = "SelectableDayExample"

  state = {
    selectedDay: new Date()
  }

  handleDayClick(e, day) {
    this.setState({
      selectedDay: day
    });
  }

  render() {
    const { selectedDay } = this.state;

    // Add the `selected` modifier to the cell corresponding to the day that
    // has been clicked. The cell will have a `DayPicker-Day--selected` CSS class.
    const modifiers = {
      selected: day => dateUtils.isSameDay(selectedDay, day)
    };

    return (
      <div className="SelectableDayExample">
        <DayPicker
          numberOfMonths={2}
          enableOutsideDays={true}
          modifiers={ modifiers }
          onDayClick={ this.handleDayClick.bind(this) }
        />
        <p>
          Selected: { selectedDay.toLocaleDateString() }
        </p>
      </div>
    );
  }
}
