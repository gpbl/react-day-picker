# @daypicker/hebrew

Hebrew calendar support for [React DayPicker](https://daypicker.dev).

This package renders DayPicker with Hebrew lunisolar calendar month and year
logic, including leap years with Adar I and Adar II. It uses the Hebrew locale
and right-to-left direction by default.

<a href="https://www.npmjs.com/package/@daypicker/hebrew"><img src="https://img.shields.io/npm/v/%40daypicker%2Fhebrew" alt="npm version"/></a> <img src="https://img.shields.io/npm/dm/%40daypicker%2Fhebrew.svg" alt="npm downloads"/> <img src="https://img.shields.io/bundlephobia/minzip/%40daypicker%2Fhebrew" alt="Min gzipped size"/>

## Installation

Install the v10 prerelease of React DayPicker together with the Hebrew calendar
package:

```bash
npm install react-day-picker@next @daypicker/hebrew@next
```

## Usage

```tsx
import { DayPicker } from "@daypicker/hebrew";
import "react-day-picker/style.css";

export function HebrewCalendar() {
  return <DayPicker mode="single" />;
}
```

## Documentation

- [Hebrew calendar guide](https://daypicker.dev/next/localization/hebrew)
- [React DayPicker v10 docs](https://daypicker.dev/next)

## License

MIT. See [LICENSE](./LICENSE).
