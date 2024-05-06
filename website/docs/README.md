---
sidebar_label: Introduction
sidebar_position: 1
slug: /
---

# React DayPicker

DayPicker is a [React](https://reactjs.dev) component to create date pickers, calendars, and date inputs for web applications.

## Features

- Extensive props to customize and configure the calendar.
- Easy to style and integrate with other CSS frameworks.
- Select single day, multiple day, ranges or create custom selections.
- Localizable in any language.
- Following the WAI-ARIA guidelines.
- Customizable internal components for complex use cases.

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
