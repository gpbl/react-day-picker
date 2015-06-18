import React from "react";
import DayPicker from "react-day-picker";

import "./style/DayPicker.scss";
import "./style/YearCalendarExample.scss";

class YearCalendarExample extends React.Component {

  static displayName = "YearCalendarExample"

  constructor() {
    super();
    this.state = {
      year: (new Date()).getFullYear()
    };
  }

  render() {
    const { year } = this.state;
    return (
      <div className="YearCalendarExample">
        <h1>
          <a onClick={ ::this.showPrevious }>{ year - 1 }</a>
          { year }
          <a onClick={ ::this.showNext }>{ year + 1 }</a>
        </h1>
        <DayPicker
          canChangeMonth={false}
          initialMonth={ new Date(year, 0, 1) }
          numberOfMonths={ 12 }
        />
      </div>
    );
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

}

export default YearCalendarExample;
