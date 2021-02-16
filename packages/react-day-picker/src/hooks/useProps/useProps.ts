import React from 'react';

import { PropsContext, PropsValues } from '../../components/DayPicker';

/**
 * Returns the props passed to DayPicker, merged with the defaults. Use this
 * hook to access the DayPicker props from the internal components.
 */
export function useProps(): PropsValues {
  return React.useContext(PropsContext);
}
