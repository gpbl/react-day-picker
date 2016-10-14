# Getting started using react-day-picker

To understand better how react-day-picker works, we will create a simple React component to select a day from the Day Picker.

First, write a new stateful `SelectDay` component:

```jsx
import React from "react";
import DayPicker from "react-day-picker";

import "react-day-picker/lib/style.css";

class SelectDay extends React.Component {
  render() {
    return (
      <div>
        <DayPicker />
      </div>
    )
  }
}
```

> **Note** The CSS in `react-day-picker/lib/style.css` is used here only for example purpose. Read [Styling](Styling.md) to know how to properly style this component. In this example, we are using [webpack-css-loader](https://github.com/webpack/css-loader) to require CSS files.

### Use `onDayClick` to make a day clickable

The code above displays the Day Picker, yet nothing happens when a day is clicked. Use the `onDayClick` prop to store the clicked day in the component's state:

```jsx
class SelectDay extends React.Component {

  state = {
    selectedDay: null
  };

  handleDayClick(e, day, modifiers) {
    this.setState({ selectedDay: day });
  }

  render() {
    const { selectedDay } = this.state;
    return (
      <div>
        <DayPicker onDayClick={ this.handleDayClick.bind(this) } />
        <p>
          Selected: { selectedDay ? selectedDay.toLocaleDateString() : "(none)" }
        </p>
      </div>
    )
  }
}
```

### Use modifiers to change the days appearance

The selected day is indistinguishable from the others until we don't style it. For example, we want the selected day appear on a blue background.

To change the day appearance, we add a **modifier**, i.e. a string used as CSS modifier for the day's element.

#### Create a CSS style with a BEM modifier

First, create a CSS class in an external CSS file, where the day element has a `selected` modifier:

```css
/* modifiers.css */
.DayPicker-Day--selected {
  background-color: #4A90E2;
  color: white;
}
```

> We are using a [BEM-like syntax](https://css-tricks.com/bem-101/). In the rendered HTML, the `DayPicker-Day` class represents the day element, and `--selected` is the modifier we want to use to mark a day as "selected".

Make sure you include the CSS in the component:

```javascript
import React from "react";
import DayPicker from "react-day-picker";

import "react-day-picker/lib/style.css";
import "../modifiers.css";
// ..snip...
```

#### To add modifiers, pass named functions to the `modifiers` prop

To add modifiers, use the `modifiers` prop. This prop takes an **object of named functions**. Those functions are called when rendering the day elements, and take the day as argument. As they returns `true`, the function’s name is added as modifier.

Create an object containing a function named `selected`. This function must return `true` when the selected day is the same day shown in the element:

```jsx
// snip
render() {
  const { selectedDay } = this.state;
  const modifiers = {
    selected(day) {
      if (selectedDay == null) return false;
      return day.getDate() === selectedDay.getDate() &&
        day.getMonth() === selectedDay.getMonth() &&
        day.getFullYear() === selectedDay.getFullYear();
    }
  }
  return (
    <div>
      <DayPicker modifiers={ modifiers } onDayClick={ this.handleDayClick.bind(this) } />
      <p>
        Selected: { selectedDay ? selectedDay.toLocaleDateString() : "(none)" }
      </p>
    </div>
  )
}
// snip
```

Now, when the day is selected, it appears with a blue background because its element has the `DayPicker-Day--selected` class.

### Access modifiers from the event handlers

Modifiers are passed to event handlers. For example, if the selected day is clicked again, we un-select it:

```javascript

handleDayClick(e, day, modifiers) {
  if (modifiers.indexOf("selected") > -1) {
    this.setState({
      selectedDay: null
    })
    return;
  }
  this.setState({
    selectedDay: day
  });
}

```

We can use the `modifiers` argument to prevent the selection of a specific day. For example, we want the following modifier disable the interaction with any Sunday:

```javascript
const modifiers = {
  isSunday: day => day.getDay() === 0
}
```

then, the click handler stops the interaction when the day contains the `isSunday` modifier:

```javascript
handleDayClick(e, day, modifiers) {
  if (modifiers.indexOf("isSunday") > -1) {
    return;
  }
  // etc.
}

```

### Use DateUtils to simplify the code

react-day-picker includes [DateUtils](DateUtils.md), a function library to simplify the creation of modifiers. For example, we can use `isSameDay()` to detect if two days are the same. We can use it for the `selected` modifier:

```jsx
import DayPicker, { DateUtils } from "react-day-picker/utils";

// snip

render() {
  const { selectedDay } = this.state;
  const modifiers = {
    selected: day => dateUtils.isSameDay(day, selectedDay)
  }
  return (
    <div>
      <DayPicker modifiers={ modifiers } onDayClick={ this.handleDayClick.bind(this) } />
      <p>
        Selected: { selectedDay ? selectedDay.toLocaleDateString() : "(none)" }
      </p>
    </div>
  )
}
```

See [dateUtils](DateUtils.md) for more information.

### Conclusion

After reading this guide you should know how react-day-picker works:

* use event handlers like `onDayClick` to enable user interaction
* use modifiers to change the appearance of the days in the calendar
* use modifiers to prevent user interaction with some days

See the whole example [here](http://react-day-picker.js.org/examples?selectable).

Next, explore the [Component API](API.md) to see what else you can do.
