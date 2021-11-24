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

### v8.0.0-beta.30

- Switched to rollup as module bundler
- Added `custom` selection mode
- Added `useDay` hook
- Fixed `classNames.nav_button_next` in Navigation.tsx (#1238)
- Fixed week numbers breaking at end/begin of the years (#1270)
- Fixed overwritten modifiers in range selections

## Older changelog

See [/v7/CHANGELOG.md](https://github.com/gpbl/react-day-picker/blob/v7/CHANGELOG.md) for the changelog of versions before 8.
