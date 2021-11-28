# Changelog

## v8.0 (in development)

The next major version is the result of years of feedbacks received on
DayPicker. Many choices had to be done, so its props will be mostly incompatible
with the previous versions.

### Notable changes

- now depends on date-fns library
- rewritten in Typescript
- improved ARIA support
- replace the `DayPickerInput` component with an hook
- new features and tons of improvements

See the preview website at https://react-day-picker-next.netlify.app.

### v8.0.0-beta.32

- Fixed previous/next month navigation with RTL direction (68ad0adf7fb6935eb6d9809a6e72646e6194d51e)
- Updated `useInput` API (#1293)
- Removed `defaultSelected` prop (cd4f57906d98eb15b0b5a498112e74c2f6770c45)

### v8.0.0-beta.31

- Switched to rollup as module bundler
- Added `custom` selection mode
- Added `useDay` hook
- Fixed `classNames.nav_button_next` in Navigation.tsx (#1238)
- Fixed week numbers breaking at end/begin of the years (#1270)
- Fixed overwritten modifiers in range selections

## Older changelog

See [/v7/CHANGELOG.md](https://github.com/gpbl/react-day-picker/blob/v7/CHANGELOG.md) for the changelog of versions before 8.
