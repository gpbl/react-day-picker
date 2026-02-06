# Interface: PropsBase

Defined in: [src/types/props.ts:44](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L44)

Props for customizing the calendar, handling localization, and managing
events. These exclude the selection mode props.

## See

https://daypicker.dev/api/interfaces/PropsBase

## Properties

### animate?

> `optional` **animate**: `boolean`

Defined in: [src/types/props.ts:235](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L235)

Animate navigating between months.

#### Since

9.6.0

#### See

https://daypicker.dev/docs/navigation#animate

***

### aria-label?

> `optional` **aria-label**: `string`

Defined in: [src/types/props.ts:362](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L362)

The aria-label attribute to add to the container element.

#### Since

9.4.1

#### See

https://daypicker.dev/guides/accessibility

***

### aria-labelledby?

> `optional` **aria-labelledby**: `string`

Defined in: [src/types/props.ts:369](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L369)

The aria-labelledby attribute to add to the container element.

#### Since

9.11.0

#### See

https://daypicker.dev/guides/accessibility

***

### autoFocus?

> `optional` **autoFocus**: `boolean`

Defined in: [src/types/props.ts:300](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L300)

When a selection mode is set, DayPicker will focus the first selected day
(if set) or today's date (if not disabled).

Use this prop when you need to focus DayPicker after a user action, for
improved accessibility.

#### See

https://daypicker.dev/guides/accessibility#autofocus

***

### broadcastCalendar?

> `optional` **broadcastCalendar**: `boolean`

Defined in: [src/types/props.ts:245](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L245)

