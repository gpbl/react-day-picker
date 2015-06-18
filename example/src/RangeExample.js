import React from "react";
import moment from "moment";
import DayPicker from "react-day-picker";

import { isBetween, isSameDay } from "./Utils";

import "./style/DayPicker.scss";

class RangeExample extends React.Component {

  static displayName = "RangeExample"

  constructor(props) {
    super(props);
    this.state = {
      from: null,
      to: null
    };
  }

  render() {
    const { from, to } = this.state;

    const modifiers = {
      selected(day) {
        return (from && isSameDay(day, from)) ||
          (to && isSameDay(day, to)) ||
          (from && to && isBetween(day, from, to));
      }
    };

    return (
      <div>
        { !from && !to && <p>Please select the first day.</p> }
        { from && !to && <p>Please select the last day.</p> }
        { from && to &&
          <p>You chose from {
              moment(from).format("L") } to {
              moment(to).format("L") }. <a
              href="#" onTouchTap={ ::this.handleResetTouchTap }>Reset</a>
          </p>
        }

        <DayPicker
          ref="daypicker"
          numberOfMonths={ 2 }
          modifiers={ modifiers }
          onDayTouchTap={ ::this.handleDayTouchTap }
        />
      </div>
    );
  }

  handleDayTouchTap(e, day, modifiers) {
    let { from, to } = this.state;

    if (!from) {
      from = day;
    }
    else if (from && to && isSameDay(from, to) && isSameDay(day, from)) {
      // reset when selecting again the first day
      from = null;
      to = null;
    }
    else if (to && day < from) {
      from = day;
    }
    else if (to && isSameDay(day, to)) {
      from = day;
      to = day;
    }
    else {
      to = day;
      if (to < from) {
        to = from;
        from = day;
      }
    }

    this.setState({
      from: from,
      to: to
    });
  }

  handleResetTouchTap(e) {
    e.preventDefault();
    this.setState({
      from: null,
      to: null
    });
  }

}

export default RangeExample;
