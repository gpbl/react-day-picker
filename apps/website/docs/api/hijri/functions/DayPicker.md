# Function: DayPicker()

> **DayPicker**(`props`): `Element`

Defined in: [packages/hijri/src/hijri/index.tsx:38](https://github.com/gpbl/react-day-picker/blob/88d4318764b878667a386ffb8b3f9683358c8564/packages/hijri/src/hijri/index.tsx#L38)

Render the Hijri (Umm al-Qura) calendar.

Defaults:

- `locale`: `ar-SA`
- `dir`: `rtl`
- `numerals`: `arab`
- `startMonth`: `1924-08-01`
- `endMonth`: `2077-11-16`

Out-of-range date props are clamped to the supported Umm al-Qura conversion
range, preventing runtime conversion errors.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `DayPickerProps` & \{ `dateLib?`: `Partial`\<`DateLib`\>; `dir?`: `string`; `locale?`: `Locale`; `numerals?`: Numerals \| undefined; \} |

## Returns

`Element`
