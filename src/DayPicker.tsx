import React, { useCallback, useMemo } from "react";
import type {
  ChangeEventHandler,
  MouseEvent,
  FocusEvent,
  KeyboardEvent
} from "react";

import { UI, DayFlag, SelectionState } from "./UI.js";
import type { CalendarDay } from "./classes/CalendarDay.js";
import { getClassNamesForModifiers } from "./helpers/getClassNamesForModifiers.js";
import { getComponents } from "./helpers/getComponents.js";
import { getDataAttributes } from "./helpers/getDataAttributes.js";
import { getDateLib } from "./helpers/getDateLib.js";
import { getDefaultClassNames } from "./helpers/getDefaultClassNames.js";
import { getFormatters } from "./helpers/getFormatters.js";
import { getMonthOptions } from "./helpers/getMonthOptions.js";
import { getStyleForModifiers } from "./helpers/getStyleForModifiers.js";
import { getWeekdays } from "./helpers/getWeekdays.js";
import { getYearOptions } from "./helpers/getYearOptions.js";
import * as defaultLabels from "./labels/index.js";
import type { FormatOptions, LabelOptions } from "./lib/dateLib.js";
import { enUS } from "./lib/locales.js";
import type {
  DayPickerProps,
  Modifiers,
  MoveFocusBy,
  MoveFocusDir,
  SelectedValue,
  SelectHandler
} from "./types/index.js";
import { useCalendar } from "./useCalendar.js";
import { type DayPickerContext, dayPickerContext } from "./useDayPicker.js";
import { useFocus } from "./useFocus.js";
import { useGetModifiers } from "./useGetModifiers.js";
import { useSelection } from "./useSelection.js";
import { rangeIncludesDate } from "./utils/rangeIncludesDate.js";
import { isDateRange } from "./utils/typeguards.js";

/**
 * Render the date picker calendar.
 *
 * @group DayPicker
 * @see https://daypicker.dev
 */
