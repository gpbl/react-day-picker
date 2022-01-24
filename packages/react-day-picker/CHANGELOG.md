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

### v8.0.0-beta.37

- build: moved to rollupjs
- feat: new `useDayRender` hook
- chore: added `DaySelectionMode` enum
- refactor: `modifiersStatus` is now `ActiveModifiers`
- refactor: `modifierClassNames` props is now `modifiersClassNames`
- refactor: `modifierStyles` is now `modifiersStyles`

### v8.0.0-beta.36

- feat: added caption ARIA labels. This change introduce `@reach/auto-id` dependency (#1358) (b8bbf419)
- feat: caption element has now an heading role (uses `h2`) (#1335) (bfb77869)
- feat: improved focus support (#1343) (9d09587d)
- feat: added `initialFocus` focus prop (#1351) (8f6d979d)
- feat: table uses `grid` role (#1337) (4ae64022)
- chore: added Month component (#1327) (fc9d9136)
- chore: rename styles and elements (#1336, #1329, #1325)
- fix: fixed type `useInput`'s `setSelected` (#1344) (c8f64fdf)
- fix: missing today modifier (#1319) (c4445a4c)

### v8.0.0-beta.35

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
