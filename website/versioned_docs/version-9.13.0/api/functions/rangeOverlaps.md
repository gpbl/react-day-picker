# Function: rangeOverlaps()

> **rangeOverlaps**(`rangeLeft`, `rangeRight`, `dateLib`): `boolean`

Defined in: [src/utils/rangeOverlaps.ts:15](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/utils/rangeOverlaps.ts#L15)

Determines if two date ranges overlap.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `rangeLeft` | \{ `from`: `Date`; `to`: `Date`; \} | `undefined` | The first date range. |
| `rangeLeft.from` | `Date` | `undefined` | - |
| `rangeLeft.to` | `Date` | `undefined` | - |
| `rangeRight` | \{ `from`: `Date`; `to`: `Date`; \} | `undefined` | The second date range. |
| `rangeRight.from` | `Date` | `undefined` | - |
| `rangeRight.to` | `Date` | `undefined` | - |
| `dateLib` | [`DateLib`](../classes/DateLib.md) | `defaultDateLib` | The date utility library instance. |

## Returns

`boolean`

`true` if the ranges overlap, otherwise `false`.

## Since

9.2.2
