# Input Fields

Some user interfaces displays a date picker working with an input field.

DayPicker includes the [useInput hook](/api/functions/useinput), returning props to bind DayPicker with a single input field.

Should you need something more sophisticated, give a look to the [useInput](api/functions/useInput) source to implement your own hook.

## Bind DayPicker to an input field

To bind a DayPicker to an input field, pass the `useInput` returned values to a `DayPicker` and an `input` component:

```include-example
input-fields
```
