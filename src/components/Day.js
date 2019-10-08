import React from 'react';
import PropTypes from 'prop-types';
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
      <span {...wrapperProps}>{dayPickerProps.formatDay(day, { locale })}</span>
    </Container>
  );
}

Day.propTypes = {
  day: PropTypes.instanceOf(DateWithModifiers).isRequired,
  dayPickerProps: PropTypes.object.isRequired,
  style: PropTypes.object,
};

export default Day;
