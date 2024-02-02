import {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  PointerEventHandler,
  TouchEventHandler,
  useEffect,
  useRef,
} from "react";

import { CalendarDay } from "../classes/CalendarDay";
import { useDayPicker } from "../contexts/DayPickerContext";
import { useFocus } from "../contexts/FocusContext";
import { useModifiers } from "../contexts/ModifiersContext";
import { useSelection } from "../contexts/SelectionContext";
import { debounce } from "../utils/debounce";
import { DayGridCell as DefaultGridCell } from "./DayGridCell";
import { getClassNamesForModifiers } from "./utils/getClassNamesForModifiers";
import { getStyleForModifiers } from "./utils/getStyleForModifiers";

/**
 * Provides a `DayGridCell` the day state and the html attributes. Developers
 * may use a `DayGridCell` component without the need to use hooks.
 *
 * @internal
 */
export function DayGridCellWrapper(props: {
  "aria-colindex": number;
  /** The day to be rendered in the gridcell. */
  day: CalendarDay;
}) {
  const dayPicker = useDayPicker();

  const cellRef = useRef<HTMLDivElement>(null);

  const {
    classNames,
    components,
    formatters: { formatDay },
    locale,
    mode,
    modifiersClassNames = {},
    modifiersStyles = {},
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
    styles = {},
  } = dayPicker;

  const { isExcluded, setSelected } = useSelection();
  const { getModifiers } = useModifiers();
  const {
    autoFocusTarget,
    focusedDay,
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
    focusEndOfWeek,
  } = useFocus();

  const modifiers = getModifiers(props.day);

  const onClick: MouseEventHandler = (e) => {
    if (modifiers.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (!isExcluded(props.day.date)) {
      setSelected(props.day.date, modifiers, e);
    }
    if (modifiers.focusable) {
      focus(props.day);
    }
    onDayClick?.(props.day.date, modifiers, e);
  };

  const onFocus: FocusEventHandler = (e) => {
    focus(props.day);
    dayPicker.onDayFocus?.(props.day.date, modifiers, e);
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
        dayPicker.dir === "rtl" ? focusDayAfter() : focusDayBefore();
        break;
      case "ArrowRight":
        e.preventDefault();
        e.stopPropagation();
        dayPicker.dir === "rtl" ? focusDayBefore() : focusDayAfter();
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
        setSelected(props.day.date, modifiers, e);
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
  const isFocused = Boolean(focusedDay?.isEqualTo(props.day));

  /**
   * The day is interactive if it's not excluded and there is a `onDayClick`
   * handler.
   */
  const isInteractive = mode !== "none" || Boolean(onDayClick);

  const style = getStyleForModifiers(modifiers, modifiersStyles, styles);

  const classNameForModifiers = getClassNamesForModifiers(
    modifiers,
    modifiersClassNames,
    classNames,
  );

  const className = classNames?.day
    ? [classNames?.day, ...classNameForModifiers]
    : classNameForModifiers;

  if (isFocused && classNames?.day_focused) {
    className.push(classNames.day_focused);
  }

  const htmlAttributes: JSX.IntrinsicElements["div"] = {
    role: "gridcell",
    className: className.join(" "),
    style,
    tabIndex: isFocused || isAutoFocusTarget ? 0 : -1,
    ["aria-colindex"]: props["aria-colindex"],
    ["aria-disabled"]: modifiers.disabled || modifiers.excluded || undefined,
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
    ref: cellRef,
  };

  useEffect(() => {
    if (!cellRef.current) return; // no element to focus
    if (!focusedDay) return; // no day to focus
    if (!props.day.isEqualTo(focusedDay)) return; // not this day`
    if (modifiers.disabled || modifiers.hidden) return; // cannot focus

    cellRef.current.focus();
  }, [focusedDay, modifiers.disabled, modifiers.hidden, props.day]);

  const DayGridCell = components?.DayGridCell ?? DefaultGridCell;

  return (
    <DayGridCell
      day={props.day}
      modifiers={modifiers}
      htmlAttributes={htmlAttributes}
    >
      {formatDay(props.day.date, { locale })}
    </DayGridCell>
  );
}
