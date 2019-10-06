import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { prepareCaption } from './helpers';

function Caption({ month, dayPickerProps }) {
  const { locale } = dayPickerProps;
  const { props } = prepareCaption(dayPickerProps);
  return <caption {...props}>{format(month, 'LLLL yyyy', { locale })}</caption>;
}

Caption.propTypes = {
  month: PropTypes.instanceOf(Date).isRequired,
  dayPickerProps: PropTypes.object,
};

export default Caption;
