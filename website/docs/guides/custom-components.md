# Custom Components

Use the `components` prop to customize the [components](/api/interfaces/customcomponents) used by DayPicker.

## Custom Day

You can further refine the interaction with the day cells by using a custom `Day` component and the [useDayRender hook](/api/functions/useDayRender).

### Range selections with Shift key

The following example implements a date picker to select ranges while pressing the <kbd>Shift</kbd> key.

```include-example
range-shift-key
```

### Wrapping the day

Wrap the `DayContent` element with a `time` HTML tag.

```include-example
custom-day
```

## Custom Row

### Example: disable rows in the past

Implement a custom component to hide the rows of past weeks.

```include-example
custom-disable-row
```
