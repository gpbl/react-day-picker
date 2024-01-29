# Interface: PropsBase

The base props for the [DayPicker](/api/functions/DayPicker.md) component.

For changing the navigation, the styling and the behavior of the calendar.

## Other

### ISOWeek?

> **ISOWeek**?: `boolean`

Use ISO week dates instead of the locale setting. Setting this prop will
ignore `weekStartsOn` and `firstWeekContainsDate`.

#### Default Value

```ts
false
```

#### See

https://en.wikipedia.org/wiki/ISO_week_date

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:239](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L239)

***

### autoFocus?

> **autoFocus**?: `boolean`

When a selection mode is set, DayPicker will focus the first selected day
(if set) or the today's date (if not disabled).

Use this prop when you need to focus DayPicker after a user actions, for
improved accessibility.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:264](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L264)

***

### ~~captionLayout?~~

> **captionLayout**?: [`CaptionLayout`](/api/type-aliases/CaptionLayout.md)

Change the layout of the caption.

- `buttons`: display prev/right buttons
- `dropdown`: display dropdowns to change the month and the year

**Note:** the `dropdown` layout is available only when `fromDate`,
`fromMonth` or`fromYear` and `toDate`, `toMonth` or `toYear` are set.

#### Deprecated

To show the dropdowns, use [dropdownNavigation](/api/interfaces/PropsBase.md#dropdownnavigation). To hide
  the navigation buttons, set [hideNavigation](/api/interfaces/PropsBase.md#hidenavigation).

#### Default Value

```ts
buttons
```

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:524](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L524)

***

### classNames?

> **classNames**?: `Partial`\<[`ClassNames`](/api/type-aliases/ClassNames.md)\>

Change the class names used by DayPicker.

Use this prop when you need to change the default class names — for example
when using CSS modules.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:62](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L62)

***

### components?

> **components**?: [`CustomComponents`](/api/type-aliases/CustomComponents.md)

Change the components used for rendering the calendar elements.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:246](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L246)

***

### defaultMonth?

> **defaultMonth**?: `Date`

The initial month to show in the calendar. Use this prop to let DayPicker
control the current month. If you need to set the month programmatically,
use `month` and `onMonthChange`.

#### Default Value

```ts
The current month
```

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:105](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L105)

***

### dir?

> **dir**?: `string`

The text direction of the calendar. Use `ltr` for left-to-right (default)
or `rtl` for right-to-left.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:316](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L316)

***

### disableNavigation?

> **disableNavigation**?: `boolean`

Disable the navigation between months. This prop won't hide the navigation:
to hide the navigation, use [hideNavigation](/api/interfaces/PropsBase.md#hidenavigation).

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:185](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L185)

***

### disabled?

> **disabled**?: [`Matcher`](/api/type-aliases/Matcher.md) \| [`Matcher`](/api/type-aliases/Matcher.md)[]

Apply the `disabled` modifier to the matching days.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:270](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L270)

***

### dropdownNavigation?

> **dropdownNavigation**?: `boolean` \| `"month"` \| `"year"`

Show dropdowns to navigate between months or years.

- `true`: display the dropdowns for both month and year.
- `month`: display the dropdown for the month.
- `year`: display the dropdown for the year.
- `false`: hide the dropdowns.

**Note:** showing the dropdown will default [fromYear](/api/interfaces/PropsBase.md#fromyear) to the 100
years ago, and [toYear](/api/interfaces/PropsBase.md#toyear) to the current year.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:199](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L199)

***

### firstWeekContainsDate?

> **firstWeekContainsDate**?: `1` \| `4`

The day of January, which is always in the first week of the year.

#### See

 - https://date-fns.org/docs/getWeek
 - https://en.wikipedia.org/wiki/Week#Numbering

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:362](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L362)

***

### fixedWeeks?

> **fixedWeeks**?: `boolean`

Display always 6 weeks per each month, regardless the month’s number of
weeks. Weeks will be filled with the days from the next month.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:207](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L207)

***

### footer?

> **footer**?: `ReactNode`

Content to add to the table footer element.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:253](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L253)

***

### formatters?

> **formatters**?: `Partial`\<[`Formatters`](/api/type-aliases/Formatters.md)\>

Formatters used to format dates to strings. Use this prop to override the
default functions.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:308](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L308)

***

### fromDate?

> **fromDate**?: `Date`

The earliest day to start the month navigation.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:128](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L128)

***

### fromMonth?

> **fromMonth**?: `Date`

The earliest month to start the month navigation.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:140](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L140)

***

### fromYear?

> **fromYear**?: `number`

The earliest year to start the month navigation.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:152](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L152)

