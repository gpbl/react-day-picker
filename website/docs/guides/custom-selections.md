# Custom Selections

In the [Selecting Days guide](/basics/selecting-days). we have set different
modes to change the selection behavior.

To implement a selection behavior by yourself, you can either switch to custom
selection mode or – to keep the built-in modes – use a custom Day component.

## Switching to the custom mode

To switch to custom selection, set the `mode` prop to `custom`:

### Example: multiple select

```include
custom-selection-multiple.tsx
```

## Using a custom Day component

To refine how the selection works when interacting with the day, you can use a
custom `Day` component to extend the built-in selection modes.

DayPicker includes a [useDay hook](/api/functions/useDay) useful for creating a
custom `Day` component.

1. create a new `Day` component following the `useDay` requirements
2. pass the new component to the `components` prop

### Example: range selections with shift key

The following example implements a DayPicker that allows selecting ranges only
when the user is pressing the Shift key while clicking a day.

```include
custom-selection-useday.tsx
```
