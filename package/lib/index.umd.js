(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = global || self, factory(global.ReactDayPicker = {}, global.React));
}(this, (function (exports, React) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    /**
     * Return props for the Caption component.
     */
    function getCaptionProps(props) {
        var styles = props.styles, classNames = props.classNames;
        return {
            containerProps: {
                className: classNames.caption,
                style: styles.caption,
            },
        };
    }

    var Caption = function (_a) {
        var month = _a.month, dayPickerProps = _a.dayPickerProps;
        var containerProps = getCaptionProps(dayPickerProps).containerProps;
        var locale = dayPickerProps.locale;
        return (React.createElement("caption", __assign({}, containerProps), dayPickerProps.formatCaption(month, { locale: locale })));
    };

    /**
     * Return the props for the Day component.
     */
    function getDayProps(day, modifiers, props) {
        var onDayClick = props.onDayClick, styles = props.styles, modifiersStyles = props.modifiersStyles, classNames = props.classNames, modifiersClassNames = props.modifiersClassNames;
        var onClick;
        if (modifiers.interactive && onDayClick) {
            onClick = function (e) {
                e.stopPropagation();
                e.preventDefault();
                onDayClick(day, modifiers, e);
            };
        }
        var style = __assign({}, styles.day);
        if (styles) {
            // Apply the custom inline-styles
            Object.keys(modifiers).forEach(function (modifier) {
                style = __assign(__assign({}, style), styles[modifier]);
            });
        }
        if (modifiersStyles) {
            // Apply the styles for the modifier
            Object.keys(modifiers).forEach(function (modifier) {
                style = __assign(__assign({}, style), modifiersStyles[modifier]);
            });
        }
        var className = [classNames.day] || [];
        if (modifiersClassNames || classNames) {
            Object.keys(modifiers)
                .filter(function (modifier) { return !!modifiers[modifier]; })
                .forEach(function (modifier) {
                if (classNames[modifier]) {
                    className.push(classNames[modifier]);
                }
                if (modifiersClassNames && modifiersClassNames[modifier]) {
                    className.push(modifiersClassNames[modifier]);
                }
            });
        }
        var dataProps = {};
        Object.entries(modifiers)
            .filter(function (value) { return Boolean(value); })
            .forEach(function (_a) {
            var modifier = _a[0], value = _a[1];
            dataProps["data-rdp-" + modifier] = value;
        });
        var containerProps = __assign({ 'aria-disabled': !modifiers.interactive || undefined, disabled: modifiers.disabled || undefined, onClick: onClick,
            style: style, className: className.join(' ') }, dataProps);
        var wrapperProps = {
            className: classNames.dayWrapper,
            styles: styles.dayWrapper,
        };
        return { containerProps: containerProps, wrapperProps: wrapperProps };
    }

    var Day = function (props) {
        var day = props.day, modifiers = props.modifiers, dayPickerProps = props.dayPickerProps;
        var locale = dayPickerProps.locale, formatDay = dayPickerProps.formatDay;
        var _a = getDayProps(day, modifiers, dayPickerProps), containerProps = _a.containerProps, wrapperProps = _a.wrapperProps;
        if (modifiers && modifiers.hidden) {
            return React.createElement("span", null);
        }
        var Component = modifiers.interactive ? 'button' : 'span';
        return (React.createElement(Component, __assign({}, containerProps),
            React.createElement("span", __assign({}, wrapperProps), formatDay(day, { locale: locale }))));
    };

    /**
     * @name toDate
     * @category Common Helpers
     * @summary Convert the given argument to an instance of Date.
     *
     * @description
     * Convert the given argument to an instance of Date.
     *
     * If the argument is an instance of Date, the function returns its clone.
     *
     * If the argument is a number, it is treated as a timestamp.
     *
     * If the argument is none of the above, the function returns Invalid Date.
     *
     * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
     *
     * @param {Date|Number} argument - the value to convert
     * @returns {Date} the parsed date in the local time zone
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // Clone the date:
     * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
     * //=> Tue Feb 11 2014 11:30:30
     *
     * @example
     * // Convert the timestamp to date:
     * const result = toDate(1392098430000)
     * //=> Tue Feb 11 2014 11:30:30
     */
    function toDate(argument) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var argStr = Object.prototype.toString.call(argument); // Clone the date

      if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
        // Prevent the date to lose the milliseconds when passed to new Date() in IE10
        return new Date(argument.getTime());
      } else if (typeof argument === 'number' || argStr === '[object Number]') {
        return new Date(argument);
      } else {
        if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
          // eslint-disable-next-line no-console
          console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

          console.warn(new Error().stack);
        }

        return new Date(NaN);
      }
    }

    function toInteger(dirtyNumber) {
      if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
        return NaN;
      }

      var number = Number(dirtyNumber);

      if (isNaN(number)) {
        return number;
      }

      return number < 0 ? Math.ceil(number) : Math.floor(number);
    }

    /**
     * @name addDays
     * @category Day Helpers
     * @summary Add the specified number of days to the given date.
     *
     * @description
     * Add the specified number of days to the given date.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the date to be changed
     * @param {Number} amount - the amount of days to be added
     * @returns {Date} the new date with the days added
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // Add 10 days to 1 September 2014:
     * var result = addDays(new Date(2014, 8, 1), 10)
     * //=> Thu Sep 11 2014 00:00:00
     */

    function addDays(dirtyDate, dirtyAmount) {
      if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
      }

      var date = toDate(dirtyDate);
      var amount = toInteger(dirtyAmount);
      date.setDate(date.getDate() + amount);
      return date;
    }

    /**
     * @name addMilliseconds
     * @category Millisecond Helpers
     * @summary Add the specified number of milliseconds to the given date.
     *
     * @description
     * Add the specified number of milliseconds to the given date.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the date to be changed
     * @param {Number} amount - the amount of milliseconds to be added
     * @returns {Date} the new date with the milliseconds added
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
     * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
     * //=> Thu Jul 10 2014 12:45:30.750
     */

    function addMilliseconds(dirtyDate, dirtyAmount) {
      if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
      }

      var timestamp = toDate(dirtyDate).getTime();
      var amount = toInteger(dirtyAmount);
      return new Date(timestamp + amount);
    }

    /**
     * @name startOfWeek
     * @category Week Helpers
     * @summary Return the start of a week for the given date.
     *
     * @description
     * Return the start of a week for the given date.
     * The result will be in the local timezone.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the original date
     * @param {Object} [options] - an object with options.
     * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
     * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
     * @returns {Date} the start of a week
     * @throws {TypeError} 1 argument required
     * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
     *
     * @example
     * // The start of a week for 2 September 2014 11:55:00:
     * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Sun Aug 31 2014 00:00:00
     *
     * @example
     * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
     * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
     * //=> Mon Sep 01 2014 00:00:00
     */

    function startOfWeek(dirtyDate, dirtyOptions) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var options = dirtyOptions || {};
      var locale = options.locale;
      var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
      var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
      var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

      if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
      }

      var date = toDate(dirtyDate);
      var day = date.getDay();
      var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
      date.setDate(date.getDate() - diff);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    var MILLISECONDS_IN_MINUTE = 60000;
    /**
     * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
     * They usually appear for dates that denote time before the timezones were introduced
     * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
     * and GMT+01:00:00 after that date)
     *
     * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
     * which would lead to incorrect calculations.
     *
     * This function returns the timezone offset in milliseconds that takes seconds in account.
     */

    function getTimezoneOffsetInMilliseconds(dirtyDate) {
      var date = new Date(dirtyDate.getTime());
      var baseTimezoneOffset = date.getTimezoneOffset();
      date.setSeconds(0, 0);
      var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE;
      return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
    }

    /**
     * @name startOfDay
     * @category Day Helpers
     * @summary Return the start of a day for the given date.
     *
     * @description
     * Return the start of a day for the given date.
     * The result will be in the local timezone.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the original date
     * @returns {Date} the start of a day
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // The start of a day for 2 September 2014 11:55:00:
     * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Tue Sep 02 2014 00:00:00
     */

    function startOfDay(dirtyDate) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var date = toDate(dirtyDate);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    var MILLISECONDS_IN_DAY = 86400000;
    /**
     * @name differenceInCalendarDays
     * @category Day Helpers
     * @summary Get the number of calendar days between the given dates.
     *
     * @description
     * Get the number of calendar days between the given dates. This means that the times are removed
     * from the dates and then the difference in days is calculated.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} dateLeft - the later date
     * @param {Date|Number} dateRight - the earlier date
     * @returns {Number} the number of calendar days
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // How many calendar days are between
     * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
     * var result = differenceInCalendarDays(
     *   new Date(2012, 6, 2, 0, 0),
     *   new Date(2011, 6, 2, 23, 0)
     * )
     * //=> 366
     * // How many calendar days are between
     * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
     * var result = differenceInCalendarDays(
     *   new Date(2011, 6, 3, 0, 1),
     *   new Date(2011, 6, 2, 23, 59)
     * )
     * //=> 1
     */

    function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
      if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
      }

      var startOfDayLeft = startOfDay(dirtyDateLeft);
      var startOfDayRight = startOfDay(dirtyDateRight);
      var timestampLeft = startOfDayLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfDayLeft);
      var timestampRight = startOfDayRight.getTime() - getTimezoneOffsetInMilliseconds(startOfDayRight); // Round the number of days to the nearest integer
      // because the number of milliseconds in a day is not constant
      // (e.g. it's different in the day of the daylight saving time clock shift)

      return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
    }

    /**
     * @name getDaysInMonth
     * @category Month Helpers
     * @summary Get the number of days in a month of the given date.
     *
     * @description
     * Get the number of days in a month of the given date.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the given date
     * @returns {Number} the number of days in a month
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // How many days are in February 2000?
     * var result = getDaysInMonth(new Date(2000, 1))
     * //=> 29
     */

    function getDaysInMonth(dirtyDate) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var date = toDate(dirtyDate);
      var year = date.getFullYear();
      var monthIndex = date.getMonth();
      var lastDayOfMonth = new Date(0);
      lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
      lastDayOfMonth.setHours(0, 0, 0, 0);
      return lastDayOfMonth.getDate();
    }

    /**
     * @name addMonths
     * @category Month Helpers
     * @summary Add the specified number of months to the given date.
     *
     * @description
     * Add the specified number of months to the given date.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the date to be changed
     * @param {Number} amount - the amount of months to be added
     * @returns {Date} the new date with the months added
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // Add 5 months to 1 September 2014:
     * var result = addMonths(new Date(2014, 8, 1), 5)
     * //=> Sun Feb 01 2015 00:00:00
     */

    function addMonths(dirtyDate, dirtyAmount) {
      if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
      }

      var date = toDate(dirtyDate);
      var amount = toInteger(dirtyAmount);
      var desiredMonth = date.getMonth() + amount;
      var dateWithDesiredMonth = new Date(0);
      dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1);
      dateWithDesiredMonth.setHours(0, 0, 0, 0);
      var daysInMonth = getDaysInMonth(dateWithDesiredMonth); // Set the last day of the new month
      // if the original date was the last day of the longer month

      date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()));
      return date;
    }

    /**
     * @name addWeeks
     * @category Week Helpers
     * @summary Add the specified number of weeks to the given date.
     *
     * @description
     * Add the specified number of week to the given date.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the date to be changed
     * @param {Number} amount - the amount of weeks to be added
     * @returns {Date} the new date with the weeks added
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // Add 4 weeks to 1 September 2014:
     * var result = addWeeks(new Date(2014, 8, 1), 4)
     * //=> Mon Sep 29 2014 00:00:00
     */

    function addWeeks(dirtyDate, dirtyAmount) {
      if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
      }

      var amount = toInteger(dirtyAmount);
      var days = amount * 7;
      return addDays(dirtyDate, days);
    }

    /**
     * @name compareAsc
     * @category Common Helpers
     * @summary Compare the two dates and return -1, 0 or 1.
     *
     * @description
     * Compare the two dates and return 1 if the first date is after the second,
     * -1 if the first date is before the second or 0 if dates are equal.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} dateLeft - the first date to compare
     * @param {Date|Number} dateRight - the second date to compare
     * @returns {Number} the result of the comparison
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // Compare 11 February 1987 and 10 July 1989:
     * var result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
     * //=> -1
     *
     * @example
     * // Sort the array of dates:
     * var result = [
     *   new Date(1995, 6, 2),
     *   new Date(1987, 1, 11),
     *   new Date(1989, 6, 10)
     * ].sort(compareAsc)
     * //=> [
     * //   Wed Feb 11 1987 00:00:00,
     * //   Mon Jul 10 1989 00:00:00,
     * //   Sun Jul 02 1995 00:00:00
     * // ]
     */

    function compareAsc(dirtyDateLeft, dirtyDateRight) {
      if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
      }

      var dateLeft = toDate(dirtyDateLeft);
      var dateRight = toDate(dirtyDateRight);
      var diff = dateLeft.getTime() - dateRight.getTime();

      if (diff < 0) {
        return -1;
      } else if (diff > 0) {
        return 1; // Return 0 if diff is 0; return NaN if diff is NaN
      } else {
        return diff;
      }
    }

    /**
     * @name isValid
     * @category Common Helpers
     * @summary Is the given date valid?
     *
     * @description
     * Returns false if argument is Invalid Date and true otherwise.
     * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
     * Invalid Date is a Date, whose time value is NaN.
     *
     * Time value of Date: http://es5.github.io/#x15.9.1.1
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * - Now `isValid` doesn't throw an exception
     *   if the first argument is not an instance of Date.
     *   Instead, argument is converted beforehand using `toDate`.
     *
     *   Examples:
     *
     *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
     *   |---------------------------|---------------|---------------|
     *   | `new Date()`              | `true`        | `true`        |
     *   | `new Date('2016-01-01')`  | `true`        | `true`        |
     *   | `new Date('')`            | `false`       | `false`       |
     *   | `new Date(1488370835081)` | `true`        | `true`        |
     *   | `new Date(NaN)`           | `false`       | `false`       |
     *   | `'2016-01-01'`            | `TypeError`   | `false`       |
     *   | `''`                      | `TypeError`   | `false`       |
     *   | `1488370835081`           | `TypeError`   | `true`        |
     *   | `NaN`                     | `TypeError`   | `false`       |
     *
     *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
     *   that try to coerce arguments to the expected type
     *   (which is also the case with other *date-fns* functions).
     *
     * @param {*} date - the date to check
     * @returns {Boolean} the date is valid
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // For the valid date:
     * var result = isValid(new Date(2014, 1, 31))
     * //=> true
     *
     * @example
     * // For the value, convertable into a date:
     * var result = isValid(1393804800000)
     * //=> true
     *
     * @example
     * // For the invalid date:
     * var result = isValid(new Date(''))
     * //=> false
     */

    function isValid(dirtyDate) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var date = toDate(dirtyDate);
      return !isNaN(date);
    }

    /**
     * @name isSameDay
     * @category Day Helpers
     * @summary Are the given dates in the same day?
     *
     * @description
     * Are the given dates in the same day?
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} dateLeft - the first date to check
     * @param {Date|Number} dateRight - the second date to check
     * @returns {Boolean} the dates are in the same day
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
     * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
     * //=> true
     */

    function isSameDay(dirtyDateLeft, dirtyDateRight) {
      if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
      }

      var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
      var dateRightStartOfDay = startOfDay(dirtyDateRight);
      return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
    }

    /**
     * @name differenceInCalendarMonths
     * @category Month Helpers
     * @summary Get the number of calendar months between the given dates.
     *
     * @description
     * Get the number of calendar months between the given dates.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} dateLeft - the later date
     * @param {Date|Number} dateRight - the earlier date
     * @returns {Number} the number of calendar months
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // How many calendar months are between 31 January 2014 and 1 September 2014?
     * var result = differenceInCalendarMonths(
     *   new Date(2014, 8, 1),
     *   new Date(2014, 0, 31)
     * )
     * //=> 8
     */

    function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
      if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
      }

      var dateLeft = toDate(dirtyDateLeft);
      var dateRight = toDate(dirtyDateRight);
      var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
      var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
      return yearDiff * 12 + monthDiff;
    }

    var MILLISECONDS_IN_WEEK = 604800000;
    /**
     * @name differenceInCalendarWeeks
     * @category Week Helpers
     * @summary Get the number of calendar weeks between the given dates.
     *
     * @description
     * Get the number of calendar weeks between the given dates.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} dateLeft - the later date
     * @param {Date|Number} dateRight - the earlier date
     * @param {Object} [options] - an object with options.
     * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
     * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
     * @returns {Number} the number of calendar weeks
     * @throws {TypeError} 2 arguments required
     * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
     *
     * @example
     * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
     * var result = differenceInCalendarWeeks(
     *   new Date(2014, 6, 20),
     *   new Date(2014, 6, 5)
     * )
     * //=> 3
     *
     * @example
     * // If the week starts on Monday,
     * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
     * var result = differenceInCalendarWeeks(
     *   new Date(2014, 6, 20),
     *   new Date(2014, 6, 5),
     *   { weekStartsOn: 1 }
     * )
     * //=> 2
     */

    function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
      if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
      }

      var startOfWeekLeft = startOfWeek(dirtyDateLeft, dirtyOptions);
      var startOfWeekRight = startOfWeek(dirtyDateRight, dirtyOptions);
      var timestampLeft = startOfWeekLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekLeft);
      var timestampRight = startOfWeekRight.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekRight); // Round the number of days to the nearest integer
      // because the number of milliseconds in a week is not constant
      // (e.g. it's different in the week of the daylight saving time clock shift)

      return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
    }

    /**
     * @name differenceInDays
     * @category Day Helpers
     * @summary Get the number of full days between the given dates.
     *
     * @description
     * Get the number of full day periods between the given dates.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} dateLeft - the later date
     * @param {Date|Number} dateRight - the earlier date
     * @returns {Number} the number of full days
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // How many full days are between
     * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
     * var result = differenceInDays(
     *   new Date(2012, 6, 2, 0, 0),
     *   new Date(2011, 6, 2, 23, 0)
     * )
     * //=> 365
     * // How many days are between
     * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
     * var result = differenceInDays(
     *   new Date(2011, 6, 3, 0, 1),
     *   new Date(2011, 6, 2, 23, 59)
     * )
     * //=> 0
     */

    function differenceInDays(dirtyDateLeft, dirtyDateRight) {
      if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
      }

      var dateLeft = toDate(dirtyDateLeft);
      var dateRight = toDate(dirtyDateRight);
      var sign = compareAsc(dateLeft, dateRight);
      var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight));
      dateLeft.setDate(dateLeft.getDate() - sign * difference); // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
      // If so, result must be decreased by 1 in absolute value

      var isLastDayNotFull = compareAsc(dateLeft, dateRight) === -sign;
      var result = sign * (difference - isLastDayNotFull); // Prevent negative zero

      return result === 0 ? 0 : result;
    }

    /**
     * @name differenceInMonths
     * @category Month Helpers
     * @summary Get the number of full months between the given dates.
     *
     * @description
     * Get the number of full months between the given dates.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} dateLeft - the later date
     * @param {Date|Number} dateRight - the earlier date
     * @returns {Number} the number of full months
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // How many full months are between 31 January 2014 and 1 September 2014?
     * var result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
     * //=> 7
     */

    function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
      if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
      }

      var dateLeft = toDate(dirtyDateLeft);
      var dateRight = toDate(dirtyDateRight);
      var sign = compareAsc(dateLeft, dateRight);
      var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight));
      dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
      // If so, result must be decreased by 1 in absolute value

      var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign;
      var result = sign * (difference - isLastMonthNotFull); // Prevent negative zero

      return result === 0 ? 0 : result;
    }

    /**
     * @name startOfMonth
     * @category Month Helpers
     * @summary Return the start of a month for the given date.
     *
     * @description
     * Return the start of a month for the given date.
     * The result will be in the local timezone.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the original date
     * @returns {Date} the start of a month
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // The start of a month for 2 September 2014 11:55:00:
     * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Mon Sep 01 2014 00:00:00
     */

    function startOfMonth(dirtyDate) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var date = toDate(dirtyDate);
      date.setDate(1);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    /**
     * @name endOfMonth
     * @category Month Helpers
     * @summary Return the end of a month for the given date.
     *
     * @description
     * Return the end of a month for the given date.
     * The result will be in the local timezone.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the original date
     * @returns {Date} the end of a month
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // The end of a month for 2 September 2014 11:55:00:
     * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Tue Sep 30 2014 23:59:59.999
     */

    function endOfMonth(dirtyDate) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var date = toDate(dirtyDate);
      var month = date.getMonth();
      date.setFullYear(date.getFullYear(), month + 1, 0);
      date.setHours(23, 59, 59, 999);
      return date;
    }

    /**
     * @name endOfWeek
     * @category Week Helpers
     * @summary Return the end of a week for the given date.
     *
     * @description
     * Return the end of a week for the given date.
     * The result will be in the local timezone.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the original date
     * @param {Object} [options] - an object with options.
     * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
     * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
     * @returns {Date} the end of a week
     * @throws {TypeError} 1 argument required
     * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
     *
     * @example
     * // The end of a week for 2 September 2014 11:55:00:
     * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Sat Sep 06 2014 23:59:59.999
     *
     * @example
     * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
     * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
     * //=> Sun Sep 07 2014 23:59:59.999
     */

    function endOfWeek(dirtyDate, dirtyOptions) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var options = dirtyOptions || {};
      var locale = options.locale;
      var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
      var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
      var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

      if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
      }

      var date = toDate(dirtyDate);
      var day = date.getDay();
      var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
      date.setDate(date.getDate() + diff);
      date.setHours(23, 59, 59, 999);
      return date;
    }

    var formatDistanceLocale = {
      lessThanXSeconds: {
        one: 'less than a second',
        other: 'less than {{count}} seconds'
      },
      xSeconds: {
        one: '1 second',
        other: '{{count}} seconds'
      },
      halfAMinute: 'half a minute',
      lessThanXMinutes: {
        one: 'less than a minute',
        other: 'less than {{count}} minutes'
      },
      xMinutes: {
        one: '1 minute',
        other: '{{count}} minutes'
      },
      aboutXHours: {
        one: 'about 1 hour',
        other: 'about {{count}} hours'
      },
      xHours: {
        one: '1 hour',
        other: '{{count}} hours'
      },
      xDays: {
        one: '1 day',
        other: '{{count}} days'
      },
      aboutXMonths: {
        one: 'about 1 month',
        other: 'about {{count}} months'
      },
      xMonths: {
        one: '1 month',
        other: '{{count}} months'
      },
      aboutXYears: {
        one: 'about 1 year',
        other: 'about {{count}} years'
      },
      xYears: {
        one: '1 year',
        other: '{{count}} years'
      },
      overXYears: {
        one: 'over 1 year',
        other: 'over {{count}} years'
      },
      almostXYears: {
        one: 'almost 1 year',
        other: 'almost {{count}} years'
      }
    };
    function formatDistance(token, count, options) {
      options = options || {};
      var result;

      if (typeof formatDistanceLocale[token] === 'string') {
        result = formatDistanceLocale[token];
      } else if (count === 1) {
        result = formatDistanceLocale[token].one;
      } else {
        result = formatDistanceLocale[token].other.replace('{{count}}', count);
      }

      if (options.addSuffix) {
        if (options.comparison > 0) {
          return 'in ' + result;
        } else {
          return result + ' ago';
        }
      }

      return result;
    }

    function buildFormatLongFn(args) {
      return function (dirtyOptions) {
        var options = dirtyOptions || {};
        var width = options.width ? String(options.width) : args.defaultWidth;
        var format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
      };
    }

    var dateFormats = {
      full: 'EEEE, MMMM do, y',
      long: 'MMMM do, y',
      medium: 'MMM d, y',
      short: 'MM/dd/yyyy'
    };
    var timeFormats = {
      full: 'h:mm:ss a zzzz',
      long: 'h:mm:ss a z',
      medium: 'h:mm:ss a',
      short: 'h:mm a'
    };
    var dateTimeFormats = {
      full: "{{date}} 'at' {{time}}",
      long: "{{date}} 'at' {{time}}",
      medium: '{{date}}, {{time}}',
      short: '{{date}}, {{time}}'
    };
    var formatLong = {
      date: buildFormatLongFn({
        formats: dateFormats,
        defaultWidth: 'full'
      }),
      time: buildFormatLongFn({
        formats: timeFormats,
        defaultWidth: 'full'
      }),
      dateTime: buildFormatLongFn({
        formats: dateTimeFormats,
        defaultWidth: 'full'
      })
    };

    var formatRelativeLocale = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: 'P'
    };
    function formatRelative(token, _date, _baseDate, _options) {
      return formatRelativeLocale[token];
    }

    function buildLocalizeFn(args) {
      return function (dirtyIndex, dirtyOptions) {
        var options = dirtyOptions || {};
        var context = options.context ? String(options.context) : 'standalone';
        var valuesArray;

        if (context === 'formatting' && args.formattingValues) {
          var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
          var width = options.width ? String(options.width) : defaultWidth;
          valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
          var _defaultWidth = args.defaultWidth;

          var _width = options.width ? String(options.width) : args.defaultWidth;

          valuesArray = args.values[_width] || args.values[_defaultWidth];
        }

        var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
        return valuesArray[index];
      };
    }

    var eraValues = {
      narrow: ['B', 'A'],
      abbreviated: ['BC', 'AD'],
      wide: ['Before Christ', 'Anno Domini']
    };
    var quarterValues = {
      narrow: ['1', '2', '3', '4'],
      abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
      wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
      // If you are making a new locale based on this one, check if the same is true for the language you're working on.
      // Generally, formatted dates should look like they are in the middle of a sentence,
      // e.g. in Spanish language the weekdays and months should be in the lowercase.

    };
    var monthValues = {
      narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };
    var dayValues = {
      narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    };
    var dayPeriodValues = {
      narrow: {
        am: 'a',
        pm: 'p',
        midnight: 'mi',
        noon: 'n',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
      },
      abbreviated: {
        am: 'AM',
        pm: 'PM',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
      },
      wide: {
        am: 'a.m.',
        pm: 'p.m.',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
      }
    };
    var formattingDayPeriodValues = {
      narrow: {
        am: 'a',
        pm: 'p',
        midnight: 'mi',
        noon: 'n',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
      },
      abbreviated: {
        am: 'AM',
        pm: 'PM',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
      },
      wide: {
        am: 'a.m.',
        pm: 'p.m.',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
      }
    };

    function ordinalNumber(dirtyNumber, _dirtyOptions) {
      var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
      // if they are different for different grammatical genders,
      // use `options.unit`:
      //
      //   var options = dirtyOptions || {}
      //   var unit = String(options.unit)
      //
      // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
      // 'day', 'hour', 'minute', 'second'

      var rem100 = number % 100;

      if (rem100 > 20 || rem100 < 10) {
        switch (rem100 % 10) {
          case 1:
            return number + 'st';

          case 2:
            return number + 'nd';

          case 3:
            return number + 'rd';
        }
      }

      return number + 'th';
    }

    var localize = {
      ordinalNumber: ordinalNumber,
      era: buildLocalizeFn({
        values: eraValues,
        defaultWidth: 'wide'
      }),
      quarter: buildLocalizeFn({
        values: quarterValues,
        defaultWidth: 'wide',
        argumentCallback: function (quarter) {
          return Number(quarter) - 1;
        }
      }),
      month: buildLocalizeFn({
        values: monthValues,
        defaultWidth: 'wide'
      }),
      day: buildLocalizeFn({
        values: dayValues,
        defaultWidth: 'wide'
      }),
      dayPeriod: buildLocalizeFn({
        values: dayPeriodValues,
        defaultWidth: 'wide',
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: 'wide'
      })
    };

    function buildMatchPatternFn(args) {
      return function (dirtyString, dirtyOptions) {
        var string = String(dirtyString);
        var options = dirtyOptions || {};
        var matchResult = string.match(args.matchPattern);

        if (!matchResult) {
          return null;
        }

        var matchedString = matchResult[0];
        var parseResult = string.match(args.parsePattern);

        if (!parseResult) {
          return null;
        }

        var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        return {
          value: value,
          rest: string.slice(matchedString.length)
        };
      };
    }

    function buildMatchFn(args) {
      return function (dirtyString, dirtyOptions) {
        var string = String(dirtyString);
        var options = dirtyOptions || {};
        var width = options.width;
        var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        var matchResult = string.match(matchPattern);

        if (!matchResult) {
          return null;
        }

        var matchedString = matchResult[0];
        var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        var value;

        if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
          value = findIndex(parsePatterns, function (pattern) {
            return pattern.test(string);
          });
        } else {
          value = findKey(parsePatterns, function (pattern) {
            return pattern.test(string);
          });
        }

        value = args.valueCallback ? args.valueCallback(value) : value;
        value = options.valueCallback ? options.valueCallback(value) : value;
        return {
          value: value,
          rest: string.slice(matchedString.length)
        };
      };
    }

    function findKey(object, predicate) {
      for (var key in object) {
        if (object.hasOwnProperty(key) && predicate(object[key])) {
          return key;
        }
      }
    }

    function findIndex(array, predicate) {
      for (var key = 0; key < array.length; key++) {
        if (predicate(array[key])) {
          return key;
        }
      }
    }

    var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
    var parseOrdinalNumberPattern = /\d+/i;
    var matchEraPatterns = {
      narrow: /^(b|a)/i,
      abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
      wide: /^(before christ|before common era|anno domini|common era)/i
    };
    var parseEraPatterns = {
      any: [/^b/i, /^(a|c)/i]
    };
    var matchQuarterPatterns = {
      narrow: /^[1234]/i,
      abbreviated: /^q[1234]/i,
      wide: /^[1234](th|st|nd|rd)? quarter/i
    };
    var parseQuarterPatterns = {
      any: [/1/i, /2/i, /3/i, /4/i]
    };
    var matchMonthPatterns = {
      narrow: /^[jfmasond]/i,
      abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
      wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
    };
    var parseMonthPatterns = {
      narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
      any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
    };
    var matchDayPatterns = {
      narrow: /^[smtwf]/i,
      short: /^(su|mo|tu|we|th|fr|sa)/i,
      abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
      wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
    };
    var parseDayPatterns = {
      narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
      any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
    };
    var matchDayPeriodPatterns = {
      narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
      any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
    };
    var parseDayPeriodPatterns = {
      any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
      }
    };
    var match = {
      ordinalNumber: buildMatchPatternFn({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: function (value) {
          return parseInt(value, 10);
        }
      }),
      era: buildMatchFn({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseEraPatterns,
        defaultParseWidth: 'any'
      }),
      quarter: buildMatchFn({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: 'any',
        valueCallback: function (index) {
          return index + 1;
        }
      }),
      month: buildMatchFn({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: 'any'
      }),
      day: buildMatchFn({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseDayPatterns,
        defaultParseWidth: 'any'
      }),
      dayPeriod: buildMatchFn({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: 'any',
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: 'any'
      })
    };

    /**
     * @type {Locale}
     * @category Locales
     * @summary English locale (United States).
     * @language English
     * @iso-639-2 eng
     * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
     * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
     */

    var locale = {
      code: 'en-US',
      formatDistance: formatDistance,
      formatLong: formatLong,
      formatRelative: formatRelative,
      localize: localize,
      match: match,
      options: {
        weekStartsOn: 0
        /* Sunday */
        ,
        firstWeekContainsDate: 1
      }
    };

    /**
     * @name subMilliseconds
     * @category Millisecond Helpers
     * @summary Subtract the specified number of milliseconds from the given date.
     *
     * @description
     * Subtract the specified number of milliseconds from the given date.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the date to be changed
     * @param {Number} amount - the amount of milliseconds to be subtracted
     * @returns {Date} the new date with the milliseconds subtracted
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
     * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
     * //=> Thu Jul 10 2014 12:45:29.250
     */

    function subMilliseconds(dirtyDate, dirtyAmount) {
      if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
      }

      var amount = toInteger(dirtyAmount);
      return addMilliseconds(dirtyDate, -amount);
    }

    function addLeadingZeros(number, targetLength) {
      var sign = number < 0 ? '-' : '';
      var output = Math.abs(number).toString();

      while (output.length < targetLength) {
        output = '0' + output;
      }

      return sign + output;
    }

    /*
     * |     | Unit                           |     | Unit                           |
     * |-----|--------------------------------|-----|--------------------------------|
     * |  a  | AM, PM                         |  A* |                                |
     * |  d  | Day of month                   |  D  |                                |
     * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
     * |  m  | Minute                         |  M  | Month                          |
     * |  s  | Second                         |  S  | Fraction of second             |
     * |  y  | Year (abs)                     |  Y  |                                |
     *
     * Letters marked by * are not implemented but reserved by Unicode standard.
     */

    var formatters = {
      // Year
      y: function (date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
      },
      // Month
      M: function (date, token) {
        var month = date.getUTCMonth();
        return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
      },
      // Day of the month
      d: function (date, token) {
        return addLeadingZeros(date.getUTCDate(), token.length);
      },
      // AM or PM
      a: function (date, token) {
        var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

        switch (token) {
          case 'a':
          case 'aa':
          case 'aaa':
            return dayPeriodEnumValue.toUpperCase();

          case 'aaaaa':
            return dayPeriodEnumValue[0];

          case 'aaaa':
          default:
            return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
        }
      },
      // Hour [1-12]
      h: function (date, token) {
        return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
      },
      // Hour [0-23]
      H: function (date, token) {
        return addLeadingZeros(date.getUTCHours(), token.length);
      },
      // Minute
      m: function (date, token) {
        return addLeadingZeros(date.getUTCMinutes(), token.length);
      },
      // Second
      s: function (date, token) {
        return addLeadingZeros(date.getUTCSeconds(), token.length);
      },
      // Fraction of second
      S: function (date, token) {
        var numberOfDigits = token.length;
        var milliseconds = date.getUTCMilliseconds();
        var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
        return addLeadingZeros(fractionalSeconds, token.length);
      }
    };

    var MILLISECONDS_IN_DAY$1 = 86400000; // This function will be a part of public API when UTC function will be implemented.
    // See issue: https://github.com/date-fns/date-fns/issues/376

    function getUTCDayOfYear(dirtyDate) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var date = toDate(dirtyDate);
      var timestamp = date.getTime();
      date.setUTCMonth(0, 1);
      date.setUTCHours(0, 0, 0, 0);
      var startOfYearTimestamp = date.getTime();
      var difference = timestamp - startOfYearTimestamp;
      return Math.floor(difference / MILLISECONDS_IN_DAY$1) + 1;
    }

    // See issue: https://github.com/date-fns/date-fns/issues/376

    function startOfUTCISOWeek(dirtyDate) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var weekStartsOn = 1;
      var date = toDate(dirtyDate);
      var day = date.getUTCDay();
      var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
      date.setUTCDate(date.getUTCDate() - diff);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }

    // See issue: https://github.com/date-fns/date-fns/issues/376

    function getUTCISOWeekYear(dirtyDate) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var date = toDate(dirtyDate);
      var year = date.getUTCFullYear();
      var fourthOfJanuaryOfNextYear = new Date(0);
      fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
      fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
      var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
      var fourthOfJanuaryOfThisYear = new Date(0);
      fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
      fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
      var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);

      if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
      } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
      } else {
        return year - 1;
      }
    }

    // See issue: https://github.com/date-fns/date-fns/issues/376

    function startOfUTCISOWeekYear(dirtyDate) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var year = getUTCISOWeekYear(dirtyDate);
      var fourthOfJanuary = new Date(0);
      fourthOfJanuary.setUTCFullYear(year, 0, 4);
      fourthOfJanuary.setUTCHours(0, 0, 0, 0);
      var date = startOfUTCISOWeek(fourthOfJanuary);
      return date;
    }

    var MILLISECONDS_IN_WEEK$1 = 604800000; // This function will be a part of public API when UTC function will be implemented.
    // See issue: https://github.com/date-fns/date-fns/issues/376

    function getUTCISOWeek(dirtyDate) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var date = toDate(dirtyDate);
      var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
      // because the number of milliseconds in a week is not constant
      // (e.g. it's different in the week of the daylight saving time clock shift)

      return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
    }

    // See issue: https://github.com/date-fns/date-fns/issues/376

    function startOfUTCWeek(dirtyDate, dirtyOptions) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var options = dirtyOptions || {};
      var locale = options.locale;
      var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
      var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
      var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

      if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
      }

      var date = toDate(dirtyDate);
      var day = date.getUTCDay();
      var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
      date.setUTCDate(date.getUTCDate() - diff);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }

    // See issue: https://github.com/date-fns/date-fns/issues/376

    function getUTCWeekYear(dirtyDate, dirtyOptions) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var date = toDate(dirtyDate, dirtyOptions);
      var year = date.getUTCFullYear();
      var options = dirtyOptions || {};
      var locale = options.locale;
      var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
      var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
      var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

      if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
        throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
      }

      var firstWeekOfNextYear = new Date(0);
      firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
      firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
      var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
      var firstWeekOfThisYear = new Date(0);
      firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
      firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
      var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);

      if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
      } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
      } else {
        return year - 1;
      }
    }

    // See issue: https://github.com/date-fns/date-fns/issues/376

    function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var options = dirtyOptions || {};
      var locale = options.locale;
      var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
      var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
      var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
      var year = getUTCWeekYear(dirtyDate, dirtyOptions);
      var firstWeek = new Date(0);
      firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
      firstWeek.setUTCHours(0, 0, 0, 0);
      var date = startOfUTCWeek(firstWeek, dirtyOptions);
      return date;
    }

    var MILLISECONDS_IN_WEEK$2 = 604800000; // This function will be a part of public API when UTC function will be implemented.
    // See issue: https://github.com/date-fns/date-fns/issues/376

    function getUTCWeek(dirtyDate, options) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var date = toDate(dirtyDate);
      var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
      // because the number of milliseconds in a week is not constant
      // (e.g. it's different in the week of the daylight saving time clock shift)

      return Math.round(diff / MILLISECONDS_IN_WEEK$2) + 1;
    }

    var dayPeriodEnum = {
      am: 'am',
      pm: 'pm',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night'
      /*
       * |     | Unit                           |     | Unit                           |
       * |-----|--------------------------------|-----|--------------------------------|
       * |  a  | AM, PM                         |  A* | Milliseconds in day            |
       * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
       * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
       * |  d  | Day of month                   |  D  | Day of year                    |
       * |  e  | Local day of week              |  E  | Day of week                    |
       * |  f  |                                |  F* | Day of week in month           |
       * |  g* | Modified Julian day            |  G  | Era                            |
       * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
       * |  i! | ISO day of week                |  I! | ISO week of year               |
       * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
       * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
       * |  l* | (deprecated)                   |  L  | Stand-alone month              |
       * |  m  | Minute                         |  M  | Month                          |
       * |  n  |                                |  N  |                                |
       * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
       * |  p! | Long localized time            |  P! | Long localized date            |
       * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
       * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
       * |  s  | Second                         |  S  | Fraction of second             |
       * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
       * |  u  | Extended year                  |  U* | Cyclic year                    |
       * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
       * |  w  | Local week of year             |  W* | Week of month                  |
       * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
       * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
       * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
       *
       * Letters marked by * are not implemented but reserved by Unicode standard.
       *
       * Letters marked by ! are non-standard, but implemented by date-fns:
       * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
       * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
       *   i.e. 7 for Sunday, 1 for Monday, etc.
       * - `I` is ISO week of year, as opposed to `w` which is local week of year.
       * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
       *   `R` is supposed to be used in conjunction with `I` and `i`
       *   for universal ISO week-numbering date, whereas
       *   `Y` is supposed to be used in conjunction with `w` and `e`
       *   for week-numbering date specific to the locale.
       * - `P` is long localized date format
       * - `p` is long localized time format
       */

    };
    var formatters$1 = {
      // Era
      G: function (date, token, localize) {
        var era = date.getUTCFullYear() > 0 ? 1 : 0;

        switch (token) {
          // AD, BC
          case 'G':
          case 'GG':
          case 'GGG':
            return localize.era(era, {
              width: 'abbreviated'
            });
          // A, B

          case 'GGGGG':
            return localize.era(era, {
              width: 'narrow'
            });
          // Anno Domini, Before Christ

          case 'GGGG':
          default:
            return localize.era(era, {
              width: 'wide'
            });
        }
      },
      // Year
      y: function (date, token, localize) {
        // Ordinal number
        if (token === 'yo') {
          var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

          var year = signedYear > 0 ? signedYear : 1 - signedYear;
          return localize.ordinalNumber(year, {
            unit: 'year'
          });
        }

        return formatters.y(date, token);
      },
      // Local week-numbering year
      Y: function (date, token, localize, options) {
        var signedWeekYear = getUTCWeekYear(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

        var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

        if (token === 'YY') {
          var twoDigitYear = weekYear % 100;
          return addLeadingZeros(twoDigitYear, 2);
        } // Ordinal number


        if (token === 'Yo') {
          return localize.ordinalNumber(weekYear, {
            unit: 'year'
          });
        } // Padding


        return addLeadingZeros(weekYear, token.length);
      },
      // ISO week-numbering year
      R: function (date, token) {
        var isoWeekYear = getUTCISOWeekYear(date); // Padding

        return addLeadingZeros(isoWeekYear, token.length);
      },
      // Extended year. This is a single number designating the year of this calendar system.
      // The main difference between `y` and `u` localizers are B.C. years:
      // | Year | `y` | `u` |
      // |------|-----|-----|
      // | AC 1 |   1 |   1 |
      // | BC 1 |   1 |   0 |
      // | BC 2 |   2 |  -1 |
      // Also `yy` always returns the last two digits of a year,
      // while `uu` pads single digit years to 2 characters and returns other years unchanged.
      u: function (date, token) {
        var year = date.getUTCFullYear();
        return addLeadingZeros(year, token.length);
      },
      // Quarter
      Q: function (date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

        switch (token) {
          // 1, 2, 3, 4
          case 'Q':
            return String(quarter);
          // 01, 02, 03, 04

          case 'QQ':
            return addLeadingZeros(quarter, 2);
          // 1st, 2nd, 3rd, 4th

          case 'Qo':
            return localize.ordinalNumber(quarter, {
              unit: 'quarter'
            });
          // Q1, Q2, Q3, Q4

          case 'QQQ':
            return localize.quarter(quarter, {
              width: 'abbreviated',
              context: 'formatting'
            });
          // 1, 2, 3, 4 (narrow quarter; could be not numerical)

          case 'QQQQQ':
            return localize.quarter(quarter, {
              width: 'narrow',
              context: 'formatting'
            });
          // 1st quarter, 2nd quarter, ...

          case 'QQQQ':
          default:
            return localize.quarter(quarter, {
              width: 'wide',
              context: 'formatting'
            });
        }
      },
      // Stand-alone quarter
      q: function (date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

        switch (token) {
          // 1, 2, 3, 4
          case 'q':
            return String(quarter);
          // 01, 02, 03, 04

          case 'qq':
            return addLeadingZeros(quarter, 2);
          // 1st, 2nd, 3rd, 4th

          case 'qo':
            return localize.ordinalNumber(quarter, {
              unit: 'quarter'
            });
          // Q1, Q2, Q3, Q4

          case 'qqq':
            return localize.quarter(quarter, {
              width: 'abbreviated',
              context: 'standalone'
            });
          // 1, 2, 3, 4 (narrow quarter; could be not numerical)

          case 'qqqqq':
            return localize.quarter(quarter, {
              width: 'narrow',
              context: 'standalone'
            });
          // 1st quarter, 2nd quarter, ...

          case 'qqqq':
          default:
            return localize.quarter(quarter, {
              width: 'wide',
              context: 'standalone'
            });
        }
      },
      // Month
      M: function (date, token, localize) {
        var month = date.getUTCMonth();

        switch (token) {
          case 'M':
          case 'MM':
            return formatters.M(date, token);
          // 1st, 2nd, ..., 12th

          case 'Mo':
            return localize.ordinalNumber(month + 1, {
              unit: 'month'
            });
          // Jan, Feb, ..., Dec

          case 'MMM':
            return localize.month(month, {
              width: 'abbreviated',
              context: 'formatting'
            });
          // J, F, ..., D

          case 'MMMMM':
            return localize.month(month, {
              width: 'narrow',
              context: 'formatting'
            });
          // January, February, ..., December

          case 'MMMM':
          default:
            return localize.month(month, {
              width: 'wide',
              context: 'formatting'
            });
        }
      },
      // Stand-alone month
      L: function (date, token, localize) {
        var month = date.getUTCMonth();

        switch (token) {
          // 1, 2, ..., 12
          case 'L':
            return String(month + 1);
          // 01, 02, ..., 12

          case 'LL':
            return addLeadingZeros(month + 1, 2);
          // 1st, 2nd, ..., 12th

          case 'Lo':
            return localize.ordinalNumber(month + 1, {
              unit: 'month'
            });
          // Jan, Feb, ..., Dec

          case 'LLL':
            return localize.month(month, {
              width: 'abbreviated',
              context: 'standalone'
            });
          // J, F, ..., D

          case 'LLLLL':
            return localize.month(month, {
              width: 'narrow',
              context: 'standalone'
            });
          // January, February, ..., December

          case 'LLLL':
          default:
            return localize.month(month, {
              width: 'wide',
              context: 'standalone'
            });
        }
      },
      // Local week of year
      w: function (date, token, localize, options) {
        var week = getUTCWeek(date, options);

        if (token === 'wo') {
          return localize.ordinalNumber(week, {
            unit: 'week'
          });
        }

        return addLeadingZeros(week, token.length);
      },
      // ISO week of year
      I: function (date, token, localize) {
        var isoWeek = getUTCISOWeek(date);

        if (token === 'Io') {
          return localize.ordinalNumber(isoWeek, {
            unit: 'week'
          });
        }

        return addLeadingZeros(isoWeek, token.length);
      },
      // Day of the month
      d: function (date, token, localize) {
        if (token === 'do') {
          return localize.ordinalNumber(date.getUTCDate(), {
            unit: 'date'
          });
        }

        return formatters.d(date, token);
      },
      // Day of year
      D: function (date, token, localize) {
        var dayOfYear = getUTCDayOfYear(date);

        if (token === 'Do') {
          return localize.ordinalNumber(dayOfYear, {
            unit: 'dayOfYear'
          });
        }

        return addLeadingZeros(dayOfYear, token.length);
      },
      // Day of week
      E: function (date, token, localize) {
        var dayOfWeek = date.getUTCDay();

        switch (token) {
          // Tue
          case 'E':
          case 'EE':
          case 'EEE':
            return localize.day(dayOfWeek, {
              width: 'abbreviated',
              context: 'formatting'
            });
          // T

          case 'EEEEE':
            return localize.day(dayOfWeek, {
              width: 'narrow',
              context: 'formatting'
            });
          // Tu

          case 'EEEEEE':
            return localize.day(dayOfWeek, {
              width: 'short',
              context: 'formatting'
            });
          // Tuesday

          case 'EEEE':
          default:
            return localize.day(dayOfWeek, {
              width: 'wide',
              context: 'formatting'
            });
        }
      },
      // Local day of week
      e: function (date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

        switch (token) {
          // Numerical value (Nth day of week with current locale or weekStartsOn)
          case 'e':
            return String(localDayOfWeek);
          // Padded numerical value

          case 'ee':
            return addLeadingZeros(localDayOfWeek, 2);
          // 1st, 2nd, ..., 7th

          case 'eo':
            return localize.ordinalNumber(localDayOfWeek, {
              unit: 'day'
            });

          case 'eee':
            return localize.day(dayOfWeek, {
              width: 'abbreviated',
              context: 'formatting'
            });
          // T

          case 'eeeee':
            return localize.day(dayOfWeek, {
              width: 'narrow',
              context: 'formatting'
            });
          // Tu

          case 'eeeeee':
            return localize.day(dayOfWeek, {
              width: 'short',
              context: 'formatting'
            });
          // Tuesday

          case 'eeee':
          default:
            return localize.day(dayOfWeek, {
              width: 'wide',
              context: 'formatting'
            });
        }
      },
      // Stand-alone local day of week
      c: function (date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

        switch (token) {
          // Numerical value (same as in `e`)
          case 'c':
            return String(localDayOfWeek);
          // Padded numerical value

          case 'cc':
            return addLeadingZeros(localDayOfWeek, token.length);
          // 1st, 2nd, ..., 7th

          case 'co':
            return localize.ordinalNumber(localDayOfWeek, {
              unit: 'day'
            });

          case 'ccc':
            return localize.day(dayOfWeek, {
              width: 'abbreviated',
              context: 'standalone'
            });
          // T

          case 'ccccc':
            return localize.day(dayOfWeek, {
              width: 'narrow',
              context: 'standalone'
            });
          // Tu

          case 'cccccc':
            return localize.day(dayOfWeek, {
              width: 'short',
              context: 'standalone'
            });
          // Tuesday

          case 'cccc':
          default:
            return localize.day(dayOfWeek, {
              width: 'wide',
              context: 'standalone'
            });
        }
      },
      // ISO day of week
      i: function (date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

        switch (token) {
          // 2
          case 'i':
            return String(isoDayOfWeek);
          // 02

          case 'ii':
            return addLeadingZeros(isoDayOfWeek, token.length);
          // 2nd

          case 'io':
            return localize.ordinalNumber(isoDayOfWeek, {
              unit: 'day'
            });
          // Tue

          case 'iii':
            return localize.day(dayOfWeek, {
              width: 'abbreviated',
              context: 'formatting'
            });
          // T

          case 'iiiii':
            return localize.day(dayOfWeek, {
              width: 'narrow',
              context: 'formatting'
            });
          // Tu

          case 'iiiiii':
            return localize.day(dayOfWeek, {
              width: 'short',
              context: 'formatting'
            });
          // Tuesday

          case 'iiii':
          default:
            return localize.day(dayOfWeek, {
              width: 'wide',
              context: 'formatting'
            });
        }
      },
      // AM or PM
      a: function (date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

        switch (token) {
          case 'a':
          case 'aa':
          case 'aaa':
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: 'abbreviated',
              context: 'formatting'
            });

          case 'aaaaa':
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: 'narrow',
              context: 'formatting'
            });

          case 'aaaa':
          default:
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: 'wide',
              context: 'formatting'
            });
        }
      },
      // AM, PM, midnight, noon
      b: function (date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;

        if (hours === 12) {
          dayPeriodEnumValue = dayPeriodEnum.noon;
        } else if (hours === 0) {
          dayPeriodEnumValue = dayPeriodEnum.midnight;
        } else {
          dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
        }

        switch (token) {
          case 'b':
          case 'bb':
          case 'bbb':
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: 'abbreviated',
              context: 'formatting'
            });

          case 'bbbbb':
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: 'narrow',
              context: 'formatting'
            });

          case 'bbbb':
          default:
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: 'wide',
              context: 'formatting'
            });
        }
      },
      // in the morning, in the afternoon, in the evening, at night
      B: function (date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;

        if (hours >= 17) {
          dayPeriodEnumValue = dayPeriodEnum.evening;
        } else if (hours >= 12) {
          dayPeriodEnumValue = dayPeriodEnum.afternoon;
        } else if (hours >= 4) {
          dayPeriodEnumValue = dayPeriodEnum.morning;
        } else {
          dayPeriodEnumValue = dayPeriodEnum.night;
        }

        switch (token) {
          case 'B':
          case 'BB':
          case 'BBB':
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: 'abbreviated',
              context: 'formatting'
            });

          case 'BBBBB':
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: 'narrow',
              context: 'formatting'
            });

          case 'BBBB':
          default:
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: 'wide',
              context: 'formatting'
            });
        }
      },
      // Hour [1-12]
      h: function (date, token, localize) {
        if (token === 'ho') {
          var hours = date.getUTCHours() % 12;
          if (hours === 0) hours = 12;
          return localize.ordinalNumber(hours, {
            unit: 'hour'
          });
        }

        return formatters.h(date, token);
      },
      // Hour [0-23]
      H: function (date, token, localize) {
        if (token === 'Ho') {
          return localize.ordinalNumber(date.getUTCHours(), {
            unit: 'hour'
          });
        }

        return formatters.H(date, token);
      },
      // Hour [0-11]
      K: function (date, token, localize) {
        var hours = date.getUTCHours() % 12;

        if (token === 'Ko') {
          return localize.ordinalNumber(hours, {
            unit: 'hour'
          });
        }

        return addLeadingZeros(hours, token.length);
      },
      // Hour [1-24]
      k: function (date, token, localize) {
        var hours = date.getUTCHours();
        if (hours === 0) hours = 24;

        if (token === 'ko') {
          return localize.ordinalNumber(hours, {
            unit: 'hour'
          });
        }

        return addLeadingZeros(hours, token.length);
      },
      // Minute
      m: function (date, token, localize) {
        if (token === 'mo') {
          return localize.ordinalNumber(date.getUTCMinutes(), {
            unit: 'minute'
          });
        }

        return formatters.m(date, token);
      },
      // Second
      s: function (date, token, localize) {
        if (token === 'so') {
          return localize.ordinalNumber(date.getUTCSeconds(), {
            unit: 'second'
          });
        }

        return formatters.s(date, token);
      },
      // Fraction of second
      S: function (date, token) {
        return formatters.S(date, token);
      },
      // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
      X: function (date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();

        if (timezoneOffset === 0) {
          return 'Z';
        }

        switch (token) {
          // Hours and optional minutes
          case 'X':
            return formatTimezoneWithOptionalMinutes(timezoneOffset);
          // Hours, minutes and optional seconds without `:` delimiter
          // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
          // so this token always has the same output as `XX`

          case 'XXXX':
          case 'XX':
            // Hours and minutes without `:` delimiter
            return formatTimezone(timezoneOffset);
          // Hours, minutes and optional seconds with `:` delimiter
          // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
          // so this token always has the same output as `XXX`

          case 'XXXXX':
          case 'XXX': // Hours and minutes with `:` delimiter

          default:
            return formatTimezone(timezoneOffset, ':');
        }
      },
      // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
      x: function (date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();

        switch (token) {
          // Hours and optional minutes
          case 'x':
            return formatTimezoneWithOptionalMinutes(timezoneOffset);
          // Hours, minutes and optional seconds without `:` delimiter
          // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
          // so this token always has the same output as `xx`

          case 'xxxx':
          case 'xx':
            // Hours and minutes without `:` delimiter
            return formatTimezone(timezoneOffset);
          // Hours, minutes and optional seconds with `:` delimiter
          // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
          // so this token always has the same output as `xxx`

          case 'xxxxx':
          case 'xxx': // Hours and minutes with `:` delimiter

          default:
            return formatTimezone(timezoneOffset, ':');
        }
      },
      // Timezone (GMT)
      O: function (date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();

        switch (token) {
          // Short
          case 'O':
          case 'OO':
          case 'OOO':
            return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
          // Long

          case 'OOOO':
          default:
            return 'GMT' + formatTimezone(timezoneOffset, ':');
        }
      },
      // Timezone (specific non-location)
      z: function (date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();

        switch (token) {
          // Short
          case 'z':
          case 'zz':
          case 'zzz':
            return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
          // Long

          case 'zzzz':
          default:
            return 'GMT' + formatTimezone(timezoneOffset, ':');
        }
      },
      // Seconds timestamp
      t: function (date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = Math.floor(originalDate.getTime() / 1000);
        return addLeadingZeros(timestamp, token.length);
      },
      // Milliseconds timestamp
      T: function (date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = originalDate.getTime();
        return addLeadingZeros(timestamp, token.length);
      }
    };

    function formatTimezoneShort(offset, dirtyDelimiter) {
      var sign = offset > 0 ? '-' : '+';
      var absOffset = Math.abs(offset);
      var hours = Math.floor(absOffset / 60);
      var minutes = absOffset % 60;

      if (minutes === 0) {
        return sign + String(hours);
      }

      var delimiter = dirtyDelimiter || '';
      return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
    }

    function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
      if (offset % 60 === 0) {
        var sign = offset > 0 ? '-' : '+';
        return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
      }

      return formatTimezone(offset, dirtyDelimiter);
    }

    function formatTimezone(offset, dirtyDelimiter) {
      var delimiter = dirtyDelimiter || '';
      var sign = offset > 0 ? '-' : '+';
      var absOffset = Math.abs(offset);
      var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
      var minutes = addLeadingZeros(absOffset % 60, 2);
      return sign + hours + delimiter + minutes;
    }

    function dateLongFormatter(pattern, formatLong) {
      switch (pattern) {
        case 'P':
          return formatLong.date({
            width: 'short'
          });

        case 'PP':
          return formatLong.date({
            width: 'medium'
          });

        case 'PPP':
          return formatLong.date({
            width: 'long'
          });

        case 'PPPP':
        default:
          return formatLong.date({
            width: 'full'
          });
      }
    }

    function timeLongFormatter(pattern, formatLong) {
      switch (pattern) {
        case 'p':
          return formatLong.time({
            width: 'short'
          });

        case 'pp':
          return formatLong.time({
            width: 'medium'
          });

        case 'ppp':
          return formatLong.time({
            width: 'long'
          });

        case 'pppp':
        default:
          return formatLong.time({
            width: 'full'
          });
      }
    }

    function dateTimeLongFormatter(pattern, formatLong) {
      var matchResult = pattern.match(/(P+)(p+)?/);
      var datePattern = matchResult[1];
      var timePattern = matchResult[2];

      if (!timePattern) {
        return dateLongFormatter(pattern, formatLong);
      }

      var dateTimeFormat;

      switch (datePattern) {
        case 'P':
          dateTimeFormat = formatLong.dateTime({
            width: 'short'
          });
          break;

        case 'PP':
          dateTimeFormat = formatLong.dateTime({
            width: 'medium'
          });
          break;

        case 'PPP':
          dateTimeFormat = formatLong.dateTime({
            width: 'long'
          });
          break;

        case 'PPPP':
        default:
          dateTimeFormat = formatLong.dateTime({
            width: 'full'
          });
          break;
      }

      return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
    }

    var longFormatters = {
      p: timeLongFormatter,
      P: dateTimeLongFormatter
    };

    var protectedDayOfYearTokens = ['D', 'DD'];
    var protectedWeekYearTokens = ['YY', 'YYYY'];
    function isProtectedDayOfYearToken(token) {
      return protectedDayOfYearTokens.indexOf(token) !== -1;
    }
    function isProtectedWeekYearToken(token) {
      return protectedWeekYearTokens.indexOf(token) !== -1;
    }
    function throwProtectedError(token) {
      if (token === 'YYYY') {
        throw new RangeError('Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr');
      } else if (token === 'YY') {
        throw new RangeError('Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr');
      } else if (token === 'D') {
        throw new RangeError('Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr');
      } else if (token === 'DD') {
        throw new RangeError('Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr');
      }
    }

    // - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
    //   (one of the certain letters followed by `o`)
    // - (\w)\1* matches any sequences of the same letter
    // - '' matches two quote characters in a row
    // - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
    //   except a single quote symbol, which ends the sequence.
    //   Two quote characters do not end the sequence.
    //   If there is no matching single quote
    //   then the sequence will continue until the end of the string.
    // - . matches any single character unmatched by previous parts of the RegExps

    var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
    // sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

    var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
    var escapedStringRegExp = /^'([^]*?)'?$/;
    var doubleQuoteRegExp = /''/g;
    var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
    /**
     * @name format
     * @category Common Helpers
     * @summary Format the date.
     *
     * @description
     * Return the formatted date string in the given format. The result may vary by locale.
     *
     * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
     * > See: https://git.io/fxCyr
     *
     * The characters wrapped between two single quotes characters (') are escaped.
     * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
     * (see the last example)
     *
     * Format of the string is based on Unicode Technical Standard #35:
     * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
     * with a few additions (see note 7 below the table).
     *
     * Accepted patterns:
     * | Unit                            | Pattern | Result examples                   | Notes |
     * |---------------------------------|---------|-----------------------------------|-------|
     * | Era                             | G..GGG  | AD, BC                            |       |
     * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
     * |                                 | GGGGG   | A, B                              |       |
     * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
     * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
     * |                                 | yy      | 44, 01, 00, 17                    | 5     |
     * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
     * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
     * |                                 | yyyyy   | ...                               | 3,5   |
     * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
     * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
     * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
     * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
     * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
     * |                                 | YYYYY   | ...                               | 3,5   |
     * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
     * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
     * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
     * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
     * |                                 | RRRRR   | ...                               | 3,5,7 |
     * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
     * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
     * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
     * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
     * |                                 | uuuuu   | ...                               | 3,5   |
     * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
     * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
     * |                                 | QQ      | 01, 02, 03, 04                    |       |
     * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
     * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
     * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
     * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
     * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
     * |                                 | qq      | 01, 02, 03, 04                    |       |
     * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
     * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
     * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
     * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
     * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
     * |                                 | MM      | 01, 02, ..., 12                   |       |
     * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
     * |                                 | MMMM    | January, February, ..., December  | 2     |
     * |                                 | MMMMM   | J, F, ..., D                      |       |
     * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
     * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
     * |                                 | LL      | 01, 02, ..., 12                   |       |
     * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
     * |                                 | LLLL    | January, February, ..., December  | 2     |
     * |                                 | LLLLL   | J, F, ..., D                      |       |
     * | Local week of year              | w       | 1, 2, ..., 53                     |       |
     * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
     * |                                 | ww      | 01, 02, ..., 53                   |       |
     * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
     * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
     * |                                 | II      | 01, 02, ..., 53                   | 7     |
     * | Day of month                    | d       | 1, 2, ..., 31                     |       |
     * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
     * |                                 | dd      | 01, 02, ..., 31                   |       |
     * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
     * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
     * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
     * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
     * |                                 | DDDD    | ...                               | 3     |
     * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
     * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
     * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
     * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
     * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
     * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
     * |                                 | ii      | 01, 02, ..., 07                   | 7     |
     * |                                 | iii     | Mon, Tue, Wed, ..., Su            | 7     |
     * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
     * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
     * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
     * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
     * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
     * |                                 | ee      | 02, 03, ..., 01                   |       |
     * |                                 | eee     | Mon, Tue, Wed, ..., Su            |       |
     * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
     * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
     * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
     * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
     * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
     * |                                 | cc      | 02, 03, ..., 01                   |       |
     * |                                 | ccc     | Mon, Tue, Wed, ..., Su            |       |
     * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
     * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
     * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
     * | AM, PM                          | a..aaa  | AM, PM                            |       |
     * |                                 | aaaa    | a.m., p.m.                        | 2     |
     * |                                 | aaaaa   | a, p                              |       |
     * | AM, PM, noon, midnight          | b..bbb  | AM, PM, noon, midnight            |       |
     * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
     * |                                 | bbbbb   | a, p, n, mi                       |       |
     * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
     * |                                 | BBBB    | at night, in the morning, ...     | 2     |
     * |                                 | BBBBB   | at night, in the morning, ...     |       |
     * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
     * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
     * |                                 | hh      | 01, 02, ..., 11, 12               |       |
     * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
     * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
     * |                                 | HH      | 00, 01, 02, ..., 23               |       |
     * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
     * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
     * |                                 | KK      | 1, 2, ..., 11, 0                  |       |
     * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
     * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
     * |                                 | kk      | 24, 01, 02, ..., 23               |       |
     * | Minute                          | m       | 0, 1, ..., 59                     |       |
     * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
     * |                                 | mm      | 00, 01, ..., 59                   |       |
     * | Second                          | s       | 0, 1, ..., 59                     |       |
     * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
     * |                                 | ss      | 00, 01, ..., 59                   |       |
     * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
     * |                                 | SS      | 00, 01, ..., 99                   |       |
     * |                                 | SSS     | 000, 0001, ..., 999               |       |
     * |                                 | SSSS    | ...                               | 3     |
     * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
     * |                                 | XX      | -0800, +0530, Z                   |       |
     * |                                 | XXX     | -08:00, +05:30, Z                 |       |
     * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
     * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
     * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
     * |                                 | xx      | -0800, +0530, +0000               |       |
     * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
     * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
     * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
     * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
     * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
     * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
     * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
     * | Seconds timestamp               | t       | 512969520                         | 7     |
     * |                                 | tt      | ...                               | 3,7   |
     * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
     * |                                 | TT      | ...                               | 3,7   |
     * | Long localized date             | P       | 05/29/1453                        | 7     |
     * |                                 | PP      | May 29, 1453                      | 7     |
     * |                                 | PPP     | May 29th, 1453                    | 7     |
     * |                                 | PPPP    | Sunday, May 29th, 1453            | 2,7   |
     * | Long localized time             | p       | 12:00 AM                          | 7     |
     * |                                 | pp      | 12:00:00 AM                       | 7     |
     * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
     * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
     * | Combination of date and time    | Pp      | 05/29/1453, 12:00 AM              | 7     |
     * |                                 | PPpp    | May 29, 1453, 12:00:00 AM         | 7     |
     * |                                 | PPPppp  | May 29th, 1453 at ...             | 7     |
     * |                                 | PPPPpppp| Sunday, May 29th, 1453 at ...     | 2,7   |
     * Notes:
     * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
     *    are the same as "stand-alone" units, but are different in some languages.
     *    "Formatting" units are declined according to the rules of the language
     *    in the context of a date. "Stand-alone" units are always nominative singular:
     *
     *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
     *
     *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
     *
     * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
     *    the single quote characters (see below).
     *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
     *    the output will be the same as default pattern for this unit, usually
     *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
     *    are marked with "2" in the last column of the table.
     *
     *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
     *
     *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
     *
     *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
     *
     *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
     *
     *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
     *
     * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
     *    The output will be padded with zeros to match the length of the pattern.
     *
     *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
     *
     * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
     *    These tokens represent the shortest form of the quarter.
     *
     * 5. The main difference between `y` and `u` patterns are B.C. years:
     *
     *    | Year | `y` | `u` |
     *    |------|-----|-----|
     *    | AC 1 |   1 |   1 |
     *    | BC 1 |   1 |   0 |
     *    | BC 2 |   2 |  -1 |
     *
     *    Also `yy` always returns the last two digits of a year,
     *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
     *
     *    | Year | `yy` | `uu` |
     *    |------|------|------|
     *    | 1    |   01 |   01 |
     *    | 14   |   14 |   14 |
     *    | 376  |   76 |  376 |
     *    | 1453 |   53 | 1453 |
     *
     *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
     *    except local week-numbering years are dependent on `options.weekStartsOn`
     *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
     *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
     *
     * 6. Specific non-location timezones are currently unavailable in `date-fns`,
     *    so right now these tokens fall back to GMT timezones.
     *
     * 7. These patterns are not in the Unicode Technical Standard #35:
     *    - `i`: ISO day of week
     *    - `I`: ISO week of year
     *    - `R`: ISO week-numbering year
     *    - `t`: seconds timestamp
     *    - `T`: milliseconds timestamp
     *    - `o`: ordinal number modifier
     *    - `P`: long localized date
     *    - `p`: long localized time
     *
     * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
     *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
     *
     * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
     *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * - The second argument is now required for the sake of explicitness.
     *
     *   ```javascript
     *   // Before v2.0.0
     *   format(new Date(2016, 0, 1))
     *
     *   // v2.0.0 onward
     *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
     *   ```
     *
     * - New format string API for `format` function
     *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
     *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
     *
     * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
     *
     * @param {Date|Number} date - the original date
     * @param {String} format - the string of tokens
     * @param {Object} [options] - an object with options.
     * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
     * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
     * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
     * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
     *   see: https://git.io/fxCyr
     * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
     *   see: https://git.io/fxCyr
     * @returns {String} the formatted date string
     * @throws {TypeError} 2 arguments required
     * @throws {RangeError} `options.locale` must contain `localize` property
     * @throws {RangeError} `options.locale` must contain `formatLong` property
     * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
     * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
     * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr
     * @throws {RangeError} use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr
     * @throws {RangeError} use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr
     * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr
     * @throws {RangeError} format string contains an unescaped latin alphabet character
     *
     * @example
     * // Represent 11 February 2014 in middle-endian format:
     * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
     * //=> '02/11/2014'
     *
     * @example
     * // Represent 2 July 2014 in Esperanto:
     * import { eoLocale } from 'date-fns/locale/eo'
     * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
     *   locale: eoLocale
     * })
     * //=> '2-a de julio 2014'
     *
     * @example
     * // Escape string by single quote characters:
     * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
     * //=> "3 o'clock"
     */

    function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
      if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
      }

      var formatStr = String(dirtyFormatStr);
      var options = dirtyOptions || {};
      var locale$1 = options.locale || locale;
      var localeFirstWeekContainsDate = locale$1.options && locale$1.options.firstWeekContainsDate;
      var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
      var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

      if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
        throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
      }

      var localeWeekStartsOn = locale$1.options && locale$1.options.weekStartsOn;
      var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
      var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

      if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
      }

      if (!locale$1.localize) {
        throw new RangeError('locale must contain localize property');
      }

      if (!locale$1.formatLong) {
        throw new RangeError('locale must contain formatLong property');
      }

      var originalDate = toDate(dirtyDate);

      if (!isValid(originalDate)) {
        throw new RangeError('Invalid time value');
      } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
      // This ensures that when UTC functions will be implemented, locales will be compatible with them.
      // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


      var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
      var utcDate = subMilliseconds(originalDate, timezoneOffset);
      var formatterOptions = {
        firstWeekContainsDate: firstWeekContainsDate,
        weekStartsOn: weekStartsOn,
        locale: locale$1,
        _originalDate: originalDate
      };
      var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
        var firstCharacter = substring[0];

        if (firstCharacter === 'p' || firstCharacter === 'P') {
          var longFormatter = longFormatters[firstCharacter];
          return longFormatter(substring, locale$1.formatLong, formatterOptions);
        }

        return substring;
      }).join('').match(formattingTokensRegExp).map(function (substring) {
        // Replace two single quote characters with one single quote character
        if (substring === "''") {
          return "'";
        }

        var firstCharacter = substring[0];

        if (firstCharacter === "'") {
          return cleanEscapedString(substring);
        }

        var formatter = formatters$1[firstCharacter];

        if (formatter) {
          if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(substring)) {
            throwProtectedError(substring);
          }

          if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(substring)) {
            throwProtectedError(substring);
          }

          return formatter(utcDate, substring, locale$1.localize, formatterOptions);
        }

        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
          throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
        }

        return substring;
      }).join('');
      return result;
    }

    function cleanEscapedString(input) {
      return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
    }

    function assign(target, dirtyObject) {
      if (target == null) {
        throw new TypeError('assign requires that input parameter not be null or undefined');
      }

      dirtyObject = dirtyObject || {};

      for (var property in dirtyObject) {
        if (dirtyObject.hasOwnProperty(property)) {
          target[property] = dirtyObject[property];
        }
      }

      return target;
    }

    /**
     * @name getMonth
     * @category Month Helpers
     * @summary Get the month of the given date.
     *
     * @description
     * Get the month of the given date.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the given date
     * @returns {Number} the month
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // Which month is 29 February 2012?
     * var result = getMonth(new Date(2012, 1, 29))
     * //=> 1
     */

    function getMonth(dirtyDate) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var date = toDate(dirtyDate);
      var month = date.getMonth();
      return month;
    }

    /**
     * @name getTime
     * @category Timestamp Helpers
     * @summary Get the milliseconds timestamp of the given date.
     *
     * @description
     * Get the milliseconds timestamp of the given date.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the given date
     * @returns {Number} the timestamp
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // Get the timestamp of 29 February 2012 11:45:05.123:
     * var result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
     * //=> 1330515905123
     */

    function getTime(dirtyDate) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var date = toDate(dirtyDate);
      var timestamp = date.getTime();
      return timestamp;
    }

    /**
     * @name getUnixTime
     * @category Timestamp Helpers
     * @summary Get the seconds timestamp of the given date.
     *
     * @description
     * Get the seconds timestamp of the given date.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the given date
     * @returns {Number} the timestamp
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // Get the timestamp of 29 February 2012 11:45:05 CET:
     * var result = getUnixTime(new Date(2012, 1, 29, 11, 45, 5))
     * //=> 1330512305
     */

    function getUnixTime(dirtyDate) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      return Math.floor(getTime(dirtyDate) / 1000);
    }

    /**
     * @name getWeekYear
     * @category Week-Numbering Year Helpers
     * @summary Get the local week-numbering year of the given date.
     *
     * @description
     * Get the local week-numbering year of the given date.
     * The exact calculation depends on the values of
     * `options.weekStartsOn` (which is the index of the first day of the week)
     * and `options.firstWeekContainsDate` (which is the day of January, which is always in
     * the first week of the week-numbering year)
     *
     * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the given date
     * @param {Object} [options] - an object with options.
     * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
     * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
     * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
     * @returns {Number} the local week-numbering year
     * @throws {TypeError} 1 argument required
     * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
     * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
     *
     * @example
     * // Which week numbering year is 26 December 2004 with the default settings?
     * var result = getWeekYear(new Date(2004, 11, 26))
     * //=> 2005
     *
     * @example
     * // Which week numbering year is 26 December 2004 if week starts on Saturday?
     * var result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
     * //=> 2004
     *
     * @example
     * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
     * var result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
     * //=> 2004
     */

    function getWeekYear(dirtyDate, dirtyOptions) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var date = toDate(dirtyDate);
      var year = date.getFullYear();
      var options = dirtyOptions || {};
      var locale = options.locale;
      var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
      var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
      var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

      if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
        throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
      }

      var firstWeekOfNextYear = new Date(0);
      firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
      firstWeekOfNextYear.setHours(0, 0, 0, 0);
      var startOfNextYear = startOfWeek(firstWeekOfNextYear, dirtyOptions);
      var firstWeekOfThisYear = new Date(0);
      firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
      firstWeekOfThisYear.setHours(0, 0, 0, 0);
      var startOfThisYear = startOfWeek(firstWeekOfThisYear, dirtyOptions);

      if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
      } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
      } else {
        return year - 1;
      }
    }

    /**
     * @name startOfWeekYear
     * @category Week-Numbering Year Helpers
     * @summary Return the start of a local week-numbering year for the given date.
     *
     * @description
     * Return the start of a local week-numbering year.
     * The exact calculation depends on the values of
     * `options.weekStartsOn` (which is the index of the first day of the week)
     * and `options.firstWeekContainsDate` (which is the day of January, which is always in
     * the first week of the week-numbering year)
     *
     * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the original date
     * @param {Object} [options] - an object with options.
     * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
     * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
     * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
     * @returns {Date} the start of a week-numbering year
     * @throws {TypeError} 1 argument required
     * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
     * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
     *
     * @example
     * // The start of an a week-numbering year for 2 July 2005 with default settings:
     * var result = startOfWeekYear(new Date(2005, 6, 2))
     * //=> Sun Dec 26 2004 00:00:00
     *
     * @example
     * // The start of a week-numbering year for 2 July 2005
     * // if Monday is the first day of week
     * // and 4 January is always in the first week of the year:
     * var result = startOfWeekYear(new Date(2005, 6, 2), {
     *   weekStartsOn: 1,
     *   firstWeekContainsDate: 4
     * })
     * //=> Mon Jan 03 2005 00:00:00
     */

    function startOfWeekYear(dirtyDate, dirtyOptions) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var options = dirtyOptions || {};
      var locale = options.locale;
      var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
      var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
      var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
      var year = getWeekYear(dirtyDate, dirtyOptions);
      var firstWeek = new Date(0);
      firstWeek.setFullYear(year, 0, firstWeekContainsDate);
      firstWeek.setHours(0, 0, 0, 0);
      var date = startOfWeek(firstWeek, dirtyOptions);
      return date;
    }

    var MILLISECONDS_IN_WEEK$3 = 604800000;
    /**
     * @name getWeek
     * @category Week Helpers
     * @summary Get the local week index of the given date.
     *
     * @description
     * Get the local week index of the given date.
     * The exact calculation depends on the values of
     * `options.weekStartsOn` (which is the index of the first day of the week)
     * and `options.firstWeekContainsDate` (which is the day of January, which is always in
     * the first week of the week-numbering year)
     *
     * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the given date
     * @param {Object} [options] - an object with options.
     * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
     * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
     * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
     * @returns {Number} the week
     * @throws {TypeError} 1 argument required
     * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
     * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
     *
     * @example
     * // Which week of the local week numbering year is 2 January 2005 with default options?
     * var result = getISOWeek(new Date(2005, 0, 2))
     * //=> 2
     *
     * // Which week of the local week numbering year is 2 January 2005,
     * // if Monday is the first day of the week,
     * // and the first week of the year always contains 4 January?
     * var result = getISOWeek(new Date(2005, 0, 2), {
     *   weekStartsOn: 1,
     *   firstWeekContainsDate: 4
     * })
     * //=> 53
     */

    function getWeek(dirtyDate, options) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var date = toDate(dirtyDate);
      var diff = startOfWeek(date, options).getTime() - startOfWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
      // because the number of milliseconds in a week is not constant
      // (e.g. it's different in the week of the daylight saving time clock shift)

      return Math.round(diff / MILLISECONDS_IN_WEEK$3) + 1;
    }

    /**
     * @name lastDayOfMonth
     * @category Month Helpers
     * @summary Return the last day of a month for the given date.
     *
     * @description
     * Return the last day of a month for the given date.
     * The result will be in the local timezone.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the original date
     * @returns {Date} the last day of a month
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // The last day of a month for 2 September 2014 11:55:00:
     * var result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Tue Sep 30 2014 00:00:00
     */

    function lastDayOfMonth(dirtyDate) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      var date = toDate(dirtyDate);
      var month = date.getMonth();
      date.setFullYear(date.getFullYear(), month + 1, 0);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    /**
     * @name getWeeksInMonth
     * @category Week Helpers
     * @summary Get the number of calendar weeks a month spans.
     *
     * @description
     * Get the number of calendar weeks the month in the given date spans.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the given date
     * @param {Object} [options] - an object with options.
     * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
     * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
     * @returns {Number} the number of calendar weeks
     * @throws {TypeError} 2 arguments required
     * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
     *
     * @example
     * // How many calendar weeks does February 2015 span?
     * var result = getWeeksInMonth(new Date(2015, 1, 8))
     * //=> 4
     *
     * @example
     * // If the week starts on Monday,
     * // how many calendar weeks does July 2017 span?
     * var result = getWeeksInMonth(new Date(2017, 6, 5), { weekStartsOn: 1 })
     * //=> 6
     */

    function getWeeksInMonth(date, options) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      return differenceInCalendarWeeks(lastDayOfMonth(date), startOfMonth(date), options) + 1;
    }

    /**
     * @name isToday
     * @category Day Helpers
     * @summary Is the given date today?
     * @pure false
     *
     * @description
     * Is the given date today?
     *
     * > ⚠️ Please note that this function is not present in the FP submodule as
     * > it uses `Date.now()` internally hence impure and can't be safely curried.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the date to check
     * @returns {Boolean} the date is today
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // If today is 6 October 2014, is 6 October 14:00:00 today?
     * var result = isToday(new Date(2014, 9, 6, 14, 0))
     * //=> true
     */

    function isToday(dirtyDate) {
      if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
      }

      return isSameDay(dirtyDate, Date.now());
    }

    // See issue: https://github.com/date-fns/date-fns/issues/376

    function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
      if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
      }

      var options = dirtyOptions || {};
      var locale = options.locale;
      var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
      var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
      var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

      if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
      }

      var date = toDate(dirtyDate);
      var day = toInteger(dirtyDay);
      var currentDay = date.getUTCDay();
      var remainder = day % 7;
      var dayIndex = (remainder + 7) % 7;
      var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
      date.setUTCDate(date.getUTCDate() + diff);
      return date;
    }

    // See issue: https://github.com/date-fns/date-fns/issues/376

    function setUTCISODay(dirtyDate, dirtyDay) {
      if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
      }

      var day = toInteger(dirtyDay);

      if (day % 7 === 0) {
        day = day - 7;
      }

      var weekStartsOn = 1;
      var date = toDate(dirtyDate);
      var currentDay = date.getUTCDay();
      var remainder = day % 7;
      var dayIndex = (remainder + 7) % 7;
      var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
      date.setUTCDate(date.getUTCDate() + diff);
      return date;
    }

    // See issue: https://github.com/date-fns/date-fns/issues/376

    function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
      if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
      }

      var date = toDate(dirtyDate);
      var isoWeek = toInteger(dirtyISOWeek);
      var diff = getUTCISOWeek(date) - isoWeek;
      date.setUTCDate(date.getUTCDate() - diff * 7);
      return date;
    }

    // See issue: https://github.com/date-fns/date-fns/issues/376

    function setUTCWeek(dirtyDate, dirtyWeek, options) {
      if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
      }

      var date = toDate(dirtyDate);
      var week = toInteger(dirtyWeek);
      var diff = getUTCWeek(date, options) - week;
      date.setUTCDate(date.getUTCDate() - diff * 7);
      return date;
    }

    var MILLISECONDS_IN_HOUR = 3600000;
    var MILLISECONDS_IN_MINUTE$1 = 60000;
    var MILLISECONDS_IN_SECOND = 1000;
    var numericPatterns = {
      month: /^(1[0-2]|0?\d)/,
      // 0 to 12
      date: /^(3[0-1]|[0-2]?\d)/,
      // 0 to 31
      dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
      // 0 to 366
      week: /^(5[0-3]|[0-4]?\d)/,
      // 0 to 53
      hour23h: /^(2[0-3]|[0-1]?\d)/,
      // 0 to 23
      hour24h: /^(2[0-4]|[0-1]?\d)/,
      // 0 to 24
      hour11h: /^(1[0-1]|0?\d)/,
      // 0 to 11
      hour12h: /^(1[0-2]|0?\d)/,
      // 0 to 12
      minute: /^[0-5]?\d/,
      // 0 to 59
      second: /^[0-5]?\d/,
      // 0 to 59
      singleDigit: /^\d/,
      // 0 to 9
      twoDigits: /^\d{1,2}/,
      // 0 to 99
      threeDigits: /^\d{1,3}/,
      // 0 to 999
      fourDigits: /^\d{1,4}/,
      // 0 to 9999
      anyDigitsSigned: /^-?\d+/,
      singleDigitSigned: /^-?\d/,
      // 0 to 9, -0 to -9
      twoDigitsSigned: /^-?\d{1,2}/,
      // 0 to 99, -0 to -99
      threeDigitsSigned: /^-?\d{1,3}/,
      // 0 to 999, -0 to -999
      fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999

    };
    var timezonePatterns = {
      basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
      basic: /^([+-])(\d{2})(\d{2})|Z/,
      basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
      extended: /^([+-])(\d{2}):(\d{2})|Z/,
      extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
    };

    function parseNumericPattern(pattern, string, valueCallback) {
      var matchResult = string.match(pattern);

      if (!matchResult) {
        return null;
      }

      var value = parseInt(matchResult[0], 10);
      return {
        value: valueCallback ? valueCallback(value) : value,
        rest: string.slice(matchResult[0].length)
      };
    }

    function parseTimezonePattern(pattern, string) {
      var matchResult = string.match(pattern);

      if (!matchResult) {
        return null;
      } // Input is 'Z'


      if (matchResult[0] === 'Z') {
        return {
          value: 0,
          rest: string.slice(1)
        };
      }

      var sign = matchResult[1] === '+' ? 1 : -1;
      var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
      var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
      var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
      return {
        value: sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE$1 + seconds * MILLISECONDS_IN_SECOND),
        rest: string.slice(matchResult[0].length)
      };
    }

    function parseAnyDigitsSigned(string, valueCallback) {
      return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
    }

    function parseNDigits(n, string, valueCallback) {
      switch (n) {
        case 1:
          return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);

        case 2:
          return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);

        case 3:
          return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);

        case 4:
          return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);

        default:
          return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback);
      }
    }

    function parseNDigitsSigned(n, string, valueCallback) {
      switch (n) {
        case 1:
          return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);

        case 2:
          return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);

        case 3:
          return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);

        case 4:
          return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);

        default:
          return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback);
      }
    }

    function dayPeriodEnumToHours(enumValue) {
      switch (enumValue) {
        case 'morning':
          return 4;

        case 'evening':
          return 17;

        case 'pm':
        case 'noon':
        case 'afternoon':
          return 12;

        case 'am':
        case 'midnight':
        case 'night':
        default:
          return 0;
      }
    }

    function normalizeTwoDigitYear(twoDigitYear, currentYear) {
      var isCommonEra = currentYear > 0; // Absolute number of the current year:
      // 1 -> 1 AC
      // 0 -> 1 BC
      // -1 -> 2 BC

      var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
      var result;

      if (absCurrentYear <= 50) {
        result = twoDigitYear || 100;
      } else {
        var rangeEnd = absCurrentYear + 50;
        var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
        var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
        result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
      }

      return isCommonEra ? result : 1 - result;
    }

    var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // User for validation

    function isLeapYearIndex(year) {
      return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
    }
    /*
     * |     | Unit                           |     | Unit                           |
     * |-----|--------------------------------|-----|--------------------------------|
     * |  a  | AM, PM                         |  A* | Milliseconds in day            |
     * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
     * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
     * |  d  | Day of month                   |  D  | Day of year                    |
     * |  e  | Local day of week              |  E  | Day of week                    |
     * |  f  |                                |  F* | Day of week in month           |
     * |  g* | Modified Julian day            |  G  | Era                            |
     * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
     * |  i! | ISO day of week                |  I! | ISO week of year               |
     * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
     * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
     * |  l* | (deprecated)                   |  L  | Stand-alone month              |
     * |  m  | Minute                         |  M  | Month                          |
     * |  n  |                                |  N  |                                |
     * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
     * |  p  |                                |  P  |                                |
     * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
     * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
     * |  s  | Second                         |  S  | Fraction of second             |
     * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
     * |  u  | Extended year                  |  U* | Cyclic year                    |
     * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
     * |  w  | Local week of year             |  W* | Week of month                  |
     * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
     * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
     * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
     *
     * Letters marked by * are not implemented but reserved by Unicode standard.
     *
     * Letters marked by ! are non-standard, but implemented by date-fns:
     * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
     * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
     *   i.e. 7 for Sunday, 1 for Monday, etc.
     * - `I` is ISO week of year, as opposed to `w` which is local week of year.
     * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
     *   `R` is supposed to be used in conjunction with `I` and `i`
     *   for universal ISO week-numbering date, whereas
     *   `Y` is supposed to be used in conjunction with `w` and `e`
     *   for week-numbering date specific to the locale.
     */


    var parsers = {
      // Era
      G: {
        priority: 140,
        parse: function (string, token, match, _options) {
          switch (token) {
            // AD, BC
            case 'G':
            case 'GG':
            case 'GGG':
              return match.era(string, {
                width: 'abbreviated'
              }) || match.era(string, {
                width: 'narrow'
              });
            // A, B

            case 'GGGGG':
              return match.era(string, {
                width: 'narrow'
              });
            // Anno Domini, Before Christ

            case 'GGGG':
            default:
              return match.era(string, {
                width: 'wide'
              }) || match.era(string, {
                width: 'abbreviated'
              }) || match.era(string, {
                width: 'narrow'
              });
          }
        },
        set: function (date, flags, value, _options) {
          flags.era = value;
          date.setUTCFullYear(value, 0, 1);
          date.setUTCHours(0, 0, 0, 0);
          return date;
        },
        incompatibleTokens: ['R', 'u', 't', 'T']
      },
      // Year
      y: {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        priority: 130,
        parse: function (string, token, match, _options) {
          var valueCallback = function (year) {
            return {
              year: year,
              isTwoDigitYear: token === 'yy'
            };
          };

          switch (token) {
            case 'y':
              return parseNDigits(4, string, valueCallback);

            case 'yo':
              return match.ordinalNumber(string, {
                unit: 'year',
                valueCallback: valueCallback
              });

            default:
              return parseNDigits(token.length, string, valueCallback);
          }
        },
        validate: function (_date, value, _options) {
          return value.isTwoDigitYear || value.year > 0;
        },
        set: function (date, flags, value, _options) {
          var currentYear = date.getUTCFullYear();

          if (value.isTwoDigitYear) {
            var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
            date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
          }

          var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
          date.setUTCFullYear(year, 0, 1);
          date.setUTCHours(0, 0, 0, 0);
          return date;
        },
        incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']
      },
      // Local week-numbering year
      Y: {
        priority: 130,
        parse: function (string, token, match, _options) {
          var valueCallback = function (year) {
            return {
              year: year,
              isTwoDigitYear: token === 'YY'
            };
          };

          switch (token) {
            case 'Y':
              return parseNDigits(4, string, valueCallback);

            case 'Yo':
              return match.ordinalNumber(string, {
                unit: 'year',
                valueCallback: valueCallback
              });

            default:
              return parseNDigits(token.length, string, valueCallback);
          }
        },
        validate: function (_date, value, _options) {
          return value.isTwoDigitYear || value.year > 0;
        },
        set: function (date, flags, value, options) {
          var currentYear = getUTCWeekYear(date, options);

          if (value.isTwoDigitYear) {
            var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
            date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
            date.setUTCHours(0, 0, 0, 0);
            return startOfUTCWeek(date, options);
          }

          var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
          date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
          date.setUTCHours(0, 0, 0, 0);
          return startOfUTCWeek(date, options);
        },
        incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
      },
      // ISO week-numbering year
      R: {
        priority: 130,
        parse: function (string, token, _match, _options) {
          if (token === 'R') {
            return parseNDigitsSigned(4, string);
          }

          return parseNDigitsSigned(token.length, string);
        },
        set: function (_date, _flags, value, _options) {
          var firstWeekOfYear = new Date(0);
          firstWeekOfYear.setUTCFullYear(value, 0, 4);
          firstWeekOfYear.setUTCHours(0, 0, 0, 0);
          return startOfUTCISOWeek(firstWeekOfYear);
        },
        incompatibleTokens: ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
      },
      // Extended year
      u: {
        priority: 130,
        parse: function (string, token, _match, _options) {
          if (token === 'u') {
            return parseNDigitsSigned(4, string);
          }

          return parseNDigitsSigned(token.length, string);
        },
        set: function (date, _flags, value, _options) {
          date.setUTCFullYear(value, 0, 1);
          date.setUTCHours(0, 0, 0, 0);
          return date;
        },
        incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']
      },
      // Quarter
      Q: {
        priority: 120,
        parse: function (string, token, match, _options) {
          switch (token) {
            // 1, 2, 3, 4
            case 'Q':
            case 'QQ':
              // 01, 02, 03, 04
              return parseNDigits(token.length, string);
            // 1st, 2nd, 3rd, 4th

            case 'Qo':
              return match.ordinalNumber(string, {
                unit: 'quarter'
              });
            // Q1, Q2, Q3, Q4

            case 'QQQ':
              return match.quarter(string, {
                width: 'abbreviated',
                context: 'formatting'
              }) || match.quarter(string, {
                width: 'narrow',
                context: 'formatting'
              });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)

            case 'QQQQQ':
              return match.quarter(string, {
                width: 'narrow',
                context: 'formatting'
              });
            // 1st quarter, 2nd quarter, ...

            case 'QQQQ':
            default:
              return match.quarter(string, {
                width: 'wide',
                context: 'formatting'
              }) || match.quarter(string, {
                width: 'abbreviated',
                context: 'formatting'
              }) || match.quarter(string, {
                width: 'narrow',
                context: 'formatting'
              });
          }
        },
        validate: function (_date, value, _options) {
          return value >= 1 && value <= 4;
        },
        set: function (date, _flags, value, _options) {
          date.setUTCMonth((value - 1) * 3, 1);
          date.setUTCHours(0, 0, 0, 0);
          return date;
        },
        incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
      },
      // Stand-alone quarter
      q: {
        priority: 120,
        parse: function (string, token, match, _options) {
          switch (token) {
            // 1, 2, 3, 4
            case 'q':
            case 'qq':
              // 01, 02, 03, 04
              return parseNDigits(token.length, string);
            // 1st, 2nd, 3rd, 4th

            case 'qo':
              return match.ordinalNumber(string, {
                unit: 'quarter'
              });
            // Q1, Q2, Q3, Q4

            case 'qqq':
              return match.quarter(string, {
                width: 'abbreviated',
                context: 'standalone'
              }) || match.quarter(string, {
                width: 'narrow',
                context: 'standalone'
              });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)

            case 'qqqqq':
              return match.quarter(string, {
                width: 'narrow',
                context: 'standalone'
              });
            // 1st quarter, 2nd quarter, ...

            case 'qqqq':
            default:
              return match.quarter(string, {
                width: 'wide',
                context: 'standalone'
              }) || match.quarter(string, {
                width: 'abbreviated',
                context: 'standalone'
              }) || match.quarter(string, {
                width: 'narrow',
                context: 'standalone'
              });
          }
        },
        validate: function (_date, value, _options) {
          return value >= 1 && value <= 4;
        },
        set: function (date, _flags, value, _options) {
          date.setUTCMonth((value - 1) * 3, 1);
          date.setUTCHours(0, 0, 0, 0);
          return date;
        },
        incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
      },
      // Month
      M: {
        priority: 110,
        parse: function (string, token, match, _options) {
          var valueCallback = function (value) {
            return value - 1;
          };

          switch (token) {
            // 1, 2, ..., 12
            case 'M':
              return parseNumericPattern(numericPatterns.month, string, valueCallback);
            // 01, 02, ..., 12

            case 'MM':
              return parseNDigits(2, string, valueCallback);
            // 1st, 2nd, ..., 12th

            case 'Mo':
              return match.ordinalNumber(string, {
                unit: 'month',
                valueCallback: valueCallback
              });
            // Jan, Feb, ..., Dec

            case 'MMM':
              return match.month(string, {
                width: 'abbreviated',
                context: 'formatting'
              }) || match.month(string, {
                width: 'narrow',
                context: 'formatting'
              });
            // J, F, ..., D

            case 'MMMMM':
              return match.month(string, {
                width: 'narrow',
                context: 'formatting'
              });
            // January, February, ..., December

            case 'MMMM':
            default:
              return match.month(string, {
                width: 'wide',
                context: 'formatting'
              }) || match.month(string, {
                width: 'abbreviated',
                context: 'formatting'
              }) || match.month(string, {
                width: 'narrow',
                context: 'formatting'
              });
          }
        },
        validate: function (_date, value, _options) {
          return value >= 0 && value <= 11;
        },
        set: function (date, _flags, value, _options) {
          date.setUTCMonth(value, 1);
          date.setUTCHours(0, 0, 0, 0);
          return date;
        },
        incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
      },
      // Stand-alone month
      L: {
        priority: 110,
        parse: function (string, token, match, _options) {
          var valueCallback = function (value) {
            return value - 1;
          };

          switch (token) {
            // 1, 2, ..., 12
            case 'L':
              return parseNumericPattern(numericPatterns.month, string, valueCallback);
            // 01, 02, ..., 12

            case 'LL':
              return parseNDigits(2, string, valueCallback);
            // 1st, 2nd, ..., 12th

            case 'Lo':
              return match.ordinalNumber(string, {
                unit: 'month',
                valueCallback: valueCallback
              });
            // Jan, Feb, ..., Dec

            case 'LLL':
              return match.month(string, {
                width: 'abbreviated',
                context: 'standalone'
              }) || match.month(string, {
                width: 'narrow',
                context: 'standalone'
              });
            // J, F, ..., D

            case 'LLLLL':
              return match.month(string, {
                width: 'narrow',
                context: 'standalone'
              });
            // January, February, ..., December

            case 'LLLL':
            default:
              return match.month(string, {
                width: 'wide',
                context: 'standalone'
              }) || match.month(string, {
                width: 'abbreviated',
                context: 'standalone'
              }) || match.month(string, {
                width: 'narrow',
                context: 'standalone'
              });
          }
        },
        validate: function (_date, value, _options) {
          return value >= 0 && value <= 11;
        },
        set: function (date, _flags, value, _options) {
          date.setUTCMonth(value, 1);
          date.setUTCHours(0, 0, 0, 0);
          return date;
        },
        incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
      },
      // Local week of year
      w: {
        priority: 100,
        parse: function (string, token, match, _options) {
          switch (token) {
            case 'w':
              return parseNumericPattern(numericPatterns.week, string);

            case 'wo':
              return match.ordinalNumber(string, {
                unit: 'week'
              });

            default:
              return parseNDigits(token.length, string);
          }
        },
        validate: function (_date, value, _options) {
          return value >= 1 && value <= 53;
        },
        set: function (date, _flags, value, options) {
          return startOfUTCWeek(setUTCWeek(date, value, options), options);
        },
        incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
      },
      // ISO week of year
      I: {
        priority: 100,
        parse: function (string, token, match, _options) {
          switch (token) {
            case 'I':
              return parseNumericPattern(numericPatterns.week, string);

            case 'Io':
              return match.ordinalNumber(string, {
                unit: 'week'
              });

            default:
              return parseNDigits(token.length, string);
          }
        },
        validate: function (_date, value, _options) {
          return value >= 1 && value <= 53;
        },
        set: function (date, _flags, value, options) {
          return startOfUTCISOWeek(setUTCISOWeek(date, value, options), options);
        },
        incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
      },
      // Day of the month
      d: {
        priority: 90,
        parse: function (string, token, match, _options) {
          switch (token) {
            case 'd':
              return parseNumericPattern(numericPatterns.date, string);

            case 'do':
              return match.ordinalNumber(string, {
                unit: 'date'
              });

            default:
              return parseNDigits(token.length, string);
          }
        },
        validate: function (date, value, _options) {
          var year = date.getUTCFullYear();
          var isLeapYear = isLeapYearIndex(year);
          var month = date.getUTCMonth();

          if (isLeapYear) {
            return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
          } else {
            return value >= 1 && value <= DAYS_IN_MONTH[month];
          }
        },
        set: function (date, _flags, value, _options) {
          date.setUTCDate(value);
          date.setUTCHours(0, 0, 0, 0);
          return date;
        },
        incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
      },
      // Day of year
      D: {
        priority: 90,
        parse: function (string, token, match, _options) {
          switch (token) {
            case 'D':
            case 'DD':
              return parseNumericPattern(numericPatterns.dayOfYear, string);

            case 'Do':
              return match.ordinalNumber(string, {
                unit: 'date'
              });

            default:
              return parseNDigits(token.length, string);
          }
        },
        validate: function (date, value, _options) {
          var year = date.getUTCFullYear();
          var isLeapYear = isLeapYearIndex(year);

          if (isLeapYear) {
            return value >= 1 && value <= 366;
          } else {
            return value >= 1 && value <= 365;
          }
        },
        set: function (date, _flags, value, _options) {
          date.setUTCMonth(0, value);
          date.setUTCHours(0, 0, 0, 0);
          return date;
        },
        incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']
      },
      // Day of week
      E: {
        priority: 90,
        parse: function (string, token, match, _options) {
          switch (token) {
            // Tue
            case 'E':
            case 'EE':
            case 'EEE':
              return match.day(string, {
                width: 'abbreviated',
                context: 'formatting'
              }) || match.day(string, {
                width: 'short',
                context: 'formatting'
              }) || match.day(string, {
                width: 'narrow',
                context: 'formatting'
              });
            // T

            case 'EEEEE':
              return match.day(string, {
                width: 'narrow',
                context: 'formatting'
              });
            // Tu

            case 'EEEEEE':
              return match.day(string, {
                width: 'short',
                context: 'formatting'
              }) || match.day(string, {
                width: 'narrow',
                context: 'formatting'
              });
            // Tuesday

            case 'EEEE':
            default:
              return match.day(string, {
                width: 'wide',
                context: 'formatting'
              }) || match.day(string, {
                width: 'abbreviated',
                context: 'formatting'
              }) || match.day(string, {
                width: 'short',
                context: 'formatting'
              }) || match.day(string, {
                width: 'narrow',
                context: 'formatting'
              });
          }
        },
        validate: function (_date, value, _options) {
          return value >= 0 && value <= 6;
        },
        set: function (date, _flags, value, options) {
          date = setUTCDay(date, value, options);
          date.setUTCHours(0, 0, 0, 0);
          return date;
        },
        incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T']
      },
      // Local day of week
      e: {
        priority: 90,
        parse: function (string, token, match, options) {
          var valueCallback = function (value) {
            var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
            return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
          };

          switch (token) {
            // 3
            case 'e':
            case 'ee':
              // 03
              return parseNDigits(token.length, string, valueCallback);
            // 3rd

            case 'eo':
              return match.ordinalNumber(string, {
                unit: 'day',
                valueCallback: valueCallback
              });
            // Tue

            case 'eee':
              return match.day(string, {
                width: 'abbreviated',
                context: 'formatting'
              }) || match.day(string, {
                width: 'short',
                context: 'formatting'
              }) || match.day(string, {
                width: 'narrow',
                context: 'formatting'
              });
            // T

            case 'eeeee':
              return match.day(string, {
                width: 'narrow',
                context: 'formatting'
              });
            // Tu

            case 'eeeeee':
              return match.day(string, {
                width: 'short',
                context: 'formatting'
              }) || match.day(string, {
                width: 'narrow',
                context: 'formatting'
              });
            // Tuesday

            case 'eeee':
            default:
              return match.day(string, {
                width: 'wide',
                context: 'formatting'
              }) || match.day(string, {
                width: 'abbreviated',
                context: 'formatting'
              }) || match.day(string, {
                width: 'short',
                context: 'formatting'
              }) || match.day(string, {
                width: 'narrow',
                context: 'formatting'
              });
          }
        },
        validate: function (_date, value, _options) {
          return value >= 0 && value <= 6;
        },
        set: function (date, _flags, value, options) {
          date = setUTCDay(date, value, options);
          date.setUTCHours(0, 0, 0, 0);
          return date;
        },
        incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']
      },
      // Stand-alone local day of week
      c: {
        priority: 90,
        parse: function (string, token, match, options) {
          var valueCallback = function (value) {
            var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
            return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
          };

          switch (token) {
            // 3
            case 'c':
            case 'cc':
              // 03
              return parseNDigits(token.length, string, valueCallback);
            // 3rd

            case 'co':
              return match.ordinalNumber(string, {
                unit: 'day',
                valueCallback: valueCallback
              });
            // Tue

            case 'ccc':
              return match.day(string, {
                width: 'abbreviated',
                context: 'standalone'
              }) || match.day(string, {
                width: 'short',
                context: 'standalone'
              }) || match.day(string, {
                width: 'narrow',
                context: 'standalone'
              });
            // T

            case 'ccccc':
              return match.day(string, {
                width: 'narrow',
                context: 'standalone'
              });
            // Tu

            case 'cccccc':
              return match.day(string, {
                width: 'short',
                context: 'standalone'
              }) || match.day(string, {
                width: 'narrow',
                context: 'standalone'
              });
            // Tuesday

            case 'cccc':
            default:
              return match.day(string, {
                width: 'wide',
                context: 'standalone'
              }) || match.day(string, {
                width: 'abbreviated',
                context: 'standalone'
              }) || match.day(string, {
                width: 'short',
                context: 'standalone'
              }) || match.day(string, {
                width: 'narrow',
                context: 'standalone'
              });
          }
        },
        validate: function (_date, value, _options) {
          return value >= 0 && value <= 6;
        },
        set: function (date, _flags, value, options) {
          date = setUTCDay(date, value, options);
          date.setUTCHours(0, 0, 0, 0);
          return date;
        },
        incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']
      },
      // ISO day of week
      i: {
        priority: 90,
        parse: function (string, token, match, _options) {
          var valueCallback = function (value) {
            if (value === 0) {
              return 7;
            }

            return value;
          };

          switch (token) {
            // 2
            case 'i':
            case 'ii':
              // 02
              return parseNDigits(token.length, string);
            // 2nd

            case 'io':
              return match.ordinalNumber(string, {
                unit: 'day'
              });
            // Tue

            case 'iii':
              return match.day(string, {
                width: 'abbreviated',
                context: 'formatting',
                valueCallback: valueCallback
              }) || match.day(string, {
                width: 'short',
                context: 'formatting',
                valueCallback: valueCallback
              }) || match.day(string, {
                width: 'narrow',
                context: 'formatting',
                valueCallback: valueCallback
              });
            // T

            case 'iiiii':
              return match.day(string, {
                width: 'narrow',
                context: 'formatting',
                valueCallback: valueCallback
              });
            // Tu

            case 'iiiiii':
              return match.day(string, {
                width: 'short',
                context: 'formatting',
                valueCallback: valueCallback
              }) || match.day(string, {
                width: 'narrow',
                context: 'formatting',
                valueCallback: valueCallback
              });
            // Tuesday

            case 'iiii':
            default:
              return match.day(string, {
                width: 'wide',
                context: 'formatting',
                valueCallback: valueCallback
              }) || match.day(string, {
                width: 'abbreviated',
                context: 'formatting',
                valueCallback: valueCallback
              }) || match.day(string, {
                width: 'short',
                context: 'formatting',
                valueCallback: valueCallback
              }) || match.day(string, {
                width: 'narrow',
                context: 'formatting',
                valueCallback: valueCallback
              });
          }
        },
        validate: function (_date, value, _options) {
          return value >= 1 && value <= 7;
        },
        set: function (date, _flags, value, options) {
          date = setUTCISODay(date, value, options);
          date.setUTCHours(0, 0, 0, 0);
          return date;
        },
        incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']
      },
      // AM or PM
      a: {
        priority: 80,
        parse: function (string, token, match, _options) {
          switch (token) {
            case 'a':
            case 'aa':
            case 'aaa':
              return match.dayPeriod(string, {
                width: 'abbreviated',
                context: 'formatting'
              }) || match.dayPeriod(string, {
                width: 'narrow',
                context: 'formatting'
              });

            case 'aaaaa':
              return match.dayPeriod(string, {
                width: 'narrow',
                context: 'formatting'
              });

            case 'aaaa':
            default:
              return match.dayPeriod(string, {
                width: 'wide',
                context: 'formatting'
              }) || match.dayPeriod(string, {
                width: 'abbreviated',
                context: 'formatting'
              }) || match.dayPeriod(string, {
                width: 'narrow',
                context: 'formatting'
              });
          }
        },
        set: function (date, _flags, value, _options) {
          date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
          return date;
        },
        incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T']
      },
      // AM, PM, midnight
      b: {
        priority: 80,
        parse: function (string, token, match, _options) {
          switch (token) {
            case 'b':
            case 'bb':
            case 'bbb':
              return match.dayPeriod(string, {
                width: 'abbreviated',
                context: 'formatting'
              }) || match.dayPeriod(string, {
                width: 'narrow',
                context: 'formatting'
              });

            case 'bbbbb':
              return match.dayPeriod(string, {
                width: 'narrow',
                context: 'formatting'
              });

            case 'bbbb':
            default:
              return match.dayPeriod(string, {
                width: 'wide',
                context: 'formatting'
              }) || match.dayPeriod(string, {
                width: 'abbreviated',
                context: 'formatting'
              }) || match.dayPeriod(string, {
                width: 'narrow',
                context: 'formatting'
              });
          }
        },
        set: function (date, _flags, value, _options) {
          date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
          return date;
        },
        incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T']
      },
      // in the morning, in the afternoon, in the evening, at night
      B: {
        priority: 80,
        parse: function (string, token, match, _options) {
          switch (token) {
            case 'B':
            case 'BB':
            case 'BBB':
              return match.dayPeriod(string, {
                width: 'abbreviated',
                context: 'formatting'
              }) || match.dayPeriod(string, {
                width: 'narrow',
                context: 'formatting'
              });

            case 'BBBBB':
              return match.dayPeriod(string, {
                width: 'narrow',
                context: 'formatting'
              });

            case 'BBBB':
            default:
              return match.dayPeriod(string, {
                width: 'wide',
                context: 'formatting'
              }) || match.dayPeriod(string, {
                width: 'abbreviated',
                context: 'formatting'
              }) || match.dayPeriod(string, {
                width: 'narrow',
                context: 'formatting'
              });
          }
        },
        set: function (date, _flags, value, _options) {
          date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
          return date;
        },
        incompatibleTokens: ['a', 'b', 't', 'T']
      },
      // Hour [1-12]
      h: {
        priority: 70,
        parse: function (string, token, match, _options) {
          switch (token) {
            case 'h':
              return parseNumericPattern(numericPatterns.hour12h, string);

            case 'ho':
              return match.ordinalNumber(string, {
                unit: 'hour'
              });

            default:
              return parseNDigits(token.length, string);
          }
        },
        validate: function (_date, value, _options) {
          return value >= 1 && value <= 12;
        },
        set: function (date, _flags, value, _options) {
          var isPM = date.getUTCHours() >= 12;

          if (isPM && value < 12) {
            date.setUTCHours(value + 12, 0, 0, 0);
          } else if (!isPM && value === 12) {
            date.setUTCHours(0, 0, 0, 0);
          } else {
            date.setUTCHours(value, 0, 0, 0);
          }

          return date;
        },
        incompatibleTokens: ['H', 'K', 'k', 't', 'T']
      },
      // Hour [0-23]
      H: {
        priority: 70,
        parse: function (string, token, match, _options) {
          switch (token) {
            case 'H':
              return parseNumericPattern(numericPatterns.hour23h, string);

            case 'Ho':
              return match.ordinalNumber(string, {
                unit: 'hour'
              });

            default:
              return parseNDigits(token.length, string);
          }
        },
        validate: function (_date, value, _options) {
          return value >= 0 && value <= 23;
        },
        set: function (date, _flags, value, _options) {
          date.setUTCHours(value, 0, 0, 0);
          return date;
        },
        incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T']
      },
      // Hour [0-11]
      K: {
        priority: 70,
        parse: function (string, token, match, _options) {
          switch (token) {
            case 'K':
              return parseNumericPattern(numericPatterns.hour11h, string);

            case 'Ko':
              return match.ordinalNumber(string, {
                unit: 'hour'
              });

            default:
              return parseNDigits(token.length, string);
          }
        },
        validate: function (_date, value, _options) {
          return value >= 0 && value <= 11;
        },
        set: function (date, _flags, value, _options) {
          var isPM = date.getUTCHours() >= 12;

          if (isPM && value < 12) {
            date.setUTCHours(value + 12, 0, 0, 0);
          } else {
            date.setUTCHours(value, 0, 0, 0);
          }

          return date;
        },
        incompatibleTokens: ['a', 'b', 'h', 'H', 'k', 't', 'T']
      },
      // Hour [1-24]
      k: {
        priority: 70,
        parse: function (string, token, match, _options) {
          switch (token) {
            case 'k':
              return parseNumericPattern(numericPatterns.hour24h, string);

            case 'ko':
              return match.ordinalNumber(string, {
                unit: 'hour'
              });

            default:
              return parseNDigits(token.length, string);
          }
        },
        validate: function (_date, value, _options) {
          return value >= 1 && value <= 24;
        },
        set: function (date, _flags, value, _options) {
          var hours = value <= 24 ? value % 24 : value;
          date.setUTCHours(hours, 0, 0, 0);
          return date;
        },
        incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T']
      },
      // Minute
      m: {
        priority: 60,
        parse: function (string, token, match, _options) {
          switch (token) {
            case 'm':
              return parseNumericPattern(numericPatterns.minute, string);

            case 'mo':
              return match.ordinalNumber(string, {
                unit: 'minute'
              });

            default:
              return parseNDigits(token.length, string);
          }
        },
        validate: function (_date, value, _options) {
          return value >= 0 && value <= 59;
        },
        set: function (date, _flags, value, _options) {
          date.setUTCMinutes(value, 0, 0);
          return date;
        },
        incompatibleTokens: ['t', 'T']
      },
      // Second
      s: {
        priority: 50,
        parse: function (string, token, match, _options) {
          switch (token) {
            case 's':
              return parseNumericPattern(numericPatterns.second, string);

            case 'so':
              return match.ordinalNumber(string, {
                unit: 'second'
              });

            default:
              return parseNDigits(token.length, string);
          }
        },
        validate: function (_date, value, _options) {
          return value >= 0 && value <= 59;
        },
        set: function (date, _flags, value, _options) {
          date.setUTCSeconds(value, 0);
          return date;
        },
        incompatibleTokens: ['t', 'T']
      },
      // Fraction of second
      S: {
        priority: 30,
        parse: function (string, token, _match, _options) {
          var valueCallback = function (value) {
            return Math.floor(value * Math.pow(10, -token.length + 3));
          };

          return parseNDigits(token.length, string, valueCallback);
        },
        set: function (date, _flags, value, _options) {
          date.setUTCMilliseconds(value);
          return date;
        },
        incompatibleTokens: ['t', 'T']
      },
      // Timezone (ISO-8601. +00:00 is `'Z'`)
      X: {
        priority: 10,
        parse: function (string, token, _match, _options) {
          switch (token) {
            case 'X':
              return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

            case 'XX':
              return parseTimezonePattern(timezonePatterns.basic, string);

            case 'XXXX':
              return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

            case 'XXXXX':
              return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

            case 'XXX':
            default:
              return parseTimezonePattern(timezonePatterns.extended, string);
          }
        },
        set: function (date, flags, value, _options) {
          if (flags.timestampIsSet) {
            return date;
          }

          return new Date(date.getTime() - value);
        },
        incompatibleTokens: ['t', 'T', 'x']
      },
      // Timezone (ISO-8601)
      x: {
        priority: 10,
        parse: function (string, token, _match, _options) {
          switch (token) {
            case 'x':
              return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

            case 'xx':
              return parseTimezonePattern(timezonePatterns.basic, string);

            case 'xxxx':
              return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

            case 'xxxxx':
              return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

            case 'xxx':
            default:
              return parseTimezonePattern(timezonePatterns.extended, string);
          }
        },
        set: function (date, flags, value, _options) {
          if (flags.timestampIsSet) {
            return date;
          }

          return new Date(date.getTime() - value);
        },
        incompatibleTokens: ['t', 'T', 'X']
      },
      // Seconds timestamp
      t: {
        priority: 40,
        parse: function (string, _token, _match, _options) {
          return parseAnyDigitsSigned(string);
        },
        set: function (_date, _flags, value, _options) {
          return [new Date(value * 1000), {
            timestampIsSet: true
          }];
        },
        incompatibleTokens: '*'
      },
      // Milliseconds timestamp
      T: {
        priority: 20,
        parse: function (string, _token, _match, _options) {
          return parseAnyDigitsSigned(string);
        },
        set: function (_date, _flags, value, _options) {
          return [new Date(value), {
            timestampIsSet: true
          }];
        },
        incompatibleTokens: '*'
      }
    };

    var TIMEZONE_UNIT_PRIORITY = 10; // This RegExp consists of three parts separated by `|`:
    // - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
    //   (one of the certain letters followed by `o`)
    // - (\w)\1* matches any sequences of the same letter
    // - '' matches two quote characters in a row
    // - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
    //   except a single quote symbol, which ends the sequence.
    //   Two quote characters do not end the sequence.
    //   If there is no matching single quote
    //   then the sequence will continue until the end of the string.
    // - . matches any single character unmatched by previous parts of the RegExps

    var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
    // sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

    var longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
    var escapedStringRegExp$1 = /^'([^]*?)'?$/;
    var doubleQuoteRegExp$1 = /''/g;
    var notWhitespaceRegExp = /\S/;
    var unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/;
    /**
     * @name parse
     * @category Common Helpers
     * @summary Parse the date.
     *
     * @description
     * Return the date parsed from string using the given format string.
     *
     * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
     * > See: https://git.io/fxCyr
     *
     * The characters in the format string wrapped between two single quotes characters (') are escaped.
     * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
     *
     * Format of the format string is based on Unicode Technical Standard #35:
     * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
     * with a few additions (see note 5 below the table).
     *
     * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
     * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
     *
     * ```javascript
     * parse('23 AM', 'HH a', new Date())
     * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
     * ```
     *
     * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
     *
     * Accepted format string patterns:
     * | Unit                            |Prior| Pattern | Result examples                   | Notes |
     * |---------------------------------|-----|---------|-----------------------------------|-------|
     * | Era                             | 140 | G..GGG  | AD, BC                            |       |
     * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
     * |                                 |     | GGGGG   | A, B                              |       |
     * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
     * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
     * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
     * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
     * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
     * |                                 |     | yyyyy   | ...                               | 2,4   |
     * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
     * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
     * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
     * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
     * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
     * |                                 |     | YYYYY   | ...                               | 2,4   |
     * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
     * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
     * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
     * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
     * |                                 |     | RRRRR   | ...                               | 2,4,5 |
     * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
     * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
     * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
     * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
     * |                                 |     | uuuuu   | ...                               | 2,4   |
     * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
     * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
     * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
     * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
     * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
     * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
     * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
     * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
     * |                                 |     | qq      | 01, 02, 03, 04                    |       |
     * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
     * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
     * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
     * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
     * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
     * |                                 |     | MM      | 01, 02, ..., 12                   |       |
     * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
     * |                                 |     | MMMM    | January, February, ..., December  | 2     |
     * |                                 |     | MMMMM   | J, F, ..., D                      |       |
     * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
     * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
     * |                                 |     | LL      | 01, 02, ..., 12                   |       |
     * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
     * |                                 |     | LLLL    | January, February, ..., December  | 2     |
     * |                                 |     | LLLLL   | J, F, ..., D                      |       |
     * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
     * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
     * |                                 |     | ww      | 01, 02, ..., 53                   |       |
     * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
     * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
     * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
     * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
     * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
     * |                                 |     | dd      | 01, 02, ..., 31                   |       |
     * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
     * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
     * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
     * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
     * |                                 |     | DDDD    | ...                               | 2     |
     * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
     * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
     * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
     * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
     * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
     * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
     * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
     * |                                 |     | iii     | Mon, Tue, Wed, ..., Su            | 5     |
     * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
     * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
     * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 5     |
     * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
     * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
     * |                                 |     | ee      | 02, 03, ..., 01                   |       |
     * |                                 |     | eee     | Mon, Tue, Wed, ..., Su            |       |
     * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
     * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
     * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
     * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
     * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
     * |                                 |     | cc      | 02, 03, ..., 01                   |       |
     * |                                 |     | ccc     | Mon, Tue, Wed, ..., Su            |       |
     * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
     * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
     * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
     * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
     * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
     * |                                 |     | aaaaa   | a, p                              |       |
     * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
     * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
     * |                                 |     | bbbbb   | a, p, n, mi                       |       |
     * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
     * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
     * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
     * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
     * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
     * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
     * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
     * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
     * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
     * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
     * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
     * |                                 |     | KK      | 1, 2, ..., 11, 0                  |       |
     * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
     * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
     * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
     * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
     * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
     * |                                 |     | mm      | 00, 01, ..., 59                   |       |
     * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
     * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
     * |                                 |     | ss      | 00, 01, ..., 59                   |       |
     * | Seconds timestamp               |  40 | t       | 512969520                         |       |
     * |                                 |     | tt      | ...                               | 2     |
     * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
     * |                                 |     | SS      | 00, 01, ..., 99                   |       |
     * |                                 |     | SSS     | 000, 0001, ..., 999               |       |
     * |                                 |     | SSSS    | ...                               | 2     |
     * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
     * |                                 |     | TT      | ...                               | 2     |
     * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
     * |                                 |     | XX      | -0800, +0530, Z                   |       |
     * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
     * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
     * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
     * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
     * |                                 |     | xx      | -0800, +0530, +0000               |       |
     * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
     * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
     * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
     * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
     * |                                 |     | PP      | May 29, 1453                      |       |
     * |                                 |     | PPP     | May 29th, 1453                    |       |
     * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
     * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
     * |                                 |     | pp      | 12:00:00 AM                       |       |
     * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
     * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
     * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
     * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
     * Notes:
     * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
     *    are the same as "stand-alone" units, but are different in some languages.
     *    "Formatting" units are declined according to the rules of the language
     *    in the context of a date. "Stand-alone" units are always nominative singular.
     *    In `format` function, they will produce different result:
     *
     *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
     *
     *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
     *
     *    `parse` will try to match both formatting and stand-alone units interchangably.
     *
     * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
     *    the single quote characters (see below).
     *    If the sequence is longer than listed in table:
     *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
     *      as wide as the sequence
     *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
     *      These variations are marked with "2" in the last column of the table.
     *
     * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
     *    These tokens represent the shortest form of the quarter.
     *
     * 4. The main difference between `y` and `u` patterns are B.C. years:
     *
     *    | Year | `y` | `u` |
     *    |------|-----|-----|
     *    | AC 1 |   1 |   1 |
     *    | BC 1 |   1 |   0 |
     *    | BC 2 |   2 |  -1 |
     *
     *    Also `yy` will try to guess the century of two digit year by proximity with `backupDate`:
     *
     *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
     *
     *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
     *
     *    while `uu` will just assign the year as is:
     *
     *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
     *
     *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
     *
     *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
     *    except local week-numbering years are dependent on `options.weekStartsOn`
     *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
     *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
     *
     * 5. These patterns are not in the Unicode Technical Standard #35:
     *    - `i`: ISO day of week
     *    - `I`: ISO week of year
     *    - `R`: ISO week-numbering year
     *    - `o`: ordinal number modifier
     *    - `P`: long localized date
     *    - `p`: long localized time
     *
     * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
     *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
     *
     * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
     *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
     *
     * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
     *    on the given locale.
     *
     *    using `en-US` locale: `P` => `MM/dd/yyyy`
     *    using `en-US` locale: `p` => `hh:mm a`
     *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
     *    using `pt-BR` locale: `p` => `HH:mm`
     *
     * Values will be assigned to the date in the descending order of its unit's priority.
     * Units of an equal priority overwrite each other in the order of appearance.
     *
     * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
     * the values will be taken from 3rd argument `backupDate` which works as a context of parsing.
     *
     * `backupDate` must be passed for correct work of the function.
     * If you're not sure which `backupDate` to supply, create a new instance of Date:
     * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
     * In this case parsing will be done in the context of the current date.
     * If `backupDate` is `Invalid Date` or a value not convertible to valid `Date`,
     * then `Invalid Date` will be returned.
     *
     * The result may vary by locale.
     *
     * If `formatString` matches with `dateString` but does not provides tokens, `backupDate` will be returned.
     *
     * If parsing failed, `Invalid Date` will be returned.
     * Invalid Date is a Date, whose time value is NaN.
     * Time value of Date: http://es5.github.io/#x15.9.1.1
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * - Old `parse` was renamed to `toDate`.
     *   Now `parse` is a new function which parses a string using a provided format.
     *
     *   ```javascript
     *   // Before v2.0.0
     *   parse('2016-01-01')
     *
     *   // v2.0.0 onward
     *   toDate('2016-01-01')
     *   parse('2016-01-01', 'yyyy-MM-dd', new Date())
     *   ```
     *
     * @param {String} dateString - the string to parse
     * @param {String} formatString - the string of tokens
     * @param {Date|Number} backupDate - defines values missing from the parsed dateString
     * @param {Object} [options] - an object with options.
     * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
     * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
     * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
     * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
     *   see: https://git.io/fxCyr
     * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
     *   see: https://git.io/fxCyr
     * @returns {Date} the parsed date
     * @throws {TypeError} 3 arguments required
     * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
     * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
     * @throws {RangeError} `options.locale` must contain `match` property
     * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr
     * @throws {RangeError} use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr
     * @throws {RangeError} use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr
     * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr
     * @throws {RangeError} format string contains an unescaped latin alphabet character
     *
     * @example
     * // Parse 11 February 2014 from middle-endian format:
     * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
     * //=> Tue Feb 11 2014 00:00:00
     *
     * @example
     * // Parse 28th of February in Esperanto locale in the context of 2010 year:
     * import eo from 'date-fns/locale/eo'
     * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
     *   locale: eo
     * })
     * //=> Sun Feb 28 2010 00:00:00
     */

    function parse(dirtyDateString, dirtyFormatString, dirtyBackupDate, dirtyOptions) {
      if (arguments.length < 3) {
        throw new TypeError('3 arguments required, but only ' + arguments.length + ' present');
      }

      var dateString = String(dirtyDateString);
      var formatString = String(dirtyFormatString);
      var options = dirtyOptions || {};
      var locale$1 = options.locale || locale;

      if (!locale$1.match) {
        throw new RangeError('locale must contain match property');
      }

      var localeFirstWeekContainsDate = locale$1.options && locale$1.options.firstWeekContainsDate;
      var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
      var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

      if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
        throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
      }

      var localeWeekStartsOn = locale$1.options && locale$1.options.weekStartsOn;
      var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
      var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

      if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
      }

      if (formatString === '') {
        if (dateString === '') {
          return toDate(dirtyBackupDate);
        } else {
          return new Date(NaN);
        }
      }

      var subFnOptions = {
        firstWeekContainsDate: firstWeekContainsDate,
        weekStartsOn: weekStartsOn,
        locale: locale$1 // If timezone isn't specified, it will be set to the system timezone

      };
      var setters = [{
        priority: TIMEZONE_UNIT_PRIORITY,
        set: dateToSystemTimezone,
        index: 0
      }];
      var i;
      var tokens = formatString.match(longFormattingTokensRegExp$1).map(function (substring) {
        var firstCharacter = substring[0];

        if (firstCharacter === 'p' || firstCharacter === 'P') {
          var longFormatter = longFormatters[firstCharacter];
          return longFormatter(substring, locale$1.formatLong, subFnOptions);
        }

        return substring;
      }).join('').match(formattingTokensRegExp$1);
      var usedTokens = [];

      for (i = 0; i < tokens.length; i++) {
        var token = tokens[i];

        if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) {
          throwProtectedError(token);
        }

        if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
          throwProtectedError(token);
        }

        var firstCharacter = token[0];
        var parser = parsers[firstCharacter];

        if (parser) {
          var incompatibleTokens = parser.incompatibleTokens;

          if (Array.isArray(incompatibleTokens)) {
            var incompatibleToken = void 0;

            for (var _i = 0; _i < usedTokens.length; _i++) {
              var usedToken = usedTokens[_i].token;

              if (incompatibleTokens.indexOf(usedToken) !== -1 || usedToken === firstCharacter) {
                incompatibleToken = usedTokens[_i];
                break;
              }
            }

            if (incompatibleToken) {
              throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
            }
          } else if (parser.incompatibleTokens === '*' && usedTokens.length) {
            throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
          }

          usedTokens.push({
            token: firstCharacter,
            fullToken: token
          });
          var parseResult = parser.parse(dateString, token, locale$1.match, subFnOptions);

          if (!parseResult) {
            return new Date(NaN);
          }

          setters.push({
            priority: parser.priority,
            set: parser.set,
            validate: parser.validate,
            value: parseResult.value,
            index: setters.length
          });
          dateString = parseResult.rest;
        } else {
          if (firstCharacter.match(unescapedLatinCharacterRegExp$1)) {
            throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
          } // Replace two single quote characters with one single quote character


          if (token === "''") {
            token = "'";
          } else if (firstCharacter === "'") {
            token = cleanEscapedString$1(token);
          } // Cut token from string, or, if string doesn't match the token, return Invalid Date


          if (dateString.indexOf(token) === 0) {
            dateString = dateString.slice(token.length);
          } else {
            return new Date(NaN);
          }
        }
      } // Check if the remaining input contains something other than whitespace


      if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
        return new Date(NaN);
      }

      var uniquePrioritySetters = setters.map(function (setter) {
        return setter.priority;
      }).sort(function (a, b) {
        return b - a;
      }).filter(function (priority, index, array) {
        return array.indexOf(priority) === index;
      }).map(function (priority) {
        return setters.filter(function (setter) {
          return setter.priority === priority;
        }).reverse();
      }).map(function (setterArray) {
        return setterArray[0];
      });
      var date = toDate(dirtyBackupDate);

      if (isNaN(date)) {
        return new Date(NaN);
      } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
      // This ensures that when UTC functions will be implemented, locales will be compatible with them.
      // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37


      var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
      var flags = {};

      for (i = 0; i < uniquePrioritySetters.length; i++) {
        var setter = uniquePrioritySetters[i];

        if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) {
          return new Date(NaN);
        }

        var result = setter.set(utcDate, flags, setter.value, subFnOptions); // Result is tuple (date, flags)

        if (result[0]) {
          utcDate = result[0];
          assign(flags, result[1]); // Result is date
        } else {
          utcDate = result;
        }
      }

      return utcDate;
    }

    function dateToSystemTimezone(date, flags) {
      if (flags.timestampIsSet) {
        return date;
      }

      var convertedDate = new Date(0);
      convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
      convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
      return convertedDate;
    }

    function cleanEscapedString$1(input) {
      return input.match(escapedStringRegExp$1)[1].replace(doubleQuoteRegExp$1, "'");
    }

    /**
     * Get the months to render in DayPicker according to the passed
     * `numberOfMonths` and other month-related props.
     */
    function getMonths(props) {
        var _a = props.month, month = _a === void 0 ? new Date() : _a, numberOfMonths = props.numberOfMonths, toMonth = props.toMonth, fromMonth = props.fromMonth, reverseMonths = props.reverseMonths;
        var start = startOfMonth(month);
        var end = startOfMonth(addMonths(start, numberOfMonths));
        var monthsDiff = differenceInMonths(end, start);
        var months = [];
        for (var i = 0; i < monthsDiff; i++) {
            var month_1 = addMonths(start, i);
            if (toMonth && month_1 > startOfMonth(toMonth)) {
                // Skip months after toMonth
                continue;
            }
            if (fromMonth && month_1 < startOfMonth(fromMonth)) {
                // Skip months before fromMonth
                continue;
            }
            months.push(month_1);
        }
        if (reverseMonths) {
            months = months.reverse();
        }
        return months;
    }

    /**
     * Return the next and the previous months for the navigation component, according to the DayPicker props.
     */
    function getNavigation(props) {
        var fromMonth = props.fromMonth, toMonth = props.toMonth, month = props.month, numberOfMonths = props.numberOfMonths, pagedNavigation = props.pagedNavigation;
        var add = pagedNavigation ? numberOfMonths : 1;
        var currentMonth = startOfMonth(month || new Date());
        var prevMonth;
        if (!fromMonth || currentMonth > startOfMonth(fromMonth)) {
            prevMonth = addMonths(currentMonth, add * -1);
        }
        var nextMonth;
        if (!toMonth ||
            addMonths(currentMonth, numberOfMonths) <= startOfMonth(toMonth)) {
            nextMonth = addMonths(currentMonth, add);
        }
        return { nextMonth: nextMonth, prevMonth: prevMonth };
    }

    /**
     * Return the props for the Navigation component and its children.
     */
    function getNavigationProps(props) {
        var classNames = props.classNames, styles = props.styles;
        var containerProps = { className: classNames.nav, style: styles.nav };
        var nextProps = {
            className: classNames.navNext,
            style: styles.navNext,
        };
        var prevProps = {
            className: classNames.navPrev,
            style: styles.navPrev,
        };
        return {
            containerProps: containerProps,
            nextProps: nextProps,
            prevProps: prevProps,
        };
    }

    var Navigation = function (props) {
        var dayPickerProps = props.dayPickerProps;
        var onMonthChange = dayPickerProps.onMonthChange, onPrevClick = dayPickerProps.onPrevClick, onNextClick = dayPickerProps.onNextClick;
        var _a = getNavigation(dayPickerProps), nextMonth = _a.nextMonth, prevMonth = _a.prevMonth;
        var _b = getNavigationProps(dayPickerProps), containerProps = _b.containerProps, nextProps = _b.nextProps, prevProps = _b.prevProps;
        var handlePrevClick = function (e) {
            onMonthChange && prevMonth && onMonthChange(prevMonth, e);
            onPrevClick && prevMonth && onPrevClick(prevMonth, e);
        };
        var handleNextClick = function (e) {
            onMonthChange && nextMonth && onMonthChange(nextMonth, e);
            onNextClick && nextMonth && onNextClick(nextMonth, e);
        };
        if (!dayPickerProps.onMonthChange) {
            return null;
        }
        var prevLabel = dayPickerProps.prevLabel, nextLabel = dayPickerProps.nextLabel;
        var prevButton = prevLabel && (React.createElement("button", __assign({}, prevProps, { key: "prev", disabled: !prevMonth, type: "button", onClick: handlePrevClick }), prevLabel));
        var nextButton = nextLabel && (React.createElement("button", __assign({}, nextProps, { key: 'next', disabled: !nextMonth, type: "button", onClick: handleNextClick }), nextLabel));
        var buttons = [prevButton, nextButton];
        if (dayPickerProps.dir === 'rtl') {
            buttons = buttons.reverse();
        }
        return React.createElement("div", __assign({}, containerProps), buttons);
    };

    var WeekNumber = function (_a) {
        var number = _a.number, dayPickerProps = _a.dayPickerProps;
        var formatWeekNumber = dayPickerProps.formatWeekNumber, locale = dayPickerProps.locale, classNames = dayPickerProps.classNames, styles = dayPickerProps.styles;
        return (React.createElement("span", { className: classNames.weekNumber, style: styles.weekNumber }, formatWeekNumber(number, { locale: locale })));
    };

    var defaultClassNames = {
        container: 'rdp',
        caption: 'rdp-caption',
        // Day Component
        day: 'rdp-day',
        dayWrapper: 'rdp-day_wrapper',
        // Month Component
        month: 'rdp-month',
        monthTable: 'rdp-month_table',
        monthTbody: 'rdp-month_tbody',
        months: 'rdp-months',
        // Head Components
        head: 'rdp-head',
        headRow: 'rdp-head_row',
        headWeekNumber: 'rdp-head_weeknumber',
        headWeekName: 'rdp-head_weekname',
        // Navigation Component
        nav: 'rdp-nav',
        navPrev: 'rdp-nav_prev',
        navNext: 'rdp-nav_next',
        // Week Component
        week: 'rdp-week',
        weekDay: 'rdp-week_day',
        weekWeeknumber: 'rdp-week_weeknumber',
        // WeekNumber component
        weekNumber: 'rdp-weeknumber',
        // Modifiers
        selected: 'rdp-day_selected',
        disabled: 'rdp-day_disabled',
        today: 'rdp-day_today',
        outside: 'rdp-day_outside',
    };

    function formatDay(day, formatOptions) {
        return format(day, 'd', formatOptions);
    }
    function formatCaption(month, formatOptions) {
        return format(month, 'LLLL Y', formatOptions);
    }
    function formatWeekdayName(day, formatOptions) {
        return format(day, 'E', formatOptions);
    }
    function formatWeekNumber(weekNumber) {
        return "" + weekNumber;
    }
    var defaultProps = {
        enableOutsideDaysClick: false,
        classNames: defaultClassNames,
        className: '',
        style: {},
        styles: {},
        components: {
            Caption: Caption,
            Day: Day,
            Navigation: Navigation,
            WeekNumber: WeekNumber,
        },
        fixedWeeks: false,
        formatCaption: formatCaption,
        formatDay: formatDay,
        formatWeekdayName: formatWeekdayName,
        formatWeekNumber: formatWeekNumber,
        locale: locale,
        nextLabel: '▶',
        modifiersClassNames: {},
        modifiersStyles: {},
        month: startOfMonth(new Date()),
        numberOfMonths: 1,
        pagedNavigation: false,
        prevLabel: '◀',
        reverseMonths: false,
        showCaption: true,
        showHead: true,
        showNavigation: true,
        showOutsideDays: false,
        showWeekNumber: false,
    };

    /**
     * Return the `modifiers` prop including the modifiers from shortcut-props
     * (`selected`, `disabled` and `hidden`)
     */
    function getModifiersFromProps(props) {
        var modifiers = Object.assign({}, props.modifiers);
        if (props.selected) {
            modifiers.selected = props.selected;
        }
        if (props.disabled) {
            modifiers.disabled = props.disabled;
        }
        if (props.hidden) {
            modifiers.hidden = props.hidden;
        }
        return modifiers;
    }

    /**
     * Return true if `day1` is after `day2`.
     */
    function isDayAfter(day1, day2) {
        return differenceInDays(day1, day2) > 0;
    }
    /**
     * Return true if `day1` is before `day2`.
     */
    function isDayBefore(day1, day2) {
        return differenceInDays(day1, day2) < 0;
    }
    /**
     * Return `true` if a date matches the specified modifier.
     */
    function matchModifier(day, modifier) {
        if (!modifier) {
            return false;
        }
        var modifiers;
        if (Array.isArray(modifier)) {
            modifiers = modifier;
        }
        else {
            modifiers = [modifier];
        }
        return modifiers.some(function (modifier) {
            if (!modifier) {
                return false;
            }
            if (modifier instanceof Date) {
                return isSameDay(day, modifier);
            }
            if ('after' in modifier &&
                'before' in modifier &&
                differenceInDays(modifier.before, modifier.after) > 0) {
                return (isDayAfter(day, modifier.after) && isDayBefore(day, modifier.before));
            }
            if ('after' in modifier &&
                'before' in modifier &&
                (isDayAfter(modifier.after, modifier.before) ||
                    isSameDay(modifier.after, modifier.before))) {
                return (isDayAfter(day, modifier.after) || isDayBefore(day, modifier.before));
            }
            if ('after' in modifier) {
                return isDayAfter(day, modifier.after);
            }
            if ('before' in modifier) {
                return isDayBefore(day, modifier.before);
            }
            if ('daysOfWeek' in modifier) {
                return modifier.daysOfWeek.includes(day.getDay());
            }
            if (typeof modifier === 'function') {
                return modifier(day);
            }
            return false;
        });
    }

    /**
     * Return the list of modifiers name matching the given day for the given
     * modifiers.
     */
    function listModifiers(day, modifiers) {
        function reduceModifiers(previousValue, _a) {
            var name = _a[0], modifier = _a[1];
            if (matchModifier(day, modifier)) {
                previousValue.push(name);
            }
            return previousValue;
        }
        return Object.entries(modifiers).reduce(reduceModifiers, []);
    }

    var defaultModifiers = {
        disabled: false,
        hidden: false,
        interactive: true,
        outside: '',
        selected: undefined,
        today: false,
    };
    var DateWithModifiers = /** @class */ (function () {
        function DateWithModifiers(date, initialModifiers, props) {
            if (initialModifiers === void 0) { initialModifiers = {}; }
            this.date = date;
            var modifiers = __assign(__assign(__assign({}, defaultModifiers), { today: isToday(date) }), initialModifiers);
            if (modifiers.outside && !props.showOutsideDays) {
                modifiers.hidden = true;
            }
            modifiers.disabled = Boolean(modifiers.outside && !props.enableOutsideDaysClick);
            var modifiersFromProps = getModifiersFromProps(props);
            var modifiersArray = listModifiers(date, modifiersFromProps);
            modifiersArray.forEach(function (modifier) { return (modifiers[modifier] = true); });
            if (!props.onDayClick || modifiers.hidden || modifiers.disabled) {
                modifiers.interactive = false;
            }
            this.modifiers = modifiers;
        }
        DateWithModifiers.prototype.getModifier = function (name) {
            return this.modifiers[name];
        };
        return DateWithModifiers;
    }());

    function getOutsideStartDays(day, props) {
        var locale = props.locale;
        var days = [];
        var firstDayOfWeek = startOfWeek(day.date, { locale: locale });
        var startDiff = differenceInDays(day.date, firstDayOfWeek);
        for (var i = 0; i < startDiff; i++) {
            var day_1 = addDays(firstDayOfWeek, i);
            var hidden = props.fromMonth && day_1 < props.fromMonth;
            var modifiers = { outside: 'start', hidden: hidden };
            var dateWithModifiers = new DateWithModifiers(day_1, modifiers, props);
            days.push(dateWithModifiers);
        }
        return days;
    }

    function getOutsideEndDays(day, props) {
        var locale = props.locale;
        var days = [];
        var lastDayOfWeek = endOfWeek(day.date, { locale: locale });
        var endDiff = differenceInDays(lastDayOfWeek, day.date);
        for (var i = 1; i <= endDiff; i++) {
            var dayDate = addDays(day.date, i);
            var hidden = props.toMonth && dayDate > props.toMonth;
            var modifiers = { outside: 'end', hidden: hidden };
            var dateWithModifiers = new DateWithModifiers(dayDate, modifiers, props);
            days.push(dateWithModifiers);
        }
        return days;
    }

    /**
     * Return the weeks for the given month. Each key of the returned object is the
     * week number.
     */
    function getWeeks(month, props) {
        var locale = props.locale, fixedWeeks = props.fixedWeeks;
        var monthStart = startOfMonth(month);
        var monthEnd = endOfMonth(month);
        var diff = differenceInDays(monthEnd, monthStart);
        var weeks = {};
        var lastWeekStr = '';
        for (var i = 0; i <= diff; i++) {
            var date = addDays(monthStart, i);
            var dateWithModifiers = new DateWithModifiers(date, {}, props);
            var week = getWeek(dateWithModifiers.date, { locale: locale });
            if (week === 1 && getMonth(date) === 11) {
                week = 53;
            }
            var weekStr = week.toString();
            if (!weeks[weekStr]) {
                var startDays = getOutsideStartDays(dateWithModifiers, props);
                // Create a new week by adding outside start days
                weeks[weekStr] = startDays;
            }
            weeks[weekStr].push(dateWithModifiers);
            lastWeekStr = weekStr;
        }
        var lastWeek = weeks[lastWeekStr];
        var lastDay = lastWeek[lastWeek.length - 1];
        var endDays = getOutsideEndDays(lastDay, props);
        weeks[lastWeekStr] = lastWeek.concat(endDays);
        // add extra weeks to the month, up to 6 weeks
        if (fixedWeeks) {
            lastWeek = weeks[lastWeekStr];
            var lastWeekDate = lastWeek[lastWeek.length - 1].date;
            var weeksInMonth = getWeeksInMonth(month, { locale: locale });
            if (weeksInMonth < 6) {
                var diff_1 = differenceInDays(addWeeks(lastWeekDate, 6 - weeksInMonth), lastWeekDate);
                for (var i = 0; i < diff_1; i++) {
                    var date = addDays(lastWeekDate, i + 1);
                    var dateWithModifiers = new DateWithModifiers(date, { outside: 'end' }, props);
                    var week = getWeek(date, { locale: locale });
                    if (week === 1 && getMonth(month) === 11) {
                        week = 53;
                    }
                    if (!weeks[week]) {
                        weeks[week] = [];
                    }
                    weeks[week.toString()].push(dateWithModifiers);
                }
            }
        }
        return weeks;
    }

    var date = new Date();
    function getWeekdaysNames(locale, format) {
        var start = startOfWeek(date, { locale: locale });
        var names = [];
        for (var i = 0; i < 7; i++) {
            var day = addDays(start, i);
            names.push(format(day, { locale: locale }));
        }
        return names;
    }

    var Head = function (props) {
        var locale = props.locale, showWeekNumber = props.showWeekNumber, dayPickerProps = props.dayPickerProps;
        var classNames = dayPickerProps.classNames, styles = dayPickerProps.styles, formatWeekdayName = dayPickerProps.formatWeekdayName;
        var weekdayNames = getWeekdaysNames(locale, formatWeekdayName);
        return (React.createElement("thead", { style: styles.head, className: classNames.head },
            React.createElement("tr", { style: styles.headRow, className: classNames.headRow },
                showWeekNumber && (React.createElement("th", { style: styles.headWeekNumber, className: classNames.headWeekNumber })),
                weekdayNames.map(function (name, i) { return (React.createElement("th", { key: i, scope: "col", style: styles.headWeekName, className: classNames.headWeekName }, name)); }))));
    };

    var Week = function (props) {
        var weekNumber = props.weekNumber, week = props.week, dayPickerProps = props.dayPickerProps;
        var showWeekNumber = dayPickerProps.showWeekNumber, classNames = dayPickerProps.classNames, styles = dayPickerProps.styles, components = dayPickerProps.components;
        var Day = components.Day, WeekNumber = components.WeekNumber;
        return (React.createElement("tr", { className: classNames.week, style: styles.week },
            showWeekNumber && (React.createElement("th", { className: classNames.weekWeeknumber, style: styles.weekWeeknumber },
                React.createElement(WeekNumber, { days: week.map(function (day) { return day.date; }), number: Number(weekNumber), dayPickerProps: dayPickerProps }))),
            week.map(function (day) { return (React.createElement("td", { className: classNames.weekDay, style: styles.weekDay, key: getUnixTime(day.date) },
                React.createElement(Day, { day: day.date, modifiers: day.modifiers, dayPickerProps: dayPickerProps }))); })));
    };

    var Month = function (props) {
        var month = props.month, dayPickerProps = props.dayPickerProps;
        var locale = dayPickerProps.locale, classNames = dayPickerProps.classNames, styles = dayPickerProps.styles;
        var showCaption = dayPickerProps.showCaption, showHead = dayPickerProps.showHead;
        var Caption = dayPickerProps.components.Caption;
        var weeks = getWeeks(month, dayPickerProps);
        return (React.createElement("div", { className: classNames.month },
            React.createElement("table", { className: classNames.monthTable, style: styles.monthTable },
                showCaption && (React.createElement(Caption, { month: month, dayPickerProps: dayPickerProps })),
                showHead && (React.createElement(Head, { locale: locale, showWeekNumber: dayPickerProps.showWeekNumber, dayPickerProps: dayPickerProps })),
                React.createElement("tbody", { className: classNames.monthTbody, style: styles.monthTbody }, Object.keys(weeks).map(function (weekNumber) { return (React.createElement(Week, { key: weekNumber, week: weeks[weekNumber], weekNumber: Number(weekNumber), dayPickerProps: dayPickerProps })); })))));
    };

    /* eslint-disable @typescript-eslint/no-explicit-any */
    /**
     * Filter the undefined props of `obj`.
     */
    function filterUndefinedProps(obj) {
        if (!obj)
            return {};
        var clean = {};
        Object.entries(obj).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (typeof value === 'undefined') {
                return;
            }
            clean[key.toString()] = value;
        });
        return clean;
    }

    var DayPickerControlled = function (initialProps) {
        if (initialProps === void 0) { initialProps = defaultProps; }
        // Extend props with defaults
        var components = __assign(__assign({}, defaultProps.components), filterUndefinedProps(initialProps.components));
        var classNames = __assign(__assign({}, defaultProps.classNames), filterUndefinedProps(initialProps.classNames));
        var props = __assign(__assign(__assign({}, defaultProps), filterUndefinedProps(initialProps)), { components: components,
            classNames: classNames });
        // From `style` prop
        var style = __assign(__assign({}, props.styles.container), props.style);
        // From `className prop`
        var className = [props.classNames.container];
        if (props.className) {
            className.concat(props.className.split(' '));
        }
        var classNameStr = className.join(' ');
        var months = getMonths(props);
        var Navigation = props.components.Navigation;
        return (React.createElement("div", { className: classNameStr, style: style, dir: props.dir },
            props.showNavigation && React.createElement(Navigation, { dayPickerProps: props }),
            React.createElement("div", { className: props.classNames.months, style: props.styles ? props.styles.month : undefined }, months.map(function (month) { return (React.createElement(Month, { key: getTime(month), month: month, dayPickerProps: props })); }))));
    };
    var DayPicker = function (initialProps) {
        var initialMonth = initialProps.initialMonth, props = __rest(initialProps, ["initialMonth"]);
        var isControlled = Boolean(props.month);
        var _a = React.useState(startOfMonth(initialMonth || new Date())), currentMonth = _a[0], setCurrentMonth = _a[1];
        function handleMonthChange(month, e) {
            setCurrentMonth(month);
            if (props.onMonthChange) {
                props.onMonthChange(month, e);
            }
        }
        return (React.createElement(DayPickerControlled, __assign({}, props, { onMonthChange: !isControlled ? handleMonthChange : props.onMonthChange, month: isControlled ? props.month : currentMonth })));
    };

    function isValid$1(day) {
        return !isNaN(day.getTime());
    }
    var useInput = function (initialSelectedDay, formatStr, _options) {
        var options = __assign({ locale: defaultProps.locale, required: false }, _options);
        var initialInputValue = initialSelectedDay
            ? format(initialSelectedDay, formatStr, options)
            : '';
        var _a = React.useState(initialSelectedDay), selectedDay = _a[0], setSelectedDay = _a[1];
        var _b = React.useState(initialInputValue), inputValue = _b[0], setInputValue = _b[1];
        var _c = React.useState(initialSelectedDay || new Date()), currentMonth = _c[0], setCurrentMonth = _c[1];
        function onChange(e) {
            var el = e.target;
            setInputValue(el.value);
            var day = parse(el.value, formatStr, new Date(), options);
            if (!isValid$1(day)) {
                setSelectedDay(undefined);
                return;
            }
            setSelectedDay(day);
            setCurrentMonth(day); // Update the month shown in the calendar.
        }
        function onBlur(e) {
            var el = e.target;
            var day = parse(el.value, formatStr, new Date(), options);
            if (isValid$1(day) || !options.required) {
                if (onBlur)
                    onBlur(e);
                return;
            }
            setSelectedDay(initialSelectedDay);
            setCurrentMonth(initialSelectedDay || new Date());
            setInputValue(initialInputValue || '');
        }
        function onFocus(e) {
            var el = e.target;
            if (el.value) {
                var day = parse(el.value, formatStr, new Date(), options);
                if (isValid$1(day)) {
                    setCurrentMonth(day);
                }
                if (onFocus)
                    onFocus(e);
                return;
            }
            setSelectedDay(initialSelectedDay);
            setCurrentMonth(initialSelectedDay || new Date());
            setInputValue(initialInputValue || '');
            if (onFocus)
                onFocus(e);
        }
        function onDayClick(day, modifiers) {
            if (modifiers.selected) {
                if (!options.required) {
                    setSelectedDay(undefined);
                    setInputValue('');
                }
                return;
            }
            setSelectedDay(day);
            var value = format(day, formatStr, options);
            setInputValue(value);
        }
        function onMonthChange(month) {
            setCurrentMonth(month);
        }
        return [
            currentMonth,
            selectedDay,
            inputValue,
            { onDayClick: onDayClick, onMonthChange: onMonthChange, onChange: onChange, onFocus: onFocus, onBlur: onBlur },
        ];
    };

    exports.Caption = Caption;
    exports.DateWithModifiers = DateWithModifiers;
    exports.Day = Day;
    exports.DayPicker = DayPicker;
    exports.Head = Head;
    exports.Month = Month;
    exports.Navigation = Navigation;
    exports.Week = Week;
    exports.defaultClassNames = defaultClassNames;
    exports.defaultProps = defaultProps;
    exports.getCaptionProps = getCaptionProps;
    exports.getDayProps = getDayProps;
    exports.getMonths = getMonths;
    exports.getNavigation = getNavigation;
    exports.getNavigationProps = getNavigationProps;
    exports.getWeeks = getWeeks;
    exports.useInput = useInput;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
