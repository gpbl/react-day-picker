import { __assign } from 'tslib';
import React__default, { createElement, useState } from 'react';
import { startOfWeek, addDays, getUnixTime, isSameDay, differenceInDays, isToday, endOfWeek, startOfMonth, endOfMonth, getWeek, getMonth, getWeeksInMonth, addWeeks, addMonths, differenceInMonths, format, getTime, parse } from 'date-fns';
import english from 'date-fns/locale/en-US';

/**
 * Return the name of the weekdays according to the formatting function.
 *
 * @private
 */
function getWeekdaysNames(locale, format) {
    var start = startOfWeek(new Date(), { locale: locale });
    var names = [];
    for (var i = 0; i < 7; i++) {
        var day = addDays(start, i);
        names.push(format(day, { locale: locale }));
    }
    return names;
}

/**
 * Render the head of the month table, including the weekday names (Mon, Tue,
 * etc.).
 *
 * @private
 * @category Components
 */
function Head(props) {
    var _a, _b, _c, _d, _e, _f;
    var locale = props.locale, showWeekNumber = props.showWeekNumber, dayPickerProps = props.dayPickerProps;
    var classNames = dayPickerProps.classNames, styles = dayPickerProps.styles, formatWeekdayName = dayPickerProps.formatWeekdayName;
    var weekdayNames = getWeekdaysNames(locale, formatWeekdayName);
    return (createElement("thead", { style: (_a = styles) === null || _a === void 0 ? void 0 : _a.head, className: (_b = classNames) === null || _b === void 0 ? void 0 : _b.head },
        createElement("tr", { style: (_c = styles) === null || _c === void 0 ? void 0 : _c.headRow, className: (_d = classNames) === null || _d === void 0 ? void 0 : _d.headRow },
            showWeekNumber && (createElement("th", { style: (_e = styles) === null || _e === void 0 ? void 0 : _e.headWeekNumber, className: (_f = classNames) === null || _f === void 0 ? void 0 : _f.headWeekNumber })),
            weekdayNames.map(function (name, i) {
                var _a, _b;
                return (createElement("th", { key: i, scope: "col", style: (_a = styles) === null || _a === void 0 ? void 0 : _a.headWeekName, className: (_b = classNames) === null || _b === void 0 ? void 0 : _b.headWeekName }, name));
            }))));
}

/**
 * Render a week row.
 *
 * @category Components
 * @private
 */
function WeekRow(props) {
    var _a, _b, _c, _d;
    var weekNumber = props.weekNumber, week = props.week, dayPickerProps = props.dayPickerProps;
    var showWeekNumber = dayPickerProps.showWeekNumber, classNames = dayPickerProps.classNames, styles = dayPickerProps.styles, swizzle = dayPickerProps.swizzle;
    var _e = swizzle, Day = _e.Day, WeekNumber = _e.WeekNumber;
    return (createElement("tr", { className: (_a = classNames) === null || _a === void 0 ? void 0 : _a.week, style: (_b = styles) === null || _b === void 0 ? void 0 : _b.week },
        showWeekNumber && (createElement("th", { className: (_c = classNames) === null || _c === void 0 ? void 0 : _c.weekWeeknumber, style: (_d = styles) === null || _d === void 0 ? void 0 : _d.weekWeeknumber },
            createElement(WeekNumber, { days: week.map(function (day) { return day.date; }), number: Number(weekNumber), dayPickerProps: dayPickerProps }))),
        week.map(function (day) {
            var _a, _b;
            return (createElement("td", { className: (_a = classNames) === null || _a === void 0 ? void 0 : _a.weekDay, style: (_b = styles) === null || _b === void 0 ? void 0 : _b.weekDay, key: getUnixTime(day.date) },
                createElement(Day, { day: day.date, modifiers: day.modifiers, dayPickerProps: dayPickerProps })));
        })));
}

/**
 * Default modifiers.
 *
 * @readonly
 */
var defaultModifiers = {
    disabled: false,
    hidden: false,
    interactive: true,
    outsideend: false,
    outsidestart: false,
    selected: false,
    today: false
};

