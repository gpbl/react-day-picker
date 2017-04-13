import React from 'react';
import moment from 'moment';
import DayPicker, { DateUtils } from '../../../src';

import '../../../src/style.css';

export default class Range extends React.Component {
  state = {
    from: null,
    to: null,
  };
  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }
  handleResetClick = (e) => {
    e.preventDefault();
    this.setState({
      from: null,
      to: null,
    });
  }
  render() {
    const { from, to } = this.state;
    return (
      <div className="RangeExample">
        { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
        { from && !to && <p>Please select the <strong>last day</strong>.</p> }
        { from && to &&
          <p>
            You chose from { moment(from).format('L') } to { moment(to).format('L') }.
            { ' ' }<a href="." onClick={ this.handleResetClick }>Reset</a>
          </p>
        }
        <DayPicker
          numberOfMonths={ 2 }
          selectedDays={ [from, { from, to }] }
          onDayClick={ this.handleDayClick }
        />
      </div>
    );
  }

}
