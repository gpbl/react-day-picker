import React from 'react';
import DayPicker from '../../../src';

import '../../../src/style.css';
import '../styles/odd-even.css';

export default class AdvancedModifiers extends React.Component {
  state = {
    text: 'Please select a day 👻',
  };

  handleDayClick = (day, { even, odd, first }) => {
    let text;
    if (even) {
      text = 'Just an even day';
    }
    if (odd) {
      text = 'An odd day';
    }
    if (first) {
      text += ': the first of the month 😱';
    }
    this.setState({ text });
  };

  handleDayMouseEnter = (day, modifiers, e) => {
    console.log("Day's CSS classes", e.target.classList.toString());
    console.log("Day's modifiers", modifiers);
  };

  render() {
    const modifiers = {
      even: day => day.getDate() % 2 === 0,
      odd: day => day.getDate() % 2 !== 0,
      first: day => day.getDate() === 1,
    };
    return (
      <div>
        <span>
          <DayPicker
            modifiers={modifiers}
            onDayMouseEnter={this.handleDayMouseEnter}
            onDayClick={this.handleDayClick}
          />
        </span>
        <p>
          {this.state.text}
        </p>
      </div>
    );
  }
}
