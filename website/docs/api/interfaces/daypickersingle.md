---
id: "daypickersingle"
title: "Interface: DayPickerSingle"
sidebar_label: "DayPickerSingle"
custom_edit_url: null
hide_title: true
---

# Interface: DayPickerSingle

The props for the [DayPicker](../functions/daypicker.md) component when using single selection mode.

## Hierarchy

* [*DayPickerBase*](daypickerbase.md)

  ↳ **DayPickerSingle**

## Properties

### captionLayout

• `Optional` **captionLayout**: *dropdown* \| *buttons*

Change the layout of the caption:

- `buttons` (default): display prev/right buttons
- `dropdown`: display drop-downs to change the month and the year

**Note** `dropdown` is valid only when `fromDate/fromMonth/fromYear` and
`toDate/toMonth/toYear` are set.

Inherited from: [DayPickerBase](daypickerbase.md).[captionLayout](daypickerbase.md#captionlayout)

___

### className

• `Optional` **className**: *string*

CSS class to add to the root UI element.

Inherited from: [DayPickerBase](daypickerbase.md).[className](daypickerbase.md#classname)

___

### classNames

• `Optional` **classNames**: *Partial*<[*StyledElement*](../types/styledelement.md)<string\>\>

Change the class names.

Use this prop when you need to change the default class names — for example
when using CSS modules.

**Example**

Use of custom class names for the head and the caption elements:

```
 function App() {
   const css = `
     .salmon-head {
       color: salmon;
     }
     .purple-caption {
       font-weight: bold;
       color: purple;
       padding: 3px 0 6px 0;
     }
   `;
   return (
     <>
       <style>{css}</style>
       <DayPicker
         classNames={{
           head: 'salmon-head',
           caption: 'purple-caption'
         }}
       />
     </>
   );
 }
```

Inherited from: [DayPickerBase](daypickerbase.md).[classNames](daypickerbase.md#classnames)

___

### components

• `Optional` **components**: *Partial*<[*Components*](components.md)\>

A map of components used to create the layout.

For example, to use custom navigation icons:

```
<DayPicker component={{
   IconNext: MyIconNext,
   IconPrevious: MyIconPrev
 }}
/>
```

Inherited from: [DayPickerBase](daypickerbase.md).[components](daypickerbase.md#components)

___

### defaultMonth

• `Optional` **defaultMonth**: Date

The initial month to show in the calendar. Default is the current month.

As opposed to [month](daypickersingle.md#month), use this prop to let DayPicker control the current
month.

Inherited from: [DayPickerBase](daypickerbase.md).[defaultMonth](daypickerbase.md#defaultmonth)

___

### defaultSelected

• `Optional` **defaultSelected**: Date

The default selected day.

___

### dir

• `Optional` **dir**: *string*

The text direction of the calendar. Use `ltr` for left-to-right (default)
or `rtl` for right-to-left.

**Example**

When setting the calendar to Arabic, using `dir` to enable right-to-left
direction.

```
import arabic from 'date-fns/locale/ar-SA';

function App() {
  return <DayPicker locale={arabic} dir="rtl" />;
}
```

Inherited from: [DayPickerBase](daypickerbase.md).[dir](daypickerbase.md#dir)

___

### disableNavigation

• `Optional` **disableNavigation**: *boolean*

Disable the navigation between months.

Inherited from: [DayPickerBase](daypickerbase.md).[disableNavigation](daypickerbase.md#disablenavigation)

___

### disabled

• `Optional` **disabled**: Date \| Date[] \| (`date`: Date) => *boolean* \| [*DateRange*](../types/daterange.md) \| [*DateBefore*](../types/datebefore.md) \| [*DateAfter*](../types/dateafter.md) \| [*DateInterval*](../types/dateinterval.md) \| [*DayOfWeek*](../types/dayofweek.md) \| [*Matcher*](../types/matcher.md)[]

Apply the `disabled` modifier to the matching days.

**Example**

```
function App() {
  return (
    <DayPicker
      defaultMonth={new Date(2021, 11)}
      disabled={{
        from: new Date(2021, 11, 14),
        to: new Date(2021, 11, 24)
      }}
    />
  );
}
```

Inherited from: [DayPickerBase](daypickerbase.md).[disabled](daypickerbase.md#disabled)

___

### fixedWeeks

• `Optional` **fixedWeeks**: *boolean*

Display six weeks per months, regardless the month’s number of weeks.
To use this prop, [showOutsideDays](daypickersingle.md#showoutsidedays) must be set. Default to `false`.

Inherited from: [DayPickerBase](daypickerbase.md).[fixedWeeks](daypickerbase.md#fixedweeks)

___

### footer

• `Optional` **footer**: ReactNode

Content to add to the `tfoot` element.

Inherited from: [DayPickerBase](daypickerbase.md).[footer](daypickerbase.md#footer)

___

### formatters

• `Optional` **formatters**: *Partial*<[*Formatters*](../types/formatters.md)\>

A map of formatters to change the default formatting functions.

Inherited from: [DayPickerBase](daypickerbase.md).[formatters](daypickerbase.md#formatters)

___

### fromDate

• `Optional` **fromDate**: Date

The earliest day to start the month navigation.

Inherited from: [DayPickerBase](daypickerbase.md).[fromDate](daypickerbase.md#fromdate)

___

### fromMonth

• `Optional` **fromMonth**: Date

The earliest month to start the month navigation.

Inherited from: [DayPickerBase](daypickerbase.md).[fromMonth](daypickerbase.md#frommonth)

___

### fromYear

• `Optional` **fromYear**: *number*

The earliest year to start the month navigation.

Inherited from: [DayPickerBase](daypickerbase.md).[fromYear](daypickerbase.md#fromyear)

___

### hidden

• `Optional` **hidden**: Date \| Date[] \| (`date`: Date) => *boolean* \| [*DateRange*](../types/daterange.md) \| [*DateBefore*](../types/datebefore.md) \| [*DateAfter*](../types/dateafter.md) \| [*DateInterval*](../types/dateinterval.md) \| [*DayOfWeek*](../types/dayofweek.md) \| [*Matcher*](../types/matcher.md)[]

Apply the `hidden` modifier to the matching days. Will hide them from the
calendar.

Inherited from: [DayPickerBase](daypickerbase.md).[hidden](daypickerbase.md#hidden)

___

### hideHead

• `Optional` **hideHead**: *boolean*

Hide the month’s head displaying the weekday names.

Inherited from: [DayPickerBase](daypickerbase.md).[hideHead](daypickerbase.md#hidehead)

___

### labels

• `Optional` **labels**: *Partial*<[*Labels*](../types/labels.md)\>

A map of labels creators used for the ARIA labels attributes.

Inherited from: [DayPickerBase](daypickerbase.md).[labels](daypickerbase.md#labels)

___

### locale

• `Optional` **locale**: Locale

The date-fns locale object to localize the user interface. Defaults to
`en-US`.

For example, to the calendar to Spanish:

```
import spanish from 'date-fns/locale/es';

function App() {
  return <DayPicker locale={spanish} />;
}
```

See also date-fns [Internationalization
guide](https://date-fns.org/docs/I18n).

Inherited from: [DayPickerBase](daypickerbase.md).[locale](daypickerbase.md#locale)

___

### min

• `Optional` **min**: *number*

The minimum amount of days that can be selected.

___

### mode

• **mode**: *single*

The selection mode – the way DayPicker enables selection when clicking a
day.

- `single` (default) enables the selection of a single day per time
- `multiple` enables the selection of multiple days
- `range` enables th selection of a range of days
- `uncontrolled`: disable the controlled selection. Use `selected` and
  `onDayClick` to implement a custom selection mode.

Overrides: [DayPickerBase](daypickerbase.md).[mode](daypickerbase.md#mode)

___

### modifierClassNames

• `Optional` **modifierClassNames**: *Record*<string, string\>

Change the class name for the day matching the [modifiers](daypickersingle.md#modifiers).

**Example**

Add the `.with-circle` class of the days matching the `isToday` modifier.

```
<DayPicker
 modifiers={{ isToday: new Date() }}
 modifierClassNames={{ isToday: 'with-circle' }}
/>
```

Inherited from: [DayPickerBase](daypickerbase.md).[modifierClassNames](daypickerbase.md#modifierclassnames)

___

### modifierPrefix

• `Optional` **modifierPrefix**: *string*

The prefix to add to the modifiers class names. Default is `rdp-day_`.

#### Usage

Each day will get a `${modifierPrefix}${modifier}` class name when matching
a modifier.

```
const today = new Date();
<DayPicker
 modifierPrefix="calendar-day_" // use this prefix instead of default
 selected={today} // Today element has `.calendar-day_selected`
 hidden={today} // `.calendar-day_hidden`
 modifiers={{ today }} // `.calendar-day_today`
/>
```

Inherited from: [DayPickerBase](daypickerbase.md).[modifierPrefix](daypickerbase.md#modifierprefix)

___

### modifierStyles

• `Optional` **modifierStyles**: *Record*<string, CSSProperties\>

Change the inline style for the day matching the [modifiers](daypickersingle.md#modifiers).

**Example**

Change the background color of the days matching the `isToday` modifier.

```
<DayPicker
 modifiers={{ isToday: new Date() }}
 modifierStyles={{ isToday: { backgroundColor: 'purple' } }}
/>
```

Inherited from: [DayPickerBase](daypickerbase.md).[modifierStyles](daypickerbase.md#modifierstyles)

___

### modifiers

• `Optional` **modifiers**: *Record*<string, Date \| Date[] \| (`date`: Date) => *boolean* \| [*DateRange*](../types/daterange.md) \| [*DateBefore*](../types/datebefore.md) \| [*DateAfter*](../types/dateafter.md) \| [*DateInterval*](../types/dateinterval.md) \| [*DayOfWeek*](../types/dayofweek.md) \| [*Matcher*](../types/matcher.md)[]\>

Add modifiers to the matching days.

For example, to add a `booked` modifier to the current day:

```
<DayPicker modifiers={{ booked: new Date() }} />
```

Inherited from: [DayPickerBase](daypickerbase.md).[modifiers](daypickerbase.md#modifiers)

___

### month

• `Optional` **month**: Date

The month to display in the calendar.

As opposed to [defaultMonth](daypickersingle.md#defaultmonth), use this prop with [onMonthChange](daypickersingle.md#onmonthchange) to
change the month programmatically.

Inherited from: [DayPickerBase](daypickerbase.md).[month](daypickerbase.md#month)

___

### numberOfMonths

• `Optional` **numberOfMonths**: *number*

The number of displayed months. Defaults to `1`.

Inherited from: [DayPickerBase](daypickerbase.md).[numberOfMonths](daypickerbase.md#numberofmonths)

___

### onDayBlur

• `Optional` **onDayBlur**: [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

Inherited from: [DayPickerBase](daypickerbase.md).[onDayBlur](daypickerbase.md#ondayblur)

___

### onDayClick

• `Optional` **onDayClick**: [*DayClickEventHandler*](../types/dayclickeventhandler.md)

Inherited from: [DayPickerBase](daypickerbase.md).[onDayClick](daypickerbase.md#ondayclick)

___

### onDayFocus

• `Optional` **onDayFocus**: [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

Inherited from: [DayPickerBase](daypickerbase.md).[onDayFocus](daypickerbase.md#ondayfocus)

___

### onDayKeyDown

• `Optional` **onDayKeyDown**: [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

Inherited from: [DayPickerBase](daypickerbase.md).[onDayKeyDown](daypickerbase.md#ondaykeydown)

___

### onDayKeyPress

• `Optional` **onDayKeyPress**: [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

Inherited from: [DayPickerBase](daypickerbase.md).[onDayKeyPress](daypickerbase.md#ondaykeypress)

___

### onDayKeyUp

• `Optional` **onDayKeyUp**: [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

Inherited from: [DayPickerBase](daypickerbase.md).[onDayKeyUp](daypickerbase.md#ondaykeyup)

___

### onDayMouseEnter

• `Optional` **onDayMouseEnter**: [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

Inherited from: [DayPickerBase](daypickerbase.md).[onDayMouseEnter](daypickerbase.md#ondaymouseenter)

___

### onDayMouseLeave

• `Optional` **onDayMouseLeave**: [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

Inherited from: [DayPickerBase](daypickerbase.md).[onDayMouseLeave](daypickerbase.md#ondaymouseleave)

___

### onDayTouchCancel

• `Optional` **onDayTouchCancel**: [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

Inherited from: [DayPickerBase](daypickerbase.md).[onDayTouchCancel](daypickerbase.md#ondaytouchcancel)

___

### onDayTouchEnd

• `Optional` **onDayTouchEnd**: [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

Inherited from: [DayPickerBase](daypickerbase.md).[onDayTouchEnd](daypickerbase.md#ondaytouchend)

___

### onDayTouchMove

• `Optional` **onDayTouchMove**: [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

Inherited from: [DayPickerBase](daypickerbase.md).[onDayTouchMove](daypickerbase.md#ondaytouchmove)

___

### onDayTouchStart

• `Optional` **onDayTouchStart**: [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

Inherited from: [DayPickerBase](daypickerbase.md).[onDayTouchStart](daypickerbase.md#ondaytouchstart)

___

### onMonthChange

• `Optional` **onMonthChange**: [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Event fired when the user navigates between months.

Inherited from: [DayPickerBase](daypickerbase.md).[onMonthChange](daypickerbase.md#onmonthchange)

___

### onNextClick

• `Optional` **onNextClick**: [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Inherited from: [DayPickerBase](daypickerbase.md).[onNextClick](daypickerbase.md#onnextclick)

___

### onPrevClick

• `Optional` **onPrevClick**: [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Inherited from: [DayPickerBase](daypickerbase.md).[onPrevClick](daypickerbase.md#onprevclick)

___

### onSelect

• `Optional` **onSelect**: [*SelectSingleEventHandler*](selectsingleeventhandler.md)

Event fired when a day is selected.

___

### onWeekNumberClick

• `Optional` **onWeekNumberClick**: [*WeekNumberClickEventHandler*](../types/weeknumberclickeventhandler.md)

Inherited from: [DayPickerBase](daypickerbase.md).[onWeekNumberClick](daypickerbase.md#onweeknumberclick)

___

### pagedNavigation

• `Optional` **pagedNavigation**: *boolean*

Paginate the month navigation displaying the [numberOfMonths](daypickersingle.md#numberofmonths) at time.

Inherited from: [DayPickerBase](daypickerbase.md).[pagedNavigation](daypickerbase.md#pagednavigation)

___

### reverseMonths

• `Optional` **reverseMonths**: *boolean*

Render the months in reversed order (when [numberOfMonths](daypickersingle.md#numberofmonths) is greater
than `1`) to display the most recent month first.

Inherited from: [DayPickerBase](daypickerbase.md).[reverseMonths](daypickerbase.md#reversemonths)

___

### selected

• `Optional` **selected**: Date \| Date[] \| (`date`: Date) => *boolean* \| [*DateRange*](../types/daterange.md) \| [*DateBefore*](../types/datebefore.md) \| [*DateAfter*](../types/dateafter.md) \| [*DateInterval*](../types/dateinterval.md) \| [*DayOfWeek*](../types/dayofweek.md) \| [*Matcher*](../types/matcher.md)[]

Apply the `selected` modifier to the matching days.

**Example**

```
function App() {
  return (
    <DayPicker
      defaultMonth={new Date(2021, 11)}
      selected={{
        from: new Date(2021, 11, 14),
        to: new Date(2021, 11, 24)
      }}
    />
  );
}
```

Inherited from: [DayPickerBase](daypickerbase.md).[selected](daypickerbase.md#selected)

___

### showOutsideDays

• `Optional` **showOutsideDays**: *boolean*

Show the outside days.  An outside day is a day falling in the next or the
previous month. Default is `false`.

Inherited from: [DayPickerBase](daypickerbase.md).[showOutsideDays](daypickerbase.md#showoutsidedays)

___

### showWeekNumber

• `Optional` **showWeekNumber**: *boolean*

Show the week numbers column. Default to `false`.

Inherited from: [DayPickerBase](daypickerbase.md).[showWeekNumber](daypickerbase.md#showweeknumber)

___

### style

• `Optional` **style**: *CSSProperties*

Style to apply to the container element.

Inherited from: [DayPickerBase](daypickerbase.md).[style](daypickerbase.md#style)

___

### styles

• `Optional` **styles**: *Partial*<[*StyledElement*](../types/styledelement.md)<CSSProperties\>\>

Change the inline styles for each UIElement.

Inherited from: [DayPickerBase](daypickerbase.md).[styles](daypickerbase.md#styles)

___

### toDate

• `Optional` **toDate**: Date

The latest day to end the month navigation.

Inherited from: [DayPickerBase](daypickerbase.md).[toDate](daypickerbase.md#todate)

___

### toMonth

• `Optional` **toMonth**: Date

The latest month to end the month navigation.

Inherited from: [DayPickerBase](daypickerbase.md).[toMonth](daypickerbase.md#tomonth)

___

### toYear

• `Optional` **toYear**: *number*

The latest year to end the month navigation.

Inherited from: [DayPickerBase](daypickerbase.md).[toYear](daypickerbase.md#toyear)

___

### today

• `Optional` **today**: Date \| *off*

The today’s date. Default is the current date.

This Date will get the `today` modifier to style the day. Set it to `off`
to disable it.

Inherited from: [DayPickerBase](daypickerbase.md).[today](daypickerbase.md#today)
