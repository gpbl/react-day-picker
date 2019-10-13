import * as React from 'react';
import { getDayProps } from './helpers/getDayProps';
import { DayProps } from './types';
export const Day: React.FC<DayProps> = props => {
  const { day, modifiers, dayPickerProps } = props;
  const { locale, formatDay } = dayPickerProps;

  const { containerProps, wrapperProps } = getDayProps(
    day,
    modifiers,
    dayPickerProps
  );

  if (modifiers && modifiers.hidden) {
    return <span />;
  }

  const Component = modifiers.interactive ? 'button' : 'span';

  return (
    <Component {...containerProps}>
      <span {...wrapperProps}>{formatDay(day, { locale })}</span>
    </Component>
  );
};
