# Basic usage

react-day-picker is designed to cover the most common needs for a date picker in web applications.

The package includes:

* the **DayPicker** component, to render the date picker (the "calendar")
* the **DayPickerInput** component – to render an input field opening the DayPicker in an overlay.

This guide illustrates the DayPicker basic concepts by implementing a date picker to select, clear and disable days from the calendar. For using the input field, read [this chapter](Input.md).

## Selecting a day

react-day-picker doesn't hold the selected day in its state. Instead, you have to save it in your component as the user interacts with the calendar.

The following component uses the `onDayClick` prop to save the clicked day in its own state:

```jsx
import React from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

class SelectDay extends React.Component {
  
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
          The selected day is { this.state.selectedDay.toLocaleDateString() }
        </p>
      </div>
    )
  }

}
```

> **Note** You can import the CSS from `react-day-picker/lib/style.css`, which contains a basic stylesheet. However, we recommend to write your own based on it. Read [Styling](Styling.md) to know how to properly style the component.

We pass then the selected day (saved in the component’s state) to the `selectedDays` prop:

```diff
<DayPicker
  onDayClick={ this.handleDayClick }
+ selectedDays={ this.state.selectedDay }
/>
```

That day cell will get the `DayPicker-Day--selected` CSS class.

### Clearing the selected day

When a selected day is clicked again, we want to clear it. This can be made setting the component's `selectedDay` to `undefined` (or `null`).

The `onDayClick` handler receives as second argument an object that can be inspected to check if the clicked day has been selected or not:

```diff
handleDayClick = (day, { selected }) => {
+  if (selected) {
+    // Unselect the day if already selected
+    this.state({ selectedDay: undefined });
+    return;
+  }
  this.setState({ selectedDay: day });
}
```

That's all! [See this example](http://react-day-picker.js.org/examples?selectable) using the code above.

## Marking days as disabled

Disabled days should not respond to the user's interaction and should appear as "disabled" (e.g. grayed out) on the calendar. Here we are disabling all the Sundays:

```diff
<DayPicker
  selectedDays={ this.state.selectedDay }
+  disabledDays={ { daysOfWeek: [0] } }
  onDayClick={ this.handleDayClick }
/>
```

> The `selectedDays` and `disabledDays` prop can accept [different value types](http://react-day-picker.js.org/Modifiers.html) to give you more flexibility about which days should appear selected or disabled.

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

class SelectDay extends React.Component {
  
  state = {
    selectedDay: new Date(),
  };

  handleDayClick = (day, { selected, disabled }) => {
    if (disabled) {
      return;
    }
    if (selected) {
      this.state({ 
        selectedDay: undefined 
      });
      return;
    }
    this.state({ 
      selectedDay: day 
    });
  }
  
  render() {
    return (
      <div>
        <DayPicker 
          selectedDays={ this.state.selectedDay }
          disabledDays={ { daysOfWeek: [0] } }
          onDayClick={ this.handleDayClick } 
        />
        <p>
          The selected day is { this.state.selectedDay.toLocaleDateString() }
        </p>
      </div>
    )
  }
}
```

Check out [this example](http://react-day-picker.js.org/examples?disabled) running a similar implementation.

## Next steps

The `selectedDays`/`disabledDays` props and the `onDayClick` event handler can implement a more complex logic to respond to your app's needs. For example, you can make the date picker to [select a range of days](http://react-day-picker.js.org/examples?range).

You can go deeper with the customization using **day modifiers**. Read more about them in the [next chapter](Modifiers.md).
