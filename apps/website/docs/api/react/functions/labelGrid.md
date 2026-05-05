# Function: labelGrid()

> **labelGrid**(`date`, `options?`, `dateLib?`): `string`

Defined in: [packages/react-day-picker/src/labels/labelGrid.ts:15](https://github.com/gpbl/react-day-picker/blob/88d4318764b878667a386ffb8b3f9683358c8564/packages/react-day-picker/src/labels/labelGrid.ts#L15)

Generates the ARIA label for the month grid, which is announced when entering
the grid.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The date representing the month. |
| `options?` | [`DateLibOptions`](../interfaces/DateLibOptions.md) | Optional configuration for the date formatting library. |
| `dateLib?` | [`DateLib`](../classes/DateLib.md) | An optional instance of the date formatting library. |

## Returns

`string`

The ARIA label for the month grid.

## Default Value

```ts
Locale-specific month/year order (e.g., "November 2022").
```

## See

https://daypicker.dev/docs/translation#aria-labels
