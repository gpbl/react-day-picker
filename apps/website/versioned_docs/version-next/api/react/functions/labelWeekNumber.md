# Function: labelWeekNumber()

> **labelWeekNumber**(`weekNumber`, `_options?`): `string`

Defined in: [packages/react-day-picker/src/labels/labelWeekNumber.ts:13](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/labels/labelWeekNumber.ts#L13)

Generates the ARIA label for the week number cell (the first cell in a row).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `weekNumber` | `number` | The number of the week. |
| `_options?` | [`DateLibOptions`](../interfaces/DateLibOptions.md) | - |

## Returns

`string`

The ARIA label for the week number cell.

## Default Value

`Week ${weekNumber}`

## See

https://daypicker.dev/docs/translation#aria-labels
