# Function: formatWeekNumber()

> **formatWeekNumber**(`weekNumber`, `dateLib?`): `string`

Defined in: [packages/react-day-picker/src/formatters/formatWeekNumber.ts:14](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/formatters/formatWeekNumber.ts#L14)

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
