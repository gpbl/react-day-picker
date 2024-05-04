# Changelog

## v8.10.1 (2024-04-16)
## What's Changed

* build: fix Preact support by externalizing JSX runtime by @pwolfert in https://github.com/gpbl/react-day-picker/pull/2076
* build: remove unused useIsomorphicLayoutEffect module by @pwolfert in https://github.com/gpbl/react-day-picker/pull/2077
* fix(types): improved props for RootContext componet @zakbutcher in https://github.com/gpbl/react-day-picker/pull/2073

## New Contributors
* @union-zakbutcher made their first contribution in https://github.com/gpbl/react-day-picker/pull/2073

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.10.0...v8.10.1

## v8.10.0 (2023-12-23)
## What's Changed

### New Features 

* feat: support for date-fns 3.0 by @gpbl in https://github.com/gpbl/react-day-picker/pull/2003

### Fixes

* fix(types): cannot find module `types/Matchers` by @jerodfritz in https://github.com/gpbl/react-day-picker/pull/1964
* fix(types): `firstWeekContainsDate` to be only Monday or Thursday by @gpbl in https://github.com/gpbl/react-day-picker/pull/2004
  - Note: this prop now supports only the value `1` (Monday) and `4` (Thursday) instead of values from `0` to `6`. This change may break your type-check.

### Docs Udpates

* docs: remove anchor from the Readme image by @neicore in https://github.com/gpbl/react-day-picker/pull/1969
* docs: fix typo by @toby-brilliant in https://github.com/gpbl/react-day-picker/pull/1984
* docs: adjust example wording: "the today's date" by @toby-brilliant in https://github.com/gpbl/react-day-picker/pull/1987
* docs: matcher api reference page uses incorrect object syntax by @janaiscoding in https://github.com/gpbl/react-day-picker/pull/1978
* docs: update Contributing.md by @janaiscoding in https://github.com/gpbl/react-day-picker/pull/1979

## New Contributors
* @jerodfritz made their first contribution in https://github.com/gpbl/react-day-picker/pull/1964
* @neicore made their first contribution in https://github.com/gpbl/react-day-picker/pull/1969
* @toby-brilliant made their first contribution in https://github.com/gpbl/react-day-picker/pull/1984
* @janaiscoding made their first contribution in https://github.com/gpbl/react-day-picker/pull/1978

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.9.1...v8.10.0

## v8.9.1 (2023-10-18)
## What's Changed

### Bug fixes 

* fix(types): `PropsWithChildren` not compatible with React 17 by @binhpv in https://github.com/gpbl/react-day-picker/pull/1947

### Build

* build(types): add missing `Locale` imports by @gpbl in https://github.com/gpbl/react-day-picker/pull/1948

<details>
<summary>Updated dependencies</summary>

* build(deps-dev): bump @rollup/plugin-terser from 0.4.3 to 0.4.4 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1939
* build(deps-dev): bump @adobe/css-tools from 4.0.1 to 4.3.1 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1941
* build(deps-dev): bump webpack from 5.88.2 to 5.89.0 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1940
* build(deps-dev): bump @types/react-dom from 18.2.7 to 18.2.13 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1945

</details>

## New Contributors
* @binhpv made their first contribution in https://github.com/gpbl/react-day-picker/pull/1947

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.8.3...v8.9.1

## v8.8.3 (2023-10-14)
## What's Changed

* feat: support for `nonce`, `lang`, `title` global attributes by @gpbl in https://github.com/gpbl/react-day-picker/pull/1924
* feat: new custom components "Months" by @pawelgoc in https://github.com/gpbl/react-day-picker/pull/1917
* feat: new `--rdp-selected-color` CSS variable for text of selected days by @gpbl in https://github.com/gpbl/react-day-picker/pull/1931

### Updated internal dependencies 

<details>
<summary>Details</summary>

