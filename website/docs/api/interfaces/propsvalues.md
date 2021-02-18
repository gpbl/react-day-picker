---
id: "propsvalues"
title: "Interface: PropsValues"
sidebar_label: "PropsValues"
custom_edit_url: null
hide_title: true
---

# Interface: PropsValues

Represent the value of a [PropsContext](../variables/propscontext.md).

## Hierarchy

* *Omit*<[*DayPickerProps*](daypickerprops.md), *className* \| *style* \| *month* \| *fromMonth* \| *toMonth* \| *fromYear* \| *toYear*\>

  ↳ **PropsValues**

## Properties

### captionLayout

• **captionLayout**: [*CaptionLayout*](../types/captionlayout.md)

___

### classNames

• **classNames**: [*ClassNames*](../types/classnames.md)

___

### components

• **components**: *Required*<[*Components*](../types/components.md)\>

___

### defaultMonth

• `Optional` **defaultMonth**: *undefined* \| Date

The initial month to show in the calendar. Default is the current month.

Notes

- to know when the user changes the month, use [onMonthChange](propsvalues.md#onmonthchange).
- to change the month programmatically, use the [month](daypickerprops.md#month) prop.

___

### defaultSelected

• `Optional` **defaultSelected**: [*DateSelection*](../types/dateselection.md)

The default selected days.

The type of this prop depends from the value passed to the `type` prop:

___

### dir

• `Optional` **dir**: *undefined* \| *string*

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

Enable the dayclick event for outside days when [showOutsideDays](propsvalues.md#showoutsidedays) is set.
Default to `false`.

___

### fixedWeeks

• `Optional` **fixedWeeks**: *undefined* \| *boolean*

Display six weeks per months, regardless the month’s number of weeks.

To use this prop, [showOutsideDays](propsvalues.md#showoutsidedays) must be set. Default to `false`.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker showOutsideDays fixedWeeks />
};
```

___

### formatters

• **formatters**: *Required*<[*Formatters*](../types/formatters.md)\>

___

### fromDate

• `Optional` **fromDate**: *undefined* \| Date

The day to start the calendar.

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
to [locale](propsvalues.md#locale).

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker showHead={false} />
};
```

___

### labels

• **labels**: *Required*<[*Labels*](../types/labels.md)\>

___

### locale

• **locale**: Locale

___

### modifierPrefix

• **modifierPrefix**: *string*

___

### modifiers

• **modifiers**: [*ModifiersMatchers*](../types/modifiersmatchers.md)

___

### modifiersClassNames

• `Optional` **modifiersClassNames**: *undefined* \| [*ModifiersClassNames*](../types/modifiersclassnames.md)

___

### modifiersStyles

• `Optional` **modifiersStyles**: *undefined* \| [*ModifiersStyles*](../types/modifiersstyles.md)

Change the inline style for the day UI element matching the [modifiers](propsvalues.md#modifiers).

**Example**

Change the background color of the days matching the `isToday` modifier.

```jsx
<DayPicker
 modifiers={{ isToday: new Date() }}
 modifiersStyles={{ isToday: { backgroundColor: 'purple' } }}
/>
```

___

### numberOfMonths

• **numberOfMonths**: *number*

___

### onDayBlur

• **onDayBlur**: [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

Handle focus behavior. Calls the original `onDayBlur` passed from props.

___

### onDayClick

• **onDayClick**: [*DayClickEventHandler*](../types/dayclickeventhandler.md)

Handle click behavior. Calls the original `onDayClick` passed from props.

___

### onDayFocus

• **onDayFocus**: [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

Handle focus behavior. Calls the original `onDayFocus` passed from props.

___

### onDayKeyDown

• **onDayKeyDown**: [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

Handle keyboard navigation. Calls the original `onDayKeyDown` passed from props.

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

• **onMonthChange**: [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Will set the current month if DayPicker is in controlled mode. Calls the
original `onMonthChange`.

This event handler will do nothing if the passed month is outside the
allowed months.

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

### originalProps

• **originalProps**: [*DayPickerProps*](daypickerprops.md)

A reference to the original props passed to the component. Useful for
inspecting in internal components.

___

### pagedNavigation

• `Optional` **pagedNavigation**: *undefined* \| *boolean*

When displaying more than one months, the navigation will be paginated
displaying the number of months at time (instead of one).

Requires [numberOfMonths](propsvalues.md#numberofmonths) to be set. Default to `false`.

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

Render the months in reversed order when [numberOfMonths](propsvalues.md#numberofmonths) is greater than
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

Outside days are not interactive as default. Use [enableOutsideDaysClick](propsvalues.md#enableoutsidedaysclick)
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

### styles

• `Optional` **styles**: *undefined* \| [*DayPickerStyles*](../types/daypickerstyles.md)

Change the inline styles for each UI element.

___

### toDate

• `Optional` **toDate**: *undefined* \| Date

The day to end the calendar.

___

### today

• **today**: Date

The today’s date used in the calendar. If not overridden from props, is the
current date.

___

### type

• `Optional` **type**: *undefined* \| *uncontrolled* \| *single* \| *multiple* \| *range*

The type of the selection.

- `single` (default) allows selecting only a single day
- `multiple` allows selecting multiple days
- `range` allows selecting a range of days
- `uncontrolled`: you set the days via the `selected` prop and day events.

**Note:** by using the `selected` prop the type is alwyas set to `uncontrolled`.