/**
 * Return the `modifiers` prop including the modifiers from shortcut-props
 * (`selected`, `disabled` and `hidden`)
 *
 * @private
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
 * @private
 */
function isDayAfter(day1, day2) {
    return differenceInDays(day1, day2) > 0;
}
/**
 * @private
 */
function isDayBefore(day1, day2) {
    return differenceInDays(day1, day2) < 0;
}
/**
 * @private
 */
function matchDate(day, matcher) {
    if (!(matcher instanceof Date))
        return false;
    return isSameDay(day, matcher);
}
/**
 * @private
 */
function matchDayInRange(day, matcher) {
    if (!("from" in matcher) || !("to" in matcher))
        return false;
    var matchDayT = {
        from: matcher.from,
        to: matcher.to
    };
    if (differenceInDays(matchDayT.from, matchDayT.to) <= 0)
        return false;
    return isDayBefore(day, matcher.to) && isDayAfter(day, matcher.from);
}
/**
 * @private
 */
function matchDayBefore(day, matcher) {
    if ("after" in matcher || !("before" in matcher))
        return false;
    var matchDayT = { before: matcher.before };
    return isDayBefore(day, matchDayT.before);
}
/**
 * @private
 */
function matchDayAfter(day, matcher) {
    if ("before" in matcher || !("after" in matcher))
        return false;
    var matchDayT = { after: matcher.after };
    return isDayBefore(day, matchDayT.after);
}
/**
 * @private
 */
function matchDayBetween(day, matcher) {
    if (!("after" in matcher) || !("before" in matcher))
        return false;
    var matchDayT = {
        before: matcher.before,
        after: matcher.after
    };
    if (differenceInDays(matchDayT.before, matchDayT.after) <= 0)
        return false;
    return isDayAfter(day, matcher.after) && isDayBefore(day, matcher.before);
}
/**
 * @private
 */
function matchDayOfWeek(day, matcher) {
    if (!("daysOfWeek" in matcher))
        return false;
    return matcher.daysOfWeek.includes(day.getDay());
}
/**
 * @private
 */
function matchFunction(day, matcher) {
    if (!(matcher instanceof Function))
        return false;
    return matcher(day);
}
/**
 * Return `true` if a day matches a day matcher.
 *
 * @private
 */
function matchDay(day, matcher) {
    if (!matcher)
        return false;
    var matchers;
    if (Array.isArray(matcher)) {
        matchers = matcher;
    }
    else {
        matchers = [matcher];
    }
    return matchers.some(function (matcher) {
        if (!matcher)
            return false;
        return (matchDate(day, matcher) ||
            matchDayInRange(day, matcher) ||
            matchDayBefore(day, matcher) ||
            matchDayAfter(day, matcher) ||
            matchDayBetween(day, matcher) ||
            matchDayOfWeek(day, matcher) ||
            matchFunction(day, matcher));
    });
}

/**
 * @ignore
 */
var reduce = function (day, modifiers) { return function (previousValue, key) {
    var modifier = modifiers[key];
    if (matchDay(day, modifier))
        previousValue.push(name);
    return previousValue;
}; };
/**
 * Given a date and a list of modifiers, return the names of the modifiers matching that day.
 *
 * @private
 */
function listModifiers(day, modifiers) {
    return Object.keys(modifiers).reduce(reduce(day, modifiers), []);
}

/**
 * Helper class to move modifiers around the components.
 *
 * @private
 */
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

/**
 * Return the outside starting days for the given day.
 *
 * @private
 */
function getOutsideStartDays(day, props) {
    var locale = props.locale;
    var days = [];
    var firstDayOfWeek = startOfWeek(day.date, { locale: locale });
    var startDiff = differenceInDays(day.date, firstDayOfWeek);
    for (var i = 0; i < startDiff; i++) {
        var day_1 = addDays(firstDayOfWeek, i);
        var hidden = props.fromMonth && day_1 < props.fromMonth;
        var modifiers = { outsidestart: true, hidden: hidden };
        var dateWithModifiers = new DateWithModifiers(day_1, modifiers, props);
        days.push(dateWithModifiers);
    }
    return days;
}

