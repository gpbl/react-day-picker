---
id: "daypickerbase"
title: "Interface: DayPickerBase"
sidebar_label: "DayPickerBase"
custom_edit_url: null
hide_title: true
---

# Interface: DayPickerBase

The base props for the [DayPicker](../functions/daypicker.md) component.

This interface extends other props according to the selection mode:

- see [DayPickerSingle](daypickersingle.md) when using `mode="single"`
- see [DayPickerMultiple](daypickermultiple.md) when using `mode="multiple"`
- see [DayPickerRange](daypickerrange.md) when using `mode="range"`

## Hierarchy

* **DayPickerBase**

  ↳ [*DayPickerMultiple*](daypickermultiple.md)

  ↳ [*DayPickerRange*](daypickerrange.md)

  ↳ [*DayPickerSingle*](daypickersingle.md)

  ↳ [*DayPickerUncontrolled*](daypickeruncontrolled.md)

## Properties

### captionLayout

• `Optional` **captionLayout**: *dropdown* \| *buttons*

Change the layout of the caption:

- `buttons` (default): display prev/right buttons
- `dropdown`: display drop-downs to change the month and the year

**Note** `dropdown` is valid only when `fromDate/fromMonth/fromYear` and
`toDate/toMonth/toYear` are set.

___

### className

• `Optional` **className**: *string*

CSS class to add to the root UI element.

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

___

### defaultMonth

• `Optional` **defaultMonth**: Date

The initial month to show in the calendar. Default is the current month.

