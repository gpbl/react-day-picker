# @daypicker/buddhist

Buddhist calendar support for [React DayPicker](https://daypicker.dev).

This package renders DayPicker with Buddhist Era years. The calendar keeps
Gregorian months and weeks, displays years as BE (`CE + 543`), and uses Thai
digits by default.

## Installation

```bash
npm install react-day-picker @daypicker/buddhist
```

## Usage

```tsx
import { DayPicker } from "@daypicker/buddhist";
import "react-day-picker/style.css";

export function BuddhistCalendar() {
  return <DayPicker mode="single" />;
}
```

The package also exports the `th` and `enUS` locales, plus `getDateLib` for
advanced date-library customization.

## Peer Dependencies

`@daypicker/buddhist` is an add-on for `react-day-picker`. Your app must also
install `react` and `react-day-picker`.

## Documentation

- [Buddhist calendar guide](https://daypicker.dev/localization/buddhist)
- [React DayPicker documentation](https://daypicker.dev)
- [Issues and support](https://github.com/gpbl/react-day-picker/issues)

## License

MIT. See [LICENSE](./LICENSE).
