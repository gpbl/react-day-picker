# @daypicker/ethiopic

Ethiopic calendar support for [React DayPicker](https://daypicker.dev).

This package renders DayPicker with Ethiopic calendar month and year logic. It
uses the Amharic locale and Ethiopic numerals by default.

## Installation

```bash
npm install react-day-picker @daypicker/ethiopic
```

## Usage

```tsx
import { DayPicker } from "@daypicker/ethiopic";
import "react-day-picker/style.css";

export function EthiopicCalendar() {
  return <DayPicker mode="single" />;
}
```

The package also exports the `amET` and `enUS` locales, plus `getDateLib` for
advanced date-library customization.

## Peer Dependencies

`@daypicker/ethiopic` is an add-on for `react-day-picker`. Your app must also
install `react` and `react-day-picker`.

## Documentation

- [Ethiopic calendar guide](https://daypicker.dev/localization/ethiopic)
- [React DayPicker documentation](https://daypicker.dev)
- [Issues and support](https://github.com/gpbl/react-day-picker/issues)

## License

MIT. See [LICENSE](./LICENSE).
