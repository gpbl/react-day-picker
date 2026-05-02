---
sidebar_label: Introduction
sidebar_position: 1
slug: /
---

# React DayPicker

DayPicker is a [React](https://react.dev) component to create date pickers, calendars, and date inputs for web applications.

```bash npm2yarn
npm install react-day-picker date-fns
```

## Features

- Provides a minimal design for easy customization.
- Offers extensive props for calendar configuration and customization.
- Supports selection of a single day, multiple days, ranges, or custom selections.
- Can be localized in any language.
- Includes customizable internal components for complex use cases.

DayPicker is written in TypeScript and compiled to CommonJS and ESM. It requires [date-fns](https://date-fns.org) as a peer dependency.

## Example

```tsx
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function MyDatePicker() {
  const [selected, setSelected] = useState<Date>();
  return <DayPicker mode="single" selected={selected} onSelect={setSelected} />;
}
```

<BrowserWindow>
  <ExamplesV8.Start />
</BrowserWindow>

## License

DayPicker is released under the [MIT License](./license).

## Community

Ask for help and share your experience with DayPicker.

- [Discuss the project on GitHub](https://github.com/gpbl/react-day-picker/discussions)
- [Report an issue on GitHub](https://github.com/gpbl/react-day-picker/issues/new/choose)

## Funding

Consider supporting DayPicker's maintainer with a donation. Your support helps to keep the project alive and keep it updated.

- [Sponsor DayPicker on GitHub](https://github.com/sponsors/gpbl)
