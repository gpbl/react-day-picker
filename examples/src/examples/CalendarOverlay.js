import React, { Component } from 'react';
import DayPicker from '../../../src';
import moment from 'moment';

import '../../../src/style.css';

const calendarContainerStyles = {
  position: 'absolute',
  right: -10,
  top: -50,
  background: 'white',
  transform: 'translate(100%, 0)',
  boxShadow: '0 2px 5px rgba(0, 0, 0, .15)',
};

export default class CalendarOverlay extends Component {

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.handleContainerMouseDown = this.handleContainerMouseDown.bind(this);
  }

  state = {
    focused: false,
    value: '',
  };

  clickedInside = false;

  handleInputFocus() {
    this.setState({
      focused: true,
    });
  }

  handleContainerMouseDown() {
    this.clickedInside = true;

    // Some "magic" here. handleContainerMouseDown method is called by onMouseDown event.
    // onBlur method is called from a queue right after onMouseDown event.
    // setTimeout adds another callback in the queue, but is called later than onBlur event
    setTimeout(() => {
      this.clickedInside = false;
    }, 0);
  }

  handleInputBlur() {
    const focused = this.clickedInside;

    this.setState({
      focused,
    });

    // Force input's focus if blur event was caused by clicking on the calendar
    if (focused) {
      this.input.focus();
    }
  }

  handleDayClick(e, day) {
    this.setState({
      value: moment(day).format('DD.MM.YYYY'),
      focused: false,
    });
    this.input.blur();
  }

  render() {
    return (
      <div
        style={ { position: 'relative ' } }
        onMouseDown={ this.handleContainerMouseDown }
      >
        <input
          type="text"
          ref={ el => { this.input = el; } }
          placeholder="Choose Date"
          value={ this.state.value }
          onFocus={ this.handleInputFocus }
          onBlur={ this.handleInputBlur }
        />
        { this.state.focused &&
          <div style={ calendarContainerStyles }>
            <DayPicker onDayClick={ this.handleDayClick } />
          </div>
        }
      </div>
    );
  }
}
