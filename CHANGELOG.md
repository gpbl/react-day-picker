# Changelog

See the [Releases page](https://github.com/gpbl/react-day-picker/releases) on Github for the complete list of changes, diffs and contributors, or the [list of versions](https://www.npmjs.com/package/react-day-picker?activeTab=versions) published on npm.

## v8.10.1

_Release date: 2024-04-16_

- build: fix Preact support by externalizing JSX runtime (by @pwolfert in #2076)
- build: remove unused useIsomorphicLayoutEffect module (by @pwolfert in #2077)
- fix(types): improved props for RootContext componet @zakbutcher in #2073

## v8.10.0

_Release date: 2023-12-23_

- feat: support for date-fns 3.0 (by @gpbl in #2003)
- fix(types): cannot find module `types/Matchers` (by @jerodfritz in #1964)
- fix(types): `firstWeekContainsDate` to be only Monday or Thursday (by @gpbl in #2004)
  - Note: this prop now supports only the value `1` (Monday) and `4` (Thursday) instead of values from `0` to `6`. This change may break your type-check.

## v8.9.1

_Release date: 2023-10-18_

- fix(types): `PropsWithChildren` not compatible with React 17 (by @binhpv in #1947)

## v8.8.3

_Release date: 2023-10-14_

- feat: support for `nonce`, `lang`, `title` global attributes (by @gpbl in #1924)
- feat: new custom components "Months" (by @pawelgoc in #1917)
- feat: new `--rdp-selected-color` CSS variable for text of selected days (by @gpbl in #1931)
- updated internal dependencies

## v8.8.2

_Release date: 2023-09-12_

- fix(a11y): remove redundant `rowgroup` role from `tbody` element (by @gpbl in #1907)

## v8.8.1

_Release date: 2023-08-18_

- fix: range not selected when missing the `from` value (by @Sam-Apostel in #1876)
- fix: dropdown may navigate to the wrong month when multiple months are set (by @gpbl in #1884)

## v8.8.0

_Release date: 2023-06-19_

- feat: add custom ID to grid elements (by @GeorgeTaveras1231 in #1730)

## v8.7.1

_Release date: 2023-04-12_

- fix: cannot extend `DayPickerProps`, `DataAttributes` interface (by @gpbl in #1755)

## v8.7.0

_Release date: 2023-04-09_

- feat(rendering): add `id`, `data-` attributes to the root element (by @gpbl in #1745)
- feat(style): add CSS variable for caption font size (by @7PH in #1703)
- feat(style): uppercase weekday name (by @gpbl in #1746)
- fix(a11y): empty table header when showing week numbers (by @gpbl in #1712)
- fix(i18n): caption buttons inverted when using RTL direction and multiple months (by @gpbl in #1744)

## v8.6.0

_Release date: 2023-02-18_

- feat: new `dropdown-buttons` caption layout (by @seanockert in #1678 (see [example](https://react-day-picker.js.org/basics/)navigation#choosing-a-caption-layout)).
- feat: added `displayMonth` prop to `Footer` (by @gpbl in #1690)

## v8.5.1

_Release date: 2023-01-27_

- chore: improve ButtonProps type (by @gpbl in #1666)

## v8.5.0

_Release date: 2023-01-24_

- chore(a11y): accessibility improvements (by @gpbl in #1658)
  - update `CaptionLabel` to have role `presentation`
  - use `gridcell` directly in button, deprecate `labelDay`
  - update head rows labels
  - use presentation role for table cells
  - use `rowgroup` for `tbody`
- build: updated rollup settings improving source maps and css types (by @gpbl in #1650)
- build(deps): updated internal dependencies (by @gpbl @dependabot)

## v8.4.1

_Release date: 2022-12-17_

- feat: add `onDayPointerEnter`, `onDayPointerLeave` props (by @norbertkeresztes in #1614)

## v8.3.7

_Release date: 2022-11-20_

- chore(style): add opacity to differentiate outside days (by @hpdganesh in #1592)
- fix(docs): minor typo in upgrading content (by @baldyeagle in #1605)
- fix(bug): matcherToArray should return a copy of the array (by @gpbl in #1609)
- build(deps): bump loader-utils from 2.0.2 to 2.0.4 (by @dependabot in #1603)

## v8.3.6

_Release date: 2022-11-06_

- fix: set tab-index to 0 when day is focused (by @gpbl in #1601)
- Upgraded dependencies (by @gpbl in #1580)

## v8.3.5

_Release date: 2022-10-10_

- fix: `range_middle` class is added to days not in the selected range (by @gpbl in #1581)

## v8.3.4

_Release date: 2022-10-09_

- build: fix CSS module types (by @gpbl in #1578)
- fix: disable tab for outside days (#1567) (by @DanielJKelly in #1576)

## v8.3.1

_Release date: 2022-10-03_

- fix: types for selection modes not being correctly set (by @gpbl in #1571)
- fix: isMatch to match open DateIntervals (by @gpbl in #1572)

## v8.3.0

_Release date: 2022-09-26_

- feat: add new `id` prop (by @gpbl in #1556)
- feat: week localization props: `ISOWeek`, `firstWeekContainsDate` (by @gpbl in #1558)
- fix: infinite recursion when focusing next days (by @eXamadeus in #1549)
- fix: disabled modifiers with min/max range selections (by @gpbl in #1566)
- fix: improved CSS `focus-visible` and disabled styles (by @gpbl in #1565)
- chore: updated `SelectSingleEventHandler` interface to type (by @gpbl in #1555)
- chore: cleanup context types and defaults (by @gpbl in #1561)
- chore: use [rollup-plugin-ts](https://www.npmjs.com/package/rollup-plugin-ts) to compile typescript (by @gpbl in #1562)
- chore: add new `Components` type (by @gpbl in #1563)
- chore: reorganize contexts files (by @gpbl in #1564)

## v8.2.1

_Release date: 2022-09-08_

- fix: CSS module doesn't include the root class (by @gpbl in #1548)

## v8.2.0

_Release date: 2022-09-01_

- new: custom `HeadRow` component (by @gpbl in #1534)
- changed: add `HeadRow` component (by @KonradLinkowski in #1533)
- fixed: selected day outlines in chrome (by @gpbl in #1536)
- fixed: dropdown focus-visible style (by @gpbl in #1535)
- fix: use aria-label for days buttons (by @gpbl in #1537)

## v8.1.4

_Release date: 2022-08-28_

- fix: use parsed `fromDate`/`toDate` in `useInput` (by @hypergeometric in #1524)
- changed: add names to fields and buttons (by @gpbl in #1530)
- changed: focus vs focus-visible styles (by @gpbl in #1531)

## v8.1.3

_Release date: 2022-08-24_

- fix: `onDayClick` called twice in selection mode (by @gpbl in #1520)
- changed: accept `undefined` for the modifier props (by @gpbl in #1521)

## v8.1.2

_Release date: 2022-08-22_

- fix: do not focus disabled or hidden days (by @gpbl in #1519)

## v8.1.1

_Release date: 2022-08-19_

- fix: prevent focus from moving beyond `toDate` and `fromDate` (by @kimamula in #1468)
- fix: page keys not working when using `setMonth` (by @kimamula in #1510)
- fix: add `onSelect` to the `DayPickerContextValue` (by @gpbl in #1515)
- fix: rdp class not added to root element when using `className` (by @gpbl in #1517)

## v8.1.0

_Release date: 2022-08-11_

- new: add prefix to auto generated ids (by @mihkeleidast in #1493)
- new: `addedToRange` to the exported utilities (by @stopr29 in #1495)
- new: revert to use `disabled` attribute instead of `aria-disabled` (reverts (by @gpbl in #1451). See ongoing discussion in #1468.)
- new(css): use pure selector for CSS variables (by @andyschulzz in #1481, #1499)
  - Note this may require some changes in your CSS
- fix: `@reach/auto-id` warnings by removing the dependency (by @gpbl in #1484)
- fix: home/end buttons behavior with `startOfWeek` (by @apdrsn in #1492)
- package: upgraded dependencies (by @gpbl in #1497)

## v8.0.7

_Release date: 2022-06-12_

- fixed: missing `dropdown_year` CSS class in `YearsDropdown` (by @pwolfert in #1466)
- fixed: Maximum update depth exceeded when select the range date (by @gpbl in #1470)
- website(chore): Upgrade docusaurus to beta 22 (by @gpbl in #1469)

## v8.0.6

_Release date: 2022-06-05_

- fix(docs): fix typo (by @denkristoffer in #1457)

## v8.0.5

_Release date: 2022-05-15_

- fix(docs): typo in property name (by @dzek69 in #1442)
- Use aria-disabled instead of disabled (by @gpbl in #1451)

## v8.0.4

_Release date: 2022-04-14_

- Added src directory to the package for better source maps
