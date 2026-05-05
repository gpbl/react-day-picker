# Function: formatDay()

> **formatDay**(`date`, `options?`, `dateLib?`): `string`

Defined in: [packages/react-day-picker/src/formatters/formatDay.ts:15](https://github.com/gpbl/react-day-picker/blob/88d4318764b878667a386ffb8b3f9683358c8564/packages/react-day-picker/src/formatters/formatDay.ts#L15)

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
