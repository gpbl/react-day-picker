# react-day-picker

A minimalistic date picker built for [React](facebook.github.io/react/) and [moment.js](http://www.momentjs.com), inspired by that of airbnb. 

Supports CSS modifiers and touch events.

```bash
npm install 'react-day-picker' --save
```

### Usage example

```js

var DayPicker = require('react-day-picker');
var moment = require('moment');

function isSameDay(a, b) {
  return a.startOf('day').isSame(b.startOf('day'));
}

var MyDatePicker = React.createClass({
  handleDayTouchTap(day, modifiers, event) {
    if (modifiers.indexOf('disabled') === -1)
      alert('You tapped ' + day.format());
  },
  render() {
    var modifiers = {
      today: function (day) {
        // Add --today CSS modifier for the current day
        return isSameDay(moment(), day);
      }
    };
    return (
        <DayPicker 
          initialMonth={ moment() } 
          modifiers={ modifiers } 
          onDayTouchTap={this.handleDayTouchTap} />
    );
  }
});

React.render(<MyDatePicker/>, document.body);

```

### Run the example app

```bash
git clone https://github.com/gpbl/react-day-picker.git
cd react-day-picker
npm install
npm run example
```

...then open [http://localhost:8080](http://localhost:8080).

## API

#### initialMonth `moment object`

A `moment()` date object with the month to display in the calendar.

#### modifiers `Object`

An object whose keys will be used as CSS modifiers for the day cells. The key's values are functions being evaluated when printing each day cell: if the function returns `true` (or a truthy value), the modifier is added to the day cell as `daypicker__day--<modifier>` className.

For example, the following modifier:

```js
modifiers = {
  disabled: function (day) {
    return day.diff(moment(), 'day') < 0;
  },
  all: function (day) {
    return true;
  }
}
```
will add the CSS class `daypicker__day--disabled` to the days of the past, and the `daypicker__day--all` CSS class to all the days (since it returns always `true`).

#### onDayTouchTap `function(day, modifiers, event)`

Use this attribute to add an handler when the user touches a day.