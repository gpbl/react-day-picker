# Function: labelWeekNumber()

> **labelWeekNumber**(`weekNumber`, `_options?`): `string`

Defined in: [src/labels/labelWeekNumber.ts:13](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/labels/labelWeekNumber.ts#L13)

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
