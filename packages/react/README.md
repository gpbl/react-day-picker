# @daypicker/react

React package for [DayPicker](https://daypicker.dev).

This package re-exports the public API from `react-day-picker` for the
`@daypicker/*` namespace.

## Installation

```bash
npm install @daypicker/react@next
```

## Usage

```tsx
import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";

export function Calendar() {
  return <DayPicker mode="single" />;
}
```

## License

MIT. See [LICENSE](./LICENSE).
