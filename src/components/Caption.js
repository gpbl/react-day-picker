import React from 'react';
import PropTypes from 'prop-types';

import { prepareCaption } from './helpers';

function Caption({ month, dayPickerProps }) {
  const { props } = prepareCaption(dayPickerProps);
  const { locale } = dayPickerProps;
  return (
    <caption {...props}>
      {dayPickerProps.formatCaption(month, { locale })}
    </caption>
  );
}

Caption.propTypes = {
  month: PropTypes.instanceOf(Date).isRequired,
  dayPickerProps: PropTypes.object,
};

export default Caption;
