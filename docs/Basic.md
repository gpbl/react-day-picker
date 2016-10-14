# Basic usage

react-day-picker is designed to cover the most common needs for a date picker in a web application. This chapter illustrates the component's basic concepts by implementing a date picker to select, clear and disable days from the calendar.

## Selecting a day

react-day-picker doesn't hold the selected day in its state. Instead, you have to get it when the user interacts with the calendar.

The following component uses the `onDayClick` prop to save the clicked day in its own state:

```jsx
import React from 'react';
import DayPicker from 'react-day-picker';

class SelectDay extends React.Component {
  state = {
    // The default selected day is today
    selectedDay: new Date(),
  };
  handleDayClick(e, day) {
    this.setState({ selectedDay: day });
  }
  render() {
    return (
      <div>
        <DayPicker onDayClick={ this.handleDayClick.bind(this) } />
        <p>
          The selected day is { this.state.selectedDay.toLocaleDateString() }
        </p>
      </div>
    )
  }
}
```

Somewhere your CSS must set the appearance for the selected day, but first you need to tell the Day Picker which days have been selected.

The `selectedDays` prop is a function that checks whether a day should get the `selected` CSS modifier:

```jsx
import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';

class SelectDay extends React.Component {
  state = {
    // The default selected day is today
    selectedDay: new Date(),
  };
  handleDayClick(e, day) {
    this.setState({ selectedDay: day });
  }
  render() {
    return (
      <div>
        <DayPicker
          onDayClick={ this.handleDayClick.bind(this) }
          selectedDays={ day => DateUtils.isSameDay(day, this.state.selectedDay) }
        />
        <p>
          The selected day is { this.state.selectedDay.toLocaleDateString() }
        </p>
      </div>
    )
  }
}
```

Then, in your CSS, add a `.DayPicker-Day--selected` selector to highlight the cell corresponding to the selected day. For example:

```css
.DayPicker-Day--selected {
  background-color: red;
  color: white;
}
```

> **Note** You can use the CSS contained in `react-day-picker/lib/style.css`, which contains a basic stylesheet. Read [Styling](Styling.md) to know how to properly style the component.

### Clearing the selected day

When a selected day is clicked again, we want to clear it. This can be made setting the component's `selectedDay` to `null`.

The `onDayClick` handler receives as third argument a `modifiers` object that can be inspected if the clicked day has been selected or not:

```jsx
// snip
handleDayClick(e, day, modifiers) {
  if (modifiers.selected) {
    // unselect the day if already selected
    this.state({ selectedDay: null });
    return;
  }
  this.setState({ selectedDay: day });
}
```

That's all! [See this example](http://react-day-picker.js.org/examples?selectable) using the code above.

## Marking days as disabled

Disabled days should not respond to the user's interaction and should appear as "disabled" on the calendar. Use the `disabledDays` prop to specify which days should be disabled.

In the following example, we choose to disable every Sunday:

```jsx
import DayPicker from 'react-day-picker';

const isSunday = day => day.getDay() === 0;

class SelectDay extends React.Component {
  render() {
    return (
      <DayPicker disabledDays={ isSunday } />
    )
  }
}
```

Then, style the day to appear as disabled in your CSS using the `.DayPicker-Day--disabled` selector:

```css
.DayPicker-Day--disabled {
  background-color: grey;
  color: white;
  cursor: pointer;
}
```

### Preventing the user to select a disabled day

In the previous example nothing happens when the user clicks on a day, since the `onDayClick` prop is missing. As before, we need to save the value of the selected day in our component's state:

```jsx
import DayPicker, { DateUtils } from 'react-day-picker';

const isSunday = day => day.getDay() === 0;

class SelectDay extends React.Component {
  state = {
    selectedDay: new Date(),
  };
  handleDayClick(e, day) {
    this.setState({ selectedDay: day });
  }
  render() {
    return (
      <div>
        <DayPicker
          disabledDays={ isSunday }
          selectedDays={ day => DateUtils.isSameDay(day, this.state.selectedDay) }
          onDayClick={ this.handleDayClick.bind(this) }
        />
        <p>
          The selected day is { this.state.selectedDay.toLocaleDateString() }
        </p>
      </div>
    )
  }
}
```

This, however, will make selectable even the disabled days. We need instead our component to _not_ update its state, in case the clicked day is disabled. In the click handler we can use the day's modifiers to check if the day was disabled:

```jsx
handleDayClick(e, day, modifiers) {
  if (modifiers.disabled) {
    // do not update the state if the day is disabled
    return;
  }
  this.setState({ selectedDay: day });
}
```

Check out [this example](http://react-day-picker.js.org/examples?disabled) shows a similar implementation.

## Next steps

The `selectedDays` function and the `onDayClick` event handler can implement a more complex logic to make the date picker more powerful. For example, you can make the date picker to [select a range of days](http://react-day-picker.js.org/examples?range).

You can go deeper with your customization using **modifiers**. Modifiers are a powerful concept behind react-day-picker. Read more about them in the [next chapter](Modifiers.md).