/**
 * Return the outside ending days for the given day.
 *
 * @private
 */
function getOutsideEndDays(day, props) {
    var locale = props.locale;
    var days = [];
    var lastDayOfWeek = endOfWeek(day.date, { locale: locale });
    var endDiff = differenceInDays(lastDayOfWeek, day.date);
    for (var i = 1; i <= endDiff; i++) {
        var dayDate = addDays(day.date, i);
        var hidden = props.toMonth && dayDate > props.toMonth;
        var modifiers = { outsideend: true, hidden: hidden };
        var dateWithModifiers = new DateWithModifiers(dayDate, modifiers, props);
        days.push(dateWithModifiers);
    }
    return days;
}

/**
 * Return the weeks belonging to the given month.
 *
 * @private
 */
function getWeeks(month, props) {
    var locale = props.locale, fixedWeeks = props.fixedWeeks;
    var monthStart = startOfMonth(month);
    var monthEnd = endOfMonth(month);
    var diff = differenceInDays(monthEnd, monthStart);
    var weeks = {};
    var lastWeekStr = "";
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
                var dateWithModifiers = new DateWithModifiers(date, { outsideend: true }, props);
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

/**
 * Render the month table.
 *
 * @private
 * @category Components
 */
function MonthTable(props) {
    var _a, _b, _c, _d, _e;
    var month = props.month, dayPickerProps = props.dayPickerProps;
    var locale = dayPickerProps.locale, classNames = dayPickerProps.classNames, styles = dayPickerProps.styles;
    var showCaption = dayPickerProps.showCaption, showHead = dayPickerProps.showHead;
    var MonthCaption = dayPickerProps.swizzle.MonthCaption;
    var weeks = getWeeks(month, dayPickerProps);
    return (createElement("div", { className: (_a = classNames) === null || _a === void 0 ? void 0 : _a.month },
        createElement("table", { className: (_b = classNames) === null || _b === void 0 ? void 0 : _b.monthTable, style: (_c = styles) === null || _c === void 0 ? void 0 : _c.monthTable },
            showCaption && (createElement(MonthCaption, { month: month, dayPickerProps: dayPickerProps })),
            showHead && (createElement(Head, { locale: locale, showWeekNumber: dayPickerProps.showWeekNumber, dayPickerProps: dayPickerProps })),
            createElement("tbody", { className: (_d = classNames) === null || _d === void 0 ? void 0 : _d.monthTbody, style: (_e = styles) === null || _e === void 0 ? void 0 : _e.monthTbody }, Object.keys(weeks).map(function (weekNumber) { return (createElement(WeekRow, { key: weekNumber, week: weeks[weekNumber], weekNumber: Number(weekNumber), dayPickerProps: dayPickerProps })); })))));
}

/**
 * Get the months to render in DayPicker according to the passed
 * `numberOfMonths` and other month-related props.
 *
 * @private
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

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Filter the undefined props of `obj`.
 *
 * @private
 */
function filterUndefinedProps(obj) {
    if (!obj)
        return {};
    var clean = {};
    Object.entries(obj).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (typeof value === "undefined") {
            return;
        }
        clean[key.toString()] = value;
    });
    return clean;
}

/**
 * Return props for creating a [[MonthCaption]] component.
 *
 * #### Usage
 *
 * Use this helper when swizzling the caption using  the
 * [[DayPickerProps.components]] prop.
 *
 * ```jsx
 * function MonthCaption({ dayPickerProps }): JSX.Element {
 *   const { containerProps } = getCaptionProps(dayPickerProps);
 *   return (
 *     <caption {...containerProps}>
 *       Something inside the caption
 *     </caption>;
 *   )
 * }
 * <DayPicker components={{ MonthCaption }} />
 * ```
 *
 *
 *
 */
