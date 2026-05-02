# Function: DayPicker()

> **DayPicker**(`props`): `Element`

Defined in: [packages/hebrew/src/hebrew/index.tsx:24](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/hebrew/src/hebrew/index.tsx#L24)

Render the Hebrew (lunisolar) calendar.

Months follow the Hebrew lunisolar cycle with leap years containing Adar I
and Adar II. Weeks remain Sunday–Saturday.

Defaults:

- `locale`: `he`
- `dir`: `rtl`
- `numerals`: `latn`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `DayPickerProps` & \{ `dateLib?`: `Partial`\<`DateLib`\>; `dir?`: `string`; `locale?`: `Locale`; `numerals?`: Numerals \| undefined; \} |

## Returns

`Element`
