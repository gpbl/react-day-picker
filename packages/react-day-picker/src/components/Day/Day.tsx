import React, { useEffect, useRef } from 'react';

import { isSameDay } from 'date-fns';

import { useDayPicker } from 'contexts/DayPicker';
import { useFocusContext } from 'contexts/Focus';
import { matchModifiers, useModifiers } from 'contexts/Modifiers';
import { useDayEventHandlers } from 'hooks/useDayEventHandlers';

import { Button } from '../Button';
import { getClassNames } from './utils/getClassNames';
import { getStyle } from './utils/getStyle';

/** Represent the props used by the [[Day]] component. */
export interface DayProps {
  /** The month where the date is displayed. */
  displayMonth: Date;
  /** The date to render. */
  date: Date;
}

/**
 * The content of a day cell – as a button or span element according to its
 * modifiers.
 */
export function Day(props: DayProps): JSX.Element {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dayPicker = useDayPicker();
  const focusContext = useFocusContext();
  const modifiers = useModifiers();

  const modifiersStatus = matchModifiers(
    props.date,
    modifiers,
    props.displayMonth
  );

  const eventHandlers = useDayEventHandlers(props.date, modifiersStatus);

  useEffect(() => {
    if (!focusContext.focusedDay) {
      return;
    }
    if (isSameDay(focusContext.focusedDay, props.date)) {
      buttonRef.current?.focus();
    }
  }, [focusContext.focusedDay, props.date, buttonRef]);

  if (modifiersStatus.outside && !dayPicker.showOutsideDays) {
    return <></>;
  }
  if (modifiersStatus.hidden) {
    return <></>;
  }

  const classNames = getClassNames(
    modifiersStatus,
    dayPicker.modifiersClassNames,
    dayPicker.modifierPrefix
  );

  const style =
    dayPicker.modifiersStyles &&
    getStyle(modifiersStatus, dayPicker.modifiersStyles);
  const { DayContent } = dayPicker.components;

  if (!dayPicker.mode && !dayPicker.onDayClick) {
    return (
      <div style={style} className={classNames.join(' ')}>
        <DayContent
          date={props.date}
          displayMonth={props.displayMonth}
          modifiersStatus={modifiersStatus}
        />
      </div>
    );
  }

  const isFocusTarget = Boolean(
    focusContext.focusTarget && isSameDay(focusContext.focusTarget, props.date)
  );

  return (
    <Button
      ref={buttonRef}
      style={style}
      className={classNames.join(' ')}
      disabled={modifiersStatus.disabled}
      aria-pressed={modifiersStatus.selected}
      tabIndex={isFocusTarget ? 0 : -1}
      {...eventHandlers}
    >
      <DayContent
        date={props.date}
        displayMonth={props.displayMonth}
        modifiersStatus={modifiersStatus}
      />
    </Button>
  );
}
