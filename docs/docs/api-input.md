---
layout: api
title: DayPickerInput API
permalink: docs/api-input.html
---

```js
import DayPickerInput from 'react-day-picker/DayPickerInput';
```

`<DayPickerInput />` accept all the props valid for a standard `<input/>` React component plus the following ones:

### format

**Type**: `String` | **Default**: `L`

The format string used to format the date. User is expected to type the day in this format. It works with all the [format strings](https://momentjs.com/docs/#/displaying/format/) accepted by momentjs.

### dayPickerProps

**Type**: `Object` | **Default**: {}

The [DayPicker props](api.md) to pass to the DayPicker for further customization.

Note that the `selectedDays` and `numberOfMonths` props, and a `selected` modifier, are handled by this component and they will be ignored.

### hideOnDayClick

**Type**: `Boolean` | **Default**: `true`

Hides react-day-picker when the user clicks on a day cell.

### clickUnselectsDay

**Type**: `Boolean` | **Default**: `false`

Unselect and clear the input when clicking on a previously selected day

### onDayChange

**Type**: `(day: date, modifiers: Object) => void`

Handler function when the user types a valid day (according to the `format` prop) or clicks on a day on the calendar. 

If the typed day is not valid, `day` and `modifiers` will be `undefined` (useful to display validation warnings).

### classNames

**Type**: `Object<String>`

Customize the CSS class names used when rendering the component. 

The object expects the following keys:

```js
{
  container,            // The container element
  overlayWrapper,       // The overlay's wrapper
  overlay,              // The overlay's container
}
```

### component

**Type**: `String|React.Component|React.PureComponent` | **Default**: `input`

The component to render the input field. 

To work properly with a custom input component, the passed component must be compatible with the standard HTML's `input`: this means it should support `onChange`, `onFocus`, `onKeyUp`, `onClick` and `onBlur` and the `focus` method.
See [this issue](https://github.com/gpbl/react-day-picker/issues/378).

If your custom component doesn't support such properties, wrap it in a component contaning them. For example:

```jsx
import React from 'react';
import { DayPickerInput } from 'react-day-picker';
import MyInputWithoutFocus from './MyInputWithoutFocus';

class MyInputWithFocus extends React.Component {
  focus = () => {
    this.input.focus();
  }
  render() {
    return (
      <MyInputWithoutFocus 
        ref={el => (this.input = el)} 
        {...this.props} 
      />
    );
  }
}

function MyDayPickerInput(props) {
  return <DayPickerInput component={MyInputWithFocus} />
} 

```
