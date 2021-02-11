---
id: "daypickerprops"
title: "Interface: DayPickerProps"
sidebar_label: "DayPickerProps"
custom_edit_url: null
hide_title: true
---

# Interface: DayPickerProps

The props of the [DayPicker](../functions/daypicker.md) component.

## Hierarchy

* **DayPickerProps**

## Properties

### className

• `Optional` **className**: *undefined* \| *string*

CSS class to add to the root UI element.

___

### classNames

• `Optional` **classNames**: *undefined* \| [*DayPickerClassNames*](../types/daypickerclassnames.md)

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

• `Optional` **components**: *undefined* \| [*CustomComponents*](../types/customcomponents.md)

Customize the internal components.

___

### dir

• `Optional` **dir**: *undefined* \| *string*

The text direction of the calendar. Use `ltr` for left-to-right (default)
or `rtl` for right-to-left.

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

### formatCaption

• `Optional` **formatCaption**: *undefined* \| [*CaptionFormatter*](../types/captionformatter.md)

Format the month caption text.

___

### formatDay

• `Optional` **formatDay**: *undefined* \| [*DayFormatter*](../types/dayformatter.md)

Format the content of the day element.

___

### formatWeekNumber

• `Optional` **formatWeekNumber**: *undefined* \| [*WeekNumberFormatter*](../types/weeknumberformatter.md)

Format the week numbers (when [showWeekNumber](daypickerprops.md#showweeknumber) is set).

___

### formatWeekdayName

• `Optional` **formatWeekdayName**: *undefined* \| [*WeekdayNameFormatter*](../types/weekdaynameformatter.md)

Format the weekday's name in the head element.

___

### fromMonth

• `Optional` **fromMonth**: *undefined* \| Date

Restrict the month navigation from the specified month. See also [toMonth](daypickerprops.md#tomonth).

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

___

### initialMonth

• `Optional` **initialMonth**: *undefined* \| Date

The initial month to show in the calendar. Default is the current month.

Notes

- to know when the user changes the month, use [onMonthChange](daypickerprops.md#onmonthchange).
- to change the month programmatically, use the [month](daypickerprops.md#month) prop.

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

___

### nextLabel

• `Optional` **nextLabel**: *undefined* \| *string*

Label used for the next month button in [[Navigation]]. Set it to empty
string to hide the button.

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

### onDayClick

• `Optional` **onDayClick**: *undefined* \| [*DayClickEventHandler*](../types/dayclickeventhandler.md)

Event handler when the user clicks on a day.

___

### onDayKeyDown

• `Optional` **onDayKeyDown**: *undefined* \| [*DayKeyDownEventHandler*](../types/daykeydowneventhandler.md)

Event handler when the user press a key on a day.

___

### onMonthChange

• `Optional` **onMonthChange**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Event handler when the month changes.

___

### onNextClick

• `Optional` **onNextClick**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Event handler when the next month button is clicked.

___

### onPrevClick

• `Optional` **onPrevClick**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Event handler when the previous month button is clicked.

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

### prevLabel

• `Optional` **prevLabel**: *undefined* \| *string*

Label used for the previous month button in [[Navigation]]. Set it to
empty string to hide the button.

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

___

### showCaption

• `Optional` **showCaption**: *undefined* \| *boolean*

Show the month’s caption. As default, the caption displays month and year.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker showCaption={false} />
};
```

___

### showHead

• `Optional` **showHead**: *undefined* \| *boolean*

Show the month’s head. As default, it displays the weekday names according
to [locale](daypickerprops.md#locale).

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker showHead={false} />
};
```

___

### showNavigation

• `Optional` **showNavigation**: *undefined* \| *boolean*

Show the month navigation bar. Default is `true`.

When using [month](daypickerprops.md#month), make sure you set [onMonthChange](daypickerprops.md#onmonthchange) to make the
navigation appear.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker showNavigation={false} />
};
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

### toMonth

• `Optional` **toMonth**: *undefined* \| Date

Restrict the month navigation to the specified month. See also [fromMonth](daypickerprops.md#frommonth).

___

### today

• `Optional` **today**: *undefined* \| Date \| *off*

The today’s date. Default is the current date. Adds the `today` modifier to
the day cell.

Set it to `off` to disable the today date.

**Example**

```jsx showOutput open=no
function Example() {
  return <DayPicker today={new Date(2022, 2, 18)} />;
}
```
