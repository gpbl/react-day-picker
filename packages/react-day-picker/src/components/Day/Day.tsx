import * as React from 'react';

import { isSameDay, isSameMonth } from 'date-fns';

import { useNavigation, useProps } from '../../hooks';
import {
  DayClickEventHandler,
  DayFocusEventHandler,
  DayKeyboardEventHandler,
  DayMouseEventHandler,
  DayTouchEventHandler,
  UIElement
} from '../../types';
import { getModifiers } from './utils/getModifiers';

export interface DayProps {
  /** The month where the day is displayed. */
  displayMonth: Date;
  /** The day to render. */
  day: Date;
  onDayClick?: DayClickEventHandler;
  onDayFocus?: DayFocusEventHandler;
  onDayBlur?: DayFocusEventHandler;
  onDayMouseEnter?: DayMouseEventHandler;
  onDayMouseLeave?: DayMouseEventHandler;
  onDayKeyDown?: DayKeyboardEventHandler;
  onDayKeyUp?: DayKeyboardEventHandler;
  onDayKeyPress?: DayKeyboardEventHandler;
  onDayTouchCancel?: DayTouchEventHandler;
  onDayTouchEnd?: DayTouchEventHandler;
  onDayTouchMove?: DayTouchEventHandler;
  onDayTouchStart?: DayTouchEventHandler;
}

export function Day(props: DayProps): JSX.Element | null {
  const el = React.useRef<HTMLButtonElement>(null);
  const dayPickerProps = useProps();
  const { labels, formatters, locale, showOutsideDays } = dayPickerProps;
  const { currentMonth, focusedDay } = useNavigation();

  const { displayMonth, day } = props;
  const { formatDay } = formatters;

  // Do not return anything if the day is not in the range
  const modifiers = getModifiers(day, displayMonth, dayPickerProps);

  React.useEffect(() => {
    if (!focusedDay) return;
    if (isSameDay(focusedDay, day)) el?.current?.focus();
  }, [focusedDay]);

  if (modifiers.hidden) return null;
  if (modifiers.outside && !showOutsideDays) return null;

  const ariaLabel = labels.dayLabel(day, modifiers, { locale });
  const ariaPressed = modifiers.interactive ? modifiers.selected : undefined;
  const disabled = !modifiers.interactive || modifiers.disabled;

  // #region TabIndex
  let tabIndex: number;
  if (focusedDay && isSameDay(day, focusedDay)) {
    tabIndex = 0;
  } else if (isSameMonth(day, currentMonth) && day.getDate() === 1) {
    tabIndex = 0;
  } else {
    tabIndex = -1;
  }
  // #endregion

  // #region EventHandlers
  const { onDayBlur, onDayClick, onDayFocus, onDayKeyDown } = dayPickerProps;

  const handleClick: React.MouseEventHandler = (e) => {
    onDayClick?.(day, modifiers, e);
  };
  const handleFocus: React.FocusEventHandler = (e) => {
    onDayFocus?.(day, modifiers, e);
  };
  const handleBlur: React.FocusEventHandler = (e) => {
    onDayBlur?.(day, modifiers, e);
  };
  const handleKeyDown: React.KeyboardEventHandler = (e) => {
    onDayKeyDown?.(day, modifiers, e);
  };
  const handleKeyUp: React.KeyboardEventHandler = (e) => {
    props.onDayKeyUp?.(day, modifiers, e);
  };
  const handleMouseEnter: React.MouseEventHandler = (e) => {
    props.onDayMouseEnter?.(day, modifiers, e);
  };
  const handleMouseLeave: React.MouseEventHandler = (e) => {
    props.onDayMouseLeave?.(day, modifiers, e);
  };
  const handleTouchCancel: React.TouchEventHandler = (e) => {
    props.onDayTouchCancel?.(day, modifiers, e);
  };
  const handleTouchEnd: React.TouchEventHandler = (e) => {
    props.onDayTouchEnd?.(day, modifiers, e);
  };
  const handleTouchMove: React.TouchEventHandler = (e) => {
    props.onDayTouchMove?.(day, modifiers, e);
  };
  const handleTouchStart: React.TouchEventHandler = (e) => {
    props.onDayTouchStart?.(day, modifiers, e);
  };

  // #endregion

  // #region ClassNames
  const { classNames, modifiersClassNames, modifierPrefix } = dayPickerProps;
  const buttonClassNames: (string | undefined)[] = [classNames[UIElement.Day]];
  Object.keys(modifiers)
    .filter((modifier) => Boolean(modifiers[modifier]))
    .forEach((modifier) => {
      if (modifiersClassNames?.[modifier]) {
        // Use class name coming from props
        buttonClassNames.push(modifiersClassNames[modifier]);
      } else {
        // Create a class name with the prefix
        buttonClassNames.push(`${modifierPrefix}${modifier}`);
      }
    });
  // #endregion

  // #region Styles
  const { styles, modifiersStyles } = dayPickerProps;
  let style = { ...styles?.[UIElement.Day] };
  if (styles) {
    Object.keys(modifiers).forEach((modifier) => {
      style = { ...style, ...styles[modifier] };
    });
  }
  if (modifiersStyles) {
    Object.keys(modifiers).forEach((modifier) => {
      style = { ...style, ...modifiersStyles[modifier] };
    });
  }
  // #endregion

  return (
    <button
      ref={el}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      disabled={disabled}
      style={style}
      className={buttonClassNames.join(' ')}
      tabIndex={tabIndex}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchCancel={handleTouchCancel}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
    >
      {formatDay(day, { locale })}
    </button>
  );
}
