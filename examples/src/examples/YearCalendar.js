import React from "react";
import DayPicker from "react-day-picker";

import "react-day-picker/lib/style.css";
import "../styles/year.css";

export default class YearCalendar extends React.Component {

  state = {
    year: (new Date()).getFullYear()
  }

  showPrevious() {
    this.setState({
      year: this.state.year - 1
    });
  }

  showNext() {
    this.setState({
      year: this.state.year + 1
    });
  }

  render() {
    const { year } = this.state;
    return (
      <div className="YearCalendar">
        <h1>
          <a onClick={ this.showPrevious.bind(this) }>{ year - 1 }</a>
          { year }
          <a onClick={ this.showNext.bind(this) }>{ year + 1 }</a>
        </h1>
        <DayPicker
          canChangeMonth={ false }
          initialMonth={ new Date(year, 0, 1) }
          numberOfMonths={ 12 }
        />
      </div>
    );
  }

}
