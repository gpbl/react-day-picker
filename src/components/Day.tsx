import * as React from 'react';
import { prepareDay } from './helpers';
import { DayPicker } from 'types/DayPicker';
import { Modifiers } from 'types/Modifiers';

interface DayProps {
  day: Date;
  modifiers: Modifiers;
  dayPickerProps: DayPicker;
}

export const Day: React.FC<DayProps> = props => {
  const { day, modifiers, dayPickerProps } = props;
  const { locale, formatDay } = dayPickerProps;

  const { Container, htmlProps, wrapperHtmlProps } = prepareDay(
    day,
    modifiers,
    dayPickerProps
  );

  if (modifiers && modifiers.hidden) {
    return <span />;
  }

  return (
    <Container {...htmlProps}>
      <span {...wrapperHtmlProps}>{formatDay(day, { locale })}</span>
    </Container>
  );
};
