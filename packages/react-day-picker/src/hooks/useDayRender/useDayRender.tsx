import React, { useEffect } from 'react';

import isSameDay from 'date-fns/isSameDay';

import { ButtonProps } from 'components/Button';
import { DayContent } from 'components/DayContent';
import { useDayPicker } from 'contexts/DayPicker';
import { useFocusContext } from 'contexts/Focus';
import { useActiveModifiers } from 'hooks/useActiveModifiers';
import { useDayEventHandlers } from 'hooks/useDayEventHandlers';
import { SelectedDays, useSelectedDays } from 'hooks/useSelectedDays';
import { ActiveModifiers } from 'types/Modifiers';

import { getDayClassNames } from './utils/getDayClassNames';
import { getDayStyle } from './utils/getDayStyle';

export type DayRender = {
  /** Whether the day should be rendered a `button` instead of a `div` */
  isButton: boolean;
  /** Whether the day should be hidden. */
  isHidden: boolean;
  /** The modifiers active for the given day. */
  activeModifiers: ActiveModifiers;
  /** The props to apply to the button element (when `isButton` is true). */
  buttonProps: ButtonProps;
  /** The props to apply to the div element (when `isButton` is false). */
  divProps: JSX.IntrinsicElements['div'];
  selectedDays: SelectedDays;
};

/**
 * Return props and data used to render the {@link Day} component.
 *
 * Use this hook when creating a component to replace the built-in `Day`
 * component.
 */
export function useDayRender(
  /** The date to render. */
  day: Date,
  /** The month where the date is displayed (if not the same as `date`, it means it is an "outside" day). */
  displayMonth: Date,
  /** A ref to the button element that will be target of focus when rendered (if required). */
  buttonRef: React.RefObject<HTMLButtonElement>
): DayRender {
  const dayPicker = useDayPicker();
  const focusContext = useFocusContext();
  const activeModifiers = useActiveModifiers(day, displayMonth);
  const eventHandlers = useDayEventHandlers(day, activeModifiers);
  const selectedDays = useSelectedDays();
  const isButton = Boolean(
    dayPicker.onDayClick || dayPicker.mode !== 'default'
  );

  // Focus the button if the day is focused according to the focus context
  useEffect(() => {
    if (activeModifiers.outside) return;
    if (!focusContext.focusedDay) return;
    if (!isButton) return;
    if (isSameDay(focusContext.focusedDay, day)) {
      buttonRef.current?.focus();
    }
  }, [
    focusContext.focusedDay,
    day,
    buttonRef,
    isButton,
    activeModifiers.outside
  ]);

  const className = getDayClassNames(dayPicker, activeModifiers).join(' ');
  const style = getDayStyle(dayPicker, activeModifiers);
  const isHidden = Boolean(
    (activeModifiers.outside && !dayPicker.showOutsideDays) ||
      activeModifiers.hidden
  );

  const DayContentComponent = dayPicker.components?.DayContent ?? DayContent;
  const children = (
    <DayContentComponent
      date={day}
      displayMonth={displayMonth}
      activeModifiers={activeModifiers}
    />
  );

  const divProps = {
    style,
    className,
    children,
    role: 'gridcell',
    'aria-selected': Boolean(activeModifiers.selected)
  };

  const isFocusTarget = Boolean(
    focusContext.focusTarget && isSameDay(focusContext.focusTarget, day)
  );
  const buttonProps: ButtonProps = {
    ...divProps,
    name: 'day',
    disabled: activeModifiers.disabled,
    tabIndex: isFocusTarget ? 0 : -1,
    ...eventHandlers
  };

  const dayRender: DayRender = {
    isButton,
    isHidden,
    activeModifiers: activeModifiers,
    selectedDays,
    buttonProps,
    divProps
  };

  return dayRender;
}
