import React, { useEffect } from 'react';

import { isSameDay } from 'date-fns';

import { ButtonProps } from 'components/Button';
import { useDayPicker } from 'contexts/DayPicker';
import { useFocusContext } from 'contexts/Focus';
import {
  DayEventHandlers,
  useDayEventHandlers
} from 'hooks/useDayEventHandlers';
import { useModifiersStatus } from 'hooks/useModifiersStatus';
import { ModifiersStatus } from 'types/Modifiers';
import { StyledComponent } from 'types/Styles';

import { getDayClassNames } from './utils/getDayClassNames';
import { getDayStyle } from './utils/getDayStyle';

export type DayRender = {
  /** Whether the day should be rendered a `button` instead of a `div` */
  isButton: boolean;
  /** Whether the day should be hidden. */
  isHidden: boolean;
  /** The status for the modifiers for the given day. */
  modifiersStatus: ModifiersStatus;
  /** The props to apply to the button element (when `isButton` is true). */
  buttonProps: StyledComponent &
    Pick<ButtonProps, 'disabled' | 'aria-pressed' | 'tabIndex'> &
    DayEventHandlers;
  /** The props to apply to the div element (when `isButton` is false). */
  divProps: StyledComponent;
};

/**
 * Return props and data used to render the [[Day]] component.
 *
 * Use this hook when creating a component to replace the built-in `Day`
 * component.
 *
 * Each Day in DayPicker should render one of the following, according to the return
 * value:
 *
 * - an empty `React.Fragment`, to render if `isHidden` is true
 * - a `button` element, when the day is interactive, e.g. is selectable
 * - a `div` element, whe the day is not interactive
 *
 * @param day The date to render
 * @param displayMonth The month where the date is displayed (if not the same as
 * `date`, it means it is an "outside" day)
 * @param buttonRef A ref to the button element that will be target of focus
 * when rendered (if required).
 */
export function useDayRender(
  day: Date,
  displayMonth: Date,
  buttonRef: React.RefObject<HTMLButtonElement>
): DayRender {
  const dayPicker = useDayPicker();
  const focusContext = useFocusContext();
  const modifiersStatus = useModifiersStatus(day, displayMonth);
  const eventHandlers = useDayEventHandlers(day, modifiersStatus);

  const isButton = Boolean(dayPicker.mode || dayPicker.onDayClick);

  // Focus the button if the day is focused according to the focus context
  useEffect(() => {
    if (!focusContext.focusedDay) return;
    if (!isButton) return;
    if (isSameDay(focusContext.focusedDay, day)) {
      buttonRef.current?.focus();
    }
  }, [focusContext.focusedDay, day, buttonRef, isButton]);

  const className = getDayClassNames(dayPicker, modifiersStatus).join(' ');
  const style = getDayStyle(dayPicker, modifiersStatus);

  const isHidden = Boolean(
    (modifiersStatus.outside && !dayPicker.showOutsideDays) ||
      modifiersStatus.hidden
  );

  const children = (
    <dayPicker.components.DayContent
      date={day}
      displayMonth={displayMonth}
      modifiersStatus={modifiersStatus}
    />
  );

  const divProps = {
    style,
    className,
    children
  };

  const isFocusTarget = Boolean(
    focusContext.focusTarget && isSameDay(focusContext.focusTarget, day)
  );
  const buttonProps = {
    ...divProps,
    disabled: modifiersStatus.disabled,
    ['aria-pressed']: modifiersStatus.selected,
    tabIndex: isFocusTarget ? 0 : -1,
    ...eventHandlers
  };

  const dayRender: DayRender = {
    isButton,
    isHidden,
    modifiersStatus,
    buttonProps,
    divProps
  };

  return dayRender;
}
