# Interface: PropsRange

Defined in: [src/types/props.ts:622](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L622)

The props when the range selection is optional.

## See

https://daypicker.dev/docs/selection-modes#range-mode

## Properties

### disabled?

> `optional` **disabled**: [`Matcher`](../type-aliases/Matcher.md) \| [`Matcher`](../type-aliases/Matcher.md)[]

Defined in: [src/types/props.ts:631](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L631)

Apply the `disabled` modifier to the matching days. Disabled days cannot be
selected when in a selection mode is set.

#### See

https://daypicker.dev/docs/selection-modes#disabled

***

### excludeDisabled?

> `optional` **excludeDisabled**: `boolean`

Defined in: [src/types/props.ts:638](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L638)

When `true`, the range will reset when including a disabled day.

#### Since

V9.0.2

#### See

https://daypicker.dev/docs/selection-modes#exclude-disabled

***

### max?

> `optional` **max**: `number`

Defined in: [src/types/props.ts:646](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L646)

The maximum number of days to include in the range.

***

### min?

> `optional` **min**: `number`

Defined in: [src/types/props.ts:644](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L644)

The minimum number of days to include in the range.

***

### mode

> **mode**: `"range"`

Defined in: [src/types/props.ts:623](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L623)

***

### onSelect?

> `optional` **onSelect**: [`OnSelectHandler`](../type-aliases/OnSelectHandler.md)\<[`DateRange`](../type-aliases/DateRange.md) \| `undefined`\>

Defined in: [src/types/props.ts:642](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L642)

Event handler when the selection changes.

***

### required?

> `optional` **required**: `false`

Defined in: [src/types/props.ts:624](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L624)

***

### selected?

> `optional` **selected**: [`DateRange`](../type-aliases/DateRange.md)

Defined in: [src/types/props.ts:640](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/props.ts#L640)

The selected range.
