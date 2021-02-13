import { addDays, addWeeks } from 'date-fns';
import { DayPickerProps, ModifiersStatus } from 'types';

export function createEventHandlers(
  day: Date,
  modifiers: ModifiersStatus,
  props: DayPickerProps
): {
  onClick?: React.MouseEventHandler;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
  onKeyUp?: React.KeyboardEventHandler;
  onKeyPress?: React.KeyboardEventHandler;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  onTouchCancel?: React.TouchEventHandler;
  onTouchEnd?: React.TouchEventHandler;
  onTouchMove?: React.TouchEventHandler;
  onTouchStart?: React.TouchEventHandler;
} {
  const onClick: React.MouseEventHandler = (e) => {
    props?.onDayClick?.(day, modifiers, e);
  };
  const onFocus: React.FocusEventHandler = (e) => {
    props.onDayFocus?.(day, modifiers, e);
  };
  const onBlur: React.FocusEventHandler = (e) => {
    props.onDayBlur?.(day, modifiers, e);
  };
  const onKeyDown: React.KeyboardEventHandler = (e) => {
    switch (e.code) {
      case 'ArrowLeft': {
        e.preventDefault();
        e.stopPropagation();
        const nextDay = addDays(day, -1);
        props.onDayFocus?.(nextDay, modifiers, e);
        break;
      }
      case 'ArrowRight': {
        e.preventDefault();
        e.stopPropagation();
        const nextDay = addDays(day, 1);
        props.onDayFocus?.(nextDay, modifiers, e);
        return;
      }
      case 'ArrowUp': {
        e.preventDefault();
        e.stopPropagation();
        const nextDay = addWeeks(day, -1);
        props.onDayFocus?.(nextDay, modifiers, e);
        break;
      }
      case 'ArrowDown': {
        e.preventDefault();
        e.stopPropagation();
        const nextDay = addWeeks(day, 1);
        props.onDayFocus?.(nextDay, modifiers, e);
        break;
      }
      case 'Space':
      case 'Enter': {
        if (!props.onDayClick) return;
        props.onDayClick(day, modifiers, e);
        e.preventDefault();
        e.stopPropagation();
        break;
      }
    }
    props?.onDayKeyDown?.(day, modifiers, e);
  };
  const onKeyUp: React.KeyboardEventHandler = (e) => {
    props.onDayKeyUp?.(day, modifiers, e);
  };
  const onKeyPress: React.KeyboardEventHandler = (e) => {
    props.onDayKeyPress?.(day, modifiers, e);
  };
  const onMouseEnter: React.MouseEventHandler = (e) => {
    props.onDayMouseEnter?.(day, modifiers, e);
  };
  const onMouseLeave: React.MouseEventHandler = (e) => {
    props.onDayMouseLeave?.(day, modifiers, e);
  };
  const onTouchCancel: React.TouchEventHandler = (e) => {
    props.onDayTouchCancel?.(day, modifiers, e);
  };
  const onTouchEnd: React.TouchEventHandler = (e) => {
    props.onDayTouchEnd?.(day, modifiers, e);
  };
  const onTouchMove: React.TouchEventHandler = (e) => {
    props.onDayTouchMove?.(day, modifiers, e);
  };
  const onTouchStart: React.TouchEventHandler = (e) => {
    props.onDayTouchStart?.(day, modifiers, e);
  };

  return {
    onClick,
    onFocus,
    onBlur,
    onKeyDown,
    onKeyUp,
    onKeyPress,
    onMouseEnter,
    onMouseLeave,
    onTouchCancel,
    onTouchEnd,
    onTouchMove,
    onTouchStart
  };
}