Display the weeks in the month following the broadcast calendar. Setting
this prop will ignore [weekStartsOn](#weekstartson) (always Monday) and
[showOutsideDays](#showoutsidedays) will default to true.

#### Since

9.4.0

#### See

 - https://daypicker.dev/docs/localization#broadcast-calendar
 - https://en.wikipedia.org/wiki/Broadcast_calendar

***

### captionLayout?

> `optional` **captionLayout**: `"dropdown"` \| `"label"` \| `"dropdown-months"` \| `"dropdown-years"`

Defined in: [src/types/props.ts:175](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L175)

Show dropdowns to navigate between months or years.

- `label`: Displays the month and year as a label. Default value.
- `dropdown`: Displays dropdowns for both month and year navigation.
- `dropdown-months`: Displays a dropdown only for the month navigation.
- `dropdown-years`: Displays a dropdown only for the year navigation.

**Note:** By default, showing the dropdown will set the [startMonth](#startmonth)
to 100 years ago and [endMonth](#endmonth) to the end of the current year. You
can override this behavior by explicitly setting `startMonth` and
`endMonth`.

#### See

https://daypicker.dev/docs/customization#caption-layouts

***

### className?

> `optional` **className**: `string`

Defined in: [src/types/props.ts:59](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L59)

Class name to add to the root element.

***

### classNames?

> `optional` **classNames**: `Partial`\<[`ClassNames`](../type-aliases/ClassNames.md)\>

Defined in: [src/types/props.ts:69](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L69)

Change the class names used by DayPicker.

Use this prop when you need to change the default class names — for
example, when importing the style via CSS modules or when using a CSS
framework.

#### See

https://daypicker.dev/docs/styling

***

### components?

> `optional` **components**: `Partial`\<[`CustomComponents`](../type-aliases/CustomComponents.md)\>

Defined in: [src/types/props.ts:281](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L281)

Change the components used for rendering the calendar elements.

#### See

https://daypicker.dev/guides/custom-components

***

### dateLib?

> `optional` **dateLib**: `Partial`\<[`DateLib`](../classes/DateLib.md)\>

Defined in: [src/types/props.ts:486](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L486)

**`Experimental`**

Replace the default date library with a custom one. Experimental: not
guaranteed to be stable (may not respect semver).

#### Since

9.0.0

***

### defaultMonth?

> `optional` **defaultMonth**: `Date`

Defined in: [src/types/props.ts:101](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L101)

The initial month to show in the calendar.

Use this prop to let DayPicker control the current month. If you need to
set the month programmatically, use [month](#month) and [onMonthChange](#onmonthchange).

#### Default Value

```ts
The current month
```

#### See

https://daypicker.dev/docs/navigation

***

### dir?

> `optional` **dir**: `string`

Defined in: [src/types/props.ts:355](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L355)

The text direction of the calendar. Use `ltr` for left-to-right (default)
or `rtl` for right-to-left.

#### See

https://daypicker.dev/docs/translation#rtl-text-direction

***

### disabled?

> `optional` **disabled**: [`Matcher`](../type-aliases/Matcher.md) \| [`Matcher`](../type-aliases/Matcher.md)[]

Defined in: [src/types/props.ts:307](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L307)

Apply the `disabled` modifier to the matching days. Disabled days cannot be
selected when in a selection mode is set.

#### See

https://daypicker.dev/docs/selection-modes#disabled

***

### disableNavigation?

> `optional` **disableNavigation**: `boolean`

Defined in: [src/types/props.ts:159](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L159)

Disable the navigation between months. This prop won't hide the navigation:
to hide the navigation, use [hideNavigation](#hidenavigation).

#### See

https://daypicker.dev/docs/navigation#disablenavigation

***

### endMonth?

> `optional` **endMonth**: `Date`

Defined in: [src/types/props.ts:131](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L131)

The latest month to end the month navigation.

#### Since

9.0.0

#### See

https://daypicker.dev/docs/navigation#start-and-end-dates

***

### firstWeekContainsDate?

> `optional` **firstWeekContainsDate**: `4` \| `1`

Defined in: [src/types/props.ts:431](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L431)

The day of January that is always in the first week of the year.

#### See

https://daypicker.dev/docs/localization#first-week-contains-date

***

### fixedWeeks?

> `optional` **fixedWeeks**: `boolean`

Defined in: [src/types/props.ts:206](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L206)

Display always 6 weeks per each month, regardless of the month’s number of
weeks. Weeks will be filled with the days from the next month.

#### See

https://daypicker.dev/docs/customization#fixed-weeks

***

### footer?

> `optional` **footer**: `ReactNode`

Defined in: [src/types/props.ts:290](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L290)

Add a footer to the calendar, acting as a live region.

Use this prop to communicate the calendar's status to screen readers.
Prefer strings over complex UI elements.

#### See

https://daypicker.dev/guides/accessibility#footer

***

### formatters?

> `optional` **formatters**: `Partial`\<[`Formatters`](../type-aliases/Formatters.md)\>

Defined in: [src/types/props.ts:348](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L348)

Formatters used to format dates to strings. Use this prop to override the
default functions.

#### See

https://daypicker.dev/docs/translation#custom-formatters

***

### hidden?

> `optional` **hidden**: [`Matcher`](../type-aliases/Matcher.md) \| [`Matcher`](../type-aliases/Matcher.md)[]

Defined in: [src/types/props.ts:314](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L314)

Apply the `hidden` modifier to the matching days. Will hide them from the
calendar.

#### See

https://daypicker.dev/guides/custom-modifiers#hidden-modifier

***

### hideNavigation?

> `optional` **hideNavigation**: `boolean`

Defined in: [src/types/props.ts:152](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L152)

Hide the navigation buttons. This prop won't disable the navigation: to
disable the navigation, use [disableNavigation](#disablenavigation).

#### Since

9.0.0

#### See

https://daypicker.dev/docs/navigation#hidenavigation

***

### hideWeekdays?

> `optional` **hideWeekdays**: `boolean`

Defined in: [src/types/props.ts:212](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L212)

Hide the row displaying the weekday row header.

#### Since

9.0.0

***

### id?

> `optional` **id**: `string`

Defined in: [src/types/props.ts:91](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L91)

A unique id to add to the root element.

***

### ISOWeek?

> `optional` **ISOWeek**: `boolean`

Defined in: [src/types/props.ts:253](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L253)

Use ISO week dates instead of the locale setting. Setting this prop will
ignore `weekStartsOn` and `firstWeekContainsDate`.

#### See

 - https://daypicker.dev/docs/localization#iso-week-dates
 - https://en.wikipedia.org/wiki/ISO_week_date

***

### labels?

> `optional` **labels**: `Partial`\<[`Labels`](../type-aliases/Labels.md)\>

Defined in: [src/types/props.ts:341](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L341)

Labels creators to override the defaults. Use this prop to customize the
aria-label attributes in DayPicker.

#### See

https://daypicker.dev/docs/translation#aria-labels

***

### lang?

> `optional` **lang**: `string`

Defined in: [src/types/props.ts:385](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L385)

Add the language tag to the container element.

***

### locale?

> `optional` **locale**: `Partial`\<[`DayPickerLocale`](DayPickerLocale.md)\>

Defined in: [src/types/props.ts:398](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L398)

The locale object used to localize dates. Pass a locale from
`react-day-picker/locale` to localize the calendar.

#### Example

```ts
import { es } from "react-day-picker/locale";
  <DayPicker locale={es} />
```

#### Default Value

enUS - The English locale default of `date-fns`.

#### See

 - https://daypicker.dev/docs/localization
 - https://github.com/date-fns/date-fns/tree/main/src/locale for a list of the supported locales

***

### mode?

> `optional` **mode**: [`Mode`](../type-aliases/Mode.md)

Defined in: [src/types/props.ts:50](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L50)

Enable the selection of a single day, multiple days, or a range of days.

#### See

https://daypicker.dev/docs/selection-modes

***

### modifiers?

> `optional` **modifiers**: `Record`\<`string`, [`Matcher`](../type-aliases/Matcher.md) \| [`Matcher`](../type-aliases/Matcher.md)[] \| `undefined`\>

Defined in: [src/types/props.ts:334](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L334)

Add modifiers to the matching days.

#### Example

```ts
const modifiers = {
  weekend: { dayOfWeek: [0, 6] }, // Match weekends
  holiday: [new Date(2023, 11, 25)] // Match Christmas
  };
  <DayPicker modifiers={modifiers} />
```

#### See

https://daypicker.dev/guides/custom-modifiers

***

### modifiersClassNames?

> `optional` **modifiersClassNames**: [`ModifiersClassNames`](../type-aliases/ModifiersClassNames.md)

Defined in: [src/types/props.ts:75](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L75)

Change the class name for the day matching the `modifiers`.

#### See

https://daypicker.dev/guides/custom-modifiers

***

### modifiersStyles?

> `optional` **modifiersStyles**: [`ModifiersStyles`](../type-aliases/ModifiersStyles.md)

Defined in: [src/types/props.ts:89](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L89)

Change the class name for the day matching the [modifiers](#modifiers).

#### See

https://daypicker.dev/guides/custom-modifiers

***

### month?

> `optional` **month**: `Date`

Defined in: [src/types/props.ts:110](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L110)

The month displayed in the calendar.

As opposed to `defaultMonth`, use this prop with `onMonthChange` to change
the month programmatically.

#### See

https://daypicker.dev/docs/navigation

***

### navLayout?

> `optional` **navLayout**: `"after"` \| `"around"`

Defined in: [src/types/props.ts:199](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L199)

Adjust the positioning of the navigation buttons.

- `around`: Displays the buttons on either side of the caption.
- `after`: Displays the buttons after the caption. This ensures the tab order
  matches the visual order.

If not set, the buttons default to being displayed after the caption, but
the tab order may not align with the visual order.

#### Since

9.7.0

#### See

https://daypicker.dev/docs/customization#navigation-layouts

***

### nonce?

> `optional` **nonce**: `string`

Defined in: [src/types/props.ts:381](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L381)

A cryptographic nonce ("number used once") which can be used by Content
Security Policy for the inline `style` attributes.

***

### noonSafe?

> `optional` **noonSafe**: `boolean`

Defined in: [src/types/props.ts:275](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L275)

**`Experimental`**

Keep calendar math at noon in the configured [timeZone](#timezone) to avoid
historical second-level offsets drifting dates across midnight.

This prop sets the time of the dates to noon (12:00).

#### Since

9.13.0

#### See

https://daypicker.dev/localization/setting-time-zone#noonsafe

***

### numberOfMonths?

> `optional` **numberOfMonths**: `number`

Defined in: [src/types/props.ts:117](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L117)

The number of displayed months.

#### Default Value

```ts
1
```

#### See

https://daypicker.dev/docs/customization#multiplemonths

***

### numerals?

> `optional` **numerals**: [`Numerals`](../type-aliases/Numerals.md)

Defined in: [src/types/props.ts:418](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L418)

The numeral system to use when formatting dates.

- `latn`: Latin (Western Arabic)
- `arab`: Arabic-Indic
- `arabext`: Eastern Arabic-Indic (Persian)
- `deva`: Devanagari
- `beng`: Bengali
- `guru`: Gurmukhi
- `gujr`: Gujarati
- `orya`: Oriya
- `tamldec`: Tamil
- `telu`: Telugu
- `knda`: Kannada
- `mlym`: Malayalam

#### Default Value

`latn` Latin (Western Arabic)

#### See

https://daypicker.dev/docs/translation#numeral-systems

***

### onDayBlur?

> `optional` **onDayBlur**: [`DayEventHandler`](../type-aliases/DayEventHandler.md)\<`FocusEvent`\<`Element`, `Element`\>\>

Defined in: [src/types/props.ts:471](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L471)

Event handler when a day is blurred.

***

### onDayClick?

> `optional` **onDayClick**: [`DayEventHandler`](../type-aliases/DayEventHandler.md)\<`MouseEvent`\<`Element`, `MouseEvent`\>\>

Defined in: [src/types/props.ts:467](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L467)

Event handler when a day is clicked.

***

### onDayFocus?

> `optional` **onDayFocus**: [`DayEventHandler`](../type-aliases/DayEventHandler.md)\<`FocusEvent`\<`Element`, `Element`\>\>

Defined in: [src/types/props.ts:469](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L469)

Event handler when a day is focused.

***

### onDayKeyDown?

> `optional` **onDayKeyDown**: [`DayEventHandler`](../type-aliases/DayEventHandler.md)\<`KeyboardEvent`\<`Element`\>\>

Defined in: [src/types/props.ts:473](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L473)

Event handler when a key is pressed on a day.

***

### onDayMouseEnter?

> `optional` **onDayMouseEnter**: [`DayEventHandler`](../type-aliases/DayEventHandler.md)\<`MouseEvent`\<`Element`, `MouseEvent`\>\>

Defined in: [src/types/props.ts:475](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L475)

Event handler when the mouse enters a day.

***

### onDayMouseLeave?

> `optional` **onDayMouseLeave**: [`DayEventHandler`](../type-aliases/DayEventHandler.md)\<`MouseEvent`\<`Element`, `MouseEvent`\>\>

Defined in: [src/types/props.ts:477](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L477)

Event handler when the mouse leaves a day.

***

### onMonthChange?

> `optional` **onMonthChange**: [`MonthChangeEventHandler`](../type-aliases/MonthChangeEventHandler.md)

Defined in: [src/types/props.ts:452](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L452)

Event fired when the user navigates between months.

#### See

https://daypicker.dev/docs/navigation#onmonthchange

***

### onNextClick?

> `optional` **onNextClick**: [`MonthChangeEventHandler`](../type-aliases/MonthChangeEventHandler.md)

Defined in: [src/types/props.ts:459](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L459)

Event handler when the next month button is clicked.

#### See

https://daypicker.dev/docs/navigation

***

### onPrevClick?

> `optional` **onPrevClick**: [`MonthChangeEventHandler`](../type-aliases/MonthChangeEventHandler.md)

Defined in: [src/types/props.ts:465](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L465)

Event handler when the previous month button is clicked.

#### See

https://daypicker.dev/docs/navigation

***

### pagedNavigation?

> `optional` **pagedNavigation**: `boolean`

Defined in: [src/types/props.ts:137](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L137)

Paginate the month navigation displaying the `numberOfMonths` at a time.

#### See

https://daypicker.dev/docs/customization#multiplemonths

***

### required?

> `optional` **required**: `boolean`

Defined in: [src/types/props.ts:56](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L56)

Whether the selection is required.

#### See

https://daypicker.dev/docs/selection-modes

***

### reverseMonths?

> `optional` **reverseMonths**: `boolean`

Defined in: [src/types/props.ts:144](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L144)

Render the months in reversed order (when [numberOfMonths](#numberofmonths) is set) to
display the most recent month first.

#### See

https://daypicker.dev/docs/customization#multiplemonths

***

### reverseYears?

> `optional` **reverseYears**: `boolean`

Defined in: [src/types/props.ts:184](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L184)

Reverse the order of years in the dropdown when using
`captionLayout="dropdown"` or `captionLayout="dropdown-years"`.

#### Since

9.9.0

#### See

https://daypicker.dev/docs/customization#caption-layouts

***

### role?

> `optional` **role**: `"application"` \| `"dialog"`

Defined in: [src/types/props.ts:376](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L376)

The role attribute to add to the container element.

#### Since

9.4.1

#### See

https://daypicker.dev/guides/accessibility

***

### showOutsideDays?

> `optional` **showOutsideDays**: `boolean`

Defined in: [src/types/props.ts:221](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L221)

Show the outside days (days falling in the next or the previous month).

**Note:** when a [broadcastCalendar](#broadcastcalendar) is set, this prop defaults to
true.

#### See

https://daypicker.dev/docs/customization#outside-days

***

### showWeekNumber?

> `optional` **showWeekNumber**: `boolean`

Defined in: [src/types/props.ts:228](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L228)

Show the week numbers column. Weeks are numbered according to the local
week index.

#### See

https://daypicker.dev/docs/customization#showweeknumber

***

### startMonth?

> `optional` **startMonth**: `Date`

Defined in: [src/types/props.ts:124](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L124)

The earliest month to start the month navigation.

#### Since

9.0.0

#### See

https://daypicker.dev/docs/navigation#start-and-end-dates

***

### style?

> `optional` **style**: `CSSProperties`

Defined in: [src/types/props.ts:77](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L77)

Style to apply to the root element.

***

### styles?

> `optional` **styles**: `Partial`\<[`Styles`](../type-aliases/Styles.md)\>

Defined in: [src/types/props.ts:83](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L83)

Change the inline styles of the HTML elements.

#### See

https://daypicker.dev/docs/styling

***

### timeZone?

> `optional` **timeZone**: `string`

Defined in: [src/types/props.ts:264](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L264)

The time zone (IANA or UTC offset) to use in the calendar (experimental).

See
[Wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
for the possible values.

#### Since

9.1.1

#### See

https://daypicker.dev/localization/setting-time-zone

***

### title?

> `optional` **title**: `string`

Defined in: [src/types/props.ts:383](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L383)

Add a `title` attribute to the container element.

***

### today?

> `optional` **today**: `Date`

Defined in: [src/types/props.ts:321](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L321)

The today’s date. Default is the current date. This date will get the
`today` modifier to style the day.

#### See

https://daypicker.dev/guides/custom-modifiers#today-modifier

***

### useAdditionalDayOfYearTokens?

> `optional` **useAdditionalDayOfYearTokens**: `boolean`

Defined in: [src/types/props.ts:445](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L445)

Enable `YY` and `YYYY` for day of year tokens when formatting or parsing
dates.

#### See

https://date-fns.org/docs/Unicode-Tokens

***

### useAdditionalWeekYearTokens?

> `optional` **useAdditionalWeekYearTokens**: `boolean`

Defined in: [src/types/props.ts:438](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L438)

Enable `DD` and `DDDD` for week year tokens when formatting or parsing
dates.

#### See

https://date-fns.org/docs/Unicode-Tokens

***

### weekStartsOn?

> `optional` **weekStartsOn**: `0` \| `5` \| `4` \| `1` \| `6` \| `2` \| `3`

Defined in: [src/types/props.ts:425](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L425)

The index of the first day of the week (0 - Sunday). Overrides the locale's
default.

#### See

https://daypicker.dev/docs/localization#first-date-of-the-week
