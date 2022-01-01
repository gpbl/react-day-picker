import React from 'react';

import { isSameMonth } from 'date-fns';

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
import { useDayModifiers } from 'hooks/useDayModifiers';
import { isDayPickerMultiple } from 'types/DayPickerMultiple';
import { isDayPickerRange } from 'types/DayPickerRange';
import { isDayPickerSingle } from 'types/DayPickerSingle';
import { DateRange } from 'types/Matchers';
import { ModifiersStatus } from 'types/Modifiers';
import { StyledComponent } from 'types/Styles';

import { useDayFocus } from './useDayFocus';

export type UseDay = {
  /** Whether the date is outside the display month/ */
  isOutside: boolean;
  /** The modifiers for the given date. */
  modifiersStatus: ModifiersStatus;
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
  nonInteractiveProps?: StyledComponent;
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
 *   to allow the focus and the selection. In case of `custom` selection
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
  const dayPicker = useDayPicker();
  const single = useSelectSingle();
  const multiple = useSelectMultiple();
  const range = useSelectRange();
  const dayFocus = useDayFocus(date, buttonRef);
  const dayModifiers = useDayModifiers(date);
  const isOutside = !isSameMonth(date, displayMonth);

  const selected = isDayPickerSingle(dayPicker)
    ? single.selected
    : isDayPickerMultiple(dayPicker)
    ? multiple.selected
    : isDayPickerRange(dayPicker)
    ? range.selected
    : undefined;

  const returnValue: UseDay = {
    isOutside,
    modifiersStatus: dayModifiers.status,
    selected,
    single,
    multiple,
    range
  };

  if (isOutside && !dayPicker.showOutsideDays) {
    return returnValue;
  }
  if (dayModifiers.status.hidden) {
    return returnValue;
  }

  const classNames = [dayPicker.classNames.day].concat(dayModifiers.classNames);
  let style: React.CSSProperties = {
    ...dayPicker.styles.day,
    ...dayModifiers.style
  };

  if (isOutside) {
    classNames.push(dayPicker.classNames.day_outside);
    style = { ...dayPicker.styles, ...dayPicker.styles.day_outside };
  }

  const { DayContent } = dayPicker.components;
  const children = (
    <DayContent
      date={date}
      displayMonth={displayMonth}
      modifiersStatus={dayModifiers.status}
    />
  );

  let className = classNames.join(' ');

  if (!dayPicker.mode && !dayPicker.onDayClick) {
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
  const onClick: React.MouseEventHandler = (e) => {
    if (isDayPickerSingle(dayPicker)) {
      single.onDayClick?.(date, dayModifiers.status, e);
    } else if (isDayPickerMultiple(dayPicker)) {
      multiple.onDayClick?.(date, dayModifiers.status, e);
    } else if (isDayPickerRange(dayPicker)) {
      range.onDayClick?.(date, dayModifiers.status, e);
    }
    dayPicker.onDayClick?.(date, dayModifiers.status, e);
  };

  const onFocus: React.FocusEventHandler = (e) => {
    dayFocus.focus(date);
    dayPicker.onDayFocus?.(date, dayModifiers.status, e);
  };

  const onBlur: React.FocusEventHandler = (e) => {
    dayFocus.blur();
    dayPicker.onDayBlur?.(date, dayModifiers.status, e);
  };

  const onKeyDown: React.KeyboardEventHandler = (e) => {
    dayFocus.onKeyDown(e);
    dayPicker.onDayKeyDown?.(date, dayModifiers.status, e);
  };

  const onKeyUp: React.KeyboardEventHandler = (e) => {
    dayPicker.onDayKeyUp?.(date, dayModifiers.status, e);
  };
  const onMouseEnter: React.MouseEventHandler = (e) => {
    dayPicker.onDayMouseEnter?.(date, dayModifiers.status, e);
  };
  const onMouseLeave: React.MouseEventHandler = (e) => {
    dayPicker.onDayMouseLeave?.(date, dayModifiers.status, e);
  };
  const onTouchCancel: React.TouchEventHandler = (e) => {
    dayPicker.onDayTouchCancel?.(date, dayModifiers.status, e);
  };
  const onTouchEnd: React.TouchEventHandler = (e) => {
    dayPicker.onDayTouchEnd?.(date, dayModifiers.status, e);
  };
  const onTouchMove: React.TouchEventHandler = (e) => {
    dayPicker.onDayTouchMove?.(date, dayModifiers.status, e);
  };
  const onTouchStart: React.TouchEventHandler = (e) => {
    dayPicker.onDayTouchStart?.(date, dayModifiers.status, e);
  };

  if (isOutside) {
    classNames.push(dayPicker.classNames.day_outside);
    style = {
      ...dayPicker.styles,
      ...dayPicker.styles.day_outside
    };
  }

  className = classNames.join(' ');

  return {
    ...returnValue,
    buttonProps: {
      children,
      'aria-pressed': dayModifiers.status.selected,
      style: style,
      disabled: dayModifiers.status.disabled,
      className: className,
      tabIndex: dayFocus.isFocusTarget ? 0 : -1,
      onClick,
      onFocus,
      onBlur,
      onKeyDown,
      onKeyUp,
      onMouseEnter,
      onMouseLeave,
      onTouchCancel,
      onTouchEnd,
      onTouchMove,
      onTouchStart
    }
  };
}
