---
id: "daypickerprops"
title: "DayPickerProps"
sidebar_label: "DayPickerProps"
---

# Interface: DayPickerProps

## Hierarchy

- **DayPickerProps**

## Index

### Properties

- [className](daypickerprops.md#optional-classname)
- [classNames](daypickerprops.md#optional-classnames)
- [dir](daypickerprops.md#optional-dir)
- [disabled](daypickerprops.md#optional-disabled)
- [enableOutsideDaysClick](daypickerprops.md#optional-enableoutsidedaysclick)
- [fixedWeeks](daypickerprops.md#optional-fixedweeks)
- [formatCaption](daypickerprops.md#optional-formatcaption)
- [formatDay](daypickerprops.md#optional-formatday)
- [formatWeekNumber](daypickerprops.md#optional-formatweeknumber)
- [formatWeekdayName](daypickerprops.md#optional-formatweekdayname)
- [fromMonth](daypickerprops.md#optional-frommonth)
- [hidden](daypickerprops.md#optional-hidden)
- [initialMonth](daypickerprops.md#optional-initialmonth)
- [locale](daypickerprops.md#optional-locale)
- [modifiers](daypickerprops.md#optional-modifiers)
- [modifiersClassNames](daypickerprops.md#optional-modifiersclassnames)
- [modifiersStyles](daypickerprops.md#optional-modifiersstyles)
- [month](daypickerprops.md#optional-month)
- [nextLabel](daypickerprops.md#optional-nextlabel)
- [numberOfMonths](daypickerprops.md#optional-numberofmonths)
- [onDayClick](daypickerprops.md#optional-ondayclick)
- [onMonthChange](daypickerprops.md#optional-onmonthchange)
- [onNextClick](daypickerprops.md#optional-onnextclick)
- [onPrevClick](daypickerprops.md#optional-onprevclick)
- [pagedNavigation](daypickerprops.md#optional-pagednavigation)
- [prevLabel](daypickerprops.md#optional-prevlabel)
- [reverseMonths](daypickerprops.md#optional-reversemonths)
- [selected](daypickerprops.md#optional-selected)
- [showCaption](daypickerprops.md#optional-showcaption)
- [showHead](daypickerprops.md#optional-showhead)
- [showNavigation](daypickerprops.md#optional-shownavigation)
- [showOutsideDays](daypickerprops.md#optional-showoutsidedays)
- [showWeekNumber](daypickerprops.md#optional-showweeknumber)
- [style](daypickerprops.md#optional-style)
- [styles](daypickerprops.md#optional-styles)
- [swizzle](daypickerprops.md#optional-swizzle)
- [toMonth](daypickerprops.md#optional-tomonth)

## Properties

### `Optional` className

• **className**? : _undefined | string_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:69](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L69)_

CSS class to add to the root element.

**`group`** Styling

---

### `Optional` classNames

• **classNames**? : _[DayPickerClassNames](../index.md#daypickerclassnames)_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:83](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L83)_

Change the class names used by `DayPicker`.

Use this prop when you cannot style the CSS using the
[defaultClassNames](../index.md#const-defaultclassnames), for example when using CSS modules.

```jsx
import { selected, disabled } from "./styles.css";
<DayPicker classNames={{ selected, disabled }} />;
```

**`group`** Styling

---

### `Optional` dir

• **dir**? : _string | undefined_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:217](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L217)_

The text direction of the calendar. Use `ltr` for left-to-right (default)
or `rtl` for right-to-left.

---

### `Optional` disabled

• **disabled**? : _[DayMatcher](../index.md#daymatcher)_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:198](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L198)_

Disable the matching days. Disabled days cannot be clicked.

---

### `Optional` enableOutsideDaysClick

• **enableOutsideDaysClick**? : _undefined | false | true_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:170](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L170)_

Enable click event for outside days when [showOutsideDays](daypickerprops.md#optional-showoutsidedays) is used.

---

### `Optional` fixedWeeks

• **fixedWeeks**? : _undefined | false | true_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:147](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L147)_

Display six weeks per months, regardless the month’s number of weeks. Outside
days will be always shown when setting this prop.

See also [showOutsideDays](daypickerprops.md#optional-showoutsidedays).

---

### `Optional` formatCaption

• **formatCaption**? : _[MonthCaptionFormatter](../index.md#monthcaptionformatter)_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:224](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L224)_

Format the month caption text.

**`default`** See [defaultFormatCaption](../index.md#private-defaultformatcaption).

---

### `Optional` formatDay

• **formatDay**? : _[DayFormatter](../index.md#dayformatter)_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:230](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L230)_

Format the content of the day element.

**`default`** See [defaultFormatDay](../index.md#private-defaultformatday).

---

### `Optional` formatWeekNumber

• **formatWeekNumber**? : _[WeekNumberFormatter](../index.md#weeknumberformatter)_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:242](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L242)_

Format the week numbers (when [showWeekNumber](daypickerprops.md#optional-showweeknumber) is set).

**`default`** See [defaultFormatWeekNumber](../index.md#private-defaultformatweeknumber).

---

### `Optional` formatWeekdayName

• **formatWeekdayName**? : _[WeekdayNameFormatter](../index.md#private-weekdaynameformatter)_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:236](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L236)_

Format the weekday's name in the head element.

**`default`** See [defaultFormatWeekdayName](../index.md#private-defaultformatweekdayname).

---

### `Optional` fromMonth

• **fromMonth**? : _Date_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:119](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L119)_

Allow navigation after (and including) the specified month.

See also [toMonth](daypickerprops.md#optional-tomonth).

---

### `Optional` hidden

• **hidden**? : _[DayMatcher](../index.md#daymatcher)_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:202](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L202)_

Hide the matching days.

---

### `Optional` initialMonth

• **initialMonth**? : _Date_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:107](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L107)_

The initial month to show in the calendar.

---

### `Optional` locale

• **locale**? : _dateFns.Locale_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:212](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L212)_

A [`dateFns.Locale`](https://date-fns.org/docs/Locale) object to localize
the user interface.

---

### `Optional` modifiers

• **matchings**? : _[DayModifiers](../index.md#daymodifiers)_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:206](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L206)_

An object of modifiers.

---

### `Optional` modifiersClassNames

• **modifiersClassNames**? : _[ModifiersClassNames](../index.md#modifiersclassnames)_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:89](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L89)_

Change the class names used for the day [modifiers](daypickerprops.md#optional-modifiers).

**`group`** Styling

---

### `Optional` modifiersStyles

• **modifiersStyles**? : _[ModifiersStyles](../index.md#modifiersstyles)_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:102](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L102)_

Change the inline style for the day [modifiers](daypickerprops.md#optional-modifiers).

---

### `Optional` month

• **month**? : _Date_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:140](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L140)_

The rendered month. Implement [onMonthChange](daypickerprops.md#optional-onmonthchange) to enable months
navigation.

---

### `Optional` nextLabel

• **nextLabel**? : _undefined | string_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:189](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L189)_

Label used for the next month button in [Navigation](../index.md#navigation). Set it to empty
string to hide the button.

---

### `Optional` numberOfMonths

• **numberOfMonths**? : _undefined | number_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:113](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L113)_

The number of months to render.

See also [pagedNavigation](daypickerprops.md#optional-pagednavigation).

---

### `Optional` onDayClick

• **onDayClick**? : _[DayClickEventHandler](../index.md#dayclickeventhandler)_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:252](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L252)_

Event handler when the user clicks on a day.

---

### `Optional` onMonthChange

• **onMonthChange**? : _[MonthChangeEventHandler](../index.md#monthchangeeventhandler)_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:256](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L256)_

Event handler when the month changes.

---

### `Optional` onNextClick

• **onNextClick**? : _[MonthChangeEventHandler](../index.md#monthchangeeventhandler)_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:260](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L260)_

Event handler when the next month button is clicked.

---

### `Optional` onPrevClick

• **onPrevClick**? : _[MonthChangeEventHandler](../index.md#monthchangeeventhandler)_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:264](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L264)_

Event handler when the previous month button is clicked.

---

### `Optional` pagedNavigation

• **pagedNavigation**? : _undefined | false | true_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:130](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L130)_

When displaying multiple months, the navigation will be paginated
displaying the [numberOfMonths](daypickerprops.md#optional-numberofmonths) months at time instead of one.

---

### `Optional` prevLabel

• **prevLabel**? : _undefined | string_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:184](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L184)_

Label used for the previous month button in [Navigation](../index.md#navigation). Set it to
empty string to hide the button.

---

### `Optional` reverseMonths

• **reverseMonths**? : _undefined | false | true_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:135](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L135)_

Render the months in reversed order. Useful when [numberOfMonths](daypickerprops.md#optional-numberofmonths) is
greater than `1`, to display the most recent month first.

---

### `Optional` selected

• **selected**? : _[DayMatcher](../index.md#daymatcher)_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:194](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L194)_

Style the matching days as selected.

---

### `Optional` showCaption

• **showCaption**? : _undefined | false | true_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:154](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L154)_

Show the month’s caption. As default, the caption displays month and year.

- use [formatCaption](daypickerprops.md#optional-formatcaption) to localize the content of the caption
- [swizzle](../docs/swizzling) this component using the [swizzle](daypickerprops.md#optional-swizzle) prop

---

### `Optional` showHead

• **showHead**? : _undefined | false | true_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:159](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L159)_

Show the month’s head. As default, it displays the weekday names according
to [locale](daypickerprops.md#optional-locale).

---

### `Optional` showNavigation

• **showNavigation**? : _undefined | false | true_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:179](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L179)_

Show the navigation bar. [onMonthChange](daypickerprops.md#optional-onmonthchange) must be set.

---

### `Optional` showOutsideDays

• **showOutsideDays**? : _undefined | false | true_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:166](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L166)_

Show the outside days. An outside day is a day falling in the next or the
previous month.

See also [enableOutsideDaysClick](daypickerprops.md#optional-enableoutsidedaysclick).

---

### `Optional` showWeekNumber

• **showWeekNumber**? : _undefined | false | true_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:174](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L174)_

Show the week numbers column.

---

### `Optional` style

• **style**? : _React.CSSProperties_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:94](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L94)_

Style to apply to the root element.

---

### `Optional` styles

• **styles**? : _[DayPickerStyles](../index.md#daypickerstyles)_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:98](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L98)_

Inline styles to apply to the [DayPickerElements](../enums/daypickerelements.md).

---

### `Optional` swizzle

• **swizzle**? : _[SwizzlingComponents](../index.md#swizzlingcomponents)_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:247](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L247)_

The components to [swizzle](./docs/swizzling).

---

### `Optional` toMonth

• **toMonth**? : _Date_

_Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:125](https://github.com/gpbl/react-day-picker/blob/fdbc0b39/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L125)_

Allow navigation before (and including) the specified month.

See also [fromMonth](daypickerprops.md#optional-frommonth).
