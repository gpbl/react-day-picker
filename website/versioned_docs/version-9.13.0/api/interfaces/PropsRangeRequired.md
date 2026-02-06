# Interface: PropsRangeRequired

Defined in: [src/types/props.ts:591](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L591)

The props when the range selection is required.

## See

https://daypicker.dev/docs/selection-modes#range-mode

## Properties

### disabled?

> `optional` **disabled**: [`Matcher`](../type-aliases/Matcher.md) \| [`Matcher`](../type-aliases/Matcher.md)[]

Defined in: [src/types/props.ts:600](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L600)

Apply the `disabled` modifier to the matching days. Disabled days cannot be
selected when in a selection mode is set.

#### See

https://daypicker.dev/docs/selection-modes#disabled

***

### excludeDisabled?

> `optional` **excludeDisabled**: `boolean`

Defined in: [src/types/props.ts:606](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L606)

When `true`, the range will reset when including a disabled day.

#### Since

V9.0.2

***

### max?

> `optional` **max**: `number`

Defined in: [src/types/props.ts:614](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L614)

The maximum number of days to include in the range.

***

### min?

> `optional` **min**: `number`

Defined in: [src/types/props.ts:612](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L612)

The minimum number of days to include in the range.

***

### mode

> **mode**: `"range"`

Defined in: [src/types/props.ts:592](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L592)

***

### onSelect?

> `optional` **onSelect**: [`OnSelectHandler`](../type-aliases/OnSelectHandler.md)\<[`DateRange`](../type-aliases/DateRange.md)\>

Defined in: [src/types/props.ts:610](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L610)

Event handler when a range is selected.

***

### required

> **required**: `true`

Defined in: [src/types/props.ts:593](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L593)

***

### selected

> **selected**: [`DateRange`](../type-aliases/DateRange.md) \| `undefined`

Defined in: [src/types/props.ts:608](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L608)

The selected range.
