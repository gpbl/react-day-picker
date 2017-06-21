---
layout: docs
title: Basic concepts
permalink: docs/basics.html
---

This guide illustrates the DayPicker basic concepts by implementing a date picker to select, clear and disable days from the calendar. For using the input field, read [this chapter](input.md).

## Selecting a day

react-day-picker doesn't hold the selected day in its state. Instead, you have to save it in your component as the user interacts with the calendar.

The following component uses the `onDayClick` prop to save the clicked day in its own state:

```jsx
import React from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

export default class SelectDay extends React.Component {
  state = {
    selectedDay: new Date(), // We set the selected default as today
  };
  handleDayClick = day => {
    this.setState({ 
      selectedDay: day 
    });
  }
  render() {
    return (
      <div>
        <DayPicker onDayClick={ this.handleDayClick } />
        <p>
          You clicked { this.state.selectedDay.toLocaleDateString() }
        </p>
      </div>
    )
  }
}
```

[Open in codesandbox](https://codesandbox.io/s/Elx938L34).

> **Note** You can import the CSS from `react-day-picker/lib/style.css`, which contains a basic stylesheet. However, we recommend to write your own based on it. Read [Styling](styling.md) to know how to properly style the component.

We pass then the selected day (saved in the component’s state) to the `selectedDays` prop:

```diff
<DayPicker
  onDayClick={ this.handleDayClick }
+ selectedDays={ this.state.selectedDay }
/>
```

[Open in codesandbox](https://codesandbox.io/s/0VYXPDl3V).

That day cell will get the `DayPicker-Day--selected` CSS class.

### Clearing the selected day

When a selected day is clicked again, we want to clear it. This can be made setting the component's `selectedDay` to `undefined` (or `null`).

The `onDayClick` handler receives as second argument an object that can be inspected to check if the clicked day has been selected or not:

```diff
- handleDayClick = day => {
+ handleDayClick = (day, { selected }) => {
+  if (selected) {
+    // Unselect the day if already selected
+    this.setState({ selectedDay: undefined });
+    return;
+  }
  this.setState({ selectedDay: day });
}
```

That's all! [See the codesandbox](https://codesandbox.io/s/kNxJxMMv) using the code above.

## Marking days as disabled

Disabled days should not respond to the user's interaction and should appear as "disabled" (e.g. grayed out) on the calendar. Here we are disabling all the Sundays:

```diff
<DayPicker
  selectedDays={ this.state.selectedDay }
+ disabledDays={ { daysOfWeek: [0] } }
  onDayClick={ this.handleDayClick }
/>
```

[Open in codesandbox](https://codesandbox.io/s/BLyAmBWPk).

> The `selectedDays` and `disabledDays` props can accept [different value types](http://react-day-picker.js.org/Modifiers.html) to match different days.

### Preventing the user to select a disabled day

This change still does not prevent the user to select a disabled day. Thus, we need our component to _not_ update its state if the clicked day is disabled.

In the click handler we can use the second argument to check if the clicked day is disabled, and prevent its selection:

```diff
- handleDayClick = (day, { selected }) => {
+ handleDayClick = (day, { selected, disabled }) => {
+   if (disabled) {
+     return;
+   }
   if (selected) {
     // Unselect the day if already selected
     this.state({ selectedDay: undefined });
     return;
   }
  this.setState({ selectedDay: day });
}
```

The final implementation:

```jsx
import React from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

export default class SelectDay extends React.Component {
  state = {
    selectedDay: new Date(), // We set the selected default as today
  };
  handleDayClick = (day, { selected, disabled }) => {
    if (disabled) {
      return;
    }
    if (selected) {
      // Unselect the day if already selected
      this.setState({
        selectedDay: undefined,
      });
      return;
    }
    this.setState({
      selectedDay: day,
    });
  };
  render() {
    const { selectedDay } = this.state;
    return (
      <div>
        <DayPicker
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
          disabledDays={ { daysOfWeek: [0] } }
        />
        {selectedDay &&
          <p>
            You clicked {selectedDay.toLocaleDateString()}
          </p>}
      </div>
    );
  }
}

```

[Open in codesandbox](https://codesandbox.io/s/1wpDZJAOq).

## Next steps

The `selectedDays`/`disabledDays` props and the `onDayClick` event handler can implement a more complex logic to respond to your app's needs. For example, you can make the date picker to [select a range of days](../examples/selecting-range.md).

You can go deeper with the customization using **day modifiers**. Read more about them in [Matching days with modifiers](modifiers.md).
