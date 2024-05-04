# Interface: DayPickerRangeProps

The props for the [DayPicker](../functions/DayPicker.md) component when using `mode="range"`.

## Extends

- [`DayPickerBase`](DayPickerBase.md)

## Properties

### ISOWeek?

> `optional` **ISOWeek**: `boolean`

Use ISO week dates instead of the locale setting. Setting this prop will
ignore [weekStartsOn](DayPickerBase.md#weekstartson) and [firstWeekContainsDate](DayPickerBase.md#firstweekcontainsdate).

#### See

https://en.wikipedia.org/wiki/ISO_week_date

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`ISOWeek`](DayPickerBase.md#isoweek)

#### Source

[src/types/DayPickerBase.ts:200](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L200)

***

### captionLayout?

> `optional` **captionLayout**: [`CaptionLayout`](../type-aliases/CaptionLayout.md)

Change the layout of the caption:

- `buttons`: display prev/right buttons
- `dropdown`: display drop-downs to change the month and the year

**Note:** the `dropdown` layout is available only when `fromDate`,
`fromMonth` or`fromYear` and `toDate`, `toMonth` or `toYear` are set.

#### Default Value

```ts
buttons
```

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`captionLayout`](DayPickerBase.md#captionlayout)

#### Source

[src/types/DayPickerBase.ts:145](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L145)

***

### className?

> `optional` **className**: `string`

The CSS class to add to the container element. To change the name of the
class instead, use `classNames.root`.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`className`](DayPickerBase.md#classname)

#### Source

[src/types/DayPickerBase.ts:55](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L55)

***

### classNames?

> `optional` **classNames**: `Partial` \<[`StyledElement`](../type-aliases/StyledElement.md)\<`string`\>\>

Change the class names of the HTML elements.

Use this prop when you need to change the default class names — for example
when using CSS modules.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`classNames`](DayPickerBase.md#classnames)

#### Source

[src/types/DayPickerBase.ts:62](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L62)

***

### components?

> `optional` **components**: [`CustomComponents`](CustomComponents.md)

Map of components used to create the layout. Look at the [components
source](https://github.com/gpbl/react-day-picker/tree/main/src/components)
to understand how internal components are built and provide your custom
components.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`components`](DayPickerBase.md#components)

#### Source

[src/types/DayPickerBase.ts:208](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L208)

***

### defaultMonth?

> `optional` **defaultMonth**: `Date`

The initial month to show in the calendar. Use this prop to let DayPicker
control the current month. If you need to set the month programmatically,
use []] and [[onMonthChange](DayPickerBase.md#month).

#### Default Value

```ts
The current month
```

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`defaultMonth`](DayPickerBase.md#defaultmonth)

#### Source

[src/types/DayPickerBase.ts:86](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L86)

***

### dir?

> `optional` **dir**: `string`

The text direction of the calendar. Use `ltr` for left-to-right (default)
or `rtl` for right-to-left.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`dir`](DayPickerBase.md#dir)

#### Source

[src/types/DayPickerBase.ts:264](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L264)

***

### disableNavigation?

> `optional` **disableNavigation**: `boolean`

Disable the navigation between months.

#### Default Value

```ts
false
```

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`disableNavigation`](DayPickerBase.md#disablenavigation)

#### Source

[src/types/DayPickerBase.ts:119](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L119)

***

### disabled?

> `optional` **disabled**: [`Matcher`](../type-aliases/Matcher.md) \| [`Matcher`](../type-aliases/Matcher.md)[]

Apply the `disabled` modifier to the matching days.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`disabled`](DayPickerBase.md#disabled)

#### Source

[src/types/DayPickerBase.ts:223](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L223)

***

### firstWeekContainsDate?

> `optional` **firstWeekContainsDate**: `1` \| `4`

The day of January, which is always in the first week of the year. Can be
either Monday (`1`) or Thursday (`4`).

#### See

 - https://date-fns.org/docs/getWeek
 - https://en.wikipedia.org/wiki/Week#Numbering
 - [ISOWeek](DayPickerBase.md#isoweek) .

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`firstWeekContainsDate`](DayPickerBase.md#firstweekcontainsdate)

#### Source

[src/types/DayPickerBase.ts:193](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L193)

***

### fixedWeeks?

> `optional` **fixedWeeks**: `boolean`

Display six weeks per months, regardless the month’s number of weeks. To
use this prop, [showOutsideDays](DayPickerBase.md#showoutsidedays) must be set.

#### Default Value

```ts
false
```

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`fixedWeeks`](DayPickerBase.md#fixedweeks)

#### Source

[src/types/DayPickerBase.ts:152](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L152)

***

### footer?

> `optional` **footer**: `ReactNode`

Content to add to the table footer element.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`footer`](DayPickerBase.md#footer)

#### Source

[src/types/DayPickerBase.ts:211](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L211)

***

### formatters?

> `optional` **formatters**: `Partial` \<[`Formatters`](../type-aliases/Formatters.md)\>

A map of formatters. Use the formatters to override the default formatting
functions.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`formatters`](DayPickerBase.md#formatters)

#### Source

[src/types/DayPickerBase.ts:258](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L258)

***

### fromDate?

> `optional` **fromDate**: `Date`

The earliest day to start the month navigation.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`fromDate`](DayPickerBase.md#fromdate)

#### Source

[src/types/DayPickerBase.ts:103](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L103)

***

### fromMonth?

> `optional` **fromMonth**: `Date`

The earliest month to start the month navigation.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`fromMonth`](DayPickerBase.md#frommonth)

#### Source

[src/types/DayPickerBase.ts:107](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L107)

***

### fromYear?

> `optional` **fromYear**: `number`

The earliest year to start the month navigation.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`fromYear`](DayPickerBase.md#fromyear)

#### Source

[src/types/DayPickerBase.ts:111](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L111)

***

### hidden?

> `optional` **hidden**: [`Matcher`](../type-aliases/Matcher.md) \| [`Matcher`](../type-aliases/Matcher.md)[]

Apply the `hidden` modifier to the matching days. Will hide them from the
calendar.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`hidden`](DayPickerBase.md#hidden)

#### Source

[src/types/DayPickerBase.ts:228](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L228)

***

### hideHead?

> `optional` **hideHead**: `boolean`

Hide the month’s head displaying the weekday names.

#### Default Value

```ts
false
```

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`hideHead`](DayPickerBase.md#hidehead)

#### Source

[src/types/DayPickerBase.ts:158](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L158)

***

### id?

> `optional` **id**: `string`

A unique id to replace the random generated id – used by DayPicker for
accessibility.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`id`](DayPickerBase.md#id)

#### Source

[src/types/DayPickerBase.ts:77](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L77)

***

### initialFocus?

> `optional` **initialFocus**: `boolean`

When a selection mode is set, DayPicker will focus the first selected day
(if set) or the today's date (if not disabled).

Use this prop when you need to focus DayPicker after a user actions, for
improved accessibility.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`initialFocus`](DayPickerBase.md#initialfocus)

#### Source

[src/types/DayPickerBase.ts:220](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L220)

***

### labels?

> `optional` **labels**: `Partial` \<[`Labels`](../type-aliases/Labels.md)\>

Labels creators to override the defaults. Use this prop to customize the
ARIA labels attributes.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`labels`](DayPickerBase.md#labels)

#### Source

[src/types/DayPickerBase.ts:252](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L252)

***

### lang?

> `optional` **lang**: `string`

Add the language tag to the container element.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`lang`](DayPickerBase.md#lang)

#### Source

[src/types/DayPickerBase.ts:276](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L276)

***

### locale?

> `optional` **locale**: `Locale`

The date-fns locale object used to localize dates.

#### Default Value

```ts
en-US
```

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`locale`](DayPickerBase.md#locale)

#### Source

[src/types/DayPickerBase.ts:246](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L246)

***

### max?

> `optional` **max**: `number`

The maximum amount of days that can be selected.

#### Source

[src/types/DayPickerRange.ts:18](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerRange.ts#L18)

***

### min?

> `optional` **min**: `number`

The minimum amount of days that can be selected.

#### Source

[src/types/DayPickerRange.ts:16](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerRange.ts#L16)

***

### mode

> **mode**: `"range"`

#### Source

[src/types/DayPickerRange.ts:10](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerRange.ts#L10)

***

### modifiers?

> `optional` **modifiers**: [`DayModifiers`](../type-aliases/DayModifiers.md)

Add modifiers to the matching days.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`modifiers`](DayPickerBase.md#modifiers)

#### Source

[src/types/DayPickerBase.ts:239](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L239)

***

### modifiersClassNames?

> `optional` **modifiersClassNames**: [`ModifiersClassNames`](../type-aliases/ModifiersClassNames.md)

Change the class name for the day matching the [modifiers](DayPickerBase.md#modifiers).

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`modifiersClassNames`](DayPickerBase.md#modifiersclassnames)

#### Source

[src/types/DayPickerBase.ts:64](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L64)

***

### modifiersStyles?

> `optional` **modifiersStyles**: [`ModifiersStyles`](../type-aliases/ModifiersStyles.md)

Change the inline style for the day matching the [modifiers](DayPickerBase.md#modifiers).

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`modifiersStyles`](DayPickerBase.md#modifiersstyles)

#### Source

[src/types/DayPickerBase.ts:71](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L71)

***

### month?

> `optional` **month**: `Date`

The month displayed in the calendar.

As opposed to [DayPickerBase.defaultMonth](DayPickerBase.md#defaultmonth), use this prop with
[DayPickerBase.onMonthChange](DayPickerBase.md#onmonthchange) to change the month programmatically.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`month`](DayPickerBase.md#month)

#### Source

[src/types/DayPickerBase.ts:93](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L93)

***

### nonce?

> `optional` **nonce**: `string`

A cryptographic nonce ("number used once") which can be used by Content
Security Policy for the inline `style` attributes.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`nonce`](DayPickerBase.md#nonce)

#### Source

[src/types/DayPickerBase.ts:270](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L270)

***

### numberOfMonths?

> `optional` **numberOfMonths**: `number`

The number of displayed months.

#### Default Value

```ts
1
```

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`numberOfMonths`](DayPickerBase.md#numberofmonths)

#### Source

[src/types/DayPickerBase.ts:101](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L101)

***

### onDayBlur?

> `optional` **onDayBlur**: [`DayFocusEventHandler`](../type-aliases/DayFocusEventHandler.md)

Event callback fired when the user blurs from a day.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`onDayBlur`](DayPickerBase.md#ondayblur)

#### Source

[src/types/DayPickerBase.ts:293](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L293)

***

### onDayClick?

> `optional` **onDayClick**: [`DayClickEventHandler`](../type-aliases/DayClickEventHandler.md)

Event callback fired when the user clicks on a day.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`onDayClick`](DayPickerBase.md#ondayclick)

#### Source

[src/types/DayPickerBase.ts:289](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L289)

***

### onDayFocus?

> `optional` **onDayFocus**: [`DayFocusEventHandler`](../type-aliases/DayFocusEventHandler.md)

Event callback fired when the user focuses on a day.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`onDayFocus`](DayPickerBase.md#ondayfocus)

#### Source

[src/types/DayPickerBase.ts:291](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L291)

***

### onDayKeyDown?

> `optional` **onDayKeyDown**: [`DayKeyboardEventHandler`](../type-aliases/DayKeyboardEventHandler.md)

Event callback fired when the user presses a key on a day.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`onDayKeyDown`](DayPickerBase.md#ondaykeydown)

#### Source

[src/types/DayPickerBase.ts:299](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L299)

***

### onDayKeyPress?

> `optional` **onDayKeyPress**: [`DayKeyboardEventHandler`](../type-aliases/DayKeyboardEventHandler.md)

Event callback fired when the user presses a key on a day.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`onDayKeyPress`](DayPickerBase.md#ondaykeypress)

#### Source

[src/types/DayPickerBase.ts:303](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L303)

***

### onDayKeyUp?

> `optional` **onDayKeyUp**: [`DayKeyboardEventHandler`](../type-aliases/DayKeyboardEventHandler.md)

Event callback fired when the user presses a key on a day.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`onDayKeyUp`](DayPickerBase.md#ondaykeyup)

#### Source

[src/types/DayPickerBase.ts:301](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L301)

***

### onDayMouseEnter?

> `optional` **onDayMouseEnter**: [`DayMouseEventHandler`](../type-aliases/DayMouseEventHandler.md)

Event callback fired when the user hovers on a day.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`onDayMouseEnter`](DayPickerBase.md#ondaymouseenter)

#### Source

[src/types/DayPickerBase.ts:295](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L295)

***

### onDayMouseLeave?

> `optional` **onDayMouseLeave**: [`DayMouseEventHandler`](../type-aliases/DayMouseEventHandler.md)

Event callback fired when the user hovers away from a day.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`onDayMouseLeave`](DayPickerBase.md#ondaymouseleave)

#### Source

[src/types/DayPickerBase.ts:297](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L297)

***

### onDayPointerEnter?

> `optional` **onDayPointerEnter**: [`DayPointerEventHandler`](../type-aliases/DayPointerEventHandler.md)

Event callback fired when the pointer enters a day.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`onDayPointerEnter`](DayPickerBase.md#ondaypointerenter)

#### Source

[src/types/DayPickerBase.ts:305](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L305)

***

### onDayPointerLeave?

> `optional` **onDayPointerLeave**: [`DayPointerEventHandler`](../type-aliases/DayPointerEventHandler.md)

Event callback fired when the pointer leaves a day.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`onDayPointerLeave`](DayPickerBase.md#ondaypointerleave)

#### Source

[src/types/DayPickerBase.ts:307](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L307)

***

### onDayTouchCancel?

> `optional` **onDayTouchCancel**: [`DayTouchEventHandler`](../type-aliases/DayTouchEventHandler.md)

Event callback when a day touch event is canceled.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`onDayTouchCancel`](DayPickerBase.md#ondaytouchcancel)

#### Source

[src/types/DayPickerBase.ts:309](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L309)

***

### onDayTouchEnd?

> `optional` **onDayTouchEnd**: [`DayTouchEventHandler`](../type-aliases/DayTouchEventHandler.md)

Event callback when a day touch event ends.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`onDayTouchEnd`](DayPickerBase.md#ondaytouchend)

#### Source

[src/types/DayPickerBase.ts:311](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L311)

***

### onDayTouchMove?

> `optional` **onDayTouchMove**: [`DayTouchEventHandler`](../type-aliases/DayTouchEventHandler.md)

Event callback when a day touch event moves.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`onDayTouchMove`](DayPickerBase.md#ondaytouchmove)

#### Source

[src/types/DayPickerBase.ts:313](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L313)

***

### onDayTouchStart?

> `optional` **onDayTouchStart**: [`DayTouchEventHandler`](../type-aliases/DayTouchEventHandler.md)

Event callback when a day touch event starts.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`onDayTouchStart`](DayPickerBase.md#ondaytouchstart)

#### Source

[src/types/DayPickerBase.ts:315](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L315)

***

### onMonthChange?

> `optional` **onMonthChange**: [`MonthChangeEventHandler`](../type-aliases/MonthChangeEventHandler.md)

Event fired when the user navigates between months.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`onMonthChange`](DayPickerBase.md#onmonthchange)

#### Source

[src/types/DayPickerBase.ts:95](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L95)

***

### onNextClick?

> `optional` **onNextClick**: [`MonthChangeEventHandler`](../type-aliases/MonthChangeEventHandler.md)

Event callback fired when the next month button is clicked.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`onNextClick`](DayPickerBase.md#onnextclick)

#### Source

[src/types/DayPickerBase.ts:279](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L279)

***

### onPrevClick?

> `optional` **onPrevClick**: [`MonthChangeEventHandler`](../type-aliases/MonthChangeEventHandler.md)

Event callback fired when the previous month button is clicked.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`onPrevClick`](DayPickerBase.md#onprevclick)

#### Source

[src/types/DayPickerBase.ts:281](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L281)

***

### onSelect?

> `optional` **onSelect**: [`SelectRangeEventHandler`](../type-aliases/SelectRangeEventHandler.md)

Event fired when a range (or a part of the range) is selected.

#### Source

[src/types/DayPickerRange.ts:14](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerRange.ts#L14)

***

### onWeekNumberClick?

> `optional` **onWeekNumberClick**: [`WeekNumberClickEventHandler`](../type-aliases/WeekNumberClickEventHandler.md)

Event callback fired when the week number is clicked. Requires
`showWeekNumbers` set.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`onWeekNumberClick`](DayPickerBase.md#onweeknumberclick)

#### Source

[src/types/DayPickerBase.ts:286](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L286)

***

### pagedNavigation?

> `optional` **pagedNavigation**: `boolean`

Paginate the month navigation displaying the [numberOfMonths](DayPickerBase.md#numberofmonths) at time.

#### Default Value

```ts
false
```

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`pagedNavigation`](DayPickerBase.md#pagednavigation)

#### Source

[src/types/DayPickerBase.ts:125](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L125)

***

### reverseMonths?

> `optional` **reverseMonths**: `boolean`

Render the months in reversed order (when [numberOfMonths](DayPickerBase.md#numberofmonths) is greater
than `1`) to display the most recent month first.

#### Default Value

```ts
false
```

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`reverseMonths`](DayPickerBase.md#reversemonths)

#### Source

[src/types/DayPickerBase.ts:132](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L132)

***

### selected?

> `optional` **selected**: [`DateRange`](../type-aliases/DateRange.md)

The selected range of days.

#### Overrides

[`DayPickerBase`](DayPickerBase.md) . [`selected`](DayPickerBase.md#selected)

#### Source

[src/types/DayPickerRange.ts:12](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerRange.ts#L12)

***

### showOutsideDays?

> `optional` **showOutsideDays**: `boolean`

Show the outside days. An outside day is a day falling in the next or the
previous month.

#### Default Value

```ts
false
```

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`showOutsideDays`](DayPickerBase.md#showoutsidedays)

#### Source

[src/types/DayPickerBase.ts:165](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L165)

***

### showWeekNumber?

> `optional` **showWeekNumber**: `boolean`

Show the week numbers column. Weeks are numbered according to the local
week index.

- To use ISO week numbering, use the [ISOWeek](DayPickerBase.md#isoweek) prop.
- To change how the week numbers are displayed, use the [Formatters](../type-aliases/Formatters.md)
  prop.

#### Default Value

```ts
false
```

#### See

[ISOWeek](DayPickerBase.md#isoweek) , [weekStartsOn](DayPickerBase.md#weekstartson) and [firstWeekContainsDate](DayPickerBase.md#firstweekcontainsdate).

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`showWeekNumber`](DayPickerBase.md#showweeknumber)

#### Source

[src/types/DayPickerBase.ts:177](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L177)

***

### style?

> `optional` **style**: `CSSProperties`

Style to apply to the container element.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`style`](DayPickerBase.md#style)

#### Source

[src/types/DayPickerBase.ts:67](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L67)

***

### styles?

> `optional` **styles**: `Partial`\<`Omit` \<[`StyledElement`](../type-aliases/StyledElement.md)\<`CSSProperties`\>, [`InternalModifiersElement`](../type-aliases/InternalModifiersElement.md)\>\>

Change the inline styles of the HTML elements.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`styles`](DayPickerBase.md#styles)

#### Source

[src/types/DayPickerBase.ts:69](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L69)

***

### title?

> `optional` **title**: `string`

Add a `title` attribute to the container element.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`title`](DayPickerBase.md#title)

#### Source

[src/types/DayPickerBase.ts:273](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L273)

***

### toDate?

> `optional` **toDate**: `Date`

The latest day to end the month navigation.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`toDate`](DayPickerBase.md#todate)

#### Source

[src/types/DayPickerBase.ts:105](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L105)

***

### toMonth?

> `optional` **toMonth**: `Date`

The latest month to end the month navigation.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`toMonth`](DayPickerBase.md#tomonth)

#### Source

[src/types/DayPickerBase.ts:109](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L109)

***

### toYear?

> `optional` **toYear**: `number`

The latest year to end the month navigation.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`toYear`](DayPickerBase.md#toyear)

#### Source

[src/types/DayPickerBase.ts:113](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L113)

***

### today?

> `optional` **today**: `Date`

The today’s date. Default is the current date. This Date will get the
`today` modifier to style the day.

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`today`](DayPickerBase.md#today)

#### Source

[src/types/DayPickerBase.ts:237](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L237)

***

### weekStartsOn?

> `optional` **weekStartsOn**: `0` \| `2` \| `1` \| `3` \| `4` \| `5` \| `6`

The index of the first day of the week (0 - Sunday). Overrides the locale's
one.

#### See

[ISOWeek](DayPickerBase.md#isoweek) .

#### Inherited from

[`DayPickerBase`](DayPickerBase.md) . [`weekStartsOn`](DayPickerBase.md#weekstartson)

#### Source

[src/types/DayPickerBase.ts:184](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L184)
