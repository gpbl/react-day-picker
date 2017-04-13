import React from 'react';
import DayPicker from '../../../src';

import '../../../src/style.css';
import '../styles/year.css';

export default class YearCalendar extends React.Component {

  state = {
    year: (new Date()).getFullYear(),
  };
  showPrevious = () => {
    this.setState({
      year: this.state.year - 1,
    });
  }
  showNext = () => {
    this.setState({
      year: this.state.year + 1,
    });
  }
  render() {
    const { year } = this.state;
    return (
      <div className="YearCalendar">
        <h1>
          <a onClick={ this.showPrevious }>{ year - 1 }</a>
          { year }
          <a onClick={ this.showNext }>{ year + 1 }</a>
        </h1>
        <DayPicker
          canChangeMonth={ false }
          month={ new Date(year, 0, 1) }
          numberOfMonths={ 12 }
        />
      </div>
    );
  }

}
