# Function: rangeContainsDayOfWeek()

> **rangeContainsDayOfWeek**(`range`, `dayOfWeek`, `dateLib`): `boolean`

Defined in: [src/utils/rangeContainsDayOfWeek.ts:15](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/utils/rangeContainsDayOfWeek.ts#L15)

Checks if a date range contains one or more specified days of the week.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `range` | \{ `from`: `Date`; `to`: `Date`; \} | `undefined` | The date range to check. |
| `range.from` | `Date` | `undefined` | - |
| `range.to` | `Date` | `undefined` | - |
| `dayOfWeek` | `number` \| `number`[] | `undefined` | The day(s) of the week to check for (`0-6`, where `0` is Sunday). |
| `dateLib` | [`DateLib`](../classes/DateLib.md) | `defaultDateLib` | The date utility library instance. |

## Returns

`boolean`

`true` if the range contains the specified day(s) of the week,
  otherwise `false`.

## Since

9.2.2
