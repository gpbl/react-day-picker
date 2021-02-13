---
id: "daypickerprops"
title: "Interface: DayPickerProps"
sidebar_label: "DayPickerProps"
custom_edit_url: null
hide_title: true
---

# Interface: DayPickerProps

Represent the props used by DayPicker’s internal components. Extends
[DayPickerComponentProps](daypickercomponentprops.md) with the default props.

## Hierarchy

* [*DayPickerComponentProps*](daypickercomponentprops.md)

  ↳ **DayPickerProps**

## Properties

### className

• **className**: *string*

CSS class to add to the root UI element.

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[className](daypickercomponentprops.md#classname)

___

### classNames

• **classNames**: [*DayPickerClassNames*](../types/daypickerclassnames.md)

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

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[classNames](daypickercomponentprops.md#classnames)

___

### components

• **components**: { `Caption`: (`props`: [*CaptionProps*](captionprops.md)) => JSX.Element ; `Day`: (`props`: [*DayProps*](dayprops.md)) => JSX.Element \| *null* ; `Navigation`: (`props`: [*NavigationProps*](navigationprops.md)) => JSX.Element ; `NextIcon`: () => JSX.Element ; `PrevIcon`: () => JSX.Element ; `Week`: (`props`: [*WeekProps*](weekprops.md)) => JSX.Element  }

Customize the internal components.

#### Type declaration:

Name | Type |
------ | ------ |
`Caption` | (`props`: [*CaptionProps*](captionprops.md)) => JSX.Element |
`Day` | (`props`: [*DayProps*](dayprops.md)) => JSX.Element \| *null* |
`Navigation` | (`props`: [*NavigationProps*](navigationprops.md)) => JSX.Element |
`NextIcon` | () => JSX.Element |
`PrevIcon` | () => JSX.Element |
`Week` | (`props`: [*WeekProps*](weekprops.md)) => JSX.Element |

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[components](daypickercomponentprops.md#components)

___

### dir

• `Optional` **dir**: *undefined* \| *string*

The text direction of the calendar. Use `ltr` for left-to-right (default)
or `rtl` for right-to-left.

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[dir](daypickercomponentprops.md#dir)

___

### disabled

• `Optional` **disabled**: *undefined* \| Date \| [*MatchDate*](../types/matchdate.md) \| [*MatchFromTo*](../types/matchfromto.md) \| [*MatchBefore*](../types/matchbefore.md) \| [*MatchAfter*](../types/matchafter.md) \| [*MatchDaysOfWeek*](../types/matchdaysofweek.md) \| [*Matcher*](../types/matcher.md)[]

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

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[disabled](daypickercomponentprops.md#disabled)

___

### enableOutsideDaysClick

• **enableOutsideDaysClick**: *boolean*

Enable the dayclick event for outside days when [showOutsideDays](daypickerprops.md#showoutsidedays) is set.
Default to `false`.

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[enableOutsideDaysClick](daypickercomponentprops.md#enableoutsidedaysclick)

___

### fixedWeeks

• **fixedWeeks**: *boolean*

Display six weeks per months, regardless the month’s number of weeks.

To use this prop, [showOutsideDays](daypickerprops.md#showoutsidedays) must be set. Default to `false`.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker showOutsideDays fixedWeeks />
};
```

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[fixedWeeks](daypickercomponentprops.md#fixedweeks)

___

### formatCaption

• **formatCaption**: [*DateFormatter*](../types/dateformatter.md)

Format the month caption text.

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[formatCaption](daypickercomponentprops.md#formatcaption)

___

### formatDay

• **formatDay**: [*DateFormatter*](../types/dateformatter.md)

Format the content of the day element.

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[formatDay](daypickercomponentprops.md#formatday)

___

### formatWeekNumber

• **formatWeekNumber**: [*WeekNumberFormatter*](../types/weeknumberformatter.md)

Format the week numbers (when [showWeekNumber](daypickerprops.md#showweeknumber) is set).

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[formatWeekNumber](daypickercomponentprops.md#formatweeknumber)

___

### formatWeekdayName

• **formatWeekdayName**: [*WeekdayFormatter*](../types/weekdayformatter.md)

Format the weekday's name in the head element.

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[formatWeekdayName](daypickercomponentprops.md#formatweekdayname)

___

### fromMonth

• `Optional` **fromMonth**: *undefined* \| Date

Restrict the month navigation from the specified month. See also [toMonth](daypickerprops.md#tomonth).

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[fromMonth](daypickercomponentprops.md#frommonth)

___

### hidden

• `Optional` **hidden**: *undefined* \| Date \| [*MatchDate*](../types/matchdate.md) \| [*MatchFromTo*](../types/matchfromto.md) \| [*MatchBefore*](../types/matchbefore.md) \| [*MatchAfter*](../types/matchafter.md) \| [*MatchDaysOfWeek*](../types/matchdaysofweek.md) \| [*Matcher*](../types/matcher.md)[]

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

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[hidden](daypickercomponentprops.md#hidden)

___

### initialMonth

• **initialMonth**: Date

The initial month to show in the calendar. Default is the current month.

Notes

- to know when the user changes the month, use [onMonthChange](daypickerprops.md#onmonthchange).
- to change the month programmatically, use the [month](daypickerprops.md#month) prop.

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[initialMonth](daypickercomponentprops.md#initialmonth)

___

### labelsFormatters

• **labelsFormatters**: [*LabelsFormatters*](../types/labelsformatters.md)

A map of formatters for the ARIA labels used in the UI.

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[labelsFormatters](daypickercomponentprops.md#labelsformatters)

___

### locale

• **locale**: Locale

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

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[locale](daypickercomponentprops.md#locale)

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

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[modifiers](daypickercomponentprops.md#modifiers)

___

### modifiersClassNames

• **modifiersClassNames**: [*ModifiersClassNames*](../types/modifiersclassnames.md)

Change the class name for the day UI element matching the [modifiers](daypickerprops.md#modifiers).

**Example**

Add the `.with-circle` class of the days matching the `isToday` modifier.

```jsx
<DayPicker
 modifiers={{ isToday: new Date() }}
 modifiersClassNames={{ isToday: 'with-circle' }}
/>
```

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[modifiersClassNames](daypickercomponentprops.md#modifiersclassnames)

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

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[modifiersStyles](daypickercomponentprops.md#modifiersstyles)

___

### month

• **month**: Date

The month to display in the calendar.

As opposed to [initialMonth](daypickerprops.md#initialmonth), use this prop with [onMonthChange](daypickerprops.md#onmonthchange) to
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

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[month](daypickercomponentprops.md#month)

___

### numberOfMonths

• **numberOfMonths**: *number*

Change the number of months rendered by the component. Defaults to `1`.

See also [pagedNavigation](daypickerprops.md#pagednavigation).

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker numberOfMonths={2} />
};
```

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[numberOfMonths](daypickercomponentprops.md#numberofmonths)

___

### onDayClick

• `Optional` **onDayClick**: *undefined* \| [*DayClickEventHandler*](../types/dayclickeventhandler.md)

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[onDayClick](daypickercomponentprops.md#ondayclick)

___

### onDayKeyDown

• `Optional` **onDayKeyDown**: *undefined* \| [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[onDayKeyDown](daypickercomponentprops.md#ondaykeydown)

___

### onDayKeyPress

• `Optional` **onDayKeyPress**: *undefined* \| [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[onDayKeyPress](daypickercomponentprops.md#ondaykeypress)

___

### onDayKeyUp

• `Optional` **onDayKeyUp**: *undefined* \| [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[onDayKeyUp](daypickercomponentprops.md#ondaykeyup)

___

### onDayMouseEnter

• `Optional` **onDayMouseEnter**: *undefined* \| [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[onDayMouseEnter](daypickercomponentprops.md#ondaymouseenter)

___

### onDayMouseLeave

• `Optional` **onDayMouseLeave**: *undefined* \| [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[onDayMouseLeave](daypickercomponentprops.md#ondaymouseleave)

___

### onDayTouchCancel

• `Optional` **onDayTouchCancel**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[onDayTouchCancel](daypickercomponentprops.md#ondaytouchcancel)

___

### onDayTouchEnd

• `Optional` **onDayTouchEnd**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[onDayTouchEnd](daypickercomponentprops.md#ondaytouchend)

___

### onDayTouchMove

• `Optional` **onDayTouchMove**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[onDayTouchMove](daypickercomponentprops.md#ondaytouchmove)

___

### onDayTouchStart

• `Optional` **onDayTouchStart**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[onDayTouchStart](daypickercomponentprops.md#ondaytouchstart)

___

### onMonthChange

• `Optional` **onMonthChange**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[onMonthChange](daypickercomponentprops.md#onmonthchange)

___

### onNextClick

• `Optional` **onNextClick**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[onNextClick](daypickercomponentprops.md#onnextclick)

___

### onPrevClick

• `Optional` **onPrevClick**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[onPrevClick](daypickercomponentprops.md#onprevclick)

___

### pagedNavigation

• **pagedNavigation**: *boolean*

When displaying more than one months, the navigation will be paginated
displaying the number of months at time (instead of one).

Requires [numberOfMonths](daypickerprops.md#numberofmonths) to be set. Default to `false`.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker numberOfMonths={2} pagedNavigation />
};
```

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[pagedNavigation](daypickercomponentprops.md#pagednavigation)

___

### reverseMonths

• **reverseMonths**: *boolean*

Render the months in reversed order when [numberOfMonths](daypickerprops.md#numberofmonths) is greater than
`1` – to display the most recent month first.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker numberOfMonths={5} reverseMonths />
};
```

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[reverseMonths](daypickercomponentprops.md#reversemonths)

___

### selected

• `Optional` **selected**: *undefined* \| Date \| [*MatchDate*](../types/matchdate.md) \| [*MatchFromTo*](../types/matchfromto.md) \| [*MatchBefore*](../types/matchbefore.md) \| [*MatchAfter*](../types/matchafter.md) \| [*MatchDaysOfWeek*](../types/matchdaysofweek.md) \| [*Matcher*](../types/matcher.md)[]

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

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[selected](daypickercomponentprops.md#selected)

___

### showCaption

• **showCaption**: *boolean*

Show the month’s caption. As default, the caption displays month and year.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker showCaption={false} />
};
```

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[showCaption](daypickercomponentprops.md#showcaption)

___

### showHead

• **showHead**: *boolean*

Show the month’s head. As default, it displays the weekday names according
to [locale](daypickerprops.md#locale).

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker showHead={false} />
};
```

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[showHead](daypickercomponentprops.md#showhead)

___

### showNavigation

• **showNavigation**: *boolean*

Show the month navigation bar. Default is `true`.

When using [month](daypickerprops.md#month), make sure you set [onMonthChange](daypickerprops.md#onmonthchange) to make the
navigation appear.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker showNavigation={false} />
};
```

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[showNavigation](daypickercomponentprops.md#shownavigation)

___

### showOutsideDays

• **showOutsideDays**: *boolean*

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

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[showOutsideDays](daypickercomponentprops.md#showoutsidedays)

___

### showWeekNumber

• **showWeekNumber**: *boolean*

Show the week numbers column. Default to `false`.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker showWeekNumber />
};
```

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[showWeekNumber](daypickercomponentprops.md#showweeknumber)

___

### style

• `Optional` **style**: *undefined* \| *CSSProperties*

Style to apply to the root UI element.

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[style](daypickercomponentprops.md#style)

___

### styles

• `Optional` **styles**: *undefined* \| [*DayPickerStyles*](../types/daypickerstyles.md)

Change the inline styles for each UI element.

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[styles](daypickercomponentprops.md#styles)

___

### toMonth

• `Optional` **toMonth**: *undefined* \| Date

Restrict the month navigation to the specified month. See also [fromMonth](daypickerprops.md#frommonth).

Inherited from: [DayPickerComponentProps](daypickercomponentprops.md).[toMonth](daypickercomponentprops.md#tomonth)

___

### today

• **today**: Date \| *off*

The today’s date. Default is the current date. Adds the `today` modifier to
the day cell.

Set it to `off` to disable the today date.

**Example**

```jsx showOutput open=no
function Example() {
  return <DayPicker today={new Date(2022, 2, 18)} />;
}
```

Overrides: [DayPickerComponentProps](daypickercomponentprops.md).[today](daypickercomponentprops.md#today)
