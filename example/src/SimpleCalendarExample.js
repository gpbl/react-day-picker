import React from "react";
import DayPicker from "react-day-picker";

import "./style/DayPicker.scss";

class SimpleCalendarExample extends React.Component {

  static displayName = "SimpleCalendarExample"

  render() {
    return (
      <DayPicker />
    );
  }
}

export default SimpleCalendarExample;
