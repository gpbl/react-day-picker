import React from 'react/addons';
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

  mixins: [React.addons.LinkedStateMixin],
  
  getInitialState() {
    return { value: dateToValue(moment()) };
  },

  handleInputFocus(e) {
    // bring back the calendar to the current input value
    this.setState({ value: e.target.value });
  },

  handleDayTouchTap(day, modifiers, e) {
    if (modifiers.indexOf('disabled') === -1)
      this.setState({ value: dateToValue(day) })
  },

  getModifiers() {
    var modifiers = {
      today: function (day) {
        return isSameDay(moment(), day);
      },
      disabled: function (day) {
        // disable past days
        return day.diff(moment(), 'day') < 0;
      },
      selected: function (day) {
        const value = valueToDate(this.state.value);
        if (modifiers.disabled(day) || !value) 
          // value may be null if not a valid date 
          return false;
        else 
          return isSameDay(value, day);
      }.bind(this)
    };
    return modifiers;
  },

  render() {

    return (
      <div>
        
        <h1>react-day-picker</h1>

        <p>
          See project on <a href="https://github.com/gpbl/react-day-picker">github</a>.
        </p>

        <input type="text" ref="input"
          placeholder="YYYY-MM-DD" 
          valueLink={this.linkState('value')}
          onFocus={this.handleInputFocus} />
       
        <DayPicker 
          enableOutsideDays={true}
          initialMonth={ valueToDate(this.state.value) || moment() } 
          modifiers={ this.getModifiers() } 
          onDayTouchTap={this.handleDayTouchTap} />
     
      </div>
    );
  }

});

export default Page;