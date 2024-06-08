---
title: Introduction
sidebar_label: Introduction
sidebar_position: 1
slug: /
---

# Introduction to DayPicker

DayPicker is a [React](https://react.dev) component to create date pickers, calendars, and date inputs for web applications.

## Features

- Minimal design for easy customization.
- Extensive props for configuring the calendar.
- Supports selection of a single day, multiple days, ranges, or custom selections.
- Can be localized in any language.
- Complies with WCAG 2.1 AA requirements for accessibility.
- Includes customizable internal components for complex use cases.

DayPicker is written in TypeScript and compiled to CommonJS and ESM. It requires [date-fns](https://date-fns.org) as a peer dependency.

## Example

```tsx
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

function MyDatePicker() {
  const [selected, setSelected] = useState<Date>();
  return <DayPicker mode="single" selected={selected} onSelect={setSelected} />;
}
```

<BrowserWindow>
  <Examples.Start />
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
