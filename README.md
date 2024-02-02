# DayPicker

**A React component rendering a date picker focused on simplicity, styling and accessibility.**

---

## Documentation

See **[react-day-picker.dev](http://https://react-day-picker.dev)** for guides, examples and API reference.

## Quick Start

1. Install the package and its peer dependencies

```bash
npm install react-day-picker date-fns --save
```

2. Import the component and its style:

```tsx
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export function App() {
  const [selected, setSelected] = React.useState<Date>();
  return <DayPicker selected={selected} onSelect={spetSelected} />;
}
```

Visit [react-day-picker.dev](http://https://react-day-picker.dev) to learn more.

## Releases

- Visit [github.com/gpbl/react-day-picker/releases](https://github.com/gpbl/react-day-picker/releases) for the list of releases and changelogs.
- For upgrading from an older version, see [react-day-picker.dev/upgrading](http://https://react-day-picker.dev/upgrading).

---

## Community

See our [Code of Conduct](./CODE_OF_CONDUCT.md) and [Contributing Guidelines](./CONTRIBUTING.md) for information on local development and creating a pull request.

- [GitHub Discussions](https://github.com/gpbl/react-day-picker/discussions)

## Funding

If you use this package, please consider supporting it by donating a small amount of money: https://github.com/sponsors/gpbl

## License

Licensed under the MIT License, Copyright © 2014-2024 Giampaolo Bellavite [@gpbl](https://github.com/gpbl).

See [LICENSE](./LICENSE) for more information.
