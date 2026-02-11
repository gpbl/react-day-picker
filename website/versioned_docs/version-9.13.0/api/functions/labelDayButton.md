# Function: labelDayButton()

> **labelDayButton**(`date`, `modifiers`, `options?`, `dateLib?`): `string`

Defined in: [src/labels/labelDayButton.ts:19](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/labels/labelDayButton.ts#L19)

Generates the ARIA label for a day button.

Use the `modifiers` argument to provide additional context for the label,
such as indicating if the day is "today" or "selected."

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The date to format. |
| `modifiers` | [`Modifiers`](../type-aliases/Modifiers.md) | The modifiers providing context for the day. |
| `options?` | [`DateLibOptions`](../interfaces/DateLibOptions.md) | Optional configuration for the date formatting library. |
| `dateLib?` | [`DateLib`](../classes/DateLib.md) | An optional instance of the date formatting library. |

## Returns

`string`

The ARIA label for the day button.

## Default Value

```ts
The formatted date.
```

## See

https://daypicker.dev/docs/translation#aria-labels
