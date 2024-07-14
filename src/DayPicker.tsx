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
import { getDropdownMonths } from "./helpers/getDropdownMonths.js";
import { getDropdownYears } from "./helpers/getDropdownYears.js";
import { getFormatters } from "./helpers/getFormatters.js";
import { getStyleForModifiers } from "./helpers/getStyleForModifiers.js";
import { getWeekdays } from "./helpers/getWeekdays.js";
import * as defaultLabels from "./labels/index.js";
import { FormatOptions, LabelOptions } from "./lib/dateLib.js";
import { UseRange } from "./selection/useRange.js";
import type { DayPickerProps, Modifiers } from "./types/index.js";
import { useCalendar } from "./useCalendar.js";
import { dayPickerContext } from "./useDayPicker.js";
import { useFocus } from "./useFocus.js";
import { useModifiers } from "./useModifiers.js";
import { useSelection } from "./useSelection.js";

/**
 * Render the date picker calendar.
 *
 * @group DayPicker
 * @see http://daypicker.dev
 */
export function DayPicker(props: DayPickerProps) {
  const reactId = React.useId();
  const id = props.id ?? reactId;

  const {
    captionLayout,
    dir,
    locale,
    ISOWeek,
    mode,
    modifiersClassNames,
    modifiersStyles,
    numberOfMonths = 1,
    onDayBlur,
    onDayClick,
    onDayFocus,
    onDayKeyDown,
    onPrevClick,
    onNextClick,
    showWeekNumber,
    styles,
    weekStartsOn,
    firstWeekContainsDate,
    useAdditionalWeekYearTokens,
    useAdditionalDayOfYearTokens
  } = props;

  const { components, formatters, labels, dateLib, classNames } = useMemo(
    () => ({
      dateLib: getDateLib(props.dateLib),
      components: getComponents(props.components),
      formatters: getFormatters(props.formatters),
      labels: { ...defaultLabels, ...props.labels },
      classNames: { ...getDefaultClassNames(), ...props.classNames }
    }),
    [
      props.classNames,
      props.components,
      props.dateLib,
      props.formatters,
      props.labels
    ]
  );

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
    months,
    navigationStartMonth,
    navigationEndMonth,
    previousMonth,
    nextMonth,
    goToPreviousMonth,
    goToNextMonth,
    goToMonth
  } = calendar;

  const modifiers = useModifiers(props, calendar, dateLib);

  const selection = useSelection(props, dateLib);
  const { isSelected, handleSelect } = selection;

  const focus = useFocus(props, calendar, modifiers, selection, dateLib);
  const {
    isFocusTarget,
    focused: focusedDay,
    setFocused,
    blur,
    focusDayBefore,
    focusDayAfter,
    focusWeekBefore,
    focusWeekAfter,
    focusMonthBefore,
    focusMonthAfter,
    focusYearBefore,
    focusYearAfter,
    focusStartOfWeek,
    focusEndOfWeek
  } = focus;

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
    () => getWeekdays(locale, weekStartsOn, ISOWeek, dateLib),
    [ISOWeek, dateLib, locale, weekStartsOn]
  );

  const isInteractive = mode !== undefined || onDayClick !== undefined;

  const handlePreviousClick = useCallback(() => {
    if (!previousMonth) return;
    goToPreviousMonth();
    onPrevClick?.(previousMonth);
  }, [goToPreviousMonth, onPrevClick, previousMonth]);

  const handleNextClick = useCallback(() => {
    if (!nextMonth) return;
    goToNextMonth();
    onNextClick?.(nextMonth);
  }, [goToNextMonth, nextMonth, onNextClick]);

  const handleDayClick = useCallback(
    (day: CalendarDay, m: Modifiers) => {
      return (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        handleSelect(day.date, m, e);
        setFocused(day);
        onDayClick?.(day.date, m, e);
      };
    },
    [handleSelect, onDayClick, setFocused]
  );

  const handleDayFocus = useCallback(
    (day: CalendarDay, m: Modifiers) => {
      return (e: FocusEvent) => {
        setFocused(day);
        onDayFocus?.(day.date, m, e);
      };
    },
    [onDayFocus, setFocused]
  );

  const handleDayBlur = useCallback(
    (day: CalendarDay, m: Modifiers) => {
      return (e: FocusEvent) => {
        blur();
        onDayBlur?.(day.date, m, e);
      };
    },
    [blur, onDayBlur]
  );

  const handleDayKeyDown = useCallback(
    (day: CalendarDay, modifiers: Modifiers) => {
      return (e: KeyboardEvent) => {
        switch (e.key) {
          case "ArrowLeft":
            e.preventDefault();
            e.stopPropagation();
            dir === "rtl" ? focusDayAfter() : focusDayBefore();
            break;
          case "ArrowRight":
            e.preventDefault();
            e.stopPropagation();
            dir === "rtl" ? focusDayBefore() : focusDayAfter();
            break;
          case "ArrowDown":
            e.preventDefault();
            e.stopPropagation();
            focusWeekAfter();
            break;
          case "ArrowUp":
            e.preventDefault();
            e.stopPropagation();
            focusWeekBefore();
            break;
          case " ":
          case "Enter":
            e.preventDefault();
            e.stopPropagation();
            selection?.handleSelect(day.date, modifiers, e);
            break;
          case "PageUp":
            e.preventDefault();
            e.stopPropagation();
            e.shiftKey ? focusYearBefore() : focusMonthBefore();
            break;
          case "PageDown":
            e.preventDefault();
            e.stopPropagation();
            e.shiftKey ? focusYearAfter() : focusMonthAfter();
            break;
          case "Home":
            e.preventDefault();
            e.stopPropagation();
            focusStartOfWeek();
            break;
          case "End":
            e.preventDefault();
            e.stopPropagation();
            focusEndOfWeek();
            break;
        }
        onDayKeyDown?.(day.date, modifiers, e);
      };
    },
    [
      dir,
      focusDayAfter,
      focusDayBefore,
      focusEndOfWeek,
      focusMonthAfter,
      focusMonthBefore,
      focusStartOfWeek,
      focusWeekAfter,
      focusWeekBefore,
      focusYearAfter,
      focusYearBefore,
      onDayKeyDown,
      selection
    ]
  );

  const formatOptions: FormatOptions = {
    locale,
    weekStartsOn,
    firstWeekContainsDate,
    useAdditionalWeekYearTokens,
    useAdditionalDayOfYearTokens
  };

  const labelOptions: LabelOptions = formatOptions;

  const { className, style } = useMemo(
    () => ({
      className: [classNames[UI.Root], props.className]
        .filter(Boolean)
        .join(" "),
      style: { ...styles?.[UI.Root], ...props.style }
    }),
    [classNames, props.className, props.style, styles]
  );

  const dataAttributes = useMemo(() => getDataAttributes(props), [props]);

  const contextValue = useMemo(
    () => ({ ...calendar, ...selection, ...modifiers }),
    [calendar, modifiers, selection]
  );

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
        data-interactive={isInteractive || undefined}
        data-multiple-months={numberOfMonths > 1 || undefined}
        data-week-numbers={showWeekNumber || undefined}
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
                tabIndex={calendar.previousMonth ? undefined : -1}
                disabled={calendar.previousMonth ? undefined : true}
                aria-label={labelPrevious(previousMonth, labelOptions)}
                aria-controls={id}
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
                aria-controls={id}
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
            const captionId = `${id}-caption-${displayIndex}`;

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

            const dropdownMonths = getDropdownMonths(
              calendarMonth.date,
              navigationStartMonth,
              navigationEndMonth,
              formatters,
              locale,
              dateLib
            );
            const dropdownYears = getDropdownYears(
              months[0].date,
              navigationStartMonth,
              navigationEndMonth,
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
                  id={captionId}
                  calendarMonth={calendarMonth}
                  displayIndex={displayIndex}
                >
                  {captionLayout?.startsWith("dropdown") ? (
                    <components.DropdownNav
                      className={classNames[UI.DropdownNav]}
                      style={styles?.[UI.DropdownNav]}
                    >
                      {captionLayout === "dropdown" ||
                      captionLayout === "dropdown-months" ? (
                        <components.Dropdown
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
                  <components.Weekdays
                    className={classNames[UI.Weekdays]}
                    hidden={props.hideWeekdayRow}
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
                        {!props.hideWeekdayRow && formatWeekNumberHeader()}
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
                            const dayModifiers = modifiers.getModifiers(day);
                            const focused = focusedDay?.isEqualTo(day);

                            if (!dayModifiers.hidden && focused)
                              dayModifiers[DayFlag.focused] = true;

                            const selected =
                              isSelected(date) || dayModifiers.selected;

                            dayModifiers[SelectionState.selected] =
                              !dayModifiers.disabled && selected;

                            if (!dayModifiers.disabled && mode === "range") {
                              const range = selection as UseRange<false>;
                              dayModifiers[SelectionState.range_start] =
                                range.isRangeStart(date);
                              dayModifiers[SelectionState.range_end] =
                                range.isRangeEnd(date);
                              dayModifiers[SelectionState.range_middle] =
                                range.isRangeMiddle(date);
                            }

                            const style = {
                              ...getStyleForModifiers(
                                dayModifiers,
                                modifiersStyles
                              ),
                              ...styles?.[UI.Day]
                            };

                            const className = [
                              classNames[UI.Day],
                              ...getClassNamesForModifiers(
                                dayModifiers,
                                classNames,
                                modifiersClassNames
                              )
                            ];

                            const ariaLabel = !isInteractive
                              ? labelGridcell(
                                  date,
                                  dayModifiers,
                                  labelOptions,
                                  dateLib
                                )
                              : undefined;

                            const dataAttributes = {
                              "data-day": dateLib.format(date, "yyyy-MM-dd"),
                              "data-month": day.outside
                                ? dateLib.format(date, "yyyy-MM")
                                : undefined
                            };
                            return (
                              <components.Day
                                key={`${dateLib.format(date, "yyyy-MM-dd")}_${dateLib.format(day.displayMonth, "yyyy-MM")}`}
                                day={day}
                                modifiers={dayModifiers}
                                role="gridcell"
                                className={className.join(" ")}
                                style={style}
                                aria-hidden={dayModifiers.hidden || undefined}
                                aria-selected={
                                  dayModifiers.selected || undefined
                                }
                                aria-label={ariaLabel}
                                {...dataAttributes}
                              >
                                {isInteractive ? (
                                  <components.DayButton
                                    className={classNames[UI.DayButton]}
                                    style={styles?.[UI.DayButton]}
                                    day={day}
                                    modifiers={dayModifiers}
                                    disabled={
                                      dayModifiers.disabled || undefined
                                    }
                                    tabIndex={isFocusTarget(day) ? 0 : -1}
                                    aria-label={labelDayButton(
                                      date,
                                      dayModifiers,
                                      labelOptions,
                                      dateLib
                                    )}
                                    onClick={handleDayClick(day, dayModifiers)}
                                    onBlur={handleDayBlur(day, dayModifiers)}
                                    onFocus={handleDayFocus(day, dayModifiers)}
                                    onKeyDown={handleDayKeyDown(
                                      day,
                                      dayModifiers
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
