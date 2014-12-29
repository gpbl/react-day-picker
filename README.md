# react-day-picker

A minimalistic date picker built for [React](facebook.github.io/react/) and [moment.js](http://www.momentjs.com). Supports CSS modifiers, touch and keyboard events.

See a [live version](http://www.gpbl.org/react-day-picker/) of the [example app](example), which makes the component working together with a `<input>` field.

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

## Styling

A basic inline style is included in the component to create the calendar layout, but you likely need to setup your own CSS. 

See [this css example](example/main.css): the daypicker selectors begins with `.daypicker`.

## API

#### initialMonth `moment object`

A `moment()` date object with the month to display in the calendar.

#### modifiers `Object`

CSS modifiers are useful to customize the aspect of a day element. You pass an object whose keys are used as CSS class for each day. The key's values are functions being evaluated when rendering a day element: if the function returns `true` (or a truthy value), the modifier is added to the day cell as `daypicker__day--<modifier>` className.

For example, the following modifiers:

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

> To make the touch tap events working, you **must** inject [react-tap-event-plugin](https://github.com/zilverline/react-tap-event-plugin) client side.


#### onDayMouseEnter `function(day, modifiers, event)`

Use this attribute to add an handler when the mouse enters a day element. 

#### onDayMouseLeave `function(day, modifiers, event)`

Use this attribute to add an handler when the mouse leaves a day element. 
