# React DayPicker

DayPicker is a [React](https://react.dev) component to create date pickers, calendars, and date inputs for web applications.

📖 See **[daypicker.dev](http://daypicker.dev)** for guides, examples and API reference.

## Features

- Minimal design for easy customization.
- Extensive props for configuring the calendar.
- Supports selection of a single day, multiple days, ranges, or custom selections.
- Can be localized in any language.
- Complies with WCAG 2.1 AA requirements for accessibility.
- Includes customizable internal components for complex use cases.

DayPicker is written in TypeScript and compiled to CommonJS and ESM. It requires [date-fns](https://date-fns.org) as a peer dependency.

## Installation

```bash
npm install react-day-picker date-fns
```

<a href="https://www.npmjs.com/package/react-day-picker"><img src="https://img.shields.io/npm/v/react-day-picker" alt="npm version"/></a>
<a href="https://www.npmjs.com/package/react-day-picker/next"><img src="https://img.shields.io/npm/v/react-day-picker/next" alt="npm version"/></a>
<img src="https://img.shields.io/npm/dm/react-day-picker.svg" alt="npm downloads"/> <img src="https://img.shields.io/bundlephobia/minzip/react-day-picker" alt="Min gzipped size"/>

## Usage

```tsx
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function MyDatePicker() {
  const [selected, setSelected] = useState();
  return <DayPicker mode="single" selected={selected} onSelect={setSelected} />;
}
```

## License

DayPicker is released under the [MIT License](./license).

## Community

Ask for help and share your experience with DayPicker.

- [Discuss the project on GitHub](https://github.com/gpbl/react-day-picker/discussions)
- [Report an issue on GitHub](https://github.com/gpbl/react-day-picker/issues/new/choose)

## Funding

Consider supporting DayPicker's maintainer with a donation. Your support helps to keep the project alive and keep it updated.

- [Sponsor DayPicker on GitHub](https://github.com/sponsors/gpbl)
