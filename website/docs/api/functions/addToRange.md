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

[src/contexts/SelectRange/utils/addToRange.ts:11](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/contexts/SelectRange/utils/addToRange.ts#L11)
