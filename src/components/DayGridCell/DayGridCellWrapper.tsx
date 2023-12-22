import {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  PointerEventHandler,
  TouchEventHandler,
  useEffect,
  useRef
} from 'react';

import { isSameDay } from 'date-fns';

import { Day } from '../../classes';
import { useDayPicker } from '../../contexts/DayPickerContext';
import { useFocus } from '../../contexts/FocusContext';
import { useModifiers } from '../../contexts/ModifiersContext';
import { useSelection } from '../../contexts/SelectionContext';
import { debounce } from '../../utils/debounce';
import { DayGridCell as DefaultGridCell } from './DayGridCell';
import { getClassNamesForModifiers } from './getClassNamesForModifiers';
import { getStyleForModifiers } from './getStyleForModifiers';

export interface DayGridCellWrapperProps
  extends Pick<React.AriaAttributes, 'aria-colindex'> {
  /** The day to be rendered in the gridcell. */
  day: Day;
}

/**
 * Provides a `DayGridCell` the day state and the html attributes.
 * Developers may use a `DayGridCell` component without the need to use hooks.
 */
export function DayGridCellWrapper(props: DayGridCellWrapperProps) {
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
    styles = {}
  } = dayPicker;

  const { isExcluded, setSelected } = useSelection();
  const { getModifiers } = useModifiers();
  const {
    focusTarget,
    focusedDate,
    focus,
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
  } = useFocus();

  const modifiers = getModifiers(props.day);

  /** The day is interactive if it's not excluded and there is a `onDayClick` handler. */
  const isInteractive = mode !== 'none' || Boolean(onDayClick);

  const style = getStyleForModifiers(modifiers, modifiersStyles, styles);
  const className = getClassNamesForModifiers(
    modifiers,
    modifiersClassNames,
    classNames
  );

  const onClick: MouseEventHandler = (e) => {
    if (modifiers.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (!isExcluded(props.day.date)) {
      setSelected(props.day.date, modifiers, e);
    }
    onDayClick?.(props.day.date, modifiers, e);
  };

  const onFocus: FocusEventHandler = (e) => {
    focus(props.day.date);
    dayPicker.onDayFocus?.(props.day.date, modifiers, e);
  };

  const onBlur: FocusEventHandler = (e) => {
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
      case 'ArrowLeft':
        e.preventDefault();
        e.stopPropagation();
        dayPicker.dir === 'rtl' ? focusDayAfter() : focusDayBefore();
        break;
      case 'ArrowRight':
        e.preventDefault();
        e.stopPropagation();
        dayPicker.dir === 'rtl' ? focusDayBefore() : focusDayAfter();
        break;
      case 'ArrowDown':
        e.preventDefault();
        e.stopPropagation();
        focusWeekAfter();
        break;
      case 'ArrowUp':
        e.preventDefault();
        e.stopPropagation();
        focusWeekBefore();
        break;
      case ' ':
      case 'Enter':
        e.preventDefault();
        e.stopPropagation();
        setSelected(props.day.date, modifiers, e);
        break;
      case 'PageUp':
        e.preventDefault();
        e.stopPropagation();
        e.shiftKey ? focusYearBefore() : focusMonthBefore();
        break;
      case 'PageDown':
        e.preventDefault();
        e.stopPropagation();
        e.shiftKey ? focusYearAfter() : focusMonthAfter();
        break;
      case 'Home':
        e.preventDefault();
        e.stopPropagation();
        focusStartOfWeek();
        break;
      case 'End':
        e.preventDefault();
        e.stopPropagation();
        focusEndOfWeek();
        break;
    }
    onDayKeyDown?.(props.day.date, modifiers, e);
  };

  const isFocusTarget =
    focusTarget && isSameDay(focusTarget, props.day.date) && !modifiers.outside;

  const isFocused = focusedDate && isSameDay(focusedDate, props.day.date);

  const htmlAttributes: JSX.IntrinsicElements['div'] = {
    role: 'gridcell',
    className,
    style,
    tabIndex: isFocused || isFocusTarget ? 0 : -1,
    ['aria-colindex']: props['aria-colindex'],
    ['aria-disabled']: modifiers.disabled || modifiers.excluded || undefined,
    ['aria-hidden']: modifiers.hidden || undefined,
    ['aria-selected']: modifiers.selected || undefined,
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
    if (!cellRef.current) return;
    if (!focusedDate) return;
    if (!isSameDay(props.day.date, focusedDate)) return;
    if (modifiers.disabled || modifiers.hidden) return;
    cellRef.current.focus();
  }, [focusedDate, modifiers.disabled, modifiers.hidden, props.day.date]);

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
