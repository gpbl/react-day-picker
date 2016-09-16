import React, { Component } from 'react';
import DayPicker from '../../../src';
import moment from 'moment';

import '../../../src/style.css';

const containerStyles = {
  position: 'relative'
};

const calendarContainerStyles = {
  position: 'absolute',
  right: -10,
  top: -50,
  background: 'white',
  transform: 'translate(100%, 0)',
  boxShadow: '0 2px 5px rgba(0, 0, 0, .15)'
};

export default class CalendarOverlay extends Component {
  state = {
    focused: false,
    value: ''
  };

  // Important private property which indicates if input's blur event was caused by clicking on the calendar
  _clickInside = false;

  constructor(props) {
    super(props);
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onClickInside = this.onClickInside.bind(this);
    this.setInput = this.setInput.bind(this);
  }

  onFocus() {
    this.setState({
      focused: true
    });
  }

  onClickInside() {
    this._clickInside = true;

    // Some "magic" here. onClickInside method is called by onMouseDown event.
    // onBlur method is called from a queue right after onMouseDown event.
    // setTimeout adds another callback in the queue, but is called later than onBlur event
    setTimeout(() => {
      this._clickInside = false;
    }, 0)
  }

  onBlur() {
    const focused = this._clickInside;

    this.setState({
      focused
    });

    // Force input's focus if blur event was caused by clicking on the calendar
    if (focused) {
      this._input.focus();
    }
  }

  onDateChange(e, day) {
    this.setState({
      value: moment(day).format('DD.MM.YYYY'),
      focused: false
    });

    // Force input's blur on value set, so onFocus method can be triggered again
    this._input.blur();
  }


  setInput(input) {
    this._input = input;
  }

  render() {
    const calendar = this.state.focused
      &&  <div style={calendarContainerStyles}>
            <DayPicker onDayClick={this.onDateChange} />
          </div>;

    return (
      <div style={containerStyles} onMouseDown={this.onClickInside}>
        {calendar}
        <input
          type="text"
          ref={this.setInput}
          placeholder="Choose Date"
          value={this.state.value}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
      </div>
    );
  }
}
