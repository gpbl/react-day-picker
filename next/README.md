⚠️ This is the documentation for the upcoming version of DayPicker. If you are looking for the current version, see [../README.md](../README.md).

# DayPicker Next

**DayPicker is a React component to build date pickers, calendars, and date inputs for web applications.**

---

## Documentation

See **[daypicker.dev](https://daypicker.dev)** for guides, examples and API reference.

## Quick Start

1. Install the package and its peer dependencies

```bash
npm install react-day-picker@next date-fns --save
```

2. Import the component and its style:

```tsx
import { DayPicker } from "react-day-picker"
import "react-day-picker/style.css"

export function App() {
  const [selected, setSelected] = React.useState<Date>()
  return <DayPicker selected={selected} onSelect={selected} />
}
```

Visit [daypicker.dev](https://daypicker.dev) to learn more.

---

## License

DayPicker is released under the [MIT License](./LICENSE).

## Community

Ask for help and share your experience with DayPicker.

- [Discuss the project on GitHub](https://github.com/gpbl/react-day-picker/discussions)
- [Report an issue on GitHub](https://github.com/gpbl/react-day-picker/issues/new/choose)
- [Contribute to the project](https://daypicker.dev/development/contributing/)

## Funding

Consider supporting DayPicker's maintainer with a donation. Your support helps to keep the project alive and keep it updated.

- [Sponsor DayPicker on GitHub](https://github.com/sponsors/gpbl)
