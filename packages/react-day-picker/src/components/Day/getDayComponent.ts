import { format } from 'date-fns';
import { DayPickerProps, ModifiersStatus } from '../../types';
import { createClassName } from './utils/createClassName';
import { createEventHandlers } from './utils/createEventHandlers';
import { createStyle } from './utils/createStyle';
import { createTabIndex } from './utils/createTabIndex';

import { getModifiers } from './utils/getModifiers';

export function getDayComponent(
  day: Date,
  currentMonth: Date,
  props: DayPickerProps
): {
  modifiers: ModifiersStatus;
  rootProps: Partial<JSX.IntrinsicElements['span']>;
} {
  const modifiers = getModifiers(day, currentMonth, props);

  const { labelsFormatters } = props;

  const tabIndex = createTabIndex(day, modifiers, props);
  const eventHandlers = createEventHandlers(day, modifiers, props);
  const style = createStyle(day, modifiers, props);
  const className = createClassName(day, modifiers, props);
  const rootProps: JSX.IntrinsicElements['button'] = {
    'aria-label': labelsFormatters.Day(day, modifiers, props),
    'aria-pressed': modifiers.interactive ? modifiers.selected : undefined,
    disabled: !modifiers.interactive || modifiers.disabled,
    className,
    style,
    tabIndex,
    ...eventHandlers
  };

  return { modifiers, rootProps };
}
