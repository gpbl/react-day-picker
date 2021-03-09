import React from 'react';

import { SelectRangeContextValue } from 'types';

import { SelectRangeContext } from './SelectRangeContext';

/** Return the context for controlling the selections in the single selection mode. */
export function useSelectRange(): SelectRangeContextValue {
  const context = React.useContext(SelectRangeContext);
  if (!context) {
    throw new Error('useSelectRange must be used within a SelectRangeProvider');
  }
  return context;
}
