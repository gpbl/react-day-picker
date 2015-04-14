import React from 'react';
import DayPicker from '../../../src/DayPicker.js';
import moment from 'moment';

function valueToDate(s) {
  var date = moment(s, "YYYY-MM-DD", true);
  return date.isValid() ? date : null;
}

function dateToValue(d) {
  return d.format("YYYY-MM-DD");
}

function isSameDay(a, b) {
  return a.startOf('day').isSame(b.startOf('day'));
}

const Page = React.createClass({

  getInitialState() {
    return { value: dateToValue(moment()) };
  },

  handleInputFocus(e) {
    this.showMonthForCurrentValue();
  },

  handleInputChange(e) {
    const value = e.target.value;
    this.setState({
      value: value
    }, this.showMonthForCurrentValue);
  },

  handleDayTouchTap(day, modifiers, e) {
    if (modifiers.indexOf('disabled') === -1) {
      this.setState({
        value: dateToValue(day)
      });
    }
  },

  showMonthForCurrentValue() {
    const day = valueToDate(this.state.value);

    if (!day) {
      return;
    }

    // if the current state is a valid day, show its month on the calendar
    this.refs.daypicker.showMonth(day.startOf('month'));
  },

  getModifiers() {
    var modifiers = {
      today: function(day) {
        return isSameDay(moment(), day);
      },
      disabled: function(day) {
        // disable past days
        return day.diff(moment(), 'day') < 0;
      },
      selected: function(day) {
        const value = valueToDate(this.state.value);

        if (modifiers.disabled(day) || !value) {
          // value may be null if not a valid date
          return false;
        }
        else {
          return isSameDay(value, day);
        }
      }.bind(this)
    };
    return modifiers;
  },

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
          onChange={this.handleInputChange}
          onFocus={this.handleInputFocus} />

        <DayPicker
          ref="daypicker"
          enableOutsideDays={true}
          initialMonth={ valueToDate(value) || moment() }
          numberOfMonths={1}
          modifiers={ this.getModifiers() }
          onDayTouchTap={this.handleDayTouchTap} />

      </div>
    );
  }

});

export default Page;
