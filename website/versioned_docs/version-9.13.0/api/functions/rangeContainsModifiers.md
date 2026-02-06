# Function: rangeContainsModifiers()

> **rangeContainsModifiers**(`range`, `modifiers`, `dateLib`): `boolean`

Defined in: [src/utils/rangeContainsModifiers.ts:27](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/utils/rangeContainsModifiers.ts#L27)

Checks if a date range contains dates that match the given modifiers.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `range` | \{ `from`: `Date`; `to`: `Date`; \} | `undefined` | The date range to check. |
| `range.from` | `Date` | `undefined` | - |
| `range.to` | `Date` | `undefined` | - |
| `modifiers` | [`Matcher`](../type-aliases/Matcher.md) \| [`Matcher`](../type-aliases/Matcher.md)[] | `undefined` | The modifiers to match against. |
| `dateLib` | [`DateLib`](../classes/DateLib.md) | `defaultDateLib` | The date utility library instance. |

## Returns

`boolean`

`true` if the range contains matching dates, otherwise `false`.

## Since

9.2.2
