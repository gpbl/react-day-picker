# Use of Modifiers

Modifiers give you the full control over the appearance and the behavior of the date picker. You use modifiers to implement the different logic according to your data.

Modifier values are passed to the component via the `selectedDays`, `disabledDays` and `modifier` props. 

The value of a modifier can be either:

- **a `Date` object**, to match a specific day
- **a `range` object** with `from` and `to` keys, to match a range of days. For example 

  ```js
  const range = { 
    from: new Date(2015, 0, 12), 
    to: new Date(2015, 0, 16) 
  }
  ```
  will match the days between the 12th and the 16th of January.

- **an object with a `before` key**, to match the days before the given date. For example 
  ```js
  const range = { 
    before: new Date(), 
  }
  ```
  will match all the past the days (i.e. the days before today).

- **an object with a `after` key**, to match the days after the given date. For example 

  ```js
  const range = { 
    before: new Date(2018, 0, 1), 
  }
  ```

  will match all the days after the January, 1st 2018.

- **a function** that take the day as first argument and return a boolean value. For example:
  
  ```js
  function sundays(day) {
    return day.getDay() === 0;
  }
  function isFirstOfMonth(day) {
    return day.getDate() === 1;
  }
  ```
  are all valid modifiers.
- **an array of the above** 

You pass modifiers to the day-picker using the `modifiers` prop. Here some example of modifiers:

```jsx
<DayPicker 
  modifiers={{ 
    special: new Date(2018, 11, 11),
    booked: { from: new Date(2017, 1, 11), to: new Date(2017, 2, 23) },
    holiday: [new Date(2018, 11, 25), new Date(2018, 10, 31)],
    sunday: day => day.getDay() === 0, 
    firstOfMonth: day => day.getDate() === 1,
  }}
/>
```

#### `selected` and `disabled` modifiers

Under the hood, the `selectedDays` and `disabledDays` props act as shortcut for the `selected` and a `disabled` modifiers. 

Hence, the following two day-picker render the same:

```jsx

function sundays(day) {
    return day.getDay() === 0;
  }
function isFirstOfMonth(day) {
  return day.getDate() === 1;
}

<DayPicker disabledDays={ sundays } selectedDays={ firstOfMonth } />

<DayPicker 
  modifiers={ { 
    disabled: sundays, 
    selected: firstOfMonth 
  }} 
/>
```

### Use modifiers to style the day cells

The CSS class for a day cell will get the modifier (as in [BEM-like syntax](https://css-tricks.com/bem-101/)) when the corresponding function returns `true` for the given day.

For example, using the modifiers above, any cell representing a Sunday will have the `DayPicker-Day--sundays` class name, and the first day of the month will have a `DayPicker-Day--isFirstOfMonth` class name.

### Access modifiers from the event handlers

Modifiers are passed as argument to the event handlers:

```jsx
function handleDayClick(day, modifiers) {
  if (modifiers.sundays) {
    console.log('Sunday has been clicked')
  }
}

function handleDayMouseEnter(day, { isFirstOfMonth }) {
  if (isFirstOfMonth) {
    console.log('The first day of month received mouse enter')
  }
}

<DayPicker
  modifiers={{ sundays, isFirstOfMonth }}
  onDayClick={ handleDayClick }
  onDayMouseEnter={ handleDayMouseEnter }
/>
```

### Use DateUtils to create modifiers

react-day-picker includes [DateUtils](DateUtils.md), a small function library useful to simplify the creation of advanced modifiers.
