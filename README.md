# react-day-picker

A minimalistic date picker built for [React](facebook.github.io/react/) and [moment.js](http://www.momentjs.com). 

See [demo](http://www.gpbl.org/react-day-picker/).

```bash
npm install 'react-day-picker' --save
```

### Modifiers instead of selected days

This date picker does not have the concept of a *selected date*: instead, you specify *day modifiers*, i.e. strings that classify the aspect and the behaviour for each day in the calendar. 

A modifier is appended to the day cell's CSS class – for example, a `disabled` modifier could make it appearing as disabled, or a `selected` modifier could highlight a range of selected days.

See a [live version](http://www.gpbl.org/react-day-picker/) of the [example app](example), where the the component works together with an `<input>` field. There, the past days are marked as disabled and are not selectable, and the current day is made red.

## Usage example

The following component saves the selected day in its state. It also adds the `daypicker__day--today` CSS modifier to the day cell corresponding to the current day, and the 
`daypicker__day--selected` CSS modifier to the cell corresponding to the selected day.

```js

var DayPicker = require('react-day-picker');
var moment = require('moment');

function isSameDay(a, b) {
  return a.startOf('day').isSame(b.startOf('day'));
}

var MyDatePicker = React.createClass({
  
  handleDayTouchTap(day, modifiers, event) {
    this.setState({ selectedDay: day });
  },

  render() {
    var modifiers = {
      today: function (day) {
        // add the `today` modifier for the current day
        return isSameDay(moment(), day);
      },
      selected: function (day) {
        // add the `selected` modifier for the selected day
        return this.state.selectedDay 
          && isSameDay(this.state.selectedDay, day);
      }
    };
    return (
      <DayPicker modifiers={ modifiers } 
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

You need to setup your own CSS. See [this css](example/main.css) as example: the daypicker selectors begins with `.daypicker`.

## API

#### initialMonth `moment object`

A `moment()` date object with the month to display in the calendar.

#### enableOutsideDay `bool`

Show the days outside the shown month.

#### modifiers `Object`

* The object's keys are the modifier's name – applied to each day following a BEM-like syntax: `daypicker__day--<modifier>`
* The key's values are functions evaluated for each day. When they returns `true`, the modifier is added and eventually passed to the `onDayTouchTap` payload.

For example, the following modifiers will add the CSS class `daypicker__day--disabled` to the days of the past:

```js
modifiers = {
  disabled: function (day) {
    return day.diff(moment(), 'day') < 0;
  }
}
```

#### onDayClick `function(day, modifiers, event)`
#### onDayTouchTap `function(day, modifiers, event)`

Use one of these attributes to add an event handler when the user touches/clicks a day. 

* `day <Object>` the touched day (a moment object)
* `modifiers <Array>` array of modifiers for the touched day, e.g. `['disabled', 'today']`
* `event <SyntheticEvent>` the original touch event

> To make the touch tap events working, you **must** inject [react-tap-event-plugin](https://github.com/zilverline/react-tap-event-plugin) client side.

#### onDayMouseEnter `function(day, modifiers, event)`

Use this attribute to add an handler when the mouse enters a day element. 

#### onDayMouseLeave `function(day, modifiers, event)`

Use this attribute to add an handler when the mouse leaves a day element. 

#### onPrevMonthTouchTap `function(month)`
#### onNextMonthTouchTap `function(month)`

Use this attribute to add an handler when the user switch to the previous/next month.