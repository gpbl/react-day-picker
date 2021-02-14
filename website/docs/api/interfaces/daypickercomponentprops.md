---
id: "daypickercomponentprops"
title: "Interface: DayPickerComponentProps"
sidebar_label: "DayPickerComponentProps"
custom_edit_url: null
hide_title: true
---

# Interface: DayPickerComponentProps

The props for the [DayPicker](../functions/daypicker.md) component.

## Hierarchy

* **DayPickerComponentProps**

## Properties

### className

• `Optional` **className**: *undefined* \| *string*

CSS class to add to the root UI element.

Defined in: [types/DayPickerComponentProps.ts:34](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L34)

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

Defined in: [types/DayPickerComponentProps.ts:71](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L71)

___

### components

• `Optional` **components**: *undefined* \| [*CustomizableComponents*](../types/customizablecomponents.md)

Customize the internal components.

Defined in: [types/DayPickerComponentProps.ts:419](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L419)

___

### dir

• `Optional` **dir**: *undefined* \| *string*

The text direction of the calendar. Use `ltr` for left-to-right (default)
or `rtl` for right-to-left.

Defined in: [types/DayPickerComponentProps.ts:397](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L397)

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

Defined in: [types/DayPickerComponentProps.ts:324](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L324)

___

### enableOutsideDaysClick

• `Optional` **enableOutsideDaysClick**: *undefined* \| *boolean*