* chore(build): update dependencies by @gpbl in https://github.com/gpbl/react-day-picker/pull/1913
* build(deps-dev): bump postcss from 8.4.27 to 8.4.29 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1905
* build(deps-dev): bump @typescript-eslint/eslint-plugin from 5.61.0 to 5.62.0 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1904
* chore(docs): add strict mode to website by @gpbl in https://github.com/gpbl/react-day-picker/pull/1911
* build(deps-dev): bump @types/node from 18.15.13 to 20.6.5 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1916
* build(deps-dev): bump rimraf from 5.0.1 to 5.0.5 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1918
* build(deps): bump focus-trap-react from 10.2.1 to 10.2.2 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1919
* build(deps-dev): bump postcss from 8.4.30 to 8.4.31 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1921
* build(deps-dev): bump @types/node from 20.6.5 to 20.8.3 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1925
* build(deps-dev): bump @rollup/plugin-commonjs from 25.0.4 to 25.0.5 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1929
* build(deps-dev): bump eslint from 8.50.0 to 8.51.0 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1928
* build: remove allowSyntheticDefaultImports requirement by @gpbl in https://github.com/gpbl/react-day-picker/pull/1926
* build(deps): bump clsx from 1.2.1 to 2.0.0 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1927

</details>

## New Contributors
* @pawelgoc made their first contribution in https://github.com/gpbl/react-day-picker/pull/1917

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.8.2...v8.8.3

## v8.8.2 (2023-09-12)
## What's Changed

### Bug fixes

* fix(a11y): remove redundant `rowgroup` role from `tbody` element by @gpbl in https://github.com/gpbl/react-day-picker/pull/1907

### Other

* docs: fix typo in Matcher example by @triptu in https://github.com/gpbl/react-day-picker/pull/1896

<details>
<summary>Dependencies Updates</summary>

* build(deps-dev): bump rollup-plugin-dts from 5.3.0 to 5.3.1 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1889
* build(deps-dev): bump jest and @types/jest by @dependabot in https://github.com/gpbl/react-day-picker/pull/1888
* build(deps-dev): bump @testing-library/dom from 9.3.0 to 9.3.1 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1886
* build(deps-dev): bump tslib from 2.5.0 to 2.6.2 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1891
* build(deps-dev): bump eslint-plugin-import from 2.27.5 to 2.28.1 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1892
* build(deps-dev): bump @types/react from 18.0.38 to 18.2.21 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1897
* build(deps): bump focus-trap-react from 10.1.1 to 10.2.1 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1898
</details>


## New Contributors
* @triptu made their first contribution in https://github.com/gpbl/react-day-picker/pull/1896

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.8.1...v8.8.2

## v8.8.1 (2023-08-18)
## What's Changed

* fix: range not selected when missing the `from` value by @Sam-Apostel in https://github.com/gpbl/react-day-picker/pull/1876
* fix: dropdown may navigate to the wrong month when multiple months are set by @gpbl in https://github.com/gpbl/react-day-picker/pull/1884
* docs: remove shadow-dom from examples by @gpbl in https://github.com/gpbl/react-day-picker/pull/1817

### Build updates

<details>
<summary>Toggle list</summary>

