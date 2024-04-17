import { useEffect, useRef } from 'react';

import { isSameDay } from 'date-fns';

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
  /** Whether the day should be hidden. */
  isHidden: boolean;
  /** Whether the day is interactive */
  isInteractive: boolean;
  /** The modifiers active for the given day. */
  activeModifiers: ActiveModifiers;
  /** The props to apply to the grid cell element (when interactive) */
  htmlAttributes: JSX.IntrinsicElements['td'];
  /** The selected days. */
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
  displayMonth: Date
): DayRender {
  const gridcellRef = useRef<HTMLTableCellElement>(null);
  const dayPicker = useDayPicker();
  const focusContext = useFocusContext();
  const activeModifiers = useActiveModifiers(day, displayMonth);
  const eventHandlers = useDayEventHandlers(day, activeModifiers);
  const selectedDays = useSelectedDays();
  const isInteractive = Boolean(
    dayPicker.onDayClick || dayPicker.mode !== 'default'
  );

  // Focus the button if the day is focused according to the focus context
  useEffect(() => {
    if (activeModifiers.outside) return;
    if (!focusContext.focusedDay) return;
    if (!isInteractive) return;
    if (isSameDay(focusContext.focusedDay, day)) {
      if (!gridcellRef.current) {
        console.log('gridcellRef.current is null');
      }
      gridcellRef.current?.focus();
    }
  }, [
    focusContext.focusedDay,
    day,
    gridcellRef,
    isInteractive,
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

  const isFocusTarget =
    focusContext.focusTarget &&
    isSameDay(focusContext.focusTarget, day) &&
    !activeModifiers.outside;

  const isFocused =
    focusContext.focusedDay && isSameDay(focusContext.focusedDay, day);

  const htmlAttributes = {
    ref: gridcellRef,
    style,
    className,
    tabIndex: isFocused || isFocusTarget ? 0 : -1,
    ['aria-disabled']: activeModifiers.disabled,
    ['aria-selected']: activeModifiers.selected,
    children: isHidden ? null : children,
    ...eventHandlers
  };

  const dayRender: DayRender = {
    isHidden,
    isInteractive,
    activeModifiers,
    selectedDays,
    htmlAttributes
  };

  return dayRender;
}
