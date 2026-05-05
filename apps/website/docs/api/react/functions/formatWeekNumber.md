# Function: formatWeekNumber()

> **formatWeekNumber**(`weekNumber`, `dateLib?`): `string`

Defined in: [packages/react-day-picker/src/formatters/formatWeekNumber.ts:14](https://github.com/gpbl/react-day-picker/blob/88d4318764b878667a386ffb8b3f9683358c8564/packages/react-day-picker/src/formatters/formatWeekNumber.ts#L14)

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
