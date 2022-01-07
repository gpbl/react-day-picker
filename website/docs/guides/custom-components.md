# Custom Components

Use the `components` prop to swap the [internal components](/api/interfaces/components) used by DayPicker.

## Custom Day

You can further refine the interaction with the day cells by using a custom `Day` component and the [useDayRender hook](/api/functions/useDayRender).

### Range selections with Shift key

The following example implements a date picker to select ranges while pressing the <kbd>Shift</kbd> key.

```include
range-shift-key
```

### Wrapping the day

Wrap the `DayContent` element with a `time` HTML tag.

```include
custom-day
```

## Custom Row

### Example: disable rows in the past

Implement a custom component to hide the rows of past weeks.

```include
custom-disable-row
```
