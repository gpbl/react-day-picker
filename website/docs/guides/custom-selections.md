# Custom Selections

In the [Selecting Days tutorial](/basics/selecting-days). we have set different
modes to change the selection behavior. Under the hood, DayPicker handles the
interaction with the days, assigning them the `selected` modifier.

To implement a selection behavior by yourself, you can either switch
to uncontrolled selection mode or – to keep the built-in modes – use a custom Day component.

## Switching to the uncontrolled mode

1. set the selection mode to `mode="uncontrolled"`
2. store the selected dates in the parent’s state
3. use the `selected` and `onDayClick` props

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
