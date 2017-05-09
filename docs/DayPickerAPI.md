# DayPicker API

```js
import DayPicker from 'react-day-picker';
```

#### Props summary

**Rendering months**: [initialMonth](#initialmonth), [month](#month), [fromMonth](#frommonth), [toMonth](#tomonth), [numberOfMonths](#numberofmonths), [pagedNavigation](#pagednavigation), [canChangeMonth](#canchangemonth), [reverseMonths](#reversemonths)

**Day Modifiers**: [selectedDays](#selecteddays), [disabledDays](#disableddays), [modifiers](#modifiers), [modifiersStyles](#modifiersstyles)

**Customization**: [enableOutsideDays](#enableoutsidedays), [fixedWeeks](#fixedweeks), [todayButton](#todaybutton)

**Localization**: [dir](#dir), [firstDayOfWeek](#firstdayofweek), [labels](#labels), [locale](#locale), [localeUtils](#localeUtils), [months](#months), [weekdaysLong](#weekdayslong), [weekdaysShort](#weekdaysshort)

**CSS and HTML**: [className](#classname), [classNames](#classnames), [containerProps](#containerprops), [tabIndex](#tabindex)

**Elements**: [renderDay](#renderday), [weekdayElement](#weekdayelement), [navbarElement](#navbarelement), [captionElement](#captionelement)

**Events**: [onBlur](#onblur), [onCaptionClick](#oncaptionclick), [onDayClick](#ondayclick), [onDayFocus](#ondayfocus), [onDayKeyDown](#ondaykeydown), [onDayMouseEnter](#ondaymouseenter), [onDayMouseLeave](#ondaymouseleave), [onDayTouchEnd](#ondaytouchend), [onDayTouchStart](#ondaytouchstart), [onFocus](#onfocus), [onKeyDown](#onkeydown), [onMonthChange](#onmonthchange)

#### Methods summary

[showMonth](#showmonth), [showPreviousMonth](#showpreviousmonth), [showNextMonth](#shownextmonth), [showPreviousYear](#showpreviousyear), [showNextYear](#shownextyear)

#### Typescript Type Definitions

Typescript Type Definitions are available in the main repo: see [types/index.d.ts](https://github.com/gpbl/react-day-picker/tree/master/types/index.d.ts).


## Reference

### canChangeMonth

**Type**: `Bool` | **Default**: `true`

Enable the navigation between months.

### captionElement

**Type**: `Element` || `React.Component` || `(props) => Element`

A React element or constructor to use as caption. This element will receive the following props:

* `date: Date` The currently displayed month.
* `localeUtils: Object` The [localeUtils](#localeutils-object) object passed to the component.
* `locale: String` The current [locale](#locale-string) passed to the component.
* `onClick` The [onCaptionClick](#oncaptionclick-function) function, if specified.

The default caption is a `div` with class `DayPicker-Caption`, showing a "month year" text.

See also [this advanced example](../examples?yearNavigation), showing a year navigation element using this prop.

### className

**Type**: `String`

Additional CSS class names to add to the default.

### classNames

**Type**: `Object<String>`

Customize the CSS class names used when rendering the component. 

* Use this prop to use your custom styles imported via CSS Modules ([see example](http://react-day-picker.js.org/examples/?cssModules)).
* Skipping this prop will make the calendar use the default BEM conventions (e.g. `DayPicker-Day DayPicker-Day--modifier`)

The object expects the following keys:

```js
  container,            // The container element
  interactionDisabled,  // Added to the container when there's no interaction with the calendar

  navBar,         // The navigation bar with the arrows to switch between months
  navButtonPrev,  // Button to switch to the previous month
  navButtonNext,  // Button to switch to the next month

  month,          // The month's main tables
  caption,        // The caption element, containing the current month's name and year
  weekdays,       // Table header displaying the weekdays names
  weekdaysRow,    // Table row displaying the weekdays names
  weekday,        // Cell displaying the weekday name
  body,           // Table's body with the weeks
  week,           // Table's row for each week
  day,            // The single day cell

  footer,         // The calendar footer (only with todayButton prop)
  todayButton,    // The today button (only with todayButton prop)

  // default modifiers
  today,          // Added to the day's cell for the current day
  selected,       // Added to the day's cell specified in the `selectedDays` prop
  disabled,       // Added to the day's cell specified in the `disabledDays` prop
  outside,        // Added to the day's cell outside the current month
}
```

### containerProps

**Type**: `Object<Any>`

Props to pass to the container `div` HTML element. Only props by a `div` are valid.

`className`, `role`, `tabIndex`, `onKeyDown`, `onFocus` and `onBlur` must be passed directly to the component. E.g.:

```jsx
<DayPicker
  containerProps={{ className: 'will_be_ignored' }}
  className="will_work"
/> 
```

### disabledDays

**Type**: `Date` || `Object<Any>` || `(day: Date) ⇒ Bool` || `Array<Date|Object|Function>`

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

The month to display in the calendar at first render. See also [`month`](#month) prop. Default is the current month. 

### labels

**Type**: `Object<String>` **Default**: `{ nextMonth: "Next Month", previousMonth: "Previous Month" }`

Labels to use as `aria-label` HTML attributes.

The object expects the following keys (as strings):

```js
{
  previousMonth,  // Used for the button to navigate the previous month
  nextMonth,      // Used for the button to navigate the next month
}
```

### locale

**Type**: `String` **Default**: `en`

The locale used by the `localeUtils` functions. Default is `en`.  See also [Localization](Localization.md) and [LocaleUtils](LocaleUtils.md).

### localeUtils

**Type**: `Object<Function>`

Object of functions to format dates and to get the first day of the week. Pass your own utils to support localization.
By default the used locale is English (US). See also [Localization](Localization.md) and [LocaleUtils](LocaleUtils.md).

### modifiers

**Type**: `Object<Any>`

An object of [day modifiers](Modifiers.md).

As default, the calendar adds `today` and `outside` modifiers. (_Outside days_ are the days appearing on the calendar but don't belonging to the current month).

### modifiersStyles

**Type**: `Object<Any>`

An object of inline styles added to the day cells when a [modifier](#modifiers) is met. Use this prop to style day cells inline instead of using CSS classes. Example:

```jsx
const modifiers = {
  even: day => day.getDate() % 2 === 0,
  odd: day => day.getDate() % 2 !== 0,
  first: day => day.getDate() === 1,
};

<DayPicker
  modifiers={modifiers}
  modifiersStyles={{
    even: {
      background: "green",
      fontWeight: "bold",
    },
    odd: {
      background: "purple",
    },
    first: {
      background: "green",
    },
  }}
/>

```

### month

**Type**: `Date`

The month to display in the calendar. This differs from the [`initialMonth`](#initialmonth) prop, as it causes the calendar to re-render when its value changes.

### months

**Type**: `Array<String>` **Default**: `['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']`

An array containing the long weekdays names to use in the month's header.

### navbarElement

**Type**: `Element` || `React.Component` || `(props) => Element`

A React Element or React Component to render the navigation bar. It will receive the following props:

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

**Type**: `Date` || `Object<Any>` || `(day: Date) ⇒ Bool` || `Array<Date|Object|Function>`

Indicate which day should appear as selected. Set a `selected` modifier.

See [Modifiers](Modifiers.md) for a reference of the accepted values.

### todayButton

**Type**: `String`

Display a button to switch to the current month using the provided string as label.

### toMonth

**Type**: `Date`

The last allowed month. Users won't be able to navigate or interact with the days after it.

### weekdayElement

**Type**: `Element` || `React.Component` || `(props) => Element`

A React Element or React Component to render the weekday cells in the header. It will receive the following props:

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

## Component methods

### showMonth 

**Signature** `(month: Date) ⇒ void`

Show the given `month` in the calendar.

Example: 
```jsx
class MyComponent extends React {

  daypicker = null

  handleClick() {
    this.daypicker.showMonth(new Date(2014, 10));
  }

  render() {
    return (
      <div>
        <DayPicker 
          ref={ el => this.daypicker = el } 
          initialMonth={ new Date(2015, 10) } 
        />
        <button onClick={ this.handleClick }>
          Change month
        </button>
      </div>
    )
  }
}
```

---

### showPreviousMonth

**Signature** `() ⇒ void`

Show the previous month in the calendar.

### showNextMonth

**Signature** `() ⇒ void`

Show the next month in the calendar.

### showPreviousYear

**Signature** `() ⇒ void`

Show the previous year in the calendar.

### showNextYear

**Signature** `() ⇒ void`

Show the next year in the calendar.

