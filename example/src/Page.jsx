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
    return {
      inputValue: dateToValue(moment())
    };
  },

  handleInputChange(e) {
    this.setState({inputValue: e.target.value});
  },

  handleInputFocus(e) {
    this.setState({inputValue: e.target.value});
  },

  handleDayTouchTap(day, modifiers) {
    if (modifiers.indexOf('disabled') === -1)
      this.setState({inputValue: dateToValue(day)})
  },

  render() {

    var modifiers = {
      today: function (day) {
        return isSameDay(moment(), day);
      },
      disabled: function (day) {
        return day.diff(moment(), 'day') < 0;
      },
      selected: function (day) {
        if (modifiers.disabled(day) || !this.state.inputValue) return false;
        return isSameDay(valueToDate(this.state.inputValue), day);
      }.bind(this)
    };

    return (
      <div>
        <input type="text" placeholder="YYYY-MM-DD" value={this.state.inputValue} onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
        <DayPicker initialMonth={ valueToDate(this.state.inputValue) || moment() } modifiers={modifiers} onDayTouchTap={this.handleDayTouchTap} />
      </div>
    );
  }

});

export default Page;