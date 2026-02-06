# Function: formatCaption()

> **formatCaption**(`month`, `options?`, `dateLib?`): `string`

Defined in: [src/formatters/formatCaption.ts:15](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/formatters/formatCaption.ts#L15)

Formats the caption of the month.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `month` | `Date` | The date representing the month. |
| `options?` | [`DateLibOptions`](../interfaces/DateLibOptions.md) | Configuration options for the date library. |
| `dateLib?` | [`DateLib`](../classes/DateLib.md) | The date library to use for formatting. If not provided, a new instance is created. |

## Returns

`string`

The formatted caption as a string.

## Default Value

```ts
Locale-specific month/year order (e.g., "November 2022").
```

## See

https://daypicker.dev/docs/translation#custom-formatters
