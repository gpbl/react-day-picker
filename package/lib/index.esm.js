import { __assign, __rest } from 'tslib';
import { isSameDay, differenceInDays, isToday, startOfMonth, addMonths, differenceInMonths, format, getTime, startOfWeek, addDays, endOfWeek, endOfMonth, getWeek, getMonth, getWeeksInMonth, addWeeks, getUnixTime, parse } from 'date-fns';
import { createElement, useState } from 'react';
import { Month as Month$1 } from 'components/Month';
import locale from 'date-fns/locale/en-US';
import { Caption as Caption$1 } from 'components/Caption/Caption';
import { Day as Day$1 } from 'components/Day/Day';
import { WeekNumber as WeekNumber$1 } from 'components/WeekNumber/WeekNumber';
import { Navigation as Navigation$1 } from 'components/Navigation/Navigation';
import { Head as Head$1 } from 'components/Head';
import { Week as Week$1 } from 'components/Week';
import { DateWithModifiers as DateWithModifiers$1 } from 'classes';
import { defaultProps as defaultProps$1 } from 'components';

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
    return (createElement("caption", __assign({}, containerProps), dayPickerProps.formatCaption(month, { locale: locale })));
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
        return createElement("span", null);
    }
    var Component = modifiers.interactive ? 'button' : 'span';
    return (createElement(Component, __assign({}, containerProps),
        createElement("span", __assign({}, wrapperProps), formatDay(day, { locale: locale }))));
};

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
        Caption: Caption$1,
        Day: Day$1,
        Navigation: Navigation$1,
        WeekNumber: WeekNumber$1,
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
    return (createElement("div", { className: classNameStr, style: style, dir: props.dir },
        props.showNavigation && createElement(Navigation, { dayPickerProps: props }),
        createElement("div", { className: props.classNames.months, style: props.styles ? props.styles.month : undefined }, months.map(function (month) { return (createElement(Month$1, { key: getTime(month), month: month, dayPickerProps: props })); }))));
};
var DayPicker = function (initialProps) {
    var initialMonth = initialProps.initialMonth, props = __rest(initialProps, ["initialMonth"]);
    var isControlled = Boolean(props.month);
    var _a = useState(startOfMonth(initialMonth || new Date())), currentMonth = _a[0], setCurrentMonth = _a[1];
    function handleMonthChange(month, e) {
        setCurrentMonth(month);
        if (props.onMonthChange) {
            props.onMonthChange(month, e);
        }
    }
    return (createElement(DayPickerControlled, __assign({}, props, { onMonthChange: !isControlled ? handleMonthChange : props.onMonthChange, month: isControlled ? props.month : currentMonth })));
};

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
    return (createElement("thead", { style: styles.head, className: classNames.head },
        createElement("tr", { style: styles.headRow, className: classNames.headRow },
            showWeekNumber && (createElement("th", { style: styles.headWeekNumber, className: classNames.headWeekNumber })),
            weekdayNames.map(function (name, i) { return (createElement("th", { key: i, scope: "col", style: styles.headWeekName, className: classNames.headWeekName }, name)); }))));
};

