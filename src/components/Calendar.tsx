import React, {
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler
} from "react";

import {
  UI,
  CalendarFlag,
  DayFlag,
  SelectionState,
  WeekNumberFlag
} from "../UI.js";
import type { CalendarDay } from "../classes/index.js";
import { useCalendar, useFocus, useModifiers } from "../contexts/index.js";
import { getClassNamesForModifiers } from "../helpers/getClassNamesForModifiers.js";
import { getComponents } from "../helpers/getComponents.js";
import { getDataAttributes } from "../helpers/getDataAttributes.js";
import { getDateLib } from "../helpers/getDateLib.js";
import { getDefaultClassNames } from "../helpers/getDefaultClassNames.js";
import { getDropdownMonths } from "../helpers/getDropdownMonths.js";
import { getDropdownYears } from "../helpers/getDropdownYears.js";
import { getFormatters } from "../helpers/getFormatters.js";
import { getStyleForModifiers } from "../helpers/getStyleForModifiers.js";
import { getWeekdays } from "../helpers/getWeekdays.js";
import * as defaultLabels from "../labels/index.js";
import { useSelection } from "../selection/useSelection.js";
import type { DayPickerProps } from "../types/props.js";

/**
 * Render the DayPicker Calendar with navigation and the month grids.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Calendar<T extends DayPickerProps>(props: T) {
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
  const focus = useFocus(
    calendar.calendarEndMonth,
    calendar.calendarStartMonth,
    calendar.goToDay,
    calendar.isDayDisplayed,
    props,
    modifiers,
    dateLib
  );

  const weekdays = getWeekdays(
    props.locale,
    props.weekStartsOn,
    props.ISOWeek,
    dateLib
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
    onDayKeyPress,
    onDayKeyUp,
    onDayMouseEnter,
    onDayMouseLeave,
    onDayPointerEnter,
    onDayPointerLeave,
    onPrevClick,
    onNextClick,
    onDayTouchCancel,
    onDayTouchEnd,
    onDayTouchMove,
    onDayTouchStart,
    showWeekNumber,
    styles
  } = props;

  const {
    formatCaption,
    formatDay,
    formatMonthDropdown,
    formatWeekNumber,
    formatWeekdayName,
    formatYearDropdown
  } = formatters;

  const {
    labelDay,
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
    classNames[UI.Calendar],
    numberOfMonths > 1 && classNames[CalendarFlag.has_multiple_months],
    showWeekNumber && classNames[CalendarFlag.has_week_numbers],
    props.hideWeekdayRow && classNames[CalendarFlag.no_weekdays],
    isInteractive && classNames[CalendarFlag.is_interactive]
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

  return (
    <div
      className={classList}
      style={{ ...styles?.[UI.Calendar], ...props.style }}
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
              aria-label={labelNext(calendar.nextMonth, { locale })}
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
            const selectedMonth = Number((e.target as HTMLSelectElement).value);
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
            calendar.calendarStartMonth,
            calendar.calendarEndMonth,
            formatters,
            locale,
            dateLib
          );
          const dropdownYears = getDropdownYears(
            calendar.months[0].date,
            calendar.calendarStartMonth,
            calendar.calendarEndMonth,
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
                        aria-label={labelYearDropdown()}
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
                    {formatCaption(calendarMonth.date, { locale }, dateLib)}
                  </components.CaptionLabel>
                )}
              </components.MonthCaption>
              <components.MonthGrid
                role="grid"
                aria-multiselectable={mode === "multiple" || mode === "range"}
                aria-label={
                  labelGrid(calendarMonth.date, { locale }, dateLib) ||
                  undefined
                }
                className={classNames[UI.MonthGrid]}
                style={styles?.[UI.MonthGrid]}
              >
                <thead>
                  <components.Weekdays
                    aria-rowindex={1}
                    className={classNames[UI.Weekdays]}
                    hidden={props.hideWeekdayRow}
                    onClick={(e) => e.stopPropagation()}
                    role="row"
                    style={styles?.[UI.Weekdays]}
                  >
                    {showWeekNumber && (
                      <components.Weekday
                        aria-colindex={1}
                        aria-label={labelWeekNumberHeader({ locale })}
                        className={classNames[UI.Weekday]}
                        role="columnheader"
                        style={styles?.[UI.Weekday]}
                      >
                        {!props.hideWeekdayRow && formatWeekNumber(0)}
                      </components.Weekday>
                    )}
                    {weekdays.map((weekday, i) => (
                      <components.Weekday
                        aria-colindex={showWeekNumber ? i + 2 : i + 1}
                        aria-label={labelWeekday(weekday, { locale }, dateLib)}
                        className={classNames[UI.Weekday]}
                        key={i}
                        role="columnheader"
                        style={styles?.[UI.Weekday]}
                      >
                        {formatWeekdayName(weekday, { locale }, dateLib)}
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
                    const weekNumberClassName = [
                      classNames[UI.WeekNumber],
                      props.onWeekNumberClick
                        ? classNames[WeekNumberFlag.week_number_interactive]
                        : ""
                    ].join(" ");
                    const rowIndex = weekIndex + (props.hideWeekdayRow ? 1 : 2);
                    return (
                      <components.Week
                        aria-rowindex={rowIndex}
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
                            aria-colindex={1}
                            aria-label={labelWeekNumber(week.weekNumber, {
                              locale
                            })}
                            className={weekNumberClassName}
                          >
                            {formatWeekNumber(week.weekNumber)}
                          </components.WeekNumber>
                        )}
                        {week.days.map((day: CalendarDay, dayIndex: number) => {
                          const m = modifiers.getModifiers(day);

                          if (selection?.isSelected(day.date)) {
                            m[SelectionState.selected] = true;
                          }
                          const { date: d } = day;

                          const handleClick: MouseEventHandler = (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (m.disabled) return;

                            selection?.handleSelect(day.date, m, e);

                            if (isInteractive && !m.disabled && !m.hidden) {
                              focus.setFocused(day);
                            }

                            onDayClick?.(d, m, e);
                          };

                          const handleFocus: FocusEventHandler = (e) => {
                            if (m.disabled) {
                              e.preventDefault();
                              e.stopPropagation();
                              return;
                            }
                            focus.setFocused(day);
                            onDayFocus?.(d, m, e);
                          };

                          const handleKeyDown: KeyboardEventHandler = (e) => {
                            switch (e.key) {
                              case "ArrowLeft":
                                e.preventDefault();
                                e.stopPropagation();
                                dir === "rtl"
                                  ? focus.focusDayAfter()
                                  : focus.focusDayBefore();
                                break;
                              case "ArrowRight":
                                e.preventDefault();
                                e.stopPropagation();
                                dir === "rtl"
                                  ? focus.focusDayBefore()
                                  : focus.focusDayAfter();
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
                                e.shiftKey
                                  ? focus.focusYearBefore()
                                  : focus.focusMonthBefore();
                                break;
                              case "PageDown":
                                e.preventDefault();
                                e.stopPropagation();
                                e.shiftKey
                                  ? focus.focusYearAfter()
                                  : focus.focusMonthAfter();
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
                            onDayKeyDown?.(d, m, e);
                          };

                          const isAutoFocusTarget =
                            !!focus.autoFocusTarget?.isEqualTo(day);
                          const isFocused = !!focus.focused?.isEqualTo(day);

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
                            ...(isFocused ? [classNames[DayFlag.focused]] : [])
                          ];

                          return (
                            <components.Day
                              key={`${dateLib.format(d, "yyyy-MM-dd")}_${dateLib.format(day.displayMonth, "yyyy-MM")}`}
                              day={day}
                              modifiers={m}
                              role="gridcell"
                              className={className.join(" ")}
                              style={style}
                              aria-colindex={
                                showWeekNumber ? dayIndex + 2 : dayIndex + 1
                              }
                              aria-hidden={m.hidden || undefined}
                              aria-selected={m.selected || undefined}
                              data-day={dateLib.format(d, "yyyy-MM-dd")}
                              data-month={dateLib.format(d, "yyyy-MM")}
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
                                    isFocused || isAutoFocusTarget ? 0 : -1
                                  }
                                  aria-label={labelDay(
                                    d,
                                    m,
                                    { locale },
                                    dateLib
                                  )} // TODO: use labelDayDate
                                  onClick={isInteractive && handleClick}
                                  onBlur={(e) => {
                                    focus.blur();
                                    onDayBlur?.(d, m, e);
                                  }}
                                  onFocus={handleFocus}
                                  onKeyDown={handleKeyDown}
                                  onKeyPress={(e) => onDayKeyPress?.(d, m, e)}
                                  onKeyUp={(e) => onDayKeyUp?.(d, m, e)}
                                  onMouseEnter={(e) =>
                                    onDayMouseEnter?.(d, m, e)
                                  }
                                  onMouseLeave={(e) =>
                                    onDayMouseLeave?.(d, m, e)
                                  }
                                  onPointerEnter={(e) =>
                                    onDayPointerEnter?.(d, m, e)
                                  }
                                  onPointerLeave={(e) =>
                                    onDayPointerLeave?.(d, m, e)
                                  }
                                  onTouchCancel={(e) =>
                                    onDayTouchCancel?.(d, m, e)
                                  }
                                  onTouchEnd={(e) => onDayTouchEnd?.(d, m, e)}
                                  onTouchMove={(e) => onDayTouchMove?.(d, m, e)}
                                  onTouchStart={(e) =>
                                    onDayTouchStart?.(d, m, e)
                                  }
                                >
                                  {formatDay(d, { locale }, dateLib)}
                                </components.DayButton>
                              ) : (
                                <div>{formatDay(d, { locale }, dateLib)}</div>
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
        >
          {props.footer}
        </components.Footer>
      )}
    </div>
  );
}