function getCaptionProps(dayPickerProps) {
    var _a, _b;
    var styles = dayPickerProps.styles, classNames = dayPickerProps.classNames;
    return {
        containerProps: {
            className: (_a = classNames) === null || _a === void 0 ? void 0 : _a.caption,
            style: (_b = styles) === null || _b === void 0 ? void 0 : _b.caption
        }
    };
}

/**
 * Renders the caption of the month.
 *
 * This component can be [swizzled](./docs/swizzling).
 *
 * @category Components
 */
function MonthCaption(props) {
    var containerProps = getCaptionProps(props.dayPickerProps).containerProps;
    var locale = props.dayPickerProps.locale;
    return (createElement("caption", __assign({}, containerProps), props.dayPickerProps.formatCaption(props.month, { locale: locale })));
}

/**
 * Return props for creating a [[Day]] component.
 *
 * #### Usage
 *
 * - Use this helper when swizzling the [[Day]] via the
 *   [[DayPickerProps.components]] prop.
 * - This component is a bit complex to swizzle: see the source of the
 *   [[Day]] component for an example.
 *
 *
 */
function getDayProps(day, modifiers, props) {
    var _a, _b, _c;
    var onDayClick = props.onDayClick, styles = props.styles, modifiersStyles = props.modifiersStyles, classNames = props.classNames, modifiersClassNames = props.modifiersClassNames;
    var onClick;
    if (modifiers.interactive && onDayClick) {
        onClick = function (e) {
            e.stopPropagation();
            e.preventDefault();
            onDayClick(day, modifiers, e);
        };
    }
    var style = __assign({}, (_a = styles) === null || _a === void 0 ? void 0 : _a.day);
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
    var className = [];
    if (classNames && classNames.day) {
        className.push(classNames.day);
        if (modifiersClassNames) {
            Object.keys(modifiers)
                .filter(function (modifier) { return !!modifiers[modifier]; })
                .forEach(function (modifier) {
                if (modifier && classNames[modifier]) {
                    className.push(classNames[modifier]);
                }
                if (modifiersClassNames && modifiersClassNames[modifier]) {
                    className.push(modifiersClassNames[modifier]);
                }
            });
        }
    }
    var dataProps = {};
    Object.entries(modifiers)
        .filter(function (value) { return Boolean(value); })
        .forEach(function (_a) {
        var modifier = _a[0], value = _a[1];
        dataProps["data-rdp-" + modifier] = value;
    });
    var containerProps = __assign({ "aria-disabled": !modifiers.interactive || undefined, disabled: Boolean(modifiers.disabled) || undefined, onClick: onClick,
        style: style, className: className.join(" ") }, dataProps);
    var wrapperProps = {
        className: (_b = classNames) === null || _b === void 0 ? void 0 : _b.dayWrapper,
        styles: (_c = styles) === null || _c === void 0 ? void 0 : _c.dayWrapper
    };
    return { containerProps: containerProps, wrapperProps: wrapperProps };
}

/**
 * The `Day` component renders the content of the day cell. It renders a button
 * if the day is interactive (i.e. it is clickable).
 *
 * This component can be [[include:swizzling.md]].
 *
 * @category Components
 */
function Day(props) {
    var day = props.day, modifiers = props.modifiers, dayPickerProps = props.dayPickerProps;
    var locale = dayPickerProps.locale, formatDay = dayPickerProps.formatDay;
    var _a = getDayProps(day, modifiers, dayPickerProps), containerProps = _a.containerProps, wrapperProps = _a.wrapperProps;
    if (modifiers && modifiers.hidden) {
        return createElement("span", null);
    }
    var Component = modifiers.interactive ? "button" : "span";
    return (createElement(Component, __assign({}, containerProps),
        createElement("span", __assign({}, wrapperProps), formatDay(day, { locale: locale }))));
}

/**
 * Render the number of the week when [[showWeekNumber]] is enabled.
 *
 * @category Components
 */
