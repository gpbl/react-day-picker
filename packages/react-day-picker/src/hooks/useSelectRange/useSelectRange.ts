import React from 'react';

import { SelectRange, SelectRangeContext } from './SelectRangeContext';

/** Return the context for controlling the selections in the single selection mode. */
export function useSelectRange(): SelectRange {
  const context = React.useContext(SelectRangeContext);
  if (!context) {
    throw new Error('useSelectRange must be used within a SelectRangeProvider');
  }
  return context;
}