As opposed to [month](daypickerbase.md#month), use this prop to let DayPicker control the current
month.

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

___

### disableNavigation

• `Optional` **disableNavigation**: *boolean*

Disable the navigation between months.

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

___

### fixedWeeks

• `Optional` **fixedWeeks**: *boolean*

Display six weeks per months, regardless the month’s number of weeks.
To use this prop, [showOutsideDays](daypickerbase.md#showoutsidedays) must be set. Default to `false`.

___

### footer

• `Optional` **footer**: ReactNode

Content to add to the `tfoot` element.

___

### formatters

• `Optional` **formatters**: *Partial*<[*Formatters*](../types/formatters.md)\>

A map of formatters to change the default formatting functions.

___

### fromDate

• `Optional` **fromDate**: Date

The earliest day to start the month navigation.

___

### fromMonth

• `Optional` **fromMonth**: Date

The earliest month to start the month navigation.

___

### fromYear

• `Optional` **fromYear**: *number*

The earliest year to start the month navigation.

___

### hidden

• `Optional` **hidden**: Date \| Date[] \| (`date`: Date) => *boolean* \| [*DateRange*](../types/daterange.md) \| [*DateBefore*](../types/datebefore.md) \| [*DateAfter*](../types/dateafter.md) \| [*DateInterval*](../types/dateinterval.md) \| [*DayOfWeek*](../types/dayofweek.md) \| [*Matcher*](../types/matcher.md)[]

Apply the `hidden` modifier to the matching days. Will hide them from the
calendar.

___

### hideHead

• `Optional` **hideHead**: *boolean*

Hide the month’s head displaying the weekday names.

___

### labels

• `Optional` **labels**: *Partial*<[*Labels*](../types/labels.md)\>

A map of labels creators used for the ARIA labels attributes.

___

### locale

• `Optional` **locale**: Locale

The date-fns locale object to localize the user interface. Defaults to
`en-US`.

For example, to set the calendar to Spanish:

```
import spanish from 'date-fns/locale/es';

function App() {
  return <DayPicker locale={spanish} />;
}
```

See also date-fns [Internationalization
guide](https://date-fns.org/docs/I18n).

___

### mode

• `Optional` **mode**: *multiple* \| *range* \| *single* \| *uncontrolled*

The selection mode – the way DayPicker enables selection when clicking a
day.

- `single` (default) enables the selection of a single day per time
- `multiple` enables the selection of multiple days
- `range` enables th selection of a range of days
- `uncontrolled`: disable the controlled selection. Use `selected` and
  `onDayClick` to implement a custom selection mode.

___

### modifierClassNames

• `Optional` **modifierClassNames**: *Record*<string, string\>

Change the class name for the day matching the [modifiers](daypickerbase.md#modifiers).

**Example**

Add the `.with-circle` class of the days matching the `isToday` modifier.

```
<DayPicker
 modifiers={{ isToday: new Date() }}
 modifierClassNames={{ isToday: 'with-circle' }}
/>
```

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

___

### modifierStyles

• `Optional` **modifierStyles**: *Record*<string, CSSProperties\>

Change the inline style for the day matching the [modifiers](daypickerbase.md#modifiers).

**Example**

Change the background color of the days matching the `isToday` modifier.

```
<DayPicker
 modifiers={{ isToday: new Date() }}
 modifierStyles={{ isToday: { backgroundColor: 'purple' } }}
/>
```

___

### modifiers

• `Optional` **modifiers**: *Record*<string, Date \| Date[] \| (`date`: Date) => *boolean* \| [*DateRange*](../types/daterange.md) \| [*DateBefore*](../types/datebefore.md) \| [*DateAfter*](../types/dateafter.md) \| [*DateInterval*](../types/dateinterval.md) \| [*DayOfWeek*](../types/dayofweek.md) \| [*Matcher*](../types/matcher.md)[]\>

Add modifiers to the matching days.

For example, to add a `booked` modifier to the current day:

```
<DayPicker modifiers={{ booked: new Date() }} />
```

___

### month

• `Optional` **month**: Date

The month to display in the calendar.

As opposed to [defaultMonth](daypickerbase.md#defaultmonth), use this prop with [onMonthChange](daypickerbase.md#onmonthchange) to
change the month programmatically.

___

### numberOfMonths

• `Optional` **numberOfMonths**: *number*

The number of displayed months. Defaults to `1`.

___

### onDayBlur

• `Optional` **onDayBlur**: [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

___

### onDayClick

• `Optional` **onDayClick**: [*DayClickEventHandler*](../types/dayclickeventhandler.md)

___

### onDayFocus

• `Optional` **onDayFocus**: [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

___

### onDayKeyDown

• `Optional` **onDayKeyDown**: [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

___

### onDayKeyPress

• `Optional` **onDayKeyPress**: [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

___

### onDayKeyUp

• `Optional` **onDayKeyUp**: [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

___

### onDayMouseEnter

• `Optional` **onDayMouseEnter**: [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

___

### onDayMouseLeave

• `Optional` **onDayMouseLeave**: [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

___

### onDayTouchCancel

• `Optional` **onDayTouchCancel**: [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

___

### onDayTouchEnd

• `Optional` **onDayTouchEnd**: [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

___

### onDayTouchMove

• `Optional` **onDayTouchMove**: [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

___

### onDayTouchStart

• `Optional` **onDayTouchStart**: [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

___

### onMonthChange

• `Optional` **onMonthChange**: [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Event fired when the user navigates between months.

___

### onNextClick

• `Optional` **onNextClick**: [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

___

### onPrevClick

• `Optional` **onPrevClick**: [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

___

### onWeekNumberClick

• `Optional` **onWeekNumberClick**: [*WeekNumberClickEventHandler*](../types/weeknumberclickeventhandler.md)

___

### pagedNavigation

• `Optional` **pagedNavigation**: *boolean*

Paginate the month navigation displaying the [numberOfMonths](daypickerbase.md#numberofmonths) at time.

___

### reverseMonths

• `Optional` **reverseMonths**: *boolean*

Render the months in reversed order (when [numberOfMonths](daypickerbase.md#numberofmonths) is greater
than `1`) to display the most recent month first.

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

___

### showOutsideDays

• `Optional` **showOutsideDays**: *boolean*

Show the outside days.  An outside day is a day falling in the next or the
previous month. Default is `false`.

___

### showWeekNumber

• `Optional` **showWeekNumber**: *boolean*

Show the week numbers column. Default to `false`.

___

### style

• `Optional` **style**: *CSSProperties*

Style to apply to the container element.

___

### styles

• `Optional` **styles**: *Partial*<[*StyledElement*](../types/styledelement.md)<CSSProperties\>\>

Change the inline styles for each UIElement.

___

### toDate

• `Optional` **toDate**: Date

The latest day to end the month navigation.

___

### toMonth

• `Optional` **toMonth**: Date

The latest month to end the month navigation.

___

### toYear

• `Optional` **toYear**: *number*

The latest year to end the month navigation.

___

### today

• `Optional` **today**: Date \| *off*

The today’s date. Default is the current date.

This Date will get the `today` modifier to style the day. Set it to `off`
to disable it.
