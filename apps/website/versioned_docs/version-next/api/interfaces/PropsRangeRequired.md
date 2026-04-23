# Interface: PropsRangeRequired

Defined in: [src/types/props.ts:595](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/props.ts#L595)

The props when the range selection is required.

## See

https://daypicker.dev/docs/selection-modes#range-mode

## Properties

### disabled?

> `optional` **disabled**: [`Matcher`](../type-aliases/Matcher.md) \| [`Matcher`](../type-aliases/Matcher.md)[]

Defined in: [src/types/props.ts:604](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/props.ts#L604)

Apply the `disabled` modifier to the matching days. Disabled days cannot be
selected when in a selection mode is set.

#### See

https://daypicker.dev/docs/selection-modes#disabled

***

### excludeDisabled?

> `optional` **excludeDisabled**: `boolean`

Defined in: [src/types/props.ts:610](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/props.ts#L610)

When `true`, the range will reset when including a disabled day.

#### Since

9.0.2

***

### max?

> `optional` **max**: `number`

Defined in: [src/types/props.ts:627](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/props.ts#L627)

The maximum number of days to include in the range.

***

### min?

> `optional` **min**: `number`

Defined in: [src/types/props.ts:625](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/props.ts#L625)

The minimum number of days to include in the range.

***

### mode

> **mode**: `"range"`

Defined in: [src/types/props.ts:596](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/props.ts#L596)

***

### onSelect?

> `optional` **onSelect**: [`OnSelectHandler`](../type-aliases/OnSelectHandler.md)\<[`DateRange`](../type-aliases/DateRange.md)\>

Defined in: [src/types/props.ts:623](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/props.ts#L623)

Event handler when a range is selected.

***

### required

> **required**: `true`

Defined in: [src/types/props.ts:597](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/props.ts#L597)

***

### resetOnSelect?

> `optional` **resetOnSelect**: `boolean`

Defined in: [src/types/props.ts:619](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/props.ts#L619)

When `true`, clicking a day starts a new range if there is no current start
date or if a range is already complete. In those cases, the clicked day
becomes the start of the new range.

#### Since

9.14

#### See

https://daypicker.dev/selections/range-mode#reset-selection

***

### selected

> **selected**: [`DateRange`](../type-aliases/DateRange.md) \| `undefined`

Defined in: [src/types/props.ts:621](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/props.ts#L621)

The selected range.
