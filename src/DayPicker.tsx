import React, { useCallback, useMemo } from "react";
import type {
  ChangeEventHandler,
  MouseEvent,
  FocusEvent,
  KeyboardEvent
} from "react";

import { UI, DayFlag, SelectionState, TransitionType } from "./UI.js";
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
          weekStartsOn: props.weekStartsOn,
          firstWeekContainsDate: props.firstWeekContainsDate,
          useAdditionalWeekYearTokens: props.useAdditionalWeekYearTokens,
          useAdditionalDayOfYearTokens: props.useAdditionalDayOfYearTokens
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
      props.classNames,
      props.components,
      props.dateLib,
      props.firstWeekContainsDate,
      props.formatters,
      props.labels,
      props.locale,
      props.useAdditionalDayOfYearTokens,
      props.useAdditionalWeekYearTokens,
      props.weekStartsOn
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
    goToMonth,
    direction
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
    () => getWeekdays(dateLib, props.ISOWeek, props.timeZone),
    [dateLib, props.ISOWeek, props.timeZone]
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
        className={className}
        style={style}
        dir={props.dir}
        id={props.id}
        lang={props.lang}
        nonce={props.nonce}
        title={props.title}
        {...dataAttributes}
        data-focused={
          focused ? dateLib.format(focused.date, "yyyy-MM-dd") : undefined
        }
      >
        <components.Months
          className={classNames[UI.Months]}
          style={styles?.[UI.Months]}
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
                <components.Transition
                  enabled={props.animate}
                  className={classNames[TransitionType.Fade]}
                  transitionKey={calendarMonth.date.toISOString()}
                  direction={direction}
                  duration={focused ? 0 : props.transitionDuration}
                  onEnter={() => calendar.setIsTransitioning(true)}
                  onEntered={() => calendar.setIsTransitioning(false)}
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
                          <components.MonthsDropdown
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
                            {formatMonthDropdown(
                              calendarMonth.date.getMonth(),
                              locale
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
                            onChange={handleYearChange}
                            options={dropdownYears}
                            style={styles?.[UI.Dropdown]}
                            value={calendarMonth.date.getFullYear()}
                          />
                        ) : (
                          <span role="status" aria-live="polite">
                            {formatYearDropdown(
                              calendarMonth.date.getFullYear()
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
                          calendarMonth.date,
                          dateLib.options,
                          dateLib
                        )}
                      </components.CaptionLabel>
                    )}
                  </components.MonthCaption>
                </components.Transition>
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
                  <components.Transition
                    enabled={props.animate}
                    className={classNames[TransitionType.Slide]}
                    transitionKey={calendarMonth.date.toISOString()}
                    direction={direction}
                    duration={focused ? 0 : props.transitionDuration}
                    onEnter={() => calendar.setIsTransitioning(true)}
                    onEntered={() => calendar.setIsTransitioning(false)}
                  >
                    <components.Weeks
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
                                  aria-hidden={modifiers.hidden || undefined}
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
                                  {isInteractive ? (
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
                  </components.Transition>
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
