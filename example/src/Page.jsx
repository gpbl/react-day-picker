import React from 'react';
import DayPicker from '../../src/DayPicker.jsx';
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

  handleInputChange(e) {
    this.setState({ value: e.target.value });
  },

  handleInputFocus(e) {
    this.setState({ value: e.target.value });
  },

  handleDayTouchTap(day, modifiers) {
    if (modifiers.indexOf('disabled') === -1)
      this.setState({ value: dateToValue(day) })
  },

  render() {

    var modifiers = {
      today: function (day) {
        return isSameDay(moment(), day);
      },
      disabled: function (day) {
        // disable past days
        return day.diff(moment(), 'day') < 0;
      },
      selected: function (day) {
        if (modifiers.disabled(day) || !this.state.value) 
          return false;
        else 
          return isSameDay(valueToDate(this.state.value), day);
      }.bind(this)
    };

    return (
      <div>
       
        <input type="text" 
          placeholder="YYYY-MM-DD" 
          value={this.state.value} 
          onChange={this.handleInputChange} 
          onFocus={this.handleInputFocus} />
       
        <DayPicker 
          initialMonth={ valueToDate(this.state.value) || moment() } 
          modifiers={modifiers} 
          onDayTouchTap={this.handleDayTouchTap} />
     
      </div>
    );
  }

});

export default Page;