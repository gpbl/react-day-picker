import React, { Component } from 'react';

import Utils from "./Utils";

import DayPicker from '../../src/DayPicker.js';

class Example extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: Utils.dateToValue(Utils.today())
    };
  }

  render() {
    const { value } = this.state;
    return (
      <div>

        <h1>react-day-picker</h1>

        <p>
          See this project on <a href="https://github.com/gpbl/react-day-picker">github</a>.
        </p>

        <input
          type="text"
          value={value}
          placeholder="YYYY-MM-DD"
          onChange={this.handleInputChange.bind(this)}
          onFocus={this.handleInputFocus.bind(this)} />

        <DayPicker
          ref="daypicker"
          enableOutsideDays={true}
          initialMonth={ Utils.valueToDate(value) || Utils.today() }
          numberOfMonths={1}
          modifiers={ this.getModifiers() }
          onDayTouchTap={this.handleDayTouchTap.bind(this)} />

      </div>
    );
  }

  handleInputFocus(e) {
    this.showMonthForCurrentValue();
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState({
      value: value
    }, this.showMonthForCurrentValue);
  }

  handleDayTouchTap(day, modifiers, e) {

    if (modifiers.indexOf('disabled') === -1 &&
        modifiers.indexOf('outside') === -1) {
      this.setState({
        value: Utils.dateToValue(day)
      });
    }
  }

  showMonthForCurrentValue() {
    const day = Utils.valueToDate(this.state.value);

    if (!day) {
      // ignore not valid dates
      return;
    }

    this.refs.daypicker.showMonth(day.startOf('month'));
  }

  getModifiers() {
    const { value } = this.state;
    const selectedDay = Utils.valueToDate(value);

    const modifiers = {

      today(day) {
        return Utils.isToday(day);
      },

      disabled(day) {
        return Utils.isPastDay(day);
      },

      selected(day) {
        if (modifiers.disabled(day) || !selectedDay) {
          return false;
        }

        return Utils.isSameDay(selectedDay, day);
      }

    };

    return modifiers;
  }

}

export default Example;
