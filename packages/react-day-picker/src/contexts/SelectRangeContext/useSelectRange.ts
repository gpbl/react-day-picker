import * as React from 'react';

import { SelectRangeContext } from './SelectRangeContext';
import { SelectRangeContextValue } from './types';

/** Hook to access the [[SelectRangeContext]]. */
export function useSelectRange(): SelectRangeContextValue {
  const context = React.useContext(SelectRangeContext);
  if (!context) {
    throw new Error('useSelectRange must be used within a SelectRangeProvider');
  }
  return context;
}
