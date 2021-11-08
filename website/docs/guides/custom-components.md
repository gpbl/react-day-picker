---
pagination_next: null
---

# Custom Components

Use the `components` prop to to swap the [internal
components](/api/interfaces/components) used by DayPicker.

The [useNavigation](/api/functions/usenavigation),
[useDayPicker](/api/functions/usedaypicker) and [useDay](/api/functions/useday)
hooks returns values that can help to build the components.

### Example: wrap the day

Wrap the `DayContent` element with a `time` HTML tag.

```include
custom-components-day.tsx
```

### Example: disable rows in the past

Implement a custom component to hide the rows of past weeks.

```include
custom-components-disable-row.tsx
```

### Example: extend selection mode

Implement a `Day` component to select ranges only when the shift key is pressed:

```include
custom-selection-useday.tsx
```
