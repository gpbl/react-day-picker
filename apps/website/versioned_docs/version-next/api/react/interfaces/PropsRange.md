# Interface: PropsRange

Defined in: [packages/react-day-picker/src/types/props.ts:636](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/props.ts#L636)

The props when the range selection is optional.

## See

https://daypicker.dev/docs/selection-modes#range-mode

## Properties

### disabled?

> `optional` **disabled?**: [`Matcher`](../type-aliases/Matcher.md) \| [`Matcher`](../type-aliases/Matcher.md)[]

Defined in: [packages/react-day-picker/src/types/props.ts:645](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/props.ts#L645)

Apply the `disabled` modifier to the matching days. Disabled days cannot be
selected when in a selection mode is set.

#### See

https://daypicker.dev/docs/selection-modes#disabled

***

### excludeDisabled?

> `optional` **excludeDisabled?**: `boolean`

Defined in: [packages/react-day-picker/src/types/props.ts:652](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/props.ts#L652)

When `true`, the range will reset when including a disabled day.

#### Since

9.0.2

#### See

https://daypicker.dev/docs/selection-modes#exclude-disabled

***

### max?

> `optional` **max?**: `number`

Defined in: [packages/react-day-picker/src/types/props.ts:670](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/props.ts#L670)

The maximum number of days to include in the range.

***

### min?

> `optional` **min?**: `number`

Defined in: [packages/react-day-picker/src/types/props.ts:668](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/props.ts#L668)

The minimum number of days to include in the range.

***

### mode

> **mode**: `"range"`

Defined in: [packages/react-day-picker/src/types/props.ts:637](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/props.ts#L637)

***

### onSelect?

> `optional` **onSelect?**: [`OnSelectHandler`](../type-aliases/OnSelectHandler.md)\<[`DateRange`](../type-aliases/DateRange.md) \| `undefined`\>

Defined in: [packages/react-day-picker/src/types/props.ts:666](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/props.ts#L666)

Event handler when the selection changes.

***

### required?

> `optional` **required?**: `false`

Defined in: [packages/react-day-picker/src/types/props.ts:638](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/props.ts#L638)

***

### resetOnSelect?

> `optional` **resetOnSelect?**: `boolean`

Defined in: [packages/react-day-picker/src/types/props.ts:662](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/props.ts#L662)

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

> `optional` **selected?**: [`DateRange`](../type-aliases/DateRange.md)

Defined in: [packages/react-day-picker/src/types/props.ts:664](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/props.ts#L664)

The selected range.
