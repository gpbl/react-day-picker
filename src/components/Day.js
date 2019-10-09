import React from 'react';
import PropTypes from 'prop-types';

import { DateWithModifiers } from '../classes';
import { prepareDay } from './helpers';

function Day({ day, modifiers, dayPickerProps }) {
  const { locale, formatDay } = dayPickerProps;

  const { Container, htmlProps, wrapperHtmlProps } = prepareDay(
    day,
    modifiers,
    dayPickerProps
  );

  if (modifiers && modifiers.hidden) {
    return null;
  }

  return (
    <Container {...htmlProps}>
      <span {...wrapperHtmlProps}>{formatDay(day, { locale })}</span>
    </Container>
  );
}

Day.propTypes = {
  day: PropTypes.instanceOf(DateWithModifiers).isRequired,
  modifiers: PropTypes.shape({
    hidden: PropTypes.bool,
  }).isRequired,
  dayPickerProps: PropTypes.shape({
    locale: PropTypes.object.isRequired,
    formatDay: PropTypes.func.isRequired,
  }).isRequired,
  style: PropTypes.object,
};

export default Day;
