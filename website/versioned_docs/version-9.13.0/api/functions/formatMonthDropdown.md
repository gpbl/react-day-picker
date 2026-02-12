# Function: formatMonthDropdown()

> **formatMonthDropdown**(`month`, `dateLib`): `string`

Defined in: [src/formatters/formatMonthDropdown.ts:14](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/formatters/formatMonthDropdown.ts#L14)

Formats the month for the dropdown option label.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `month` | `Date` | `undefined` | The date representing the month. |
| `dateLib` | [`DateLib`](../classes/DateLib.md) | `defaultDateLib` | The date library to use for formatting. Defaults to `defaultDateLib`. |

## Returns

`string`

The formatted month name as a string.

## Default Value

```ts
The localized full month name.
```

## See

https://daypicker.dev/docs/translation#custom-formatters
