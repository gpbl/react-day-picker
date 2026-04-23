# @daypicker/hijri

Hijri calendar support for [React DayPicker](https://daypicker.dev).

This package renders DayPicker with Umm al-Qura Hijri calendar month and year
logic. It uses the Arabic Saudi Arabia locale, Arabic-Indic numerals, and
right-to-left direction by default.

## Installation

```bash
npm install react-day-picker @daypicker/hijri
```

## Usage

```tsx
import { DayPicker } from "@daypicker/hijri";
import "react-day-picker/style.css";

export function HijriCalendar() {
  return <DayPicker mode="single" />;
}
```

The package also exports the `arSA` and `enUS` locales, plus `getDateLib` for
advanced date-library customization.

## Peer Dependencies

`@daypicker/hijri` is an add-on for `react-day-picker`. Your app must also
install `react` and `react-day-picker`.

## Documentation

- [Hijri calendar guide](https://daypicker.dev/localization/hijri)
- [React DayPicker documentation](https://daypicker.dev)
- [Issues and support](https://github.com/gpbl/react-day-picker/issues)

## License

MIT. See [LICENSE](./LICENSE).
