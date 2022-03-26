# Upgrading from v7

v8 is a mayor upgrade for DayPicker with new props and style. We include here a quick guide for helping you to upgrade to v8.

:::info v7 is frozen

v7 is frozen and there are no plans for updating it. If you have bugs or feature requests, please consider to upgrade to v8.

The legacy documentation for v7 can be found at https://react-day-picker-v7.netlify.app.

:::

## Updated Props

- `showWeekNumbers` has been renamed to `showWeekNumber`
- `todayButton` has been removed. See [Controlling the current month](https://react-day-picker.js.org/basics/navigation#controlling-the-current-month) for an example implementing the same feature.
- `initialMonth` has been renamed to `defaultMonth`. See [Navigating months](https://react-day-picker.js.org/basics/navigation) for more details about using `month` and `defaultMonth`.
- `canChangeMonth` has been renamed to `disableNavigation`
- `selectedDays` has been renamed to `selected`. See also: [Selecting Days guide](https://react-day-picker.js.org/basics/selecting-days).
- `disabledDays` has been renamed to `disabled`. See also: [Disabling days](https://react-day-picker.js.org/basics/modifiers#disabling-days).

## Class names and Styling

Class names and rendered HTML elements are different from the previous versions. You will need to rewrite your custom styles. See [Styling DayPicker](https://react-day-picker.js.org/basics/styling) for more information.

## DayPickerInput

The `DayPickerInput` component has been removed. If you upgrade to v8, you will need to rewrite your implementation:

- Try with [useInput](https://react-day-picker.js.org/guides/input-fields) hook.
- See [this example](https://react-day-picker.js.org/guides/date-picker-dialog) to build a date picker with v8 in a dialog.
