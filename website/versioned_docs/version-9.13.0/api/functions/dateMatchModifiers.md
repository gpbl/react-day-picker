# Function: dateMatchModifiers()

> **dateMatchModifiers**(`date`, `matchers`, `dateLib`): `boolean`

Defined in: [src/utils/dateMatchModifiers.ts:23](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/utils/dateMatchModifiers.ts#L23)

Checks if a given date matches at least one of the specified [Matcher](../type-aliases/Matcher.md).

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `date` | `Date` | `undefined` | The date to check. |
| `matchers` | [`Matcher`](../type-aliases/Matcher.md) \| [`Matcher`](../type-aliases/Matcher.md)[] | `undefined` | The matchers to check against. |
| `dateLib` | [`DateLib`](../classes/DateLib.md) | `defaultDateLib` | The date utility library instance. |

## Returns

`boolean`

`true` if the date matches any of the matchers, otherwise `false`.
