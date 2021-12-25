import { useContext } from 'react';

import {
  SelectRangeContext,
  SelectRangeContextValue
} from './SelectRangeContext';

/** Hook to access the [[SelectRangeContext]]. */
export function useSelectRange(): SelectRangeContextValue {
  const context = useContext(SelectRangeContext);
  if (!context) {
    throw new Error('useSelectRange must be used within a SelectRangeProvider');
  }
  return context;
}
