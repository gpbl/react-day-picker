import React, { useCallback, useMemo, useRef } from "react";
import type { MouseEvent, FocusEvent, KeyboardEvent, ChangeEvent } from "react";

import { TZDate } from "@date-fns/tz";

import { UI, DayFlag, SelectionState } from "./UI.js";
import type { CalendarDay } from "./classes/CalendarDay.js";
import { DateLib, defaultLocale } from "./classes/DateLib.js";
import { getClassNamesForModifiers } from "./helpers/getClassNamesForModifiers.js";
import { getComponents } from "./helpers/getComponents.js";
import { getDataAttributes } from "./helpers/getDataAttributes.js";
import { getDefaultClassNames } from "./helpers/getDefaultClassNames.js";
import { getFormatters } from "./helpers/getFormatters.js";
import { getMonthOptions } from "./helpers/getMonthOptions.js";
import { getStyleForModifiers } from "./helpers/getStyleForModifiers.js";
import { getWeekdays } from "./helpers/getWeekdays.js";
import { getYearOptions } from "./helpers/getYearOptions.js";
import * as defaultLabels from "./labels/index.js";
import type {
  DayPickerProps,
  Modifiers,
  MoveFocusBy,
  MoveFocusDir,
  SelectedValue,
  SelectHandler
} from "./types/index.js";
import { useAnimation } from "./useAnimation.js";
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
export function DayPicker(initialProps: DayPickerProps) {
  let props = initialProps;

  if (props.timeZone) {
    props = {
      ...initialProps
    };
    if (props.today) {
      props.today = new TZDate(props.today, props.timeZone);
    }
    if (props.month) {
      props.month = new TZDate(props.month, props.timeZone);
    }
    if (props.defaultMonth) {
      props.defaultMonth = new TZDate(props.defaultMonth, props.timeZone);
    }
    if (props.startMonth) {
      props.startMonth = new TZDate(props.startMonth, props.timeZone);
    }
    if (props.endMonth) {
      props.endMonth = new TZDate(props.endMonth, props.timeZone);
    }
    if (props.mode === "single" && props.selected) {
      props.selected = new TZDate(props.selected, props.timeZone);
    } else if (props.mode === "multiple" && props.selected) {
      props.selected = props.selected?.map(
        (date) => new TZDate(date, props.timeZone)
      );
    } else if (props.mode === "range" && props.selected) {
      props.selected = {
        from: props.selected.from
          ? new TZDate(props.selected.from, props.timeZone)
          : undefined,
        to: props.selected.to
          ? new TZDate(props.selected.to, props.timeZone)
          : undefined
      };
    }
  }
  const { components, formatters, labels, dateLib, locale, classNames } =
    useMemo(() => {
      const locale = { ...defaultLocale, ...props.locale };

      const dateLib = new DateLib(
        {
          locale,
          weekStartsOn: props.broadcastCalendar ? 1 : props.weekStartsOn,
          firstWeekContainsDate: props.firstWeekContainsDate,
          useAdditionalWeekYearTokens: props.useAdditionalWeekYearTokens,
          useAdditionalDayOfYearTokens: props.useAdditionalDayOfYearTokens,
          timeZone: props.timeZone,
          numerals: props.numerals
        },
        props.dateLib
      );

      return {
        dateLib,
        components: getComponents(props.components),
        formatters: getFormatters(props.formatters),
        labels: { ...defaultLabels, ...props.labels },
        locale,
        classNames: { ...getDefaultClassNames(), ...props.classNames }
      };
    }, [
      props.locale,
      props.broadcastCalendar,
      props.weekStartsOn,
      props.firstWeekContainsDate,
      props.useAdditionalWeekYearTokens,
      props.useAdditionalDayOfYearTokens,
      props.timeZone,
      props.numerals,
      props.dateLib,
      props.components,
      props.formatters,
      props.labels,
      props.classNames
    ]);

  const {
    captionLayout,
    mode,
    navLayout,
    numberOfMonths = 1,
    onDayBlur,
    onDayClick,
    onDayFocus,
    onDayKeyDown,
    onDayMouseEnter,
    onDayMouseLeave,
    onNextClick,
    onPrevClick,
    showWeekNumber,
    styles
  } = props;

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
    labelPrevious,
    labelNext,
    labelWeekday,
    labelWeekNumber,
    labelWeekNumberHeader,
    labelYearDropdown
  } = labels;

  const weekdays = useMemo(
    () => getWeekdays(dateLib, props.ISOWeek),
    [dateLib, props.ISOWeek]
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

  const handleMonthChange = useCallback(
    (date: Date) => (e: ChangeEvent<HTMLSelectElement>) => {
      const selectedMonth = Number(e.target.value);
      const month = dateLib.setMonth(dateLib.startOfMonth(date), selectedMonth);
      goToMonth(month);
    },
    [dateLib, goToMonth]
  );

  const handleYearChange = useCallback(
    (date: Date) => (e: ChangeEvent<HTMLSelectElement>) => {
      const selectedYear = Number(e.target.value);
      const month = dateLib.setYear(dateLib.startOfMonth(date), selectedYear);
      goToMonth(month);
    },
    [dateLib, goToMonth]
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

  const rootElRef = useRef<HTMLDivElement>(null);
  useAnimation(rootElRef, Boolean(props.animate), {
    classNames,
    months,
    focused,
    dateLib
  });

  const contextValue: DayPickerContext<DayPickerProps> = {
    dayPickerProps: props,
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
        rootRef={props.animate ? rootElRef : undefined}
        className={className}
        style={style}
        dir={props.dir}
        id={props.id}
        lang={props.lang}
        nonce={props.nonce}
        title={props.title}
        role={props.role}
        aria-label={props["aria-label"]}
        {...dataAttributes}
      >
        <components.Months
          className={classNames[UI.Months]}
          style={styles?.[UI.Months]}
        >
          {!props.hideNavigation && !navLayout && (
            <components.Nav
              data-animated-nav={props.animate ? "true" : undefined}
              className={classNames[UI.Nav]}
              style={styles?.[UI.Nav]}
              aria-label={labelNav()}
              onPreviousClick={handlePreviousClick}
              onNextClick={handleNextClick}
              previousMonth={previousMonth}
              nextMonth={nextMonth}
            />
          )}
          {months.map((calendarMonth, displayIndex) => {
            const dropdownMonths = getMonthOptions(
              calendarMonth.date,
              navStart,
              navEnd,
              formatters,
              dateLib
            );

            const dropdownYears = getYearOptions(
              navStart,
              navEnd,
              formatters,
              dateLib
            );
            return (
              <components.Month
                data-animated-month={props.animate ? "true" : undefined}
                className={classNames[UI.Month]}
                style={styles?.[UI.Month]}
                key={displayIndex}
                displayIndex={displayIndex}
                calendarMonth={calendarMonth}
              >
                {navLayout === "around" &&
                  !props.hideNavigation &&
                  displayIndex === 0 && (
                    <components.PreviousMonthButton
                      type="button"
                      className={classNames[UI.PreviousMonthButton]}
                      tabIndex={previousMonth ? undefined : -1}
                      aria-disabled={previousMonth ? undefined : true}
                      aria-label={labelPrevious(previousMonth)}
                      onClick={handlePreviousClick}
                      data-animated-button={props.animate ? "true" : undefined}
                    >
                      <components.Chevron
                        disabled={previousMonth ? undefined : true}
                        className={classNames[UI.Chevron]}
                        orientation={props.dir === "rtl" ? "right" : "left"}
                      />
                    </components.PreviousMonthButton>
                  )}
                <components.MonthCaption
                  data-animated-caption={props.animate ? "true" : undefined}
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
                        <components.MonthsDropdown
                          className={classNames[UI.MonthsDropdown]}
                          aria-label={labelMonthDropdown()}
                          classNames={classNames}
                          components={components}
                          disabled={Boolean(props.disableNavigation)}
                          onChange={handleMonthChange(calendarMonth.date)}
                          options={dropdownMonths}
                          style={styles?.[UI.Dropdown]}
                          value={dateLib.getMonth(calendarMonth.date)}
                        />
                      ) : (
                        <span>
                          {formatMonthDropdown(calendarMonth.date, dateLib)}
                        </span>
                      )}
                      {captionLayout === "dropdown" ||
                      captionLayout === "dropdown-years" ? (
                        <components.YearsDropdown
                          className={classNames[UI.YearsDropdown]}
                          aria-label={labelYearDropdown(dateLib.options)}
                          classNames={classNames}
                          components={components}
                          disabled={Boolean(props.disableNavigation)}
                          onChange={handleYearChange(calendarMonth.date)}
                          options={dropdownYears}
                          style={styles?.[UI.Dropdown]}
                          value={dateLib.getYear(calendarMonth.date)}
                        />
                      ) : (
                        <span>
                          {formatYearDropdown(calendarMonth.date, dateLib)}
                        </span>
                      )}
                      <span
                        role="status"
                        aria-live="polite"
                        style={{
                          border: 0,
                          clip: "rect(0 0 0 0)",
                          height: "1px",
                          margin: "-1px",
                          overflow: "hidden",
                          padding: 0,
                          position: "absolute",
                          width: "1px",
                          whiteSpace: "nowrap",
                          wordWrap: "normal"
                        }}
                      >
                        {formatCaption(
                          calendarMonth.date,
                          dateLib.options,
                          dateLib
                        )}
                      </span>
                    </components.DropdownNav>
                  ) : (
                    <components.CaptionLabel
                      className={classNames[UI.CaptionLabel]}
                      role="status"
                      aria-live="polite"
                    >
                      {formatCaption(
                        calendarMonth.date,
                        dateLib.options,
                        dateLib
                      )}
                    </components.CaptionLabel>
                  )}
                </components.MonthCaption>
                {navLayout === "around" &&
                  !props.hideNavigation &&
                  displayIndex === numberOfMonths - 1 && (
                    <components.NextMonthButton
                      type="button"
                      className={classNames[UI.NextMonthButton]}
                      tabIndex={nextMonth ? undefined : -1}
                      aria-disabled={nextMonth ? undefined : true}
                      aria-label={labelNext(nextMonth)}
                      onClick={handleNextClick}
                      data-animated-button={props.animate ? "true" : undefined}
                    >
                      <components.Chevron
                        disabled={nextMonth ? undefined : true}
                        className={classNames[UI.Chevron]}
                        orientation={props.dir === "rtl" ? "left" : "right"}
                      />
                    </components.NextMonthButton>
                  )}

                <components.MonthGrid
                  role="grid"
                  aria-multiselectable={mode === "multiple" || mode === "range"}
                  aria-label={
                    labelGrid(calendarMonth.date, dateLib.options, dateLib) ||
                    undefined
                  }
                  className={classNames[UI.MonthGrid]}
                  style={styles?.[UI.MonthGrid]}
                >
                  {!props.hideWeekdays && (
                    <components.Weekdays
                      data-animated-weekdays={
                        props.animate ? "true" : undefined
                      }
                      className={classNames[UI.Weekdays]}
                      style={styles?.[UI.Weekdays]}
                    >
                      {showWeekNumber && (
                        <components.WeekNumberHeader
                          aria-label={labelWeekNumberHeader(dateLib.options)}
                          className={classNames[UI.WeekNumberHeader]}
                          style={styles?.[UI.WeekNumberHeader]}
                          scope="col"
                        >
                          {formatWeekNumberHeader()}
                        </components.WeekNumberHeader>
                      )}
                      {weekdays.map((weekday, i) => (
                        <components.Weekday
                          aria-label={labelWeekday(
                            weekday,
                            dateLib.options,
                            dateLib
                          )}
                          className={classNames[UI.Weekday]}
                          key={i}
                          style={styles?.[UI.Weekday]}
                          scope="col"
                        >
                          {formatWeekdayName(weekday, dateLib.options, dateLib)}
                        </components.Weekday>
                      ))}
                    </components.Weekdays>
                  )}
                  <components.Weeks
                    data-animated-weeks={props.animate ? "true" : undefined}
                    className={classNames[UI.Weeks]}
                    style={styles?.[UI.Weeks]}
                  >
                    {calendarMonth.weeks.map((week, weekIndex) => {
                      return (
                        <components.Week
                          className={classNames[UI.Week]}
                          key={week.weekNumber}
                          style={styles?.[UI.Week]}
                          week={week}
                        >
                          {showWeekNumber && (
                            <components.WeekNumber
                              week={week}
                              style={styles?.[UI.WeekNumber]}
                              aria-label={labelWeekNumber(week.weekNumber, {
                                locale
                              })}
                              className={classNames[UI.WeekNumber]}
                              scope="row"
                              role="rowheader"
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
                              isSelected?.(date) || modifiers.selected;

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

                            const ariaLabel =
                              !isInteractive && !modifiers.hidden
                                ? labelGridcell(
                                    date,
                                    modifiers,
                                    dateLib.options,
                                    dateLib
                                  )
                                : undefined;

                            return (
                              <components.Day
                                key={`${dateLib.format(date, "yyyy-MM-dd")}_${dateLib.format(day.displayMonth, "yyyy-MM")}`}
                                day={day}
                                modifiers={modifiers}
                                className={className.join(" ")}
                                style={style}
                                role="gridcell"
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
                                {!modifiers.hidden && isInteractive ? (
                                  <components.DayButton
                                    className={classNames[UI.DayButton]}
                                    style={styles?.[UI.DayButton]}
                                    type="button"
                                    day={day}
                                    modifiers={modifiers}
                                    disabled={modifiers.disabled || undefined}
                                    tabIndex={isFocusTarget(day) ? 0 : -1}
                                    aria-label={labelDayButton(
                                      date,
                                      modifiers,
                                      dateLib.options,
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
                                    {formatDay(date, dateLib.options, dateLib)}
                                  </components.DayButton>
                                ) : (
                                  !modifiers.hidden &&
                                  formatDay(day.date, dateLib.options, dateLib)
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
          {navLayout === "after" && !props.hideNavigation && (
            <components.Nav
              data-animated-nav={props.animate ? "true" : undefined}
              className={classNames[UI.Nav]}
              style={styles?.[UI.Nav]}
              aria-label={labelNav()}
              onPreviousClick={handlePreviousClick}
              onNextClick={handleNextClick}
              previousMonth={previousMonth}
              nextMonth={nextMonth}
            />
          )}
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
