# Component props

* HTML props (such as `className`, `tabIndex`, `style` etc.) are spread to the root's `div` element.

---

#### canChangeMonth `Bool`

Enable the navigation between months. Default is `true`.

---

#### captionElement `Element`

A React element to use as caption. This element is cloned with the following props:

* `date: Date` The currently displayed month.
* `localeUtils: Object` The [localeUtils](#localeutils-object) object passed to the component.
* `locale: String` The current [locale](#locale-string) passed to the component.
* `onClick` The [onCaptionClick](#oncaptionclick-function) function, if specified.

The default caption is a `div` with class `DayPicker-Caption`, showing a "month year" text.

See also [this advanced example](../examples?yearNavigation), showing a year navigation element using this prop.

---

#### className `String`

Class names to add to the root node.

---

#### disabledDays `(day: Date) ⇒ Bool`

A function returning a boolean indicating if a day is disabled. Set a `disabled` modifier.

---

#### enableOutsideDays `Bool`

Display the days outside the current month. Default is `false`.

---

#### fixedWeeks `Bool`

Display 6 weeks per months, regardless the month's number of weeks. Outside days will be always shown if setting this to `true`. Default is `false`.

---

#### fromMonth `Date`

The first allowed month. Users won't be able to navigate or interact with the days before it.

---

#### initialMonth `Date`

The month to display in the calendar. Default is the current month.

---

#### locale `String`

The locale used by the `localeUtils` functions. Default is `en`.  See also [Localization](Localization.md) and [LocaleUtils](LocaleUtils.md).

---

#### localeUtils `Object`

Object of functions to format dates and to get the first day of the week. Pass your own utils to support localization.
By default the used locale is English (US). See also [Localization](Localization.md) and [LocaleUtils](LocaleUtils.md).

---

#### modifiers `Object`

An object of named functions returning a boolean: `modifier(day: Date) -> Bool`. When a function of this object evaluates `true`, its name is used as CSS modifier for the day's cell.
As default, the calendar includes `today` and `outside` modifiers. (_Outside_ are the days that appear on the calendar but don't belong to the current month).

---

#### <strike>navbarComponent</strike> `Component` <span style="color: red">deprecated</span>

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

---

#### navbarElement `Element`

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

---

#### numberOfMonths `Number`

The number of months to render, where `initialMonth` is the first month. Default is `1`.

---

#### renderDay `(day: Date) ⇒ Element`

Returns the content of a day cell. By default, it renders the day's date: `(day) ⇒ day.getDate()`

---

#### reverseMonths `Bool`

Render the months in reversed order. Useful when `numberOfMonths` is greater than 1 to display the most recent month first. Default is `false`.

---

#### selectedDays `(day: Date) ⇒ Bool`

A function returning a boolean indicating if a day is selected. Set a `selected` modifier.

---

#### style `Object`

A custom style object to add to the root node.

---

#### tabIndex `Number`

The tab index for keyboard navigation. Default is `0`.

---

#### toMonth `Date`

The last allowed month. Users won't be able to navigate or interact with the days after it.

---

#### <strike>weekdayComponent</strike> `Component` <span style="color: red">deprecated</span>

> This prop has been deprecated in v2.3 and will be removed from v3.0. Please use `navbarElement` instead.

Custom component to render the weekday cells in the header. It will receive the following props:

* weekday `Number`
* className `String`
* localeUtils `Object`
* locale `String`

See [this example](http://www.gpbl.org/react-day-picker/examples?customElements) or the [default](https://github.com/gpbl/react-day-picker/blob/master/src/Weekday.js) source code.

---

#### weekdayElement `Element`

Custom React element to render the weekday cells in the header. It will receive the following props:

* weekday `Number`
* className `String`
* localeUtils `Object`
* locale `String`

## Event handlers

#### onCaptionClick `(e: SyntethicEvent, currentMonth: Date) ⇒ void`

Event handler when the user clicks on the caption in the header displaying the month. Example:

---

#### onDayClick  `(e: SyntethicEvent, day: Date, modifiers: Object) ⇒ void`

Event handler when the user clicks on a day cell.

---

#### onDayKeyDown `(e: SyntethicEvent, day: Date, modifiers: Object) ⇒ void`

Event handler when the day cell gets the key down event.

---

#### onDayMouseEnter  `(e: SyntethicEvent, day: Date, modifiers: Object) ⇒ void`

Event handler when the mouse enters a day cell.

---

#### onDayMouseLeave  `(e: SyntethicEvent, day: Date, modifiers: Object) ⇒ void`

Event handler when the mouse leave a day cell.

---

#### onDayTouchStart `(e: SyntethicEvent, day: Date, modifiers: Object) ⇒ void`

Event handler when the day cell gets the `touchStart` event.

---

#### onDayTouchEnd `(e: SyntethicEvent, day: Date, modifiers: Object) ⇒ void`

Event handler when the day cell gets the `touchEnd` event.

---

#### onMonthChange `(month: Date) ⇒ void`

Event handler when the month is changed, i.e. clicking the navigation buttons or using the keyboard.
