# Function: rangeIncludesDate()

> **rangeIncludesDate**(`range`, `date`, `excludeEnds`, `dateLib`): `boolean`

Defined in: [src/utils/rangeIncludesDate.ts:15](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/utils/rangeIncludesDate.ts#L15)

Checks if a given date is within a specified date range.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `range` | [`DateRange`](../type-aliases/DateRange.md) | `undefined` | The date range to check against. |
| `date` | `Date` | `undefined` | The date to check. |
| `excludeEnds` | `boolean` | `false` | If `true`, the range's start and end dates are excluded. |
| `dateLib` | [`DateLib`](../classes/DateLib.md) | `defaultDateLib` | The date utility library instance. |

## Returns

`boolean`

`true` if the date is within the range, otherwise `false`.

## Since

9.0.0
