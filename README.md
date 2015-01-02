# react-day-picker

Minimalistic date picker built for [React](facebook.github.io/react/) and [moment.js](http://www.momentjs.com). 


```bash
npm install react-day-picker --save
```

See a [live version](http://www.gpbl.org/react-day-picker/) of the [example app](example), where the the component works together with an `<input>` field. There, the past days are shown as "disabled" and cannot be selected.

## Modifiers instead of selected days

This date picker does not have the concept of a *selected date*: instead, you specify custom *day modifiers*. A modifier is a string that classify the aspect (and eventually the behaviour) for each day appearing in the calendar. 

By evaluating a `function(day)` you provide, a modifier is appended for each day to the `daypicker__day` class, using a [BEM-like syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/). 

For example, a `disabled` modifier (`daypicker__day--disabled`) may make it appearing as grayed-out, or a `selected` (`daypicker__day--selected`) modifier could highlight a range of selected days. 

### Selecting a day 

You are expected to use the `state` of your component: set its state listening to the `onTouchTap/onClick` DayPicker events (see API and example below).

## Styling

You need to setup your own CSS. You can start from [this css](example/src/scss/daypicker.scss) as example.

## Usage example

The following component implements the DayPicker and saves the selected day in its own `state`. 

It also adds the `daypicker__day--today` CSS modifier for today, and a `daypicker__day--selected` CSS modifier to the cell corresponding to the selected day.

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

## API

#### initialMonth `moment object`

A `moment()` date object with the month to display in the calendar.

#### enableOutsideDay `bool`

Show the days outside the shown month.

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

#### onPrevMonthTouchTap `function(month)`
#### onNextMonthTouchTap `function(month)`

Use this attribute to add an handler when the user switch to the previous/next month.