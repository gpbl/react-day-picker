---
layout: api
title: DayPickerInput API
permalink: docs/api-input.html
redirect_from: 
  - /DayPickerInputAPI.html
---

<picture style="text-align: center;display: block"><a href="/examples/input-advanced.html"><img src="../images/demo-input.png" width="200" /></a></picture>

Use the `DayPickerInput` component to render an input field opening  the `DayPicker` in an overlay.

```js
import DayPickerInput from 'react-day-picker/DayPickerInput';
```

## Reference

`<DayPickerInput />` accepts all the props accepted by a standard `<input/>`, plus the following ones:

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

### clickUnselectsDay

**Type**: `Boolean` | **Default**: `false`

Unselect and clear the input when clicking on a previously selected day.

### component

**Type**: `String|React.Component|React.PureComponent` | **Default**: `input`

The component class to render the input field. The component must be compatible with the standard HTML `input`s: i.e. it should support the `onChange`, `onFocus`, `onKeyUp`, `onClick` and `onBlur` and the `focus` props.

If your custom component doesn't support such props, wrap it in a component contaning them. For example:

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

### dayPickerProps

**Type**: `Object` | **Default**: {}

The [DayPicker props](api-daypicker.md) to customize the DayPicker rendered in the overlay.

Note that the `selectedDays` prop, the `numberOfMonths` prop and the `selected` modifier are handled by this component, thus they will be ignored.

### format

**Type**: `String|Array<String>` | **Default**: `L`

The format strings used for parsing the date entered in the input field. It accepts all the [format strings](https://momentjs.com/docs/#/displaying/format/) used by moment.js.

### hideOnDayClick

**Type**: `Boolean` | **Default**: `true`

Hides the overlay when the user clicks on a day cell.

### onDayChange

**Type**: `(day: date, modifiers: Object) => void`

Handler function called when the user types a valid day (according to the `format` prop) or when a day is clicked on the calendar. 

If the day is not valid, `day` and `modifiers` arguments will be `undefined` (useful to display validation warnings).
