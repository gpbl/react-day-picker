# Changelog

DayPicker follows [Semantic Versioning](http://semver.org/). See the [Releases page](https://github.com/gpbl/react-day-picker/releases) on Github for the complete list of changes, diffs and contributors, or the [list of versions](https://www.npmjs.com/package/react-day-picker?activeTab=versions) published on npm.

## v9.14.0

_Release date: 2026-02-26_

This release introduces a new `resetOnSelect` prop and adds support for the Hijri calendar.

#### Resetting Selections in Range Mode

When in range selection mode, use the [`resetOnSelect`](/selections/range-mode#reset-selection) prop to start a new range when a full range is already selected.

#### Hijri Calendar

To use the Hijri (Umm al-Qura) calendar, import `DayPicker` from `react-day-picker/hijri`:

```tsx
import { DayPicker } from "react-day-picker/hijri";

export function HijriCalendar() {
  return <DayPicker />;
}
```

Read more in the [documentation](/localization/hijri) and play with it in [playground](/playground?calendar=hijri).

#### What's Changed

- feat: add Hijri calendar support (Umm al-Qura) by [@ws-rush](https://github.com/ws-rush) in [#2904](https://github.com/gpbl/react-day-picker/pull/2904)
- feat: add `resetOnSelect` prop to reset date range when selecting date with completed range by [@rodgobbi](https://github.com/rodgobbi) in [#2906](https://github.com/gpbl/react-day-picker/pull/2906)
- feat: add default `lang` prop to `DayPicker` root element by [@gpbl](https://github.com/gpbl) in [#2907](https://github.com/gpbl/react-day-picker/pull/2907)

## v9.13.2

_Release date: 2026-02-10_

This release fixes the `style.css` type declaration export and corrects labels for Northern Sami (`se`) and Japanese Hiragana (`ja-Hira`) locales.

#### What's Changed

- fix(build): add correct type declaration for `style.css` export by [@NotNestor](https://github.com/NotNestor) in [#2897](https://github.com/gpbl/react-day-picker/pull/2897)
- fix(locale): correct Northern Sami (`se`) and Japanese Hiragana (`ja-Hira`) labels by [@gpbl](https://github.com/gpbl) in [#2898](https://github.com/gpbl/react-day-picker/pull/2898)

## v9.13.0

_Release date: 2025-12-18_

This release introduces an experimental `noonSafe` prop to help deal with historical time zones with second offsets. See [/localization/setting-time-zone#noonsafe](/localization/setting-time-zone#noonsafe) for more details.

#### What's Changed

- feat: add experimental `noonSafe` prop for timezone offsets by [@gpbl](https://github.com/gpbl) in [#2879](https://github.com/gpbl/react-day-picker/pull/2879)

## v9.12.0

_Release date: 2025-12-06_

This release adds translated labels to built-in locales and fixes issues with array modifiers and the Hebrew calendar.

#### Translated Locales

DayPicker locales now ship with localized labels (e.g., “Go to next month”, “Today”), so you no longer need to supply them via `labels`. To use a locale:

```tsx
import { es } from "react-day-picker/locale";
<DayPicker locale={es} />; // Use Spanish locale, now with translated labels.
```

If you previously set the `labels` prop for translations, you can remove it. For details on switching locales, see the [localization guide](/localization/changing-locale).

#### What's Changed

- feat: add locale-aware labels and translated locale wrappers by [@gpbl](https://github.com/gpbl) in [#2861](https://github.com/gpbl/react-day-picker/pull/2861)
- fix: match `Date[]` modifiers by day by [@gpbl](https://github.com/gpbl) in [#2865](https://github.com/gpbl/react-day-picker/pull/2865)
- fix: correct Hebrew date conversion timezone handling by [@gpbl](https://github.com/gpbl) in [#2870](https://github.com/gpbl/react-day-picker/pull/2870)

## v9.11.3

_Release date: 2025-11-29_

Rendered HTML now includes empty cells in grids when `endMonth` is set, and fixes the v9.11.2 regression where JSDOM tests could fail when focusing disabled days.

**Possible low impact breaking change:** The grid markup changed, so brittle snapshot tests or custom CSS that depended on the old structure may need updates. Adjust snapshots/CSS accordingly.

#### What's Changed

- fix: ensure final week renders when `endMonth` clips the calendar by [@gpbl](https://github.com/gpbl) in [#2856](https://github.com/gpbl/react-day-picker/pull/2856)
- fix: prevent selecting disabled focused days by [@gpbl](https://github.com/gpbl) in [#2860](https://github.com/gpbl/react-day-picker/pull/2860)

## v9.11.2

_Release date: 2025-11-23_

#### What's Changed

- fix: ensure modifiers honor the `timeZone` prop by [@gpbl](https://github.com/gpbl) in [#2849](https://github.com/gpbl/react-day-picker/pull/2849)
- fix: allow focused disabled days to remain focusable by [@gpbl](https://github.com/gpbl) in [#2851](https://github.com/gpbl/react-day-picker/pull/2851)
- chore(performance): cache resolved today across helpers for better performance by [@gpbl](https://github.com/gpbl) in [#2848](https://github.com/gpbl/react-day-picker/pull/2848)
- chore(performance): memoize calendar and reuse ISO date ids in day rendering by [@gpbl](https://github.com/gpbl) in [#2850](https://github.com/gpbl/react-day-picker/pull/2850)

## v9.11.1

_Release date: 2025-10-08_

#### What's Changed

- fix: duplicated years in dropdown for some timezones by [@gpbl](https://github.com/gpbl) in [#2836](https://github.com/gpbl/react-day-picker/pull/2836)
- fix: prevent focus navigation past disabled bounds by [@gpbl](https://github.com/gpbl) in [#2839](https://github.com/gpbl/react-day-picker/pull/2839)

## v9.11.0

_Release date: 2025-09-20_

This release adds support for Buddhist and Hebrew calendars, introduces new Southeast Asian numeral systems, adds the `aria-labelledby` prop, and improves month/year formatting for specific locales. It also includes fixes for the recently added Ethiopic calendar.

#### Buddhist Calendar

To use the Buddhist calendar, import `DayPicker` from `react-day-picker/buddhist`.

```tsx
import { DayPicker } from "react-day-picker/buddhist";

export function BuddhistCalendar() {
  return <DayPicker />;
}
```

Read more in the [documentation](/localization/buddhist) and play with it in [playground](/playground?calendar=buddhist).

#### Hebrew Calendar

To switch to the Hebrew calendar, import `DayPicker` from `react-day-picker/hebrew`.

```tsx
import { DayPicker } from "react-day-picker/hebrew";

export function HebrewCalendar() {
  return <DayPicker />;
}
```

Read more in the [documentation](/localization/hebrew) and play with it in [playground](/playground?calendar=hebrew).

#### What's Changed

- feat: Buddhist calendar by [@gpbl](https://github.com/gpbl) in [#2825](https://github.com/gpbl/react-day-picker/pull/2825)
- feat: Hebrew calendar by [@gpbl](https://github.com/gpbl) in [#2827](https://github.com/gpbl/react-day-picker/pull/2827)
- feat: align month/year caption and dropdown with locale by [@gpbl](https://github.com/gpbl) in [#2830](https://github.com/gpbl/react-day-picker/pull/2830)
- feat: add `aria-labelledby` prop by [@gpbl](https://github.com/gpbl) in [#2828](https://github.com/gpbl/react-day-picker/pull/2828)
- feat: add Southeast Asian numeral systems by [@gpbl](https://github.com/gpbl) in [#2832](https://github.com/gpbl/react-day-picker/pull/2832)
- fix: ethiopic calendar may crash with dropdown layout by [@gpbl](https://github.com/gpbl) in [#2831](https://github.com/gpbl/react-day-picker/pull/2831)
- fix: years are not correctly formatted in ethiopic calendar by [@gpbl](https://github.com/gpbl) in [#2831](https://github.com/gpbl/react-day-picker/pull/2831)

## v9.10.0

_Release date: 2025-09-14_

This release adds support for the Ethiopic calendar.

#### Ethiopic calendar

To use the Ethiopic calendar, import `DayPicker` from `react-day-picker/ethiopic`.

```tsx
import { DayPicker } from "react-day-picker/ethiopic";

export function EthiopicCalendar() {
  return <DayPicker />;
}
```

Read more in the [documentation](/localization/ethiopic) and play with it in [playground](/playground?calendar=ethiopic).

#### What's Changed

- feat: ethiopic calendar by [@temesgen-mulugeta](https://github.com/temesgen-mulugeta) in [#2658](https://github.com/gpbl/react-day-picker/pull/2658)

## v9.9.0

_Release date: 2025-08-17_

This release includes a new `reverseYears` prop, a range selection fix, and a build update to fix issues with source maps.

#### Reversing the Years in the Dropdown

When using `captionLayout='dropdown'`, set `reverseYears` to reverse the years listed in the dropdown: the most recent year will appear first.

```tsx
<DayPicker captionLayout="dropdown" reverseYears />
```

See it in action in the [playground](/playground?captionLayout=dropdown&reverseYears).

#### What's Changed

- feat: add `reverseYears` prop by [@gpbl](https://github.com/gpbl) in [#2822](https://github.com/gpbl/react-day-picker/pull/2822)
- fix: select the same day in range mode when range is open and min prop is 0 by [@rodgobbi](https://github.com/rodgobbi) in [#2816](https://github.com/gpbl/react-day-picker/pull/2816)
- build: removed source maps and `src` directory from package by [@gpbl](https://github.com/gpbl) in [#2812](https://github.com/gpbl/react-day-picker/pull/2812)
- build: update `date-fns/tz` dependency by [@gpbl](https://github.com/gpbl) in [#2823](https://github.com/gpbl/react-day-picker/pull/2823)

## v9.8.1

_Release date: 2025-07-26_

Improved `captionLayout` documentation and build process.

#### What's Changed

- docs: Improve documentation for `captionLayout` prop by [@rodgobbi](https://github.com/rodgobbi) in [#2788](https://github.com/gpbl/react-day-picker/pull/2788) and [@haecheonlee](https://github.com/haecheonlee) in [#2787](https://github.com/gpbl/react-day-picker/pull/2787)
- build: avoid locking dependencies by [@nihgwu](https://github.com/nihgwu) in [#2789](https://github.com/gpbl/react-day-picker/pull/2789)

## v9.8.0

_Release date: 2025-07-05_

DayPicker 9.8 includes better [keyboard navigation](/guides/accessibility#keyboard-navigation) and resolves edge cases with month and year rendering.

#### What's Changed

- feat(accessibility): enable <kbd>Shift+Arrows</kbd> to navigate between months/years by [@mhwice](https://github.com/mhwice) in [#2770](https://github.com/gpbl/react-day-picker/pull/2770)
- fix: setting `defaultMonth` to the next year with the dropdown navigation layout no longer prevents the calendar from rendering by [@rodgobbi](https://github.com/rodgobbi) in [#2783](https://github.com/gpbl/react-day-picker/pull/2783)
- fix: correctly display the number of months when `numberOfMonths` and `endMonth` are set by [@gpbl](https://github.com/gpbl) in [#2784](https://github.com/gpbl/react-day-picker/pull/2784)

## v9.7.0

_Release date: 2025-05-14_

DayPicker 9.7 introduces a new `navLayout` prop to customize the layout of the navigation and includes improvements for time zones and localization.

#### Navigation Layouts

The `navLayout` prop allows you to change the layout of the navigation buttons in the calendar:

- With `navLayout="around"`, navigation buttons are displayed on either side of the caption.
- With `navLayout="after"`, navigation buttons are displayed after the caption. This layout ensures that the focus order respects the visual order, conforming to the [WCAG 2.2](https://www.w3.org/TR/WCAG22/#focus-order) guidelines for accessibility.

For more details, see the [Navigation Layouts](/docs/caption-and-nav-layouts#navigation-layouts) section in the documentation.

```tsx
<DayPicker navLayout="around" />
```

```tsx
<DayPicker navLayout="after" />
```

#### What's Changed

- feat: add `navLayout` prop by [@gpbl](https://github.com/gpbl) in [#2755](https://github.com/gpbl/react-day-picker/pull/2755)
- fix: add timezone to `Date` props by [@gpbl](https://github.com/gpbl) in [#2750](https://github.com/gpbl/react-day-picker/pull/2750)
- fix: format week number with numerals by [@gpbl](https://github.com/gpbl) in [#2756](https://github.com/gpbl/react-day-picker/pull/2756)
- chore: rename `useGetModifiers` to `createGetModifiers` by [@gpbl](https://github.com/gpbl) in [#2751](https://github.com/gpbl/react-day-picker/pull/2751)
- chore: simplify DateLib types by [@gpbl](https://github.com/gpbl) in [#2735](https://github.com/gpbl/react-day-picker/pull/2735)
- chore: proofread and update jsdocs for consistency by [@gpbl](https://github.com/gpbl) in [#2760](https://github.com/gpbl/react-day-picker/pull/2760)

## v9.6.7

_Release date: 2025-04-14_

Improved handling of timezones, fixed alignment with the Left/Right navigation icons.

#### What's Changed

- fix: improve left/right icon alignment by [@AlecRust](https://github.com/AlecRust) in [#2734](https://github.com/gpbl/react-day-picker/pull/2734)
- fix: prevent timezone override when `initialMonth` is `Date` type by [@lovebuizel](https://github.com/lovebuizel) in [#2737](https://github.com/gpbl/react-day-picker/pull/2737)

## v9.6.6

_Release date: 2025-04-11_

Includes a fix for `autoFocus` prop not correctly autofocusing the selected day.

#### What's Changed

- fix: calculateFocusTarget logic by [@rodgobbi](https://github.com/rodgobbi) in [#2727](https://github.com/gpbl/react-day-picker/pull/2727)

## v9.6.5

_Release date: 2025-04-06_

Fixed an issue with the Persian calendar.

#### What's Changed

- (fix) Persian calendar with `enUS` locale displaying empty week by [@gpbl](https://github.com/gpbl) in [#2723](https://github.com/gpbl/react-day-picker/pull/2723)

## v9.6.4

_Release date: 2025-03-30_

#### What's Changed

- fix(animation): fix issues when navigating months during animation by [@rodgobbi](https://github.com/rodgobbi) in [#2710](https://github.com/gpbl/react-day-picker/pull/2710)

## v9.6.3

_Release date: 2025-03-19_

Improved accessibility, fixed the default locale imports, and added missing files for source maps.

#### What's Changed

- fix(accessibility): add visually hidden text to announce month/year by [@rodgobbi](https://github.com/rodgobbi) in [#2716](https://github.com/gpbl/react-day-picker/pull/2716)
- fix(build): fix importing of whole locale from `date-fns` by [@binhpv](https://github.com/binhpv) in [#2717](https://github.com/gpbl/react-day-picker/pull/2717)
- fix(build): add back `src` to package.json by [@gpbl](https://github.com/gpbl) in [#2718](https://github.com/gpbl/react-day-picker/pull/2718)

## v9.6.2

_Release date: 2025-03-12_

Fix issues when importing the Persian calendar or the CSS types declaration.

#### What's Changed

- fix: add persian.js to package.json files by [@maxnowack](https://github.com/maxnowack) in [#2713](https://github.com/gpbl/react-day-picker/pull/2713)
- fix: add missing css types to package.json files by [@maxnowack](https://github.com/maxnowack) in [#2712](https://github.com/gpbl/react-day-picker/pull/2712)

## v9.6.1

_Release date: 2025-03-08_

This release addresses an accessibility issue, adds a new `animate` prop and fixes other minor bugs.

#### Possible Breaking Change in Custom Styles

To address a [focus lost bug](https://github.com/gpbl/react-day-picker/issues/2630) affecting navigation buttons, we updated the buttons (see [#2685](https://github.com/gpbl/react-day-picker/pull/2685)) to use `aria-disabled` instead of the `disabled` attribute.

This change may cause custom styles for those disabled buttons to break. To fix it in your code, update the CSS selector to target `[aria-disabled="true"]`:

```diff
- .rdp-button_next:disabled,
+ .rdp-button_next[aria-disabled="true"] {
  /* your custom CSS */
}
- .rdp-button_previous:disabled,
+ .rdp-button_previous[aria-disabled="true"] {
  /* your custom CSS */
}
```

#### Animating Month Transitions

Thanks to the work by [@rodgobbi](https://github.com/rodgobbi), we have added animations to DayPicker. The new [`animate` prop](/docs/navigation#animate) enables CSS transitions for captions and weeks when navigating between months:

```tsx
<DayPicker animate />
```

Customizing the animation style can be challenging due to the HTML table structure of the grid. We may address this in the future. Please leave your feedback in [DayPicker Discussions](https://github.com/gpbl/react-day-picker/discussions).

#### What's Changed

- feat: new `animate` prop by [@rodgobbi](https://github.com/rodgobbi) in [#2684](https://github.com/gpbl/react-day-picker/pull/2684)
- feat(performance): add `sideEffects` property to package.json by [@rodgobbi](https://github.com/rodgobbi) in [#2673](https://github.com/gpbl/react-day-picker/pull/2673)
- fix(accessibility): focus lost when navigation button is disabled by [@gpbl](https://github.com/gpbl) in [#2685](https://github.com/gpbl/react-day-picker/pull/2685)
- fix: render selected days with `selected` modifier when disabled by [@rodgobbi](https://github.com/rodgobbi) in [#2700](https://github.com/gpbl/react-day-picker/pull/2700)
- fix(build): remove extra files from package.json by [@gpbl](https://github.com/gpbl) in [#2692](https://github.com/gpbl/react-day-picker/pull/2692)
- chore(types): fix deprecation of select event handler types by [@timothyis](https://github.com/timothyis) in [#2680](https://github.com/gpbl/react-day-picker/pull/2680)

#### v9.6.1

- fix(build): add missing .css entries in package.json files by [@gpbl](https://github.com/gpbl) in [#2703](https://github.com/gpbl/react-day-picker/pull/2703)

## v9.6.0

_Release date: 2025-03-08_

This release addresses an accessibility issue, adds a new `animate` prop and fixes other minor bugs.

⚠️ **Note** v9.6.0 presents a bug when importing `style.css`. Please upgrade to [v9.6.1](https://github.com/gpbl/react-day-picker/releases/tag/v9.6.1) for a fix.

## v9.5.1

_Release date: 2025-01-27_

This release fixes the calendar breaking its layout when passing a `month` not included between `startMonth` and `endMonth` props.

#### What's Changed

- fix: display calendar in a valid month when `month` prop is invalid by [@rodgobbi](https://github.com/rodgobbi) in [#2672](https://github.com/gpbl/react-day-picker/pull/2672)
- fix(test): using `new Date()` instead of `today()` fails test by [@gpbl](https://github.com/gpbl) in [#2656](https://github.com/gpbl/react-day-picker/pull/2656)
- chore(types): update `DateLib` to not import types from date-fns by [@gpbl](https://github.com/gpbl) in [#2655](https://github.com/gpbl/react-day-picker/pull/2655)
- docs: fix broken `style.css` link by [@jakedee](https://github.com/jakedee) in [#2666](https://github.com/gpbl/react-day-picker/pull/2666)
- docs: custom components guide to display better examples by [@rodgobbi](https://github.com/rodgobbi) in [#2668](https://github.com/gpbl/react-day-picker/pull/2668)

## v9.5.0

_Release date: 2024-12-29_

This release adds full support for the [Persian calendar](/localization/persian) and a new `numerals` prop to [set the numbering system](/localization/changing-locale#numerals).

#### Breaking Change: Dropdown Formatters

The `formatMonthDropdown` and `formatYearDropdown` now receive a `Date` (instead of a `number`) as first argument.

```diff
<DayPicker formatters={{
-     formatMonthDropdown: (month) => format(new Date(month), "mmmm") }}
+     formatMonthDropdown: (date) => format(date, "mmmm") }} />
-     formatYearDropdown: (year) => format(new Date(year), "yyyy") }}
+     formatYearDropdown: (date) => format(date, "yyyy") }} />
/>
```

#### Persian Calendar

Persian Calendar get fulls support in DayPicker and replaces the previous "Jalali Calendar".

If you were using DayPicker from `react-day-picker/jalali`, change your imports to `react-day-picker/persian`:

```diff
- import { DayPicker } from  `react-day-picker/jalali`;
+ import { DayPicker } from  `react-day-picker/persian`;
```

See the [Persian calendar](/localization/persian) documentation for more details about using Persian calendar in DayPicker.

#### What's Changed

- feat: add Persian calendar support by [@gpbl](https://github.com/gpbl) in [#2645](https://github.com/gpbl/react-day-picker/pull/2645)
- feat: add new `numerals` prop by [@gpbl](https://github.com/gpbl) in [#2647](https://github.com/gpbl/react-day-picker/pull/2647)
- feat: add `today`, `newDate`, `timeZone` to the `DateLib` class by [@gpbl](https://github.com/gpbl) in [#2642](https://github.com/gpbl/react-day-picker/pull/2642)
- feat: remove `startMonth`/`endMonth` constraints when caption layout is `dropdown-months` by [@rodgobbi](https://github.com/rodgobbi) in [#2648](https://github.com/gpbl/react-day-picker/pull/2648)
- build: add `date-fns-jalali` to the package dependencies by [@gpbl](https://github.com/gpbl) in [#2640](https://github.com/gpbl/react-day-picker/pull/2640)
- fix(breaking): dropdown formatters to use `dateLib` format by [@gpbl](https://github.com/gpbl) in [#2644](https://github.com/gpbl/react-day-picker/pull/2644)
- fix(jalali): incorrect Jalali month names when using dropdown layouts by [@gpbl](https://github.com/gpbl) in [#2645](https://github.com/gpbl/react-day-picker/pull/2645)
- fix(chore): always use `Date` constructor from `dateLib` by [@gpbl](https://github.com/gpbl) in [#2636](https://github.com/gpbl/react-day-picker/pull/2636)
- fix(chore): use `dateLib` for getting days/months/years from a `Date` by [@gpbl](https://github.com/gpbl) in [#2643](https://github.com/gpbl/react-day-picker/pull/2643)

## v9.4.4

_Release date: 2024-12-15_

This release fixes an issue with the month names in the Jalali calendar.

#### What's Changed

- fix(jalali): defaults calendar to `faIR` locale and RTL direction by [@gpbl](https://github.com/gpbl) in [#2624](https://github.com/gpbl/react-day-picker/pull/2624)

## v9.4.3

_Release date: 2024-12-11_

This release enhances compatibility with React 19.

#### What's Changed

- chore(types): update HTML attributes for React 19 compatibility by [@gpbl](https://github.com/gpbl) in [#2621](https://github.com/gpbl/react-day-picker/pull/2621)
- refactor(jest): switch to @swc/jest for faster transforms by [@thevuong](https://github.com/thevuong) in [#2620](https://github.com/gpbl/react-day-picker/pull/2620)

## v9.4.2

_Release date: 2024-12-08_

This release addresses some bugs in the dropdown caption layout.

#### What's Changed

- fix: display all available years in the dropdown by [@rodgobbi](https://github.com/rodgobbi) in [#2614](https://github.com/gpbl/react-day-picker/pull/2614)
- fix: display all months in dropdown by [@gpbl](https://github.com/gpbl) in [#2619](https://github.com/gpbl/react-day-picker/pull/2619)
- docs: update styling.mdx by [@AlecRust](https://github.com/AlecRust) in [#2611](https://github.com/gpbl/react-day-picker/pull/2611)
- docs: code typo in input-fields.mdx by [@pkgacek](https://github.com/pkgacek) in [#2613](https://github.com/gpbl/react-day-picker/pull/2613)

## v9.4.1

_Release date: 2024-11-30_

This release improves support for screen readers and fixes a VoiceOver issue when navigating the calendar.

#### What's Changed

- fix(a11y): improve screen reader and VoiceOver support by [@gpbl](https://github.com/gpbl) in [#2609](https://github.com/gpbl/react-day-picker/pull/2609)
- feat(a11y): added `role` and `aria-label` props by [@gpbl](https://github.com/gpbl) in [#2609](https://github.com/gpbl/react-day-picker/pull/2609)
- chore(style): remove unused CSS variable by [@gpbl](https://github.com/gpbl) in [#2610](https://github.com/gpbl/react-day-picker/pull/2610)
- chore: use callbacks for dropdown event handlers by [@gpbl](https://github.com/gpbl) in [#2602](https://github.com/gpbl/react-day-picker/pull/2602)

## v9.4.0

_Release date: 2024-11-24_

This version includes support for [broadcast calendars](/localization/iso-and-broadcast#broadcast-calendar) and some style fixes.

#### What's Changed

- feat: add support for broadcast calendars by [@Nradar](https://github.com/Nradar) in [#2597](https://github.com/gpbl/react-day-picker/pull/2597)
- fix(styles): dropdown not appearing as focused by [@gpbl](https://github.com/gpbl) in [#2600](https://github.com/gpbl/react-day-picker/pull/2600)
- fix(styles): inconsistent cell size when selection mode is set by [@gpbl](https://github.com/gpbl) in [#2601](https://github.com/gpbl/react-day-picker/pull/2601)
  - please note that the CSS variables `--rdp-day-height`, `--rdp-day-width`, `--rdp-day-button-height`, `--rdp-day-button-width` have been updated to pixel values (`44px` for day cells and `42px` for day buttons).

## v9.3.2

_Release date: 2024-11-18_

Bug fixes.

#### What's Changed

- fix: "outside days" were shown even when `beforeMonth` was set by [@rodgobbi](https://github.com/rodgobbi) in [#2578](https://github.com/gpbl/react-day-picker/pull/2578)

## v9.3.1

_Release date: 2024-11-16_

Bug fixes.

#### What's Changed

- fix: months with 4 weeks not displaying 6 weeks when `fixedWeeks` is used by [@gpbl](https://github.com/gpbl) in [#2590](https://github.com/gpbl/react-day-picker/pull/2590)
- fix(types): `formatMonthDropdown` throwing a type error by [@gpbl](https://github.com/gpbl) in [#2584](https://github.com/gpbl/react-day-picker/pull/2584)
- chore(types): added deprecated `initialFocus` and `InternalModifiers` types by [@gpbl](https://github.com/gpbl) in [#2582](https://github.com/gpbl/react-day-picker/pull/2582)
- chore: removed not used `selectionStates` from `useGetModifiers()` by [@gpbl](https://github.com/gpbl) in [#2586](https://github.com/gpbl/react-day-picker/pull/2586)
- build: update `@date-fns/tz` package to v1.2.0 by [@gpbl](https://github.com/gpbl) in [#2591](https://github.com/gpbl/react-day-picker/pull/2591)

## v9.3.0

_Release date: 2024-11-05_

This release adds the `dayPickerProps` to the values returned by [useDayPicker](/api/functions/useDayPicker), enabling access to these props from custom components.

Thanks to the work by [@rodgobbi](https://github.com/rodgobbi), we could enhance the performance when selecting a range of days.

We’ve also updated the default style to preserve the font-family inherited from the parent element. To restore the previous behavior, update the `.rdp-root` CSS class to include `font-family: system-ui`.

#### What's Changed

- feat: return `dayPickerProps` from `useDayPicker` by [@gpbl](https://github.com/gpbl) in [#2572](https://github.com/gpbl/react-day-picker/pull/2572)
- fix(style): remove system-ui font family from default style by [@gpbl](https://github.com/gpbl) in [#2573](https://github.com/gpbl/react-day-picker/pull/2573)
- Improve performance when selecting long ranges of days by [@rodgobbi](https://github.com/rodgobbi) in [#2537](https://github.com/gpbl/react-day-picker/pull/2537)

## v9.2.1

_Release date: 2024-10-27_

#### What's Changed

- build(style): support importing styles in Sass by [@GeorgeTaveras1231](https://github.com/GeorgeTaveras1231) in [#2555](https://github.com/gpbl/react-day-picker/pull/2555)
- fix(perf): improve selection performance in `useRange` by [@gpbl](https://github.com/gpbl) in [#2560](https://github.com/gpbl/react-day-picker/pull/2560)

## v9.2.0

_Release date: 2024-10-23_

This release addresses an issue with localization and applies some fixes for types and CSS exports.

#### What's Changed

- feat: new `DateLib` class by [@gpbl](https://github.com/gpbl) and [@daveallie](https://github.com/daveallie) in [#2550](https://github.com/gpbl/react-day-picker/pull/2550)
- fix(localization): Australian locale may not work as expected by [@gpbl](https://github.com/gpbl) and [@daveallie](https://github.com/daveallie) in [#2550](https://github.com/gpbl/react-day-picker/pull/2550)
- fix(styles): day buttons height and width are reversed by [@merlinio2000](https://github.com/merlinio2000) in [#2552](https://github.com/gpbl/react-day-picker/pull/2552)
- fix(types): argument of type 'Date' is not assignable to parameter of type 'never' by [@cosminpsk](https://github.com/cosminpsk) in [#2542](https://github.com/gpbl/react-day-picker/pull/2542)
- build: improve css exports in package.json by [@karlshea](https://github.com/karlshea) in [#2547](https://github.com/gpbl/react-day-picker/pull/2547)

## v9.1.4

_Release date: 2024-10-15_

This release fixes a localization issue and improves export compatibility across various Node.js environments.

#### What's Changed

- fix: month not being localized with `dropdown-years` caption layout by [@gpbl](https://github.com/gpbl) in [#2497](https://github.com/gpbl/react-day-picker/pull/2497)
- build: update exports in package.json for better compatibility by [@gpbl](https://github.com/gpbl) in [#2535](https://github.com/gpbl/react-day-picker/pull/2535)

## v9.1.3

_Release date: 2024-09-26_

This release includes some minor build fixes and documentation updates.

#### What's Changed

- build: add `tsconfig-base.json` to package by [@luucvanderzee](https://github.com/luucvanderzee) in [#2492](https://github.com/gpbl/react-day-picker/pull/2492)
- build(deps): bump @date-fns/tz to 1.1.2 by [@gpbl](https://github.com/gpbl) in [#2494](https://github.com/gpbl/react-day-picker/pull/2494)

## v9.1.2

_Release date: 2024-09-22_

#### What's Changed

- fix: validate HTML output by [@gpbl](https://github.com/gpbl) in [#2475](https://github.com/gpbl/react-day-picker/pull/2475)
- fix: use of `dateLib` to work when mocking dates by [@gpbl](https://github.com/gpbl) in [#2481](https://github.com/gpbl/react-day-picker/pull/2481)
- fix(types): Improve `DayPickerContext` type by [@gpbl](https://github.com/gpbl) in [#2479](https://github.com/gpbl/react-day-picker/pull/2479)
- build(deps): update @date-fs/tz package by [@gpbl](https://github.com/gpbl) in [#2480](https://github.com/gpbl/react-day-picker/pull/2480)

## v9.1.1

_Release date: 2024-09-19_

This release improves reliability for controlled mode and adds experimental support for time zones.

#### Time Zone Support

By integrating the [@date-fns/tz](https://github.com/date-fns/tz) utilities for handling time zones, we have added a new experimental `timeZone` prop. Please see the [updated docs](/localization/setting-time-zone) for more details.

```tsx
import { DayPicker, TZDate } from "react-day-picker";
<DayPicker
  timeZone="Europe/Athens" // set the time zone
  disabled={TZDate.tz("Europe/Athens")} // make sure you use `TZDate` to initialize dates
/>;
```

:::note
If you were using the experimental `react-day-picker/utc` module, you can skip now it. Remove the `@date-fns/utc` package and just pass `timeZone="UTC"` to `<DayPicker />`.
:::

#### What's Changed

- fix: make sure internal state is not updated in controlled mode by [@gpbl](https://github.com/gpbl) in [#2473](https://github.com/gpbl/react-day-picker/pull/2473)
- feat: new `timeZone` prop (experimental) by [@gpbl](https://github.com/gpbl) in [#2467](https://github.com/gpbl/react-day-picker/pull/2467)
- feat: export locales from `react-day-picker/locale` by [@gpbl](https://github.com/gpbl) in [#2474](https://github.com/gpbl/react-day-picker/pull/2474)

## v9.1.0

_Release date: 2024-09-18_

Thank you for using and helping improve DayPicker. Here are the notable changes in this release:

- Updated to date-fns v4.
  - Please update `@date-fns/utc` if you are using `react-day-picker/utc`.
- Introduced new custom components for dropdowns and navigation buttons.
- Fixed issues with controlled vs. uncontrolled selections not working as expected.

#### What's Changed

- build: update to date-fns@4 by [@gpbl](https://github.com/gpbl) in [#2466](https://github.com/gpbl/react-day-picker/pull/2466)
- feat: add `PreviousMonthButton` and `NextMonthButton` to custom components by [@gpbl](https://github.com/gpbl) in [#2437](https://github.com/gpbl/react-day-picker/pull/2437)
- feat: add `MonthsDropdown` and `YearsDropdown` custom components by [@gpbl](https://github.com/gpbl) in [#2454](https://github.com/gpbl/react-day-picker/pull/2454)
- feat(types): remove restrictions on `components` and `classNames` prop types by [@gpbl](https://github.com/gpbl) in [#2452](https://github.com/gpbl/react-day-picker/pull/2452)
- feat(types): add `OnSelectHandler` type by [@gpbl](https://github.com/gpbl) in [#2436](https://github.com/gpbl/react-day-picker/pull/2436)
- fix: controlled vs. uncontrolled selections by [@gpbl](https://github.com/gpbl) in [#2462](https://github.com/gpbl/react-day-picker/pull/2462)
- fix: use correct month to disable `Chevron` of `NextMonthButton` by [@qgadrian](https://github.com/qgadrian) in [#2449](https://github.com/gpbl/react-day-picker/pull/2449)
- fix(types): add missing `ClassNames` types for dropdowns by [@hsnaydd](https://github.com/hsnaydd) in [#2441](https://github.com/gpbl/react-day-picker/pull/2441)
- chore: remove unnecessary `labelOptions` from `labelNext` and `labelPrevious` by [@gpbl](https://github.com/gpbl) in [#2434](https://github.com/gpbl/react-day-picker/pull/2434)
- chore: move `Nav` to its own component by [@gpbl](https://github.com/gpbl) in [#2435](https://github.com/gpbl/react-day-picker/pull/2435)
- chore(types): deprecate `Button` in `CustomComponents` by [@gpbl](https://github.com/gpbl) in [#2439](https://github.com/gpbl/react-day-picker/pull/2439)

## v9.0.9

_Release date: 2024-09-07_

This release fixes a regression causing the calendar to reset when selecting the days, improves compatibility with the previous version and fixes some other bugs.

#### What's Changed

- feat: added back more properties to the value returned by `useDayPicker` by [@gpbl](https://github.com/gpbl) in [#2427](https://github.com/gpbl/react-day-picker/pull/2427)
- fix: calendar is reset after selecting a day by [@gpbl](https://github.com/gpbl) in [#2429](https://github.com/gpbl/react-day-picker/pull/2429)
- fix(style): remove unnecessary styles to buttons in footer in DayPicker by [@hsnaydd](https://github.com/hsnaydd) in [#2383](https://github.com/gpbl/react-day-picker/pull/2383)
- fix(style): missing class names for months and years dropdowns [@hsnaydd](https://github.com/hsnaydd) in [#2394](https://github.com/gpbl/react-day-picker/pull/2394)
- fix(utilities): `dateMatchModifiers` to use `defaultDateLib` by [@gpbl](https://github.com/gpbl) in [#2413](https://github.com/gpbl/react-day-picker/pull/2413)
- fix(types): add `formatWeekNumberHeader` to `Formatters` by [@gpbl](https://github.com/gpbl) in [#2412](https://github.com/gpbl/react-day-picker/pull/2412)
- fix(types): add missing `ChevronProps` export by [@rishabh-ink](https://github.com/rishabh-ink) in [#2363](https://github.com/gpbl/react-day-picker/pull/2363)

## v9.0.8

_Release date: 2024-08-07_

This release fixes a regression in v9.0.7 affecting range mode.

#### What's Changed

- fix: update the displayed month only if start/end month change by [@gpbl](https://github.com/gpbl) in [#2358](https://github.com/gpbl/react-day-picker/pull/2358)

## v9.0.7

_Release date: 2024-08-04_

This release improves compatibility with v8 and fix an issue with the calendar navigation.

#### What's Changed

- fix: update calendar state when `startMonth` or `endMonth` change by [@gpbl](https://github.com/gpbl) in [#2343](https://github.com/gpbl/react-day-picker/pull/2343)
- feat: allow partial locales, export `defaultLocale` by [@gpbl](https://github.com/gpbl) in [#2348](https://github.com/gpbl/react-day-picker/pull/2348)
- feat: allow `undefined` as initially selected value, as it was in v8 by [@gpbl](https://github.com/gpbl) in [#2341](https://github.com/gpbl/react-day-picker/pull/2341)
- docs: changed class name `calendar` to `root` in the examples by [@gpbl](https://github.com/gpbl) in [#2347](https://github.com/gpbl/react-day-picker/pull/2347)
- docs: replaced deprecated props by [@josephmarkus](https://github.com/josephmarkus) in [#2336](https://github.com/gpbl/react-day-picker/pull/2336)\*

## v9.0.6

_Release date: 2024-07-31_

This release addresses the failed import of the common-js module for some app builder and add new `data-` attributes to help the integration with Tailwind. Thanks for your feedback!

#### What's Changed

- fix(build): add package.json to dist/cjs module by [@gpbl](https://github.com/gpbl) in [#2330](https://github.com/gpbl/react-day-picker/pull/2330)
- feat: add new data-attributes to the day cells by [@gpbl](https://github.com/gpbl) in [#2331](https://github.com/gpbl/react-day-picker/pull/2331)

## v9.0.5

_Release date: 2024-07-30_

This release improves the range mode behavior (see the [updated docs](/selections/range-mode)) and address some styling issues.

#### What's Changed

- fix: improved range mode to work with min / required props by [@gpbl](https://github.com/gpbl) in [#2326](https://github.com/gpbl/react-day-picker/pull/2326)
- fix(style): typo in css rdp-hidden module css breaking CSS builds by [@ayuhito](https://github.com/ayuhito) in [#2307](https://github.com/gpbl/react-day-picker/pull/2307)
- fix(style): borders grid are not collapsed by [@gpbl](https://github.com/gpbl) in [#2323](https://github.com/gpbl/react-day-picker/pull/2323)
- fix(style): week numbers are now centered by [@gpbl](https://github.com/gpbl) in [#c919ad8](https://github.com/gpbl/react-day-picker/commit/c919ad829c042c7af70b6a88d22c163e697b40d7)

## v9.0.4

_Release date: 2024-07-24_

This release fixes some bugs and improves compatibility with v8.10. Thanks for your feedback and patience! 🤖

#### What's Changed

- fix(css): typo in `.rdp-range_end` by [@AlessioDP](https://github.com/AlessioDP) in [#2298](https://github.com/gpbl/react-day-picker/pull/2298)
- fix(css): dropdown is transparent in Windows OS by [@gpbl](https://github.com/gpbl) in [#2300](https://github.com/gpbl/react-day-picker/pull/2300)
- fix: `endMonth` date not working as expected by [@gpbl](https://github.com/gpbl) in [#2301](https://github.com/gpbl/react-day-picker/pull/2301)
- feat: added back `onDayMouseEnter` and `onDayMouseLeave` by [@gpbl](https://github.com/gpbl) in [#2304](https://github.com/gpbl/react-day-picker/pull/2304)

## v9.0.3

_Release date: 2024-07-23_

This release fixes two issues found with the grid style and the range mode.

#### What's Changed

- fix: alignment of grid elements by [@gpbl](https://github.com/gpbl) in [#2294](https://github.com/gpbl/react-day-picker/pull/2294)
- fix: range mode not updating when selected prop changes by [@gpbl](https://github.com/gpbl) in [#2295](https://github.com/gpbl/react-day-picker/pull/2295)

## v9.0.2

_Release date: 2024-07-22_

This update improves backward compatibility with v8.10.1 for range selection mode.

#### What's Changed

- feat: add `excludeDisabled` prop for range mode by [@gpbl](https://github.com/gpbl) in [#2290](https://github.com/gpbl/react-day-picker/pull/2290)

## v9.0.1

_Release date: 2024-07-22_

This update improves backward compatibility with v8.10.1.

#### What's Changed

- fix: prop types not being correctly interpreted by TS by [@gpbl](https://github.com/gpbl) in [#2283](https://github.com/gpbl/react-day-picker/pull/2283)
- feat: add `DeprecatedUI` enum by [@gpbl](https://github.com/gpbl) in [#2284](https://github.com/gpbl/react-day-picker/pull/2284)

## v9.0.0

_Release date: 2024-07-21_

DayPicker v9 is a major release including significant updates related to accessibility, customization and localization.

- See the updated docs at / and the [upgrading Guide](/upgrading) for more details.

#### Install the Latest Version

```bash
npm install react-day-picker@latest
```

#### What’s New

- Moved `date-fns` from peer dependencies to dependencies.
- Added support for [UTC dates](/localization/setting-time-zone#working-with-time-zoned-dates) and [Jalali Calendar](/localization/persian).
- [Enhanced accessibility](/guides/accessibility) to better comply with [WCAG 2.1](https://www.w3.org/TR/WCAG21/) recommendations.
- [Simplified styles](/docs/styling) and new CSS variables for easier customization.
- Improved selection logic for [range mode](/selections/range-mode).
- New `dropdown-years` and `dropdown-months` caption layouts.
- New `hideWeekdayRow` and `hideNavigation` props.
- Updated for a complete [custom components](/guides/custom-components) support.
- Improved typings and props for better compatibility in TypeScript `strict` mode.

#### Breaking Changes

While we tried to keep the API as stable as possible, some breaking changes were necessary to improve the library:

- The updated ARIA labels could require new translations or updated unit tests selectors.
- Custom CSS styles will likely break, due to the updated CSS classes and simplified styles.
- Custom Components have new API and may break.
- Some typings have been renamed or deprecated.
- The `useInput` hook has been removed. See [Input fields](/guides/input-fields) guide for more details.
- `onWeekNumberClick` has been removed. Use a custom component to handle week number clicks.
- The updated build system to ESM and CommonJS could break some custom bundler.

#### Upgrading Guide

We prepared a [Upgrading guide](/upgrading) for help upgrading your app to v9. We welcome [feedback](https://github.com/gpbl/react-day-picker/discussions) about the upgrade process, to ensure it's smooth for everyone.

#### Compatibility

DayPicker v9 is compatible with React 16.8+.

#### Get Support and Report Issues

Get support, report issues, and provide feedback on the [Discussion forums](https://github.com/gpbl/react-day-picker/discussions). Thanks.

## v8.10.1

_Release date: 2024-04-16_

#### What's Changed

- build: fix Preact support by externalizing JSX runtime by [@pwolfert](https://github.com/pwolfert) in [#2076](https://github.com/gpbl/react-day-picker/pull/2076)
- build: remove unused useIsomorphicLayoutEffect module by [@pwolfert](https://github.com/pwolfert) in [#2077](https://github.com/gpbl/react-day-picker/pull/2077)
- fix(types): improved props for RootContext componet [@zakbutcher](https://github.com/zakbutcher) in [#2073](https://github.com/gpbl/react-day-picker/pull/2073)

## v8.10.0

_Release date: 2023-12-23_

#### What's Changed

#### New Features

- feat: support for date-fns 3.0 by [@gpbl](https://github.com/gpbl) in [#2003](https://github.com/gpbl/react-day-picker/pull/2003)

#### Fixes

- fix(types): cannot find module `types/Matchers` by [@jerodfritz](https://github.com/jerodfritz) in [#1964](https://github.com/gpbl/react-day-picker/pull/1964)
- fix(types): `firstWeekContainsDate` to be only Monday or Thursday by [@gpbl](https://github.com/gpbl) in [#2004](https://github.com/gpbl/react-day-picker/pull/2004)
  - Note: this prop now supports only the value `1` (Monday) and `4` (Thursday) instead of values from `0` to `6`. This change may break your type-check.

#### Docs Udpates

- docs: remove anchor from the Readme image by [@neicore](https://github.com/neicore) in [#1969](https://github.com/gpbl/react-day-picker/pull/1969)
- docs: fix typo by [@toby-brilliant](https://github.com/toby-brilliant) in [#1984](https://github.com/gpbl/react-day-picker/pull/1984)
- docs: adjust example wording: "the today's date" by [@toby-brilliant](https://github.com/toby-brilliant) in [#1987](https://github.com/gpbl/react-day-picker/pull/1987)
- docs: matcher api reference page uses incorrect object syntax by [@janaiscoding](https://github.com/janaiscoding) in [#1978](https://github.com/gpbl/react-day-picker/pull/1978)
- docs: update Contributing.md by [@janaiscoding](https://github.com/janaiscoding) in [#1979](https://github.com/gpbl/react-day-picker/pull/1979)

## v8.9.1

_Release date: 2023-10-18_

#### What's Changed

#### Bug fixes

- fix(types): `PropsWithChildren` not compatible with React 17 by [@binhpv](https://github.com/binhpv) in [#1947](https://github.com/gpbl/react-day-picker/pull/1947)

#### Build

- build(types): add missing `Locale` imports by [@gpbl](https://github.com/gpbl) in [#1948](https://github.com/gpbl/react-day-picker/pull/1948)

<details>
<summary>Updated dependencies</summary>

- build(deps-dev): bump @rollup/plugin-terser from 0.4.3 to 0.4.4 by [@dependabot](https://github.com/dependabot) in [#1939](https://github.com/gpbl/react-day-picker/pull/1939)
- build(deps-dev): bump @adobe/css-tools from 4.0.1 to 4.3.1 by [@dependabot](https://github.com/dependabot) in [#1941](https://github.com/gpbl/react-day-picker/pull/1941)
- build(deps-dev): bump webpack from 5.88.2 to 5.89.0 by [@dependabot](https://github.com/dependabot) in [#1940](https://github.com/gpbl/react-day-picker/pull/1940)
- build(deps-dev): bump @types/react-dom from 18.2.7 to 18.2.13 by [@dependabot](https://github.com/dependabot) in [#1945](https://github.com/gpbl/react-day-picker/pull/1945)

</details>

## v8.8.3

_Release date: 2023-10-14_

#### What's Changed

- feat: support for `nonce`, `lang`, `title` global attributes by [@gpbl](https://github.com/gpbl) in [#1924](https://github.com/gpbl/react-day-picker/pull/1924)
- feat: new custom components "Months" by [@pawelgoc](https://github.com/pawelgoc) in [#1917](https://github.com/gpbl/react-day-picker/pull/1917)
- feat: new `--rdp-selected-color` CSS variable for text of selected days by [@gpbl](https://github.com/gpbl) in [#1931](https://github.com/gpbl/react-day-picker/pull/1931)

#### Updated internal dependencies

<details>
<summary>Details</summary>

- chore(build): update dependencies by [@gpbl](https://github.com/gpbl) in [#1913](https://github.com/gpbl/react-day-picker/pull/1913)
- build(deps-dev): bump postcss from 8.4.27 to 8.4.29 by [@dependabot](https://github.com/dependabot) in [#1905](https://github.com/gpbl/react-day-picker/pull/1905)
- build(deps-dev): bump @typescript-eslint/eslint-plugin from 5.61.0 to 5.62.0 by [@dependabot](https://github.com/dependabot) in [#1904](https://github.com/gpbl/react-day-picker/pull/1904)
- chore(docs): add strict mode to website by [@gpbl](https://github.com/gpbl) in [#1911](https://github.com/gpbl/react-day-picker/pull/1911)
- build(deps-dev): bump @types/node from 18.15.13 to 20.6.5 by [@dependabot](https://github.com/dependabot) in [#1916](https://github.com/gpbl/react-day-picker/pull/1916)
- build(deps-dev): bump rimraf from 5.0.1 to 5.0.5 by [@dependabot](https://github.com/dependabot) in [#1918](https://github.com/gpbl/react-day-picker/pull/1918)
- build(deps): bump focus-trap-react from 10.2.1 to 10.2.2 by [@dependabot](https://github.com/dependabot) in [#1919](https://github.com/gpbl/react-day-picker/pull/1919)
- build(deps-dev): bump postcss from 8.4.30 to 8.4.31 by [@dependabot](https://github.com/dependabot) in [#1921](https://github.com/gpbl/react-day-picker/pull/1921)
- build(deps-dev): bump @types/node from 20.6.5 to 20.8.3 by [@dependabot](https://github.com/dependabot) in [#1925](https://github.com/gpbl/react-day-picker/pull/1925)
- build(deps-dev): bump @rollup/plugin-commonjs from 25.0.4 to 25.0.5 by [@dependabot](https://github.com/dependabot) in [#1929](https://github.com/gpbl/react-day-picker/pull/1929)
- build(deps-dev): bump eslint from 8.50.0 to 8.51.0 by [@dependabot](https://github.com/dependabot) in [#1928](https://github.com/gpbl/react-day-picker/pull/1928)
- build: remove allowSyntheticDefaultImports requirement by [@gpbl](https://github.com/gpbl) in [#1926](https://github.com/gpbl/react-day-picker/pull/1926)
- build(deps): bump clsx from 1.2.1 to 2.0.0 by [@dependabot](https://github.com/dependabot) in [#1927](https://github.com/gpbl/react-day-picker/pull/1927)

</details>

## v8.8.2

_Release date: 2023-09-12_

#### What's Changed

#### Bug fixes

- fix(a11y): remove redundant `rowgroup` role from `tbody` element by [@gpbl](https://github.com/gpbl) in [#1907](https://github.com/gpbl/react-day-picker/pull/1907)

#### Other

- docs: fix typo in Matcher example by [@triptu](https://github.com/triptu) in [#1896](https://github.com/gpbl/react-day-picker/pull/1896)

<details>
<summary>Dependencies Updates</summary>

- build(deps-dev): bump rollup-plugin-dts from 5.3.0 to 5.3.1 by [@dependabot](https://github.com/dependabot) in [#1889](https://github.com/gpbl/react-day-picker/pull/1889)
- build(deps-dev): bump jest and @types/jest by [@dependabot](https://github.com/dependabot) in [#1888](https://github.com/gpbl/react-day-picker/pull/1888)
- build(deps-dev): bump @testing-library/dom from 9.3.0 to 9.3.1 by [@dependabot](https://github.com/dependabot) in [#1886](https://github.com/gpbl/react-day-picker/pull/1886)
- build(deps-dev): bump tslib from 2.5.0 to 2.6.2 by [@dependabot](https://github.com/dependabot) in [#1891](https://github.com/gpbl/react-day-picker/pull/1891)
- build(deps-dev): bump eslint-plugin-import from 2.27.5 to 2.28.1 by [@dependabot](https://github.com/dependabot) in [#1892](https://github.com/gpbl/react-day-picker/pull/1892)
- build(deps-dev): bump @types/react from 18.0.38 to 18.2.21 by [@dependabot](https://github.com/dependabot) in [#1897](https://github.com/gpbl/react-day-picker/pull/1897)
- build(deps): bump focus-trap-react from 10.1.1 to 10.2.1 by [@dependabot](https://github.com/dependabot) in [#1898](https://github.com/gpbl/react-day-picker/pull/1898)
</details>

## v8.8.1

_Release date: 2023-08-18_

#### What's Changed

- fix: range not selected when missing the `from` value by [@Sam-Apostel](https://github.com/Sam-Apostel) in [#1876](https://github.com/gpbl/react-day-picker/pull/1876)
- fix: dropdown may navigate to the wrong month when multiple months are set by [@gpbl](https://github.com/gpbl) in [#1884](https://github.com/gpbl/react-day-picker/pull/1884)
- docs: remove shadow-dom from examples by [@gpbl](https://github.com/gpbl) in [#1817](https://github.com/gpbl/react-day-picker/pull/1817)

#### Build updates

<details>
<summary>Toggle list</summary>

- build(deps): bump @typescript-eslint/eslint-plugin from 5.59.0 to 5.59.11 by [@dependabot](https://github.com/dependabot) in [#1813](https://github.com/gpbl/react-day-picker/pull/1813)
- build: move from yarn to pnpm by [@gpbl](https://github.com/gpbl) in [#1816](https://github.com/gpbl/react-day-picker/pull/1816)
- build: move the main package to the repo root by [@gpbl](https://github.com/gpbl) in [#1827](https://github.com/gpbl/react-day-picker/pull/1827)
- build(deps-dev): bump @typescript-eslint/eslint-plugin from 5.59.11 to 5.61.0 by [@dependabot](https://github.com/dependabot) in [#1829](https://github.com/gpbl/react-day-picker/pull/1829)
- build(deps-dev): bump webpack from 5.83.1 to 5.88.1 by [@dependabot](https://github.com/dependabot) in [#1837](https://github.com/gpbl/react-day-picker/pull/1837)
- build(deps-dev): bump date-fns from 2.29.3 to 2.30.0 by [@dependabot](https://github.com/dependabot) in [#1801](https://github.com/gpbl/react-day-picker/pull/1801)
- build(deps-dev): bump tsc-alias from 1.8.6 to 1.8.7 by [@dependabot](https://github.com/dependabot) in [#1841](https://github.com/gpbl/react-day-picker/pull/1841)
- build(deps): bump word-wrap from 1.2.3 to 1.2.4 by [@dependabot](https://github.com/dependabot) in [#1845](https://github.com/gpbl/react-day-picker/pull/1845)
- build(deps-dev): bump jest and @types/jest by [@dependabot](https://github.com/dependabot) in [#1840](https://github.com/gpbl/react-day-picker/pull/1840)
- build(deps-dev): bump eslint-plugin-jest from 27.2.1 to 27.2.3 by [@dependabot](https://github.com/dependabot) in [#1836](https://github.com/gpbl/react-day-picker/pull/1836)
- build(deps-dev): bump jest-axe from 7.0.1 to 8.0.0 by [@dependabot](https://github.com/dependabot) in [#1850](https://github.com/gpbl/react-day-picker/pull/1850)
- build(deps-dev): bump webpack from 5.83.1 to 5.88.2 by [@dependabot](https://github.com/dependabot) in [#1851](https://github.com/gpbl/react-day-picker/pull/1851)
- build(deps): bump @codesandbox/sandpack-react from 2.6.1 to 2.6.9 by [@dependabot](https://github.com/dependabot) in [#1849](https://github.com/gpbl/react-day-picker/pull/1849)
- build(deps-dev): bump postcss from 8.4.23 to 8.4.27 by [@dependabot](https://github.com/dependabot) in [#1859](https://github.com/gpbl/react-day-picker/pull/1859)
- build(deps): bump semver from 5.7.1 to 5.7.2 by [@dependabot](https://github.com/dependabot) in [#1861](https://github.com/gpbl/react-day-picker/pull/1861)
- build(deps-dev): bump tough-cookie from 4.1.2 to 4.1.3 by [@dependabot](https://github.com/dependabot) in [#1862](https://github.com/gpbl/react-day-picker/pull/1862)
- build(deps-dev): bump @jest/types from 29.5.0 to 29.6.1 by [@dependabot](https://github.com/dependabot) in [#1857](https://github.com/gpbl/react-day-picker/pull/1857)
- build(deps-dev): bump @rollup/plugin-terser from 0.4.1 to 0.4.3 by [@dependabot](https://github.com/dependabot) in [#1858](https://github.com/gpbl/react-day-picker/pull/1858)
- build(deps-dev): bump @types/react-dom from 18.2.6 to 18.2.7 by [@dependabot](https://github.com/dependabot) in [#1869](https://github.com/gpbl/react-day-picker/pull/1869)
- build(deps-dev): bump postcss from 8.4.23 to 8.4.27 by [@dependabot](https://github.com/dependabot) in [#1868](https://github.com/gpbl/react-day-picker/pull/1868)
- build(deps-dev): bump eslint-config-prettier from 8.8.0 to 9.0.0 by [@dependabot](https://github.com/dependabot) in [#1867](https://github.com/gpbl/react-day-picker/pull/1867)
- build: prepublish script typo in package.json by [@trabeast](https://github.com/trabeast) in [#1883](https://github.com/gpbl/react-day-picker/pull/1883)
- build(deps-dev): bump tslib from 2.5.0 to 2.6.1 by [@dependabot](https://github.com/dependabot) in [#1880](https://github.com/gpbl/react-day-picker/pull/1880)
- build(deps-dev): bump @rollup/plugin-commonjs from 25.0.0 to 25.0.4 by [@dependabot](https://github.com/dependabot) in [#1881](https://github.com/gpbl/react-day-picker/pull/1881)
- build(deps-dev): bump @rollup/plugin-node-resolve from 15.0.2 to 15.1.0 by [@dependabot](https://github.com/dependabot) in [#1879](https://github.com/gpbl/react-day-picker/pull/1879)

</details>

## v8.8.0

_Release date: 2023-06-19_

#### What's Changed

- feat: add custom ID to grid elements by [@GeorgeTaveras1231](https://github.com/GeorgeTaveras1231) in [#1730](https://github.com/gpbl/react-day-picker/pull/1730)
- docs: [Time Picker example](https://daypicker.dev/guides/input-fields#example-time-selection) by [@Erik-McKelvey](https://github.com/Erik-McKelvey) in [#1772](https://github.com/gpbl/react-day-picker/pull/1772)
- docs: added more details about [week numbers calculations](https://daypicker.dev/basics/customization#showing-the-week-numbers)

## v8.7.1

_Release date: 2023-04-12_

#### What's Changed

- fix: cannot extend `DayPickerProps`, `DataAttributes` interface by [@gpbl](https://github.com/gpbl) in [#1755](https://github.com/gpbl/react-day-picker/pull/1755)

## v8.7.0

_Release date: 2023-04-09_

#### What's Changed

- feat(rendering): add `id`, `data-` attributes to the root element by [@gpbl](https://github.com/gpbl) in [#1745](https://github.com/gpbl/react-day-picker/pull/1745)
- feat(style): add CSS variable for caption font size by [@7PH](https://github.com/7PH) in [#1703](https://github.com/gpbl/react-day-picker/pull/1703)
- feat(style): uppercase weekday name by [@gpbl](https://github.com/gpbl) in [#1746](https://github.com/gpbl/react-day-picker/pull/1746)
- fix(a11y): empty table header when showing week numbers by [@gpbl](https://github.com/gpbl) in [#1712](https://github.com/gpbl/react-day-picker/pull/1712)
- fix(i18n): caption buttons inverted when using RTL direction and multiple months by [@gpbl](https://github.com/gpbl) in [#1744](https://github.com/gpbl/react-day-picker/pull/1744)
- docs: update range mode documentation [@jorostoyanov](https://github.com/jorostoyanov) in [#1717](https://github.com/gpbl/react-day-picker/pull/1717)

## v8.6.0

_Release date: 2023-02-18_

#### What's Changed

- feat: new `dropdown-buttons` caption layout by [@seanockert](https://github.com/seanockert) in [#1678](https://github.com/gpbl/react-day-picker/pull/1678) (see [example](https://daypicker.dev/basics/navigation#choosing-a-caption-layout)).
- feat: added `displayMonth` prop to `Footer` by [@gpbl](https://github.com/gpbl) in [#1690](https://github.com/gpbl/react-day-picker/pull/1690)

## v8.5.1

_Release date: 2023-01-27_

#### What's Changed

- chore: improve ButtonProps type by [@gpbl](https://github.com/gpbl) in [#1666](https://github.com/gpbl/react-day-picker/pull/1666)

## v8.5.0

_Release date: 2023-01-24_

#### What's Changed

- chore(a11y): accessibility improvements by [@gpbl](https://github.com/gpbl) in [#1658](https://github.com/gpbl/react-day-picker/pull/1658)
  - update `CaptionLabel` to have role `presentation`
  - use `gridcell` directly in button, deprecate `labelDay`
  - update head rows labels
  - use presentation role for table cells
  - use `rowgroup` for `tbody`
- build: updated rollup settings improving source maps and css types by [@gpbl](https://github.com/gpbl) in [#1650](https://github.com/gpbl/react-day-picker/pull/1650)
- build(deps): updated internal dependencies by [@gpbl](https://github.com/gpbl) [@dependabot](https://github.com/dependabot)

## v8.4.1

_Release date: 2022-12-17_

#### What's Changed

- feat: add `onDayPointerEnter`, `onDayPointerLeave` props by [@norbertkeresztes](https://github.com/norbertkeresztes) in [#1614](https://github.com/gpbl/react-day-picker/pull/1614)

## v8.3.7

_Release date: 2022-11-20_

#### What's Changed

- chore(style): add opacity to differentiate outside days by [@hpdganesh](https://github.com/hpdganesh) in [#1592](https://github.com/gpbl/react-day-picker/pull/1592)
- fix(docs): minor typo in upgrading content by [@baldyeagle](https://github.com/baldyeagle) in [#1605](https://github.com/gpbl/react-day-picker/pull/1605)
- fix(bug): matcherToArray should return a copy of the array by [@gpbl](https://github.com/gpbl) in [#1609](https://github.com/gpbl/react-day-picker/pull/1609)
- build(deps): bump loader-utils from 2.0.2 to 2.0.4 by [@dependabot](https://github.com/dependabot) in [#1603](https://github.com/gpbl/react-day-picker/pull/1603)

## v8.3.6

_Release date: 2022-11-06_

#### What's Changed

- fix: set tab-index to 0 when day is focused by [@gpbl](https://github.com/gpbl) in [#1601](https://github.com/gpbl/react-day-picker/pull/1601)
- Upgraded dependencies by [@gpbl](https://github.com/gpbl) in [#1580](https://github.com/gpbl/react-day-picker/pull/1580)

## v8.3.5

_Release date: 2022-10-10_

#### What's Changed

- fix: `range_middle` class is added to days not in the selected range by [@gpbl](https://github.com/gpbl) in [#1581](https://github.com/gpbl/react-day-picker/pull/1581)

## v8.3.4

_Release date: 2022-10-09_

#### What's Changed

- build: fix CSS module types by [@gpbl](https://github.com/gpbl) in [#1578](https://github.com/gpbl/react-day-picker/pull/1578)
- fix: disable tab for outside days (#1567) by [@DanielJKelly](https://github.com/DanielJKelly) in [#1576](https://github.com/gpbl/react-day-picker/pull/1576)

## v8.3.1

_Release date: 2022-10-03_

#### What's Changed

- fix: types for selection modes not being correctly set by [@gpbl](https://github.com/gpbl) in [#1571](https://github.com/gpbl/react-day-picker/pull/1571)
- fix: isMatch to match open DateIntervals by [@gpbl](https://github.com/gpbl) in [#1572](https://github.com/gpbl/react-day-picker/pull/1572)

## v8.3.0

_Release date: 2022-09-26_

#### What's Changed

- feat: add new `id` prop by [@gpbl](https://github.com/gpbl) in [#1556](https://github.com/gpbl/react-day-picker/pull/1556)
- feat: week localization props: `ISOWeek`, `firstWeekContainsDate` by [@gpbl](https://github.com/gpbl) in [#1558](https://github.com/gpbl/react-day-picker/pull/1558)
- fix: infinite recursion when focusing next days by [@eXamadeus](https://github.com/eXamadeus) in [#1549](https://github.com/gpbl/react-day-picker/pull/1549)
- fix: disabled modifiers with min/max range selections by [@gpbl](https://github.com/gpbl) in [#1566](https://github.com/gpbl/react-day-picker/pull/1566)
- fix: improved CSS `focus-visible` and disabled styles by [@gpbl](https://github.com/gpbl) in [#1565](https://github.com/gpbl/react-day-picker/pull/1565)
- chore: updated `SelectSingleEventHandler` interface to type by [@gpbl](https://github.com/gpbl) in [#1555](https://github.com/gpbl/react-day-picker/pull/1555)
- chore: cleanup context types and defaults by [@gpbl](https://github.com/gpbl) in [#1561](https://github.com/gpbl/react-day-picker/pull/1561)
- chore: use [rollup-plugin-ts](https://www.npmjs.com/package/rollup-plugin-ts) to compile typescript by [@gpbl](https://github.com/gpbl) in [#1562](https://github.com/gpbl/react-day-picker/pull/1562)
- chore: add new `Components` type by [@gpbl](https://github.com/gpbl) in [#1563](https://github.com/gpbl/react-day-picker/pull/1563)
- chore: reorganize contexts files by [@gpbl](https://github.com/gpbl) in [#1564](https://github.com/gpbl/react-day-picker/pull/1564)

## v8.2.1

_Release date: 2022-09-08_

#### What's Changed

- fix: CSS module doesn't include the root class by [@gpbl](https://github.com/gpbl) in [#1548](https://github.com/gpbl/react-day-picker/pull/1548)

## v8.2.0

_Release date: 2022-09-01_

#### What's Changed

- new: custom `HeadRow` component by [@gpbl](https://github.com/gpbl) in [#1534](https://github.com/gpbl/react-day-picker/pull/1534)
- changed: add `HeadRow` component by [@KonradLinkowski](https://github.com/KonradLinkowski) in [#1533](https://github.com/gpbl/react-day-picker/pull/1533)
- fixed: selected day outlines in chrome by [@gpbl](https://github.com/gpbl) in [#1536](https://github.com/gpbl/react-day-picker/pull/1536)
- fixed: dropdown focus-visible style by [@gpbl](https://github.com/gpbl) in [#1535](https://github.com/gpbl/react-day-picker/pull/1535)
- fix: use aria-label for days buttons by [@gpbl](https://github.com/gpbl) in [#1537](https://github.com/gpbl/react-day-picker/pull/1537)

## v8.1.4

_Release date: 2022-08-28_

#### What's Changed

- fix: use parsed `fromDate`/`toDate` in `useInput` by [@hypergeometric](https://github.com/hypergeometric) in [#1524](https://github.com/gpbl/react-day-picker/pull/1524)
- changed: add names to fields and buttons by [@gpbl](https://github.com/gpbl) in [#1530](https://github.com/gpbl/react-day-picker/pull/1530)
- changed: focus vs focus-visible styles by [@gpbl](https://github.com/gpbl) in [#1531](https://github.com/gpbl/react-day-picker/pull/1531)

## v8.1.3

_Release date: 2022-08-24_

#### What's Changed

- fix: `onDayClick` called twice in selection mode by [@gpbl](https://github.com/gpbl) in [#1520](https://github.com/gpbl/react-day-picker/pull/1520)
- changed: accept `undefined` for the modifier props by [@gpbl](https://github.com/gpbl) in [#1521](https://github.com/gpbl/react-day-picker/pull/1521)

## v8.1.2

_Release date: 2022-08-22_

#### What's Changed

- fix: do not focus disabled or hidden days by [@gpbl](https://github.com/gpbl) in [#1519](https://github.com/gpbl/react-day-picker/pull/1519)

## v8.1.1

_Release date: 2022-08-19_

#### What's Changed

- fix: prevent focus from moving beyond `toDate` and `fromDate` by [@kimamula](https://github.com/kimamula) in [#1468](https://github.com/gpbl/react-day-picker/pull/1468)
- fix: page keys not working when using `setMonth` by [@kimamula](https://github.com/kimamula) in [#1510](https://github.com/gpbl/react-day-picker/pull/1510)
- fix: add `onSelect` to the `DayPickerContextValue` by [@gpbl](https://github.com/gpbl) in [#1515](https://github.com/gpbl/react-day-picker/pull/1515)
- fix: rdp class not added to root element when using `className` by [@gpbl](https://github.com/gpbl) in [#1517](https://github.com/gpbl/react-day-picker/pull/1517)

## v8.1.0

_Release date: 2022-08-11_

#### What's Changed

- new: add prefix to auto generated ids by [@mihkeleidast](https://github.com/mihkeleidast) in [#1493](https://github.com/gpbl/react-day-picker/pull/1493)
- new: `addedToRange` to the exported utilities by [@stopr29](https://github.com/stopr29) in [#1495](https://github.com/gpbl/react-day-picker/pull/1495)
- new: revert to use `disabled` attribute instead of `aria-disabled` (reverts by [@gpbl](https://github.com/gpbl) in [#1451](https://github.com/gpbl/react-day-picker/pull/1451)). See ongoing discussion in [#1468](https://github.com/gpbl/react-day-picker/pull/1468).
- new(css): use pure selector for CSS variables by [@andyschulzz](https://github.com/andyschulzz) in [#1481](https://github.com/gpbl/react-day-picker/pull/1481), [#1499](https://github.com/gpbl/react-day-picker/pull/1499)
  - Note this may require some changes in your CSS
- fix: `@reach/auto-id` warnings by removing the dependency by [@gpbl](https://github.com/gpbl) in [#1484](https://github.com/gpbl/react-day-picker/pull/1484)
- fix: home/end buttons behavior with `startOfWeek` by [@apdrsn](https://github.com/apdrsn) in [#1492](https://github.com/gpbl/react-day-picker/pull/1492)
- package: upgraded dependencies by [@gpbl](https://github.com/gpbl) in [#1497](https://github.com/gpbl/react-day-picker/pull/1497)

## v8.0.7

_Release date: 2022-06-12_

#### What's Changed

- fixed: missing `dropdown_year` CSS class in `YearsDropdown` by [@pwolfert](https://github.com/pwolfert) in [#1466](https://github.com/gpbl/react-day-picker/pull/1466)
- fixed: Maximum update depth exceeded when select the range date by [@gpbl](https://github.com/gpbl) in [#1470](https://github.com/gpbl/react-day-picker/pull/1470)
- website(chore): Upgrade docusaurus to beta 22 by [@gpbl](https://github.com/gpbl) in [#1469](https://github.com/gpbl/react-day-picker/pull/1469)

## v8.0.6

_Release date: 2022-06-05_

#### What's Changed

- fix(docs): fix typo by [@denkristoffer](https://github.com/denkristoffer) in [#1457](https://github.com/gpbl/react-day-picker/pull/1457)

## v8.0.5

_Release date: 2022-05-15_

#### What's Changed

- fix(docs): typo in property name by [@dzek69](https://github.com/dzek69) in [#1442](https://github.com/gpbl/react-day-picker/pull/1442)
- Use aria-disabled instead of disabled by [@gpbl](https://github.com/gpbl) in [#1451](https://github.com/gpbl/react-day-picker/pull/1451)

## v8.0.4

_Release date: 2022-04-14_

#### What's Changed

- Added src directory to the package for better source maps

## v8.0.3

_Release date: 2022-04-07_

#### What's Changed

- fix: toMonth to include the full month by [@mputilov](https://github.com/mputilov) in [#1429](https://github.com/gpbl/react-day-picker/pull/1429)
- chore: update date-fns imports by [@gpbl](https://github.com/gpbl) in [#1436](https://github.com/gpbl/react-day-picker/pull/1436)

## v8.0.2

_Release date: 2022-04-03_

- new: added `weekStartsOn` prop ([#1422](https://github.com/gpbl/react-day-picker/pull/1422))
- new: split the `Caption` components into `CaptionDropdowns` and `CaptionNavigation` components ([#1426](https://github.com/gpbl/react-day-picker/pull/1426))
  - this change should make easier to customize the caption

## v8.0.1

_Release date: 2022-03-31_

- Added React 18 to the peer dependencies

## v8.0.0

_Release date: 2022-03-26_

This version Introduces mayor breaking changes and is mostly incompatible with v7.

Head over the redesigned website at https://daypicker.dev for more details.

#### Notable changes

- added [date-fns](http://date-fns.org) library as peer dependency
- native TypeScript support
- selection modes: single, multiple, range
- improved ARIA support
- replaced `DayPickerInput` component with `useInput` hook
- new and redesigned props

See also: https://daypicker.dev/guides/upgrading

## v7.4.9

_Release date: 2021-03-18_

- Re-add `transform-react-remove-prop-types` to `.babelrc` ([#1165](https://github.com/gpbl/react-day-picker/issues/1165))
- Add `null` to `RangeModifier` ([#1037](https://github.com/gpbl/react-day-picker/issues/1037))
- Corrected typing for `RangerModifier` ([#1065](https://github.com/gpbl/react-day-picker/issues/1065))
- Add React 17 as peer dependency ([#1075](https://github.com/gpbl/react-day-picker/issues/1075))
- Add `aria-polite` to announce month change during navigation ([#1033](https://github.com/gpbl/react-day-picker/issues/1033))

## v7.4.8

_Release date: 2020-04-19_

- Fixed uncontrolled `DayPickerInput` causing the field not being cleared (#990 by [@ntlf](https://github.com/ntlf))
- Fixed custom `classNames` breaking `aria-` props (#1004 by [@camflan](https://github.com/camflan))
- Added `style` type to `DayPickerInputProps` (#996 by [@anilkabobo](https://github.com/anilkabobo))
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

- Added `onDayPickerShow` prop ([#831](https://github.com/gpbl/react-day-picker/issues/831) by [saenglert](https://github.com/saenglert))
- Added `style` prop ([#832](https://github.com/gpbl/react-day-picker/issues/832) by [kirillku](https://github.com/kirillku))
- Typescript: fixed `classNames` definition ([#796](https://github.com/gpbl/react-day-picker/issues/796) by [davidspiess](https://github.com/davidspiess))

## v7.2.4

_Release date: 2018-09-13_

- Fix regression: re-enabled click on disabled days ([#789](https://github.com/gpbl/react-day-picker/issues/789) by [dewey92](https://github.com/dewey92))
- Fixed an issue with paged navigation when using `toMonth` or `fromMonth` props ([#787](https://github.com/gpbl/react-day-picker/issues/787))

## v7.2](

_Release Date: 2018-08-27_

**DayPicker**

- (CSS) Added `left: auto` to navigation buttons style for easier styling ([#771](https://github.com/gpbl/react-day-picker/issues/771) by [DDDDDanica](https://github.com/DDDDDanica))
- (CSS) Changed css to use `em` units ([#777](https://github.com/gpbl/react-day-picker/issues/777) by [signalwerk](https://github.com/signalwerk))
- (TypeScript) Added `undefined` and `null` as allowed modifier types ([#775](https://github.com/gpbl/react-day-picker/issues/775) by [Lavoaster](https://github.com/Lavoaster))

**DayPickerInput**

- Added `onDayPickerHide` prop
- `onDayChange` will receive the component instance as third argument (useful for checking the input's value)
- (TypeScript) Added top-level type definition for DayPickerInput ([#762](https://github.com/gpbl/react-day-picker/issues/762) by [kryops](https://github.com/kryops))
- (TypeScript) Fixed definition for `DayPickerInput.dayPicker` top-level type definition for DayPickerInput ([#790](https://github.com/gpbl/react-day-picker/issues/790) by [strax](https://github.com/strax))
- Fixed: input content was deleted when typing an invalid date in some cases ([#778](https://github.com/gpbl/react-day-picker/issues/778))

## v7.1.1

_Release date: 2018-07-07_

- Fixed a flickering issue with mouse hover using the default style ([#726](https://github.com/gpbl/react-day-picker/issues/726) by [sv3k](https://github.com/sv3k))
- (DayPickerInput) Fixed: disabled days not working correctly with `classNames` ([#741](https://github.com/gpbl/react-day-picker/issues/741) by [hannescalibrate](https://github.com/hannescalibrate))
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

- Added: [`enableOutsideDaysClick`](https://daypicker.dev/api/DayPicker#enableOutsideDaysClick) prop ([#585](https://github.com/gpbl/react-day-picker/issues/585) by [smesgr](https://github.com/smesgr))
- Fixed: month may be not defined in the navigation component ([#607](https://github.com/gpbl/react-day-picker/issues/607) by [MhMadHamster](https://github.com/MhMadHamster))
- Fixed: outside days were shown also when using `toMonth`/`fromMonth` ([#630](https://github.com/gpbl/react-day-picker/issues/630))
- Fixed: `Cannot read property 'focus'` error with outside days ([#646](https://github.com/gpbl/react-day-picker/issues/646))
- TypeScript: added more types ([#618](https://github.com/gpbl/react-day-picker/issues/618) by [adidahiya](https://github.com/adidahiya))

**DayPickerInput**

- Improved: focus/blur behavior ([#598](https://github.com/gpbl/react-day-picker/issues/598) by [jbarco](https://github.com/bartpeeters), [#579](https://github.com/gpbl/react-day-picker/issues/579))
- Improved: `onDayChange` is called `undefined` when day is not valid ([#647](https://github.com/gpbl/react-day-picker/issues/647))
- Added: [`keepFocus`](https://daypicker.dev/api/DayPickerInput#keepFocus) prop ([#598](https://github.com/gpbl/react-day-picker/issues/598) by [bartpeeters](https://github.com/bartpeeters))
- Fixed: use `dayPickerProps.month` before the input's value ([#612](https://github.com/gpbl/react-day-picker/issues/612) by [kradical](https://github.com/kradical))
- Typescript: fixed `onDayChange` definition ([#622](https://github.com/gpbl/react-day-picker/issues/622))

> This should be the last minor release before [v8.0.0](https://github.com/gpbl/react-day-picker/milestone/10). The next major version should not break existing code but as we are moving [from webpack to rollup](https://github.com/gpbl/react-day-picker/milestone/10) we will bump a major for safety :)

## v7.0.7

_Release date: 2018-01-09_

- (DayPickerInput) Fixed: `daypickerProps.onMonthChange` not being called ([#604](https://github.com/gpbl/react-day-picker/issues/604) by [ah-adarlow](https://github.com/ah-adarlow))

## v7.0.6

_Release date: 2017-12-31_

- (DayPickerInput) Fixed: focusing behavior when pressing the `TAB` key ([#594](https://github.com/gpbl/react-day-picker/issues/594))
- (DayPickerInput) Fixed: wrong behavior with malformatted dates using the included moment `parseDate` function ([#584](https://github.com/gpbl/react-day-picker/issues/584) by [jbarco](https://github.com/jbarco))
- Removed duplicated style from CSS ([#591](https://github.com/gpbl/react-day-picker/issues/591) by [nicoffee](https://github.com/nicoffee))

## v7.0.5

_Release date: 2017-12-03_

- (Typescript) Various fixes to type definitions
- (DayPickerInput) Fixed: issue parsing dates in January
- Fixed: Updated month prop not updating the calendar when displaying multiple months ([#580](https://github.com/gpbl/react-day-picker/issues/580))

## v7.0.0

\_Release Date: 2017-11-25

**Breaking changes**

- `enableOutsideDays` prop is now named `showOutsideDays`
- if you are using `DayPickerInput`, we removed the moment.js dependency and changed how to pass props to the input field (upgrade is easy, see below).
- if you are using commonjs to import the component, change your code:
  ```diff
  - var DayPicker = require('react-day-picker`)
  + var DayPicker = require('react-day-picker`).default
  ```
- if you are using TypeScript and upgrading from `v6.2.1` (see [#533](https://github.com/gpbl/react-day-picker/issues/533)), use the default import:
  ```diff
  - import { DayPicker } from 'react-day-picker`;
  + import DayPicker from 'react-day-picker';
  ```
- if you are using a custom CSS, consider that now the calendar table is inside a `div` with a `.DayPicker-Months` CSS class.

If you find problems while upgrading, please [add an issue](https://github.com/gpbl/react-day-picker/issues/new), thanks!

**New features**

- Improved layout and style. Added `.DayPicker-Months` container.
- Added: [`renderWeek`](https://daypicker.dev/api/DayPicker#renderWeek) prop ([#497](https://github.com/gpbl/react-day-picker/issues/497) by [jenshandersson](https://github.com/jenshandersson))
- Added: [`onTodayButtonClick`](https://daypicker.dev/api/DayPicker#onTodayButtonClick) prop ([#529](https://github.com/gpbl/react-day-picker/issues/529))
- Added: [`showWeekDays`](https://daypicker.dev/api/DayPicker#showWeekDays) prop. Set it to `false` to hide weekday names
- Added: `month` prop to [`navbarElement`](https://daypicker.dev/api/DayPicker#navbarElement) ([#552](https://github.com/gpbl/react-day-picker/issues/552))
- Renamed `enableOutsideDays` prop to [`showOutsideDays`](https://daypicker.dev/api/DayPicker#showOutsideDays)

**Bug fixes**

- Fixed: multiple months navigation not working correctly in some cases ([#556](https://github.com/gpbl/react-day-picker/issues/556) by [hydrognomik](https://github.com/azhangstrata))
- Fixed: (Typescript) added again `DayModifiers` and `Modifiers` back to type definitions file ([#526](https://github.com/gpbl/react-day-picker/issues/526) by [azhangstrata](https://github.com/azhangstrata))
- Fixed: (Typescript) missing default export ([#533](https://github.com/gpbl/react-day-picker/issues/533))
- Fixed: (a11y) removed `role="application"` ([#548](https://github.com/gpbl/react-day-picker/issues/548) by [trezy](https://github.com/trezy))

#### Da

_Release date: PickerInpu_

**Breaking changes**

- The moment.js requirement [#518](https://github.com/gpbl/react-day-picker/pull/518), and you should use [`parseDate`](https://daypicker.dev/api/DayPickerInput#parseDate) and [`formatDate`](https://daypicker.dev/api/DayPickerInput#formatDate) props to parse and format the dates. If you want to keep using moment.js, your existing code should changes as follows:

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

  See also [this example](https://daypicker.dev/examples/input-moment).

- You must pass additional props to the input component using the [`inputProps`](https://daypicker.dev/api/DayPickerInput#inputProps) prop. _This is not a breaking change if you are just using `placeholder` or `value`_. E.g.:
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

- New: [`inputProps`](https://daypicker.dev/api/DayPickerInput#inputProps) prop to pass additional props to the input component
- New: [`parseDate`](https://daypicker.dev/api/DayPickerInput#parseDate) and [`formatDate`](https://daypicker.dev/api/DayPickerInput#formatDate) props
- New: [`inputProps`](https://daypicker.dev/api/DayPickerInput#inputProps) prop to pass additional props to the input component
- New: [`overlayComponent`](https://daypicker.dev/api/DayPickerInput#overlayComponent) prop: useful to customize the overlay component ([#477](https://github.com/gpbl/react-day-picker/issues/477), thanks to [wldcordeiro](https://github.com/wldcordeiro))
- New: allow to change `numberOfMonths`, `selectedDays` props from `dayPickerProps` ([#513](https://github.com/gpbl/react-day-picker/issues/513), [#531](https://github.com/gpbl/react-day-picker/issues/531) by [hydrognomik](https://github.com/hydrognomik)). Useful for selecting range of days ([example](https://daypicker.dev/examples/input-from-to)).
- New: [`showOverlay`](https://daypicker.dev/api/DayPickerInput#showOverlay) prop: shows the overlay at the initial rendering (useful for styling)
- New: [`getInput`](https://daypicker.dev/api/DayPickerInput#getInput) and [`getDayPicker`](https://daypicker.dev/api/DayPickerInput#getDayPicker) public methods

* Changed: clicking the Today Button will set the input value to today ([#561](https://github.com/gpbl/react-day-picker/issues/561))
* Changed: removed `fixedWeek` prop. Use `dayPickerProps ={{ fixedWeek: true }}` to restore it.

**Bug fixes**

- Fixed: some modifiers were not passed down when using a custom `classNames` ([#517](https://github.com/gpbl/react-day-picker/issues/517), [#504](https://github.com/gpbl/react-day-picker/issues/504) by [tume](https://github.com/tume))
- Fixed: focus behavior on Firefox ([#525](https://github.com/gpbl/react-day-picker/issues/525) by [martinmosko](https://github.com/martinmosko))
- Fixed: value not updated when changed in some cases ([#535](https://github.com/gpbl/react-day-picker/issues/535))
- Fixed: localization bug when using multiple languages ([#509](https://github.com/gpbl/react-day-picker/issues/509))

## v6.2.0

_Release Date: 2017-10-05_

- Added: TypeScript definitions for DayPickerInput ([#487](https://github.com/gpbl/react-day-picker/issues/487) by [adidahiya](https://github.com/adidahiya) and [lpcarignan](https://github.com/lpcarignan))

**Bug fixes**

- Fixed: an issue with React 0.14
- Fixed: a console warning in React 16 ([#493](https://github.com/gpbl/react-day-picker/issues/493))
- `DayPickerInput` Fix an error when `format` is passed as array ([#502](https://github.com/gpbl/react-day-picker/issues/502))
- `DayPickerInput` Fix update when receiving new props ([#495](https://github.com/gpbl/react-day-picker/issues/495) by [kradical](https://github.com/kradical))

## v6.1.1

_Release date: 2017-09-27_

- Added: React 16 as peer dependency ([#498](https://github.com/gpbl/react-day-picker/issues/498) by [brycehill](https://github.com/brycehill))
- Allow node consumers to remove propTypes for production builds ([#463](https://github.com/gpbl/react-day-picker/issues/463) by [oigewan](https://github.com/oigewan))

**Bug fixes**

- Fixed: disabled interaction in RTL ([#471](https://github.com/gpbl/react-day-picker/issues/471) by [edoshor](https://github.com/edoshor))

## v6.1.0

_Release Date: 2017-07-09_

**Improvements**

- Added new [`onDayMouseDown`](https://daypicker.dev/api.html#ondaymousedown) and [`onDayMouseUp`](https://daypicker.dev/api.html#ondaymouseup) props ([#445](https://github.com/gpbl/react-day-picker/issues/445) by [eldritchideen](https://github.com/eldritchideen))

**Bug fixes**

- Fixed: before/after modifier not working as expected ([#451](https://github.com/gpbl/react-day-picker/issues/451))
- Fixed: changing some props would not update day cells ([#452](https://github.com/gpbl/react-day-picker/issues/452) by [oigewan](https://github.com/oigewan))
- Fixed: `classNames` may prevent clicking on outside days ([#449](https://github.com/gpbl/react-day-picker/issues/449))

## v6.0.5

_Release date: 2017-07-02_

**Bug fixes**

- Fixed: today button inside a form submits the form ([#443](https://github.com/gpbl/react-day-picker/issues/443))
- Fixed: before/after modifiers not working as expected in some cases ([#442](https://github.com/gpbl/react-day-picker/issues/442))
- `DayPickerInput` Fixed: allow multiple formats in `format` prop ([#439](https://github.com/gpbl/react-day-picker/issues/439))

## v6.0.4

_Release date: 2017-06-26_

**Bug fixes**

- Fixed: next and previous buttons not working via keyboard ([#430](https://github.com/gpbl/react-day-picker/issues/430))
- Fixed: wrapper style cannot be set when using CSS modules ([#432](https://github.com/gpbl/react-day-picker/issues/432))

## v6.0.3

_Release date: 2017-06-22_

**Bug fixes**

- `DayPickerInput` Call `onDayChange(undefined, {})` when user empties the input field. ([#423](https://github.com/gpbl/react-day-picker/issues/423))
- `DayPickerInput` Fixed: shown month was not updated when updating month in `dayPickerProps` ([#425](https://github.com/gpbl/react-day-picker/issues/425))

## v6.0.0

\_Release Date: 2017-06-16

This major release focuses on performance, improves accessibility and fixes some bugs. There are some possible breaking changes, but they are easy to fix (read below).

**Breaking changes**

- The container's HTML structure has changed: the interactive element used to focus the calendar has been moved into a wrapper to improve accessibility ([#392](https://github.com/gpbl/react-day-picker/issues/392)):

  ```diff
  <div className="DayPicker">
  + <div className="DayPicker-wrapper">
    <!-- rendered stuff here -->
  + </div>
  </div>
  ```

  This is a **breaking change** if you are styling the component using your own CSS or with the `classNames` prop.
  - If you are styling with your own stylesheet, rename your `.DayPicker` selector to `.DayPicker-wrapper`:

  ```diff
  - .DayPicker {
  + .DayPicker-wrapper {
  ```

  - If you are using `classNames` with the `container` prop, rename the `container` className to `wrapper`.

- The container element is now an `inline-block` element.

- When using `fromMonth`/`toMonth` props, navigation buttons now are rendered and hidden via CSS. Before, the buttons were not rendered at all, and it was impossible to style them ([#366](https://github.com/gpbl/react-day-picker/issues/366))

  This is a **breaking change** if you are using those props and styling the component using your own CSS or with the `classNames` prop.

  In such cases, the buttons will be always shown even if the previous or the next months are not navigable.
  - If you are styling with your own stylesheet, add a `.DayPicker-NavButton--interactionDisabled` selector to your style with `display: none`.
  - If you are using `classNames`, add a `navButtonInteractionDisabled` to your `classNames` with `display: none` to hide the buttons.

- Improved rendering performance using `shouldComponentUpdate` and `PureComponent` ([#389](https://github.com/gpbl/react-day-picker/issues/389))

  It should not be a breaking change, but if something is not working for you when updating some props please file an issue 🙃

**Improvements**

- Allow `{after, before}` modifiers in the same object ([#354](https://github.com/gpbl/react-day-picker/issues/354)). You can now write before/after modifiers such as `disabledDays={ { before: aDate, after: aDate }}`.
- **DayPickerInput**: added [`clickUnselectsDay`](https://daypicker.dev/api-input.html#clickunselectsday) prop to unselect and clear the input when clicking on a previously selected day ([#399](https://github.com/gpbl/react-day-picker/issues/399))

**Bug fixes**

- Fixed an issue where users were able to focus outside days ([#400](https://github.com/gpbl/react-day-picker/issues/400) by [oigewan](https://github.com/oigewan))
- Fixed an issue with Internet Explorer 11 ([#403](https://github.com/gpbl/react-day-picker/issues/403) by [oigewan](https://github.com/oigewan))
- **a11y**: fixed a warning `You have an unlabeled element or control.` shown with react-a11y ([#386](https://github.com/gpbl/react-day-picker/issues/386))
- **DayPickerInput**: fixed an issue when updating the `month`'s `dayPickerProps` value ([#380](https://github.com/gpbl/react-day-picker/issues/380) by [Yustynn](https://github.com/Yustynn))

**Improvements in the built version**

These changes applies to the production build from the `lib` dir (e.g. that served from unpkg.com).

- Removed prop types from production build ([#349](https://github.com/gpbl/react-day-picker/issues/349))
- Include `DayPicker.Input` in the built file ([#383](https://github.com/gpbl/react-day-picker/issues/383))

  Use `<DayPicker.Input />` to render the input component.

## v5.5.3

_Release date: 2017-05-25_

- Bugfix for `DayPickerInput`: updated `value` prop now will be reflected in the component's state ([#363](https://github.com/gpbl/react-day-picker/issues/363))

## v5.5.0

_Release Date: 2017-05-09_

**New DayPickerInput component**

Use the `DayPickerInput` component to render an input field interacting with the day picker ([#213](https://github.com/gpbl/react-day-picker/issues/213)).

See [example](https://daypicker.dev/examples/input.html), [docs](https://daypicker.dev/input.html) and [API reference](https://daypicker.dev/api-input.html).

**New features**

- New [`todayButton`](https://daypicker.dev/api-daypicker.html#todaybutton) prop ([#329](https://github.com/gpbl/react-day-picker/issues/329)).

  Use this prop to display a button on the calendar's footer to switch to the current month ([example](https://daypicker.dev/examples/customization-today-button.html)).

- New [`showWeekDays`](https://daypicker.dev/api-daypicker.html#showweekdays) and [`onWeekClick`](https://daypicker.dev/api-daypicker.html#onweekclick) props ([#304](https://github.com/gpbl/react-day-picker/issues/304)).

  Use this props to display and interact with the year's week numbers ([example](https://daypicker.dev/examples/customization-week-numbers.html)).

- New `daysOfWeek` [modifiers type](https://daypicker.dev/modifiers.html) to match days of the weeks ([#330](https://github.com/gpbl/react-day-picker/issues/330)).

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

- Bugfix: `isBeforeDay`/`isAfterDay` functions where not exported correctly ([#327](https://github.com/gpbl/react-day-picker/pull/327))

## v5.4.2

_Release date: 2017-05-03_

- Bugfix: `aria` role in Week element ([#322](https://github.com/gpbl/react-day-picker/pull/322) by [emily-plummer](https://github.com/emily-plummer))

## v5.4.1

_Release Date: 2017-04-29_

- Expose [ModifiersUtils](https://daypicker.dev/ModifiersUtils.html) functions ([#309](https://github.com/gpbl/react-day-picker/pull/309) by [cwmoo740](https://github.com/cwmoo740))

  Use this set of functions if you need to validate or test your modifiers.

## v5.3.0

_Release Date: 2017-04-25_

- Include Typescript Type Definitions ([#303](https://github.com/gpbl/react-day-picker/pull/303))
- Added: a new [`modifiersStyles`](https://daypicker.dev/api-daypicker.html#modifiersstyles) prop to add inline style to the days matching the given modifiers (see [`example`](https://daypicker.dev/api-daypicker.html#modifiersstyles)).
- Added: `isDayBefore`, `isDayAfter` functions to [DateUtils](https://daypicker.dev/DateUtils.html).

**Bug fixes**

- Functions were not considered in arrays of modifiers ([#301](https://github.com/gpbl/react-day-picker/pull/301))
- Fixes possible issues when comparing days with different timezones ([#307](https://github.com/gpbl/react-day-picker/pull/307))

## v5.2.3

_Release date: 2017-04-14_

- Fixed `PropTypes` warnings in React 15.5.

## v5.2.0

_Release Date: 2017-03-09_

- Allow overriding `today` modifier ([#279](https://github.com/gpbl/react-day-picker/pull/279) by [maxdubrinsky](https://github.com/maxdubrinsky))
- Pass React Components to [`navBarElement`](https://daypicker.dev/api-daypicker.html#navBarElement), [`captionElement`](https://daypicker.dev/api-daypicker.html#captionElement), [`weekdayElement`](https://daypicker.dev/api-daypicker.html#weekdayElement) ([#280](https://github.com/gpbl/react-day-picker/pull/280) by [cwmoo740](https://github.com/cwmoo740))

- Fixed `aria` roles for weekdays and months HTML elements ([#276](https://github.com/gpbl/react-day-picker/pull/276) by [oigewan](https://github.com/oigewan))

## v5.1.2

_Release date: 2017-03-03_

- Fixed: an issue with keyboard navigation when using `classNames` prop ([#269](https://github.com/gpbl/react-day-picker/pull/269) by [oigewan](https://github.com/oigewan), [#275](https://github.com/gpbl/react-day-picker/pull/275))
- Fixed: installation issue with bower

## v5.1.1

_Release Date: 2017-03-03_

- New [`classNames`](https://daypicker.dev/api-daypicker.html#classnames) prop ([#264](https://github.com/gpbl/react-day-picker/issues/264)).

  Use this prop to change the CSS class names or add support for CSS modules ([#73](https://github.com/gpbl/react-day-picker/issues/73), see [this example](https://daypicker.dev/css-modules.html)).

- New [`month`](https://daypicker.dev/api-daypicker.html#month) prop ([#263](https://github.com/gpbl/react-day-picker/issues/263)).

  This differs from the `initialMonth` props as it causes the calendar to re-render when its value changes.

- Added: `aria-label` attributes to the navigation bar with the new [`labels`](https://daypicker.dev/api-daypicker.html#labels) prop ([#258](https://github.com/gpbl/react-day-picker/issues/258)).

## v5.0.0

\_Release Date: 2017-02-14

This release focuses on improving perfomance and the component's api-daypicker.

- **New modifiers value types** ([#254](https://github.com/gpbl/react-day-picker/issues/254))

  Use dates, arrays, or ranges as modifier types, not just functions:

  ```diff
  <DayPicker
  -     selectedDays={ day => DateUtils.isSameDay(day, this.state.selectedDay)}
  +     selectedDays={ this.state.selectedDay }
  />
  ```

  Read more in the [modifiers documentation](https://daypicker.dev/modifiers.html).

- **Breaking change** Event handlers signature has changed ([#256](https://github.com/gpbl/react-day-picker/issues/256))

  All events handlers like `onDayClick`, `onCaptionClick`, etc. now receive the Syntethic Event as last argument. Thus you must change your event handlers as follow:

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

- **Breaking change** Use [`containerProps`](https://daypicker.dev/api-daypicker.html#containerprops) to pass props to the container `div` element. Before, any prop was passed to the container element degrading performance ([#255](https://github.com/gpbl/react-day-picker/issues/255)):

  ```diff
  <DayPicker
  -    data-thing="foo"
  +    containerProps={ 'data-thing': 'foo' }
  />
  ```

## v4.0.0

\_Release Date: 2017-02-10

- Pass the day's modifiers to the `renderDay` prop function ([#237](https://github.com/gpbl/react-day-picker/issues/237))

- **Breaking change** Updating `initialMonth` will not show anymore a different month after the first mount ([#169](https://github.com/gpbl/react-day-picker/issues/169))

  If you need the calendar to display a different month, use the [`month`](https://daypicker.dev/api-daypicker.html#month) prop.

- **Breaking change** Use `lang` HTML attribute instead of a specific CSS class name.

  This change may break your style or layout if you are styling the component according to the current locale. If this is the case, change your CSS to use the `lang` attribute selector. For examples, if you are styling the calendar for the `de` locale:

  ```diff
  - .DayPicker--de {
  + .DayPicker[lang="de"] {
    background: yellow;
  }
  ```

## v3.1.1

_Release date: 2016-10-18_

- Fixed [an issue](https://github.com/gpbl/react-day-picker/issues/227) with IE and older Safari.

## v3.1.0

_Release Date: 2016-10-14_

- New `months`, `weekdaysLong`, `weekdaysShort`, `firstDayOfWeek` props to localize the component.

**Easier localization**

With these new props you can localize the Day Picker in a more declarative way. Check out [this example](https://daypicker.dev/examples/?localized).

## v3.0.1

_Release date: 2016-10-14_

- Fixed [a bug](https://github.com/gpbl/react-day-picker/issues/224) with MomentLocaleUtils.

## v3.0.0

\_Release Date: 2016-10-11

- Fixed [an issue](https://github.com/gpbl/react-day-picker/issues/207) with weekdays labels ([#220](https://github.com/gpbl/react-day-picker/pull/220) by [makenosound](https://github.com/makenosound)).
- Removed `weekdayComponent` and `navbarComponent` props (deprecated from [v2.3.0](#v230))

**Breaking changes**

For any locale, weekday names must now begin from Sunday, and the first day of week should reflect this change (hence to start from Monday, the first day of week is `1`). See this [#e1462b3](https://github.com/gpbl/react-day-picker/commit/e1462b3818e0a56c24cbcdeb9dba52da8cd8ff72?diff=unified) as example.

## v2.5.0

_Release Date: 2016-10-06_

- Build dist files as UMD module ([#216](https://github.com/gpbl/react-day-picker/pull/216) by [pguimera](https://github.com/pguimera)).

## v2.4.0

_Release Date: 2016-07-31_

- Added `pageNavigation` prop ([#196](https://github.com/gpbl/react-day-picker/pull/196) by [zaygraveyard](https://github.com/zaygraveyard)).
- Improved behavior of `initialMonth` ([#198](https://github.com/gpbl/react-day-picker/pull/198) by [zaygraveyard](https://github.com/zaygraveyard)).

## v2.3.3

_Release date: 2016-07-04_

Fixed props warnings in React 15.2.0 ([#191](https://github.com/gpbl/react-day-picker/pull/191)).

## v2.3.2

_Release date: 2016-07-01_

Removed superfluous deprecation warnings.

## v2.3.0

_Release Date: 2016-06-30_

- Added `navbarElement` and `weekdayElement` prop ([#179](https://github.com/gpbl/react-day-picker/pull/179) by [boatkorachal](https://github.com/boatkorachal)).
- Added `onDayFocus` prop ([#185](https://github.com/gpbl/react-day-picker/pull/185) by [johannesd](https://github.com/johannesd)).

**Deprecation notice**

`navbarComponent` and `weekdayComponent` props are deprecated. Please use `navbarElement` and `weekdayElement`:

```diff
- <DayPicker navbarComponent={ MyCustomNavbar } weekdayComponent={ MyCustomWeekday } />
+ <DayPicker navbarElement={ <MyCustomNavbar/> } weekdayElement={ <MyCustomWeekday /> } />
```

## v2.2.0

_Release Date: 2016-06-09_

Added `fixedWeeks` prop ([#176](https://github.com/gpbl/react-day-picker/pull/176) by [fcsonline](https://github.com/fcsonline)). Use this prop to always display 6 weeks per month: [example](https://daypicker.dev/examples/?fixedWeeks).

## v2.1.1

_Release date: 2016-06-06_

Fixed compatibility with IE11 ([#175](https://github.com/gpbl/react-day-picker/pull/175) by [davidspiess](https://github.com/davidspiess)).

## v2.1.0

_Release Date: 2016-06-02_

- Added [`weekdayComponent`](https://daypicker.dev/api-daypicker.html#weekdaycomponent-component) prop ([#172](https://github.com/gpbl/react-day-picker/pull/172) by [stanislav-ermakov-roi](https://github.com/stanislav-ermakov-roi)). Use this prop to use a custom component for rendering the weekday cells in the header.
- Added [`navbarComponent`](https://daypicker.dev/api-daypicker.html#navbarcomponent-component) prop ([#173](https://github.com/gpbl/react-day-picker/pull/173) by [stanislav-ermakov-roi](https://github.com/stanislav-ermakov-roi)). Use this prop to use a custom component for rendering the navigation bar.

## v2.0.3

_Release date: 2016-05-24_

Included the dist version in the npm package.

## v2.0.2

_Release date: 2016-05-24_

Fixed a bug when `canChangeMonth` is set to `true` ([#168](https://github.com/gpbl/react-day-picker/pull/168)).

## v2.0.1

_Release date: 2016-05-15_

Fix npm release.

## v2.0.0

_Release Date: 2016-05-15_

This release mainly improves the component’s API (thus some breaking changes) and add some new props.

Code has been split in multiple components and tests have been rewritten with [enzyme](https://github.com/airbnb/enzyme). It should be easier to add and test the upcoming new features!

Thanks everyone for the support and for the help on making this component better 🤗 If you have issues or suggestions, don't forget the [Gitter room](https://gitter.im/gpbl/react-day-picker)!

**Breaking changes**

- The `onDay*` event handlers receive as third argument an object of modifiers instead of an array.

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

- Removed `onDayTouchTap`. Use `onDayClick` instead. If you need more granularity over touch events, you can use the new `onDayTouchStart` and `onDayTouchEnd` props. See [#153](https://github.com/gpbl/react-day-picker/issues/153) for more details.

- Fixed import with CommonJS modules ([#136](https://github.com/gpbl/react-day-picker/issues/136)).

This affects code using `require('react-day-picker').default` or similar syntax, which was required for v1.3.0. Now you can `require('react-day-picker')` as usual, i.e. without specifying `default`. If you are using ES2015 modules `import DayPicker from 'react-day-picker'`, this change shouldn't affect you.

- New `formatDay` function in [LocaleUtils](https://daypicker.dev/utils-locale.html).

If you are using your [custom LocaleUtils](https://daypicker.dev/localization.html#advanced) to localize the calendar, you need to implement this function as well, which is required to format the newly added [#132](https://github.com/gpbl/react-day-picker/pull/132) (see the [documentation](https://daypicker.dev/localization.html#advanced) for an example). If you are localizing [using moment](https://daypicker.dev/localization.html#moment), this change shouldn't affect you.

**New props**

- New [`disabledDays`](https://daypicker.dev/api-daypicker.html#disabledays-prop) and [`selectedDays`](https://daypicker.dev/api-daypicker.html#disabledays-prop) props. They receive a function `(day) => Bool` as value to easily define which day should have the `selected` or `disabled` modifiers. See [#34](https://github.com/gpbl/react-day-picker/issues/34) for more details.

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

- Added [`reverseMonths`](https://daypicker.dev/api-daypicker.html#reversemonths-prop) prop to render the most recent month first. ([#141](https://github.com/gpbl/react-day-picker/pull/141) by [@sonrtomas](https://github.com/sonrtomas)
- Added [`onDayKeyDown`](https://daypicker.dev/api-daypicker.html#ondaykeydown-prop), [`onDayTouchStart`](https://daypicker.dev/api-daypicker.html#ondaytouchstart-prop), [`onDayTouchEnd`](https://daypicker.dev/api-daypicker.html#ondaytouchend-prop) props.

**Improvements**

- Navigate between weeks or years using left/right or up/down arrow keys ([#132](https://github.com/gpbl/react-day-picker/pull/132) by [limscoder](https://github.com/limscoder))
- Added various `aria-*` attributes ([#132](https://github.com/gpbl/react-day-picker/pull/132) by [limscoder](https://github.com/limscoder))

**Bug fixes**

- Navigation with keyboard when using `fromMonth` or `endMonth`

## v1.3.2

_Release date: 2016-04-10_

Adds React 15 to the peer dependencies.

## v1.3.1

_Release date: 2016-03-02_

Fixes an issue causing className being overwritten by `className` prop ([\#137](https://github.com/gpbl/react-day-picker/issues/137)).

## v1.3.0

_Release Date: 2016-02-18_

**Improvements**

- Support for Babel 6 ([#90](https://github.com/gpbl/react-day-picker/issues/90))
  - See this [known issue](https://github.com/gpbl/react-day-picker/issues/136)
- HTML props are spread to container tag, so to support `onBlur`, `onFocus`, etc. ([#122](https://github.com/gpbl/react-day-picker/issues/122), [#123](https://github.com/gpbl/react-day-picker/issues/123))
- Better RTL support for month navigation ([#125](https://github.com/gpbl/react-day-picker/issues/125))

## v1.2.0

_Release Date: 2015-12-04_

**New features**

- Use a custom caption element with the new [`captionElement`](https://daypicker.dev/api-daypicker.html#captionelement-element) prop. A custom caption element is useful, for example, to create a year/month navigation as shown in [this example](https://daypicker.dev/examples/advanced-year-navigation.html). Read [#52](https://github.com/gpbl/react-day-picker/issues/52) for a discussion about this feature.

**Improvements**

- Improved navigation when clicking on outside days ([#112](https://github.com/gpbl/react-day-picker/issues/112), see also [this example](https://daypicker.dev/examples/months-restrict-navigation.html))
- New `addMonths` function in [DateUtils](https://daypicker.dev/DateUtils.html)
- Added a style definition to package.json ([#105](https://github.com/gpbl/react-day-picker/issues/105), thanks [@webbushka](https://github.com/webbushka))

**Fixed bugs**

- Make the component working again with React ~0.13 ([#108](https://github.com/gpbl/react-day-picker/issues/108))
- Fixed: a bug when clicking on outside days when `fromMonth` or `toMonth` were set ([#97](https://github.com/gpbl/react-day-picker/issues/97))
- Replace a wrong `attr` tag with the right `abbr` in the weekdays row – https://github.com/gpbl/react-day-picker/issues/33#issuecomment-159751186. ⚠️ Please note that the component may now use the CSS defined for `abbr` tags.

## v1.1.5

_Release date: 2015-11-20_

Fix an issue with `showMonth()` ([#95](https://github.com/gpbl/react-day-picker/issues/95)) – thanks [@JKillian](https://github.com/JKillian)

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

**Fix regression** The last version [#0164a38](https://github.com/gpbl/react-day-picker/commit/0164a38f651771c00d3b4949898937d2013c7ddd) was missing an element and this change may have broken existing styles. This fix restore the original behavior adding the element again. (see [#82](https://github.com/gpbl/react-day-picker/issues/82)).

## v1.1.0

_Release Date: 2015-11-06_

**New features**

- New `fromMonth` and `toMonth` props. Use the [`fromMonth`](https://daypicker.dev/api-daypicker.html#frommonth-date) and [`toMonth`](https://daypicker.dev/api-daypicker.html#tomonth-date) props to restrict the months within which the calendar can work. See [this example](https://daypicker.dev/examples/months-restrict-navigation.html).
- `dateUtils` includes some useful function to set custom modifiers
- `localeUtils` are the default functions used to localize the Day Picker in english. See https://github.com/gpbl/react-day-picker/issues/46#issuecomment-153498039 for a sample usage of this library.

## v1.0.1

_Release date: 2015-10-15_

Let the event from next/previous month click to propagate. [#74](https://github.com/gpbl/react-day-picker/pull/74) ([kblcuk](https://github.com/kblcuk))

## v1.0.9

_Release date: 2015-10-12_

Fixed an issue with Daylight Saving Time for some timezones \(\#71\) [#72](https://github.com/gpbl/react-day-picker/pull/72) ([gpbl](https://github.com/gpbl))

## v1.0.7

_Release date: 2015-10-08_

Add support of react-v0.14-rc1 [\#61](https://github.com/gpbl/react-day-picker/issues/61)

## v1.0.6

_Release date: 2015-10-08_

Fixes a bug causing onCaptionClick to receive always the first month when displaying multiple months [\#63](https://github.com/gpbl/react-day-picker/issues/63)

## v1.0.5

_Release date: 2015-09-01_

Fixes a bug when passing a new `initialMonth` prop to the component that may cause an issue when navigating between months [#57]

## v1.0.4

_Release date: 2015-07-29_

**Improvement**

- Improve the navigation between months when `numberOfMonths` is greater than 1 ([#37](https://github.com/gpbl/react-day-picker/issues/37))

**Bug fix**

- Months may jump forward when clicking on days when `numberOfMonths` is greater than 1 ([#38](https://github.com/gpbl/react-day-picker/issues/38))

## v1.0.3

_Release date: 2015-07-25_

- New feature: onCaptionClick [#31](https://github.com/gpbl/react-day-picker/pull/31) ([adambbecker](https://github.com/adambbecker))

## v1.0.2

_Release date: 2015-07-23_

**Fixed bugs**

- EnableOutsideDays keeps focus on wrong cell [\#29](https://github.com/gpbl/react-day-picker/issues/29)
- October broken on Firefox Nightly [\#18](https://github.com/gpbl/react-day-picker/issues/18)

## v1.0.1

_Release Date: 2015-06-24_

First major release. Please see [the updated website](/) for more info.

- [#27] Removed the dependency from moment.js. Events and props work **only** with native `Date` object. To localize the Day Picker with moment.js (or another library), follow [this page](/localization/changing-locale)
- Class names have been updated (objects are now CamelCase). As example, please see [the updated CSS file](https://github.com/gpbl/react-day-picker/blob/master/site/src/style/DayPicker.scss).
- [#27] All rendered tags are now `div` or `span`. Use CSS to style the daypicker as table.
- A `today` modifier is added automatically
- Event handlers receive the event as first argument. For example: `onDayClick(e, day, modifiers)` instead of `onDayClick(day, modifiers, e)`
- `onNextMonthClick` and `onNextMonthClick` props have been removed. Use `onMonthChange` instead.
