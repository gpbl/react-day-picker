# React DayPicker

DayPicker is a [React](https://react.dev) component to create date pickers, calendars, and date inputs for web applications.

📖 See **[daypicker.dev](https://daypicker.dev)** for guides, examples and API reference.

## Features

- 🛠 An extensive set of props for [customizing](./docs/customization.mdx) the calendar.
- 🎨 Minimal design that can be [easily styled](./docs/styling.mdx) with CSS or any CSS framework.
- 📅 Supports [selections](./docs/selection-modes.mdx) of single day, multiple days, ranges of days, or [custom selections](./guides/custom-selections.mdx).
- 🌍 Can be [localized](./docs/localization.mdx) into any language, supports [ISO 8601 dates](./docs/localization.mdx#iso-week-dates), [UTC dates](./docs/localization.mdx#utc-dates), and [Jalali calendar](./docs/localization.mdx#jalali-calendar).
- 🦮 Complies with WCAG 2.1 AA requirements for [accessibility](./docs/accessibility.mdx).
- ⚙️ [Customizable components](./guides/custom-components.mdx) to extend the rendered elements.
- 🔤 Easy integration [with input fields](./guides/input-fields.mdx).

DayPicker is written in TypeScript and compiled to CommonJS and ESM. It relies on [date-fns](https://date-fns.org) for date manipulation and formatting.

## Installation

```bash
npm install react-day-picker
```

<a href="https://www.npmjs.com/package/react-day-picker"><img src="https://img.shields.io/npm/v/react-day-picker" alt="npm version"/></a>
<img src="https://img.shields.io/npm/dm/react-day-picker.svg" alt="npm downloads"/> <img src="https://img.shields.io/bundlephobia/minzip/react-day-picker" alt="Min gzipped size"/>

## Example

```tsx
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

function MyDatePicker() {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
  );
}
```

## Compatibility

DayPicker is compatible with React 16.8 and later.

## License

DayPicker is released under the [MIT License](./license).

## Community

Ask for help and share your experience with DayPicker.

- 💬 [Discussion forums](https://github.com/gpbl/react-day-picker/discussions) - get support and provide feedback.
- 🪳 [Report an issue](https://github.com/gpbl/react-day-picker/issues/new/choose) - report a bug or a feature request.

## Funding

Consider supporting DayPicker's maintainer with a donation. Your support helps to keep the project alive and keep it updated.

- 🎗️ [Sponsor DayPicker on GitHub](https://github.com/sponsors/gpbl)
