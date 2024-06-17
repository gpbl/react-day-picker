import React from "react";
import {
  type FocusEventHandler,
  type KeyboardEventHandler,
  type MouseEventHandler,
  type PointerEventHandler,
  type TouchEventHandler,
  useEffect,
  useRef
} from "react";

import { useSingleContext } from "react-day-picker/contexts/useSingleContext";

import { UI, DayModifier } from "../UI";
import { CalendarDay } from "../classes/CalendarDay";
import { useCalendarContext } from "../contexts/useCalendarContext";
import { useFocusContext } from "../contexts/useFocusContext";
import { useModifiersContext } from "../contexts/useModifiersContext";
import { usePropsContext } from "../contexts/usePropsContext";
import { useSelection } from "../contexts/useSelection";
import { debounce } from "../helpers/debounce";
import { getClassNamesForModifiers } from "../helpers/getClassNamesForModifiers";
import { getStyleForModifiers } from "../helpers/getStyleForModifiers";

import { DayProps, Day as DefaultDay } from "./Day";
import { DayDateProps, DayDate as DefaultDayDate } from "./DayDate";

/**
 * Provides a `Day` the day state and the html attributes. Developers may use a
 * `Day` component without the need to use hooks.
 *
 * @internal
 */
export function DayWrapper(props: {
  "aria-colindex": number;
  /** The day to be rendered in the gridcell. */
  day: CalendarDay;
}) {
  const cellRef = useRef<HTMLDivElement>(null);

  const {
    classNames,
    components,
    dir,
    formatters: { formatDay },
    labels: { labelDay },
    locale,
    mode,
    modifiersClassNames = {},
    modifiersStyles = {},
    onDayFocus,
    onDayBlur,
    onDayClick,
    onDayKeyDown,
    onDayKeyPress,
    onDayKeyUp,
    onDayMouseEnter,
    onDayMouseLeave,
    onDayPointerEnter,
    onDayPointerLeave,
    onDayTouchCancel,
    onDayTouchEnd,
    onDayTouchMove,
    onDayTouchStart,
    styles = {}
  } = usePropsContext();

  const { isInteractive } = useCalendarContext();
  const { getModifiers } = useModifiersContext();

  const single = useSingleContext();

  const {
    autoFocusTarget,
    focused,
    focus,
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
  } = useFocusContext();

  const modifiers = getModifiers(props.day);

  const onClick: MouseEventHandler = (e) => {
    if (modifiers.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (mode && !modifiers.disabled) {
      single.setValue(props.day.date);
    }
    if (modifiers.focusable) {
      focus(props.day);
    }
    onDayClick?.(props.day.date, modifiers, e);
  };

  const onFocus: FocusEventHandler = (e) => {
    if (modifiers.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    focus(props.day);
    onDayFocus?.(props.day.date, modifiers, e);
  };

  const onBlur: FocusEventHandler = (e) => {
    blur();
    onDayBlur?.(props.day.date, modifiers, e);
  };

  const onMouseEnter: MouseEventHandler = (e) => {
    onDayMouseEnter?.(props.day.date, modifiers, e);
  };
  const onMouseLeave: MouseEventHandler = (e) => {
    onDayMouseLeave?.(props.day.date, modifiers, e);
  };
  const onPointerEnter: PointerEventHandler = (e) => {
    onDayPointerEnter?.(props.day.date, modifiers, e);
  };
  const onPointerLeave: PointerEventHandler = (e) => {
    onDayPointerLeave?.(props.day.date, modifiers, e);
  };
  const onTouchCancel: TouchEventHandler = (e) => {
    onDayTouchCancel?.(props.day.date, modifiers, e);
  };
  const onTouchEnd: TouchEventHandler = (e) => {
    onDayTouchEnd?.(props.day.date, modifiers, e);
  };
  const onTouchMove: TouchEventHandler = (e) => {
    onDayTouchMove?.(props.day.date, modifiers, e);
  };
  const onTouchStart: TouchEventHandler = (e) => {
    onDayTouchStart?.(props.day.date, modifiers, e);
  };

  const onKeyUp: KeyboardEventHandler = (e) => {
    onDayKeyUp?.(props.day.date, modifiers, e);
  };

  const onKeyPress: KeyboardEventHandler = (e) => {
    onDayKeyPress?.(props.day.date, modifiers, e);
  };

  const onKeyDown: KeyboardEventHandler = (e) => {
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
        if (mode === "single" && !modifiers.disabled) {
          single.setValue(props.day.date);
        }
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
    onDayKeyDown?.(props.day.date, modifiers, e);
  };

  const isAutoFocusTarget = Boolean(autoFocusTarget?.isEqualTo(props.day));
  const isFocused = Boolean(focused?.isEqualTo(props.day));

  const style = getStyleForModifiers(modifiers, modifiersStyles, styles);

  const classNameForModifiers = getClassNamesForModifiers(
    modifiers,
    modifiersClassNames,
    classNames
  );

  const className = [classNames[UI.Day], ...classNameForModifiers];

  if (isFocused) {
    className.push(classNames[DayModifier.focused]);
  }

  const dayRootProps: DayProps["rootProps"] = {
    role: "gridcell",
    className: className.join(" "),
    style,
    tabIndex: isFocused || isAutoFocusTarget ? 0 : -1,
    ["aria-colindex"]: props["aria-colindex"],
    ["aria-label"]:
      labelDay(props.day.date, modifiers, { locale }) ?? undefined,
    ["aria-disabled"]: modifiers.disabled || undefined,
    ["aria-hidden"]: modifiers.hidden || undefined,
    ["aria-selected"]: modifiers.selected || undefined,
    onClick: isInteractive ? onClick : undefined,
    onBlur,
    onFocus,
    onKeyDown,
    onKeyPress: debounce(onKeyPress, 300),
    onKeyUp,
    onMouseEnter,
    onMouseLeave,
    onPointerEnter,
    onPointerLeave,
    onTouchCancel,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    ref: cellRef
  };

  useEffect(() => {
    if (!cellRef.current) return; // no element to focus
    if (!focused) return; // no day to focus
    if (!props.day.isEqualTo(focused)) return; // not this day`
    if (modifiers.disabled || modifiers.hidden) return; // cannot focus

    cellRef.current.focus();
  }, [focused, modifiers.disabled, modifiers.hidden, props.day]);

  const Day = components?.Day ?? DefaultDay;

  const dayDateRootProps: DayDateProps["rootProps"] = {
    className: classNames[UI.DayDate],
    style: styles[UI.DayDate]
  };

  const DayDate = components?.DayDate ?? DefaultDayDate;

  return (
    <Day day={props.day} modifiers={modifiers} rootProps={dayRootProps}>
      <DayDate
        day={props.day}
        modifiers={modifiers}
        formattedDate={formatDay(props.day.date, { locale })}
        rootProps={dayDateRootProps}
      />
    </Day>
  );
}
