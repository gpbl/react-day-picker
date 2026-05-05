# Function: DayPicker()

> **DayPicker**(`props`): `Element`

Defined in: [packages/buddhist/src/buddhist/index.tsx:38](https://github.com/gpbl/react-day-picker/blob/88d4318764b878667a386ffb8b3f9683358c8564/packages/buddhist/src/buddhist/index.tsx#L38)

Render the Buddhist (Thai) calendar.

Months/weeks are Gregorian; displayed year is Buddhist Era (BE = CE + 543).
Thai digits are used by default.

Defaults:

- `locale`: `th`
- `dir`: `ltr`
- `numerals`: `thai`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `DayPickerProps` & \{ `dateLib?`: `Partial`\<`DateLib`\>; `dir?`: `string`; `locale?`: `Locale`; `numerals?`: Numerals \| undefined; \} |

## Returns

`Element`
