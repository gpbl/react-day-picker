import React, {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";
import type { MouseEvent, FocusEvent, KeyboardEvent, ChangeEvent } from "react";

import { UI, DayFlag, SelectionState } from "./UI.js";
import type { CalendarDay } from "./classes/CalendarDay.js";
import { CalendarMonth } from "./classes/CalendarMonth.js";
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

  const previousMonths = useRef(months);

  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const slideLeft = dateLib.isAfter(
      months[0].date,
      previousMonths.current[0].date
    );
    previousMonths.current = months;
    if (rootRef.current) {
      const weeksContainers = rootRef.current.querySelectorAll(`[data-weeks]`);
      weeksContainers.forEach((weeksContainer) => {
        const weeksContainerElement = weeksContainer as HTMLElement;
        if (weeksContainerElement.dataset.weeks === "true") {
          weeksContainerElement.style.animation = slideLeft
            ? "slideInRight 0.3s forwards"
            : "slideInLeft 0.3s forwards";
        } else {
          weeksContainerElement.style.opacity = "1";
          weeksContainerElement.style.animation = slideLeft
            ? "slideOutLeft 0.3s forwards"
            : "slideOutRight 0.3s forwards";
        }
      });

      const monthCaptions =
        rootRef.current.querySelectorAll(`[data-month-caption]`);
      monthCaptions.forEach((monthCaption) => {
        const monthCaptionElement = monthCaption as HTMLElement;
        if (monthCaptionElement.dataset.monthCaption === "true") {
          monthCaptionElement.style.animation = "fadeIn 0.3s forwards";
        } else {
          monthCaptionElement.style.animation = "fadeOut 0.3s forwards";
        }
      });
    }
  }, [months[0].date.getMonth()]);

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
        ref={rootRef}
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
          style={{
            ...styles?.[UI.Months],
            overflow: "hidden"
          }}
        >
          {!props.hideNavigation && (
            <components.Nav
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
            const renderMonth = (
              renderedCalendarMonth: CalendarMonth,
              rootMonth: boolean = true
            ) => {
              const dropdownMonths = getMonthOptions(
                renderedCalendarMonth.date,
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
                  className={classNames[UI.Month]}
                  style={{
                    ...styles?.[UI.Month],
                    // overflow: "hidden",
                    position: !rootMonth ? "absolute" : undefined,
                    pointerEvents: !rootMonth ? "none" : undefined
                  }}
                  key={displayIndex}
                  displayIndex={displayIndex}
                  calendarMonth={renderedCalendarMonth}
                >
                  {rootMonth &&
                    renderMonth(previousMonths.current[displayIndex], false)}
                  <components.MonthCaption
                    data-month-caption={rootMonth ? "true" : "false"}
                    className={classNames[UI.MonthCaption]}
                    style={{
                      ...styles?.[UI.MonthCaption],
                      opacity: !rootMonth ? 0 : undefined
                    }}
                    calendarMonth={renderedCalendarMonth}
                    displayIndex={displayIndex}
                    onAnimationEnd={(e) => {
                      e.target.style.animation = null;
                    }}
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
                            onChange={handleMonthChange(
                              renderedCalendarMonth.date
                            )}
                            options={dropdownMonths}
                            style={styles?.[UI.Dropdown]}
                            value={dateLib.getMonth(renderedCalendarMonth.date)}
                          />
                        ) : (
                          <span role="status" aria-live="polite">
                            {formatMonthDropdown(
                              renderedCalendarMonth.date,
                              dateLib
                            )}
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
                            onChange={handleYearChange(
                              renderedCalendarMonth.date
                            )}
                            options={dropdownYears}
                            style={styles?.[UI.Dropdown]}
                            value={dateLib.getYear(renderedCalendarMonth.date)}
                          />
                        ) : (
                          <span role="status" aria-live="polite">
                            {formatYearDropdown(
                              renderedCalendarMonth.date,
                              dateLib
                            )}
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
                          renderedCalendarMonth.date,
                          dateLib.options,
                          dateLib
                        )}
                      </components.CaptionLabel>
                    )}
                  </components.MonthCaption>
                  <components.MonthGrid
                    role="grid"
                    aria-multiselectable={
                      mode === "multiple" || mode === "range"
                    }
                    aria-label={
                      labelGrid(
                        renderedCalendarMonth.date,
                        dateLib.options,
                        dateLib
                      ) || undefined
                    }
                    className={classNames[UI.MonthGrid]}
                    style={styles?.[UI.MonthGrid]}
                  >
                    {!props.hideWeekdays && (
                      <components.Weekdays
                        className={classNames[UI.Weekdays]}
                        style={{
                          ...styles?.[UI.Weekdays],
                          opacity: !rootMonth ? 0 : undefined
                        }}
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
                            {formatWeekdayName(
                              weekday,
                              dateLib.options,
                              dateLib
                            )}
                          </components.Weekday>
                        ))}
                      </components.Weekdays>
                    )}
                    <components.Weeks
                      data-weeks={rootMonth ? "true" : "false"}
                      style={{
                        ...styles?.[UI.Weeks]
                      }}
                      onAnimationEnd={(e) => {
                        e.target.style.animation = null;
                        if (!rootMonth) {
                          e.target.style.opacity = "0";
                        }
                      }}
                    >
                      {renderedCalendarMonth.weeks.map((week, weekIndex) => {
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
                                  aria-selected={
                                    modifiers.selected || undefined
                                  }
                                  aria-label={ariaLabel}
                                  data-day={dateLib.format(date, "yyyy-MM-dd")}
                                  data-month={
                                    day.outside
                                      ? dateLib.format(date, "yyyy-MM")
                                      : undefined
                                  }
                                  data-selected={
                                    modifiers.selected || undefined
                                  }
                                  data-disabled={
                                    modifiers.disabled || undefined
                                  }
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
                                      onKeyDown={handleDayKeyDown(
                                        day,
                                        modifiers
                                      )}
                                      onMouseEnter={handleDayMouseEnter(
                                        day,
                                        modifiers
                                      )}
                                      onMouseLeave={handleDayMouseLeave(
                                        day,
                                        modifiers
                                      )}
                                    >
                                      {formatDay(
                                        date,
                                        dateLib.options,
                                        dateLib
                                      )}
                                    </components.DayButton>
                                  ) : (
                                    !modifiers.hidden &&
                                    formatDay(
                                      day.date,
                                      dateLib.options,
                                      dateLib
                                    )
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
            };
            return renderMonth(calendarMonth);
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
