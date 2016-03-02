# Change Log

### [v1.3.1](https://github.com/gpbl/react-day-picker/tree/v1.3.1) (2016-03-02)

Fixes an issue causing className being overwritten by `className` prop [\#137](https://github.com/gpbl/react-day-picker/issues/137)

## [v1.3.0](https://github.com/gpbl/react-day-picker/tree/v1.3.0) (2016-02-18)

**Improvements**

* Support for Babel 6 ([#90](https://github.com/gpbl/react-day-picker/issues/90))
* HTML props are spread to container tag, so to support `onBlur`, `onFocus`, etc. ([#122](https://github.com/gpbl/react-day-picker/issues/122), [#123](https://github.com/gpbl/react-day-picker/issues/123))
* Better RTL support for month navigation ([#125](https://github.com/gpbl/react-day-picker/issues/125))

---

## [v1.2.0](https://github.com/gpbl/react-day-picker/tree/v1.2.0) (2015-12-04)

**New features**

* Use a custom caption element with the new [`captionElement`](http://www.gpbl.org/react-day-picker/docs/APIProps.html#captionelement-element) prop. A custom caption element is useful, for example, to create a year/month navigation as shown in [this example](http://www.gpbl.org/react-day-picker/examples/#yearNavigation). Read [#52](https://github.com/gpbl/react-day-picker/issues/52) for a discussion about this feature.

**Improvements**

* Improved navigation when clicking on outside days ([#112](https://github.com/gpbl/react-day-picker/issues/112), see also [this example](http://www.gpbl.org/react-day-picker/examples/#restricted))
* New `addMonths` function in [DateUtils](http://www.gpbl.org/react-day-picker/docs/DateUtils.html)
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

* New `fromMonth` and `toMonth` props. Use the [`fromMonth`](http://www.gpbl.org/react-day-picker/docs/APIProps.html#frommonth-date) and [`toMonth`](http://www.gpbl.org/react-day-picker/docs/APIProps.html#tomonth-date) props to restrict the months within which the calendar can work. See [this example](http://www.gpbl.org/react-day-picker/examples/#restricted).
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

First major release. Please see [the updated website](http://www.gpbl.org/react-day-picker) for more info.

* [#27] Removed the dependency from moment.js. Events and props work **only** with native `Date` object. To localize the day picker with moment.js (or another library), follow [this page](http://www.gpbl.org/react-day-picker/#tips)
* Class names have been updated (objects are now CamelCase). As example, please see [the updated CSS file](https://github.com/gpbl/react-day-picker/blob/master/site/src/style/DayPicker.scss).
*  [#27] All rendered tags are now `div` or `span`. Use CSS to style the daypicker as table.
* A `today` modifier is added automatically
* Event handlers receive the event as first argument. For example: `onDayClick(e, day, modifiers)` instead of `onDayClick(day, modifiers, e)`
* `onNextMonthClick` and `onNextMonthClick` props have been removed. Use `onMonthChange` instead.