* build(deps): bump @typescript-eslint/eslint-plugin from 5.59.0 to 5.59.11 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1813
* build: move from yarn to pnpm by @gpbl in https://github.com/gpbl/react-day-picker/pull/1816
* build: move the main package to the repo root by @gpbl in https://github.com/gpbl/react-day-picker/pull/1827
* build(deps-dev): bump @typescript-eslint/eslint-plugin from 5.59.11 to 5.61.0 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1829
* build(deps-dev): bump webpack from 5.83.1 to 5.88.1 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1837
* build(deps-dev): bump date-fns from 2.29.3 to 2.30.0 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1801
* build(deps-dev): bump tsc-alias from 1.8.6 to 1.8.7 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1841
* build(deps): bump word-wrap from 1.2.3 to 1.2.4 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1845
* build(deps-dev): bump jest and @types/jest by @dependabot in https://github.com/gpbl/react-day-picker/pull/1840
* build(deps-dev): bump eslint-plugin-jest from 27.2.1 to 27.2.3 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1836
* build(deps-dev): bump jest-axe from 7.0.1 to 8.0.0 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1850
* build(deps-dev): bump webpack from 5.83.1 to 5.88.2 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1851
* build(deps): bump @codesandbox/sandpack-react from 2.6.1 to 2.6.9 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1849
* build(deps-dev): bump postcss from 8.4.23 to 8.4.27 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1859
* build(deps): bump semver from 5.7.1 to 5.7.2 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1861
* build(deps-dev): bump tough-cookie from 4.1.2 to 4.1.3 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1862
* build(deps-dev): bump @jest/types from 29.5.0 to 29.6.1 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1857
* build(deps-dev): bump @rollup/plugin-terser from 0.4.1 to 0.4.3 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1858
* build(deps-dev): bump @types/react-dom from 18.2.6 to 18.2.7 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1869
* build(deps-dev): bump postcss from 8.4.23 to 8.4.27 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1868
* build(deps-dev): bump eslint-config-prettier from 8.8.0 to 9.0.0 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1867
* build: prepublish script typo in package.json by @trabeast in https://github.com/gpbl/react-day-picker/pull/1883
* build(deps-dev): bump tslib from 2.5.0 to 2.6.1 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1880
* build(deps-dev): bump @rollup/plugin-commonjs from 25.0.0 to 25.0.4 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1881
* build(deps-dev): bump @rollup/plugin-node-resolve from 15.0.2 to 15.1.0 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1879

</details>

## New Contributors
* @trabeast made their first contribution in https://github.com/gpbl/react-day-picker/pull/1883
* @Sam-Apostel made their first contribution in https://github.com/gpbl/react-day-picker/pull/1876

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.8.0...v8.8.1

## v8.8.0 (2023-06-19)
## What's Changed

