import React from "react";
import type {
  ChangeEventHandler,
  MouseEvent,
  FocusEvent,
  KeyboardEvent
} from "react";

import { UI, RootFlag, DayFlag, SelectionState } from "./UI.js";
import type { CalendarDay } from "./classes/CalendarDay.js";
import { useCalendar } from "./contexts/useCalendar.js";
import { useFocus } from "./contexts/useFocus.js";
import { useModifiers } from "./contexts/useModifiers.js";
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
import { useSelection } from "./selection/useSelection.js";
import type { DayPickerProps, Modifiers } from "./types/index.js";
import { dayPickerContext } from "./useDayPicker.js";

/**
 * Render the date picker calendar.
 *
 * @group DayPicker
 * @see http://daypicker.dev
 */
export function DayPicker(props: DayPickerProps) {
  const reactId = React.useId();
  const id = props.id ?? reactId;

  const dateLib = getDateLib(props.dateLib);

  const components = getComponents(props.components);
  const formatters = getFormatters(props.formatters);
  const labels = { ...defaultLabels, ...props.labels };
  const classNames = { ...getDefaultClassNames(), ...props.classNames };

  const numberOfMonths = props.numberOfMonths ?? 1;

  const calendar = useCalendar(props, dateLib);

  const modifiers = useModifiers(props, calendar, dateLib);
  const selection = useSelection(props, dateLib);
  const focus = useFocus(props, calendar, modifiers, dateLib);

  const weekdays = React.useMemo(
    () => getWeekdays(props.locale, props.weekStartsOn, props.ISOWeek, dateLib),
    [dateLib, props.ISOWeek, props.locale, props.weekStartsOn]
  );

  const {
    captionLayout,
    dir,
    locale,
    mode,
    modifiersClassNames,
    modifiersStyles,
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

  const {
    formatCaption,
    formatDay,
    formatMonthDropdown,
    formatWeekNumber,
    formatWeekNumberHeader,
    formatWeekdayName,
    formatYearDropdown
  } = formatters;

  const {
    labelDayButton,
    labelDayContent,
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

  const isInteractive = mode !== undefined || onDayClick !== undefined;

  const classList = [
    props.className,
    classNames[UI.Root],
    numberOfMonths > 1 && classNames[RootFlag.has_multiple_months],
    showWeekNumber && classNames[RootFlag.has_week_numbers],
    props.hideWeekdayRow && classNames[RootFlag.no_weekdays],
    isInteractive && classNames[RootFlag.is_interactive]
  ]
    .filter(Boolean)
    .join(" ");

  const handlePreviousClick = () => {
    if (!calendar.previousMonth) return;
    calendar.goToPreviousMonth();
    onPrevClick?.(calendar.previousMonth);
  };

  const handleNextClick = () => {
    if (!calendar.nextMonth) return;
    calendar.goToNextMonth();
    onNextClick?.(calendar.nextMonth);
  };

  const handleDayClick = (day: CalendarDay, m: Modifiers) => {
    return (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      selection?.handleSelect(day.date, m, e);
      focus.setFocused(day);
      onDayClick?.(day.date, m, e);
    };
  };

  const handleDayFocus = (day: CalendarDay, m: Modifiers) => {
    return (e: FocusEvent) => {
      focus.setFocused(day);
      onDayFocus?.(day.date, m, e);
    };
  };

  const handleDayBlur = (day: CalendarDay, m: Modifiers) => {
    return (e: FocusEvent) => {
      focus.blur();
      onDayBlur?.(day.date, m, e);
    };
  };

  const handleDayKeyDown = (day: CalendarDay, m: Modifiers) => {
    return (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          e.stopPropagation();
          dir === "rtl" ? focus.focusDayAfter() : focus.focusDayBefore();
          break;
        case "ArrowRight":
          e.preventDefault();
          e.stopPropagation();
          dir === "rtl" ? focus.focusDayBefore() : focus.focusDayAfter();
          break;
        case "ArrowDown":
          e.preventDefault();
          e.stopPropagation();
          focus.focusWeekAfter();
          break;
        case "ArrowUp":
          e.preventDefault();
          e.stopPropagation();
          focus.focusWeekBefore();
          break;
        case " ":
        case "Enter":
          e.preventDefault();
          e.stopPropagation();
          selection?.handleSelect(day.date, m, e);
          break;
        case "PageUp":
          e.preventDefault();
          e.stopPropagation();
          e.shiftKey ? focus.focusYearBefore() : focus.focusMonthBefore();
          break;
        case "PageDown":
          e.preventDefault();
          e.stopPropagation();
          e.shiftKey ? focus.focusYearAfter() : focus.focusMonthAfter();
          break;
        case "Home":
          e.preventDefault();
          e.stopPropagation();
          focus.focusStartOfWeek();
          break;
        case "End":
          e.preventDefault();
          e.stopPropagation();
          focus.focusEndOfWeek();
          break;
      }
      onDayKeyDown?.(day.date, m, e);
    };
  };

  const contextValue = React.useMemo(() => {
    return { ...calendar, ...selection, ...modifiers };
  }, [calendar, modifiers, selection]);

  const formatOptions: FormatOptions = {
    locale,
    weekStartsOn,
    firstWeekContainsDate,
    useAdditionalWeekYearTokens,
    useAdditionalDayOfYearTokens
  };

  const labelOptions: LabelOptions = {
    locale,
    weekStartsOn,
    firstWeekContainsDate,
    useAdditionalWeekYearTokens,
    useAdditionalDayOfYearTokens
  };

  return (
    <dayPickerContext.Provider value={contextValue}>
      <div
        className={classList}
        style={{ ...styles?.[UI.Root], ...props.style }}
        dir={props.dir}
        id={props.id}
        lang={props.lang}
        nonce={props.nonce}
        title={props.title}
        {...getDataAttributes(props)}
      >
        <components.Months
          className={classNames[UI.Months]}
          style={styles?.[UI.Months]}
        >
          {!props.hideNavigation && (
            <components.Nav
              role="toolbar"
              className={classNames[UI.Nav]}
              style={styles?.[UI.Nav]}
              aria-label={labelNav(calendar)}
            >
              <components.Button
                type="button"
                className={classNames[UI.ButtonPrevious]}
                tabIndex={calendar.previousMonth ? undefined : -1}
                disabled={calendar.previousMonth ? undefined : true}
                aria-label={labelPrevious(calendar.previousMonth, {
                  locale
                })}
                aria-controls={id}
                onClick={handlePreviousClick}
              >
                <components.Chevron
                  disabled={calendar.previousMonth ? undefined : true}
                  classNames={classNames}
                  orientation="left"
                />
              </components.Button>
              <components.Button
                type="button"
                className={classNames[UI.ButtonNext]}
                tabIndex={calendar.nextMonth ? undefined : -1}
                disabled={calendar.nextMonth ? undefined : true}
                aria-label={labelNext(calendar.nextMonth, labelOptions)}
                aria-controls={id}
                onClick={handleNextClick}
              >
                <components.Chevron
                  disabled={calendar.previousMonth ? undefined : true}
                  orientation="right"
                  classNames={classNames}
                />
              </components.Button>
            </components.Nav>
          )}
          {calendar.months.map((calendarMonth, displayIndex) => {
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
              calendar.goToMonth(month);
            };

            const handleYearChange: ChangeEventHandler<HTMLSelectElement> = (
              e
            ) => {
              const month = dateLib.setYear(
                dateLib.startOfMonth(calendarMonth.date),
                Number(e.target.value)
              );
              calendar.goToMonth(month);
            };

            const dropdownMonths = getDropdownMonths(
              calendarMonth.date,
              calendar.navigationStartMonth,
              calendar.navigationEndMonth,
              formatters,
              locale,
              dateLib
            );
            const dropdownYears = getDropdownYears(
              calendar.months[0].date,
              calendar.navigationStartMonth,
              calendar.navigationEndMonth,
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
                    <div
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
                    </div>
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
                  <thead>
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
                  </thead>
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
                          {week.days.map(
                            (day: CalendarDay, dayIndex: number) => {
                              const m = modifiers.getModifiers(day);

                              if (!m.disabled) {
                                if (
                                  selection?.isSelected(day.date) &&
                                  !m.disabled
                                ) {
                                  m[SelectionState.selected] = true;
                                }
                                if (mode === "range") {
                                  const {
                                    isRangeEnd,
                                    isRangeStart,
                                    isRangeMiddle
                                  } = selection as UseRange<false>;
                                  if (isRangeStart(day.date)) {
                                    m[SelectionState.range_start] = true;
                                  }
                                  if (isRangeMiddle(day.date)) {
                                    m[SelectionState.range_middle] = true;
                                  }
                                  if (isRangeEnd(day.date)) {
                                    m[SelectionState.range_end] = true;
                                  }
                                }
                              }

                              const isFocused = Boolean(
                                focus.focused?.isEqualTo(day)
                              );

                              const style = {
                                ...getStyleForModifiers(m, modifiersStyles),
                                ...styles?.[UI.Day]
                              };

                              const className = [
                                classNames[UI.Day],
                                ...getClassNamesForModifiers(
                                  m,
                                  classNames,
                                  modifiersClassNames
                                ),
                                ...(isFocused
                                  ? [classNames[DayFlag.focused]]
                                  : [])
                              ];

                              return (
                                <components.Day
                                  key={`${dateLib.format(day.date, "yyyy-MM-dd")}_${dateLib.format(day.displayMonth, "yyyy-MM")}`}
                                  day={day}
                                  modifiers={m}
                                  role="gridcell"
                                  className={className.join(" ")}
                                  style={style}
                                  aria-hidden={m.hidden || undefined}
                                  aria-selected={m.selected || undefined}
                                  data-day={dateLib.format(
                                    day.date,
                                    "yyyy-MM-dd"
                                  )}
                                  data-month={
                                    numberOfMonths > 1
                                      ? dateLib.format(day.date, "yyyy-MM")
                                      : undefined
                                  }
                                  data-selected={m.selected || undefined}
                                  data-disabled={m.disabled || undefined}
                                  data-hidden={m.hidden || undefined}
                                  data-focused={isFocused || undefined}
                                >
                                  {isInteractive ? (
                                    <components.DayButton
                                      className={classNames[UI.DayButton]}
                                      style={styles?.[UI.DayButton]}
                                      day={day}
                                      modifiers={m}
                                      disabled={m.disabled || undefined}
                                      tabIndex={
                                        focus.isFocusTarget(day) ? 0 : -1
                                      }
                                      aria-label={labelDayButton(
                                        day.date,
                                        m,
                                        labelOptions,
                                        dateLib
                                      )}
                                      onClick={handleDayClick(day, m)}
                                      onBlur={handleDayBlur(day, m)}
                                      onFocus={handleDayFocus(day, m)}
                                      onKeyDown={handleDayKeyDown(day, m)}
                                    >
                                      {formatDay(
                                        day.date,
                                        formatOptions,
                                        dateLib
                                      )}
                                    </components.DayButton>
                                  ) : (
                                    <components.DayContent
                                      aria-label={labelDayContent(
                                        day.date,
                                        m,
                                        labelOptions,
                                        dateLib
                                      )}
                                    >
                                      {formatDay(
                                        day.date,
                                        formatOptions,
                                        dateLib
                                      )}
                                    </components.DayContent>
                                  )}
                                </components.Day>
                              );
                            }
                          )}
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
          >
            {props.footer}
          </components.Footer>
        )}
      </div>
    </dayPickerContext.Provider>
  );
}
