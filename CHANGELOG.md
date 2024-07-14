# Changelog

See the [Releases page](https://github.com/gpbl/react-day-picker/releases) on Github for the complete list of changes, diffs and contributors, or the [list of versions](https://www.npmjs.com/package/react-day-picker?activeTab=versions) published on npm.

## v9 - in development 🚧

_First beta release date: 2024-05-28_

DayPicker v9 is in development as the next major release. See updated docs at http://daypicker.dev/next.

To try the new version, install the `next` tag:

```bash
npm install react-day-picker@next
```

### What’s New in DayPicker 9

This release includes important updates related to accessibility, styles and performance.

#### At a glance

- Enhanced accessibility to better comply with [WCAG21](https://www.w3.org/TR/WCAG21/) recommendations.
- Simplified styles and selectors with new CSS variables.
- Added support for UTC dates.
- Improved selection logic for range mode.
- Improved typings and props for better compatibility in `strict` mode.
- The custom components system has been updated. Now all components can be customized.
- Improved rendering performance and reduced memory impact.
- Added support for the Jalali Calendar.
- Added new `hideWeekdayRow` and `hideNavigation` props.
- New `dropdown-years` and `dropdown-months` caption layouts.
- Removed `date-fns` from peer dependencies.

#### Breaking Changes

We tried to keep breaking changes to a minimum, but were inevitable to improve the library. Here are the most important changes:

- Requires React 18+.
- The updated HTML output could break your unit tests.
- Custom styles will likely not work.
- Some ARIA labels have been changed.
- Custom Components may break.
- Some typings have been renamed or deprecated.
- Removed the `useInput` hook (see documentation for alternatives).

See the [migration guide](https://daypicker.dev/next/upgrading) for help upgrading your app.

#### Help Testing this Version

Please report any issues or provide feedback on the [GitHub repository](https://github.com/gpbl/react-day-picker/discussions/categories/daypicker-v9).

We welcome feedback about the upgrade process, to ensure it's smooth for everyone.

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

## v7.4.9

_Release date: 2021-03-18_

- Re-add `transform-react-remove-prop-types` to `.babelrc` ([#1165](https://github.com/gpbl/react-day-picker/issues/1165))
- Add `null` to `RangeModifier` ([#1037](https://github.com/gpbl/react-day-picker/issues/1037))
- Corrected typing for `RangerModifier` ([#1065](https://github.com/gpbl/react-day-picker/issues/1065))
- Add React 17 as peer dependency ([#1075](https://github.com/gpbl/react-day-picker/issues/1075))
- Add `aria-polite` to announce month change during navigation ([#1033](https://github.com/gpbl/react-day-picker/issues/1033))

## v7.4.8

_Release date: 2020-04-19_

- Fixed uncontrolled `DayPickerInput` causing the field not being cleared (#990 by @ntlf)
- Fixed custom `classNames` breaking `aria-` props (#1004 by @camflan)
- Added `style` type to `DayPickerInputProps` (#996 by @anilkabobo)
- Fixed UMD build ([#1009](https://github.com/gpbl/react-day-picker/issues/1009))
- (chore) Use moment `localeData` via documented API (#968)

## v7.4](

_Release Date: 2019-10-20_

##

_Release date: # DayPicke_

- Fix text wrapping on `.DayPicker-Day` default style (#824)
- Add `focus()` method for focusing the `DayPicker` wrapper element (#761)

#### Da

_Release date: PickerInpu_

- When DayPicker input state is controlled, correctly set the input text if the `value` prop updates ([#816](https://github.com/gpbl/react-day-picker/issues/816) by [MitchRivet](https://github.com/MitchRivet))
- Fix DayPickerInput value does not recompute on `locale` change (fix #938) (#939)
- Set overlayHasFocus to false in hideAfterDayClick (#941)

_Release date: ### Typing_

- Improve typings, use TypeScript 3.1 (#929)
- Add formatDate and parseDate to typings (#873)
- Make `format` optional (#923)
- Remove `initialMonth` from `defaultProps` (#874)

## v7.3.2

_Release date: 2019-08-08_

Updates for TypeScript users:

- added `tabIndex` to input component types ([#909](https://github.com/gpbl/react-day-picker/issues/909) by [clarityflowers](https://github.com/clarityflowers))
- fixed types for utilities ([#904](https://github.com/gpbl/react-day-picker/issues/904) by [Nibblesh](https://github.com/Nibblesh) and [#899](https://github.com/gpbl/react-day-picker/issues/899) by [DylanVann](https://github.com/PprevDylanVann))

## v7.3](

_Release Date: 2019-02-21_

Mostly an update for TypeScript users, few minor fixes, and two new minor props to the input component.

**DayPicker**

- Fixed: left/right keyboard navigation on RTL ([#845](https://github.com/gpbl/react-day-picker/issues/845) by [johnjesse](https://github.com/johnjesse))
- Fixed: cancel keydown events ([#844](https://github.com/gpbl/react-day-picker/issues/844) by [johnjesse](https://github.com/johnjesse))
- Fix for week number's `tabIndex` when `onWeekClick` is not defined ([#818](https://github.com/gpbl/react-day-picker/issues/818) by [uosl](https://github.com/uosl))
- TypeScript: added `isDate` and `isSameMonth` to `utils` definitions ([#854](https://github.com/gpbl/react-day-picker/issues/854) by [rnons](https://github.com/rnons))
- TypeScript: make months and weekdays types slightly less restrictive ([#843](https://github.com/gpbl/react-day-picker/issues/843) by [johnjesse](https://github.com/johnjesse))
- TypeScript: add missing props to `weekdayElement` and `captionElement` ([#842](https://github.com/gpbl/react-day-picker/issues/842) by [johnjesse](https://github.com/johnjesse))
- TypeScript: added missing `utils` export ([#834](https://github.com/gpbl/react-day-picker/issues/834) by [davidspiess](https://github.com/davidspiess))
- TypeScript: missing default entries to `classNames` ([#833](https://github.com/gpbl/react-day-picker/issues/833) by [saenglert](https://github.com/saenglert))
- TypeScript: updated type definitions for `locale` ([#828](https://github.com/gpbl/react-day-picker/issues/828) by [lukyth](https://github.com/lukyth))
- TypeScript: add definitions for moment locale utils ([#806](https://github.com/gpbl/react-day-picker/issues/806) by [howlettt](https://github.com/howlettt))

**DayPickerInput**

- Added `onDayPickerShow` prop ([#831](https://github.com/gpbl/react-day-picker/issues/831) by
  [saenglert](https://github.com/saenglert))
- Added `style` prop ([#832](https://github.com/gpbl/react-day-picker/issues/832) by
  [kirillku](https://github.com/kirillku))
- Typescript: fixed `classNames` definition ([#796](https://github.com/gpbl/react-day-picker/issues/796) by
  [davidspiess](https://github.com/davidspiess))

## v7.2.4

_Release date: 2018-09-13_

- Fix regression: re-enabled click on disabled days ([#789](https://github.com/gpbl/react-day-picker/issues/789) by
  [dewey92](https://github.com/dewey92))
- Fixed an issue with paged navigation when using `toMonth` or `fromMonth` props ([#787](https://github.com/gpbl/react-day-picker/issues/787))

## v7.2](

_Release Date: 2018-08-27_

**DayPicker**

- (CSS) Added `left: auto` to navigation buttons style for easier styling ([#771](https://github.com/gpbl/react-day-picker/issues/771) by
  [DDDDDanica](https://github.com/DDDDDanica))
- (CSS) Changed css to use `em` units ([#777](https://github.com/gpbl/react-day-picker/issues/777) by
  [signalwerk](https://github.com/signalwerk))
- (TypeScript) Added `undefined` and `null` as allowed modifier types ([#775](https://github.com/gpbl/react-day-picker/issues/775) by
  [Lavoaster](https://github.com/Lavoaster))

**DayPickerInput**

- Added `onDayPickerHide` prop
- `onDayChange` will receive the component instance as third argument (useful for checking the input's value)
- (TypeScript) Added top-level type definition for DayPickerInput ([#762](https://github.com/gpbl/react-day-picker/issues/762) by
  [kryops](https://github.com/kryops))
- (TypeScript) Fixed definition for `DayPickerInput.dayPicker` top-level type definition for DayPickerInput ([#790](https://github.com/gpbl/react-day-picker/issues/790) by
  [strax](https://github.com/strax))
- Fixed: input content was deleted when typing an invalid date in some cases ([#778](https://github.com/gpbl/react-day-picker/issues/778))

## v7.1.1

_Release date: 2018-07-07_

- Fixed a flickering issue with mouse hover using the default style ([#726](https://github.com/gpbl/react-day-picker/issues/726) by
  [sv3k](https://github.com/sv3k))
- (DayPickerInput) Fixed: disabled days not working correctly with `classNames` ([#741](https://github.com/gpbl/react-day-picker/issues/741) by
  [hannescalibrate](https://github.com/hannescalibrate))
- (DayPickerInput) Do not focus the input field if not supported by a custom `component` ([#747](https://github.com/gpbl/react-day-picker/issues/747))

## v7.1.9

_Release date: 2018-05-13_

- (DayPickerInput) Fixed an error when year from input is too big ([#717](https://github.com/gpbl/react-day-picker/issues/717))

## v7.1.8

_Release date: 2018-05-06_

- Fixed: `tabIndex={0}` was not passed to the container ([#716](https://github.com/gpbl/react-day-picker/issues/716))
- (DayPickerInput) Fixed: interaction with the overlay was not working correctly on Safari or IE 11 ([#715](https://github.com/gpbl/react-day-picker/issues/715))

## v7.1.6

_Release date: 2018-04-15_

- Updated to support React 17 ([#696](https://github.com/gpbl/react-day-picker/issues/696))
- Added: `isSameMonth`, `isDate` functions to DateUtils.
- Fixed: month was reset when selecting multiple days ([#669](https://github.com/gpbl/react-day-picker/issues/669))
- Fixed: week numbers may not be correct ([#692](https://github.com/gpbl/react-day-picker/issues/692))
- (DayPickerInput) Fixed: overlay did not reset the displayed month when appearing again ([#667](https://github.com/gpbl/react-day-picker/issues/667))
- (DayPickerInput) Fixed: overlay was shown even if the input was disabled ([#680](https://github.com/gpbl/react-day-picker/issues/680))

## v7.1](

_Release Date: 2018-03-04_

**DayPicker**

- Added: [`enableOutsideDaysClick`](http://daypicker.dev/api/DayPicker#enableOutsideDaysClick) prop ([#585](https://github.com/gpbl/react-day-picker/issues/585) by
  [smesgr](https://github.com/smesgr))
- Fixed: month may be not defined in the navigation component ([#607](https://github.com/gpbl/react-day-picker/issues/607) by
  [MhMadHamster](https://github.com/MhMadHamster))
- Fixed: outside days were shown also when using `toMonth`/`fromMonth` ([#630](https://github.com/gpbl/react-day-picker/issues/630))
- Fixed: `Cannot read property 'focus'` error with outside days ([#646](https://github.com/gpbl/react-day-picker/issues/646))
- TypeScript: added more types ([#618](https://github.com/gpbl/react-day-picker/issues/618) by
  [adidahiya](https://github.com/adidahiya))

**DayPickerInput**

- Improved: focus/blur behavior ([#598](https://github.com/gpbl/react-day-picker/issues/598) by
  [jbarco](https://github.com/bartpeeters), [#579](https://github.com/gpbl/react-day-picker/issues/579))
- Improved: `onDayChange` is called `undefined` when day is not valid ([#647](https://github.com/gpbl/react-day-picker/issues/647))
- Added: [`keepFocus`](http://daypicker.dev/api/DayPickerInput#keepFocus) prop ([#598](https://github.com/gpbl/react-day-picker/issues/598) by
  [bartpeeters](https://github.com/bartpeeters))
- Fixed: use `dayPickerProps.month` before the input's value ([#612](https://github.com/gpbl/react-day-picker/issues/612) by
  [kradical](https://github.com/kradical))
- Typescript: fixed `onDayChange` definition ([#622](https://github.com/gpbl/react-day-picker/issues/622))

> This should be the last minor release before [v8.0.0](https://github.com/gpbl/react-day-picker/milestone/10). The next major version should not break existing code but as we are moving [from webpack to rollup](https://github.com/gpbl/react-day-picker/milestone/10) we will bump a major for safety :)

## v7.0.7

_Release date: 2018-01-09_

- (DayPickerInput) Fixed: `daypickerProps.onMonthChange` not being called ([#604](https://github.com/gpbl/react-day-picker/issues/604) by
  [ah-adarlow](https://github.com/ah-adarlow))

## v7.0.6

_Release date: 2017-12-31_

- (DayPickerInput) Fixed: focusing behavior when pressing the `TAB` key ([#594](https://github.com/gpbl/react-day-picker/issues/594))
- (DayPickerInput) Fixed: wrong behavior with malformatted dates using the included moment `parseDate` function ([#584](https://github.com/gpbl/react-day-picker/issues/584) by
  [jbarco](https://github.com/jbarco))
- Removed duplicated style from CSS ([#591](https://github.com/gpbl/react-day-picker/issues/591) by
  [nicoffee](https://github.com/nicoffee))

## v7.0.5

_Release date: 2017-12-03_

- (Typescript) Various fixes to type definitions
- (DayPickerInput) Fixed: issue parsing dates in January
- Fixed: Updated month prop not updating the calendar when displaying multiple
  months ([#580](https://github.com/gpbl/react-day-picker/issues/580))

## v7.0.0

\_Release Date: 2017-11-25

**Breaking changes**

- `enableOutsideDays` prop is now named `showOutsideDays`
- if you are using `DayPickerInput`, we removed the moment.js dependency and
  changed how to pass props to the input field (upgrade is easy, see below).
- if you are using commonjs to import the component, change your code:
  ```diff
  - var DayPicker = require('react-day-picker`)
  + var DayPicker = require('react-day-picker`).default
  ```
- if you are using TypeScript and upgrading from `v6.2.1` (see
  [#533](https://github.com/gpbl/react-day-picker/issues/533)), use the default
  import:
  ```diff
  - import { DayPicker } from 'react-day-picker`;
  + import DayPicker from 'react-day-picker';
  ```
- if you are using a custom CSS, consider that now the calendar table is inside
  a `div` with a `.DayPicker-Months` CSS class.

If you find problems while upgrading, please
[add an issue](https://github.com/gpbl/react-day-picker/issues/new), thanks!

**New features**

- Improved layout and style. Added `.DayPicker-Months` container.
- Added: [`renderWeek`](http://daypicker.dev/api/DayPicker`renderWeek)
  prop ([#497](https://github.com/gpbl/react-day-picker/issues/497) by
  [jenshandersson](https://github.com/jenshandersson))
- Added:
  [`onTodayButtonClick`](http://daypicker.dev/api/DayPicker#onTodayButtonClick)
  prop ([#529](https://github.com/gpbl/react-day-picker/issues/529))
- Added:
  [`showWeekDays`](http://daypicker.dev/api/DayPicker#showWeekDays)
  prop. Set it to `false` to hide weekday names
- Added: `month` prop to
  [`navbarElement`](http://daypicker.dev/api/DayPicker#navbarElement)
  ([#552](https://github.com/gpbl/react-day-picker/issues/552))
- Renamed `enableOutsideDays` prop to
  [`showOutsideDays`](http://daypicker.dev/api/DayPicker#showOutsideDays)

**Bug fixes**

- Fixed: multiple months navigation not working correctly in some cases
  ([#556](https://github.com/gpbl/react-day-picker/issues/556) by
  [hydrognomik](https://github.com/azhangstrata))
- Fixed: (Typescript) added again `DayModifiers` and `Modifiers` back to type
  definitions file ([#526](https://github.com/gpbl/react-day-picker/issues/526)
  by [azhangstrata](https://github.com/azhangstrata))
- Fixed: (Typescript) missing default export
  ([#533](https://github.com/gpbl/react-day-picker/issues/533))
- Fixed: (a11y) removed `role="application"`
  ([#548](https://github.com/gpbl/react-day-picker/issues/548) by
  [trezy](https://github.com/trezy))

### Da

_Release date: PickerInpu_

**Breaking changes**

- The moment.js requirement
  [has been removed](https://github.com/gpbl/react-day-picker/pull/518), and you
  should use
  [`parseDate`](http://daypicker.dev/api/DayPickerInput#parseDate) and
  [`formatDate`](http://daypicker.dev/api/DayPickerInput#formatDate)
  props to parse and format the dates. If you want to keep using moment.js, your
  existing code should changes as follows:

  ```diff
    import DayPicker from 'react-day-picker/DayPickerInput'
  + import { formatDate, parseDate, } from 'react-day-picker/moment';

    function MyDayPicker() {
      return (
        <DayPickerInput
          placeholder="Please choose a date"
          format="LL"
  +       formatDate={formatDate}
  +       parseDate={parseDate}
        >
      );
    }
  ```

  See also [this example](http://daypicker.dev/examples/input-moment).

- You must pass additional props to the input component using the
  [`inputProps`](http://daypicker.dev/api/DayPickerInput#inputProps)
  prop. _This is not a breaking change if you are just using `placeholder` or
  `value`_. E.g.:
  ```diff
  <DayPickerInput
     placeholder="Type a day"
     value={this.state.selectedDay}
  -  onFocus={myFocusHandler}
  -  className="my-input-css"
  +  inputProps={{
  +   onFocus: myFocusHandler,
  +   className: 'my-input-css,
  +  }}
  />
  ```

**New features**

- New:
  [`inputProps`](http://daypicker.dev/api/DayPickerInput#inputProps)
  prop to pass additional props to the input component
- New:
  [`parseDate`](http://daypicker.dev/api/DayPickerInput#parseDate) and
  [`formatDate`](http://daypicker.dev/api/DayPickerInput#formatDate)
  props
- New:
  [`inputProps`](http://daypicker.dev/api/DayPickerInput#inputProps)
  prop to pass additional props to the input component
- New:
  [`overlayComponent`](http://daypicker.dev/api/DayPickerInput#overlayComponent)
  prop: useful to customize the overlay component
  ([#477](https://github.com/gpbl/react-day-picker/issues/477), thanks to
  [wldcordeiro](https://github.com/wldcordeiro))
- New: allow to change `numberOfMonths`, `selectedDays` props from
  `dayPickerProps` ([#513](https://github.com/gpbl/react-day-picker/issues/513),
  [#531](https://github.com/gpbl/react-day-picker/issues/531) by
  [hydrognomik](https://github.com/hydrognomik)). Useful for selecting range of
  days ([example](http://daypicker.dev/examples/input-from-to)).
- New:
  [`showOverlay`](http://daypicker.dev/api/DayPickerInput#showOverlay)
  prop: shows the overlay at the initial rendering (useful for styling)
- New: [`getInput`](http://daypicker.dev/api/DayPickerInput#getInput)
  and
  [`getDayPicker`](http://daypicker.dev/api/DayPickerInput#getDayPicker)
  public methods

* Changed: clicking the Today Button will set the input value to today
  ([#561](https://github.com/gpbl/react-day-picker/issues/561))
* Changed: removed `fixedWeek` prop. Use `dayPickerProps ={{ fixedWeek: true }}`
  to restore it.

**Bug fixes**

- Fixed: some modifiers were not passed down when using a custom `classNames`
  ([#517](https://github.com/gpbl/react-day-picker/issues/517),
  [#504](https://github.com/gpbl/react-day-picker/issues/504) by
  [tume](https://github.com/tume))
- Fixed: focus behavior on Firefox
  ([#525](https://github.com/gpbl/react-day-picker/issues/525) by
  [martinmosko](https://github.com/martinmosko))
- Fixed: value not updated when changed in some cases
  ([#535](https://github.com/gpbl/react-day-picker/issues/535))
- Fixed: localization bug when using multiple languages
  ([#509](https://github.com/gpbl/react-day-picker/issues/509))

## v6.2.0

_Release Date: 2017-10-05_

- Added: TypeScript definitions for DayPickerInput
  ([#487](https://github.com/gpbl/react-day-picker/issues/487) by
  [adidahiya](https://github.com/adidahiya) and
  [lpcarignan](https://github.com/lpcarignan))

**Bug fixes**

- Fixed: an issue with React 0.14
- Fixed: a console warning in React 16
  ([#493](https://github.com/gpbl/react-day-picker/issues/493))
- `DayPickerInput` Fix an error when `format` is passed as array
  ([#502](https://github.com/gpbl/react-day-picker/issues/502))
- `DayPickerInput` Fix update when receiving new props
  ([#495](https://github.com/gpbl/react-day-picker/issues/495) by
  [kradical](https://github.com/kradical))

## v6.1.1

_Release date: 2017-09-27_

- Added: React 16 as peer dependency
  ([#498](https://github.com/gpbl/react-day-picker/issues/498) by
  [brycehill](https://github.com/brycehill))
- Allow node consumers to remove propTypes for production builds
  ([#463](https://github.com/gpbl/react-day-picker/issues/463) by
  [oigewan](https://github.com/oigewan))

**Bug fixes**

- Fixed: disabled interaction in RTL
  ([#471](https://github.com/gpbl/react-day-picker/issues/471) by
  [edoshor](https://github.com/edoshor))

## v6.1.0

_Release Date: 2017-07-09_

**Improvements**

- Added new
  [`onDayMouseDown`](http://daypicker.dev/docs/api.html#ondaymousedown)
  and
  [`onDayMouseUp`](http://daypicker.dev/docs/api.html#ondaymouseup)
  props ([#445](https://github.com/gpbl/react-day-picker/issues/445) by
  [eldritchideen](https://github.com/eldritchideen))

**Bug fixes**

- Fixed: before/after modifier not working as expected
  ([#451](https://github.com/gpbl/react-day-picker/issues/451))
- Fixed: changing some props would not update day cells
  ([#452](https://github.com/gpbl/react-day-picker/issues/452) by
  [oigewan](https://github.com/oigewan))
- Fixed: `classNames` may prevent clicking on outside days
  ([#449](https://github.com/gpbl/react-day-picker/issues/449))

## v6.0.5

_Release date: 2017-07-02_

**Bug fixes**

- Fixed: today button inside a form submits the form
  ([#443](https://github.com/gpbl/react-day-picker/issues/443))
- Fixed: before/after modifiers not working as expected in some cases
  ([#442](https://github.com/gpbl/react-day-picker/issues/442))
- `DayPickerInput` Fixed: allow multiple formats in `format` prop
  ([#439](https://github.com/gpbl/react-day-picker/issues/439))

## v6.0.4

_Release date: 2017-06-26_

**Bug fixes**

- Fixed: next and previous buttons not working via keyboard
  ([#430](https://github.com/gpbl/react-day-picker/issues/430))
- Fixed: wrapper style cannot be set when using CSS modules
  ([#432](https://github.com/gpbl/react-day-picker/issues/432))

## v6.0.3

_Release date: 2017-06-22_

**Bug fixes**

- `DayPickerInput` Call `onDayChange(undefined, {})` when user empties the input
  field. ([#423](https://github.com/gpbl/react-day-picker/issues/423))
- `DayPickerInput` Fixed: shown month was not updated when updating month in
  `dayPickerProps` ([#425](https://github.com/gpbl/react-day-picker/issues/425))

## v6.0.0

\_Release Date: 2017-06-16

This major release focuses on performance, improves accessibility and fixes some
bugs. There are some possible breaking changes, but they are easy to fix (read
below).

**Breaking changes**

- The container's HTML structure has changed: the interactive element used to
  focus the calendar has been moved into a wrapper to improve accessibility
  ([#392](https://github.com/gpbl/react-day-picker/issues/392)):

  ```diff
  <div className="DayPicker">
  + <div className="DayPicker-wrapper">
    <!-- rendered stuff here -->
  + </div>
  </div>
  ```

  This is a **breaking change** if you are styling the component using your own
  CSS or with the `classNames` prop.

  - If you are styling with your own stylesheet, rename your `.DayPicker`
    selector to `.DayPicker-wrapper`:

  ```diff
  - .DayPicker {
  + .DayPicker-wrapper {
  ```

  - If you are using `classNames` with the `container` prop, rename the
    `container` className to `wrapper`.

- The container element is now an `inline-block` element.

- When using `fromMonth`/`toMonth` props, navigation buttons now are rendered
  and hidden via CSS. Before, the buttons were not rendered at all, and it was
  impossible to style them
  ([#366](https://github.com/gpbl/react-day-picker/issues/366))

  This is a **breaking change** if you are using those props and styling the
  component using your own CSS or with the `classNames` prop.

  In such cases, the buttons will be always shown even if the previous or the
  next months are not navigable.

  - If you are styling with your own stylesheet, add a
    `.DayPicker-NavButton--interactionDisabled` selector to your style with
    `display: none`.
  - If you are using `classNames`, add a `navButtonInteractionDisabled` to your
    `classNames` with `display: none` to hide the buttons.

- Improved rendering performance using `shouldComponentUpdate` and
  `PureComponent` ([#389](https://github.com/gpbl/react-day-picker/issues/389))

  It should not be a breaking change, but if something is not working for you
  when updating some props please file an issue 🙃

**Improvements**

- Allow `{after, before}` modifiers in the same object
  ([#354](https://github.com/gpbl/react-day-picker/issues/354)). You can now
  write before/after modifiers such as `disabledDays={ { before: aDate, after: aDate }}`.
- **DayPickerInput**: added
  [`clickUnselectsDay`](http://daypicker.dev/docs/api-input.html#clickunselectsday)
  prop to unselect and clear the input when clicking on a previously selected
  day ([#399](https://github.com/gpbl/react-day-picker/issues/399))

**Bug fixes**

- Fixed an issue where users were able to focus outside days
  ([#400](https://github.com/gpbl/react-day-picker/issues/400) by
  [oigewan](https://github.com/oigewan))
- Fixed an issue with Internet Explorer 11
  ([#403](https://github.com/gpbl/react-day-picker/issues/403) by
  [oigewan](https://github.com/oigewan))
- **a11y**: fixed a warning `You have an unlabeled element or control.` shown
  with react-a11y ([#386](https://github.com/gpbl/react-day-picker/issues/386))
- **DayPickerInput**: fixed an issue when updating the `month`'s
  `dayPickerProps` value
  ([#380](https://github.com/gpbl/react-day-picker/issues/380) by
  [Yustynn](https://github.com/Yustynn))

**Improvements in the built version**

These changes applies to the production build from the `lib` dir (e.g. that
served from unpkg.com).

- Removed prop types from production build
  ([#349](https://github.com/gpbl/react-day-picker/issues/349))
- Include `DayPicker.Input` in the built file
  ([#383](https://github.com/gpbl/react-day-picker/issues/383))

  Use `<DayPicker.Input />` to render the input component.

## v5.5.3

_Release date: 2017-05-25_

- Bugfix for `DayPickerInput`: updated `value` prop now will be reflected in the
  component's state
  ([#363](https://github.com/gpbl/react-day-picker/issues/363))

## v5.5.0

_Release Date: 2017-05-09_

**New DayPickerInput component**

Use the `DayPickerInput` component to render an input field interacting with the
day picker ([#213](https://github.com/gpbl/react-day-picker/issues/213)).

See [example](http://daypicker.dev/examples/input.html),
[docs](http://daypicker.dev/docs/input.html) and
[API reference](http://daypicker.dev/docs/api-input.html).

**New features**

- New
  [`todayButton`](http://daypicker.dev/docs/api-daypicker.html#todaybutton)
  prop ([#329](https://github.com/gpbl/react-day-picker/issues/329)).

  Use this prop to display a button on the calendar's footer to switch to the
  current month
  ([example](http://daypicker.dev/examples/customization-today-button.html)).

- New
  [`showWeekDays`](http://daypicker.dev/docs/api-daypicker.html#showweekdays)
  and
  [`onWeekClick`](http://daypicker.dev/docs/api-daypicker.html#onweekclick)
  props ([#304](https://github.com/gpbl/react-day-picker/issues/304)).

  Use this props to display and interact with the year's week numbers
  ([example](http://daypicker.dev/examples/customization-week-numbers.html)).

- New `daysOfWeek`
  [modifiers type](http://daypicker.dev/docs/modifiers.html) to match
  days of the weeks
  ([#330](https://github.com/gpbl/react-day-picker/issues/330)).

  For example, to match Sundays and Mondays:

  ```diff
  <DayPicker
    disabledDays={
  -    day => day.getDate() === 0 || day.getDate() === 1
  +    daysOfWeek: [0, 1]
    }
  />
  ```

## v5.4.3

_Release date: 2017-05-06_

- Bugfix: `isBeforeDay`/`isAfterDay` functions where not exported correctly
  ([#327](https://github.com/gpbl/react-day-picker/pull/327))

## v5.4.2

_Release date: 2017-05-03_

- Bugfix: `aria` role in Week element
  ([#322](https://github.com/gpbl/react-day-picker/pull/322) by
  [emily-plummer](https://github.com/emily-plummer))

## v5.4.1

_Release Date: 2017-04-29_

- Expose [ModifiersUtils](http://daypicker.dev/ModifiersUtils.html)
  functions ([#309](https://github.com/gpbl/react-day-picker/pull/309) by
  [cwmoo740](https://github.com/cwmoo740))

  Use this set of functions if you need to validate or test your modifiers.

## v5.3.0

_Release Date: 2017-04-25_

- Include Typescript Type Definitions
  ([#303](https://github.com/gpbl/react-day-picker/pull/303))
- Added: a new
  [`modifiersStyles`](http://daypicker.dev/docs/api-daypicker.html#modifiersstyles)
  prop to add inline style to the days matching the given modifiers (see
  [`example`](http://daypicker.dev/docs/api-daypicker.html#modifiersstyles)).
- Added: `isDayBefore`, `isDayAfter` functions to
  [DateUtils](http://daypicker.dev/DateUtils.html).

**Bug fixes**

- Functions were not considered in arrays of modifiers
  ([#301](https://github.com/gpbl/react-day-picker/pull/301))
- Fixes possible issues when comparing days with different timezones
  ([#307](https://github.com/gpbl/react-day-picker/pull/307))

## v5.2.3

_Release date: 2017-04-14_

- Fixed `PropTypes` warnings in React 15.5.

## v5.2.0

_Release Date: 2017-03-09_

- Allow overriding `today` modifier
  ([#279](https://github.com/gpbl/react-day-picker/pull/279) by
  [maxdubrinsky](https://github.com/maxdubrinsky))
- Pass React Components to
  [`navBarElement`](http://daypicker.dev/docs/api-daypicker.html#navBarElement),
  [`captionElement`](http://daypicker.dev/docs/api-daypicker.html#captionElement),
  [`weekdayElement`](http://daypicker.dev/docs/api-daypicker.html#weekdayElement)
  ([#280](https://github.com/gpbl/react-day-picker/pull/280) by
  [cwmoo740](https://github.com/cwmoo740))

- Fixed `aria` roles for weekdays and months HTML elements
  ([#276](https://github.com/gpbl/react-day-picker/pull/276) by
  [oigewan](https://github.com/oigewan))

## v5.1.2

_Release date: 2017-03-03_

- Fixed: an issue with keyboard navigation when using `classNames` prop
  ([#269](https://github.com/gpbl/react-day-picker/pull/269) by
  [oigewan](https://github.com/oigewan),
  [#275](https://github.com/gpbl/react-day-picker/pull/275))
- Fixed: installation issue with bower

## v5.1.1

_Release Date: 2017-03-03_

- New
  [`classNames`](http://daypicker.dev/docs/api-daypicker.html#classnames)
  prop ([#264](https://github.com/gpbl/react-day-picker/issues/264)).

  Use this prop to change the CSS class names or add support for CSS modules
  ([#73](https://github.com/gpbl/react-day-picker/issues/73), see
  [this example](http://daypicker.dev/docs/css-modules.html)).

- New [`month`](http://daypicker.dev/docs/api-daypicker.html#month)
  prop ([#263](https://github.com/gpbl/react-day-picker/issues/263)).

  This differs from the `initialMonth` props as it causes the calendar to
  re-render when its value changes.

- Added: `aria-label` attributes to the navigation bar with the new
  [`labels`](http://daypicker.dev/docs/api-daypicker.html#labels) prop
  ([#258](https://github.com/gpbl/react-day-picker/issues/258)).

## v5.0.0

\_Release Date: 2017-02-14

This release focuses on improving perfomance and the component's api-daypicker.

- **New modifiers value types**
  ([#254](https://github.com/gpbl/react-day-picker/issues/254))

  Use dates, arrays, or ranges as modifier types, not just functions:

  ```diff
  <DayPicker
  -     selectedDays={ day => DateUtils.isSameDay(day, this.state.selectedDay)}
  +     selectedDays={ this.state.selectedDay }
  />
  ```

  Read more in the
  [modifiers documentation](http://daypicker.dev/docs/modifiers.html).

- **Breaking change** Event handlers signature has changed
  ([#256](https://github.com/gpbl/react-day-picker/issues/256))

  All events handlers like `onDayClick`, `onCaptionClick`, etc. now receive the
  Syntethic Event as last argument. Thus you must change your event handlers as
  follow:

  ```diff
  onDayClick={
  - (e, day, modifiers) => {
  + (day, modifiers, e)
      e.preventDefault();
      console.log(day);
      console.log(modifiers);
    }
  }
  ```

- **Breaking change** Use
  [`containerProps`](http://daypicker.dev/docs/api-daypicker.html#containerprops)
  to pass props to the container `div` element. Before, any prop was passed to
  the container element degrading performance
  ([#255](https://github.com/gpbl/react-day-picker/issues/255)):

  ```diff
  <DayPicker
  -    data-thing="foo"
  +    containerProps={ 'data-thing': 'foo' }
  />
  ```

## v4.0.0

\_Release Date: 2017-02-10

- Pass the day's modifiers to the `renderDay` prop function
  ([#237](https://github.com/gpbl/react-day-picker/issues/237))

- **Breaking change** Updating `initialMonth` will not show anymore a different
  month after the first mount
  ([#169](https://github.com/gpbl/react-day-picker/issues/169))

  If you need the calendar to display a different month, use the
  [`month`](http://daypicker.dev/docs/api-daypicker.html#month) prop.

- **Breaking change** Use `lang` HTML attribute instead of a specific CSS class
  name.

  This change may break your style or layout if you are styling the component
  according to the current locale. If this is the case, change your CSS to use
  the `lang` attribute selector. For examples, if you are styling the calendar
  for the `de` locale:

  ```diff
  - .DayPicker--de {
  + .DayPicker[lang="de"] {
    background: yellow;
  }
  ```

## v3.1.1

_Release date: 2016-10-18_

- Fixed [an issue](https://github.com/gpbl/react-day-picker/issues/227) with IE
  and older Safari.

## v3.1.0

_Release Date: 2016-10-14_

- New `months`, `weekdaysLong`, `weekdaysShort`, `firstDayOfWeek` props to
  localize the component.

**Easier localization**

With these new props you can localize the Day Picker in a more declarative way.
Check out [this example](http://daypicker.dev/examples/?localized).

## v3.0.1

_Release date: 2016-10-14_

- Fixed [a bug](https://github.com/gpbl/react-day-picker/issues/224) with
  MomentLocaleUtils.

## v3.0.0

\_Release Date: 2016-10-11

- Fixed [an issue](https://github.com/gpbl/react-day-picker/issues/207) with
  weekdays labels ([#220](https://github.com/gpbl/react-day-picker/pull/220) by
  [makenosound](https://github.com/makenosound)).
- Removed `weekdayComponent` and `navbarComponent` props (deprecated from
  [v2.3.0](#v230-2016-06-30))

**Breaking changes**

For any locale, weekday names must now begin from Sunday, and the first day of
week should reflect this change (hence to start from Monday, the first day of
week is `1`). See this
[diff](https://github.com/gpbl/react-day-picker/commit/e1462b3818e0a56c24cbcdeb9dba52da8cd8ff72?diff=unified)
as example.

## v2.5.0

_Release Date: 2016-10-06_

- Build dist files as UMD module
  ([#216](https://github.com/gpbl/react-day-picker/pull/216) by
  [pguimera](https://github.com/pguimera)).

## v2.4.0

_Release Date: 2016-07-31_

- Added `pageNavigation` prop
  ([#196](https://github.com/gpbl/react-day-picker/pull/196) by
  [zaygraveyard](https://github.com/zaygraveyard)).
- Improved behavior of `initialMonth`
  ([#198](https://github.com/gpbl/react-day-picker/pull/198) by
  [zaygraveyard](https://github.com/zaygraveyard)).

## v2.3.3

_Release date: 2016-07-04_

Fixed props warnings in React 15.2.0
([#191](https://github.com/gpbl/react-day-picker/pull/191)).

## v2.3.2

_Release date: 2016-07-01_

Removed superfluous deprecation warnings.

## v2.3.0

_Release Date: 2016-06-30_

- Added `navbarElement` and `weekdayElement` prop
  ([#179](https://github.com/gpbl/react-day-picker/pull/179) by
  [boatkorachal](https://github.com/boatkorachal)).
- Added `onDayFocus` prop
  ([#185](https://github.com/gpbl/react-day-picker/pull/185) by
  [johannesd](https://github.com/johannesd)).

**Deprecation notice**

`navbarComponent` and `weekdayComponent` props are deprecated. Please use
`navbarElement` and `weekdayElement`:

```diff
- <DayPicker navbarComponent={ MyCustomNavbar } weekdayComponent={ MyCustomWeekday } />
+ <DayPicker navbarElement={ <MyCustomNavbar/> } weekdayElement={ <MyCustomWeekday /> } />
```

## v2.2.0

_Release Date: 2016-06-09_

Added `fixedWeeks` prop
([#176](https://github.com/gpbl/react-day-picker/pull/176) by
[fcsonline](https://github.com/fcsonline)). Use this prop to always display 6
weeks per month: [example](http://daypicker.dev/examples/?fixedWeeks).

## v2.1.1

_Release date: 2016-06-06_

Fixed compatibility with IE11
([#175](https://github.com/gpbl/react-day-picker/pull/175) by
[davidspiess](https://github.com/davidspiess)).

## v2.1.0

_Release Date: 2016-06-02_

- Added
  [`weekdayComponent`](http://daypicker.dev/docs/api-daypicker.html#weekdaycomponent-component)
  prop ([#172](https://github.com/gpbl/react-day-picker/pull/172) by
  [stanislav-ermakov-roi](https://github.com/stanislav-ermakov-roi)). Use this
  prop to use a custom component for rendering the weekday cells in the header.
- Added
  [`navbarComponent`](http://daypicker.dev/docs/api-daypicker.html#navbarcomponent-component)
  prop ([#173](https://github.com/gpbl/react-day-picker/pull/173) by
  [stanislav-ermakov-roi](https://github.com/stanislav-ermakov-roi)). Use this
  prop to use a custom component for rendering the navigation bar.

## v2.0.3

_Release date: 2016-05-24_

Included the dist version in the npm package.

## v2.0.2

_Release date: 2016-05-24_

Fixed a bug when `canChangeMonth` is set to `true`
([\#168](https://github.com/gpbl/react-day-picker/pull/168)).

## v2.0.1

_Release date: 2016-05-15_

Fix npm release.

## v2.0.0

_Release Date: 2016-05-15_

This release mainly improves the component’s API (thus some breaking changes)
and add some new props.

Code has been split in multiple components and tests have been rewritten with
[enzyme](https://github.com/airbnb/enzyme). It should be easier to add and test
the upcoming new features!

Thanks everyone for the support and for the help on making this component better
🤗 If you have issues or suggestions, don't forget the
[Gitter room](https://gitter.im/gpbl/react-day-picker)!

**Breaking changes**

- The `onDay*` event handlers receive as third argument an object of modifiers
  instead of an array.

This mean that if you where writing:

```js
onDayClick(e, day, modifiers) {
  if (modifiers.indexOf('selected') > -1) {
    console.log('This day is selected')
  }
}
```

you must now write:

```js
onDayClick(e, day, modifiers) {
  if (modifiers.selected === true) {
    console.log('This day is selected')
  }
}
```

or better:

```js
onDayClick(e, day, { selected }) {
  if (selected) {
    console.log('This day is selected')
  }
}
```

- Removed `onDayTouchTap`. Use `onDayClick` instead. If you need more
  granularity over touch events, you can use the new `onDayTouchStart` and
  `onDayTouchEnd` props. See
  [#153](https://github.com/gpbl/react-day-picker/issues/153) for more details.

- Fixed import with CommonJS modules
  ([#136](https://github.com/gpbl/react-day-picker/issues/136)).

This affects code using `require('react-day-picker').default` or similar syntax,
which was required for v1.3.0. Now you can `require('react-day-picker')` as
usual, i.e. without specifying `default`. If you are using ES2015 modules
`import DayPicker from 'react-day-picker'`, this change shouldn't affect you.

- New `formatDay` function in
  [LocaleUtils](http://daypicker.dev/docs/utils-locale.html).

If you are using your
[custom LocaleUtils](http://daypicker.dev/docs/localization.html#advanced)
to localize the calendar, you need to implement this function as well, which is
required to format the newly added
[aria-label attribute](https://github.com/gpbl/react-day-picker/pull/132) (see
the
[documentation](http://daypicker.dev/docs/localization.html#advanced)
for an example). If you are localizing
[using moment](http://daypicker.dev/docs/localization.html#moment),
this change shouldn't affect you.

**New props**

- New
  [`disabledDays`](http://daypicker.dev/docs/api-daypicker.html#disabledays-prop)
  and
  [`selectedDays`](http://daypicker.dev/docs/api-daypicker.html#disabledays-prop)
  props. They receive a function `(day) => Bool` as value to easily define which
  day should have the `selected` or `disabled` modifiers. See
  [#34](https://github.com/gpbl/react-day-picker/issues/34) for more details.

  So if you were writing something like:

  ```jsx
  <DayPicker
    modifiers={
      ({ selected: (day) => isDaySelected(day) },
      { disabled: (day) => isDayDisabled(day) })
    }
  />
  ```

  now you can write:

  ```jsx
  <DayPicker
    selectedDays={(day) => isDaySelected(day)}
    disabledDays={(day) => isDayDisabled(day)}
  />
  ```

- Added
  [`reverseMonths`](http://daypicker.dev/docs/api-daypicker.html#reversemonths-prop)
  prop to render the most recent month first.
  ([#147](https://github.com/gpbl/react-day-picker/pull/141) by
  @sonrtomas
- Added
  [`onDayKeyDown`](http://daypicker.dev/docs/api-daypicker.html#ondaykeydown-prop),
  [`onDayTouchStart`](http://daypicker.dev/docs/api-daypicker.html#ondaytouchstart-prop),
  [`onDayTouchEnd`](http://daypicker.dev/docs/api-daypicker.html#ondaytouchend-prop)
  props.

**Improvements**

- Navigate between weeks or years using left/right or up/down arrow keys
  ([#132](https://github.com/gpbl/react-day-picker/pull/132) by
  [limscoder](https://github.com/limscoder))
- Added various `aria-*` attributes
  ([#132](https://github.com/gpbl/react-day-picker/pull/132) by
  [limscoder](https://github.com/limscoder))

**Bug fixes**

- Navigation with keyboard when using `fromMonth` or `endMonth`

## v1.3.2

_Release date: 2016-04-10_

Adds React 15 to the peer dependencies.

## v1.3.1

_Release date: 2016-03-02_

Fixes an issue causing className being overwritten by `className` prop
([\#137](https://github.com/gpbl/react-day-picker/issues/137)).

## v1.3.0

_Release Date: 2016-02-18_

**Improvements**

- Support for Babel 6
  ([#90](https://github.com/gpbl/react-day-picker/issues/90))
  - See this [known issue](https://github.com/gpbl/react-day-picker/issues/136)
- HTML props are spread to container tag, so to support `onBlur`, `onFocus`,
  etc. ([#122](https://github.com/gpbl/react-day-picker/issues/122),
  [#123](https://github.com/gpbl/react-day-picker/issues/123))
- Better RTL support for month navigation
  ([#125](https://github.com/gpbl/react-day-picker/issues/125))

## v1.2.0

_Release Date: 2015-12-04_

**New features**

- Use a custom caption element with the new
  [`captionElement`](http://daypicker.dev/docs/api-daypicker.html#captionelement-element)
  prop. A custom caption element is useful, for example, to create a year/month
  navigation as shown in
  [this example](http://daypicker.dev/examples/advanced-year-navigation.html).
  Read [#52](https://github.com/gpbl/react-day-picker/issues/52) for a
  discussion about this feature.

**Improvements**

- Improved navigation when clicking on outside days
  ([#112](https://github.com/gpbl/react-day-picker/issues/112), see also
  [this example](http://daypicker.dev/examples/months-restrict-navigation.html))
- New `addMonths` function in
  [DateUtils](http://daypicker.dev/DateUtils.html)
- Added a style definition to package.json
  ([#105](https://github.com/gpbl/react-day-picker/issues/105), thanks
  @webbushka)

**Fixed bugs**

- Make the component working again with React ~0.13
  ([#108](https://github.com/gpbl/react-day-picker/issues/108))
- Fixed: a bug when clicking on outside days when `fromMonth` or `toMonth` were
  set ([#97](https://github.com/gpbl/react-day-picker/issues/97))
- Replace a wrong `attr` tag with the right `abbr` in the weekdays row –
  https://github.com/gpbl/react-day-picker/issues/33#issuecomment-159751186. ⚠️
  Please note that the component may now use the CSS defined for `abbr` tags.

## v1.1.5

_Release date: 2015-11-20_

Fix an issue with `showMonth()`
([#95](https://github.com/gpbl/react-day-picker/issues/95)) – thanks @JKillian

## v1.1.4

_Release date: 2015-11-19_

Minor changes when importing utilities

## v1.1.3

_Release date: 2015-11-12_

**Improvements**

- `isSameDay` in DateUtils now accepts `null` or `undefined` arguments
- Added bower support

## v1.1.1

_Release date: 2015-11-11_

**Fix regression** The last version
[was missing an element](https://github.com/gpbl/react-day-picker/commit/0164a38f651771c00d3b4949898937d2013c7ddd)
and this change may have broken existing styles. This fix restore the original
behavior adding the element again. (see
[#82](https://github.com/gpbl/react-day-picker/issues/82)).

## v1.1.0

_Release Date: 2015-11-06_

**New features**

- New `fromMonth` and `toMonth` props. Use the
  [`fromMonth`](http://daypicker.dev/docs/api-daypicker.html#frommonth-date)
  and
  [`toMonth`](http://daypicker.dev/docs/api-daypicker.html#tomonth-date)
  props to restrict the months within which the calendar can work. See
  [this example](http://daypicker.dev/examples/months-restrict-navigation.html).
- `dateUtils` includes some useful function to set custom modifiers
- `localeUtils` are the default functions used to localize the Day Picker in
  english. See
  https://github.com/gpbl/react-day-picker/issues/46#issuecomment-153498039 for
  a sample usage of this library.

## v1.0.1

_Release date: 2015-10-15_

Let the event from next/previous month click to propagate.
[\#74](https://github.com/gpbl/react-day-picker/pull/74)
([kblcuk](https://github.com/kblcuk))

## v1.0.9

_Release date: 2015-10-12_

Fixed an issue with Daylight Saving Time for some timezones \(\#71\)
[\#72](https://github.com/gpbl/react-day-picker/pull/72)
([gpbl](https://github.com/gpbl))

## v1.0.7

_Release date: 2015-10-08_

Add support of react-v0.14-rc1
[\#61](https://github.com/gpbl/react-day-picker/issues/61)

## v1.0.6

_Release date: 2015-10-08_

Fixes a bug causing onCaptionClick to receive always the first month when
displaying multiple months
[\#63](https://github.com/gpbl/react-day-picker/issues/63)

## v1.0.5

_Release date: 2015-09-01_

Fixes a bug when passing a new `initialMonth` prop to the component that may
cause an issue when navigating between months [#57]

## v1.0.4

_Release date: 2015-07-29_

**Improvement**

- Improve the navigation between months when `numberOfMonths` is greater than 1
  ([#37](https://github.com/gpbl/react-day-picker/issues/37))

**Bug fix**

- Months may jump forward when clicking on days when `numberOfMonths` is greater
  than 1 ([#38](https://github.com/gpbl/react-day-picker/issues/38))

## v1.0.3

_Release date: 2015-07-25_

- New feature: onCaptionClick
  [\#31](https://github.com/gpbl/react-day-picker/pull/31)
  ([adambbecker](https://github.com/adambbecker))

## v1.0.2

_Release date: 2015-07-23_

**Fixed bugs**

- EnableOutsideDays keeps focus on wrong cell
  [\#29](https://github.com/gpbl/react-day-picker/issues/29)
- October broken on Firefox Nightly
  [\#18](https://github.com/gpbl/react-day-picker/issues/18)

## v1.0.1

_Release Date: 2015-06-24_

First major release. Please see
[the updated website](http://daypicker.dev) for more info.

- [#27] Removed the dependency from moment.js. Events and props work **only**
  with native `Date` object. To localize the Day Picker with moment.js (or
  another library), follow [this page](http://daypicker.dev/#tips)
- Class names have been updated (objects are now CamelCase). As example, please
  see
  [the updated CSS file](https://github.com/gpbl/react-day-picker/blob/master/site/src/style/DayPicker.scss).
- [#27] All rendered tags are now `div` or `span`. Use CSS to style the
  daypicker as table.
- A `today` modifier is added automatically
- Event handlers receive the event as first argument. For example:
  `onDayClick(e, day, modifiers)` instead of `onDayClick(day, modifiers, e)`
- `onNextMonthClick` and `onNextMonthClick` props have been removed. Use
  `onMonthChange` instead.
