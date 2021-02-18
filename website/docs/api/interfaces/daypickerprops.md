---
id: "daypickerprops"
title: "Interface: DayPickerProps"
sidebar_label: "DayPickerProps"
custom_edit_url: null
hide_title: true
---

# Interface: DayPickerProps

The props for the [DayPicker](../functions/daypicker.md) component.

## Properties

### captionLayout

• `Optional` **captionLayout**: *undefined* \| *static* \| *dropdown* \| *buttons*

Change the design of the navigation to navigate between months.

- `buttons` (default): display prev/right buttons
- `dropdown`: display drop-downs to change the month and the year
- `none`: do not display the navigation elements

**Note** `dropdown` is valid only when `fromDate` or `toDate` are set. If
those are not set, it fallbacks to `buttons`.

**Example**

```jsx showOutput open=no
function Example() {
 return (
   <DayPicker
     fromYear={2020}
     toYear={2025}
     captionLayout="dropdown"
   />
)};
```

___

### className

• `Optional` **className**: *undefined* \| *string*

CSS class to add to the root UI element.

___

### classNames

• `Optional` **classNames**: *undefined* \| [*ClassNames*](../types/classnames.md)

Change the class names.

Use this prop when you need to change the default class names — for example
when using CSS modules.

**Example**

Use of custom class names for the head and the caption elements:

```jsx showOutput open=no
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

• `Optional` **components**: *undefined* \| [*Components*](../types/components.md)

Customize the internal components.

___

### defaultMonth

• `Optional` **defaultMonth**: *undefined* \| Date

The initial month to show in the calendar. Default is the current month.

Notes

- to know when the user changes the month, use [onMonthChange](daypickerprops.md#onmonthchange).
- to change the month programmatically, use the [month](daypickerprops.md#month) prop.

___

### defaultSelected

• `Optional` **defaultSelected**: [*DateSelection*](../types/dateselection.md)

The default selected days.

The type of this prop depends from the value passed to the `type` prop:

___

### dir

• `Optional` **dir**: *undefined* \| *string*

The text direction of the calendar. Use `ltr` for left-to-right (default)
or `rtl` for right-to-left.

___

### disabled

• `Optional` **disabled**: *undefined* \| Date \| [*DateRange*](../types/daterange.md) \| [*DateInterval*](../types/dateinterval.md) \| [*DateBefore*](../types/datebefore.md) \| [*DateAfter*](../types/dateafter.md) \| [*MatchDate*](../types/matchdate.md) \| [*MatchDaysOfWeek*](../types/matchdaysofweek.md) \| [*Matcher*](../types/matcher.md)[]

Apply the `disabled` modifier to the matching days.

**Example**

```jsx showOutput open=no
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

### enableOutsideDaysClick

• `Optional` **enableOutsideDaysClick**: *undefined* \| *boolean*

Enable the dayclick event for outside days when [showOutsideDays](daypickerprops.md#showoutsidedays) is set.
Default to `false`.

___

### fixedWeeks

• `Optional` **fixedWeeks**: *undefined* \| *boolean*

Display six weeks per months, regardless the month’s number of weeks.

To use this prop, [showOutsideDays](daypickerprops.md#showoutsidedays) must be set. Default to `false`.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker showOutsideDays fixedWeeks />
};
```

___

### formatters

• `Optional` **formatters**: *undefined* \| [*Formatters*](../types/formatters.md)

Change the default formatters.

___

### fromDate

• `Optional` **fromDate**: *undefined* \| Date

The day to start the calendar.

___

### fromMonth

• `Optional` **fromMonth**: *undefined* \| Date

The month to start the calendar.

___

### fromYear

• `Optional` **fromYear**: *undefined* \| *number*

The year to start the calendar.

___

### hidden

• `Optional` **hidden**: *undefined* \| Date \| [*DateRange*](../types/daterange.md) \| [*DateInterval*](../types/dateinterval.md) \| [*DateBefore*](../types/datebefore.md) \| [*DateAfter*](../types/dateafter.md) \| [*MatchDate*](../types/matchdate.md) \| [*MatchDaysOfWeek*](../types/matchdaysofweek.md) \| [*Matcher*](../types/matcher.md)[]

Apply the `hidden` modifier to the matching days – to hide them from the
calendar.

**Example**

```jsx showOutput open=no
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

### hideCaption

• `Optional` **hideCaption**: *undefined* \| *boolean*

Show the month’s caption. As default, the caption displays month and year.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker showCaption={false} />
};
```

___

### hideHead

• `Optional` **hideHead**: *undefined* \| *boolean*

Show the month’s head. As default, it displays the weekday names according
to [locale](daypickerprops.md#locale).

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker showHead={false} />
};
```