function getOutsideStartDays(day, props) {
    var locale = props.locale;
    var days = [];
    var firstDayOfWeek = startOfWeek(day.date, { locale: locale });
    var startDiff = differenceInDays(day.date, firstDayOfWeek);
    for (var i = 0; i < startDiff; i++) {
        var day_1 = addDays(firstDayOfWeek, i);
        var hidden = props.fromMonth && day_1 < props.fromMonth;
        var modifiers = { outside: 'start', hidden: hidden };
        var dateWithModifiers = new DateWithModifiers$1(day_1, modifiers, props);
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
        var dateWithModifiers = new DateWithModifiers$1(dayDate, modifiers, props);
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
        var dateWithModifiers = new DateWithModifiers$1(date, {}, props);
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
                var dateWithModifiers = new DateWithModifiers$1(date, { outside: 'end' }, props);
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

var Month = function (props) {
    var month = props.month, dayPickerProps = props.dayPickerProps;
    var locale = dayPickerProps.locale, classNames = dayPickerProps.classNames, styles = dayPickerProps.styles;
    var showCaption = dayPickerProps.showCaption, showHead = dayPickerProps.showHead;
    var Caption = dayPickerProps.components.Caption;
    var weeks = getWeeks(month, dayPickerProps);
    return (createElement("div", { className: classNames.month },
        createElement("table", { className: classNames.monthTable, style: styles.monthTable },
            showCaption && (createElement(Caption, { month: month, dayPickerProps: dayPickerProps })),
            showHead && (createElement(Head$1, { locale: locale, showWeekNumber: dayPickerProps.showWeekNumber, dayPickerProps: dayPickerProps })),
            createElement("tbody", { className: classNames.monthTbody, style: styles.monthTbody }, Object.keys(weeks).map(function (weekNumber) { return (createElement(Week$1, { key: weekNumber, week: weeks[weekNumber], weekNumber: Number(weekNumber), dayPickerProps: dayPickerProps })); })))));
};

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
    var prevButton = prevLabel && (createElement("button", __assign({}, prevProps, { key: "prev", disabled: !prevMonth, type: "button", onClick: handlePrevClick }), prevLabel));
    var nextButton = nextLabel && (createElement("button", __assign({}, nextProps, { key: 'next', disabled: !nextMonth, type: "button", onClick: handleNextClick }), nextLabel));
    var buttons = [prevButton, nextButton];
    if (dayPickerProps.dir === 'rtl') {
        buttons = buttons.reverse();
    }
    return createElement("div", __assign({}, containerProps), buttons);
};

var Week = function (props) {
    var weekNumber = props.weekNumber, week = props.week, dayPickerProps = props.dayPickerProps;
    var showWeekNumber = dayPickerProps.showWeekNumber, classNames = dayPickerProps.classNames, styles = dayPickerProps.styles, components = dayPickerProps.components;
    var Day = components.Day, WeekNumber = components.WeekNumber;
    return (createElement("tr", { className: classNames.week, style: styles.week },
        showWeekNumber && (createElement("th", { className: classNames.weekWeeknumber, style: styles.weekWeeknumber },
            createElement(WeekNumber, { days: week.map(function (day) { return day.date; }), number: Number(weekNumber), dayPickerProps: dayPickerProps }))),
        week.map(function (day) { return (createElement("td", { className: classNames.weekDay, style: styles.weekDay, key: getUnixTime(day.date) },
            createElement(Day, { day: day.date, modifiers: day.modifiers, dayPickerProps: dayPickerProps }))); })));
};

var WeekNumber = function (_a) {
    var number = _a.number, dayPickerProps = _a.dayPickerProps;
    var formatWeekNumber = dayPickerProps.formatWeekNumber, locale = dayPickerProps.locale, classNames = dayPickerProps.classNames, styles = dayPickerProps.styles;
    return (createElement("span", { className: classNames.weekNumber, style: styles.weekNumber }, formatWeekNumber(number, { locale: locale })));
};

function isValid(day) {
    return !isNaN(day.getTime());
}
var useInput = function (initialSelectedDay, formatStr, _options) {
    var options = __assign({ locale: defaultProps$1.locale, required: false }, _options);
    var initialInputValue = initialSelectedDay
        ? format(initialSelectedDay, formatStr, options)
        : '';
    var _a = useState(initialSelectedDay), selectedDay = _a[0], setSelectedDay = _a[1];
    var _b = useState(initialInputValue), inputValue = _b[0], setInputValue = _b[1];
    var _c = useState(initialSelectedDay || new Date()), currentMonth = _c[0], setCurrentMonth = _c[1];
    function onChange(e) {
        var el = e.target;
        setInputValue(el.value);
        var day = parse(el.value, formatStr, new Date(), options);
        if (!isValid(day)) {
            setSelectedDay(undefined);
            return;
        }
        setSelectedDay(day);
        setCurrentMonth(day); // Update the month shown in the calendar.
    }
    function onBlur(e) {
        var el = e.target;
        var day = parse(el.value, formatStr, new Date(), options);
        if (isValid(day) || !options.required) {
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
            if (isValid(day)) {
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

export { Caption, DateWithModifiers, Day, DayPicker, Head, Month, Navigation, Week, WeekNumber, defaultProps, useInput };
//# sourceMappingURL=index.esm.js.map
