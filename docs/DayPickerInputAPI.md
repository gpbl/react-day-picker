# DayPickerInput API

```js
import DayPickerInput from 'react-day-picker/DayPickerInput';
```

`<DayPickerInput />` accept all the props valid for a standard `<input/>` React component plus the following ones:

### format

**Type**: `String` | **Default**: `L`

The format string used to format the date. User is expected to type the day in this format. It works with all the [format strings](https://momentjs.com/docs/#/displaying/format/) accepted by momentjs.

### dayPickerProps

**Type**: `Object` | **Default**: {}

The [DayPicker props](APIProps.md) to pass to the DayPicker for further customization.

Note that the `selectedDays` and `numberOfMonths` props, and a `selected` modifier, are handled by this component and they will be ignored.

### hideOnDayClick

**Type**: `Boolean` | **Default**: `true`

Hides the day picker when the user clicks on a day cell.


### onDayChange

**Type**: `(day: Date, modifiers: Object) => void`

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

**Type**: `String|Function|React.Component` | **Default**: `input`

The component to render the input field. 

You can pass your custom component to render the input field, but it must support the `onChange`, `onClick`, `onFocus`, `onBlur` and `onKeyUp` props and the `focus` and `blur` methods.