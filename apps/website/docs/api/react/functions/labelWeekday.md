# Function: labelWeekday()

> **labelWeekday**(`date`, `options?`, `dateLib?`): `string`

Defined in: [packages/react-day-picker/src/labels/labelWeekday.ts:14](https://github.com/gpbl/react-day-picker/blob/88d4318764b878667a386ffb8b3f9683358c8564/packages/react-day-picker/src/labels/labelWeekday.ts#L14)

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
