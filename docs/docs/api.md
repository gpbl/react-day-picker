---
layout: api
title: DayPicker API
permalink: docs/api.html
---

#### Rendering months

[initialMonth](#initialmonth), [month](#month), [fromMonth](#frommonth), [toMonth](#tomonth), [numberOfMonths](#numberofmonths), [pagedNavigation](#pagednavigation), [canChangeMonth](#canchangemonth), [reverseMonths](#reversemonths)

#### Day Modifiers

[selectedDays](#selecteddays), [disabledDays](#disableddays), [modifiers](#modifiers), [modifiersStyles](#modifiersstyles)

#### Customization

[enableOutsideDays](#enableoutsidedays), [fixedWeeks](#fixedweeks), [showWeekNumbers](#showweeknumbers), [todayButton](#todaybutton)

#### Localization

[dir](#dir), [firstDayOfWeek](#firstdayofweek), [labels](#labels), [locale](#locale), [localeUtils](#localeUtils), [months](#months), [weekdaysLong](#weekdayslong), [weekdaysShort](#weekdaysshort)

#### CSS and HTML

[className](#classname), [classNames](#classnames), [containerProps](#containerprops), [tabIndex](#tabindex)

#### Elements

[renderDay](#renderday), [weekdayElement](#weekdayelement), [navbarElement](#navbarelement), [captionElement](#captionelement)

#### Events

[onBlur](#onblur), [onCaptionClick](#oncaptionclick), [onDayClick](#ondayclick), [onDayFocus](#ondayfocus), [onDayKeyDown](#ondaykeydown), [onDayMouseEnter](#ondaymouseenter), [onDayMouseLeave](#ondaymouseleave), [onDayTouchEnd](#ondaytouchend), [onDayTouchStart](#ondaytouchstart), [onFocus](#onfocus), [onKeyDown](#onkeydown), [onMonthChange](#onmonthchange)

#### Methods

[showMonth](#showmonth), [showPreviousMonth](#showpreviousmonth), [showNextMonth](#shownextmonth), [showPreviousYear](#showpreviousyear), [showNextYear](#shownextyear)

#### Typescript Type Definitions

Typescript Type Definitions are available in the main repo: see [types/index.d.ts](https://github.com/gpbl/react-day-picker/tree/master/types/index.d.ts).


## Reference

### canChangeMonth

| **Type**: `bool` | **Default**: `true` |

Enable the navigation between months.

### captionElement

| **Type**: `Element|React.Component|props => Element` |

A React element or constructor to use as caption. This element will receive the following props:

* `date: date` The currently displayed month.
* `localeUtils: Object` The [localeUtils](#localeutils-object) object passed to the component.
* `locale: String` The current [locale](#locale-string) passed to the component.
* `onClick` The [onCaptionClick](#oncaptionclick-function) function, if specified.

The default caption is a `div` with class `DayPicker-Caption`, showing a "month year" text.

See also [this advanced example](../examples?yearNavigation), showing a year navigation element using this prop.

### className

| **Type**: `string` |

Additional CSS class names to add to the default.

### classNames

| **Type**: `object<string>` |

Customize the CSS class names used when rendering the component. 

* Use this prop to use your custom styles imported via CSS Modules ([see example](http://react-day-picker.js.org/examples/?cssModules)).
* Skipping this prop will make the calendar use the default BEM conventions (e.g. `DayPicker-Day DayPicker-Day--modifier`)

The object expects the following keys:

```js
  container,            // The container element
  wrapper,              // The wrapper element, used for keyboard interaction
  interactionDisabled,  // Added to the container when there's no interaction with the calendar

  navBar,         // The navigation bar with the arrows to switch between months
  navButtonPrev,  // Button to switch to the previous month
  navButtonNext,  // Button to switch to the next month
  navButtonInteractionDisabled,  // Added to the navbuttons when disabled with fromMonth/toMonth props

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

| **Type**: `object<any>` |

Props to pass to the container `div` HTML element. Only props by a `div` are valid.

`className`, `role`, `tabIndex`, `onKeyDown`, `onFocus` and `onBlur` must be passed directly to the component. E.g.:

```jsx
<DayPicker
  containerProps={ { className: 'will_be_ignored' } }
  className="will_work"
/> 
```

### disabledDays

| **Type**: `date|object<any> | (day: date) ⇒ bool | array<date|object> | function>` |

Indicate which day should appear as disabled. Set a `selected` modifier. 

See [Matching days with modifiers](modifiers.md) for a reference of the accepted values.

### enableOutsideDays

| **Type**: `bool` | **Default**: `false` |

Display the days outside the current month.

### firstDayOfWeek

| **Type**: `number` | **Default**: `0` (Sunday) |

The day to use as first day of the week, starting from `0` (Sunday) to `6` (Saturday).

### fixedWeeks

| **Type**: `bool` | **Default**: `false` |

Display 6 weeks per months, regardless the month's number of weeks. 
Outside days will be always shown if setting this to `true`.

### fromMonth

| **Type**: `date` |

The first allowed month. Users won't be able to navigate or interact with the days before it.

### initialMonth

| **Type**: `date` | **Default**: The current month |

The month to display in the calendar at first render. See also [`month`](#month) prop. Default is the current month. 

### labels

| **Type**: `object<string>` | **Default**: `{ nextMonth: "Next Month", | previousMonth: "Previous Month" }`

Labels to use as `aria-label` HTML attributes.

The object expects the following keys (as strings):

```js
{
  previousMonth,  // Used for the button to navigate the previous month
  nextMonth,      // Used for the button to navigate the next month
}
```

### locale 

| **Type**: `string` | **Default**: `en` |

The locale used by the `localeUtils` functions. Default is `en`.  See also [Localization](localization.md) and [LocaleUtils](utils-locale.md).

### localeUtils

| **Type**: `object<function>` |

Object of functions to format dates and to get the first day of the week. Pass your own utils to support localization.
By default the used locale is English (US). See also [Localization](localization.md) and [LocaleUtils](utils-locale.md).

### modifiers

| **Type**: `object<any>` |

An object of [day modifiers](modifiers.md).

As default, the calendar adds `today` and `outside` modifiers. (_Outside days_ are the days appearing on the calendar but don't belonging to the current month).

### modifiersStyles

| **Type**: `object<any>` |

An object of inline styles added to the day cells when a [modifier](#modifiers) is met. Use this prop to style day cells inline instead of using CSS classes. Example:

```jsx
const modifiers = {
  even: day => day.getDate() % 2 === 0,
  odd: day => day.getDate() % 2 !== 0,
  first: day => day.getDate() === 1,
};

<DayPicker
  modifiers={modifiers}
  modifiersStyles={ {
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
  } }
/>

```

### month

| **Type**: `date` |

The month to display in the calendar. This differs from the [`initialMonth`](#initialmonth) prop, as it causes the calendar to re-render when its value changes.

### months

| **Type**: `array<string>` | **Default**: `['January', 'February',  |'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']`

An array containing the long month names to use in the month's header.

### navbarElement

| **Type**: `Element|React.Component|props => Element` |

A React Element or React Component to render the navigation bar. It will receive the following props:

* className `string`
* previousMonth `date`
* nextMonth `date`
* showPreviousButton `bool`
* showNextButton `bool`
* onPreviousClick `() => void`
* onNextClick `() => void`
* dir `string`
* localeUtils `object`
* locale `string`

### numberOfMonths

| **Type**: `number` | **Default**: `1` |

The number of months to render, where `initialMonth` is the first month.

### pagedNavigation

| **Type**: `bool` | **Default**: `false` |

When displaying multiple months, navigation will be paginated displaying the `numberOfMonths` at time.

### renderDay

| **Type**: `(day: date, modifiers: Object) ⇒ Element` | **Default**: `day ⇒ day.getDate()`

Returns the content of a day cell.

### reverseMonths

| **Type**: `bool` | **Default**: `false` |

Render the months in reversed order. Useful when `numberOfMonths` is greater than 1 to display the most recent month first.

### selectedDays 

| **Type**: `date|object<any>|(day: date) ⇒ bool|array<date|object>|function>` |

Indicate which day should appear as selected. Set a `selected` modifier.

See [Modifiers](modifiers.md) for a reference of the accepted values.

### showWeekNumbers

| **Type**: `Boolean` |

Display the year's week number next to each week ([example](../examples/?weekNumbers)).

### todayButton

| **Type**: `string` |

Display a button to switch to the current month using the provided string as label.

### toMonth

| **Type**: `date` |

The last allowed month. Users won't be able to navigate or interact with the days after it.

### weekdayElement

| **Type**: `Element|React.Component|props => Element` |

A React Element or React Component to render the weekday cells in the header. It will receive the following props:

* weekday `number`
* className `string`
* localeUtils `object`
* locale `string`

### weekdaysLong

| **Type**: `array<string>` | **Default**: `['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']`

An array containing the long weekdays names to use in the month's header. Must start from Sunday.

### weekdaysShort

| **Type**: `array<string>` | **Default**: `['Su', 'Mo', 'Tu', 'We',  'Th', 'Fr', 'Sa']`

An array containing the short weekdays names to use in the month's header. Must start from Sunday.

## Event handlers

### onCaptionClick

| **Type**: `(currentMonth: date, e: SyntheticEvent) ⇒ void` |

Event handler when the user clicks on the caption in the header displaying the month.

### onDayClick

| **Type**: `(day: date, modifiers: Object, e: SyntheticEvent) ⇒  |void`

Event handler when the user clicks on a day cell.

### onBlur

| **Type**: `(e: SyntheticEvent) ⇒ void` |

Event handler when the calendar get the `blur` event.

### onDayKeyDown

| **Type**: `(day: date, modifiers: Object, e: SyntheticEvent) ⇒  |void`

Event handler when the day cell gets the `keydown` event.

### onDayMouseEnter

| **Type**: `(day: date, modifiers: Object, e: SyntheticEvent) ⇒  |void`

Event handler when the mouse enters a day cell.

### onDayMouseLeave

| **Type**: `(day: date, modifiers: Object, e: SyntheticEvent) ⇒  |void`

Event handler when the mouse leave a day cell.

### onDayTouchStart

| **Type**: `(day: date, modifiers: Object, e: SyntheticEvent) ⇒  |void`

Event handler when the day cell gets the `touchStart` event.

### onDayTouchEnd

| **Type**: `(day: date, modifiers: Object, e: SyntheticEvent) ⇒  |void`

Event handler when the day cell gets the `touchEnd` event.

### onFocus

| **Type**: `(e: SyntheticEvent) ⇒ void` |

Event handler when the calendar get the `focus` event

### onKeyDown

| **Type**: `(e: SyntheticEvent) ⇒ void` |

Event handler when the calendar get the `keydown` event

### onMonthChange

| **Type** `(month: date) ⇒ void` |

Event handler when the month is changed, i.e. clicking the navigation buttons or using the keyboard.

### onWeekClick

| **Type**: `(weekNumber: number, days: date[], e: SyntheticEvent) ⇒  |void`

Event hander when the user clicks on a week number (when [showWeekNumbers](#showweeknumbers) is set to `true`).

## Component methods

### showMonth 

| **Signature** `(month: date) ⇒ void` |

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

### showPreviousMonth

| **Signature** `() ⇒ void` |

Show the previous month in the calendar.

### showNextMonth

| **Signature** `() ⇒ void` |

Show the next month in the calendar.

### showPreviousYear

| **Signature** `() ⇒ void` |

Show the previous year in the calendar.

### showNextYear

| **Signature** `() ⇒ void` |

Show the next year in the calendar.