***

### hidden?

> **hidden**?: [`Matcher`](/api/type-aliases/Matcher.md) \| [`Matcher`](/api/type-aliases/Matcher.md)[]

Apply the `hidden` modifier to the matching days. Will hide them from the
calendar.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:277](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L277)

***

### hideNavigation?

> **hideNavigation**?: `boolean`

Hide the navigation buttons. This prop won't disable the navigation: to
disable the navigation, use [disableNavigation](/api/interfaces/PropsBase.md#disablenavigation).

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:178](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L178)

***

### hideWeekdayRow?

> **hideWeekdayRow**?: `boolean`

Hide the row displaying the weekday row header.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:213](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L213)

***

### id?

> **id**?: `string`

A unique id to replace the random generated ids – used by DayPicker for
accessibility.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:95](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L95)

***

### labels?

> **labels**?: `Partial`\<[`Labels`](/api/type-aliases/Labels.md)\>

Labels creators to override the defaults. Use this prop to customize the
aria-label attributes in DayPicker.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:300](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L300)

***

### lang?

> **lang**?: `string`

Add the language tag to the container element.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:338](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L338)

***

### locale?

> **locale**?: `Locale`

The date-fns locale object used to localize dates.

#### Default Value

```ts
en-US
```

#### See

https://date-fns.org/docs/Locale

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:347](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L347)

***

### modifiers?

> **modifiers**?: `Record`\<`string`, `undefined` \| [`Matcher`](/api/type-aliases/Matcher.md) \| [`Matcher`](/api/type-aliases/Matcher.md)[]\>

Add modifiers to the matching days.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:292](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L292)

***

### modifiersClassNames?

> **modifiersClassNames**?: [`ModifiersClassNames`](/api/type-aliases/ModifiersClassNames.md)

Change the class name for the day matching the `modifiers`.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:68](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L68)

***

### modifiersStyles?

> **modifiersStyles**?: [`ModifiersStyles`](/api/type-aliases/ModifiersStyles.md)

Change the inline style for the day matching the `modifiers`.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:87](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L87)

***

### month?

> **month**?: `Date`

The month displayed in the calendar.

As opposed to `PropsBase.defaultMonth}, use this prop with
`PropsBase.onMonthChange} to change the month programmatically.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:114](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L114)

***

### nonce?

> **nonce**?: `string`

A cryptographic nonce ("number used once") which can be used by Content
Security Policy for the inline `style` attributes.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:324](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L324)

***

### numberOfMonths?

> **numberOfMonths**?: `number`

The number of displayed months.

#### Default Value

```ts
1
```

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:122](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L122)

***

### onDayBlur?

> **onDayBlur**?: [`DayFocusEventHandler`](/api/type-aliases/DayFocusEventHandler.md)

Event handler when a day is blurred.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:407](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L407)

***

### onDayClick?

> **onDayClick**?: [`DayMouseEventHandler`](/api/type-aliases/DayMouseEventHandler.md)

Event handler when a day is clicked.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:393](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L393)

***

### onDayFocus?

> **onDayFocus**?: [`DayFocusEventHandler`](/api/type-aliases/DayFocusEventHandler.md)

Event handler when a day is focused.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:400](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L400)

***

### onDayKeyDown?

> **onDayKeyDown**?: [`DayKeyboardEventHandler`](/api/type-aliases/DayKeyboardEventHandler.md)

Event handler when a key is pressed on a day.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:428](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L428)

***

### onDayKeyPress?

> **onDayKeyPress**?: [`DayKeyboardEventHandler`](/api/type-aliases/DayKeyboardEventHandler.md)

Event handler when a key is pressed and released on a day.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:442](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L442)

***

### onDayKeyUp?

> **onDayKeyUp**?: [`DayKeyboardEventHandler`](/api/type-aliases/DayKeyboardEventHandler.md)

Event handler when a key is released on a day.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:435](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L435)

***

### onDayMouseEnter?

> **onDayMouseEnter**?: [`DayMouseEventHandler`](/api/type-aliases/DayMouseEventHandler.md)

Event handler when the mouse enters a day.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:414](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L414)

***

### onDayMouseLeave?

> **onDayMouseLeave**?: [`DayMouseEventHandler`](/api/type-aliases/DayMouseEventHandler.md)

Event handler when the mouse leaves a day.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:421](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L421)

***

### onDayPointerEnter?

> **onDayPointerEnter**?: [`DayPointerEventHandler`](/api/type-aliases/DayPointerEventHandler.md)

Event handler when a pointer enters a day.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:449](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L449)

***

### onDayPointerLeave?

