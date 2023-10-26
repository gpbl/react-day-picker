import {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  PointerEventHandler,
  TouchEventHandler
} from 'react';

import { DayPickerDay } from '../../contexts/CalendarContext';
import { useDayPicker } from '../../contexts/DayPickerContext';
import { useModifiers } from '../../contexts/ModifiersContext';
import { useSelection } from '../../contexts/SelectionContext';

import { DayGridCell as _DayGridCell } from './DayGridCell';
import { getClassNamesForModifiers } from './getClassNamesForModifiers';
import { getStyleForModifiers } from './getStyleForModifiers';

export interface DayGridCellWrapperProps
  extends Pick<React.AriaAttributes, 'aria-colindex'> {
  day: DayPickerDay;
}

/**
 * Provides a {@link DayGridCell} the day state and the html attributes.
 * Developers may use a `DayGridCell` component without the need to use hooks.
 */
export function DayGridCellWrapper(
  props: DayGridCellWrapperProps
): JSX.Element {
  const {
    classNames,
    components,
    formatters: { formatDay },
    locale,
    modifiersClassNames = {},
    modifiersStyles = {},
    onSelect,
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
  } = useDayPicker();

  const isInteractive = Boolean(onSelect) || Boolean(onDayClick);

  const selection = useSelection();
  const dayModifiers = useModifiers().getDayModifiers(props.day);

  const style = getStyleForModifiers(dayModifiers, modifiersStyles, styles);
  const className = getClassNamesForModifiers(
    dayModifiers,
    modifiersClassNames,
    classNames
  );

  const onClick: MouseEventHandler = (e) => {
    selection?.setSelected(props.day.date, dayModifiers, e);
    onDayClick?.(props.day.date, dayModifiers, e);
  };

  // const onFocus: FocusEventHandler = (e) => {
  //   focus(props.day.date);
  //   onDayFocus?.(props.day.date, matchingModifiers, e);
  // };

  const onBlur: FocusEventHandler = (e) => {
    // blur();
    onDayBlur?.(props.day.date, dayModifiers, e);
  };

  const onMouseEnter: MouseEventHandler = (e) => {
    onDayMouseEnter?.(props.day.date, dayModifiers, e);
  };
  const onMouseLeave: MouseEventHandler = (e) => {
    onDayMouseLeave?.(props.day.date, dayModifiers, e);
  };
  const onPointerEnter: PointerEventHandler = (e) => {
    onDayPointerEnter?.(props.day.date, dayModifiers, e);
  };
  const onPointerLeave: PointerEventHandler = (e) => {
    onDayPointerLeave?.(props.day.date, dayModifiers, e);
  };
  const onTouchCancel: TouchEventHandler = (e) => {
    onDayTouchCancel?.(props.day.date, dayModifiers, e);
  };
  const onTouchEnd: TouchEventHandler = (e) => {
    onDayTouchEnd?.(props.day.date, dayModifiers, e);
  };
  const onTouchMove: TouchEventHandler = (e) => {
    onDayTouchMove?.(props.day.date, dayModifiers, e);
  };
  const onTouchStart: TouchEventHandler = (e) => {
    onDayTouchStart?.(props.day.date, dayModifiers, e);
  };

  const onKeyUp: KeyboardEventHandler = (e) => {
    onDayKeyUp?.(props.day.date, dayModifiers, e);
  };

  const onKeyPress: KeyboardEventHandler = (e) => {
    onDayKeyPress?.(props.day.date, dayModifiers, e);
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
    onDayKeyDown?.(props.day.date, dayModifiers, e);
  };

  const htmlAttributes: React.HTMLAttributes<HTMLDivElement> = {
    role: 'gridcell',
    className,
    style,
    tabIndex: isInteractive ? 0 : -1,
    ['aria-colindex']: props['aria-colindex'],
    ['aria-disabled']: dayModifiers.disabled || undefined,
    ['aria-hidden']: dayModifiers.hidden || undefined,
    ['aria-selected']: dayModifiers.selected || undefined,
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
      modifiers={dayModifiers}
      htmlAttributes={htmlAttributes}
    >
      {formatDay(props.day.date, { locale })}
    </DayGridCell>
  );
}
