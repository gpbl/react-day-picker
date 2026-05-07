# Function: DayPicker()

> **DayPicker**(`props`): `Element`

Defined in: [packages/ethiopic/src/ethiopic/index.tsx:30](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/ethiopic/src/ethiopic/index.tsx#L30)

Render the Ethiopic calendar.

Defaults:

- `locale`: `am-ET` (Amharic) via an Intl-backed date-fns locale
- `numerals`: `geez` (Ethiopic digits)

Notes:

- Weekday names are taken from `Intl.DateTimeFormat(locale.code)`.
- Month names are Amharic by default; they switch to Latin transliteration when
  `locale.code` starts with `en` or when `numerals` is `latn`.
- Time tokens like `hh:mm a` are formatted via `Intl.DateTimeFormat` using the
  provided `locale`.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `DayPickerProps` & \{ `locale?`: `Locale`; `numerals?`: Numerals \| undefined; \} |

## Returns

`Element`

## See

https://daypicker.dev/docs/localization#ethiopic-calendar
