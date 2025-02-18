import React, { useCallback, useLayoutEffect, useMemo, useRef } from "react";
import type { MouseEvent, FocusEvent, KeyboardEvent, ChangeEvent } from "react";

import { UI, DayFlag, SelectionState, AnimationClass } from "./UI.js";
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

  const rootElementRef = useRef<HTMLDivElement>(null);
  const previousRootElementSnapshotRef = useRef<HTMLElement>(null);
  const previousMonthsRef = useRef(months);
  const monthKey =
    months[0] && formatCaption(months[0].date, dateLib.options, dateLib);
  useLayoutEffect(() => {
    // get previous months before updating the previous months ref
    const previousMonths = previousMonthsRef.current;
    // update previous months ref for next effect trigger
    previousMonthsRef.current = months;

    // validation required for the animation to work as expected
    if (
      months.length === 0 ||
      previousMonths.length === 0 ||
      months.length !== previousMonths.length
    ) {
      return;
    }

    const isSameMonth = dateLib.isSameMonth(
      months[0].date,
      previousMonths[0].date
    );

    const isAfterPreviousMonth = dateLib.isAfter(
      months[0].date,
      previousMonths[0].date
    );

    if (!rootElementRef.current) {
      return;
    }

    // get previous month elements before updating the snapshot ref
    const previousMonthElements = [
      ...(previousRootElementSnapshotRef.current?.querySelectorAll(
        `[data-month-container]`
      ) ?? [])
    ];

    // update snapshot for next effect trigger
    const rootElementSnapshot = rootElementRef.current.cloneNode(true);
    if (rootElementSnapshot instanceof HTMLElement) {
      previousRootElementSnapshotRef.current = rootElementSnapshot;
    } else {
      previousRootElementSnapshotRef.current = null;
    }

    // if the displayed months are the same, skip the animation, only after updating all refs
    // or skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    if (isSameMonth || focused) {
      return;
    }

    const currentMonthElements = [
      ...(rootElementRef.current.querySelectorAll(`[data-month-container]`) ??
        [])
    ];

    if (
      currentMonthElements &&
      currentMonthElements.every((element) => element instanceof HTMLElement) &&
      previousMonthElements &&
      previousMonthElements.every((element) => element instanceof HTMLElement)
    ) {
      const cleanUpFunctions: (() => void)[] = [];

      currentMonthElements.forEach((currentMonthElement, index) => {
        const previousMonthElement = previousMonthElements[index];

        if (!previousMonthElement) {
          return;
        }

        // animate new displayed month
        const monthCaptionAnimationClass = isAfterPreviousMonth
          ? classNames[AnimationClass.animation_new_month_caption_is_after]
          : classNames[AnimationClass.animation_new_month_caption_is_before];

        const monthAnimationClass = isAfterPreviousMonth
          ? classNames[AnimationClass.animation_new_month_is_after]
          : classNames[AnimationClass.animation_new_month_is_before];

        currentMonthElement.style.overflow = "hidden";
        const monthCaptionElement = currentMonthElement.querySelector(
          `[data-month-caption-container]`
        );
        if (monthCaptionElement && monthCaptionElement instanceof HTMLElement) {
          monthCaptionElement.classList.add(monthCaptionAnimationClass);
        }

        const weeksElement = currentMonthElement.querySelector(
          `[data-weeks-container]`
        );
        if (weeksElement && weeksElement instanceof HTMLElement) {
          weeksElement.classList.add(monthAnimationClass);
        }
        // animate new displayed month end
        const cleanUp = () => {
          if (
            monthCaptionElement &&
            monthCaptionElement instanceof HTMLElement
          ) {
            monthCaptionElement.classList.remove(monthCaptionAnimationClass);
          }
          if (weeksElement && weeksElement instanceof HTMLElement) {
            weeksElement.classList.remove(monthAnimationClass);
          }
          currentMonthElement.style.overflow = "";
          if (currentMonthElement.contains(previousMonthElement)) {
            currentMonthElement.removeChild(previousMonthElement);
          }
        };
        cleanUpFunctions.push(cleanUp);

        // animate old displayed month
        previousMonthElement.style.pointerEvents = "none";
        previousMonthElement.style.position = "absolute";
        previousMonthElement.style.overflow = "hidden";
        previousMonthElement.setAttribute("aria-hidden", "true");

        const previousWeekdaysElement = previousMonthElement.querySelector(
          `[data-weekdays-container]`
        );
        if (
          previousWeekdaysElement &&
          previousWeekdaysElement instanceof HTMLElement
        ) {
          previousWeekdaysElement.style.opacity = "0";
        }

        const previousWeeksElement = previousMonthElement.querySelector(
          `[data-weeks-container]`
        );
        if (
          previousWeeksElement &&
          previousWeeksElement instanceof HTMLElement
        ) {
          previousWeeksElement.classList.add(
            isAfterPreviousMonth
              ? classNames[AnimationClass.animation_old_month_is_before]
              : classNames[AnimationClass.animation_old_month_is_after]
          );
        }

        const previousMonthCaptionElement = previousMonthElement.querySelector(
          `[data-month-caption-container]`
        );
        if (
          previousMonthCaptionElement &&
          previousMonthCaptionElement instanceof HTMLElement
        ) {
          previousMonthCaptionElement.classList.add(
            isAfterPreviousMonth
              ? classNames[AnimationClass.animation_old_month_caption_is_before]
              : classNames[AnimationClass.animation_old_month_caption_is_after]
          );
          previousMonthCaptionElement.addEventListener("animationend", cleanUp);
        }

        currentMonthElement.insertBefore(
          previousMonthElement,
          currentMonthElement.firstChild
        );
      });

      return () => {
        cleanUpFunctions.forEach((cleanUp) => cleanUp());
      };
    }
    // animation is only triggered when the month changes,
    // if other deps change, they should not trigger animation
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthKey]);

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
        ref={rootElementRef}
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
                data-month-container
                className={classNames[UI.Month]}
                style={styles?.[UI.Month]}
                key={displayIndex}
                displayIndex={displayIndex}
                calendarMonth={calendarMonth}
              >
                <components.MonthCaption
                  data-month-caption-container
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
                        <span role="status" aria-live="polite">
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
                        <span role="status" aria-live="polite">
                          {formatYearDropdown(calendarMonth.date, dateLib)}
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
                      data-weekdays-container
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
                    data-weeks-container
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
