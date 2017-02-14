import React from 'react';
import DayPicker from '../../../src';

import '../../../src/style.css';

export default class Modifiers extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
  }
  handleDayClick(day, modifiers) {
    console.log('Day\'s CSS classes', e.target.classList.toString());
    console.log('Day\'s modifiers', modifiers);
  }
  render() {
    return (
      <div>
        <DayPicker
          initialMonth={ new Date(2017, 3) }
          selectedDays={ new Date(2017, 3, 12) }
          disabledDays={ new Date(2017, 3, 15) }
          onDayClick={ this.handleDayClick }
        />
      </div>
    );
  }
}
