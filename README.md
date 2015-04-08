# react-day-picker

<p align="center">
<a href="http://www.gpbl.org/react-day-picker/"><img src="https://cloud.githubusercontent.com/assets/120693/5693331/3aba1d2e-9918-11e4-933e-bf296484017a.png" width="254" /></a>
</p>

Simple date picker built for [React](facebook.github.io/react/) and [moment.js](http://www.momentjs.com). See a [demo](http://www.gpbl.org/react-day-picker/).

```bash
npm install react-day-picker --save
```

[![Join the chat at https://gitter.im/gpbl/react-day-picker](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/gpbl/react-day-picker?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm version](https://badge.fury.io/js/react-day-picker.svg)](http://badge.fury.io/js/react-day-picker)


### Use of modifiers

This date picker works with modifiers, as in [BEM-like syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/). You set the modifiers as functions returning `true` or `false`.

Modifiers give you a lot of freedom: for example, a `selected` modifier could highlight *a range* of selected days, or a `weekend` modifiers could format the weekend days.

### Styling

You need to setup your own CSS. You can start from [this css](example/src/scss/daypicker.scss) as example.

## Usage examples

The following component implements the DayPicker and saves the selected day in its own `state`.
It also adds the `daypicker__day--today` CSS modifier for today, and a `daypicker__day--selected` CSS modifier to the cell corresponding to the clicked/touched day.

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
npm start
```

...then open [http://localhost:8080](http://localhost:8080).

## API


### Props

```js
<DayPicker
  initialMonth={Object}
  enableOutsideDays={Boolean}
  modifiers={Object}
  onDayClick={Function}
  onDayTouchTap={Function}
  onMouseEnter={Function}
  onDayMouseLeave={Function}
  onPrevMonthClick={Function}
  onNextMonthClick={Function}
/>
```

#### initialMonth `moment object`

A `moment()` object with the month to display in the calendar.

#### modifiers `Object`

* The object's keys are the modifier's name – applied to each day, following a BEM-like syntax: `daypicker__day--<modifier>`
* The key's values are functions evaluated for each day. When they returns `true`, the modifier is applied, and eventually passed to the `onDayTouchTap` payload.

For example, the following modifiers will add the CSS class `daypicker__day--disabled` to the days of the past:

```js

modifiers = {
  disabled: function (day) {
    return day.diff(moment(), 'day') < 0;
  }
}
<DayPicker modifiers={modifiers} />

```

#### enableOutsideDays `bool`

Show the days outside the shown month.

#### onDayClick `function(day, modifiers, event)`
#### onDayTouchTap `function(day, modifiers, event)`

Use one of these attributes to add an event handler when the user touches/clicks a day.

* `day <Object>` the touched day (a moment object)
* `modifiers <Array>` array of modifiers for the touched day, e.g. `['disabled', 'today']`
* `event <SyntheticEvent>` the original touch event

> To make the touch tap events working, you **must** inject [react-tap-event-plugin](https://github.com/zilverline/react-tap-event-plugin) client side.

#### onDayMouseEnter `function(day, modifiers, event)`
#### onDayMouseLeave `function(day, modifiers, event)`

Use this attribute to add an handler when the mouse enters/leaves a day element.

#### onPrevMonthClick `function(month, event)`
#### onNextMonthClick `function(month, event)`

* `month <Object>` the current month (a moment object)
* `event <SyntheticEvent>` the click event

Use this attribute to add an handler when the user switch to the previous/next month.


### Methods

#### `showMonth(month)`

Show `month` (Moment object).
