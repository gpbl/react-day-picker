# Component props

> HTML props (such as `className`, `tabIndex`, `style` etc.) are spread to the root's `div` element.

#### modifiers (Object)

An object of named functions returning a boolean: `modifier(day: Date) -> Bool`.

When a function of this object evaluates `true`, its name is used as CSS modifier for the day's cell.

For example, the following modifiers will add a `DayPicker-Day--isFirstOfMonth` CSS class to the cells of the months' first days, and `DayPicker-Day--isDisabled` to each Sunday.

```jsx
import DayPicker from "react-day-picker";

function isFirstOfMonth(day) {
  return day.getDate() === 1;
}
function isDisabled(day) {
  return day.getDay() === 0;
}

function MyComponent() {
  return <DayPicker modifiers={ { isDisabled, isFirstOfMonth } } />
}
```

By default, the calendar includes `--today` and `--outside` modifier. "Outside" are the days that appear on the calendar but don't belong to the current month.

---

#### initialMonth (Date)

The month to display in the calendar. Default is the current month.

---

#### numberOfMonths (Number)

The number of months to render, where `initialMonth` is the first month. Default is `1`.

---

#### reverseMonths (Boolean)

Render the months in reversed order. Useful when `numberOfMonths` is greater than 1 to display the most recent month first. Default is `false`.

---

#### enableOutsideDays (Boolean)

Display the days outside the current month. Default is `false`.

---

#### canChangeMonth (Boolean)

Enable the navigation between months. Default is `true`.

---

#### fromMonth (Date)

The first allowed month. Users won't be able to navigate or interact with the days before it.

---

#### toMonth (Date)

The last allowed month. Users won't be able to navigate or interact with the days after it.

---

#### localeUtils (Object)

Object of functions to format dates and to get the first day of the week. Pass your own utils to support localization.
By default the used locale is English (US). See also [Localization](Localization.md) and [LocaleUtils](LocaleUtils.md).

---

#### locale (String)

The locale used by the `localeUtils` functions. Default is `en`.  See also [Localization](Localization.md) and [LocaleUtils](LocaleUtils.md).

---

#### captionElement (Element)

A React element to use as caption. This element is cloned with the following props:

* `date: Date` The currently displayed month.
* `localeUtils: Object` The [localeUtils](#localeutils-object) object passed to the component.
* `locale: String` The current [locale](#locale-string) passed to the component.
* `onClick` The [onCaptionClick](#oncaptionclick-function) function, if specified.

The default caption is a `div` with class `DayPicker-Caption`, showing a "month year" text.

```js
function MyCaption({ date, localeUtils, locale, onClick }) {
  return <div>{ date.getMonth() + 1 } / { date.getFullYear() }</div>;
}

function MyComponent() {
  return <DayPicker captionElement={ <MyCaption /> } />
}
```

See also [this advanced example](../examples/#yearNavigation), showing a year navigation element using this prop.

---

#### renderDay (Function)

Returns the content of a day cell. By default, it renders the day's date: `(day) => day.getDate()`.

It can return React elements. For example, the following code will display the day and the name of the people celebrating a birthday that day.

```jsx
function renderDay(day) {
  const birthdays = getBirthdaysForDay(day)
  return (
    <div>
      <div className="day">
        { day.getDate() }
      </div>
      {
        birthdays.map((birthday) =>
          <div className="birthday">
            { birthday.name }
          </div>
        )
      }
    </div>
  )
}

function BirthdaysCalendar() {
  return <DayPicker renderDay={renderDay} numberOfMonths={ 12 } />
}
```

---

#### onDayClick (Function)

Event handler when the user clicks on a day cell. Example:

```jsx
function onDayClick(e, day, modifiers) {
  console.log("Day %s has been clicked", day.toString());
}
```

---

#### onDayMouseEnter (Function)

Event handler when the mouse enters a day cell. Example:

```jsx
function onDayMouseEnter(e, day, modifiers) {
    // do stuff, e.g. show a tooltip
}
```

---

#### onDayMouseLeave (Function)

Event handler when the mouse leave a day cell. Example:

```jsx
function onDayMouseLeave(e, day, modifiers) {
   // do things, e.g. hide a tooltip
}
```

---

#### onDayKeyDown (Function)

Event handler when the day cell gets the key down event. Example:

```jsx
function onDayKeyDown(e, day, modifiers) {
  console.log("Day %s onKeyDown", day.toString());
}
```

---

#### onMonthChange (Function)

Event handler when the month is changed, i.e. clicking the navigation buttons or using the keyboard. Example:

```jsx
function onMonthChange(month) {
   // do magic, e.g. request a server for days availability
}
```

---

#### onCaptionClick (Function)

Event handler when the user clicks on the caption in the header displaying the month. Example:

```jsx
function onCaptionClick(e, currentMonth) {
  // Set daypicker to initial month
  var daypicker = this.refs.daypicker;
  daypicker.showMonth(daypicker.props.initialMonth);
}
```

---


#### className (String)

Class names to add to the root node.

---

#### style (Object)

A custom style object to add to the root node.

---

#### tabIndex (Number)

The tab index for keyboard navigation. Default is `0`.

---
