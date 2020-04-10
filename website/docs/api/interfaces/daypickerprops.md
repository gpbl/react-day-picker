---
id: "daypickerprops"
title: "DayPickerProps"
sidebar_label: "DayPickerProps"
---

The props used by the [DayPicker](../index.md#daypicker) component.

## Index

**Properties **: [className](daypickerprops.md#optional-classname), [classNames](daypickerprops.md#optional-classnames), [dir](daypickerprops.md#optional-dir), [disabled](daypickerprops.md#optional-disabled), [enableOutsideDaysClick](daypickerprops.md#optional-enableoutsidedaysclick), [fixedWeeks](daypickerprops.md#optional-fixedweeks), [formatCaption](daypickerprops.md#optional-formatcaption), [formatDay](daypickerprops.md#optional-formatday), [formatWeekNumber](daypickerprops.md#optional-formatweeknumber), [formatWeekdayName](daypickerprops.md#optional-formatweekdayname), [fromMonth](daypickerprops.md#optional-frommonth), [hidden](daypickerprops.md#optional-hidden), [initialMonth](daypickerprops.md#optional-initialmonth), [locale](daypickerprops.md#optional-locale), [modifiers](daypickerprops.md#optional-modifiers), [modifiersClassNames](daypickerprops.md#optional-modifiersclassnames), [modifiersStyles](daypickerprops.md#optional-modifiersstyles), [month](daypickerprops.md#optional-month), [nextLabel](daypickerprops.md#optional-nextlabel), [numberOfMonths](daypickerprops.md#optional-numberofmonths), [onDayClick](daypickerprops.md#optional-ondayclick), [onMonthChange](daypickerprops.md#optional-onmonthchange), [onNextClick](daypickerprops.md#optional-onnextclick), [onPrevClick](daypickerprops.md#optional-onprevclick), [pagedNavigation](daypickerprops.md#optional-pagednavigation), [prevLabel](daypickerprops.md#optional-prevlabel), [reverseMonths](daypickerprops.md#optional-reversemonths), [selected](daypickerprops.md#optional-selected), [showCaption](daypickerprops.md#optional-showcaption), [showHead](daypickerprops.md#optional-showhead), [showNavigation](daypickerprops.md#optional-shownavigation), [showOutsideDays](daypickerprops.md#optional-showoutsidedays), [showWeekNumber](daypickerprops.md#optional-showweeknumber), [style](daypickerprops.md#optional-style), [styles](daypickerprops.md#optional-styles), [swizzle](daypickerprops.md#optional-swizzle), [toMonth](daypickerprops.md#optional-tomonth), 

## Properties

### `Optional` className

• **className**? : *undefined | string*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:72](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L72)*

CSS class to add to the root element.

**`group`** Styling

___

### `Optional` classNames

• **classNames**? : *[DayPickerClassNames](../index.md#daypickerclassnames)*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:86](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L86)*

Change the class names used by `DayPicker`.

Use this prop when you cannot style the CSS using the
[defaultClassNames](../index.md#const-defaultclassnames), for example when using CSS modules.

```jsx
import { selected, disabled } from './styles.css';
<DayPicker classNames={{ selected, disabled }} />
````

**`group`** Styling

___

### `Optional` dir

• **dir**? : *string | undefined*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:220](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L220)*

The text direction of the calendar. Use `ltr` for left-to-right (default)
or `rtl` for right-to-left.

___

### `Optional` disabled

• **disabled**? : *[DayMatcher](../index.md#daymatcher)*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:201](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L201)*

Disable the matching days. Disabled days cannot be clicked.

___

### `Optional` enableOutsideDaysClick

• **enableOutsideDaysClick**? : *undefined | false | true*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:173](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L173)*

Enable click event for outside days when [showOutsideDays](daypickerprops.md#optional-showoutsidedays) is used.

___

### `Optional` fixedWeeks

• **fixedWeeks**? : *undefined | false | true*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:150](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L150)*

Display six weeks per months, regardless the month’s number of weeks. Outside
days will be always shown when setting this prop.

See also [showOutsideDays](daypickerprops.md#optional-showoutsidedays).

___

### `Optional` formatCaption

• **formatCaption**? : *[MonthCaptionFormatter](../index.md#monthcaptionformatter)*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:227](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L227)*

Format the month caption text.

**`default`** See [defaultFormatCaption](../index.md#private-defaultformatcaption).

___

### `Optional` formatDay

• **formatDay**? : *[DayFormatter](../index.md#dayformatter)*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:233](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L233)*

Format the content of the day element.

**`default`** See [defaultFormatDay](../index.md#private-defaultformatday).

___

### `Optional` formatWeekNumber

• **formatWeekNumber**? : *[WeekNumberFormatter](../index.md#weeknumberformatter)*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:245](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L245)*

Format the week numbers (when [showWeekNumber](daypickerprops.md#optional-showweeknumber) is set).

**`default`** See [defaultFormatWeekNumber](../index.md#private-defaultformatweeknumber).

___

### `Optional` formatWeekdayName

• **formatWeekdayName**? : *[WeekdayNameFormatter](../index.md#weekdaynameformatter)*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:239](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L239)*

Format the weekday's name in the head element.

**`default`** See [defaultFormatWeekdayName](../index.md#private-defaultformatweekdayname).

___

### `Optional` fromMonth

• **fromMonth**? : *Date*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:122](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L122)*

Allow navigation after (and including) the specified month.

See also [toMonth](daypickerprops.md#optional-tomonth).

___

### `Optional` hidden

• **hidden**? : *[DayMatcher](../index.md#daymatcher)*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:205](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L205)*

Hide the matching days.

___

### `Optional` initialMonth

• **initialMonth**? : *Date*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:110](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L110)*

The initial month to show in the calendar.

___

### `Optional` locale

• **locale**? : *dateFns.Locale*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:215](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L215)*

A [`dateFns.Locale`](https://date-fns.org/docs/Locale) object to localize
the user interface.

___

### `Optional` modifiers

• **modifiers**? : *[DayModifiers](../index.md#daymodifiers)*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:209](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L209)*

An object of modifiers.

___

### `Optional` modifiersClassNames

• **modifiersClassNames**? : *[ModifiersClassNames](../index.md#modifiersclassnames)*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:92](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L92)*

Change the class names used for the day [modifiers](daypickerprops.md#optional-modifiers).

**`group`** Styling

___

### `Optional` modifiersStyles

• **modifiersStyles**? : *[ModifiersStyles](../index.md#modifiersstyles)*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:105](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L105)*

Change the inline style for the day [modifiers](daypickerprops.md#optional-modifiers).

___

### `Optional` month

• **month**? : *Date*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:143](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L143)*

The rendered month. Implement [onMonthChange](daypickerprops.md#optional-onmonthchange) to enable months
navigation.

___

### `Optional` nextLabel

• **nextLabel**? : *undefined | string*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:192](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L192)*

Label used for the next month button in [Navigation](../index.md#navigation). Set it to empty
string to hide the button.

___

### `Optional` numberOfMonths

• **numberOfMonths**? : *undefined | number*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:116](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L116)*

The number of months to render.

See also [pagedNavigation](daypickerprops.md#optional-pagednavigation).

___

### `Optional` onDayClick

• **onDayClick**? : *[DayClickEventHandler](../index.md#dayclickeventhandler)*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:255](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L255)*

Event handler when the user clicks on a day.

___

### `Optional` onMonthChange

• **onMonthChange**? : *[MonthChangeEventHandler](../index.md#monthchangeeventhandler)*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:259](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L259)*

Event handler when the month changes.

___

### `Optional` onNextClick

• **onNextClick**? : *[MonthChangeEventHandler](../index.md#monthchangeeventhandler)*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:263](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L263)*

Event handler when the next month button is clicked.

___

### `Optional` onPrevClick

• **onPrevClick**? : *[MonthChangeEventHandler](../index.md#monthchangeeventhandler)*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:267](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L267)*

Event handler when the previous month button is clicked.

___

### `Optional` pagedNavigation

• **pagedNavigation**? : *undefined | false | true*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:133](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L133)*

When displaying multiple months, the navigation will be paginated
displaying the [numberOfMonths](daypickerprops.md#optional-numberofmonths) months at time instead of one.

___

### `Optional` prevLabel

• **prevLabel**? : *undefined | string*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:187](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L187)*

Label used for the previous month button in [Navigation](../index.md#navigation). Set it to
empty string to hide the button.

___

### `Optional` reverseMonths

• **reverseMonths**? : *undefined | false | true*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:138](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L138)*

Render the months in reversed order. Useful when [numberOfMonths](daypickerprops.md#optional-numberofmonths) is
greater than `1`, to display the most recent month first.

___

### `Optional` selected

• **selected**? : *[DayMatcher](../index.md#daymatcher)*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:197](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L197)*

Style the matching days as selected.

___

### `Optional` showCaption

• **showCaption**? : *undefined | false | true*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:157](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L157)*

Show the month’s caption. As default, the caption displays month and year.

- use [formatCaption](daypickerprops.md#optional-formatcaption) to localize the content of the caption
- [swizzle](../docs/swizzling) this component using the [swizzle](daypickerprops.md#optional-swizzle) prop

___

### `Optional` showHead

• **showHead**? : *undefined | false | true*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:162](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L162)*

Show the month’s head. As default, it displays the weekday names according
to [locale](daypickerprops.md#optional-locale).

___

### `Optional` showNavigation

• **showNavigation**? : *undefined | false | true*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:182](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L182)*

Show the navigation bar. [onMonthChange](daypickerprops.md#optional-onmonthchange) must be set.

___

### `Optional` showOutsideDays

• **showOutsideDays**? : *undefined | false | true*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:169](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L169)*

Show the outside days. An outside day is a day falling in the next or the
previous month.

See also [enableOutsideDaysClick](daypickerprops.md#optional-enableoutsidedaysclick).

___

### `Optional` showWeekNumber

• **showWeekNumber**? : *undefined | false | true*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:177](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L177)*

Show the week numbers column.

___

### `Optional` style

• **style**? : *React.CSSProperties*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:97](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L97)*

Style to apply to the root element.

___

### `Optional` styles

• **styles**? : *[DayPickerStyles](../index.md#daypickerstyles)*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:101](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L101)*

Inline styles to apply to the [DayPickerElements](../enums/daypickerelements.md).

___

### `Optional` swizzle

• **swizzle**? : *[SwizzlingComponents](../index.md#swizzlingcomponents)*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:250](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L250)*

The components to [swizzle](./docs/swizzling).

___

### `Optional` toMonth

• **toMonth**? : *Date*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:128](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L128)*

Allow navigation before (and including) the specified month.

See also [fromMonth](daypickerprops.md#optional-frommonth).
