# Interface: PropsRange

Defined in: [src/types/props.ts:635](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/props.ts#L635)

The props when the range selection is optional.

## See

https://daypicker.dev/docs/selection-modes#range-mode

## Properties

### disabled?

> `optional` **disabled**: [`Matcher`](../type-aliases/Matcher.md) \| [`Matcher`](../type-aliases/Matcher.md)[]

Defined in: [src/types/props.ts:644](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/props.ts#L644)

Apply the `disabled` modifier to the matching days. Disabled days cannot be
selected when in a selection mode is set.

#### See

https://daypicker.dev/docs/selection-modes#disabled

***

### excludeDisabled?

> `optional` **excludeDisabled**: `boolean`

Defined in: [src/types/props.ts:651](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/props.ts#L651)

When `true`, the range will reset when including a disabled day.

#### Since

9.0.2

#### See

https://daypicker.dev/docs/selection-modes#exclude-disabled

***

### max?

> `optional` **max**: `number`

Defined in: [src/types/props.ts:669](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/props.ts#L669)

The maximum number of days to include in the range.

***

### min?

> `optional` **min**: `number`

Defined in: [src/types/props.ts:667](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/props.ts#L667)

The minimum number of days to include in the range.

***

### mode

> **mode**: `"range"`

Defined in: [src/types/props.ts:636](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/props.ts#L636)

***

### onSelect?

> `optional` **onSelect**: [`OnSelectHandler`](../type-aliases/OnSelectHandler.md)\<[`DateRange`](../type-aliases/DateRange.md) \| `undefined`\>

Defined in: [src/types/props.ts:665](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/props.ts#L665)

Event handler when the selection changes.

***

### required?

> `optional` **required**: `false`

Defined in: [src/types/props.ts:637](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/props.ts#L637)

***

### resetOnSelect?

> `optional` **resetOnSelect**: `boolean`

Defined in: [src/types/props.ts:661](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/props.ts#L661)

When `true`, clicking a day starts a new range if there is no current start
date or if a range is already complete. In those cases, the clicked day
becomes the start of the new range. When `required` is `false`, clicking
the same day of a single-day range clears the selection.

#### Since

9.14

#### See

https://daypicker.dev/selections/range-mode#reset-selection

***

### selected?

> `optional` **selected**: [`DateRange`](../type-aliases/DateRange.md)

Defined in: [src/types/props.ts:663](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/props.ts#L663)

The selected range.
