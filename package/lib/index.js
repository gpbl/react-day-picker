'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib = require('tslib');
var React = require('react');
var dateFns = require('date-fns');
var locale = _interopDefault(require('date-fns/locale/en-US'));

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
    return (React.createElement("caption", tslib.__assign({}, containerProps), dayPickerProps.formatCaption(month, { locale: locale })));
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
    var style = tslib.__assign({}, styles.day);
    if (styles) {
        // Apply the custom inline-styles
        Object.keys(modifiers).forEach(function (modifier) {
            style = tslib.__assign(tslib.__assign({}, style), styles[modifier]);
        });
    }
    if (modifiersStyles) {
        // Apply the styles for the modifier
        Object.keys(modifiers).forEach(function (modifier) {
            style = tslib.__assign(tslib.__assign({}, style), modifiersStyles[modifier]);
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
    var containerProps = tslib.__assign({ 'aria-disabled': !modifiers.interactive || undefined, disabled: modifiers.disabled || undefined, onClick: onClick,
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
    return (React.createElement(Component, tslib.__assign({}, containerProps),
        React.createElement("span", tslib.__assign({}, wrapperProps), formatDay(day, { locale: locale }))));
};

/**
 * Get the months to render in DayPicker according to the passed
 * `numberOfMonths` and other month-related props.
 */
function getMonths(props) {
    var _a = props.month, month = _a === void 0 ? new Date() : _a, numberOfMonths = props.numberOfMonths, toMonth = props.toMonth, fromMonth = props.fromMonth, reverseMonths = props.reverseMonths;
    var start = dateFns.startOfMonth(month);
    var end = dateFns.startOfMonth(dateFns.addMonths(start, numberOfMonths));
    var monthsDiff = dateFns.differenceInMonths(end, start);
    var months = [];
    for (var i = 0; i < monthsDiff; i++) {
        var month_1 = dateFns.addMonths(start, i);
        if (toMonth && month_1 > dateFns.startOfMonth(toMonth)) {
            // Skip months after toMonth
            continue;
        }
        if (fromMonth && month_1 < dateFns.startOfMonth(fromMonth)) {
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
    var currentMonth = dateFns.startOfMonth(month || new Date());
    var prevMonth;
    if (!fromMonth || currentMonth > dateFns.startOfMonth(fromMonth)) {
        prevMonth = dateFns.addMonths(currentMonth, add * -1);
    }
    var nextMonth;
    if (!toMonth ||
        dateFns.addMonths(currentMonth, numberOfMonths) <= dateFns.startOfMonth(toMonth)) {
        nextMonth = dateFns.addMonths(currentMonth, add);
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
    var prevButton = prevLabel && (React.createElement("button", tslib.__assign({}, prevProps, { key: "prev", disabled: !prevMonth, type: "button", onClick: handlePrevClick }), prevLabel));
    var nextButton = nextLabel && (React.createElement("button", tslib.__assign({}, nextProps, { key: 'next', disabled: !nextMonth, type: "button", onClick: handleNextClick }), nextLabel));
    var buttons = [prevButton, nextButton];
    if (dayPickerProps.dir === 'rtl') {
        buttons = buttons.reverse();
    }
    return React.createElement("div", tslib.__assign({}, containerProps), buttons);
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
    return dateFns.format(day, 'd', formatOptions);
}
function formatCaption(month, formatOptions) {
    return dateFns.format(month, 'LLLL Y', formatOptions);
}
function formatWeekdayName(day, formatOptions) {
    return dateFns.format(day, 'E', formatOptions);
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
    month: dateFns.startOfMonth(new Date()),
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
    return dateFns.differenceInDays(day1, day2) > 0;
}
/**
 * Return true if `day1` is before `day2`.
 */
function isDayBefore(day1, day2) {
    return dateFns.differenceInDays(day1, day2) < 0;
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
            return dateFns.isSameDay(day, modifier);
        }
        if ('after' in modifier &&
            'before' in modifier &&
            dateFns.differenceInDays(modifier.before, modifier.after) > 0) {
            return (isDayAfter(day, modifier.after) && isDayBefore(day, modifier.before));
        }
        if ('after' in modifier &&
            'before' in modifier &&
            (isDayAfter(modifier.after, modifier.before) ||
                dateFns.isSameDay(modifier.after, modifier.before))) {
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
        var modifiers = tslib.__assign(tslib.__assign(tslib.__assign({}, defaultModifiers), { today: dateFns.isToday(date) }), initialModifiers);
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
    var firstDayOfWeek = dateFns.startOfWeek(day.date, { locale: locale });
    var startDiff = dateFns.differenceInDays(day.date, firstDayOfWeek);
    for (var i = 0; i < startDiff; i++) {
        var day_1 = dateFns.addDays(firstDayOfWeek, i);
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
    var lastDayOfWeek = dateFns.endOfWeek(day.date, { locale: locale });
    var endDiff = dateFns.differenceInDays(lastDayOfWeek, day.date);
    for (var i = 1; i <= endDiff; i++) {
        var dayDate = dateFns.addDays(day.date, i);
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
    var monthStart = dateFns.startOfMonth(month);
    var monthEnd = dateFns.endOfMonth(month);
    var diff = dateFns.differenceInDays(monthEnd, monthStart);
    var weeks = {};
    var lastWeekStr = '';
    for (var i = 0; i <= diff; i++) {
        var date = dateFns.addDays(monthStart, i);
        var dateWithModifiers = new DateWithModifiers(date, {}, props);
        var week = dateFns.getWeek(dateWithModifiers.date, { locale: locale });
        if (week === 1 && dateFns.getMonth(date) === 11) {
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
        var weeksInMonth = dateFns.getWeeksInMonth(month, { locale: locale });
        if (weeksInMonth < 6) {
            var diff_1 = dateFns.differenceInDays(dateFns.addWeeks(lastWeekDate, 6 - weeksInMonth), lastWeekDate);
            for (var i = 0; i < diff_1; i++) {
                var date = dateFns.addDays(lastWeekDate, i + 1);
                var dateWithModifiers = new DateWithModifiers(date, { outside: 'end' }, props);
                var week = dateFns.getWeek(date, { locale: locale });
                if (week === 1 && dateFns.getMonth(month) === 11) {
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
    var start = dateFns.startOfWeek(date, { locale: locale });
    var names = [];
    for (var i = 0; i < 7; i++) {
        var day = dateFns.addDays(start, i);
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
        week.map(function (day) { return (React.createElement("td", { className: classNames.weekDay, style: styles.weekDay, key: dateFns.getUnixTime(day.date) },
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
    var components = tslib.__assign(tslib.__assign({}, defaultProps.components), filterUndefinedProps(initialProps.components));
    var classNames = tslib.__assign(tslib.__assign({}, defaultProps.classNames), filterUndefinedProps(initialProps.classNames));
    var props = tslib.__assign(tslib.__assign(tslib.__assign({}, defaultProps), filterUndefinedProps(initialProps)), { components: components,
        classNames: classNames });
    // From `style` prop
    var style = tslib.__assign(tslib.__assign({}, props.styles.container), props.style);
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
        React.createElement("div", { className: props.classNames.months, style: props.styles ? props.styles.month : undefined }, months.map(function (month) { return (React.createElement(Month, { key: dateFns.getTime(month), month: month, dayPickerProps: props })); }))));
};
var DayPicker = function (initialProps) {
    var initialMonth = initialProps.initialMonth, props = tslib.__rest(initialProps, ["initialMonth"]);
    var isControlled = Boolean(props.month);
    var _a = React.useState(dateFns.startOfMonth(initialMonth || new Date())), currentMonth = _a[0], setCurrentMonth = _a[1];
    function handleMonthChange(month, e) {
        setCurrentMonth(month);
        if (props.onMonthChange) {
            props.onMonthChange(month, e);
        }
    }
    return (React.createElement(DayPickerControlled, tslib.__assign({}, props, { onMonthChange: !isControlled ? handleMonthChange : props.onMonthChange, month: isControlled ? props.month : currentMonth })));
};

function isValid(day) {
    return !isNaN(day.getTime());
}
var useInput = function (initialSelectedDay, formatStr, _options) {
    var options = tslib.__assign({ locale: defaultProps.locale, required: false }, _options);
    var initialInputValue = initialSelectedDay
        ? dateFns.format(initialSelectedDay, formatStr, options)
        : '';
    var _a = React.useState(initialSelectedDay), selectedDay = _a[0], setSelectedDay = _a[1];
    var _b = React.useState(initialInputValue), inputValue = _b[0], setInputValue = _b[1];
    var _c = React.useState(initialSelectedDay || new Date()), currentMonth = _c[0], setCurrentMonth = _c[1];
    function onChange(e) {
        var el = e.target;
        setInputValue(el.value);
        var day = dateFns.parse(el.value, formatStr, new Date(), options);
        if (!isValid(day)) {
            setSelectedDay(undefined);
            return;
        }
        setSelectedDay(day);
        setCurrentMonth(day); // Update the month shown in the calendar.
    }
    function onBlur(e) {
        var el = e.target;
        var day = dateFns.parse(el.value, formatStr, new Date(), options);
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
            var day = dateFns.parse(el.value, formatStr, new Date(), options);
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
        var value = dateFns.format(day, formatStr, options);
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
//# sourceMappingURL=index.js.map
