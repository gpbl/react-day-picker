# Use of Day Modifiers

_Day modifiers_ change the aspect of the day cells and/or customize the interaction with of the calendar.

## Type of modifier values

The value of a modifier can be either:

- **a `Date` object**, to match a specific day
- **a `range` object** with `from` and `to` keys, to match a range of days:

  ```js
  const range = { 
    from: new Date(2015, 0, 12), 
    to: new Date(2015, 0, 16) 
  }
  ```
  will match the days between the 12th and the 16th of January.

- **an object with a `before` key**, to match the days before the given date:
  ```js
  const range = { 
    before: new Date(), 
  }
  ```
  will match all the past the days (i.e. the days before today).

- **an object with a `after` key**, to match the days after the given date:

  ```js
  const range = { 
    after: new Date(2018, 0, 1), 
  }
  ```

  will match all the days after the January, 1st 2018.

- **a function** taking the day as first argument and return a boolean value. For example:
  
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

## Examples

A CSS modifier (as in [BEM-like syntax](https://css-tricks.com/bem-101/)) is added to each day cell when a day matches a modifier. You set the day modifiers with the `selectedDay`, `disabledDays` or `modifiers` props. Examples:

* To add a `.DayPicker-Day--selected` CSS class to the February, 12th 2017 cell:

```jsx
<DayPicker selectedDays={ new Date(2017, 1, 12) } />
```

* To add a `.DayPicker-Day--disabled` to the 4th and 7th of February 2017

```jsx
<DayPicker disabledDays={ [new Date(2017, 2, 4), new Date(2017, 2, 7)] } />
```

* To set `.DayPicker-Day--past` to the past days:

```jsx
<DayPicker 
  modifiers={ { 
    past: { before: new Date() } 
  } }
/>
```

You can pass more day modifiers using the `modifiers` prop:

```jsx
<DayPicker 
  modifiers={{ 
    special: new Date(2018, 11, 11),
    
    booked: { 
      from: new Date(2017, 1, 11), 
      to: new Date(2017, 2, 23) 
    },
    
    holiday: [
      new Date(2018, 11, 25), 
      new Date(2018, 10, 31),
      { from: new Date(2018, 06, 10), to: new Date(2018, 06, 20) }
    ],

    sunday: day => day.getDay() === 0, 
    
    firstOfMonth: day => day.getDate() === 1,
  }}
/>
```

### `selected` and `disabled` modifiers

Under the hood, the `selectedDays` and `disabledDays` props act as shortcut for the `selected` and a `disabled` modifiers. The following renders the same calendar:

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

## Accessing modifiers from event handlers

Modifiers are passed as argument to the event handlers:

```jsx
function handleDayClick(day, modifiers) {
  if (modifiers.sundays) {
    console.log('Sunday has been clicked')
  }
}

function handleDayMouseEnter(day, { isFirstOfMonth, disabled }) {
  if (isFirstOfMonth) {
    console.log('The first day of month received mouse enter')
  }
  if (disabled) {
    console.log('This day is disabled')
  }
}

<DayPicker
  disabledDays={ new Date(2015, 0, 12) }
  modifiers={{ sundays, isFirstOfMonth }}
  onDayClick={ handleDayClick }
  onDayMouseEnter={ handleDayMouseEnter }
/>
```

### Use DateUtils to create modifiers

react-day-picker includes [DateUtils](DateUtils.md), a small function library useful to simplify the creation of advanced modifiers.
