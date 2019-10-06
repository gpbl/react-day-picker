import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { DateWithModifiers } from '../classes';
import { prepareDay } from './helpers';

function Day({ day, dayPickerProps }) {
  const { locale } = dayPickerProps;

  const { Container, props, wrapperProps } = prepareDay(day, dayPickerProps);

  if (day.modifiers.hidden) {
    return null;
  }

  return (
    <Container {...props}>
      <span {...wrapperProps}>{format(day, 'd', { locale })}</span>
    </Container>
  );
}

Day.propTypes = {
  day: PropTypes.instanceOf(DateWithModifiers).isRequired,
  dayPickerProps: PropTypes.object.isRequired,
  style: PropTypes.object,
};

export default Day;
