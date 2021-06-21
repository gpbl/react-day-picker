import React from 'react';

import { isSameMonth } from 'date-fns';

import {
  DateRange,
  isDayPickerMultiple,
  isDayPickerRange,
  isDayPickerSingle,
  ModifierStatus,
  StyledComponentProps
} from 'types';

import { useDayPicker } from 'contexts/DayPicker';
import {
  SelectMultipleContextValue,
  useSelectMultiple
} from 'contexts/SelectMultiple';
import { SelectRangeContextValue, useSelectRange } from 'contexts/SelectRange';
import {
  SelectSingleContextValue,
  useSelectSingle
} from 'contexts/SelectSingle';
import { useModifiers } from 'hooks';

import { useDayFocus } from './useDayFocus';

export type UseDay = {
  /** Whether the date is outside the display month/ */
  isOutside: boolean;
  /** The modifiers for the given date. */
  modifiers: ModifierStatus;
  /** The days in DayPicker currently selected. */
  selected: Date | Date[] | DateRange | undefined;
  /**
   * The props for rendering the day as interactive element.
   *
   * When `undefined`, DayPicker should render a non interactive element with non-interactive
   * props.
   */
  buttonProps?: Omit<React.HTMLProps<HTMLButtonElement>, 'ref'>;
  /**
   * The props for rendering the day as not interactive element.
   *
   * When both this value and `buttonProps` are `undefined`, DayPicker should not render anything.
   */
  nonInteractiveProps?: StyledComponentProps;
  single: SelectSingleContextValue;
  multiple: SelectMultipleContextValue;
  range: SelectRangeContextValue;
};

/**
 * This hook returns details about the content to render in the day cell.
 *
 *
 * When a day cell is rendered in the table, DayPicker can either:
 *
 * - render nothing: when the day is outside the month or has matched the
 *   "hidden" modifier.
 * - render a button. When a selection mode is set, DayPicker renders a button
 *   to allow the focus and the selection. In case of `uncontrolled` selection
 *   mode, DayPicker expects a `onDayClick` prop to render a button.
 * - render a non-interactive element: when no selection mode is set, the day
 *   cell shouldn’t respond to any interaction. DayPicker should render a `div`
 *   or a `span`.
 *
 * ### Usage
 *
 * Use this hook to customize the behavior of the [[Day]] component. Create a
 * new `Day` component using this hook and pass it to the `components` prop.
 * The source of [[Day]] can be a good starting point.
 *
 * */
export function useDay(
  /** The day rendered in the month. */
  date: Date,
  /** The month where the date is displayed. DayPicker renders days outside the display month when `showOutsideDays` is true. */
  displayMonth: Date,
  /** A ref to the button element. */
  buttonRef: React.RefObject<HTMLButtonElement>
): UseDay {
  const context = useDayPicker();
  const single = useSelectSingle();
  const multiple = useSelectMultiple();
  const range = useSelectRange();
  const { focus, blur, focusOnKeyDown, isFocused } = useDayFocus(
    date,
    buttonRef
  );

  const { modifiers, modifierClassNames, modifierStyle } = useModifiers(date);
  const isOutside = !isSameMonth(date, displayMonth);

  const returnValue = {
    isOutside: true,
    modifiers,
    selected: isDayPickerSingle(context)
      ? single.selected
      : isDayPickerMultiple(context)
      ? multiple.selected
      : isDayPickerRange(context)
      ? range.selected
      : undefined,
    single,
    multiple,
    range
  };
  if (isOutside && !context.showOutsideDays) {
    return returnValue;
  }
  if (modifiers.hidden) {
    return returnValue;
  }

  const classNames = [context.classNames.day].concat(modifierClassNames);
  let style: React.CSSProperties = { ...context.styles.day, ...modifierStyle };

  if (isOutside) {
    classNames.push(context.classNames.day_outside);
    style = { ...context.styles, ...context.styles.day_outside };
  }

  const { DayContent } = context.components;
  const children = (
    <DayContent date={date} displayMonth={displayMonth} modifiers={modifiers} />
  );

  let className = classNames.join(' ');

  if (!context.mode) {
    return {
      ...returnValue,
      nonInteractiveProps: {
        style,
        className,
        children
      }
    };
  }

  // #region Event handlers
  const handleClick: React.MouseEventHandler = (e) => {
    if (isDayPickerSingle(context)) {
      single.handleDayClick?.(date, modifiers, e);
    } else if (isDayPickerMultiple(context)) {
      multiple.handleDayClick?.(date, modifiers, e);
    } else if (isDayPickerRange(context)) {
      range.handleDayClick?.(date, modifiers, e);
    }
    context.onDayClick?.(date, modifiers, e);
  };

  const handleFocus: React.FocusEventHandler = (e) => {
    focus(date);
    context.onDayFocus?.(date, modifiers, e);
  };

  const handleBlur: React.FocusEventHandler = (e) => {
    blur();
    context.onDayBlur?.(date, modifiers, e);
  };

  const handleKeyDown: React.KeyboardEventHandler = (e) => {
    focusOnKeyDown(e);
    context.onDayKeyDown?.(date, modifiers, e);
  };

  const handleKeyUp: React.KeyboardEventHandler = (e) => {
    context.onDayKeyUp?.(date, modifiers, e);
  };
  const handleMouseEnter: React.MouseEventHandler = (e) => {
    context.onDayMouseEnter?.(date, modifiers, e);
  };
  const handleMouseLeave: React.MouseEventHandler = (e) => {
    context.onDayMouseLeave?.(date, modifiers, e);
  };
  const handleTouchCancel: React.TouchEventHandler = (e) => {
    context.onDayTouchCancel?.(date, modifiers, e);
  };
  const handleTouchEnd: React.TouchEventHandler = (e) => {
    context.onDayTouchEnd?.(date, modifiers, e);
  };
  const handleTouchMove: React.TouchEventHandler = (e) => {
    context.onDayTouchMove?.(date, modifiers, e);
  };
  const handleTouchStart: React.TouchEventHandler = (e) => {
    context.onDayTouchStart?.(date, modifiers, e);
  };

  if (isOutside) {
    classNames.push(context.classNames.day_outside);
    style = { ...context.styles, ...context.styles.day_outside };
  }

  className = classNames.join(' ');

  const { selected, disabled } = modifiers;

  const tabIndex = disabled || isFocused ? -1 : 0;

  return {
    ...returnValue,
    buttonProps: {
      children,
      'aria-pressed': selected,
      style: style,
      disabled: disabled,
      className: className,
      tabIndex: tabIndex,
      onClick: handleClick,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onTouchCancel: handleTouchCancel,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove,
      onTouchStart: handleTouchStart
    }
  };
}
