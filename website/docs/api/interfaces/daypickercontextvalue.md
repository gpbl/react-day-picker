---
id: "daypickercontextvalue"
title: "Interface: DayPickerContextValue"
sidebar_label: "DayPickerContextValue"
custom_edit_url: null
hide_title: true
---

# Interface: DayPickerContextValue

Represent the value of the [DayPickerContext](../variables/daypickercontext.md). Extends `DayPickerProps`
with values used by the internal components: `prevMonth`, `nextMonth`,
`currentMonth`, `focusedDay`.

## Hierarchy

* *Omit*<[*DayPickerProps*](daypickerprops.md), *className* \| *style* \| *initialMonth* \| *month*\>

  ↳ **DayPickerContextValue**

## Properties

### classNames

• **classNames**: [*ClassNames*](../types/classnames.md)

___

### components

• **components**: *Required*<[*Components*](../types/components.md)\>

___

### currentMonth

• **currentMonth**: Date

The currently displayed month. When multiple months, is the first.

___

### dir

• `Optional` **dir**: *undefined* \| *string*

The text direction of the calendar. Use `ltr` for left-to-right (default)
or `rtl` for right-to-left.

___

### disabled

• `Optional` **disabled**: *undefined* \| Date \| [*MatchDate*](../types/matchdate.md) \| [*MatchFromTo*](../types/matchfromto.md) \| [*MatchBeforeAfter*](../types/matchbeforeafter.md) \| [*MatchBefore*](../types/matchbefore.md) \| [*MatchAfter*](../types/matchafter.md) \| [*MatchDaysOfWeek*](../types/matchdaysofweek.md) \| [*Matcher*](../types/matcher.md)[]

Apply the `disabled` modifier to the matching days.

**Example**

```jsx showOutput open=no
function Example() {
  return (
    <DayPicker
      initialMonth={new Date(2021, 11)}
      disabled={{
        from: new Date(2021, 11, 14),
        to: new Date(2021, 11, 24)
      }}
    />
  );
}
```

___

### dropdownNavigation

• `Optional` **dropdownNavigation**: *undefined* \| *boolean*

When setting `fromDate` and `toDate`, use dropdowns instead of buttons to
navigate the calendar.

**Example**

```jsx showOutput open=no
function Example() {
 return (
   <DayPicker
     fromDate={new Date(2020, 10, 1)}
     toDate={new Date(2022, 5, 1)}
     dropdownNavigation
   />
)};
```

___

### enableOutsideDaysClick

• `Optional` **enableOutsideDaysClick**: *undefined* \| *boolean*

Enable the dayclick event for outside days when [showOutsideDays](daypickercontextvalue.md#showoutsidedays) is set.
Default to `false`.

___

### fixedWeeks

• `Optional` **fixedWeeks**: *undefined* \| *boolean*

Display six weeks per months, regardless the month’s number of weeks.

To use this prop, [showOutsideDays](daypickercontextvalue.md#showoutsidedays) must be set. Default to `false`.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker showOutsideDays fixedWeeks />
};
```

___

### focusedDay

• `Optional` **focusedDay**: *undefined* \| Date

The day that should focus when rendering. Used for keyboard navigation

___

### formatters

• **formatters**: *Required*<[*Formatters*](../types/formatters.md)\>

___

### fromDate

• `Optional` **fromDate**: *undefined* \| Date

The day to start the calendar.

___

### hidden

• `Optional` **hidden**: *undefined* \| Date \| [*MatchDate*](../types/matchdate.md) \| [*MatchFromTo*](../types/matchfromto.md) \| [*MatchBeforeAfter*](../types/matchbeforeafter.md) \| [*MatchBefore*](../types/matchbefore.md) \| [*MatchAfter*](../types/matchafter.md) \| [*MatchDaysOfWeek*](../types/matchdaysofweek.md) \| [*Matcher*](../types/matcher.md)[]

Apply the `hidden` modifier to the matching days – to hide them from the
calendar.

**Example**

```jsx showOutput open=no
function Example() {
  return (
    <DayPicker
      initialMonth={new Date(2021, 11)}
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
to [locale](daypickercontextvalue.md#locale).

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

Change the inline style for the day UI element matching the [modifiers](daypickercontextvalue.md#modifiers).

**Example**

Change the background color of the days matching the `isToday` modifier.

```jsx
<DayPicker
 modifiers={{ isToday: new Date() }}
 modifiersStyles={{ isToday: { backgroundColor: 'purple' } }}
/>
```

___

### nextMonth

• `Optional` **nextMonth**: *undefined* \| Date

The month coming after the current one

___

### numberOfMonths

• **numberOfMonths**: *number*

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

___

### onNextClick

• `Optional` **onNextClick**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

___

### onPrevClick

• `Optional` **onPrevClick**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

___

### pagedNavigation

• `Optional` **pagedNavigation**: *undefined* \| *boolean*

When displaying more than one months, the navigation will be paginated
displaying the number of months at time (instead of one).

Requires [numberOfMonths](daypickercontextvalue.md#numberofmonths) to be set. Default to `false`.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker numberOfMonths={2} pagedNavigation />
};
```

___

### prevMonth

• `Optional` **prevMonth**: *undefined* \| Date

The month coming before the current one

___

### reverseMonths

• `Optional` **reverseMonths**: *undefined* \| *boolean*

Render the months in reversed order when [numberOfMonths](daypickercontextvalue.md#numberofmonths) is greater than
`1` – to display the most recent month first.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker numberOfMonths={5} reverseMonths />
};
```

___

### selected

• `Optional` **selected**: *undefined* \| Date \| [*MatchDate*](../types/matchdate.md) \| [*MatchFromTo*](../types/matchfromto.md) \| [*MatchBeforeAfter*](../types/matchbeforeafter.md) \| [*MatchBefore*](../types/matchbefore.md) \| [*MatchAfter*](../types/matchafter.md) \| [*MatchDaysOfWeek*](../types/matchdaysofweek.md) \| [*Matcher*](../types/matcher.md)[]

Apply the `selected` modifier to the matching days.

**Example**

```jsx showOutput open=no
function Example() {
  return (
    <DayPicker
      initialMonth={new Date(2021, 11)}
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

Outside days are not interactive as default. Use [enableOutsideDaysClick](daypickercontextvalue.md#enableoutsidedaysclick)
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
