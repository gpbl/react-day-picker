# Custom Components

Use the `components` prop to replace some of the internal components used by DayPicker with a custom implementation.

Components that can be changed are described in the [CustomComponents interface](/api/interfaces/CustomComponents).

:::note

Custom components are an advanced feature. Look at the [**components source**](https://github.com/gpbl/react-day-picker/tree/master/packages/react-day-picker/src/components) to understand how the internal components are built.

:::

## DayPicker hooks

When creating custom components, you will find useful the DayPicker hooks:

- [useDayPicker](/api/functions/useDayPicker) - to get the props passed to DayPicker.
- [useNavigation](/api/functions/useNavigation) - to navigate between months and years.
- [useDayRender](/api/functions/useDayRender) - useful to render the day cell from a custom `Day` component.
- [useFocusContext](/api/functions/useFocusContext) - handle the focus between elements.
- [useActiveModifiers](/api/functions/useActiveModifiers) - to get the modifiers applied to a day.

## Examples

### Custom Caption

Implement a custom `Caption` component with next/previous buttons. Note the use of the [useNavigation hook](/api/functions/useNavigation) to navigate between months.

```include-example
custom-caption
```

### Wrapping the day

Implement a custom `DayContent` component

```include-example
custom-day
```

### Range selections with Shift key

Implement a custom `Day` component to select ranges while pressing the <kbd>Shift</kbd> key.

```include-example
range-shift-key
```

### Disable rows in the past

Implement a custom component to hide the rows of past weeks.

```include-example
custom-disable-row
```
