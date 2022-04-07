# Changelog

### v8.0.3

- fix: `toMonth` prop to include the full month ([#1429](https://github.com/gpbl/react-day-picker/pull/1429))
- changed: better date-fns import should improve tree-shaking ([#1436](https://github.com/gpbl/react-day-picker/pull/1436))
- changed: removed `browser` entry in `package.json` ([#1436](https://github.com/gpbl/react-day-picker/pull/1436))

### v8.0.2

- new: added `weekStartsOn` prop ([#1422](https://github.com/gpbl/react-day-picker/pull/1422))
- new: split the `Caption` components into `CaptionDropdowns` and `CaptionNavigation` components. This change should make easier to customize the caption. ([#1426](https://github.com/gpbl/react-day-picker/pull/1426))

### v8.0.1

- changed: added React 18 to the peer dependencies

## v8.0

This version introduces breaking changes and it is mostly incompatible with v7. See the [redesigned website](https://react-day-picker.js.org) for more details.

### Notable changes

- native TypeScript support
- selection modes: single, multiple, range
- added [date-fns](http://date-fns.org) library as peer dependecy
- replaced `DayPickerInput` component with `useInput` hook
- improved ARIA support

See also: ➡️ **[Upgrading from v7](https://react-day-picker.js.org/guides/upgrading)**.

---

## Older changelog

See [/v7/CHANGELOG.md](https://github.com/gpbl/react-day-picker/blob/v7/CHANGELOG.md) for the changelog of versions before 8.
