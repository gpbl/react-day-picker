# Function: labelGrid()

> **labelGrid**(`date`, `options?`, `dateLib?`): `string`

Defined in: [src/labels/labelGrid.ts:15](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/labels/labelGrid.ts#L15)

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
