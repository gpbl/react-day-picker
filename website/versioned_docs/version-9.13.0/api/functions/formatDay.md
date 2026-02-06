# Function: formatDay()

> **formatDay**(`date`, `options?`, `dateLib?`): `string`

Defined in: [src/formatters/formatDay.ts:15](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/formatters/formatDay.ts#L15)

Formats the day date shown in the day cell.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The date to format. |
| `options?` | [`DateLibOptions`](../interfaces/DateLibOptions.md) | Configuration options for the date library. |
| `dateLib?` | [`DateLib`](../classes/DateLib.md) | The date library to use for formatting. If not provided, a new instance is created. |

## Returns

`string`

The formatted day as a string.

## Default Value

`d` (e.g., "1").

## See

https://daypicker.dev/docs/translation#custom-formatters
