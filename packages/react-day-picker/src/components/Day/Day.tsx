import * as React from 'react';

import { getDayProps } from './getDayProps';
import { useModifiers } from '../../hooks/useModifiers';
import { DayProps } from './types';

/**
 * The `Day` component renders the content of the day cell. It renders a button
 * if the day is interactive (i.e. it is clickable).
 *
 * This component can be [[include:swizzling.md]].
 *
 * @category Components
 */
export function Day(props: DayProps): JSX.Element {
  const { day, dayPickerProps, currentMonth } = props;
  const { locale, formatDay } = dayPickerProps;

  const modifiers = useModifiers(day, currentMonth, dayPickerProps);

  if (modifiers.hidden) {
    return <span aria-hidden />;
  }

  const { containerProps, wrapperProps } = getDayProps(
    day,
    modifiers,
    dayPickerProps
  );

  const Component = modifiers.interactive ? 'button' : 'span';
  return (
    <Component {...containerProps}>
      <span {...wrapperProps}>{formatDay?.(day, { locale })}</span>
    </Component>
  );
}
