import {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  PointerEventHandler,
  TouchEventHandler
} from 'react';

import { Day } from '../../classes';
import { useDayPicker } from '../../contexts/DayPickerContext';
import { useModifiers } from '../../contexts/ModifiersContext';
import { useSelection } from '../../contexts/SelectionContext';

import { DayGridCell as _DayGridCell } from './DayGridCell';
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

  const isInteractive = mode || Boolean(onDayClick);

  const selection = useSelection();
  const modifiers = useModifiers().getModifiers(props.day);

  const style = getStyleForModifiers(modifiers, modifiersStyles, styles);
  const className = getClassNamesForModifiers(
    modifiers,
    modifiersClassNames,
    classNames
  );

  const onClick: MouseEventHandler = (e) => {
    if (!selection.isExcluded(props.day.date)) {
      selection?.setSelected(props.day.date, modifiers, e);
    }
    onDayClick?.(props.day.date, modifiers, e);
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
    // switch (e.key) {
    //   case 'ArrowLeft':
    //     e.preventDefault();
    //     e.stopPropagation();
    //     dir === 'rtl' ? focusDayAfter() : focusDayBefore();
    //     break;
    //   case 'ArrowRight':
    //     e.preventDefault();
    //     e.stopPropagation();
    //     dir === 'rtl' ? focusDayBefore() : focusDayAfter();
    //     break;
    //   case 'ArrowDown':
    //     e.preventDefault();
    //     e.stopPropagation();
    //     focusWeekAfter();
    //     break;
    //   case 'ArrowUp':
    //     e.preventDefault();
    //     e.stopPropagation();
    //     focusWeekBefore();
    //     break;
    //   case 'PageUp':
    //     e.preventDefault();
    //     e.stopPropagation();
    //     e.shiftKey ? focusYearBefore() : focusMonthBefore();
    //     break;
    //   case 'PageDown':
    //     e.preventDefault();
    //     e.stopPropagation();
    //     e.shiftKey ? focusYearAfter() : focusMonthAfter();
    //     break;
    //   case 'Home':
    //     e.preventDefault();
    //     e.stopPropagation();
    //     focusStartOfWeek();
    //     break;
    //   case 'End':
    //     e.preventDefault();
    //     e.stopPropagation();
    //     focusEndOfWeek();
    //     break;
    // }
    onDayKeyDown?.(props.day.date, modifiers, e);
  };

  const htmlAttributes: React.HTMLAttributes<HTMLDivElement> = {
    role: 'gridcell',
    className,
    style,
    tabIndex: isInteractive ? 0 : -1,
    ['aria-colindex']: props['aria-colindex'],
    ['aria-disabled']: modifiers.disabled || modifiers.excluded || undefined,
    ['aria-hidden']: modifiers.hidden || undefined,
    ['aria-selected']: modifiers.selected || undefined,
    onClick: isInteractive ? onClick : undefined,
    onBlur,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    onMouseEnter,
    onMouseLeave,
    onPointerEnter,
    onPointerLeave,
    onTouchCancel,
    onTouchEnd,
    onTouchMove,
    onTouchStart
  };

  const DayGridCell = components?.DayGridCell ?? _DayGridCell;

  return (
    <DayGridCell
      day={props.day}
      modifiers={modifiers}
      htmlAttributes={htmlAttributes}
      dayPicker={dayPicker}
      selection={selection}
    >
      {formatDay(props.day.date, { locale })}
    </DayGridCell>
  );
}
