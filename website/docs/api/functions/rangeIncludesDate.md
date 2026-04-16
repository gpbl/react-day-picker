# Function: rangeIncludesDate()

> **rangeIncludesDate**(`range`, `date`, `excludeEnds?`, `dateLib?`): `boolean`

Defined in: [src/utils/rangeIncludesDate.ts:15](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/utils/rangeIncludesDate.ts#L15)

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
