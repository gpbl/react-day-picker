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

• `Optional` **captionLayout**: *undefined* \| *dropdown* \| *buttons*

Change the layout of the caption:

- `buttons` (default): display prev/right buttons
- `dropdown`: display drop-downs to change the month and the year

**Note** `dropdown` is valid only when `fromDate/fromMonth/fromYear` and
`toDate/toMonth/toYear` are set.

**Example**

```
function Example() {
 return (
   <DayPicker fromYear={2020} toYear={2025} captionLayout="dropdown" />
)};
```

___

### className

• `Optional` **className**: *undefined* \| *string*

CSS class to add to the root UI element.

___

### classNames

• `Optional` **classNames**: *undefined* \| *Partial*<[*StyledElement*](../types/styledelement.md)<string\>\>

Change the class names.

Use this prop when you need to change the default class names — for example
when using CSS modules.

**Example**

Use of custom class names for the head and the caption elements:

```
 function Example() {
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

• `Optional` **components**: *undefined* \| *Partial*<[*Components*](components.md)\>

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

• `Optional` **defaultMonth**: *undefined* \| Date

The initial month to show in the calendar. Default is the current month.

As opposed to [month](daypickerbase.md#month), use this prop to let DayPicker control the current
month.

___

### dir

• `Optional` **dir**: *undefined* \| *string*

The text direction of the calendar. Use `ltr` for left-to-right (default)
or `rtl` for right-to-left.

**Example**

When setting the calendar to Arabic, using `dir` to enable right-to-left
direction.

```
import arabic from 'date-fns/locale/ar-SA';

