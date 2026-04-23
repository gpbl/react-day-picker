# @daypicker/hebrew

Hebrew calendar support for [React DayPicker](https://daypicker.dev).

This package renders DayPicker with Hebrew lunisolar calendar month and year
logic, including leap years with Adar I and Adar II. It uses the Hebrew locale
and right-to-left direction by default.

## Installation

```bash
npm install react-day-picker @daypicker/hebrew
```

## Usage

```tsx
import { DayPicker } from "@daypicker/hebrew";
import "react-day-picker/style.css";

export function HebrewCalendar() {
  return <DayPicker mode="single" />;
}
```

The package also exports the `he` and `enUS` locales, plus `getDateLib` for
advanced date-library customization.

## Peer Dependencies

`@daypicker/hebrew` is an add-on for `react-day-picker`. Your app must also
install `react` and `react-day-picker`.

## Documentation

- [Hebrew calendar guide](https://daypicker.dev/localization/hebrew)
- [React DayPicker documentation](https://daypicker.dev)
- [Issues and support](https://github.com/gpbl/react-day-picker/issues)

## License

MIT. See [LICENSE](./LICENSE).
