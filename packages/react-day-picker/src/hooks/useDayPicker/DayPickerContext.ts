import * as React from 'react';

import { DayPickerContextValue } from 'types';

/**
 * This context shares props and settings within the internal components. It set
 * the defaults values, parses some props, and perform one-time calculation
 * required to render the days.
 */

export const DayPickerContext = React.createContext<
  DayPickerContextValue | undefined
>(undefined);
