# Input Fields

It is a common scenario to bind the date picker with an input field. Since these kind of implementations may have different requirements, DayPicker doesn't come with an input field component.

It is easy to build a custom input field that works together with DayPicker:

1. when the input field changes, parse its value and set the selected day in DayPicker
2. when a day is selected from DayPicker, set the input value formatting the selected date.

## Example: Date Picker Dialog

Implement a DayPicker dialog according to the WAI-ARIA’s [dialog pattern](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/datepicker-dialog.html) for date pickers.

The following example uses [react-popper](https://popper.js.org/react-popper/) for the popover.

```include-example dependencies=popper,react-popper,@popperjs/core,focus-trap-react,prop-types
date-picker-dialog
```

## Example: Range Selection

```include-example
input-range
```

## Example: Time Selection

DayPicker can also be used alongside a time input field, by setting the time to the selected date.

```include-example
input-time
```

## Using the `useInput` Hook

To bind DayPicker to an input field, DayPicker includes the [useInput hook](/api/functions/useinput), returning props to bind DayPicker with a single input field. Should you need something more sophisticated, give a look to the [useInput](/api/functions/useinput) source to implement your own hook.

```include-example
useinput.tsx
```
