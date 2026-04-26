# @daypicker/buddhist

Buddhist calendar support for [React DayPicker](https://daypicker.dev).

This package renders DayPicker with Buddhist Era years. The calendar keeps
Gregorian months and weeks, displays years as BE (`CE + 543`), and uses Thai
digits by default.

<a href="https://www.npmjs.com/package/@daypicker/buddhist"><img src="https://img.shields.io/npm/v/%40daypicker%2Fbuddhist" alt="npm version"/></a> <img src="https://img.shields.io/npm/dm/%40daypicker%2Fbuddhist.svg" alt="npm downloads"/> <img src="https://img.shields.io/bundlephobia/minzip/%40daypicker%2Fbuddhist" alt="Min gzipped size"/>

## Installation

Install the v10 prerelease of React DayPicker together with the Buddhist
calendar package:

```bash
npm install react-day-picker@next @daypicker/buddhist@next
```

## Usage

```tsx
import { DayPicker } from "@daypicker/buddhist";
import "react-day-picker/style.css";

export function BuddhistCalendar() {
  return <DayPicker mode="single" />;
}
```

## Documentation

- [Buddhist calendar guide](https://daypicker.dev/next/localization/buddhist)
- [React DayPicker v10 docs](https://daypicker.dev/next)

## License

MIT. See [LICENSE](./LICENSE).
