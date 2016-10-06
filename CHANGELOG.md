## [v2.5.0](https://github.com/gpbl/react-day-picker/tree/v2.5.0) (2016-10-06)

* Build dist files as UMD module ([#216](https://github.com/gpbl/react-day-picker/pull/216) by [pguimera](https://github.com/pguimera)).

---

## [v2.4.0](https://github.com/gpbl/react-day-picker/tree/v2.4.0) (2016-07-31)

* Added `pageNavigation` prop ([#196](https://github.com/gpbl/react-day-picker/pull/196) by [zaygraveyard](https://github.com/zaygraveyard)).
* Improved behavior of `initialMonth` ([#198](https://github.com/gpbl/react-day-picker/pull/198) by [zaygraveyard](https://github.com/zaygraveyard)).

---

### [v2.3.3](https://github.com/gpbl/react-day-picker/tree/v2.3.3) (2016-07-04)

Fixed props warnings in React 15.2.0 ([#191](https://github.com/gpbl/react-day-picker/pull/191)).

### [v2.3.2](https://github.com/gpbl/react-day-picker/tree/v2.3.2) (2016-07-01)

Removed superfluous deprecation warnings.

## [v2.3.0](https://github.com/gpbl/react-day-picker/tree/v2.3.0) (2016-06-30)

* Added `navbarElement` and `weekdayElement` prop ([#179](https://github.com/gpbl/react-day-picker/pull/179) by [boatkorachal](https://github.com/boatkorachal)).
* Added `onDayFocus` prop ([#185](https://github.com/gpbl/react-day-picker/pull/185) by [johannesd](https://github.com/johannesd)).

**Deprecation notice**

`navbarComponent` and `weekdayComponent` props are deprecated. Please use `navbarElement` and `weekdayElement`:

```diff
- <DayPicker navbarComponent={ MyCustomNavbar } weekdayComponent={ MyCustomWeekday } />
+ <DayPicker navbarElement={ <MyCustomNavbar/> } weekdayElement={ <MyCustomWeekday /> } />
```

---

## [v2.2.0](https://github.com/gpbl/react-day-picker/tree/v2.2.0) (2016-06-09)

Added `fixedWeeks` prop ([#176](https://github.com/gpbl/react-day-picker/pull/176) by [fcsonline](https://github.com/fcsonline)).
 Use this prop to always display 6 weeks per month: [example](http://react-day-picker.js.org/examples/?fixedWeeks).

---

### [v2.1.1](https://github.com/gpbl/react-day-picker/tree/v2.1.1) (2016-06-06)

Fixed compatibility with IE11 ([#175](https://github.com/gpbl/react-day-picker/pull/175) by [davidspiess](https://github.com/davidspiess)).

## [v2.1.0](https://github.com/gpbl/react-day-picker/tree/v2.1.0) (2016-06-02)

* Added [`weekdayComponent`](http://react-day-picker.js.org/docs/APIProps.html#weekdaycomponent-component) prop ([#172](https://github.com/gpbl/react-day-picker/pull/172) by [stanislav-ermakov-roi](https://github.com/stanislav-ermakov-roi)).
 Use this prop to use a custom component for rendering the weekday cells in the header.
* Added [`navbarComponent`](http://react-day-picker.js.org/docs/APIProps.html#navbarcomponent-component) prop ([#173](https://github.com/gpbl/react-day-picker/pull/173) by [stanislav-ermakov-roi](https://github.com/stanislav-ermakov-roi)).
 Use this prop to use a custom component for rendering the navigation bar.

---

### [v2.0.3](https://github.com/gpbl/react-day-picker/tree/v2.0.3) (2016-05-24)

Included the dist version in the npm package.

### [v2.0.2](https://github.com/gpbl/react-day-picker/tree/v2.0.2) (2016-05-24)

Fixed a bug when `canChangeMonth` is set to `true` ([\#168](https://github.com/gpbl/react-day-picker/pull/168)).

### [v2.0.1](https://github.com/gpbl/react-day-picker/tree/v2.0.1) (2016-05-15)

Fix npm release.

## [v2.0.0](https://github.com/gpbl/react-day-picker/tree/v2.0.0) (2016-05-15)

This release mainly improves the component’s API (thus some breaking changes) and add some new props.

Code has been split in multiple components and tests have been rewritten with [enzyme](https://github.com/airbnb/enzyme). It should be easier to add and test the upcoming new features!

Thanks everyone for the support and for the help on making this component better 🤗
If you have issues or suggestions, don't forget the [Gitter room](https://gitter.im/gpbl/react-day-picker)!

**Breaking changes**

* The `onDay*` event handlers receive as third argument an object of modifiers instead of an array.

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

* Removed `onDayTouchTap`. Use `onDayClick` instead. If you need more granularity over touch events, you can use the new `onDayTouchStart` and `onDayTouchEnd` props. See [#153](https://github.com/gpbl/react-day-picker/issues/153) for more details.

* Fixed import with CommonJS modules ([#136](https://github.com/gpbl/react-day-picker/issues/136)).

 This affects code using `require('react-day-picker').default` or similar syntax, which was required for v1.3.0. Now you can `require('react-day-picker')` as usual, i.e. without specifying `default`. If you are using ES2015 modules `import DayPicker from 'react-day-picker'`, this change shouldn't affect you.

* New `formatDay` function in [LocaleUtils](http://react-day-picker.js.org/docs/LocaleUtils.html).

 If you are using your [custom LocaleUtils](http://react-day-picker.js.org/docs/LocalizationCustom.html) to localize the calendar, you need to implement this function as well, which is required to format the newly added [aria-label attribute](https://github.com/gpbl/react-day-picker/pull/132) (see the [documentation](http://react-day-picker.js.org/docs/LocalizationCustom.html) for an example). If you are localizing [using moment](http://react-day-picker.js.org/docs/LocalizationMoment.html), this change shouldn't affect you.


**New props**

* New [`disabledDays`](http://react-day-picker.js.org/docs/APIProps.html#disabledays-prop) and [`selectedDays`](http://react-day-picker.js.org/docs/APIProps.html#disabledays-prop) props. They receive a function `(day) => Bool` as value to easily define which day should have the `selected` or `disabled` modifiers. See [#34](https://github.com/gpbl/react-day-picker/issues/34) for more details.

  So if you were writing something like:

  ```js
  <DayPicker
    modifiers={
      { selected: day => isDaySelected(day) },
      { disabled: day => isDayDisabled(day) }
    }
  />
  ```

  now you can write:

  ```js
  <DayPicker
    selectedDays={ day => isDaySelected(day) }
    disabledDays={ day => isDayDisabled(day) }
  />
  ```

* Added [`reverseMonths`](http://react-day-picker.js.org/docs/APIProps.html#reversemonths-prop) prop to render the most recent month first. ([#147](https://github.com/gpbl/react-day-picker/pull/141) by [sonrtomas](sonrtomas))
* Added [`onDayKeyDown`](http://react-day-picker.js.org/docs/APIProps.html#ondaykeydown-prop), [`onDayTouchStart`](http://react-day-picker.js.org/docs/APIProps.html#ondaytouchstart-prop), [`onDayTouchEnd`](http://react-day-picker.js.org/docs/APIProps.html#ondaytouchend-prop) props.

**Improvements**

* Navigate between weeks or years using left/right or up/down arrow keys ([#132](https://github.com/gpbl/react-day-picker/pull/132) by [limscoder](https://github.com/limscoder))
* Added various `aria-*` attributes ([#132](https://github.com/gpbl/react-day-picker/pull/132) by [limscoder](https://github.com/limscoder))

**Bug fixes**

* Navigation with keyboard when using `fromMonth` or `endMonth`

---
### [v1.3.2](https://github.com/gpbl/react-day-picker/tree/v1.3.12) (2016-04-10)

Adds React 15 to the peer dependencies.

### [v1.3.1](https://github.com/gpbl/react-day-picker/tree/v1.3.1) (2016-03-02)

Fixes an issue causing className being overwritten by `className` prop ([\#137](https://github.com/gpbl/react-day-picker/issues/137)).

## [v1.3.0](https://github.com/gpbl/react-day-picker/tree/v1.3.0) (2016-02-18)

**Improvements**

* Support for Babel 6 ([#90](https://github.com/gpbl/react-day-picker/issues/90))
    * See this [known issue](https://github.com/gpbl/react-day-picker/issues/136)
* HTML props are spread to container tag, so to support `onBlur`, `onFocus`, etc. ([#122](https://github.com/gpbl/react-day-picker/issues/122), [#123](https://github.com/gpbl/react-day-picker/issues/123))
* Better RTL support for month navigation ([#125](https://github.com/gpbl/react-day-picker/issues/125))

---

## [v1.2.0](https://github.com/gpbl/react-day-picker/tree/v1.2.0) (2015-12-04)

**New features**

* Use a custom caption element with the new [`captionElement`](http://react-day-picker.js.org/docs/APIProps.html#captionelement-element) prop. A custom caption element is useful, for example, to create a year/month navigation as shown in [this example](http://react-day-picker.js.org/examples?yearNavigation). Read [#52](https://github.com/gpbl/react-day-picker/issues/52) for a discussion about this feature.

**Improvements**

* Improved navigation when clicking on outside days ([#112](https://github.com/gpbl/react-day-picker/issues/112), see also [this example](http://react-day-picker.js.org/examples?restricted))
* New `addMonths` function in [DateUtils](http://react-day-picker.js.org/docs/DateUtils.html)
* Added a style definition to package.json ([#105](https://github.com/gpbl/react-day-picker/issues/105), thanks @webbushka)

**Fixed bugs**

* Make the component working again with React ~0.13 ([#108](https://github.com/gpbl/react-day-picker/issues/108))
* Fix a bug when clicking on outside days when `fromMonth` or `toMonth` were set ([#97](https://github.com/gpbl/react-day-picker/issues/97))
* Replace a wrong `attr` tag with the right `abbr` in the weekdays row – https://github.com/gpbl/react-day-picker/issues/33#issuecomment-159751186. ⚠️ Please note that the component may now use the CSS defined for `abbr` tags.

---

### [v1.1.5](https://github.com/gpbl/react-day-picker/tree/v1.1.5) (2015-11-20)

Fix an issue with `showMonth()` ([#95](https://github.com/gpbl/react-day-picker/issues/95)) – thanks @JKillian

### [v1.1.4](https://github.com/gpbl/react-day-picker/tree/1.1.4) (2015-11-19)

Minor changes when importing utilities

### [v1.1.3](https://github.com/gpbl/react-day-picker/tree/v1.1.3) (2015-11-12)

**Improvements**

* `isSameDay` in DateUtils now accepts `null` or `undefined` arguments
* Added bower support

### [v1.1.1](https://github.com/gpbl/react-day-picker/tree/v1.1.1) (2015-11-11)

**Fix regression** The last version [was missing an element](https://github.com/gpbl/react-day-picker/commit/0164a38f651771c00d3b4949898937d2013c7ddd) and this change may have broken existing styles. This fix restore the original behavior adding the element again. (see [#82](https://github.com/gpbl/react-day-picker/issues/82)).

## [v1.1.0](https://github.com/gpbl/react-day-picker/tree/v1.1.0) (2015-11-06)

**New features**

* New `fromMonth` and `toMonth` props. Use the [`fromMonth`](http://react-day-picker.js.org/docs/APIProps.html#frommonth-date) and [`toMonth`](http://react-day-picker.js.org/docs/APIProps.html#tomonth-date) props to restrict the months within which the calendar can work. See [this example](http://react-day-picker.js.org/examples?restricted).
* `dateUtils` includes some useful function to set custom modifiers
* `localeUtils ` are the default functions used to localize the day picker in english. See https://github.com/gpbl/react-day-picker/issues/46#issuecomment-153498039 for a sample usage of this library.

---

### [v1.0.10](https://github.com/gpbl/react-day-picker/tree/v1.0.10) (2015-10-15)

Let the event from next/previous month click to propagate. [\#74](https://github.com/gpbl/react-day-picker/pull/74) ([kblcuk](https://github.com/kblcuk))

### [v1.0.9](https://github.com/gpbl/react-day-picker/tree/v1.0.9) (2015-10-12)

Fixed an issue with Daylight Saving Time for some timezones \(\#71\) [\#72](https://github.com/gpbl/react-day-picker/pull/72) ([gpbl](https://github.com/gpbl))

### [v1.0.7](https://github.com/gpbl/react-day-picker/tree/v1.0.7) (2015-10-08)

Add support of react-v0.14-rc1 [\#61](https://github.com/gpbl/react-day-picker/issues/61)

### [v1.0.6](https://github.com/gpbl/react-day-picker/tree/v1.0.6) (2015-10-08)

Fixes a bug causing onCaptionClick to receive always the first month when displaying multiple months [\#63](https://github.com/gpbl/react-day-picker/issues/63)

### [v1.0.5](https://github.com/gpbl/react-day-picker/tree/v1.0.5) (2015-09-01)

Fixes a bug when passing a new `initialMonth` prop to the component that may cause an issue when navigating between months [#57]

### [v1.0.4](https://github.com/gpbl/react-day-picker/tree/v1.0.4) (2015-07-29)

**Improvement**

* Improve the navigation between months when `numberOfMonths` is greater than 1 ([#37](https://github.com/gpbl/react-day-picker/issues/37))

**Bug fix**

* Months may jump forward when clicking on days when `numberOfMonths` is greater than 1 ([#38](https://github.com/gpbl/react-day-picker/issues/38))

### [v1.0.3](https://github.com/gpbl/react-day-picker/tree/v1.0.3) (2015-07-25)

- New feature: onCaptionClick [\#31](https://github.com/gpbl/react-day-picker/pull/31) ([adambbecker](https://github.com/adambbecker))

### [v1.0.2](https://github.com/gpbl/react-day-picker/tree/v1.0.2) (2015-07-23)

**Fixed bugs**

- EnableOutsideDays keeps focus on wrong cell [\#29](https://github.com/gpbl/react-day-picker/issues/29)
- October broken on Firefox Nightly [\#18](https://github.com/gpbl/react-day-picker/issues/18)

## [v1.0.1](https://github.com/gpbl/react-day-picker/tree/v1.0.1) (2015-06-24)

First major release. Please see [the updated website](http://react-day-picker.js.org) for more info.

* [#27] Removed the dependency from moment.js. Events and props work **only** with native `Date` object. To localize the day picker with moment.js (or another library), follow [this page](http://react-day-picker.js.org/#tips)
* Class names have been updated (objects are now CamelCase). As example, please see [the updated CSS file](https://github.com/gpbl/react-day-picker/blob/master/site/src/style/DayPicker.scss).
*  [#27] All rendered tags are now `div` or `span`. Use CSS to style the daypicker as table.
* A `today` modifier is added automatically
* Event handlers receive the event as first argument. For example: `onDayClick(e, day, modifiers)` instead of `onDayClick(day, modifiers, e)`
* `onNextMonthClick` and `onNextMonthClick` props have been removed. Use `onMonthChange` instead.
