# React DayPicker v9

> 🚧 This is the branch for the [next version](https://github.com/gpbl/react-day-picker/tree/next) of DayPicker, not released yet. 🚧

[DayPicker](http://react-day-picker.js.org) is a customizable date picker component for [React](https://reactjs.org) that renders a calendar for selecting days.

See **[react-day-picker.js.org](http://react-day-picker.js.org)** for guides, examples and API reference.

## Main Features

- ♿️ [WCAG 2.0](https://www.w3.org/TR/WCAG20/) compliant
- ☀️ 3 built-in selection modes: single day, multiple days, date range
- ➡️ Support for keyboard navigation
- 🎨 Easy to style and customize
- 🧘‍♀️ Using [date-fns](http://date-fns.org) as date library
- 🌎 Localizable into any language
- 🤖 Native TypeScript support
- 🗓 Support multiple calendars

## Getting started

### Install the dependencies

Add `react-day-picker` and [date-fns](https://date-fns.org) to your dependencies.

```sh npm2yarn
npm install react-day-picker@next date-fns
```

### Import DayPicker and its style

When importing, include the DayPicker CSS in your component.

```tsx
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export function App() {
  const [selected, setSelected] = React.useState<Date>();
  return <DayPicker selected={selected} onSelect={setSelected} />;
}
```
