# Component props

### canChangeMonth

**Type**: `Bool` | **Default**: `true`

Enable the navigation between months.

### captionElement

**Type**: `Element`

A React element to use as caption. This element is cloned with the following props:

* `date: Date` The currently displayed month.
* `localeUtils: Object` The [localeUtils](#localeutils-object) object passed to the component.
* `locale: String` The current [locale](#locale-string) passed to the component.
* `onClick` The [onCaptionClick](#oncaptionclick-function) function, if specified.

The default caption is a `div` with class `DayPicker-Caption`, showing a "month year" text.

See also [this advanced example](../examples?yearNavigation), showing a year navigation element using this prop.

### className

**Type**: `String`

Additional CSS class names to add to the defaults.

### containerProps

**Type**: `Object`

Props to pass to the container `div` HTML element. Only props by a `div` are valid.

`className`, `role`, `tabIndex`, `onKeyDown`, `onFocus` and `onBlur` must be passed directly to the component. E.g.:

```jsx
<DayPicker
  containerProps={{ className: 'will_be_ignored' }}
  className="will_work"
/> 
```

### disabledDays

**Type**: `Date` || `Object` || `(day: Date) ⇒ Bool` || `Array<Date|Object|Function>`

Indicate which day should appear as disabled. Set a `selected` modifier. 

See [Modifiers](Modifiers.md) for a reference of the accepted values.

### enableOutsideDays

**Type**: `Bool` **Default**: `false`

Display the days outside the current month.

### firstDayOfWeek

**Type**: `Number` **Default**: `0` (Sunday)

The day to use as first day of the week, starting from `0` (Sunday) to `6` (Saturday).

### fixedWeeks

**Type**: `Bool` **Default**: `false`

Display 6 weeks per months, regardless the month's number of weeks. 
Outside days will be always shown if setting this to `true`.

### fromMonth

**Type**: `Date`

The first allowed month. Users won't be able to navigate or interact with the days before it.

### initialMonth

**Type**: `Date` **Default**: The current month

The month to display in the calendar. Default is the current month.

### locale

**Type**: `String` **Default**: `en`

The locale used by the `localeUtils` functions. Default is `en`.  See also [Localization](Localization.md) and [LocaleUtils](LocaleUtils.md).

### localeUtils

**Type**: `Object`

Object of functions to format dates and to get the first day of the week. Pass your own utils to support localization.
By default the used locale is English (US). See also [Localization](Localization.md) and [LocaleUtils](LocaleUtils.md).

### modifiers

**Type**: `Object`

An object of [modifiers values](Modifiers.md), whose keys will be used as CSS modifiers.

As default, the calendar includes `today` and `outside` modifiers. (_Outside_ are the days that appear on the calendar but don't belong to the current month).

### months

**Type**: `Array<String>` **Default**: `['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']`

An array containing the long weekdays names to use in the month's header.

### navbarElement

**Type**: `Element`

Custom React element to render the navigation bar. It will receive the following props:

* className `String`
* previousMonth `Date`
* nextMonth `Date`
* showPreviousButton `Bool`
* showNextButton `Bool`
* onPreviousClick `() => void`
* onNextClick `() => void`
* dir `String`
* localeUtils `Object`
* locale `String`

### numberOfMonths `Number`

**Type**: `Number` **Default**: `1`

The number of months to render, where `initialMonth` is the first month.

### pagedNavigation

**Type**: `Bool` **Default**: `false`

When displaying multiple months, navigation will be paginated displaying the `numberOfMonths` at time.

### renderDay

**Type**: `(day: Date, modifiers: Object) ⇒ Element` **Default**: `(day) ⇒ day.getDate()`

Returns the content of a day cell.

### reverseMonths

**Type**: `Bool` **Default**: `false`

Render the months in reversed order. Useful when `numberOfMonths` is greater than 1 to display the most recent month first.

### selectedDays 

**Type**: `Date` || `Object` || `(day: Date) ⇒ Bool` || `Array<Date|Object|Function>`

Indicate which day should appear as selected. Set a `selected` modifier.

See [Modifiers](Modifiers.md) for a reference of the accepted values.

### toMonth

**Type**: `Date`

The last allowed month. Users won't be able to navigate or interact with the days after it.

### weekdayElement

**Type**: `Element`

Custom React element to render the weekday cells in the header. It will receive the following props:

* weekday `Number`
* className `String`
* localeUtils `Object`
* locale `String`

### weekdaysLong

**Type**: `Array<String>` **Default**: `['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']`

An array containing the long weekdays names to use in the month's header. Must start from Sunday.

### weekdaysShort

**Type**: `Array<String>` **Default**: `['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']`

An array containing the short weekdays names to use in the month's header. Must start from Sunday.

## Event handlers

### onCaptionClick

**Type**: `(currentMonth: Date, e: SyntethicEvent) ⇒ void`

Event handler when the user clicks on the caption in the header displaying the month.

---

### onDayClick

**Type**: `(day: Date, modifiers: Object, e: SyntethicEvent) ⇒ void`

Event handler when the user clicks on a day cell.

---

### onBlur

**Type**: `(e: SyntethicEvent) ⇒ void`

Event handler when the calendar get the `blur` event.

### onDayKeyDown

**Type**: `(day: Date, modifiers: Object, e: SyntethicEvent) ⇒ void`

Event handler when the day cell gets the `keydown` event.

### onDayMouseEnter

**Type**: `(day: Date, modifiers: Object, e: SyntethicEvent) ⇒ void`

Event handler when the mouse enters a day cell.

### onDayMouseLeave

**Type**: `(day: Date, modifiers: Object, e: SyntethicEvent) ⇒ void`

Event handler when the mouse leave a day cell.

### onDayTouchStart

**Type**: `(day: Date, modifiers: Object, e: SyntethicEvent) ⇒ void`

Event handler when the day cell gets the `touchStart` event.

### onDayTouchEnd

**Type**: `(day: Date, modifiers: Object, e: SyntethicEvent) ⇒ void`

Event handler when the day cell gets the `touchEnd` event.

### onFocus

**Type**: `(e: SyntethicEvent) ⇒ void`

Event handler when the calendar get the `focus` event

### onKeyDown

**Type**: `(e: SyntethicEvent) ⇒ void`

Event handler when the calendar get the `keydown` event

### onMonthChange

**Type** `(month: Date) ⇒ void`

Event handler when the month is changed, i.e. clicking the navigation buttons or using the keyboard.