function Example() {
  return <DayPicker locale={arabic} dir="rtl" />;
}
```

___

### disableNavigation

• `Optional` **disableNavigation**: *undefined* \| *boolean*

Disable the navigation between months.

___

### disabled

• `Optional` **disabled**: *undefined* \| Date \| Date[] \| (`date`: Date) => *boolean* \| [*DateRange*](../types/daterange.md) \| [*DateBefore*](../types/datebefore.md) \| [*DateAfter*](../types/dateafter.md) \| [*DateInterval*](../types/dateinterval.md) \| [*DayOfWeekMatcher*](../types/dayofweekmatcher.md) \| [*Matcher*](../types/matcher.md)[]

Apply the `disabled` modifier to the matching days.

**Example**

```
function Example() {
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

• `Optional` **fixedWeeks**: *undefined* \| *boolean*

Display six weeks per months, regardless the month’s number of weeks.
To use this prop, [showOutsideDays](daypickerbase.md#showoutsidedays) must be set. Default to `false`.

**Example**

```
function Example() {
 return <DayPicker showOutsideDays fixedWeeks />
};
```

___

### footer

• `Optional` **footer**: ReactNode

Content to add to the `tfoot` element.

___

### formatters

• `Optional` **formatters**: *undefined* \| *Partial*<[*Formatters*](../types/formatters.md)\>

A map of formatters to change the default formatting functions.

___

### fromDate

• `Optional` **fromDate**: *undefined* \| Date

The earliest day to start the month navigation.

___

### fromMonth

• `Optional` **fromMonth**: *undefined* \| Date

The earliest month to start the month navigation.

___

### fromYear

• `Optional` **fromYear**: *undefined* \| *number*

The earliest year to start the month navigation.

___

### hidden

• `Optional` **hidden**: *undefined* \| Date \| Date[] \| (`date`: Date) => *boolean* \| [*DateRange*](../types/daterange.md) \| [*DateBefore*](../types/datebefore.md) \| [*DateAfter*](../types/dateafter.md) \| [*DateInterval*](../types/dateinterval.md) \| [*DayOfWeekMatcher*](../types/dayofweekmatcher.md) \| [*Matcher*](../types/matcher.md)[]

Apply the `hidden` modifier to the matching days – to hide them from the
calendar.

**Example**

```
function Example() {
  return (
    <DayPicker
      defaultMonth={new Date(2021, 11)}
      hidden={{
        from: new Date(2021, 11, 14),
        to: new Date(2021, 11, 24)
      }}
    />
  );
}
```

___

### hideHead

• `Optional` **hideHead**: *undefined* \| *boolean*

Hide the month’s head displaying the weekday names.

___

### labels

• `Optional` **labels**: *undefined* \| *Partial*<[*Labels*](../types/labels.md)\>

A map of labels creators used for the ARIA labels attributes.

___

### locale

• `Optional` **locale**: *undefined* \| Locale

The date-fns locale object to localize the user interface. Defaults to EN-US.

See also date-fns [Internationalization guide](https://date-fns.org/docs/I18n).

For example, to the calendar to Spanish:

```
import spanish from 'date-fns/locale/es';

function Example() {
  return <DayPicker locale={spanish} />;
}
```

___

### mode

• `Optional` **mode**: *undefined* \| *multiple* \| *range* \| *single* \| *uncontrolled*

The selection mode – the way DayPicker enables selection when clicking a
day.

- `single` (default) enables the selection of a single day per time
- `multiple` enables the selection of multiple days
- `range` enables th selection of a range of days
- `uncontrolled`: disable the controlled selection. Use `selected` and
  `onDayClick` to implement a custom selection mode.

___

### modifierClassNames

• `Optional` **modifierClassNames**: *undefined* \| *Record*<string, string\>

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

• `Optional` **modifierPrefix**: *undefined* \| *string*

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

• `Optional` **modifierStyles**: *undefined* \| *Record*<string, CSSProperties\>

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

• `Optional` **modifiers**: *undefined* \| *Record*<string, Date \| Date[] \| (`date`: Date) => *boolean* \| [*DateRange*](../types/daterange.md) \| [*DateBefore*](../types/datebefore.md) \| [*DateAfter*](../types/dateafter.md) \| [*DateInterval*](../types/dateinterval.md) \| [*DayOfWeekMatcher*](../types/dayofweekmatcher.md) \| [*Matcher*](../types/matcher.md)[]\>

Add modifiers to the matching days.

For example, to add a `booked` modifier to the current day:

```
<DayPicker modifiers={{ booked: new Date() }} />
```

___

### month

• `Optional` **month**: *undefined* \| Date

The month to display in the calendar.

As opposed to [defaultMonth](daypickerbase.md#defaultmonth), use this prop with [onMonthChange](daypickerbase.md#onmonthchange) to
change the month programmatically.

**Example**

Implement a button to go to today.

```
function Example() {
  const [month, setMonth] = useState();
  return (
    <>
      <DayPicker month={month} onMonthChange={setMonth} />
      <button onClick={() => setMonth(new Date())}>Go to Today</button>
    </>
  );
}
```

___

### numberOfMonths

• `Optional` **numberOfMonths**: *undefined* \| *number*

The number of displayed months. Defaults to `1`.

___

### onDayBlur

• `Optional` **onDayBlur**: *undefined* \| [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

___

### onDayClick

• `Optional` **onDayClick**: *undefined* \| [*DayClickEventHandler*](../types/dayclickeventhandler.md)

___

### onDayFocus

• `Optional` **onDayFocus**: *undefined* \| [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

___

### onDayKeyDown

• `Optional` **onDayKeyDown**: *undefined* \| [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

___

### onDayKeyPress

• `Optional` **onDayKeyPress**: *undefined* \| [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

___

### onDayKeyUp

• `Optional` **onDayKeyUp**: *undefined* \| [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

___

### onDayMouseEnter

• `Optional` **onDayMouseEnter**: *undefined* \| [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

___

### onDayMouseLeave

• `Optional` **onDayMouseLeave**: *undefined* \| [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

___

### onDayTouchCancel

• `Optional` **onDayTouchCancel**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

___

### onDayTouchEnd

• `Optional` **onDayTouchEnd**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

___

### onDayTouchMove

• `Optional` **onDayTouchMove**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

___

### onDayTouchStart

• `Optional` **onDayTouchStart**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

___

### onMonthChange

• `Optional` **onMonthChange**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Event fired when the user navigates between months.

___

### onNextClick

• `Optional` **onNextClick**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

___

### onPrevClick

• `Optional` **onPrevClick**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

___

### onWeekNumberClick

• `Optional` **onWeekNumberClick**: *undefined* \| [*WeekNumberClickEventHandler*](../types/weeknumberclickeventhandler.md)

___

### pagedNavigation

• `Optional` **pagedNavigation**: *undefined* \| *boolean*

Paginate the month navigation displaying the [numberOfMonths](daypickerbase.md#numberofmonths) at time.

___

### reverseMonths

• `Optional` **reverseMonths**: *undefined* \| *boolean*

Render the months in reversed order (when [numberOfMonths](daypickerbase.md#numberofmonths) is greater
than `1`) to display the most recent month first.

___

### selected

• `Optional` **selected**: *undefined* \| Date \| Date[] \| (`date`: Date) => *boolean* \| [*DateRange*](../types/daterange.md) \| [*DateBefore*](../types/datebefore.md) \| [*DateAfter*](../types/dateafter.md) \| [*DateInterval*](../types/dateinterval.md) \| [*DayOfWeekMatcher*](../types/dayofweekmatcher.md) \| [*Matcher*](../types/matcher.md)[]

Apply the `selected` modifier to the matching days.

**Example**

```
function Example() {
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

• `Optional` **showOutsideDays**: *undefined* \| *boolean*

Show the outside days.  An outside day is a day falling in the next or the
previous month. Default is `false`.

___

### showWeekNumber

• `Optional` **showWeekNumber**: *undefined* \| *boolean*

Show the week numbers column. Default to `false`.

___

### style

• `Optional` **style**: *undefined* \| *CSSProperties*

Style to apply to the container element.

___

### styles

• `Optional` **styles**: *undefined* \| *Partial*<[*StyledElement*](../types/styledelement.md)<CSSProperties\>\>

Change the inline styles for each UIElement.

___

### toDate

• `Optional` **toDate**: *undefined* \| Date

The latest day to end the month navigation.

___

### toMonth

• `Optional` **toMonth**: *undefined* \| Date

The latest month to end the month navigation.

___

### toYear

• `Optional` **toYear**: *undefined* \| *number*

The latest year to end the month navigation.

___

### today

• `Optional` **today**: *undefined* \| Date \| *off*

The today’s date. Default is the current date.

**Example**

```
function Example() {
  return <DayPicker today={new Date(2022, 2, 18)} />;
}
```
