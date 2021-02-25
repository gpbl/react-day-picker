import * as React from 'react';

import { isSameDay, isSameMonth } from 'date-fns';

import { useDayPicker, useModifiers, useSelection } from '../../hooks';
import { useFocus } from '../../hooks/useFocus';
import { KeyCode, UIElement } from '../../types';
import { createHandlers } from './utils/createHandlers';

/** Represent the props used by the [[Day]] component. */
export interface DayProps {
  /** The month where the date is displayed. */
  displayMonth: Date;
  /** The date to render. */
  date: Date;
}

/**
 * Render the content of a date cell, as a button or span element according to
 * its modifiers. Attaches the event handlers from DayPicker context, and manage the
 * focused date.
 */
export function Day(props: DayProps): JSX.Element | null {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const { date, displayMonth } = props;
  const context = useDayPicker();
  const selection = useSelection();
  const status = useModifiers(date);
  const [
    focusedDay,
    { focusDayAfter, focusDayBefore, focusDayDown, focusDayUp, blur, focus }
  ] = useFocus();

  const {
    classNames,
    formatters: { formatDay },
    labels: { labelDay },
    locale,
    modifierClassNames,
    modifierPrefix,
    modifierStyles,
    showOutsideDays,
    styles,
    onDayClick,
    mode
  } = context;

  React.useEffect(() => {
    if (!focusedDay) return;
    if (isSameDay(focusedDay, date)) {
      buttonRef.current?.focus();
    }
  }, [focusedDay]);

  if (status.hidden) return <span />;

  const ariaLabel = labelDay(date, status, { locale });
  const ariaPressed = status.selected;

  const handleClick: React.MouseEventHandler = (e) => {
    if (mode !== 'uncontrolled') {
      selection[mode].onDayClick?.(date, status, e);
    }
    onDayClick?.(date, status, e);
  };

  const handleFocus: React.FocusEventHandler = (e) => {
    focus(date);
  };
  const handleBlur: React.FocusEventHandler = (e) => {
    blur();
  };
  const handleKeyDown: React.KeyboardEventHandler = (e) => {
    switch (e.key) {
      case KeyCode.ArrowLeft:
        e.preventDefault();
        e.stopPropagation();
        focusDayBefore();
        break;
      case KeyCode.ArrowRight:
        e.preventDefault();
        e.stopPropagation();
        focusDayAfter();
        break;
      case KeyCode.ArrowDown:
        e.preventDefault();
        e.stopPropagation();
        focusDayDown();
        break;
      case KeyCode.ArrowUp:
        e.preventDefault();
        e.stopPropagation();
        focusDayUp();
        break;
    }
  };

  const otherEventHandlers = createHandlers(date, status, context);
  const buttonClassNames: (string | undefined)[] = [classNames[UIElement.Day]];

  const isOutside = !isSameMonth(date, displayMonth);
  if (isOutside) {
    buttonClassNames.push(classNames[UIElement.Outside]);
  }

  const isToday = isSameDay(date, context.today);
  if (isToday) {
    buttonClassNames.push(classNames[UIElement.Today]);
  }

  Object.keys(status)
    .filter((modifier) => Boolean(status[modifier]))
    .forEach((modifier) => {
      if (modifierClassNames[modifier]) {
        buttonClassNames.push(modifierClassNames[modifier]);
      } else {
        buttonClassNames.push(`${modifierPrefix}${modifier}`);
      }
    });

  let style = { ...styles[UIElement.Day] };
  if (styles) {
    Object.keys(status).forEach(
      (modifier) => (style = { ...style, ...styles[modifier] })
    );
  }
  if (modifierStyles) {
    Object.keys(status).forEach(
      (modifier) => (style = { ...style, ...modifierStyles[modifier] })
    );
  }

  if (isOutside && !showOutsideDays) return <span />;
  if (status.hidden) return <span />;

  const formattedDay = formatDay(date, { locale });
  if (status.disabled || isOutside) {
    return (
      <span style={style} className={buttonClassNames.join(' ')}>
        {formattedDay}
      </span>
    );
  }

  let tabIndex = 0;
  if (focusedDay && !isSameDay(focusedDay, date)) tabIndex = -1;

  return (
    <button
      ref={buttonRef}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      style={style}
      className={buttonClassNames.join(' ')}
      tabIndex={tabIndex}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      {...otherEventHandlers}
    >
      {formattedDay}
    </button>
  );
}
