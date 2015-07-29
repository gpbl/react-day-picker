import React from "react";
import DayPicker from "react-day-picker";
import { isSameDay } from "../utils/DateUtils";

import "../style/DayPicker.scss";

class SelectableDayExample extends React.Component {

  static displayName = "SelectableDayExample"

  constructor() {
    super();
    this.state = {
      selectedDay: new Date()
    };
  }

  render() {
    const { selectedDay } = this.state;

    // Add the `selected` modifier to the cell corresponding to the day that
    // has been clicked. The cell will have a `DayPicker-Day--selected` CSS class.
    const modifiers = {
      "selected": (day) => isSameDay(selectedDay, day)
    };

    return (
      <div>
        <DayPicker
          numberOfMonths={2}
          enableOutsideDays={true}
          modifiers={ modifiers }
          onDayClick={ ::this.handleDayClick }
        />
        <p>
          Selected: { selectedDay.toLocaleDateString() }
        </p>
      </div>
    );
  }

  handleDayClick(e, day) {
    this.setState({
      selectedDay: day
    });
  }

}

export default SelectableDayExample;
