# DayInput component

react-day-picker comes with an handy input component to display the day picker together with an input field. [See this example](http://react-day-picker.js.org/examples/?input).

### Setup

* [momentjs](https://momentjs.com/) is required to validate and format the date typed by the user. Make sure you have it installed in your dependencies:

  ```bash
  yarn add moment
  # or if you use npm
  npm install moment --save
  ```

* In your code, import the component from `react-day-picker/DayInput`
  
  ```js
  import DayInput from 'react-day-picker/DayInput';
  ```

## Example

```jsx
import React from 'react';
import moment from 'moment';

import DayInput from 'react-day-picker/DayInput';

function MyForm() {
  return (
    <form>
      <DayInput
        name="birthday"
        placeholder="DD/MM/YYYY"
        format="DD/MM/YYYY"
        dayPickerProps={{
          enableOutsideDays: true,
        }}
      />
    </form>
  )
}
```

## <DayInput />  Reference

`<DayInput />` accept all the props valid for a standard `<input/>` React component plus the following ones:

### format

**Type**: `String` | **Default**: `L`

The format string used to format the date. User is expected to type the day in this format. Accept all the [format strings](https://momentjs.com/docs/#/displaying/format/) accepted by momentjs.

### dayPickerProps

**Type**: `Object` | **Default**: {}

The [DayPicker props](APIProps.md) to pass to the DayPicker.

Note that the `selectedDays` prop (as the `selected` modifier) is handled by this component, so it will be ignored.

### onDayChange

**Type**: `(day: Date, modifiers: Object) => void`

Handler function when the user types a valid day (according to the `format` prop) or clicks on a day on the calendar. 

If the typed day is not valid, `day` and `modifiers` will be `undefined` (useful to display validation warnings).

### hideOnDayClick

**Type**: `Boolean` | **Default**: `true`

Hides the day picker when the user clicks on a day cell.

### component

**Type**: `String|Function|React.Component` | **Default**: `input`

The component to render the input field. You can use your custom component here to render the input field, but it must support the `onChange`, `onClick`, `onFocus`, `onBlur` and `onKeyUp` props.