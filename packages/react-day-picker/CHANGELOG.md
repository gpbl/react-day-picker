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

---

### v8.0.0-beta.34

- feat: add extended keyboard navigation (#1300) (2a098719)
- chore: export missing Button component (5ba65841)
- chore: rename `handleDayClick` to `onDayClick` (3d1678b2)
- chore: limit documented exports (c2fbd576)
- build: fix circular dependency (5cd0c2c8)

### v8.0.0-beta.33

- chore: unify context files (#1303) (d66b3981)
- chore: cleanup useInput types (7faec569)
- chore: improve internal modifiers typings (#1299) (9ddc64d9)
- chore: consolidate types (#1297) (e00c59e7)

### v8.0.0-beta.32

- fix: previous/next month navigation with RTL direction (68ad0adf)
- chore: updated `useInput` API (#1293)
- chore: removed `defaultSelected` prop (cd4f5790)

### v8.0.0-beta.31

- Switched to rollup as module bundler
- Added `custom` selection mode
- Added `useDay` hook
- Fixed `classNames.nav_button_next` in Navigation.tsx (#1238)
- Fixed week numbers breaking at end/begin of the years (#1270)
- Fixed overwritten modifiers in range selections

## Older changelog

See [/v7/CHANGELOG.md](https://github.com/gpbl/react-day-picker/blob/v7/CHANGELOG.md) for the changelog of versions before 8.
