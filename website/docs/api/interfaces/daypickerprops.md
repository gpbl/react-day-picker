---
id: "daypickerprops"
title: "DayPickerProps"
sidebar_label: "DayPickerProps"
---

[react-day-picker](../index.md) › [DayPickerProps](daypickerprops.md)

# Interface: DayPickerProps

## Hierarchy

* **DayPickerProps**

## Index

### Other Properties

* [dir](daypickerprops.md#optional-dir)
* [disabled](daypickerprops.md#optional-disabled)
* [enableOutsideDaysClick](daypickerprops.md#optional-enableoutsidedaysclick)
* [fixedWeeks](daypickerprops.md#optional-fixedweeks)
* [formatCaption](daypickerprops.md#optional-formatcaption)
* [formatDay](daypickerprops.md#optional-formatday)
* [formatWeekNumber](daypickerprops.md#optional-formatweeknumber)
* [formatWeekdayName](daypickerprops.md#optional-formatweekdayname)
* [fromMonth](daypickerprops.md#optional-frommonth)
* [hidden](daypickerprops.md#optional-hidden)
* [initialMonth](daypickerprops.md#optional-initialmonth)
* [locale](daypickerprops.md#optional-locale)
* [modifiers](daypickerprops.md#optional-modifiers)
* [modifiersStyles](daypickerprops.md#optional-modifiersstyles)
* [month](daypickerprops.md#optional-month)
* [nextLabel](daypickerprops.md#optional-nextlabel)
* [numberOfMonths](daypickerprops.md#optional-numberofmonths)
* [onDayClick](daypickerprops.md#optional-ondayclick)
* [onMonthChange](daypickerprops.md#optional-onmonthchange)
* [onNextClick](daypickerprops.md#optional-onnextclick)
* [onPrevClick](daypickerprops.md#optional-onprevclick)
* [pagedNavigation](daypickerprops.md#optional-pagednavigation)
* [prevLabel](daypickerprops.md#optional-prevlabel)
* [reverseMonths](daypickerprops.md#optional-reversemonths)
* [selected](daypickerprops.md#optional-selected)
* [showCaption](daypickerprops.md#optional-showcaption)
* [showHead](daypickerprops.md#optional-showhead)
* [showNavigation](daypickerprops.md#optional-shownavigation)
* [showOutsideDays](daypickerprops.md#optional-showoutsidedays)
* [showWeekNumber](daypickerprops.md#optional-showweeknumber)
* [style](daypickerprops.md#optional-style)
* [styles](daypickerprops.md#optional-styles)
* [swizzle](daypickerprops.md#optional-swizzle)
* [toMonth](daypickerprops.md#optional-tomonth)

### Styling Properties

* [className](daypickerprops.md#optional-classname)
* [classNames](daypickerprops.md#optional-classnames)
* [modifiersClassNames](daypickerprops.md#optional-modifiersclassnames)

## Other Properties

### `Optional` dir

• **dir**? : *string | undefined*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:217](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L217)*

The text direction of the calendar. Use `ltr` for left-to-right (default)
or `rtl` for right-to-left.

___

### `Optional` disabled

• **disabled**? : *[DayMatcher](../index.md#daymatcher)*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:198](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L198)*

Disable the matching days. Disabled days cannot be clicked.

___

### `Optional` enableOutsideDaysClick

• **enableOutsideDaysClick**? : *undefined | false | true*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:170](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L170)*

Enable click event for outside days when [showOutsideDays](daypickerprops.md#optional-showoutsidedays) is used.

___

### `Optional` fixedWeeks

• **fixedWeeks**? : *undefined | false | true*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:147](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L147)*

Display six weeks per months, regardless the month’s number of weeks. Outside
days will be always shown when setting this prop.

See also [showOutsideDays](daypickerprops.md#optional-showoutsidedays).

___

### `Optional` formatCaption

• **formatCaption**? : *[MonthCaptionFormatter](../index.md#monthcaptionformatter)*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:224](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L224)*

Format the month caption text.

**`default`** See [defaultFormatCaption](../index.md#private-defaultformatcaption).

___

### `Optional` formatDay

• **formatDay**? : *[DayFormatter](../index.md#dayformatter)*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:230](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L230)*

Format the content of the day element.

**`default`** See [defaultFormatDay](../index.md#private-defaultformatday).

___

### `Optional` formatWeekNumber

• **formatWeekNumber**? : *[WeekNumberFormatter](../index.md#weeknumberformatter)*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:242](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L242)*

Format the week numbers (when [showWeekNumber](daypickerprops.md#optional-showweeknumber) is set).

**`default`** See [defaultFormatWeekNumber](../index.md#private-defaultformatweeknumber).

___

### `Optional` formatWeekdayName

• **formatWeekdayName**? : *[WeekdayNameFormatter](../index.md#private-weekdaynameformatter)*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:236](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L236)*

Format the weekday's name in the head element.

**`default`** See [defaultFormatWeekdayName](../index.md#private-defaultformatweekdayname).

___

### `Optional` fromMonth

• **fromMonth**? : *Date*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:119](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L119)*

Allow navigation after (and including) the specified month.

See also [toMonth](daypickerprops.md#optional-tomonth).

___

### `Optional` hidden

• **hidden**? : *[DayMatcher](../index.md#daymatcher)*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:202](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L202)*

Hide the matching days.

___

### `Optional` initialMonth

• **initialMonth**? : *Date*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:107](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L107)*

The initial month to show in the calendar.

___

### `Optional` locale

• **locale**? : *dateFns.Locale*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:212](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L212)*

A [`dateFns.Locale`](https://date-fns.org/docs/Locale) object to localize
the user interface.

___

### `Optional` modifiers

• **modifiers**? : *[DayModifiers](../index.md#daymodifiers)*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:206](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L206)*

An object of modifiers.

___

### `Optional` modifiersStyles

• **modifiersStyles**? : *[ModifiersStyles](../index.md#modifiersstyles)*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:102](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L102)*

Change the inline style for the day [modifiers](daypickerprops.md#optional-modifiers).

___

### `Optional` month

• **month**? : *Date*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:140](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L140)*

The rendered month. Implement [onMonthChange](daypickerprops.md#optional-onmonthchange) to enable months
navigation.

___

### `Optional` nextLabel

• **nextLabel**? : *undefined | string*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:189](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L189)*

Label used for the next month button in [Navigation](../index.md#navigation). Set it to empty
string to hide the button.

___

### `Optional` numberOfMonths

• **numberOfMonths**? : *undefined | number*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:113](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L113)*

The number of months to render.

See also [pagedNavigation](daypickerprops.md#optional-pagednavigation).

___

### `Optional` onDayClick

• **onDayClick**? : *[DayClickEventHandler](../index.md#dayclickeventhandler)*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:252](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L252)*

Event handler when the user clicks on a day.

___

### `Optional` onMonthChange

• **onMonthChange**? : *[MonthChangeEventHandler](../index.md#monthchangeeventhandler)*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:256](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L256)*

Event handler when the month changes.

___

### `Optional` onNextClick

• **onNextClick**? : *[MonthChangeEventHandler](../index.md#monthchangeeventhandler)*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:260](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L260)*

Event handler when the next month button is clicked.

___

### `Optional` onPrevClick

• **onPrevClick**? : *[MonthChangeEventHandler](../index.md#monthchangeeventhandler)*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:264](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L264)*

Event handler when the previous month button is clicked.

___

### `Optional` pagedNavigation

• **pagedNavigation**? : *undefined | false | true*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:130](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L130)*

When displaying multiple months, the navigation will be paginated
displaying the [numberOfMonths](daypickerprops.md#optional-numberofmonths) months at time instead of one.

___

### `Optional` prevLabel

• **prevLabel**? : *undefined | string*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:184](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L184)*

Label used for the previous month button in [Navigation](../index.md#navigation). Set it to
empty string to hide the button.

___

### `Optional` reverseMonths

• **reverseMonths**? : *undefined | false | true*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:135](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L135)*

Render the months in reversed order. Useful when [numberOfMonths](daypickerprops.md#optional-numberofmonths) is
greater than `1`, to display the most recent month first.

___

### `Optional` selected

• **selected**? : *[DayMatcher](../index.md#daymatcher)*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:194](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L194)*

Style the matching days as selected.

___

### `Optional` showCaption

• **showCaption**? : *undefined | false | true*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:154](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L154)*

Show the month’s caption. As default, the caption displays month and year.

- use [formatCaption](daypickerprops.md#optional-formatcaption) to localize the content of the caption
- [swizzle](../docs/swizzling) this component using the [swizzle](daypickerprops.md#optional-swizzle) prop

___

### `Optional` showHead

• **showHead**? : *undefined | false | true*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:159](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L159)*

Show the month’s head. As default, it displays the weekday names according
to [locale](daypickerprops.md#optional-locale).

___

### `Optional` showNavigation

• **showNavigation**? : *undefined | false | true*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:179](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L179)*

Show the navigation bar. [onMonthChange](daypickerprops.md#optional-onmonthchange) must be set.

___

### `Optional` showOutsideDays

• **showOutsideDays**? : *undefined | false | true*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:166](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L166)*

Show the outside days. An outside day is a day falling in the next or the
previous month.

See also [enableOutsideDaysClick](daypickerprops.md#optional-enableoutsidedaysclick).

___

### `Optional` showWeekNumber

• **showWeekNumber**? : *undefined | false | true*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:174](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L174)*

Show the week numbers column.

___

### `Optional` style

• **style**? : *React.CSSProperties*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:94](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L94)*

Style to apply to the root element.

___

### `Optional` styles

• **styles**? : *[DayPickerStyles](../index.md#daypickerstyles)*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:98](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L98)*

Inline styles to apply to the [DayPickerElements](../enums/daypickerelements.md).

___

### `Optional` swizzle

• **swizzle**? : *[SwizzlingComponents](../index.md#swizzlingcomponents)*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:247](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L247)*

The components to [swizzle](./docs/swizzling).

___

### `Optional` toMonth

• **toMonth**? : *Date*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:125](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L125)*

Allow navigation before (and including) the specified month.

See also [fromMonth](daypickerprops.md#optional-frommonth).

___

## Styling Properties

### `Optional` className

• **className**? : *undefined | string*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:69](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L69)*

CSS class to add to the root element.

___

### `Optional` classNames

• **classNames**? : *[DayPickerClassNames](../index.md#daypickerclassnames)*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:83](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L83)*

Change the class names used by `DayPicker`.

Use this prop when you cannot style the CSS using the
[defaultClassNames](../index.md#const-defaultclassnames), for example when using CSS modules.

```jsx
import { selected, disabled } from './styles.css';
<DayPicker classNames={{ selected, disabled }} />
````

___

### `Optional` modifiersClassNames

• **modifiersClassNames**? : *[ModifiersClassNames](../index.md#modifiersclassnames)*

*Defined in [package/src/components/DayPicker/types/DayPickerProps.ts:89](https://github.com/gpbl/react-day-picker/blob/af710c0a/package/src/components/DayPicker/types/DayPickerProps.ts#L89)*

Change the class names used for the day [modifiers](daypickerprops.md#optional-modifiers).