Enable the dayclick event for outside days when [showOutsideDays](daypickercomponentprops.md#showoutsidedays) is set.
Default to `false`.

Defined in: [types/DayPickerComponentProps.ts:256](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L256)

___

### fixedWeeks

• `Optional` **fixedWeeks**: *undefined* \| *boolean*

Display six weeks per months, regardless the month’s number of weeks.

To use this prop, [showOutsideDays](daypickercomponentprops.md#showoutsidedays) must be set. Default to `false`.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker showOutsideDays fixedWeeks />
};
```

Defined in: [types/DayPickerComponentProps.ts:208](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L208)

___

### formatCaption

• `Optional` **formatCaption**: *undefined* \| [*DateFormatter*](../types/dateformatter.md)

Format the month caption text.

Defined in: [types/DayPickerComponentProps.ts:402](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L402)

___

### formatDay

• `Optional` **formatDay**: *undefined* \| [*DateFormatter*](../types/dateformatter.md)

Format the content of the day element.

Defined in: [types/DayPickerComponentProps.ts:406](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L406)

___

### formatWeekNumber

• `Optional` **formatWeekNumber**: *undefined* \| [*WeekNumberFormatter*](../types/weeknumberformatter.md)

Format the week numbers (when [showWeekNumber](daypickercomponentprops.md#showweeknumber) is set).

Defined in: [types/DayPickerComponentProps.ts:414](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L414)

___

### formatWeekdayName

• `Optional` **formatWeekdayName**: *undefined* \| [*WeekdayFormatter*](../types/weekdayformatter.md)

Format the weekday's name in the head element.

Defined in: [types/DayPickerComponentProps.ts:410](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L410)

___

### fromMonth

• `Optional` **fromMonth**: *undefined* \| Date

Restrict the month navigation from the specified month. See also [toMonth](daypickercomponentprops.md#tomonth).

Defined in: [types/DayPickerComponentProps.ts:138](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L138)

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

Defined in: [types/DayPickerComponentProps.ts:345](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L345)

___

### initialMonth

• `Optional` **initialMonth**: *undefined* \| Date

The initial month to show in the calendar. Default is the current month.

Notes

- to know when the user changes the month, use [onMonthChange](daypickercomponentprops.md#onmonthchange).
- to change the month programmatically, use the [month](daypickercomponentprops.md#month) prop.

Defined in: [types/DayPickerComponentProps.ts:120](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L120)

___

### labelsFormatters

• `Optional` **labelsFormatters**: *undefined* \| [*LabelsFormatters*](../types/labelsformatters.md)

A map of formatters for the ARIA labels used in the UI.

Defined in: [types/DayPickerComponentProps.ts:29](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L29)

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

Defined in: [types/DayPickerComponentProps.ts:392](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L392)

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

Defined in: [types/DayPickerComponentProps.ts:373](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L373)

___

### modifiersClassNames

• `Optional` **modifiersClassNames**: *undefined* \| [*ModifiersClassNames*](../types/modifiersclassnames.md)

Change the class name for the day UI element matching the [modifiers](daypickercomponentprops.md#modifiers).

**Example**

Add the `.with-circle` class of the days matching the `isToday` modifier.

```jsx
<DayPicker
 modifiers={{ isToday: new Date() }}
 modifiersClassNames={{ isToday: 'with-circle' }}
/>
```

Defined in: [types/DayPickerComponentProps.ts:86](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L86)

___

### modifiersStyles

• `Optional` **modifiersStyles**: *undefined* \| [*ModifiersStyles*](../types/modifiersstyles.md)

Change the inline style for the day UI element matching the [modifiers](daypickercomponentprops.md#modifiers).

**Example**

Change the background color of the days matching the `isToday` modifier.

```jsx
<DayPicker
 modifiers={{ isToday: new Date() }}
 modifiersStyles={{ isToday: { backgroundColor: 'purple' } }}
/>
```

Defined in: [types/DayPickerComponentProps.ts:110](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L110)

___

### month

• `Optional` **month**: *undefined* \| Date

The month to display in the calendar.

As opposed to [initialMonth](daypickercomponentprops.md#initialmonth), use this prop with [onMonthChange](daypickercomponentprops.md#onmonthchange) to
change the month programmatically. Implementing [onMonthChange](daypickercomponentprops.md#onmonthchange) will also
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

Defined in: [types/DayPickerComponentProps.ts:194](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L194)

___

### numberOfMonths

• `Optional` **numberOfMonths**: *undefined* \| *number*

Change the number of months rendered by the component. Defaults to `1`.

See also [pagedNavigation](daypickercomponentprops.md#pagednavigation).

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker numberOfMonths={2} />
};
```

Defined in: [types/DayPickerComponentProps.ts:134](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L134)

___

### onDayBlur

• `Optional` **onDayBlur**: *undefined* \| [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

Defined in: [types/DayPickerComponentProps.ts:424](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L424)

___

### onDayClick

• `Optional` **onDayClick**: *undefined* \| [*DayClickEventHandler*](../types/dayclickeventhandler.md)

Defined in: [types/DayPickerComponentProps.ts:422](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L422)

___

### onDayFocus

• `Optional` **onDayFocus**: *undefined* \| [*DayFocusEventHandler*](../types/dayfocuseventhandler.md)

Defined in: [types/DayPickerComponentProps.ts:423](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L423)

___

### onDayKeyDown

• `Optional` **onDayKeyDown**: *undefined* \| [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

Defined in: [types/DayPickerComponentProps.ts:427](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L427)

___

### onDayKeyPress

• `Optional` **onDayKeyPress**: *undefined* \| [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

Defined in: [types/DayPickerComponentProps.ts:429](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L429)

___

### onDayKeyUp

• `Optional` **onDayKeyUp**: *undefined* \| [*DayKeyboardEventHandler*](../types/daykeyboardeventhandler.md)

Defined in: [types/DayPickerComponentProps.ts:428](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L428)

___

### onDayMouseEnter

• `Optional` **onDayMouseEnter**: *undefined* \| [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

Defined in: [types/DayPickerComponentProps.ts:425](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L425)

___

### onDayMouseLeave

• `Optional` **onDayMouseLeave**: *undefined* \| [*DayMouseEventHandler*](../types/daymouseeventhandler.md)

Defined in: [types/DayPickerComponentProps.ts:426](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L426)

___

### onDayTouchCancel

• `Optional` **onDayTouchCancel**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

Defined in: [types/DayPickerComponentProps.ts:430](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L430)

___

### onDayTouchEnd

• `Optional` **onDayTouchEnd**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

Defined in: [types/DayPickerComponentProps.ts:431](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L431)

___

### onDayTouchMove

• `Optional` **onDayTouchMove**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

Defined in: [types/DayPickerComponentProps.ts:432](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L432)

___

### onDayTouchStart

• `Optional` **onDayTouchStart**: *undefined* \| [*DayTouchEventHandler*](../types/daytoucheventhandler.md)

Defined in: [types/DayPickerComponentProps.ts:433](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L433)

___

### onMonthChange

• `Optional` **onMonthChange**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Defined in: [types/DayPickerComponentProps.ts:434](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L434)

___

### onNextClick

• `Optional` **onNextClick**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Defined in: [types/DayPickerComponentProps.ts:435](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L435)

___

### onPrevClick

• `Optional` **onPrevClick**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Defined in: [types/DayPickerComponentProps.ts:436](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L436)

___

### pagedNavigation

• `Optional` **pagedNavigation**: *undefined* \| *boolean*

When displaying more than one months, the navigation will be paginated
displaying the number of months at time (instead of one).

Requires [numberOfMonths](daypickercomponentprops.md#numberofmonths) to be set. Default to `false`.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker numberOfMonths={2} pagedNavigation />
};
```

Defined in: [types/DayPickerComponentProps.ts:157](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L157)

___

### reverseMonths

• `Optional` **reverseMonths**: *undefined* \| *boolean*

Render the months in reversed order when [numberOfMonths](daypickercomponentprops.md#numberofmonths) is greater than
`1` – to display the most recent month first.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker numberOfMonths={5} reverseMonths />
};
```

Defined in: [types/DayPickerComponentProps.ts:170](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L170)

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

Defined in: [types/DayPickerComponentProps.ts:304](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L304)

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

Defined in: [types/DayPickerComponentProps.ts:220](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L220)

___

### showHead

• `Optional` **showHead**: *undefined* \| *boolean*

Show the month’s head. As default, it displays the weekday names according
to [locale](daypickercomponentprops.md#locale).

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker showHead={false} />
};
```

Defined in: [types/DayPickerComponentProps.ts:233](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L233)

___

### showNavigation

• `Optional` **showNavigation**: *undefined* \| *boolean*

Show the month navigation bar. Default is `true`.

When using [month](daypickercomponentprops.md#month), make sure you set [onMonthChange](daypickercomponentprops.md#onmonthchange) to make the
navigation appear.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker showNavigation={false} />
};
```

Defined in: [types/DayPickerComponentProps.ts:284](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L284)

___

### showOutsideDays

• `Optional` **showOutsideDays**: *undefined* \| *boolean*

Show the outside days.

An outside day is a day falling in the next or the previous month. Default
is `false`.

Outside days are not interactive as default. Use [enableOutsideDaysClick](daypickercomponentprops.md#enableoutsidedaysclick)
to make them clickable.

**Example**

```jsx showOutput open=no
function Example() {
 return <DayPicker showOutsideDays />
};
```

Defined in: [types/DayPickerComponentProps.ts:251](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L251)

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

Defined in: [types/DayPickerComponentProps.ts:268](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L268)

___

### style

• `Optional` **style**: *undefined* \| *CSSProperties*

Style to apply to the root UI element.

Defined in: [types/DayPickerComponentProps.ts:91](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L91)

___

### styles

• `Optional` **styles**: *undefined* \| [*DayPickerStyles*](../types/daypickerstyles.md)

Change the inline styles for each UI element.

Defined in: [types/DayPickerComponentProps.ts:95](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L95)

___

### toMonth

• `Optional` **toMonth**: *undefined* \| Date

Restrict the month navigation to the specified month. See also [fromMonth](daypickercomponentprops.md#frommonth).

Defined in: [types/DayPickerComponentProps.ts:142](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L142)

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

Defined in: [types/DayPickerComponentProps.ts:360](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/DayPickerComponentProps.ts#L360)
