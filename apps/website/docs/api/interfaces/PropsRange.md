# Interface: PropsRange

Defined in: [src/types/props.ts:734](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/props.ts#L734)

The props when the range selection is optional.

## See

https://daypicker.dev/docs/selection-modes#range-mode

## Properties

### disabled?

> `optional` **disabled**: [`Matcher`](../type-aliases/Matcher.md) \| [`Matcher`](../type-aliases/Matcher.md)[]

Defined in: [src/types/props.ts:743](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/props.ts#L743)

Apply the `disabled` modifier to the matching days. Disabled days cannot be
selected when in a selection mode is set.

#### See

https://daypicker.dev/docs/selection-modes#disabled

***

### excludeDisabled?

> `optional` **excludeDisabled**: `boolean`

Defined in: [src/types/props.ts:750](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/props.ts#L750)

When `true`, the range will reset when including a disabled day.

#### Since

9.0.2

#### See

https://daypicker.dev/docs/selection-modes#exclude-disabled

***

### max?

> `optional` **max**: `number`

Defined in: [src/types/props.ts:768](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/props.ts#L768)

The maximum number of days to include in the range.

***

### min?

> `optional` **min**: `number`

Defined in: [src/types/props.ts:766](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/props.ts#L766)

The minimum number of days to include in the range.

***

### mode

> **mode**: `"range"`

Defined in: [src/types/props.ts:735](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/props.ts#L735)

***

### onSelect?

> `optional` **onSelect**: [`OnSelectHandler`](../type-aliases/OnSelectHandler.md)\<[`DateRange`](../type-aliases/DateRange.md) \| `undefined`\>

Defined in: [src/types/props.ts:764](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/props.ts#L764)

Event handler when the selection changes.

***

### required?

> `optional` **required**: `false`

Defined in: [src/types/props.ts:736](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/props.ts#L736)

***

### resetOnSelect?

> `optional` **resetOnSelect**: `boolean`

Defined in: [src/types/props.ts:760](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/props.ts#L760)

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

Defined in: [src/types/props.ts:762](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/props.ts#L762)

The selected range.
