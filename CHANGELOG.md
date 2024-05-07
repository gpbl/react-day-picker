# Changelog

See the [Releases page](https://github.com/gpbl/react-day-picker/releases) on Github for the complete list of changes, diffs and contributors, or the [list of versions](https://www.npmjs.com/package/react-day-picker?activeTab=versions) published on npm.

## v8.10.1

_Release date: 2024-04-16_

- build: fix Preact support by externalizing JSX runtime
- build: remove unused useIsomorphicLayoutEffect module
- fix(types): improved props for RootContext component

## v8.10.0

_Release date: 2023-12-23_

- feat: support for date-fns 3.0
- fix(types): cannot find module `types/Matchers`
- fix(types): `firstWeekContainsDate` to be only Monday or Thursday
  - Note: this prop now supports only the value `1` (Monday) and `4` (Thursday) instead of values from `0` to `6`. This change may break your type-check.

## v8.9.1

_Release date: 2023-10-18_

- fix(types): `PropsWithChildren` not compatible with React 17

## v8.8.3

_Release date: 2023-10-14_

- feat: support for `nonce`, `lang`, `title` global attributes
- feat: new custom components "Months"
- feat: new `--rdp-selected-color` CSS variable for text of selected days
- updated internal dependencies

## v8.8.2

_Release date: 2023-09-12_

- fix(a11y): remove redundant `rowgroup` role from `tbody` element

## v8.8.1

_Release date: 2023-08-18_

- fix: range not selected when missing the `from` value
- fix: dropdown may navigate to the wrong month when multiple months are set

## v8.8.0

_Release date: 2023-06-19_

- feat: add custom ID to grid elements

## v8.7.1

_Release date: 2023-04-12_

- fix: cannot extend `DayPickerProps`, `DataAttributes` interface

## v8.7.0

_Release date: 2023-04-09_

- feat(rendering): add `id`, `data-` attributes to the root element
- feat(style): add CSS variable for caption font size
- feat(style): uppercase weekday name
- fix(a11y): empty table header when showing week numbers
- fix(i18n): caption buttons inverted when using RTL direction and multiple months

## v8.6.0

_Release date: 2023-02-18_

- feat: new `dropdown-buttons` caption layout
- feat: added `displayMonth` prop to `Footer`

## v8.5.1

_Release date: 2023-01-27_

- chore: improve ButtonProps type

## v8.5.0

_Release date: 2023-01-24_

- chore(a11y): accessibility improvements
  - update `CaptionLabel` to have role `presentation`
  - use `gridcell` directly in button, deprecate `labelDay`
  - update head rows labels
  - use presentation role for table cells
  - use `rowgroup` for `tbody`
- build: updated rollup settings improving source maps and css types
- build(deps): updated internal dependencies

## v8.4.1

_Release date: 2022-12-17_

- feat: add `onDayPointerEnter`, `onDayPointerLeave` props

## v8.3.7

_Release date: 2022-11-20_

- chore(style): add opacity to differentiate outside days
- fix(docs): minor typo in upgrading content
- fix(bug): matcherToArray should return a copy of the array
- build(deps): bump loader-utils from 2.0.2 to 2.0.4

## v8.3.6

_Release date: 2022-11-06_

- fix: set tab-index to 0 when day is focused
- Upgraded dependencies

## v8.3.5

_Release date: 2022-10-10_

- fix: `range_middle` class is added to days not in the selected range

## v8.3.4

_Release date: 2022-10-09_

- build: fix CSS module types
- fix: disable tab for outside days (#1567)

## v8.3.1

_Release date: 2022-10-03_

- fix: types for selection modes not being correctly set
- fix: isMatch to match open DateIntervals

## v8.3.0

_Release date: 2022-09-26_

- feat: add new `id` prop
- feat: week localization props: `ISOWeek`, `firstWeekContainsDate`
- fix: infinite recursion when focusing next days
- fix: disabled modifiers with min/max range selections
- fix: improved CSS `focus-visible` and disabled styles
- chore: updated `SelectSingleEventHandler` interface to type
- chore: cleanup context types and defaults
- chore: use [rollup-plugin-ts](https://www.npmjs.com/package/rollup-plugin-ts) to compile typescript
- chore: add new `Components` type
- chore: reorganize contexts files

## v8.2.1

_Release date: 2022-09-08_

- fix: CSS module doesn't include the root class

## v8.2.0

_Release date: 2022-09-01_

- new: custom `HeadRow` component
- changed: add `HeadRow` component
- fixed: selected day outlines in chrome
- fixed: dropdown focus-visible style
- fix: use aria-label for days buttons

## v8.1.4

_Release date: 2022-08-28_

- fix: use parsed `fromDate`/`toDate` in `useInput`
- changed: add names to fields and buttons
- changed: focus vs focus-visible styles

## v8.1.3

_Release date: 2022-08-24_

- fix: `onDayClick` called twice in selection mode
- changed: accept `undefined` for the modifier props

## v8.1.2

_Release date: 2022-08-22_

- fix: do not focus disabled or hidden days

## v8.1.1

_Release date: 2022-08-19_

- fix: prevent focus from moving beyond `toDate` and `fromDate`
- fix: page keys not working when using `setMonth`
- fix: add `onSelect` to the `DayPickerContextValue`
- fix: rdp class not added to root element when using `className`

## v8.1.0

_Release date: 2022-08-11_

- new: add prefix to auto generated ids
- new: `addedToRange` to the exported utilities
- new: revert to use `disabled` attribute instead of `aria-disabled` (reverts
- new(css): use pure selector for CSS variables
  - Note this may require some changes in your CSS
- fix: `@reach/auto-id` warnings by removing the dependency
- fix: home/end buttons behavior with `startOfWeek`
- package: upgraded dependencies

## v8.0.7

_Release date: 2022-06-12_

- fixed: missing `dropdown_year` CSS class in `YearsDropdown`
- fixed: Maximum update depth exceeded when select the range date
- website(chore): Upgrade docusaurus to beta 22

## v8.0.6

_Release date: 2022-06-05_

- fix(docs): fix typo

## v8.0.5

_Release date: 2022-05-15_

- fix(docs): typo in property name
- Use aria-disabled instead of disabled

## v8.0.4

_Release date: 2022-04-14_

- Added src directory to the package for better source maps
