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

CSS class to add to the root element

Defined in: [components/DayPicker/types/DayPickerProps.ts:23](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L23)

___

### classNames

• `Optional` **classNames**: *undefined* \| [*DayPickerClassNames*](../types/daypickerclassnames.md)

Change the class names used by `DayPicker`.

Use this prop when you need to change the default class
names — for example when using CSS modules.

**Example**. Use of custom class names for the head and the caption
elements:

```jsx showOutput
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

Defined in: [components/DayPicker/types/DayPickerProps.ts:59](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L59)

___

### components

• `Optional` **components**: *undefined* \| [*CustomComponents*](../types/customcomponents.md)

Customize the internal components.

Defined in: [components/DayPicker/types/DayPickerProps.ts:225](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L225)

___

### dir

• `Optional` **dir**: *undefined* \| *string*

The text direction of the calendar. Use `ltr` for left-to-right (default)
or `rtl` for right-to-left.

Defined in: [components/DayPicker/types/DayPickerProps.ts:195](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L195)

___

### disabled

• `Optional` **disabled**: *undefined* \| Date \| { `from`: Date ; `to`: Date  } \| { `before`: Date  } \| { `after`: Date  } \| { `daysOfWeek`: *number*[]  } \| (`date`: Date) => *boolean* \| [*Matcher*](../types/matcher.md)[]

Add the `disabled` modifier for the matching days. Interaction with
disabled days is disabled.

Defined in: [components/DayPicker/types/DayPickerProps.ts:172](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L172)

___

### enableOutsideDaysClick

• `Optional` **enableOutsideDaysClick**: *undefined* \| *boolean*

Enable click event for outside days when [showOutsideDays](daypickerprops.md#showoutsidedays) is used.

Defined in: [components/DayPicker/types/DayPickerProps.ts:143](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L143)

___

### fixedWeeks

• `Optional` **fixedWeeks**: *undefined* \| *boolean*

Display six weeks per months, regardless the month’s number of weeks. Outside
days will be always shown when setting this prop.

**`default`** false

**`see`** [showOutsideDays](#showoutsidedays)

Defined in: [components/DayPicker/types/DayPickerProps.ts:123](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L123)

___

### formatCaption

• **formatCaption**: [*MonthCaptionFormatter*](../types/monthcaptionformatter.md)

Format the month caption text.

**`default`** See [[defaultFormatCaption]].

Defined in: [components/DayPicker/types/DayPickerProps.ts:202](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L202)

___

### formatDay

• **formatDay**: [*DayFormatter*](../types/dayformatter.md)

Format the content of the day element.

**`default`** See [[defaultFormatDay]].

Defined in: [components/DayPicker/types/DayPickerProps.ts:208](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L208)

___

### formatWeekNumber

• **formatWeekNumber**: [*WeekNumberFormatter*](../types/weeknumberformatter.md)

Format the week numbers (when [showWeekNumber](daypickerprops.md#showweeknumber) is set).

**`default`** See [[defaultFormatWeekNumber]].

Defined in: [components/DayPicker/types/DayPickerProps.ts:220](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L220)

___

### formatWeekdayName

• **formatWeekdayName**: [*WeekdayNameFormatter*](../types/weekdaynameformatter.md)

Format the weekday's name in the head element.

**`default`** See [[defaultFormatWeekdayName]].

Defined in: [components/DayPicker/types/DayPickerProps.ts:214](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L214)

___

### fromMonth

• `Optional` **fromMonth**: *undefined* \| Date

Allow navigation after (and including) the specified month.

**`see`** toMonth

Defined in: [components/DayPicker/types/DayPickerProps.ts:93](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L93)

___

### hidden

• `Optional` **hidden**: *undefined* \| Date \| { `from`: Date ; `to`: Date  } \| { `before`: Date  } \| { `after`: Date  } \| { `daysOfWeek`: *number*[]  } \| (`date`: Date) => *boolean* \| [*Matcher*](../types/matcher.md)[]

Add the `hidden` modifier for the matching days. Days with the `hidden`
modifier won’t display in the calendar.

Defined in: [components/DayPicker/types/DayPickerProps.ts:177](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L177)

___

### initialMonth

• `Optional` **initialMonth**: *undefined* \| Date

The initial month to show in the calendar.

Defined in: [components/DayPicker/types/DayPickerProps.ts:81](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L81)

___

### locale

• **locale**: Locale

The date-fns locale object to localize the user interface. Defaults to English.

Defined in: [components/DayPicker/types/DayPickerProps.ts:190](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L190)

___

### modifiers

• `Optional` **modifiers**: *undefined* \| [*ModifiersMatchers*](../types/modifiersmatchers.md)

Add a custom modifier to the matching days.

Defined in: [components/DayPicker/types/DayPickerProps.ts:185](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L185)

___

### modifiersClassNames

• `Optional` **modifiersClassNames**: *undefined* \| [*ModifiersClassNames*](../types/modifiersclassnames.md)

Change the class names used for the [modifiers](#day).

Defined in: [components/DayPicker/types/DayPickerProps.ts:63](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L63)

___

### modifiersStyles

• `Optional` **modifiersStyles**: *undefined* \| [*ModifiersStyles*](../types/modifiersstyles.md)

Change the inline style for each modifier.

Defined in: [components/DayPicker/types/DayPickerProps.ts:76](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L76)

___

### month

• `Optional` **month**: *undefined* \| Date

The rendered month. Implement [onMonthChange](daypickerprops.md#onmonthchange) to enable months
navigation.

Defined in: [components/DayPicker/types/DayPickerProps.ts:115](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L115)

___

### nextLabel

• `Optional` **nextLabel**: *undefined* \| *string*

Label used for the next month button in [[Navigation]]. Set it to empty
string to hide the button.

Defined in: [components/DayPicker/types/DayPickerProps.ts:162](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L162)

___

### numberOfMonths

• `Optional` **numberOfMonths**: *undefined* \| *number*

The number of months to render.

**`see`** pagedNavigation

Defined in: [components/DayPicker/types/DayPickerProps.ts:87](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L87)

___

### onDayClick

• `Optional` **onDayClick**: *undefined* \| [*DayClickEventHandler*](../types/dayclickeventhandler.md)

Event handler when the user clicks on a day.

Defined in: [components/DayPicker/types/DayPickerProps.ts:230](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L230)

___

### onMonthChange

• `Optional` **onMonthChange**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Event handler when the month changes.

Defined in: [components/DayPicker/types/DayPickerProps.ts:234](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L234)

___

### onNextClick

• `Optional` **onNextClick**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Event handler when the next month button is clicked.

Defined in: [components/DayPicker/types/DayPickerProps.ts:238](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L238)

___

### onPrevClick

• `Optional` **onPrevClick**: *undefined* \| [*MonthChangeEventHandler*](../types/monthchangeeventhandler.md)

Event handler when the previous month button is clicked.

Defined in: [components/DayPicker/types/DayPickerProps.ts:242](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L242)

___

### pagedNavigation

• `Optional` **pagedNavigation**: *undefined* \| *boolean*

When displaying multiple months, the navigation will be paginated
displaying the [numberOfMonths](#numberofmonths) months at time instead of
one.

Defined in: [components/DayPicker/types/DayPickerProps.ts:105](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L105)

___

### prevLabel

• `Optional` **prevLabel**: *undefined* \| *string*

Label used for the previous month button in [[Navigation]]. Set it to
empty string to hide the button.

Defined in: [components/DayPicker/types/DayPickerProps.ts:157](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L157)

___

### reverseMonths

• `Optional` **reverseMonths**: *undefined* \| *boolean*

Render the months in reversed order. Useful when [numberOfMonths](daypickerprops.md#numberofmonths) is
greater than `1`, to display the most recent month first.

Defined in: [components/DayPicker/types/DayPickerProps.ts:110](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L110)

___

### selected

• `Optional` **selected**: *undefined* \| Date \| { `from`: Date ; `to`: Date  } \| { `before`: Date  } \| { `after`: Date  } \| { `daysOfWeek`: *number*[]  } \| (`date`: Date) => *boolean* \| [*Matcher*](../types/matcher.md)[]

Apply the `selected` modifier to the matching days.

Defined in: [components/DayPicker/types/DayPickerProps.ts:167](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L167)

___

### showCaption

• `Optional` **showCaption**: *undefined* \| *boolean*

Show the month’s caption. As default, the caption displays month and year.

Defined in: [components/DayPicker/types/DayPickerProps.ts:127](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L127)

___

### showHead

• `Optional` **showHead**: *undefined* \| *boolean*

Show the month’s head. As default, it displays the weekday names according
to [locale](daypickerprops.md#locale).

Defined in: [components/DayPicker/types/DayPickerProps.ts:132](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L132)

___

### showNavigation

• `Optional` **showNavigation**: *undefined* \| *boolean*

Show the navigation bar. [onMonthChange](daypickerprops.md#onmonthchange) must be set.

Defined in: [components/DayPicker/types/DayPickerProps.ts:152](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L152)

___

### showOutsideDays

• `Optional` **showOutsideDays**: *undefined* \| *boolean*

Show the outside days. An outside day is a day falling in the next or the
previous month.

**`see`** enableOutsideDaysClick

Defined in: [components/DayPicker/types/DayPickerProps.ts:139](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L139)

___

### showWeekNumber

• `Optional` **showWeekNumber**: *undefined* \| *boolean*

Show the week numbers column.

Defined in: [components/DayPicker/types/DayPickerProps.ts:147](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L147)

___

### style

• `Optional` **style**: *undefined* \| *CSSProperties*

Style to apply to the root element.

Defined in: [components/DayPicker/types/DayPickerProps.ts:68](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L68)

___

### styles

• `Optional` **styles**: *undefined* \| [*DayPickerStyles*](../types/daypickerstyles.md)

Change the inline styles for each [DayPicker element](./enumerations#daypickerelements).

Defined in: [components/DayPicker/types/DayPickerProps.ts:72](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L72)

___

### toMonth

• `Optional` **toMonth**: *undefined* \| Date

Allow navigation before (and including) the specified month.

**`see`** fromMonth

Defined in: [components/DayPicker/types/DayPickerProps.ts:99](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L99)

___

### today

• `Optional` **today**: *undefined* \| Date \| *off*

The today’s date. Default is the current date.

Defined in: [components/DayPicker/types/DayPickerProps.ts:181](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L181)
