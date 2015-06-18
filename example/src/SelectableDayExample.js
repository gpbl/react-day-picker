import React from "react";
import DayPicker from "react-day-picker";
import { isSameDay } from "./Utils";

import "./style/DayPicker.scss";

class SelectableDayExample extends React.Component {

  static displayName = "SelectableDayExample"

  constructor() {
    super();
    this.state = { selectedDay: new Date() };
  }

  render() {
    const { selectedDay } = this.state;

    const modifiers = {
      selected: (day) => isSameDay(selectedDay, day)
    };

    return (
      <div>
        <DayPicker modifiers={ modifiers } onDayClick={ ::this.handleDayClick } />
        <p>
          Selected: { selectedDay.toLocaleDateString() }
        </p>
      </div>
    );
  }

  handleDayClick(e, day) {
    this.setState({ selectedDay: day });
  }

}

export default SelectableDayExample;
