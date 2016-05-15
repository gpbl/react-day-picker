# Basic usage

This component is designed to cover the most cases where you need a date picker. Explore the [examples](http://www.gpbl.org/react-day-picker/examples) or read the [API](http://www.gpbl.org/react-day-picker/docs/API.html) to get a basic idea of what you can do with react-day-picker.

In this chapter, we will see how to select and disable days.

## Selecting a day

Differently from other pickers, react-day-picker doesn't hold the selected day in its state. Instead, you have to get it when the user interacts with the calendar.

For example, this component uses the `onDayClick` prop to save the clicked day in its own state:

```jsx
import DayPicker from 'react-day-picker';
class SelectDay extends React.Component {
  state = {
    selectedDay: null
  };
  handleDayClick(e, day) {
    this.setState({ selectedDay: day });
  }
  render() {
    return (
      <div>
        <DayPicker onDayClick={ this.handleDayClick.bind(this) } />
        <p>
          Selected:
          { this.state.selectedDay ?
              this.state.selectedDay.toLocaleDateString() :
              "Please select a day."
          }
        </p>
      </div>
    )
  }
}
```

To highlight the selected day in the calendar, you should specify which days have been selected. You do that by passing to the `selectedDays` prop a function that checks whatever the day shown in the calendar is the same saved in the component's state.

```jsx
import DayPicker, { DateUtils } from 'react-day-picker';
// snip
render() {
  return (
    <div>
      <DayPicker
        onDayClick={ this.handleDayClick.bind(this) }
        selectedDays={ day => DateUtils.isSameDay(day, this.state.selectedDay) }
      />
      <p>
        Selected:
        { this.state.selectedDay ?
            this.state.selectedDay.toLocaleDateString() :
            "Please select a day."
        }
      </p>
    </div>
  )
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

### Deselecting the selected day

When the user clicks on a selected day, we want it to be "unselected" again. This can be made preventing our component to save the `selectedDay` in its state.

The `onDayClick` handler receives as third argument an object, called "modifiers", with a `selected` key: we can inspect the day's modifiers to reset the `selectedDay`.

Thus, our `handleDayClick` handler would become:

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

That's all! [See this example](http://www.gpbl.org/react-day-picker/examples/#selectable) using the code above.

## Marking days as disabled

Disabled days should not respond to the user interaction and should appear as "disabled" on the calendar. Use the `disabledDays` prop to specify which days should be disabled.

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

In the previous example nothing happens when the user clicks on a day, since the `onDayClick` prop is missing. As before, we need to hold the value of the selected day in our component's state:

```jsx
import DayPicker, { DateUtils } from 'react-day-picker';

const isSunday = day => day.getDay() === 0;

class SelectDay extends React.Component {
  state = {
    selectedDay: null
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
          Selected:
          { this.state.selectedDay ?
              this.state.selectedDay.toLocaleDateString() :
              "Please select a day."
          }
        </p>
      </div>
    )
  }
}
```

this, however, will make selectable even the disabled days. We need instead our component to _not_ update its state, in case the clicked day is disabled:

```jsx
handleDayClick(e, day, modifiers) {
  if (modifiers.disabled) {
    // do not update the state if the day is disabled
    return;
  }
  this.setState({ selectedDay: day });
}
```

[See this example](http://www.gpbl.org/react-day-picker/examples/#disabled) showing a similar implementation.
