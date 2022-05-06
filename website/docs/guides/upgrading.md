# Upgrading from v7

v8 is a mayor upgrade for DayPicker with new props and styles. We include here a quick reference for helping the upgrade from v7.

:::note v7 is frozen

v7 is frozen and there are no plans for updating it. If you have bugs or feature requests, please consider to upgrade to v8. The legacy documentation for v7 can be found at https://react-day-picker-v7.netlify.app.

:::

## How to upgrade to v8

1. **upgrade the dependency**
   ```bash
   npm install react-day-picker@latest
   ```
2. **remove the types package** if you were using it
   ```bash
   npm uninstall @types/react-day-picker
   ```
3. **update the CSS import**: the stylesheet has been moved to `/dist`. For example:
   ```diff
   - import `react-day-picker/lib/style.css`
   + import `react-day-picker/dist/style.css`
   ```
4. **update your custom styles**. See [Styling DayPicker](https://react-day-picker.js.org/basics/styling) for more information.
5. **update the changed props**. See the list below.

## Updated Props

- `showWeekNumbers` has been renamed to `showWeekNumber`
- `todayButton` has been removed. See [Controlling the current month](https://react-day-picker.js.org/basics/navigation#controlling-the-current-month) for an example implementing the same feature.
- `initialMonth` has been renamed to `defaultMonth`. See [Navigating months](https://react-day-picker.js.org/basics/navigation) for more details about using `month` and `defaultMonth`.
- `canChangeMonth` has been renamed to `disableNavigation`
- `selectedDays` has been renamed to `selected`. See also: [Selecting Days guide](https://react-day-picker.js.org/basics/selecting-days).
- `disabledDays` has been renamed to `disabled`. See also: [Disabling days](https://react-day-picker.js.org/basics/modifiers#disabling-days).

## DayPickerInput

The `DayPickerInput` component has been removed. If you upgrade to v8, you will need to rewrite your implementation:

- Try with [useInput](https://react-day-picker.js.org/guides/input-fields) hook.
- See [this example](https://react-day-picker.js.org/guides/input-fields#example-date-picker-dialog) to build a date picker with v8 in a dialog.
