# Component props

Please note that HTML props (such as `className`, `tabIndex`, `style` etc.) are spread to the root's `div` element.

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

### disabledDays

**Type**: `(day: Date) ⇒ Bool`

A function returning a boolean indicating if a day is disabled. Set a `disabled` modifier.

### enableOutsideDays

**Type**: `Bool` **Default**: `false`

Display the days outside the current month.

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

An object of named functions returning a boolean: `modifier(day: Date) -> Bool`. When a function of this object evaluates `true`, its name is used as CSS modifier for the day's cell.
As default, the calendar includes `today` and `outside` modifiers. (_Outside_ are the days that appear on the calendar but don't belong to the current month).

### <strike>navbarComponent</strike> <span style="color: red">deprecated</span>

**Type**: `Component`

> This prop has been deprecated in v2.3 and will be removed from v3.0. Please use `navbarElement` instead.

Custom component to render the navigation bar. It will receive the following props:

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

See [this example](http://www.gpbl.org/react-day-picker/examples?customElements) or the [default](https://github.com/gpbl/react-day-picker/blob/master/src/Navbar.js) source code.

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

**Type**: `(day: Date) ⇒ Element` **Default**: `(day) ⇒ day.getDate()`

Returns the content of a day cell. 

### reverseMonths

**Type**: `Bool` **Default**: `false`

Render the months in reversed order. Useful when `numberOfMonths` is greater than 1 to display the most recent month first.

### selectedDays 

**Type**: `(day: Date) ⇒ Bool`

A function returning a boolean indicating if a day is selected. Set a `selected` modifier.

### toMonth

**Type**: `Date`

The last allowed month. Users won't be able to navigate or interact with the days after it.

### <strike>weekdayComponent</strike> <span style="color: red">deprecated</span>

**Type**: `Component`

> This prop has been deprecated in v2.3 and will be removed from v3.0. Please use `navbarElement` instead.

Custom component to render the weekday cells in the header. It will receive the following props:

* weekday `Number`
* className `String`
* localeUtils `Object`
* locale `String`

See [this example](http://www.gpbl.org/react-day-picker/examples?customElements) or the [default](https://github.com/gpbl/react-day-picker/blob/master/src/Weekday.js) source code.

### weekdayElement

**Type**: `Element`

Custom React element to render the weekday cells in the header. It will receive the following props:

* weekday `Number`
* className `String`
* localeUtils `Object`
* locale `String`

## Event handlers

### onCaptionClick

**Type**: `(e: SyntethicEvent, currentMonth: Date) ⇒ void`

Event handler when the user clicks on the caption in the header displaying the month.

---

### onDayClick

**Type**: `(e: SyntethicEvent, day: Date, modifiers: Object) ⇒ void`

Event handler when the user clicks on a day cell.

---

### onDayKeyDown

**Type**: `(e: SyntethicEvent, day: Date, modifiers: Object) ⇒ void`

Event handler when the day cell gets the key down event.

### onDayMouseEnter

**Type**: `(e: SyntethicEvent, day: Date, modifiers: Object) ⇒ void`

Event handler when the mouse enters a day cell.

### onDayMouseLeave

**Type**: `(e: SyntethicEvent, day: Date, modifiers: Object) ⇒ void`

Event handler when the mouse leave a day cell.

### onDayTouchStart

**Type**: `(e: SyntethicEvent, day: Date, modifiers: Object) ⇒ void`

Event handler when the day cell gets the `touchStart` event.

### onDayTouchEnd

**Type**: `(e: SyntethicEvent, day: Date, modifiers: Object) ⇒ void`

Event handler when the day cell gets the `touchEnd` event.

### onMonthChange

**Type** `(month: Date) ⇒ void`

Event handler when the month is changed, i.e. clicking the navigation buttons or using the keyboard.
