## [v7.3](https://github.com/gpbl/react-day-picker/tree/v7.3.0) (2019-02-21)

Mostly an update for TypeScript users, few minor fixes, and two new minor  props to the input component.

**DayPicker**

- Fixed: left/right keyboard navigation on RTL ([#845](https://github.com/gpbl/react-day-picker/issues/845) by [johnjesse](https://github.com/johnjesse))
- Fixed: cancel keydown events ([#844](https://github.com/gpbl/react-day-picker/issues/844) by [johnjesse](https://github.com/johnjesse))
- Fix for week number's `tabIndex` when `onWeekClick` is not defined ([#818](https://github.com/gpbl/react-day-picker/issues/818) by [uosl](https://github.com/uosl))
- TypeScript: added `isDate` and `isSameMonth` to `utils` definitions ([#854](https://github.com/gpbl/react-day-picker/issues/854) by [rnons](https://github.com/rnons))
- TypeScript: make months and weekdays types slightly less restrictive  ([#843](https://github.com/gpbl/react-day-picker/issues/843) by [johnjesse](https://github.com/johnjesse))
- TypeScript: add missing props to `weekdayElement` and `captionElement`  ([#842](https://github.com/gpbl/react-day-picker/issues/842) by [johnjesse](https://github.com/johnjesse))
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

### [v7.2.4](https://github.com/gpbl/react-day-picker/tree/v7.2.4) (2018-09-13)

- Fix regression: re-enabled click on disabled days ([#789](https://github.com/gpbl/react-day-picker/issues/789) by
  [dewey92](https://github.com/dewey92))
- Fixed an issue with paged navigation when using `toMonth` or `fromMonth` props ([#787](https://github.com/gpbl/react-day-picker/issues/787))

## [v7.2](https://github.com/gpbl/react-day-picker/tree/v7.2.2) (2018-08-27)

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

### [v7.1.10](https://github.com/gpbl/react-day-picker/tree/v7.1.10) (2018-07-07)

- Fixed a flickering issue with mouse hover using the default style ([#726](https://github.com/gpbl/react-day-picker/issues/726) by
  [sv3k](https://github.com/sv3k))
- (DayPickerInput) Fixed: disabled days not working correctly with `classNames` ([#741](https://github.com/gpbl/react-day-picker/issues/741) by
  [hannescalibrate](https://github.com/hannescalibrate))
- (DayPickerInput) Do not focus the input field if not supported by a custom `component` ([#747](https://github.com/gpbl/react-day-picker/issues/747))

### [v7.1.9](https://github.com/gpbl/react-day-picker/tree/v7.1.9) (2018-05-13)

- (DayPickerInput) Fixed an error when year from input is too big ([#717](https://github.com/gpbl/react-day-picker/issues/717))

### [v7.1.8](https://github.com/gpbl/react-day-picker/tree/v7.1.8) (2018-05-06)

- Fixed: `tabIndex={0}` was not passed to the container ([#716](https://github.com/gpbl/react-day-picker/issues/716))
- (DayPickerInput) Fixed: interaction with the overlay was not working correctly on Safari or IE 11 ([#715](https://github.com/gpbl/react-day-picker/issues/715))

### [v7.1.6](https://github.com/gpbl/react-day-picker/tree/v7.1.6) (2018-04-15)

- Updated to support React 17 ([#696](https://github.com/gpbl/react-day-picker/issues/696))
- Added: `isSameMonth`, `isDate` functions to DateUtils.
- Fixed: month was reset when selecting multiple days ([#669](https://github.com/gpbl/react-day-picker/issues/669))
- Fixed: week numbers may not be correct ([#692](https://github.com/gpbl/react-day-picker/issues/692))
- (DayPickerInput) Fixed: overlay did not reset the displayed month when appearing again ([#667](https://github.com/gpbl/react-day-picker/issues/667))
- (DayPickerInput) Fixed: overlay was shown even if the input was disabled ([#680](https://github.com/gpbl/react-day-picker/issues/680))

## [v7.1](https://github.com/gpbl/react-day-picker/tree/v7.1.4) (2018-03-04)

**DayPicker**

- Added: [`enableOutsideDaysClick`](http://react-day-picker.js.org/api/DayPicker#enableOutsideDaysClick) prop ([#585](https://github.com/gpbl/react-day-picker/issues/585) by
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
- Added: [`keepFocus`](http://react-day-picker.js.org/api/DayPickerInput#keepFocus) prop ([#598](https://github.com/gpbl/react-day-picker/issues/598) by
  [bartpeeters](https://github.com/bartpeeters))
- Fixed: use `dayPickerProps.month` before the input's value ([#612](https://github.com/gpbl/react-day-picker/issues/612) by
  [kradical](https://github.com/kradical))
- Typescript: fixed `onDayChange` definition ([#622](https://github.com/gpbl/react-day-picker/issues/622))

> This should be the last minor release before [v8.0.0](https://github.com/gpbl/react-day-picker/milestone/10). The next major version should not break existing code but as we are moving [from webpack to rollup](https://github.com/gpbl/react-day-picker/milestone/10) we will bump a major for safety :)

### [v7.0.7](https://github.com/gpbl/react-day-picker/tree/v7.0.7) (2018-01-09)

- (DayPickerInput) Fixed: `daypickerProps.onMonthChange` not being called ([#604](https://github.com/gpbl/react-day-picker/issues/604) by
  [ah-adarlow](https://github.com/ah-adarlow))

### [v7.0.6](https://github.com/gpbl/react-day-picker/tree/v7.0.6) (2017-12-31)

- (DayPickerInput) Fixed: focusing behavior when pressing the `TAB` key ([#594](https://github.com/gpbl/react-day-picker/issues/594))
- (DayPickerInput) Fixed: wrong behavior with malformatted dates using the included moment `parseDate` function ([#584](https://github.com/gpbl/react-day-picker/issues/584) by
  [jbarco](https://github.com/jbarco))
- Removed duplicated style from CSS ([#591](https://github.com/gpbl/react-day-picker/issues/591) by
  [nicoffee](https://github.com/nicoffee))

### [v7.0.5](https://github.com/gpbl/react-day-picker/tree/v7.0.5) (2017-12-03)

- (Typescript) Various fixes to type definitions
- (DayPickerInput) Fixed: issue parsing dates in January
- Fixed: Updated month prop not updating the calendar when displaying multiple
  months ([#580](https://github.com/gpbl/react-day-picker/issues/580))

# [v7.0.0](https://github.com/gpbl/react-day-picker/tree/v7.0.0) (2017-11-25)

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
- Added: [`renderWeek`](http://react-day-picker.js.org/api/DayPicker`renderWeek)
  prop ([#497](https://github.com/gpbl/react-day-picker/issues/497) by
  [jenshandersson](https://github.com/jenshandersson))
- Added:
  [`onTodayButtonClick`](http://react-day-picker.js.org/api/DayPicker#onTodayButtonClick)
  prop ([#529](https://github.com/gpbl/react-day-picker/issues/529))
- Added:
  [`showWeekDays`](http://react-day-picker.js.org/api/DayPicker#showWeekDays)
  prop. Set it to `false` to hide weekday names
- Added: `month` prop to
  [`navbarElement`](<(http://react-day-picker.js.org/api/DayPicker#navbarElement)>)
  ([#552](https://github.com/gpbl/react-day-picker/issues/552))
- Renamed `enableOutsideDays` prop to
  [`showOutsideDays`](<(http://react-day-picker.js.org/api/DayPicker#showOutsideDays)>)

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

### DayPickerInput

**Breaking changes**

- The moment.js requirement
  [has been removed](https://github.com/gpbl/react-day-picker/pull/518), and you
  should use
  [`parseDate`](http://react-day-picker.js.org/api/DayPickerInput#parseDate) and
  [`formatDate`](http://react-day-picker.js.org/api/DayPickerInput#formatDate)
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

  See also [this example](http://react-day-picker.js.org/examples/input-moment).

- You must pass additional props to the input component using the
  [`inputProps`](http://react-day-picker.js.org/api/DayPickerInput#inputProps)
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
  [`inputProps`](http://react-day-picker.js.org/api/DayPickerInput#inputProps)
  prop to pass additional props to the input component
- New:
  [`parseDate`](http://react-day-picker.js.org/api/DayPickerInput#parseDate) and
  [`formatDate`](http://react-day-picker.js.org/api/DayPickerInput#formatDate)
  props
- New:
  [`inputProps`](http://react-day-picker.js.org/api/DayPickerInput#inputProps)
  prop to pass additional props to the input component
- New:
  [`overlayComponent`](http://react-day-picker.js.org/api/DayPickerInput#overlayComponent)
  prop: useful to customize the overlay component
  ([#477](https://github.com/gpbl/react-day-picker/issues/477), thanks to
  [wldcordeiro](https://github.com/wldcordeiro))
- New: allow to change `numberOfMonths`, `selectedDays` props from
  `dayPickerProps` ([#513](https://github.com/gpbl/react-day-picker/issues/513),
  [#531](https://github.com/gpbl/react-day-picker/issues/531) by
  [hydrognomik](https://github.com/hydrognomik)). Useful for selecting range of
  days ([example](http://react-day-picker.js.org/examples/input-from-to)).
- New:
  [`showOverlay`](http://react-day-picker.js.org/api/DayPickerInput#showOverlay)
  prop: shows the overlay at the initial rendering (useful for styling)
- New: [`getInput`](http://react-day-picker.js.org/api/DayPickerInput#getInput)
  and
  [`getDayPicker`](http://react-day-picker.js.org/api/DayPickerInput#getDayPicker)
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

---

## [v6.2.0](https://github.com/gpbl/react-day-picker/tree/v6.2.0) (2017-10-05)

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

### [v6.1.1](https://github.com/gpbl/react-day-picker/tree/v6.1.1) (2017-09-27)

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

## [v6.1.0](https://github.com/gpbl/react-day-picker/tree/v6.1.0) (2017-07-09)

**Improvements**

- Added new
  [`onDayMouseDown`](http://react-day-picker.js.org/docs/api.html#ondaymousedown)
  and
  [`onDayMouseUp`](http://react-day-picker.js.org/docs/api.html#ondaymouseup)
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

### [v6.0.5](https://github.com/gpbl/react-day-picker/tree/v6.0.5) (2017-07-02)

**Bug fixes**

- Fixed: today button inside a form submits the form
  ([#443](https://github.com/gpbl/react-day-picker/issues/443))
- Fixed: before/after modifiers not working as expected in some cases
  ([#442](https://github.com/gpbl/react-day-picker/issues/442))
- `DayPickerInput` Fixed: allow multiple formats in `format` prop
  ([#439](https://github.com/gpbl/react-day-picker/issues/439))

### [v6.0.4](https://github.com/gpbl/react-day-picker/tree/v6.0.4) (2017-06-26)

**Bug fixes**

- Fixed: next and previous buttons not working via keyboard
  ([#430](https://github.com/gpbl/react-day-picker/issues/430))
- Fixed: wrapper style cannot be set when using CSS modules
  ([#432](https://github.com/gpbl/react-day-picker/issues/432))

### [v6.0.3](https://github.com/gpbl/react-day-picker/tree/v6.0.3) (2017-06-22)

**Bug fixes**

- `DayPickerInput` Call `onDayChange(undefined, {})` when user empties the input
  field. ([#423](https://github.com/gpbl/react-day-picker/issues/423))
- `DayPickerInput` Fixed: shown month was not updated when updating month in
  `dayPickerProps` ([#425](https://github.com/gpbl/react-day-picker/issues/425))

# [v6.0.0](https://github.com/gpbl/react-day-picker/tree/v6.0.0) (2017-06-16)

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
  [`clickUnselectsDay`](http://react-day-picker.js.org/docs/api-input.html#clickunselectsday)
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

---

### [v5.5.3](https://github.com/gpbl/react-day-picker/tree/v5.5.3) (2017-05-25)

- Bugfix for `DayPickerInput`: updated `value` prop now will be reflected in the
  component's state
  ([#363](https://github.com/gpbl/react-day-picker/issues/363))

## [v5.5.0](https://github.com/gpbl/react-day-picker/tree/v5.5.0) (2017-05-09)

**New DayPickerInput component**

Use the `DayPickerInput` component to render an input field interacting with the
day picker ([#213](https://github.com/gpbl/react-day-picker/issues/213)).

See [example](http://react-day-picker.js.org/examples/input.html),
[docs](http://react-day-picker.js.org/docs/input.html) and
[API reference](http://react-day-picker.js.org/docs/api-input.html).

**New features**

- New
  [`todayButton`](http://react-day-picker.js.org/docs/api-daypicker.html#todaybutton)
  prop ([#329](https://github.com/gpbl/react-day-picker/issues/329)).

  Use this prop to display a button on the calendar's footer to switch to the
  current month
  ([example](http://react-day-picker.js.org/examples/customization-today-button.html)).

- New
  [`showWeekDays`](http://react-day-picker.js.org/docs/api-daypicker.html#showweekdays)
  and
  [`onWeekClick`](http://react-day-picker.js.org/docs/api-daypicker.html#onweekclick)
  props ([#304](https://github.com/gpbl/react-day-picker/issues/304)).

  Use this props to display and interact with the year's week numbers
  ([example](http://react-day-picker.js.org/examples/customization-week-numbers.html)).

- New `daysOfWeek`
  [modifiers type](http://react-day-picker.js.org/docs/modifiers.html) to match
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

### [v5.4.3](https://github.com/gpbl/react-day-picker/tree/v5.4.3) (2017-05-06)

- Bugfix: `isBeforeDay`/`isAfterDay` functions where not exported correctly
  ([#327](https://github.com/gpbl/react-day-picker/pull/327))

### [v5.4.2](https://github.com/gpbl/react-day-picker/tree/v5.4.2) (2017-05-03)

- Bugfix: `aria` role in Week element
  ([#322](https://github.com/gpbl/react-day-picker/pull/322) by
  [emily-plummer](https://github.com/emily-plummer))

## [v5.4.1](https://github.com/gpbl/react-day-picker/tree/v5.4.1) (2017-04-29)

- Expose [ModifiersUtils](http://react-day-picker.js.org/ModifiersUtils.html)
  functions ([#309](https://github.com/gpbl/react-day-picker/pull/309) by
  [cwmoo740](https://github.com/cwmoo740))

  Use this set of functions if you need to validate or test your modifiers.

## [v5.3.0](https://github.com/gpbl/react-day-picker/tree/v5.3.0) (2017-04-25)

- Include Typescript Type Definitions
  ([#303](https://github.com/gpbl/react-day-picker/pull/303))
- Added: a new
  [`modifiersStyles`](http://react-day-picker.js.org/docs/api-daypicker.html#modifiersstyles)
  prop to add inline style to the days matching the given modifiers (see
  [`example`](http://react-day-picker.js.org/docs/api-daypicker.html#modifiersstyles)).
- Added: `isDayBefore`, `isDayAfter` functions to
  [DateUtils](http://react-day-picker.js.org/DateUtils.html).

**Bug fixes**

- Functions were not considered in arrays of modifiers
  ([#301](https://github.com/gpbl/react-day-picker/pull/301))
- Fixes possible issues when comparing days with different timezones
  ([#307](https://github.com/gpbl/react-day-picker/pull/307))

### [v5.2.3](https://github.com/gpbl/react-day-picker/tree/v5.2.3) (2017-04-14)

- Fixed `PropTypes` warnings in React 15.5.

## [v5.2.0](https://github.com/gpbl/react-day-picker/tree/v5.2.0) (2017-03-09)

- Allow overriding `today` modifier
  ([#279](https://github.com/gpbl/react-day-picker/pull/279) by
  [maxdubrinsky](https://github.com/maxdubrinsky))
- Pass React Components to
  [`navBarElement`](http://react-day-picker.js.org/docs/api-daypicker.html#navBarElement),
  [`captionElement`](http://react-day-picker.js.org/docs/api-daypicker.html#captionElement),
  [`weekdayElement`](http://react-day-picker.js.org/docs/api-daypicker.html#weekdayElement)
  ([#280](https://github.com/gpbl/react-day-picker/pull/280) by
  [cwmoo740](https://github.com/cwmoo740))

- Fixed `aria` roles for weekdays and months HTML elements
  ([#276](https://github.com/gpbl/react-day-picker/pull/276) by
  [oigewan](https://github.com/oigewan))

### [v5.1.2](https://github.com/gpbl/react-day-picker/tree/v5.1.2) (2017-03-03)

- Fixed: an issue with keyboard navigation when using `classNames` prop
  ([#269](https://github.com/gpbl/react-day-picker/pull/269) by
  [oigewan](https://github.com/oigewan),
  [#275](https://github.com/gpbl/react-day-picker/pull/275))
- Fixed: installation issue with bower

## [v5.1.1](https://github.com/gpbl/react-day-picker/tree/v5.1.1) (2017-03-03)

- New
  [`classNames`](http://react-day-picker.js.org/docs/api-daypicker.html#classnames)
  prop ([#264](https://github.com/gpbl/react-day-picker/issues/264)).

  Use this prop to change the CSS class names or add support for CSS modules
  ([#73](https://github.com/gpbl/react-day-picker/issues/73), see
  [this example](http://react-day-picker.js.org/docs/css-modules.html)).

- New [`month`](http://react-day-picker.js.org/docs/api-daypicker.html#month)
  prop ([#263](https://github.com/gpbl/react-day-picker/issues/263)).

  This differs from the `initialMonth` props as it causes the calendar to
  re-render when its value changes.

- Added: `aria-label` attributes to the navigation bar with the new
  [`labels`](http://react-day-picker.js.org/docs/api-daypicker.html#labels) prop
  ([#258](https://github.com/gpbl/react-day-picker/issues/258)).

# [v5.0.0](https://github.com/gpbl/react-day-picker/tree/v5.0.0) (2017-02-14)

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
  [modifiers documentation](http://react-day-picker.js.org/docs/modifiers.html).

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
  [`containerProps`](http://react-day-picker.js.org/docs/api-daypicker.html#containerprops)
  to pass props to the container `div` element. Before, any prop was passed to
  the container element degrading performance
  ([#255](https://github.com/gpbl/react-day-picker/issues/255)):

  ```diff
  <DayPicker
  -    data-thing="foo"
  +    containerProps={ 'data-thing': 'foo' }
  />
  ```

---

# [v4.0.0](https://github.com/gpbl/react-day-picker/tree/v4.0.0) (2017-02-10)

- Pass the day's modifiers to the `renderDay` prop function
  ([#237](https://github.com/gpbl/react-day-picker/issues/237))

- **Breaking change** Updating `initialMonth` will not show anymore a different
  month after the first mount
  ([#169](https://github.com/gpbl/react-day-picker/issues/169))

  If you need the calendar to display a different month, use the
  [`month`](http://react-day-picker.js.org/docs/api-daypicker.html#month) prop.

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

---

### [v3.1.1](https://github.com/gpbl/react-day-picker/tree/v3.1.1) (2016-10-18)

- Fixed [an issue](https://github.com/gpbl/react-day-picker/issues/227) with IE
  and older Safari.

## [v3.1.0](https://github.com/gpbl/react-day-picker/tree/v3.1.0) (2016-10-14)

- New `months`, `weekdaysLong`, `weekdaysShort`, `firstDayOfWeek` props to
  localize the component.

**Easier localization**

With these new props you can localize the Day Picker in a more declarative way.
Check out [this example](http://react-day-picker.js.org/examples/?localized).

---

### [v3.0.1](https://github.com/gpbl/react-day-picker/tree/v3.0.1) (2016-10-14)

- Fixed [a bug](https://github.com/gpbl/react-day-picker/issues/224) with
  MomentLocaleUtils.

# [v3.0.0](https://github.com/gpbl/react-day-picker/tree/v3.0.0) (2016-10-11)

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

---

## [v2.5.0](https://github.com/gpbl/react-day-picker/tree/v2.5.0) (2016-10-06)

- Build dist files as UMD module
  ([#216](https://github.com/gpbl/react-day-picker/pull/216) by
  [pguimera](https://github.com/pguimera)).

## [v2.4.0](https://github.com/gpbl/react-day-picker/tree/v2.4.0) (2016-07-31)

- Added `pageNavigation` prop
  ([#196](https://github.com/gpbl/react-day-picker/pull/196) by
  [zaygraveyard](https://github.com/zaygraveyard)).
- Improved behavior of `initialMonth`
  ([#198](https://github.com/gpbl/react-day-picker/pull/198) by
  [zaygraveyard](https://github.com/zaygraveyard)).

### [v2.3.3](https://github.com/gpbl/react-day-picker/tree/v2.3.3) (2016-07-04)

Fixed props warnings in React 15.2.0
([#191](https://github.com/gpbl/react-day-picker/pull/191)).

### [v2.3.2](https://github.com/gpbl/react-day-picker/tree/v2.3.2) (2016-07-01)

Removed superfluous deprecation warnings.

## [v2.3.0](https://github.com/gpbl/react-day-picker/tree/v2.3.0) (2016-06-30)

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

## [v2.2.0](https://github.com/gpbl/react-day-picker/tree/v2.2.0) (2016-06-09)

Added `fixedWeeks` prop
([#176](https://github.com/gpbl/react-day-picker/pull/176) by
[fcsonline](https://github.com/fcsonline)). Use this prop to always display 6
weeks per month: [example](http://react-day-picker.js.org/examples/?fixedWeeks).

### [v2.1.1](https://github.com/gpbl/react-day-picker/tree/v2.1.1) (2016-06-06)

Fixed compatibility with IE11
([#175](https://github.com/gpbl/react-day-picker/pull/175) by
[davidspiess](https://github.com/davidspiess)).

## [v2.1.0](https://github.com/gpbl/react-day-picker/tree/v2.1.0) (2016-06-02)

- Added
  [`weekdayComponent`](http://react-day-picker.js.org/docs/api-daypicker.html#weekdaycomponent-component)
  prop ([#172](https://github.com/gpbl/react-day-picker/pull/172) by
  [stanislav-ermakov-roi](https://github.com/stanislav-ermakov-roi)). Use this
  prop to use a custom component for rendering the weekday cells in the header.
- Added
  [`navbarComponent`](http://react-day-picker.js.org/docs/api-daypicker.html#navbarcomponent-component)
  prop ([#173](https://github.com/gpbl/react-day-picker/pull/173) by
  [stanislav-ermakov-roi](https://github.com/stanislav-ermakov-roi)). Use this
  prop to use a custom component for rendering the navigation bar.

### [v2.0.3](https://github.com/gpbl/react-day-picker/tree/v2.0.3) (2016-05-24)

Included the dist version in the npm package.

### [v2.0.2](https://github.com/gpbl/react-day-picker/tree/v2.0.2) (2016-05-24)

Fixed a bug when `canChangeMonth` is set to `true`
([\#168](https://github.com/gpbl/react-day-picker/pull/168)).

### [v2.0.1](https://github.com/gpbl/react-day-picker/tree/v2.0.1) (2016-05-15)

Fix npm release.

## [v2.0.0](https://github.com/gpbl/react-day-picker/tree/v2.0.0) (2016-05-15)

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
  [LocaleUtils](http://react-day-picker.js.org/docs/utils-locale.html).

If you are using your
[custom LocaleUtils](http://react-day-picker.js.org/docs/localization.html#advanced)
to localize the calendar, you need to implement this function as well, which is
required to format the newly added
[aria-label attribute](https://github.com/gpbl/react-day-picker/pull/132) (see
the
[documentation](http://react-day-picker.js.org/docs/localization.html#advanced)
for an example). If you are localizing
[using moment](http://react-day-picker.js.org/docs/localization.html#moment),
this change shouldn't affect you.

**New props**

- New
  [`disabledDays`](http://react-day-picker.js.org/docs/api-daypicker.html#disabledays-prop)
  and
  [`selectedDays`](http://react-day-picker.js.org/docs/api-daypicker.html#disabledays-prop)
  props. They receive a function `(day) => Bool` as value to easily define which
  day should have the `selected` or `disabled` modifiers. See
  [#34](https://github.com/gpbl/react-day-picker/issues/34) for more details.

  So if you were writing something like:

  ```jsx
  <DayPicker
    modifiers={
      ({ selected: day => isDaySelected(day) },
      { disabled: day => isDayDisabled(day) })
    }
  />
  ```

  now you can write:

  ```jsx
  <DayPicker
    selectedDays={day => isDaySelected(day)}
    disabledDays={day => isDayDisabled(day)}
  />
  ```

- Added
  [`reverseMonths`](http://react-day-picker.js.org/docs/api-daypicker.html#reversemonths-prop)
  prop to render the most recent month first.
  ([#147](https://github.com/gpbl/react-day-picker/pull/141) by
  [sonrtomas](sonrtomas))
- Added
  [`onDayKeyDown`](http://react-day-picker.js.org/docs/api-daypicker.html#ondaykeydown-prop),
  [`onDayTouchStart`](http://react-day-picker.js.org/docs/api-daypicker.html#ondaytouchstart-prop),
  [`onDayTouchEnd`](http://react-day-picker.js.org/docs/api-daypicker.html#ondaytouchend-prop)
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

---

### [v1.3.2](https://github.com/gpbl/react-day-picker/tree/v1.3.12) (2016-04-10)

Adds React 15 to the peer dependencies.

### [v1.3.1](https://github.com/gpbl/react-day-picker/tree/v1.3.1) (2016-03-02)

Fixes an issue causing className being overwritten by `className` prop
([\#137](https://github.com/gpbl/react-day-picker/issues/137)).

## [v1.3.0](https://github.com/gpbl/react-day-picker/tree/v1.3.0) (2016-02-18)

**Improvements**

- Support for Babel 6
  ([#90](https://github.com/gpbl/react-day-picker/issues/90))
  - See this [known issue](https://github.com/gpbl/react-day-picker/issues/136)
- HTML props are spread to container tag, so to support `onBlur`, `onFocus`,
  etc. ([#122](https://github.com/gpbl/react-day-picker/issues/122),
  [#123](https://github.com/gpbl/react-day-picker/issues/123))
- Better RTL support for month navigation
  ([#125](https://github.com/gpbl/react-day-picker/issues/125))

## [v1.2.0](https://github.com/gpbl/react-day-picker/tree/v1.2.0) (2015-12-04)

**New features**

- Use a custom caption element with the new
  [`captionElement`](http://react-day-picker.js.org/docs/api-daypicker.html#captionelement-element)
  prop. A custom caption element is useful, for example, to create a year/month
  navigation as shown in
  [this example](http://react-day-picker.js.org/examples/advanced-year-navigation.html).
  Read [#52](https://github.com/gpbl/react-day-picker/issues/52) for a
  discussion about this feature.

**Improvements**

- Improved navigation when clicking on outside days
  ([#112](https://github.com/gpbl/react-day-picker/issues/112), see also
  [this example](http://react-day-picker.js.org/examples/months-restrict-navigation.html))
- New `addMonths` function in
  [DateUtils](http://react-day-picker.js.org/DateUtils.html)
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

### [v1.1.5](https://github.com/gpbl/react-day-picker/tree/v1.1.5) (2015-11-20)

Fix an issue with `showMonth()`
([#95](https://github.com/gpbl/react-day-picker/issues/95)) – thanks @JKillian

### [v1.1.4](https://github.com/gpbl/react-day-picker/tree/1.1.4) (2015-11-19)

Minor changes when importing utilities

### [v1.1.3](https://github.com/gpbl/react-day-picker/tree/v1.1.3) (2015-11-12)

**Improvements**

- `isSameDay` in DateUtils now accepts `null` or `undefined` arguments
- Added bower support

### [v1.1.1](https://github.com/gpbl/react-day-picker/tree/v1.1.1) (2015-11-11)

**Fix regression** The last version
[was missing an element](https://github.com/gpbl/react-day-picker/commit/0164a38f651771c00d3b4949898937d2013c7ddd)
and this change may have broken existing styles. This fix restore the original
behavior adding the element again. (see
[#82](https://github.com/gpbl/react-day-picker/issues/82)).

## [v1.1.0](https://github.com/gpbl/react-day-picker/tree/v1.1.0) (2015-11-06)

**New features**

- New `fromMonth` and `toMonth` props. Use the
  [`fromMonth`](http://react-day-picker.js.org/docs/api-daypicker.html#frommonth-date)
  and
  [`toMonth`](http://react-day-picker.js.org/docs/api-daypicker.html#tomonth-date)
  props to restrict the months within which the calendar can work. See
  [this example](http://react-day-picker.js.org/examples/months-restrict-navigation.html).
- `dateUtils` includes some useful function to set custom modifiers
- `localeUtils` are the default functions used to localize the Day Picker in
  english. See
  https://github.com/gpbl/react-day-picker/issues/46#issuecomment-153498039 for
  a sample usage of this library.

### [v1.0.10](https://github.com/gpbl/react-day-picker/tree/v1.0.10) (2015-10-15)

Let the event from next/previous month click to propagate.
[\#74](https://github.com/gpbl/react-day-picker/pull/74)
([kblcuk](https://github.com/kblcuk))

### [v1.0.9](https://github.com/gpbl/react-day-picker/tree/v1.0.9) (2015-10-12)

Fixed an issue with Daylight Saving Time for some timezones \(\#71\)
[\#72](https://github.com/gpbl/react-day-picker/pull/72)
([gpbl](https://github.com/gpbl))

### [v1.0.7](https://github.com/gpbl/react-day-picker/tree/v1.0.7) (2015-10-08)

Add support of react-v0.14-rc1
[\#61](https://github.com/gpbl/react-day-picker/issues/61)

### [v1.0.6](https://github.com/gpbl/react-day-picker/tree/v1.0.6) (2015-10-08)

Fixes a bug causing onCaptionClick to receive always the first month when
displaying multiple months
[\#63](https://github.com/gpbl/react-day-picker/issues/63)

### [v1.0.5](https://github.com/gpbl/react-day-picker/tree/v1.0.5) (2015-09-01)

Fixes a bug when passing a new `initialMonth` prop to the component that may
cause an issue when navigating between months [#57]

### [v1.0.4](https://github.com/gpbl/react-day-picker/tree/v1.0.4) (2015-07-29)

**Improvement**

- Improve the navigation between months when `numberOfMonths` is greater than 1
  ([#37](https://github.com/gpbl/react-day-picker/issues/37))

**Bug fix**

- Months may jump forward when clicking on days when `numberOfMonths` is greater
  than 1 ([#38](https://github.com/gpbl/react-day-picker/issues/38))

### [v1.0.3](https://github.com/gpbl/react-day-picker/tree/v1.0.3) (2015-07-25)

- New feature: onCaptionClick
  [\#31](https://github.com/gpbl/react-day-picker/pull/31)
  ([adambbecker](https://github.com/adambbecker))

### [v1.0.2](https://github.com/gpbl/react-day-picker/tree/v1.0.2) (2015-07-23)

**Fixed bugs**

- EnableOutsideDays keeps focus on wrong cell
  [\#29](https://github.com/gpbl/react-day-picker/issues/29)
- October broken on Firefox Nightly
  [\#18](https://github.com/gpbl/react-day-picker/issues/18)

## [v1.0.1](https://github.com/gpbl/react-day-picker/tree/v1.0.1) (2015-06-24)

First major release. Please see
[the updated website](http://react-day-picker.js.org) for more info.

- [#27] Removed the dependency from moment.js. Events and props work **only**
  with native `Date` object. To localize the Day Picker with moment.js (or
  another library), follow [this page](http://react-day-picker.js.org/#tips)
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
