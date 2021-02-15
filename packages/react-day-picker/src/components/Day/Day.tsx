import { isAfter, isBefore, isSameDay } from 'date-fns';
import * as React from 'react';
import { DayProps } from '../../types';

import { createClassName } from './utils/createClassName';
import { createEventHandlers } from './utils/createEventHandlers';
import { createStyle } from './utils/createStyle';
import { createTabIndex } from './utils/createTabIndex';
import { getModifiers } from './utils/getModifiers';

export function Day(props: DayProps): JSX.Element | null {
  const el = React.useRef<HTMLButtonElement>(null);
  const { day, currentMonth, focusedDay } = props;
  const { locale, showOutsideDays, toDate, fromDate, labelsFormatters } = props;
  const { formatDay } = props.formatters;

  if (toDate && isAfter(day, toDate)) return null;
  if (fromDate && isBefore(day, fromDate)) return null;

  const modifiers = getModifiers(day, currentMonth, props);

  React.useEffect(() => {
    if (!focusedDay) return;
    if (isSameDay(focusedDay, day)) el?.current?.focus();
  }, [focusedDay]);

  if (modifiers.hidden) return null;
  if (modifiers.outside && !showOutsideDays) return null;

  const tabIndex = createTabIndex(day, currentMonth, focusedDay);
  const eventHandlers = createEventHandlers(day, modifiers, props);
  const style = createStyle(day, modifiers, props);
  const className = createClassName(modifiers, props);
  const ariaLabel = labelsFormatters.dayLabel(day, modifiers, props);
  const ariaPressed = modifiers.interactive ? modifiers.selected : undefined;
  const disabled = !modifiers.interactive || modifiers.disabled;

  return (
    <button
      ref={el}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      disabled={disabled}
      style={style}
      className={className}
      tabIndex={tabIndex}
      {...eventHandlers}
    >
      {formatDay(day, { locale })}
    </button>
  );
}
