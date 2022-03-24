# Selecting Days

DayPicker supports **4 selection modes** to display days as selected. Enable a selection mode by setting the `mode` prop.

```tsx
<DayPicker mode="single" />
```

- **Single mode** `mode="single"`: only a single day can be selected
- **Multiple mode** `mode="multiple"`: allow selection of multiple days
- **Range mode** `mode="range"`: allow the selection of range of days
- **Custom mode** `mode="custom"`: let the parent component handle the selection

## Single Selections

To enable single day selection, set `mode="single"` and use `onSelect` to get the selected day.

```include-example
single
```

### Making a selection required

To make a selection required, use `defautSelected` with `required`.

For example, to set the default selected date to today:

```include-example
single-required
```

## Selecting Multiple Days

Use `mode="multiple"` to allow the selection of multiple days:

```include-example
multiple
```

### Limiting the selectable days

Use the `min` and `max` props to limit the amount of days that can be selected.

```include-example
multiple-min-max
```

## Selecting a Range of days

Use `mode="range"` and `onSelectRange` to allow the selection of multiple days.

```include-example
range
```

### Limiting the range size

Use the `min` and `max` props to limit the amount of days in the range.

```include-example
range-min-max
```

## Custom Selection Mode

If the built-in selection modes are not enough for your app’s requirements, you can control the selection behavior using `mode="custom"` and `onDayClick`.

For example, to implement the "single selection" behavior (like when `mode="single"`):

```include-example
custom-single
```

### Example: custom multiple select

The case of a multi-days select is a bit more complex as it deals with an array. The following example replicates the `mode="multiple"`
selection mode.

```include-example
custom-multiple
```