export function DayPicker(props: DayPickerProps) {
  const { components, formatters, labels, dateLib, locale, classNames } =
    useMemo(
      () => ({
        dateLib: getDateLib(props.dateLib),
        components: getComponents(props.components),
        formatters: getFormatters(props.formatters),
        labels: { ...defaultLabels, ...props.labels },
        locale: { ...enUS, ...props.locale },
        classNames: { ...getDefaultClassNames(), ...props.classNames }
      }),
      [
        props.classNames,
        props.components,
        props.dateLib,
        props.formatters,
        props.labels,
        props.locale
      ]
    );

  const {
    captionLayout,
    firstWeekContainsDate,
    mode,
    onDayBlur,
    onDayClick,
    onDayFocus,
    onDayKeyDown,
    onDayMouseEnter,
    onDayMouseLeave,
    onNextClick,
    onPrevClick,
    showWeekNumber,
    styles,
    useAdditionalDayOfYearTokens,
    useAdditionalWeekYearTokens,
    weekStartsOn
  } = props;

  const formatOptions: FormatOptions = {
    locale,
    weekStartsOn,
    firstWeekContainsDate,
    useAdditionalWeekYearTokens,
    useAdditionalDayOfYearTokens
  };

  const labelOptions: LabelOptions = formatOptions;

  const {
    formatCaption,
    formatDay,
    formatMonthDropdown,
    formatWeekNumber,
    formatWeekNumberHeader,
    formatWeekdayName,
    formatYearDropdown
  } = formatters;

  const calendar = useCalendar(props, dateLib);

  const {
    days,
    months,
    navStart,
    navEnd,
    previousMonth,
    nextMonth,
    goToMonth
  } = calendar;

  const getModifiers = useGetModifiers(days, props, dateLib);

  const {
    isSelected,
    select,
    selected: selectedValue
  } = useSelection(props, dateLib) ?? {};

  const { blur, focused, isFocusTarget, moveFocus, setFocused } = useFocus(
    props,
    calendar,
    getModifiers,
    isSelected ?? (() => false),
    dateLib
  );

  const {
    labelDayButton,
    labelGridcell,
    labelGrid,
    labelMonthDropdown,
    labelNav,
    labelNext,
    labelPrevious,
    labelWeekday,
    labelWeekNumber,
    labelWeekNumberHeader,
    labelYearDropdown
  } = labels;

  const weekdays = useMemo(
    () => getWeekdays(locale, props.weekStartsOn, props.ISOWeek, dateLib),
    [dateLib, locale, props.ISOWeek, props.weekStartsOn]
  );

  const isInteractive = mode !== undefined || onDayClick !== undefined;

  const handlePreviousClick = useCallback(() => {
    if (!previousMonth) return;
    goToMonth(previousMonth);
    onPrevClick?.(previousMonth);
  }, [previousMonth, goToMonth, onPrevClick]);

  const handleNextClick = useCallback(() => {
    if (!nextMonth) return;
    goToMonth(nextMonth);
    onNextClick?.(nextMonth);
  }, [goToMonth, nextMonth, onNextClick]);

  const handleDayClick = useCallback(
    (day: CalendarDay, m: Modifiers) => (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setFocused(day);
      select?.(day.date, m, e);
      onDayClick?.(day.date, m, e);
    },
    [select, onDayClick, setFocused]
  );

  const handleDayFocus = useCallback(
    (day: CalendarDay, m: Modifiers) => (e: FocusEvent) => {
      setFocused(day);
      onDayFocus?.(day.date, m, e);
    },
    [onDayFocus, setFocused]
  );

  const handleDayBlur = useCallback(
    (day: CalendarDay, m: Modifiers) => (e: FocusEvent) => {
      blur();
      onDayBlur?.(day.date, m, e);
    },
    [blur, onDayBlur]
  );

  const handleDayKeyDown = useCallback(
    (day: CalendarDay, modifiers: Modifiers) => (e: KeyboardEvent) => {
      const keyMap: Record<string, [MoveFocusBy, MoveFocusDir]> = {
        ArrowLeft: ["day", props.dir === "rtl" ? "after" : "before"],
        ArrowRight: ["day", props.dir === "rtl" ? "before" : "after"],
        ArrowDown: ["week", "after"],
        ArrowUp: ["week", "before"],
        PageUp: [e.shiftKey ? "year" : "month", "before"],
        PageDown: [e.shiftKey ? "year" : "month", "after"],
        Home: ["startOfWeek", "before"],
        End: ["endOfWeek", "after"]
      };
      if (keyMap[e.key]) {
        e.preventDefault();
        e.stopPropagation();
        const [moveBy, moveDir] = keyMap[e.key];
        moveFocus(moveBy, moveDir);
      }
      onDayKeyDown?.(day.date, modifiers, e);
    },
    [moveFocus, onDayKeyDown, props.dir]
  );

  const handleDayMouseEnter = useCallback(
    (day: CalendarDay, modifiers: Modifiers) => (e: MouseEvent) => {
      onDayMouseEnter?.(day.date, modifiers, e);
    },
    [onDayMouseEnter]
  );

  const handleDayMouseLeave = useCallback(
    (day: CalendarDay, modifiers: Modifiers) => (e: MouseEvent) => {
      onDayMouseLeave?.(day.date, modifiers, e);
    },
    [onDayMouseLeave]
  );

  const { className, style } = useMemo(
    () => ({
      className: [classNames[UI.Root], props.className]
        .filter(Boolean)
        .join(" "),
      style: { ...styles?.[UI.Root], ...props.style }
    }),
    [classNames, props.className, props.style, styles]
  );

  const dataAttributes = getDataAttributes(props);

  const contextValue: DayPickerContext<DayPickerProps> = {
    selected: selectedValue as SelectedValue<DayPickerProps>,
    select: select as SelectHandler<DayPickerProps>,
    isSelected,
    months,
    nextMonth,
    previousMonth,
    goToMonth,
    getModifiers,
    components,
    classNames,
    styles,
    labels,
    formatters
  };

  return (
    <dayPickerContext.Provider value={contextValue}>
      <components.Root
        className={className}
        style={style}
        dir={props.dir}
        id={props.id}
        lang={props.lang}
        nonce={props.nonce}
        title={props.title}
        {...dataAttributes}
      >
        <components.Months
          className={classNames[UI.Months]}
          style={styles?.[UI.Months]}
        >
          {!props.hideNavigation && (
            <components.Nav
              role="navigation"
              className={classNames[UI.Nav]}
              style={styles?.[UI.Nav]}
              aria-label={labelNav()}
            >
              <components.Button
                type="button"
                className={classNames[UI.ButtonPrevious]}
                tabIndex={previousMonth ? undefined : -1}
                disabled={previousMonth ? undefined : true}
                aria-label={labelPrevious(previousMonth, labelOptions)}
                onClick={handlePreviousClick}
              >
                <components.Chevron
                  disabled={previousMonth ? undefined : true}
                  className={classNames[UI.Chevron]}
                  orientation="left"
                />
              </components.Button>
              <components.Button
                type="button"
                className={classNames[UI.ButtonNext]}
                tabIndex={nextMonth ? undefined : -1}
                disabled={nextMonth ? undefined : true}
                aria-label={labelNext(nextMonth, labelOptions)}
                onClick={handleNextClick}
              >
                <components.Chevron
                  disabled={previousMonth ? undefined : true}
                  orientation="right"
                  className={classNames[UI.Chevron]}
                />
              </components.Button>
            </components.Nav>
          )}
          {months.map((calendarMonth, displayIndex) => {
            const handleMonthChange: ChangeEventHandler<HTMLSelectElement> = (
              e
            ) => {
              const selectedMonth = Number(
                (e.target as HTMLSelectElement).value
              );
              const month = dateLib.setMonth(
                dateLib.startOfMonth(calendarMonth.date),
                selectedMonth
              );
              goToMonth(month);
            };

            const handleYearChange: ChangeEventHandler<HTMLSelectElement> = (
              e
            ) => {
              const month = dateLib.setYear(
                dateLib.startOfMonth(calendarMonth.date),
                Number(e.target.value)
              );
              goToMonth(month);
            };

            const dropdownMonths = getMonthOptions(
              calendarMonth.date,
              navStart,
              navEnd,
              formatters,
              locale,
              dateLib
            );

            const dropdownYears = getYearOptions(
              months[0].date,
              navStart,
              navEnd,
              formatters,
              dateLib
            );

            return (
              <components.Month
                className={classNames[UI.Month]}
                style={styles?.[UI.Month]}
                key={displayIndex}
                displayIndex={displayIndex}
                calendarMonth={calendarMonth}
              >
                <components.MonthCaption
                  className={classNames[UI.MonthCaption]}
                  style={styles?.[UI.MonthCaption]}
                  calendarMonth={calendarMonth}
                  displayIndex={displayIndex}
                >
                  {captionLayout?.startsWith("dropdown") ? (
                    <components.DropdownNav
                      className={classNames[UI.Dropdowns]}
                      style={styles?.[UI.Dropdowns]}
                    >
                      {captionLayout === "dropdown" ||
                      captionLayout === "dropdown-months" ? (
                        <components.Dropdown
                          className={classNames[UI.MonthsDropdown]}
                          aria-label={labelMonthDropdown()}
                          classNames={classNames}
                          components={components}
                          disabled={Boolean(props.disableNavigation)}
                          onChange={handleMonthChange}
                          options={dropdownMonths}
                          style={styles?.[UI.Dropdown]}
                          value={calendarMonth.date.getMonth()}
                        />
                      ) : (
                        <span role="status" aria-live="polite">
                          {formatMonthDropdown(calendarMonth.date.getMonth())}
                        </span>
                      )}
                      {captionLayout === "dropdown" ||
                      captionLayout === "dropdown-years" ? (
                        <components.Dropdown
                          className={classNames[UI.YearsDropdown]}
                          aria-label={labelYearDropdown(labelOptions)}
                          classNames={classNames}
                          components={components}
                          disabled={Boolean(props.disableNavigation)}
                          onChange={handleYearChange}
                          options={dropdownYears}
                          style={styles?.[UI.Dropdown]}
                          value={calendarMonth.date.getFullYear()}
                        />
                      ) : (
                        <span role="status" aria-live="polite">
                          {formatYearDropdown(calendarMonth.date.getFullYear())}
                        </span>
                      )}
                    </components.DropdownNav>
                  ) : (
                    <components.CaptionLabel
                      className={classNames[UI.CaptionLabel]}
                      role="status"
                      aria-live="polite"
                    >
                      {formatCaption(
                        calendarMonth.date,
                        formatOptions,
                        dateLib
                      )}
                    </components.CaptionLabel>
                  )}
                </components.MonthCaption>
                <components.MonthGrid
                  role="grid"
                  aria-multiselectable={mode === "multiple" || mode === "range"}
                  aria-label={
                    labelGrid(calendarMonth.date, labelOptions, dateLib) ||
                    undefined
                  }
                  className={classNames[UI.MonthGrid]}
                  style={styles?.[UI.MonthGrid]}
                >
                  {!props.hideWeekdays && (
                    <components.Weekdays
                      className={classNames[UI.Weekdays]}
                      role="row"
                      style={styles?.[UI.Weekdays]}
                    >
                      {showWeekNumber && (
                        <components.WeekNumberHeader
                          aria-label={labelWeekNumberHeader(labelOptions)}
                          className={classNames[UI.WeekNumberHeader]}
                          role="columnheader"
                          style={styles?.[UI.WeekNumberHeader]}
                        >
                          {formatWeekNumberHeader()}
                        </components.WeekNumberHeader>
                      )}
                      {weekdays.map((weekday, i) => (
                        <components.Weekday
                          aria-label={labelWeekday(
                            weekday,
                            labelOptions,
                            dateLib
                          )}
                          className={classNames[UI.Weekday]}
                          key={i}
                          role="columnheader"
                          style={styles?.[UI.Weekday]}
                        >
                          {formatWeekdayName(weekday, formatOptions, dateLib)}
                        </components.Weekday>
                      ))}
                    </components.Weekdays>
                  )}
                  <components.Weeks
                    className={classNames[UI.Weeks]}
                    role="rowgroup"
                    style={styles?.[UI.Weeks]}
                  >
                    {calendarMonth.weeks.map((week, weekIndex) => {
                      return (
                        <components.Week
                          className={classNames[UI.Week]}
                          key={week.weekNumber}
                          role="row"
                          style={styles?.[UI.Week]}
                          week={week}
                        >
                          {showWeekNumber && (
                            <components.WeekNumber
                              week={week}
                              role="rowheader"
                              style={styles?.[UI.WeekNumber]}
                              aria-label={labelWeekNumber(week.weekNumber, {
                                locale
                              })}
                              className={classNames[UI.WeekNumber]}
                            >
                              {formatWeekNumber(week.weekNumber)}
                            </components.WeekNumber>
                          )}
                          {week.days.map((day: CalendarDay) => {
                            const { date } = day;
                            const modifiers = getModifiers(day);

                            modifiers[DayFlag.focused] =
                              !modifiers.hidden &&
                              Boolean(focused?.isEqualTo(day));

                            modifiers[SelectionState.selected] =
                              !modifiers.disabled &&
                              (isSelected?.(date) || modifiers.selected);

                            if (isDateRange(selectedValue)) {
                              // add range modifiers
                              const { from, to } = selectedValue;
                              modifiers[SelectionState.range_start] = Boolean(
                                from && to && dateLib.isSameDay(date, from)
                              );
                              modifiers[SelectionState.range_end] = Boolean(
                                from && to && dateLib.isSameDay(date, to)
                              );
                              modifiers[SelectionState.range_middle] =
                                rangeIncludesDate(
                                  selectedValue,
                                  date,
                                  true,
                                  dateLib
                                );
                            }

                            const style = getStyleForModifiers(
                              modifiers,
                              styles,
                              props.modifiersStyles
                            );

                            const className = getClassNamesForModifiers(
                              modifiers,
                              classNames,
                              props.modifiersClassNames
                            );

                            const ariaLabel = !isInteractive
                              ? labelGridcell(
                                  date,
                                  modifiers,
                                  labelOptions,
                                  dateLib
                                )
                              : undefined;

                            return (
                              <components.Day
                                key={`${dateLib.format(date, "yyyy-MM-dd")}_${dateLib.format(day.displayMonth, "yyyy-MM")}`}
                                day={day}
                                modifiers={modifiers}
                                role="gridcell"
                                className={className.join(" ")}
                                style={style}
                                aria-hidden={modifiers.hidden || undefined}
                                aria-selected={modifiers.selected || undefined}
                                aria-label={ariaLabel}
                                data-day={dateLib.format(date, "yyyy-MM-dd")}
                                data-month={
                                  day.outside
                                    ? dateLib.format(date, "yyyy-MM")
                                    : undefined
                                }
                                data-selected={modifiers.selected || undefined}
                                data-disabled={modifiers.disabled || undefined}
                                data-hidden={modifiers.hidden || undefined}
                                data-outside={day.outside || undefined}
                                data-focused={modifiers.focused || undefined}
                                data-today={modifiers.today || undefined}
                              >
                                {isInteractive ? (
                                  <components.DayButton
                                    className={classNames[UI.DayButton]}
                                    style={styles?.[UI.DayButton]}
                                    day={day}
                                    modifiers={modifiers}
                                    disabled={modifiers.disabled || undefined}
                                    tabIndex={isFocusTarget(day) ? 0 : -1}
                                    aria-label={labelDayButton(
                                      date,
                                      modifiers,
                                      labelOptions,
                                      dateLib
                                    )}
                                    onClick={handleDayClick(day, modifiers)}
                                    onBlur={handleDayBlur(day, modifiers)}
                                    onFocus={handleDayFocus(day, modifiers)}
                                    onKeyDown={handleDayKeyDown(day, modifiers)}
                                    onMouseEnter={handleDayMouseEnter(
                                      day,
                                      modifiers
                                    )}
                                    onMouseLeave={handleDayMouseLeave(
                                      day,
                                      modifiers
                                    )}
                                  >
                                    {formatDay(date, formatOptions, dateLib)}
                                  </components.DayButton>
                                ) : (
                                  formatDay(day.date, formatOptions, dateLib)
                                )}
                              </components.Day>
                            );
                          })}
                        </components.Week>
                      );
                    })}
                  </components.Weeks>
                </components.MonthGrid>
              </components.Month>
            );
          })}
        </components.Months>
        {props.footer && (
          <components.Footer
            className={classNames[UI.Footer]}
            style={styles?.[UI.Footer]}
            role="status"
            aria-live="polite"
          >
            {props.footer}
          </components.Footer>
        )}
      </components.Root>
    </dayPickerContext.Provider>
  );
}
