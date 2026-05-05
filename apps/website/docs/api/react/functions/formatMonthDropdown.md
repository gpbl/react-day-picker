# Function: formatMonthDropdown()

> **formatMonthDropdown**(`month`, `dateLib?`): `string`

Defined in: [packages/react-day-picker/src/formatters/formatMonthDropdown.ts:14](https://github.com/gpbl/react-day-picker/blob/88d4318764b878667a386ffb8b3f9683358c8564/packages/react-day-picker/src/formatters/formatMonthDropdown.ts#L14)

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