function WeekNumber(props) {
    var _a, _b;
    var number = props.number, dayPickerProps = props.dayPickerProps;
    var formatWeekNumber = dayPickerProps.formatWeekNumber, locale = dayPickerProps.locale, classNames = dayPickerProps.classNames, styles = dayPickerProps.styles;
    return (createElement("span", { className: (_a = classNames) === null || _a === void 0 ? void 0 : _a.weekNumber, style: (_b = styles) === null || _b === void 0 ? void 0 : _b.weekNumber }, formatWeekNumber && formatWeekNumber(number, { locale: locale })));
}

/**
 * Return the next and the previous months for the navigation component,
 * according to the DayPicker props.
 *
 *
 */
function getNavigation(props) {
    var fromMonth = props.fromMonth, toMonth = props.toMonth, month = props.month, _a = props.numberOfMonths, numberOfMonths = _a === void 0 ? 1 : _a, pagedNavigation = props.pagedNavigation;
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
 *
 *
 */
function getNavigationProps(props) {
    var _a, _b, _c, _d, _e, _f;
    var classNames = props.classNames, styles = props.styles;
    var containerProps = { className: (_a = classNames) === null || _a === void 0 ? void 0 : _a.nav, style: (_b = styles) === null || _b === void 0 ? void 0 : _b.nav };
    var nextProps = {
        className: (_c = classNames) === null || _c === void 0 ? void 0 : _c.navNext,
        style: (_d = styles) === null || _d === void 0 ? void 0 : _d.navNext
    };
    var prevProps = {
        className: (_e = classNames) === null || _e === void 0 ? void 0 : _e.navPrev,
        style: (_f = styles) === null || _f === void 0 ? void 0 : _f.navPrev
    };
    return {
        containerProps: containerProps,
        nextProps: nextProps,
        prevProps: prevProps
    };
}

/**
 * Renders the buttons to navigate between months.
 *
 * @category Components
 */
function Navigation(props) {
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
    var prevButton = prevLabel && (createElement("button", __assign({}, prevProps, { key: "prev", disabled: !prevMonth, type: "button", onClick: handlePrevClick }), prevLabel));
    var nextButton = nextLabel && (createElement("button", __assign({}, nextProps, { key: "next", disabled: !nextMonth, type: "button", onClick: handleNextClick }), nextLabel));
    var buttons = [prevButton, nextButton];
    if (dayPickerProps.dir === "rtl") {
        buttons = buttons.reverse();
    }
    return createElement("div", __assign({}, containerProps), buttons);
}

/**
 * List the default CSS class names. Class names can be overridden using the
 * [[classNames]] prop.
 *
 * @readonly
 */
var defaultClassNames = {
    root: "rdp",
    caption: "rdp-caption",
    // Day Component
    day: "rdp-day",
    dayWrapper: "rdp-day_wrapper",
    // Month Component
    month: "rdp-month",
    monthTable: "rdp-month_table",
    monthTbody: "rdp-month_tbody",
    months: "rdp-months",
    // Head Components
    head: "rdp-head",
    headRow: "rdp-head_row",
    headWeekNumber: "rdp-head_weeknumber",
    headWeekName: "rdp-head_weekname",
    // Navigation Component
    nav: "rdp-nav",
    navPrev: "rdp-nav_prev",
    navNext: "rdp-nav_next",
    // Week Component
    week: "rdp-week",
    weekDay: "rdp-week_day",
    weekWeeknumber: "rdp-week_weeknumber",
    // WeekNumber component
    weekNumber: "rdp-weeknumber",
    // Modifiers
    selected: "rdp-day_selected",
    disabled: "rdp-day_disabled",
    today: "rdp-day_today",
    outsideend: "rdp-day_outside",
    outsidestart: "rdp-day_outside"
};

/**
 * The default function used to format the caption. Use the [[formatCaption]]
 * prop to use another function.
 *
 * @return {string} The month using the `"LLLL Y:` [format
 * string](https://date-fns.org/docs/format).
 * @private
 */
function defaultFormatCaption(month, formatOptions) {
    return format(month, "LLLL Y", formatOptions);
}

/**
 * The default function used to format the day date. Use the [[formatDay]] prop
 * to use another function.
 *
 * @return {string} The day formatted the `"d"` [format
 * string](https://date-fns.org/docs/format).
 * @private
 */
function defaultFormatDay(day, formatOptions) {
    return format(day, "d", formatOptions);
}

/**
 * The default function used to format the week number. Use the
 * [[formatWeekNumber]] prop to use another function.
 *
 * @return {string} The weeknumber formatted as string.
 * @private
 */
function defaultFormatWeekNumber(weekNumber) {
    return "" + weekNumber;
}

/**
 * The default function used to format the day. Use the [[formatWeekdayName]]
 * prop to use another function.
 *
 * @return {string} The day formatted the `"E"` [format
 * string](https://date-fns.org/docs/format).
 * @private
 */
function defaultFormatWeekdayName(day, formatOptions) {
    return format(day, "E", formatOptions);
}

/**
 * List the default props used by the [[DayPicker]] component.
 *
 * @readonly
 */
var defaultProps = {
    enableOutsideDaysClick: false,
    classNames: defaultClassNames,
    className: "",
    style: {},
    styles: {},
    swizzle: {
        MonthCaption: MonthCaption,
        Day: Day,
        Navigation: Navigation,
        WeekNumber: WeekNumber
    },
    fixedWeeks: false,
    formatCaption: defaultFormatCaption,
    formatDay: defaultFormatDay,
    formatWeekdayName: defaultFormatWeekdayName,
    formatWeekNumber: defaultFormatWeekNumber,
    locale: english,
    nextLabel: "▶",
    modifiersClassNames: {},
    modifiersStyles: {},
    month: startOfMonth(new Date()),
    numberOfMonths: 1,
    pagedNavigation: false,
    prevLabel: "◀",
    reverseMonths: false,
    showCaption: true,
    showHead: true,
    showNavigation: true,
    showOutsideDays: false,
    showWeekNumber: false
};

/**
 * Render the months and the navigation.
 *
 * @private
 * @category Components
 */
function Months(initialProps) {
    if (initialProps === void 0) { initialProps = defaultProps; }
    var _a, _b, _c, _d;
    // Extend props with defaults
    var swizzle = Object.assign({}, defaultProps.swizzle, initialProps.swizzle);
    var classNames = Object.assign({}, defaultProps.classNames, initialProps.classNames);
    var props = __assign(__assign(__assign({}, defaultProps), filterUndefinedProps(initialProps)), { swizzle: swizzle,
        classNames: classNames });
    // From `style` prop
    var style = __assign(__assign({}, (_a = props.styles) === null || _a === void 0 ? void 0 : _a.root), props.style);
    // From `className prop`
    var className = [((_b = props.classNames) === null || _b === void 0 ? void 0 : _b.root) || ""];
    if (props.className) {
        className.concat(props.className.split(" "));
    }
    var months = getMonths(props);
    var Navigation = (_c = props.swizzle) === null || _c === void 0 ? void 0 : _c.Navigation;
    return (React__default.createElement("div", { className: className.join(" "), style: style, dir: props.dir },
        props.showNavigation && React__default.createElement(Navigation, { dayPickerProps: props }),
        React__default.createElement("div", { className: (_d = props.classNames) === null || _d === void 0 ? void 0 : _d.months, style: props.styles ? props.styles.month : undefined }, months.map(function (month) { return (React__default.createElement(MonthTable, { key: getTime(month), month: month, dayPickerProps: props })); }))));
}

/**
 * Render a day picker.
 *
 * [[include:../guides/swizzling.md]]
 *
 * @param {DayPickerProps} props
 * @category Components
 */
function DayPicker(props) {
    if (props === void 0) { props = defaultProps; }
    // const props = arguments[0];
    var isControlled = Boolean(props.month);
    var _a = useState(startOfMonth(props.initialMonth || new Date())), currentMonth = _a[0], setCurrentMonth = _a[1];
    function handleMonthChange(month, e) {
        setCurrentMonth(month);
        if (props.onMonthChange)
            props.onMonthChange(month, e);
    }
    return (createElement(Months, __assign({}, props, { onMonthChange: !isControlled ? handleMonthChange : props.onMonthChange, month: isControlled ? props.month : currentMonth })));
}

/**
 * List the names of the default modifiers.
 */
var DefaultModifiersNames;
(function (DefaultModifiersNames) {
    /**
     * The day is disabled.
     */
    DefaultModifiersNames["DISABLED"] = "disabled";
    /**
     * The day is hidden.
     */
    DefaultModifiersNames["HIDDEN"] = "hidden";
    /**
     * The day is interactive.
     */
    DefaultModifiersNames["INTERACTIVE"] = "interactive";
    /**
     * The day is outside.
     */
    DefaultModifiersNames["OUTSIDE_END"] = "outside-end";
    /**
     * The day is outside.
     */
    DefaultModifiersNames["OUTSIDE_START"] = "outside-start";
    /**
     * The day is selected.
     */
    DefaultModifiersNames["SELECTED"] = "selected";
    /**
     * The day is today.
     */
    DefaultModifiersNames["TODAY"] = "today";
})(DefaultModifiersNames || (DefaultModifiersNames = {}));

/**
 * @private
 */
function isValidDate(day) {
    return !isNaN(day.getTime());
}
/**
 * Hook to bind a input with a calendar.
 *
 * ```jsx
 * const {
 *  month,
 *  selected,
 *  dayPickerProps,
 *  inputProps
 * } = useInput(new Date());
 *
 * <DayPicker {...dayPickerProps} />
 * <input {...inputProps} />
 * ```
 */
function useInput(initialSelectedDay, formatStr, options) {
    var opts = __assign({ locale: defaultProps.locale, required: false }, options);
    var initialInputValue = initialSelectedDay
        ? format(initialSelectedDay, formatStr, opts)
        : "";
    var _a = useState(initialSelectedDay), selectedDay = _a[0], setSelectedDay = _a[1];
    var _b = useState(initialInputValue), inputValue = _b[0], setInputValue = _b[1];
    var _c = useState(initialSelectedDay || new Date()), currentMonth = _c[0], setCurrentMonth = _c[1];
    function onChange(e) {
        var el = e.target;
        setInputValue(el.value);
        var day = parse(el.value, formatStr, new Date(), opts);
        if (!isValidDate(day)) {
            setSelectedDay(undefined);
            return;
        }
        setSelectedDay(day);
        setCurrentMonth(day); // Update the month shown in the calendar.
    }
    function onBlur(e) {
        var el = e.target;
        var day = parse(el.value, formatStr, new Date(), opts);
        if (isValidDate(day) || !opts.required) {
            if (onBlur)
                onBlur(e);
            return;
        }
        setSelectedDay(initialSelectedDay);
        setCurrentMonth(initialSelectedDay || new Date());
        setInputValue(initialInputValue || "");
    }
    function onFocus(e) {
        var el = e.target;
        if (el.value) {
            var day = parse(el.value, formatStr, new Date(), opts);
            if (isValidDate(day)) {
                setCurrentMonth(day);
            }
            if (onFocus)
                onFocus(e);
            return;
        }
        setSelectedDay(initialSelectedDay);
        setCurrentMonth(initialSelectedDay || new Date());
        setInputValue(initialInputValue || "");
        if (onFocus)
            onFocus(e);
    }
    function onDayClick(day, modifiers) {
        if (modifiers.selected) {
            if (!opts.required) {
                setSelectedDay(undefined);
                setInputValue("");
            }
            return;
        }
        setSelectedDay(day);
        var value = format(day, formatStr, opts);
        setInputValue(value);
    }
    function onMonthChange(month) {
        setCurrentMonth(month);
    }
    return {
        month: currentMonth,
        selected: selectedDay,
        dayPickerProps: { onDayClick: onDayClick, onMonthChange: onMonthChange },
        inputProps: {
            value: inputValue,
            onChange: onChange,
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}

export { Day, DayPicker, MonthCaption, Navigation, WeekNumber, defaultClassNames, defaultModifiers, getCaptionProps, getDayProps, getNavigation, getNavigationProps, useInput };
//# sourceMappingURL=index.esm.js.map
