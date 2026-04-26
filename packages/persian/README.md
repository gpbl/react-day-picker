# @daypicker/persian

Persian calendar support for [React DayPicker](https://daypicker.dev).

This package renders DayPicker with Jalali calendar month and year logic. It
uses the Persian Iran locale, Eastern Arabic-Indic numerals, and right-to-left
direction by default.

<a href="https://www.npmjs.com/package/@daypicker/persian"><img src="https://img.shields.io/npm/v/%40daypicker%2Fpersian" alt="npm version"/></a> <img src="https://img.shields.io/npm/dm/%40daypicker%2Fpersian.svg" alt="npm downloads"/> <img src="https://img.shields.io/bundlephobia/minzip/%40daypicker%2Fpersian" alt="Min gzipped size"/>

## Installation

Install the v10 prerelease of React DayPicker together with the Persian
calendar package:

```bash
npm install react-day-picker@next @daypicker/persian@next
```

## Usage

```tsx
import { DayPicker } from "@daypicker/persian";
import "react-day-picker/style.css";

export function PersianCalendar() {
  return <DayPicker mode="single" />;
}
```

## Documentation

- [Persian calendar guide](https://daypicker.dev/next/localization/persian)
- [React DayPicker v10 docs](https://daypicker.dev/next)

## License

MIT. See [LICENSE](./LICENSE).
