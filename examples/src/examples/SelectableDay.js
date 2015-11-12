import React from "react";
import DayPicker from "react-day-picker";
import { dateUtils } from "react-day-picker/utils";

import "react-day-picker/lib/style.css";

export default class SelectableDay extends React.Component {

  state = {
    selectedDay: null
  }

  handleDayClick(e, day, modifiers) {
    if (modifiers.indexOf("selected") > -1) {
      this.setState({
        selectedDay: null
      })
    }
    else {
      this.setState({
        selectedDay: day
      });
    }
  }

  render() {
    const { selectedDay } = this.state;

    // Add the `selected` modifier to the cell of the clicked day
    const modifiers = {
      selected: day => dateUtils.isSameDay(selectedDay, day)
    };

    return (
      <div className="SelectableDayExample">
        <DayPicker
          modifiers={ modifiers }
          onDayClick={ this.handleDayClick.bind(this) }
        />
        <p>
          Selected: { selectedDay ? selectedDay.toLocaleDateString() : "(none)" }
        </p>
      </div>
    );
  }
}
