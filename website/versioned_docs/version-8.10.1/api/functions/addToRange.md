# Function: addToRange()

> **addToRange**(`day`, `range`?): [`DateRange`](../type-aliases/DateRange.md) \| `undefined`

Add a day to an existing range.

The returned range takes in account the `undefined` values and if the added
day is already present in the range.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `day` | `Date` |
| `range`? | [`DateRange`](../type-aliases/DateRange.md) |

## Returns

[`DateRange`](../type-aliases/DateRange.md) \| `undefined`

## Source

[src/contexts/SelectRange/utils/addToRange.ts:11](https://github.com/gpbl/react-day-picker/blob/9ad13dc72fff814dcf720a62f6e3b5ea38e8af6d/src/contexts/SelectRange/utils/addToRange.ts#L11)
