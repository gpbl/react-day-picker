# @daypicker/persian

Persian calendar support for [React DayPicker](https://daypicker.dev).

This package renders DayPicker with Jalali calendar month and year logic. It
uses the Persian Iran locale, Eastern Arabic-Indic numerals, and right-to-left
direction by default.

## Installation

```bash
npm install react-day-picker @daypicker/persian
```

## Usage

```tsx
import { DayPicker } from "@daypicker/persian";
import "react-day-picker/style.css";

export function PersianCalendar() {
  return <DayPicker mode="single" />;
}
```

The package also exports the `faIR`, `enUS`, `faIRJalali`, and `enUSJalali`
locales, plus `getDateLib` for advanced date-library customization.

## Peer Dependencies

`@daypicker/persian` is an add-on for `react-day-picker`. Your app must also
install `react` and `react-day-picker`.

## Documentation

- [Persian calendar guide](https://daypicker.dev/localization/persian)
- [React DayPicker documentation](https://daypicker.dev)
- [Issues and support](https://github.com/gpbl/react-day-picker/issues)

## License

MIT. See [LICENSE](./LICENSE).