* feat: add custom ID to grid elements by @GeorgeTaveras1231 in https://github.com/gpbl/react-day-picker/pull/1730
* docs: [Time Picker example](https://react-day-picker.js.org/guides/input-fields#example-time-selection) by @Erik-McKelvey in https://github.com/gpbl/react-day-picker/pull/1772
* docs: added more details about [week numbers calculations](https://react-day-picker.js.org/basics/customization#showing-the-week-numbers)

## New Contributors
* @Erik-McKelvey made their first contribution in https://github.com/gpbl/react-day-picker/pull/1772
* @GeorgeTaveras1231 made their first contribution in https://github.com/gpbl/react-day-picker/pull/1730

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.7.1...v8.8.0

## v8.7.1 (2023-04-12)
## What's Changed

* fix: cannot extend `DayPickerProps`, `DataAttributes` interface by @gpbl in https://github.com/gpbl/react-day-picker/pull/1755

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.7.0...v8.7.1

## v8.7.0 (2023-04-09)
## What's Changed
* feat(rendering): add `id`, `data-` attributes to the root element by @gpbl in https://github.com/gpbl/react-day-picker/pull/1745
* feat(style): add CSS variable for caption font size by @7PH in https://github.com/gpbl/react-day-picker/pull/1703
* feat(style): uppercase weekday name by @gpbl in https://github.com/gpbl/react-day-picker/pull/1746
* fix(a11y): empty table header when showing week numbers by @gpbl in https://github.com/gpbl/react-day-picker/pull/1712
* fix(i18n): caption buttons inverted when using RTL direction and multiple months by @gpbl in https://github.com/gpbl/react-day-picker/pull/1744
* docs: update range mode documentation @jorostoyanov in https://github.com/gpbl/react-day-picker/pull/1717

## New Contributors
* @7PH made their first contribution in https://github.com/gpbl/react-day-picker/pull/1703
* @jorostoyanov made their first contribution in https://github.com/gpbl/react-day-picker/pull/1717

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.6.0...v8.7.0

## v8.6.0 (2023-02-18)
## What's Changed

* feat: new `dropdown-buttons` caption layout by @seanockert in https://github.com/gpbl/react-day-picker/pull/1678 (see [example](https://react-day-picker.js.org/basics/navigation#choosing-a-caption-layout)).
* feat: added `displayMonth` prop to `Footer` by @gpbl in https://github.com/gpbl/react-day-picker/pull/1690

## New Contributors
* @seanockert made their first contribution in https://github.com/gpbl/react-day-picker/pull/1678

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.5.1...v8.6

## v8.5.1 (2023-01-27)
## What's Changed
* chore: improve ButtonProps type by @gpbl in https://github.com/gpbl/react-day-picker/pull/1666


**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.5.0...v8.5.1

## v8.5.0 (2023-01-24)
## What's Changed

* chore(a11y): accessibility improvements by @gpbl in https://github.com/gpbl/react-day-picker/pull/1658
  - update `CaptionLabel` to have role `presentation`
  - use `gridcell` directly in button, deprecate `labelDay`
  - update head rows labels 
  - use presentation role for table cells
  - use `rowgroup` for `tbody`
* build: updated rollup settings improving source maps and css types by @gpbl in https://github.com/gpbl/react-day-picker/pull/1650
* build(deps): updated internal dependencies by @gpbl @dependabot

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.4.1...v8.5.0

## v8.4.1 (2022-12-17)
## What's Changed
* feat: add `onDayPointerEnter`, `onDayPointerLeave` props by @norbertkeresztes in https://github.com/gpbl/react-day-picker/pull/1614

## New Contributors
* @norbertkeresztes made their first contribution in https://github.com/gpbl/react-day-picker/pull/1614

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.3.7...v8.4.1

## v8.3.7 (2022-11-20)
## What's Changed

* chore(style): add opacity to differentiate outside days by @hpdganesh in https://github.com/gpbl/react-day-picker/pull/1592
* fix(docs): minor typo in upgrading content by @baldyeagle in https://github.com/gpbl/react-day-picker/pull/1605
* fix(bug): matcherToArray should return a copy of the array by @gpbl in https://github.com/gpbl/react-day-picker/pull/1609
* build(deps): bump loader-utils from 2.0.2 to 2.0.4 by @dependabot in https://github.com/gpbl/react-day-picker/pull/1603

## New Contributors

* @baldyeagle made their first contribution in https://github.com/gpbl/react-day-picker/pull/1605
* @hpdganesh made their first contribution in https://github.com/gpbl/react-day-picker/pull/1592

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.3.6...v8.3.7

## v8.3.6 (2022-11-06)
## What's Changed

* fix: set tab-index to 0 when day is focused by @gpbl in https://github.com/gpbl/react-day-picker/pull/1601
* Upgraded dependencies by @gpbl in https://github.com/gpbl/react-day-picker/pull/1580

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.3.5...v8.3.6

## v8.3.5 (2022-10-10)
## What's Changed
* fix: `range_middle` class is added to days not in the selected range by @gpbl in https://github.com/gpbl/react-day-picker/pull/1581


**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.3.4...v8.3.5

## v8.3.4 (2022-10-09)
## What's Changed
* build: fix CSS module types  by @gpbl in https://github.com/gpbl/react-day-picker/pull/1578
* fix: disable tab for outside days (#1567) by @DanielJKelly in https://github.com/gpbl/react-day-picker/pull/1576

## New Contributors
* @DanielJKelly made their first contribution in https://github.com/gpbl/react-day-picker/pull/1576

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.3.1...v8.3.2

## v8.3.1 (2022-10-03)
## What's Changed
* fix: types for selection modes not being correctly set by @gpbl in https://github.com/gpbl/react-day-picker/pull/1571
* fix: isMatch to match open DateIntervals by @gpbl in https://github.com/gpbl/react-day-picker/pull/1572


**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.3.0...v8.3.1

## v8.3.0 (2022-09-26)
## What's Changed
* feat: add new `id` prop by @gpbl in https://github.com/gpbl/react-day-picker/pull/1556
* feat: week localization props: `ISOWeek`, `firstWeekContainsDate` by @gpbl in https://github.com/gpbl/react-day-picker/pull/1558
* fix: infinite recursion when focusing next days by @eXamadeus in https://github.com/gpbl/react-day-picker/pull/1549
* fix: disabled modifiers with min/max range selections by @gpbl in https://github.com/gpbl/react-day-picker/pull/1566
* fix: improved CSS `focus-visible` and disabled styles by @gpbl in https://github.com/gpbl/react-day-picker/pull/1565
* chore: updated `SelectSingleEventHandler` interface to type by @gpbl in https://github.com/gpbl/react-day-picker/pull/1555
* chore: cleanup context types and defaults by @gpbl in https://github.com/gpbl/react-day-picker/pull/1561
* chore: use [rollup-plugin-ts](https://www.npmjs.com/package/rollup-plugin-ts) to compile typescript by @gpbl in https://github.com/gpbl/react-day-picker/pull/1562
* chore: add new `Components` type by @gpbl in https://github.com/gpbl/react-day-picker/pull/1563
* chore: reorganize contexts files by @gpbl in https://github.com/gpbl/react-day-picker/pull/1564

## New Contributors
* @eXamadeus made their first contribution in https://github.com/gpbl/react-day-picker/pull/1549

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.2.1...v8.3.0

## v8.2.1 (2022-09-08)
## What's Changed
* fix: CSS module doesn't include the root class by @gpbl in https://github.com/gpbl/react-day-picker/pull/1548

## New Contributors
* @krishna63 made their first contribution in https://github.com/gpbl/react-day-picker/pull/1538
* @AntanasMisiunas made their first contribution in https://github.com/gpbl/react-day-picker/pull/1542

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.2.0...v8.2.1

## v8.2.0 (2022-09-01)
## What's Changed

* new: custom `HeadRow` component by @gpbl in https://github.com/gpbl/react-day-picker/pull/1534
* changed: add `HeadRow` component by @KonradLinkowski in https://github.com/gpbl/react-day-picker/pull/1533
* fixed: selected day outlines in chrome by @gpbl in https://github.com/gpbl/react-day-picker/pull/1536
* fixed: dropdown focus-visible style by @gpbl in https://github.com/gpbl/react-day-picker/pull/1535
* fix: use aria-label for days buttons by @gpbl in https://github.com/gpbl/react-day-picker/pull/1537

## New Contributors

* @KonradLinkowski made their first contribution in https://github.com/gpbl/react-day-picker/pull/1533

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.1.4...v8.2.0

## v8.1.4 (2022-08-28)
## What's Changed
* fix: use parsed `fromDate`/`toDate` in `useInput` by @hypergeometric in https://github.com/gpbl/react-day-picker/pull/1524
* changed: add names to fields and buttons by @gpbl in https://github.com/gpbl/react-day-picker/pull/1530
* changed: focus vs focus-visible styles by @gpbl in https://github.com/gpbl/react-day-picker/pull/1531

## New Contributors
* @hypergeometric made their first contribution in https://github.com/gpbl/react-day-picker/pull/1524

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.1.3...v8.1.4

## v8.1.3 (2022-08-24)
## What's Changed
* fix: `onDayClick` called twice in selection mode by @gpbl in https://github.com/gpbl/react-day-picker/pull/1520
* changed: accept `undefined` for the modifier props by @gpbl in https://github.com/gpbl/react-day-picker/pull/1521


**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.1.2...v8.1.3

## v8.1.2 (2022-08-22)
## What's Changed
* fix: do not focus disabled or hidden days by @gpbl in https://github.com/gpbl/react-day-picker/pull/1519


**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.1.1...v8.1.2

## v8.1.1 (2022-08-19)
## What's Changed

* fix: prevent focus from moving beyond `toDate` and `fromDate` by @kimamula in https://github.com/gpbl/react-day-picker/pull/1468
* fix: page keys not working when using `setMonth` by @kimamula in https://github.com/gpbl/react-day-picker/pull/1510
* fix: add `onSelect` to the `DayPickerContextValue` by @gpbl in https://github.com/gpbl/react-day-picker/pull/1515
* fix: rdp class not added to root element when using `className`  by @gpbl in https://github.com/gpbl/react-day-picker/pull/1517

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.1.0...v8.1.1

## v8.1.0 (2022-08-11)
## What's Changed

* new: add prefix to auto generated ids by @mihkeleidast in https://github.com/gpbl/react-day-picker/pull/1493
* new: `addedToRange` to the exported utilities by @stopr29 in https://github.com/gpbl/react-day-picker/pull/1495
* new: revert to use `disabled` attribute instead of `aria-disabled` (reverts by @gpbl in https://github.com/gpbl/react-day-picker/pull/1451). See ongoing discussion in https://github.com/gpbl/react-day-picker/pull/1468.
* new(css): use pure selector for CSS variables by @andyschulzz in https://github.com/gpbl/react-day-picker/pull/1481, https://github.com/gpbl/react-day-picker/pull/1499
  - Note this may require some changes in your CSS
* fix: `@reach/auto-id` warnings by removing the dependency by @gpbl in https://github.com/gpbl/react-day-picker/pull/1484
* fix: home/end buttons behavior with `startOfWeek` by @apdrsn in https://github.com/gpbl/react-day-picker/pull/1492
* package: upgraded dependencies by @gpbl in https://github.com/gpbl/react-day-picker/pull/1497

## New Contributors
* @kimamula made their first contribution in https://github.com/gpbl/react-day-picker/pull/1476
* @andyschulzz made their first contribution in https://github.com/gpbl/react-day-picker/pull/1481
* @apdrsn made their first contribution in https://github.com/gpbl/react-day-picker/pull/1492
* @mihkeleidast made their first contribution in https://github.com/gpbl/react-day-picker/pull/1493
* @stopr29 made their first contribution in https://github.com/gpbl/react-day-picker/pull/1495

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.0.7...v8.1.0

## v8.0.7 (2022-06-12)
## What's Changed
* fixed: missing `dropdown_year` CSS class in `YearsDropdown` by @pwolfert in https://github.com/gpbl/react-day-picker/pull/1466
* fixed: Maximum update depth exceeded when select the range date by @gpbl in https://github.com/gpbl/react-day-picker/pull/1470
* website(chore): Upgrade docusaurus to beta 22 by @gpbl in https://github.com/gpbl/react-day-picker/pull/1469

## New Contributors
* @pwolfert made their first contribution in https://github.com/gpbl/react-day-picker/pull/1466

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.0.6...v8.0.7

## v8.0.6 (2022-06-05)
## What's Changed
* fix(docs): fix typo by @denkristoffer in https://github.com/gpbl/react-day-picker/pull/1457

## New Contributors
* @denkristoffer made their first contribution in https://github.com/gpbl/react-day-picker/pull/1457

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.0.5...v8.0.6

## v8.0.5 (2022-05-15)
## What's Changed
* fix(docs): typo in property name by @dzek69 in https://github.com/gpbl/react-day-picker/pull/1442
* Use aria-disabled instead of disabled by @gpbl in https://github.com/gpbl/react-day-picker/pull/1451

## New Contributors
* @dzek69 made their first contribution in https://github.com/gpbl/react-day-picker/pull/1442

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.0.4...v8.0.5

## v8.0.4 (2022-04-14)
## What's Changed

- Added src directory to the package for better source maps

**Full Changelog**: https://github.com/gpbl/react-day-picker/compare/v8.0.3...v8.0.4
