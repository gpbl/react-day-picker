---
title: Introduction
sidebar_label: Introduction
sidebar_position: 1
slug: /
---

# Introduction to DayPicker

DayPicker is a [React](https://react.dev) component to create date pickers, calendars, and date inputs for web applications.

## Features

- 🛠 An extensive set of props for [customizing](./using-daypicker/customization.mdx) the calendar.
- 🎨 Minimal design that can be [easily styled](./using-daypicker/styling.mdx) with CSS or any CSS framework.
- 📅 Supports [selections](./using-daypicker//selection-modes.mdx) of single day, multiple days, ranges of days, or [custom selections](./advanced-guides/custom-selections.mdx).
- 🌍 Can be [localized](./using-daypicker/localization.mdx) into any language, supports [ISO 8601 dates](./using-daypicker/localization.mdx#iso-week-dates), [UTC dates](./using-daypicker/localization.mdx#utc-dates), and [Jalali calendar](./using-daypicker/localization.mdx#jalali-calendar).
- ♿ Complies with WCAG 2.1 AA requirements for [accessibility](./using-daypicker/accessibility.mdx).
- ⚙️ [Customizable components](./advanced-guides/custom-components.mdx) for more complex use cases.
- 🔤 Unopinionated integration [with input fields](./advanced-guides//input-field.mdx).

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
