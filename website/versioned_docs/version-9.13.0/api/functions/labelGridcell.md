# Function: labelGridcell()

> **labelGridcell**(`date`, `modifiers?`, `options?`, `dateLib?`): `string`

Defined in: [src/labels/labelGridcell.ts:15](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/labels/labelGridcell.ts#L15)

Generates the label for a day grid cell when the calendar is not interactive.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The date to format. |
| `modifiers?` | [`Modifiers`](../type-aliases/Modifiers.md) | Optional modifiers providing context for the day. |
| `options?` | [`DateLibOptions`](../interfaces/DateLibOptions.md) | Optional configuration for the date formatting library. |
| `dateLib?` | [`DateLib`](../classes/DateLib.md) | An optional instance of the date formatting library. |

## Returns

`string`

The label for the day grid cell.

## See

https://daypicker.dev/docs/translation#aria-labels
