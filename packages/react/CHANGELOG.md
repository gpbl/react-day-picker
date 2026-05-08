# @daypicker/react

DayPicker follows [Semantic Versioning](http://semver.org/). See the [Releases page](https://github.com/gpbl/react-day-picker/releases) on Github for the complete list of changes, diffs and contributors, or the [list of versions](https://www.npmjs.com/package/@daypicker/react?activeTab=versions) published on npm.

## v10.0.0

_Release date: 2026-05-08_

This major release introduces the `@daypicker/react` package name, publishes calendar add-on packages under the `@daypicker/*` scope, and removes public APIs that were deprecated in v9.

#### Upgrading to v10

Upgrading from v9 should be straightforward if your app does not use any deprecated APIs. See the [upgrading guide](https://daypicker.dev/upgrading) for details. If you use one of the non-Gregorian calendars, such as Persian, Hebrew, Buddhist, Ethiopic, or Hijri, install the corresponding calendar add-on package alongside DayPicker.

#### Package Name

For new projects, prefer the `@daypicker/react` package:

```tsx
import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";
```

The `react-day-picker` package remains available for compatibility and exposes the same DayPicker API in v10.

#### Calendar Packages

Calendar add-on packages are now published under the `@daypicker/*` scope. Install the add-on package for the calendar you need alongside `@daypicker/react`. For example, to use the Persian calendar:

```bash
npm install @daypicker/react @daypicker/persian
```

#### Breaking Changes

- Removed deprecated props: `fromDate`, `toDate`, `fromMonth`, `toMonth`, `fromYear`, `toYear`, `initialFocus`.
- Removed deprecated event props: `onWeekNumberClick`, `onDayKeyUp`, `onDayKeyPress`, `onDayPointerEnter`, `onDayPointerLeave`, `onDayTouchCancel`, `onDayTouchEnd`, `onDayTouchMove`, `onDayTouchStart`.
- Removed deprecated type exports from `types/deprecated`.
- Removed deprecated aliases: `formatMonthCaption`, `formatYearCaption`, `labelDay`, `labelCaption`, `isMatch`, `isDateInRange`.
- Removed the deprecated `components.Button` customization entry.
- Removed deprecated `DeprecatedUI` compatibility typing for `classNames` and `styles`.
- Removed deprecated DateLib exports: `FormatOptions`, `LabelOptions`, `dateLib`, and `DateLib.Date`.
- Removed the deprecated `react-day-picker/jalali` subpath. Use `react-day-picker/persian`.

#### What's Changed

- feat: add `@daypicker/react` as the preferred package name by [@gpbl](https://github.com/gpbl) in [#2970](https://github.com/gpbl/react-day-picker/pull/2970)
- feat: publish calendar add-on packages under the `@daypicker/*` scope
- fix: show the expected month after dropdown changes in multi-month calendars by [@hackgray47-eng](https://github.com/hackgray47-eng) in [#2977](https://github.com/gpbl/react-day-picker/pull/2977)
- fix: move the `amET` locale export to `@daypicker/ethiopic` by [@gpbl](https://github.com/gpbl) in [#2968](https://github.com/gpbl/react-day-picker/pull/2968)
