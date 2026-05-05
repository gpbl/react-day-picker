# Interface: PropsRangeRequired

Defined in: [src/types/props.ts:694](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/props.ts#L694)

The props when the range selection is required.

## See

https://daypicker.dev/docs/selection-modes#range-mode

## Properties

### disabled?

> `optional` **disabled**: [`Matcher`](../type-aliases/Matcher.md) \| [`Matcher`](../type-aliases/Matcher.md)[]

Defined in: [src/types/props.ts:703](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/props.ts#L703)

Apply the `disabled` modifier to the matching days. Disabled days cannot be
selected when in a selection mode is set.

#### See

https://daypicker.dev/docs/selection-modes#disabled

***

### excludeDisabled?

> `optional` **excludeDisabled**: `boolean`

Defined in: [src/types/props.ts:709](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/props.ts#L709)

When `true`, the range will reset when including a disabled day.

#### Since

9.0.2

***

### max?

> `optional` **max**: `number`

Defined in: [src/types/props.ts:726](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/props.ts#L726)

The maximum number of days to include in the range.

***

### min?

> `optional` **min**: `number`

Defined in: [src/types/props.ts:724](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/props.ts#L724)

The minimum number of days to include in the range.

***

### mode

> **mode**: `"range"`

Defined in: [src/types/props.ts:695](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/props.ts#L695)

***

### onSelect?

> `optional` **onSelect**: [`OnSelectHandler`](../type-aliases/OnSelectHandler.md)\<[`DateRange`](../type-aliases/DateRange.md)\>

Defined in: [src/types/props.ts:722](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/props.ts#L722)

Event handler when a range is selected.

***

### required

> **required**: `true`

Defined in: [src/types/props.ts:696](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/props.ts#L696)

***

### resetOnSelect?

> `optional` **resetOnSelect**: `boolean`

Defined in: [src/types/props.ts:718](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/props.ts#L718)

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

Defined in: [src/types/props.ts:720](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/props.ts#L720)

The selected range.
