import React from "react";
import DayPicker, { DateUtils } from "react-day-picker";

import "react-day-picker/lib/style.css";

export default class SelectableDay extends React.Component {

  state = {
    selectedDay: null
  };

  handleDayClick(e, day, modifiers) {
    this.setState({
      selectedDay: modifiers.indexOf("selected") > -1 ? null : day
    });
  }

  render() {
    const { selectedDay } = this.state;

    return (
      <div>
        <DayPicker
          modifiers={{
            selected: day => DateUtils.isSameDay(selectedDay, day)
          }}
          onDayClick={ this.handleDayClick.bind(this) }
        />
        <p>
          Selected: { selectedDay && selectedDay.toLocaleDateString() }
        </p>
      </div>
    );
  }
}
