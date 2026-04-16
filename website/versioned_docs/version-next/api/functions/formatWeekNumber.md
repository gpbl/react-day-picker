# Function: formatWeekNumber()

> **formatWeekNumber**(`weekNumber`, `dateLib?`): `string`

Defined in: [src/formatters/formatWeekNumber.ts:14](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/formatters/formatWeekNumber.ts#L14)

Formats the week number.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `weekNumber` | `number` | `undefined` | The week number to format. |
| `dateLib` | [`DateLib`](../classes/DateLib.md) | `defaultDateLib` | The date library to use for formatting. Defaults to `defaultDateLib`. |

## Returns

`string`

The formatted week number as a string.

## Default Value

```ts
The week number as a string, with a leading zero for single-digit numbers.
```

## See

https://daypicker.dev/docs/translation#custom-formatters
