# @daypicker/ethiopic

Ethiopic calendar support for [React DayPicker](https://daypicker.dev).

This package renders DayPicker with Ethiopic calendar month and year logic. It
uses the Amharic locale and Ethiopic numerals by default.

<a href="https://www.npmjs.com/package/@daypicker/ethiopic"><img src="https://img.shields.io/npm/v/%40daypicker%2Fethiopic" alt="npm version"/></a> <img src="https://img.shields.io/npm/dm/%40daypicker%2Fethiopic.svg" alt="npm downloads"/> <img src="https://img.shields.io/bundlephobia/minzip/%40daypicker%2Fethiopic" alt="Min gzipped size"/>

## Installation

Install the v10 prerelease of React DayPicker together with the Ethiopic
calendar package:

```bash
npm install react-day-picker@next @daypicker/ethiopic@next
```

## Usage

```tsx
import { DayPicker } from "@daypicker/ethiopic";
import "react-day-picker/style.css";

export function EthiopicCalendar() {
  return <DayPicker mode="single" />;
}
```

## Documentation

- [Ethiopic calendar guide](https://daypicker.dev/next/localization/ethiopic)
- [React DayPicker v10 docs](https://daypicker.dev/next)

## License

MIT. See [LICENSE](./LICENSE).
