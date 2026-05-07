# Interface: PropsRangeRequired

Defined in: [packages/react-day-picker/src/types/props.ts:596](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/props.ts#L596)

The props when the range selection is required.

## See

https://daypicker.dev/docs/selection-modes#range-mode

## Properties

### disabled?

> `optional` **disabled?**: [`Matcher`](../type-aliases/Matcher.md) \| [`Matcher`](../type-aliases/Matcher.md)[]

Defined in: [packages/react-day-picker/src/types/props.ts:605](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/props.ts#L605)

Apply the `disabled` modifier to the matching days. Disabled days cannot be
selected when in a selection mode is set.

#### See

https://daypicker.dev/docs/selection-modes#disabled

***

### excludeDisabled?

> `optional` **excludeDisabled?**: `boolean`

Defined in: [packages/react-day-picker/src/types/props.ts:611](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/props.ts#L611)

When `true`, the range will reset when including a disabled day.

#### Since

9.0.2

***

### max?

> `optional` **max?**: `number`

Defined in: [packages/react-day-picker/src/types/props.ts:628](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/props.ts#L628)

The maximum number of days to include in the range.

***

### min?

> `optional` **min?**: `number`

Defined in: [packages/react-day-picker/src/types/props.ts:626](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/props.ts#L626)

The minimum number of days to include in the range.

***

### mode

> **mode**: `"range"`

Defined in: [packages/react-day-picker/src/types/props.ts:597](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/props.ts#L597)

***

### onSelect?

> `optional` **onSelect?**: [`OnSelectHandler`](../type-aliases/OnSelectHandler.md)\<[`DateRange`](../type-aliases/DateRange.md)\>

Defined in: [packages/react-day-picker/src/types/props.ts:624](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/props.ts#L624)

Event handler when a range is selected.

***

### required

> **required**: `true`

Defined in: [packages/react-day-picker/src/types/props.ts:598](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/props.ts#L598)

***

### resetOnSelect?

> `optional` **resetOnSelect?**: `boolean`

Defined in: [packages/react-day-picker/src/types/props.ts:620](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/props.ts#L620)

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

Defined in: [packages/react-day-picker/src/types/props.ts:622](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/props.ts#L622)

The selected range.
