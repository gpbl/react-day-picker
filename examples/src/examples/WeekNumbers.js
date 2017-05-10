import React from 'react';
import DayPicker from '../../../src';

import '../../../src/style.css';

export default class WeekNumbers extends React.Component {
  state = {
    selectedDays: undefined,
    selectedWeek: undefined,
  };

  handleWeekClick = (week, days, e) => {
    e.target.blur();
    if (week === this.state.selectedWeek) {
      this.setState({
        selectedWeek: undefined,
        selectedDays: undefined,
      });
      return;
    }
    this.setState({
      selectedDays: days,
      selectedWeek: week,
    });
  };

  render() {
    return (
      <DayPicker
        showWeekNumbers
        fixedWeeks
        selectedDays={this.state.selectedDays}
        onWeekClick={this.handleWeekClick}
      />
    );
  }
}
