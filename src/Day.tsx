import * as React from 'react';
import { prepareDay } from './helpers/prepareDay';
import { DayProps } from './types';
export const Day: React.FC<DayProps> = props => {
  const { day, modifiers, dayPickerProps } = props;
  const { locale, formatDay } = dayPickerProps;

  const { Container, containerProps, wrapperProps } = prepareDay(
    day,
    modifiers,
    dayPickerProps
  );

  if (modifiers && modifiers.hidden) {
    return <span />;
  }

  return (
    <Container {...containerProps}>
      <span {...wrapperProps}>{formatDay(day, { locale })}</span>
    </Container>
  );
};
