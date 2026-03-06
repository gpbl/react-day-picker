# Function: labelWeekday()

> **labelWeekday**(`date`, `options?`, `dateLib?`): `string`

Defined in: [src/labels/labelWeekday.ts:14](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/labels/labelWeekday.ts#L14)

Generates the ARIA label for a weekday column header.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The date representing the weekday. |
| `options?` | [`DateLibOptions`](../interfaces/DateLibOptions.md) | Optional configuration for the date formatting library. |
| `dateLib?` | [`DateLib`](../classes/DateLib.md) | An optional instance of the date formatting library. |

## Returns

`string`

The ARIA label for the weekday column header.

## Default Value

`"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"`

## See

https://daypicker.dev/docs/translation#aria-labels