> **onDayPointerLeave**?: [`DayPointerEventHandler`](/api/type-aliases/DayPointerEventHandler.md)

Event handler when a pointer leaves a day.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:456](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L456)

***

### onDayTouchCancel?

> **onDayTouchCancel**?: [`DayTouchEventHandler`](/api/type-aliases/DayTouchEventHandler.md)

Event handler when a touch is cancelled on a day.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:463](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L463)

***

### onDayTouchEnd?

> **onDayTouchEnd**?: [`DayTouchEventHandler`](/api/type-aliases/DayTouchEventHandler.md)

Event handler when a touch ends on a day.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:470](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L470)

***

### onDayTouchMove?

> **onDayTouchMove**?: [`DayTouchEventHandler`](/api/type-aliases/DayTouchEventHandler.md)

Event handler when a touch moves on a day.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:477](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L477)

***

### onDayTouchStart?

> **onDayTouchStart**?: [`DayTouchEventHandler`](/api/type-aliases/DayTouchEventHandler.md)

Event handler when a touch starts on a day.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:484](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L484)

***

### onMonthChange?

> **onMonthChange**?: [`MonthChangeEventHandler`](/api/type-aliases/MonthChangeEventHandler.md)

Event fired when the user navigates between months.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:386](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L386)

***

### onNextClick?

> **onNextClick**?: [`MonthChangeEventHandler`](/api/type-aliases/MonthChangeEventHandler.md)

Event handler when the next month button is clicked.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:491](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L491)

***

### onPrevClick?

> **onPrevClick**?: [`MonthChangeEventHandler`](/api/type-aliases/MonthChangeEventHandler.md)

Event handler when the previous month button is clicked.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:498](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L498)

***

### onWeekNumberClick?

> **onWeekNumberClick**?: [`WeekNumberClickEventHandler`](/api/type-aliases/WeekNumberClickEventHandler.md)

Event handler when a week number is clicked. Requires [showWeekNumber](/api/interfaces/PropsBase.md#showweeknumber)
to be set.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:506](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L506)

***

### pagedNavigation?

> **pagedNavigation**?: `boolean`

Paginate the month navigation displaying the `numberOfMonths` at time.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:164](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L164)

***

### reverseMonths?

> **reverseMonths**?: `boolean`

Render the months in reversed order (when [numberOfMonths](/api/interfaces/PropsBase.md#numberofmonths) is set) to
display the most recent month first.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:171](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L171)

***

### showOutsideDays?

> **showOutsideDays**?: `boolean`

Show the outside days (days falling in the next or the previous month).

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:219](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L219)

***

### showWeekNumber?

> **showWeekNumber**?: `boolean`

Show the week numbers column. Weeks are numbered according to the local
week index.

- To use ISO week numbering, use the `ISOWeek` prop.
- To change how the week numbers are displayed, use the `Formatters` prop.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:229](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L229)

***

### style?

> **style**?: `CSSProperties`

Style to apply to the container element.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:75](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L75)

***

### styles?

> **styles**?: `Partial`\<[`Styles`](/api/type-aliases/Styles.md)\>

Change the inline styles of the HTML elements.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:81](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L81)

***

### title?

> **title**?: `string`

Add a `title` attribute to the container element.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:331](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L331)

***

### toDate?

> **toDate**?: `Date`

The latest day to end the month navigation.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:134](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L134)

***

### toMonth?

> **toMonth**?: `Date`

The latest month to end the month navigation.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:146](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L146)

***

### toYear?

> **toYear**?: `number`

The latest year to end the month navigation.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:158](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L158)

***

### today?

> **today**?: `Date`

The today’s date. Default is the current date. This date will get the
`today` modifier to style the day.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:285](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L285)

***

### useAdditionalDayOfYearTokens?

> **useAdditionalDayOfYearTokens**?: `boolean`

Enable `YY` and `YYYY` for day of year tokens when formatting or parsing
dates.

#### See

https://date-fns.org/docs/Unicode-Tokens

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:378](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L378)

***

### useAdditionalWeekYearTokens?

> **useAdditionalWeekYearTokens**?: `boolean`

Enable `DD` and `DDDD` for week year tokens when formatting or parsing
dates.

#### See

https://date-fns.org/docs/Unicode-Tokens

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:370](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L370)

***

### weekStartsOn?

> **weekStartsOn**?: `0` \| `2` \| `3` \| `1` \| `4` \| `5` \| `6`

The index of the first day of the week (0 - Sunday). Overrides the locale's
one.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:354](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L354)

## Styling

### className?

> **className**?: `string`

The CSS class to add to the container element.

#### Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:53](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L53)

***

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
