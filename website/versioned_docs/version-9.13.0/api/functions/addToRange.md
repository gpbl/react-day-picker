# Function: addToRange()

> **addToRange**(`date`, `initialRange`, `min`, `max`, `required`, `dateLib`): [`DateRange`](../type-aliases/DateRange.md) \| `undefined`

Defined in: [src/utils/addToRange.ts:17](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/utils/addToRange.ts#L17)

Adds a date to an existing range, considering constraints like minimum and
maximum range size.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `date` | `Date` | `undefined` | The date to add to the range. |
| `initialRange` | [`DateRange`](../type-aliases/DateRange.md) \| `undefined` | `undefined` | The initial range to which the date will be added. |
| `min` | `number` | `0` | The minimum number of days in the range. |
| `max` | `number` | `0` | The maximum number of days in the range. |
| `required` | `boolean` | `false` | Whether the range must always include at least one date. |
| `dateLib` | [`DateLib`](../classes/DateLib.md) | `defaultDateLib` | The date utility library instance. |

## Returns

[`DateRange`](../type-aliases/DateRange.md) \| `undefined`

The updated date range, or `undefined` if the range is cleared.
