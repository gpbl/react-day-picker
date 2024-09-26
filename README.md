# React DayPicker

DayPicker is a [React](https://react.dev) component for creating date pickers, calendars, and date inputs for web applications.

📖 See **[daypicker.dev](https://daypicker.dev)** for guides, examples and API reference.

## Features

- 🛠 Extensive set of props for [customizing](https://daypicker.dev/docs/customization) the calendar.
- 🎨 Minimal design that can be [easily styled](https://daypicker.dev/docs/styling) with CSS or any CSS framework.
- 📅 Supports [selections](https://daypicker.dev/docs/selection-modes) of single days, multiple days, ranges of days, or [custom selections](https://daypicker.dev/guides/custom-selections).
- 🌍 Can be [localized](https://daypicker.dev/docs/localization) into any language, supports [ISO 8601 dates](https://daypicker.dev/docs/localization#iso-week-dates), [time zones](https://daypicker.dev/docs/localization#time-zone), and the [Jalali calendar](https://daypicker.dev/docs/localization#jalali-calendar).
- 🦮 Complies with WCAG 2.1 AA requirements for [accessibility](https://daypicker.dev/guides/accessibility).
- ⚙️ [Customizable components](https://daypicker.dev/guides/custom-components) to extend the rendered elements.
- 🔤 Easy integration [with input fields](https://daypicker.dev/guides/input-fields).

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

DayPicker is released under the [MIT License](https://daypicker.dev/license).

## Community

Ask for help and share your experience with DayPicker:

- 💬 [Discussion forums](https://github.com/gpbl/react-day-picker/discussions) - Get support and provide feedback.
- 🪳 [Report an issue](https://github.com/gpbl/react-day-picker/issues/new/choose) - Report bugs or request features.

## Funding

Consider supporting DayPicker's maintainer with a donation. Your support helps keep the project alive and up-to-date.

- 🎗️ [Sponsor DayPicker on GitHub](https://github.com/sponsors/gpbl)
