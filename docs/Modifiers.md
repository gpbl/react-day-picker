# Use of modifiers

Modifiers give you the full control over the appearance and the behavior of the day picker. Modifiers are _named functions_ called when rendering the day cells, and they take the day as first argument. They return `true` or `false`.

For example, those functions are valid modifiers:

```js
function isSunday(day) {
  return day.getDay() === 0;
}
function isFirstDayOfMonth(day) {
  return day.getDate() === 1;
}
```

You pass modifiers to the day picker using the `modifiers` prop:

```jsx
<DayPicker modifiers={{ isSunday, isFirstDayOfMonth }} />
```

> Under the hood, the `selectedDays` and `disabledDays` props set a `selected` and a `disabled` modifier.

### Use modifiers to style the day cells

The CSS class for a day cell will get the modifier (as in [BEM-like syntax](https://css-tricks.com/bem-101/)) when the corresponding function returns `true` for the given day.

For example, using the modifiers above, any cell representing a Sunday will have the `.DayPicker-Day--isSunday` class name, and the first day of the month will have a `.DayPicker-Day--isFirstDayOfMonth` class name.

### Access modifiers from the event handlers

Modifiers are passed as argument to the event handlers:

```jsx
function handleDayClick(e, day, modifiers) {
  if (modifiers.isSunday) {
    console.log('Sunday has been clicked')
  }
}

function handleDayMouseEnter(e, day, modifiers) {
  if (modifiers.isFirstDayOfMonth) {
    console.log('The first day of month received mouse enter')
  }
}

<DayPicker
  modifiers={{ isSunday, isFirstDayOfMonth }}
  onDayClick={ handleDayClick }
  onDayMouseEnter={ handleDayMouseEnter }
/>
```

### Use DateUtils to create modifiers

react-day-picker includes [DateUtils](DateUtils.md), a small function library useful to simplify the creation of modifiers.
