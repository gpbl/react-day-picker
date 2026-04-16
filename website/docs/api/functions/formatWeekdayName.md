# Function: formatWeekdayName()

> **formatWeekdayName**(`weekday`, `options?`, `dateLib?`): `string`

Defined in: [src/formatters/formatWeekdayName.ts:15](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/formatters/formatWeekdayName.ts#L15)

Formats the name of a weekday to be displayed in the weekdays header.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `weekday` | `Date` | The date representing the weekday. |
| `options?` | [`DateLibOptions`](../interfaces/DateLibOptions.md) | Configuration options for the date library. |
| `dateLib?` | [`DateLib`](../classes/DateLib.md) | The date library to use for formatting. If not provided, a new instance is created. |

## Returns

`string`

The formatted weekday name as a string.

## Default Value

`cccccc` (e.g., "Mo" for Monday).

## See

https://daypicker.dev/docs/translation#custom-formatters