___

### labels

• `Optional` **labels**: *undefined* \| [*Labels*](../types/labels.md)

A map of formatters for the ARIA labels used in the UI.

___

### locale

• `Optional` **locale**: *undefined* \| Locale

The date-fns locale object to localize the user interface. Defaults to English.

See also DateFns [Internationalization guide](https://date-fns.org/v2.17.0/docs/I18n)/

**Example**

Set the calendar to Spanish.

```jsx showOutput open=no
import spanish from 'date-fns/locale/es';

function Example() {
  return <DayPicker locale={spanish} />;
}
```

___

### modifierPrefix

• `Optional` **modifierPrefix**: *undefined* \| *string*

The prefix to add to the modifiers class names. Default is `rdp-day_`.

#### Usage

Each day element will get a `${modifierPrefix}${modifier}` class name when
matching a modifier.

```
const today = new Date();
<DayPicker
 modifierPrefix="calendar-day_" // use this prefix instead of default
 selected={today} // Today element has `.calendar-day_selected`
 hidden={today} // `.calendar-day_hidden`
 modifiers={{ today }} // `.calendar-day_today`
/>
```
If you need to change the class names without using a prefix, use
`modifiersClassNames` instead.

___

### modifiers

• `Optional` **modifiers**: *undefined* \| [*ModifiersMatchers*](../types/modifiersmatchers.md)

Add a custom modifier to the matching days.

**Example**

Add a `booked` modifier to the current day.

```
<DayPicker modifiers={{ booked: new Date() }}
/>
```

___

### modifiersClassNames

• `Optional` **modifiersClassNames**: *undefined* \| [*ModifiersClassNames*](../types/modifiersclassnames.md)

Change the class name for the day UI element matching the [modifiers](daypickerprops.md#modifiers).

**Example**

Add the `.with-circle` class of the days matching the `isToday` modifier.

```jsx
<DayPicker
 modifiers={{ isToday: new Date() }}
 modifiersClassNames={{ isToday: 'with-circle' }}
/>
```

___

### modifiersStyles

• `Optional` **modifiersStyles**: *undefined* \| [*ModifiersStyles*](../types/modifiersstyles.md)

Change the inline style for the day UI element matching the [modifiers](daypickerprops.md#modifiers).

**Example**

Change the background color of the days matching the `isToday` modifier.

```jsx
<DayPicker
 modifiers={{ isToday: new Date() }}
 modifiersStyles={{ isToday: { backgroundColor: 'purple' } }}
/>
```

___

### month

• `Optional` **month**: *undefined* \| Date

The month to display in the calendar.

As opposed to [defaultMonth](daypickerprops.md#defaultmonth), use this prop with [onMonthChange](daypickerprops.md#onmonthchange) to
change the month programmatically. Implementing [onMonthChange](daypickerprops.md#onmonthchange) will also
enable months navigation.

**Example**

Implement a button to go to today.

```jsx showOutput open=no
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

Change the number of months rendered by the component. Defaults to `1`.

See also [pagedNavigation](daypickerprops.md#pagednavigation).

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker numberOfMonths={2} />
};
```

___

### onDayBlur

• `Optional` **onDayBlur**: *undefined* \| [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

Event fired when a day button lose the focus.

___

### onDayClick

• `Optional` **onDayClick**: *undefined* \| [*DayClickEventHandler*](../types/dayclickeventhandler.md)

Event fired when a day is clicked.

___

### onDayFocus

• `Optional` **onDayFocus**: *undefined* \| [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

Event fired when a day button get the focus.

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

Event fired when the mouse enters the day button.

___

### onDayMouseLeave

• `Optional` **onDayMouseLeave**: *undefined* \| [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

Event fired when the mouse leaves the day button.

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

### onSelect

• `Optional` **onSelect**: *undefined* \| [*SelectEventHandler*](../types/selecteventhandler.md)

Event fired when a day is selected.

**Note:** This event is disabled when `type='uncontrolled'`.

___

### pagedNavigation

• `Optional` **pagedNavigation**: *undefined* \| *boolean*

When displaying more than one months, the navigation will be paginated
displaying the number of months at time (instead of one).

Requires [numberOfMonths](daypickerprops.md#numberofmonths) to be set. Default to `false`.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker numberOfMonths={2} pagedNavigation />
};
```

___

### required

• `Optional` **required**: *undefined* \| *boolean*

When the selection type is controlled, require at least one day as selected.

___

### reverseMonths

• `Optional` **reverseMonths**: *undefined* \| *boolean*

Render the months in reversed order when [numberOfMonths](daypickerprops.md#numberofmonths) is greater than
`1` – to display the most recent month first.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker numberOfMonths={5} reverseMonths />
};
```

___

### selected

• `Optional` **selected**: *undefined* \| Date \| [*DateRange*](../types/daterange.md) \| [*DateInterval*](../types/dateinterval.md) \| [*DateBefore*](../types/datebefore.md) \| [*DateAfter*](../types/dateafter.md) \| [*MatchDate*](../types/matchdate.md) \| [*MatchDaysOfWeek*](../types/matchdaysofweek.md) \| [*Matcher*](../types/matcher.md)[]

Apply the `selected` modifier to the matching days.

**Example**

```jsx showOutput open=no
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

Show the outside days.

An outside day is a day falling in the next or the previous month. Default
is `false`.

Outside days are not interactive as default. Use [enableOutsideDaysClick](daypickerprops.md#enableoutsidedaysclick)
to make them clickable.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker showOutsideDays />
};
```

___

### showWeekNumber

• `Optional` **showWeekNumber**: *undefined* \| *boolean*

Show the week numbers column. Default to `false`.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker showWeekNumber />
};
```

___

### style

• `Optional` **style**: *undefined* \| *CSSProperties*

Style to apply to the root UI element.

___

### styles

• `Optional` **styles**: *undefined* \| [*DayPickerStyles*](../types/daypickerstyles.md)

Change the inline styles for each UI element.

___

### toDate

• `Optional` **toDate**: *undefined* \| Date

The day to end the calendar.

___

### toMonth

• `Optional` **toMonth**: *undefined* \| Date

The month to end the calendar.

___

### toYear

• `Optional` **toYear**: *undefined* \| *number*

The year to end the calendar.

___

### today

• `Optional` **today**: *undefined* \| Date

The today’s date. Default is the current date. Adds the `today` modifier to
the day cell.

**Example**

```jsx showOutput open=no
function Example() {
  return <DayPicker today={new Date(2022, 2, 18)} />;
}
```

___

### type

• `Optional` **type**: *undefined* \| *uncontrolled* \| *single* \| *multiple* \| *range*

The type of the selection.

- `single` (default) allows selecting only a single day
- `multiple` allows selecting multiple days
- `range` allows selecting a range of days
- `uncontrolled`: you set the days via the `selected` prop and day events.

**Note:** by using the `selected` prop the type is alwyas set to `uncontrolled`.
