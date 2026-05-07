# Function: DayPicker()

> **DayPicker**(`props`): `Element`

Defined in: [packages/persian/src/index.tsx:33](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/persian/src/index.tsx#L33)

Renders the Persian calendar using the DayPicker component.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | `DayPickerProps` & \{ `dateLib?`: `Partial`\<`DateLib`\>; `dir?`: `string`; `locale?`: `DayPickerLocale`; `numerals?`: Numerals \| undefined; \} | The props for the Persian calendar, including locale, text direction, date library, and numeral system. |

## Returns

`Element`

The Persian calendar component.

## Default Value

- `locale`: `faIR`
- `dir`: `rtl`
- `dateLib`: `jalaliDateLib` from `date-fns-jalali`
- `numerals`: `arabext` (Eastern Arabic-Indic)

## See

https://daypicker.dev/docs/localization#persian-calendar
